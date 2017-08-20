var express = require('express');
var router = express.Router();
var multer = require('multer');
var fs = require('fs');
var S3FS = require('s3fs');
var upload = multer({
    dest: 'uploads'
})
var S3fsImpl = new S3FS('game-shot', {
    region: 'us-west-2',
    accessKeyId: 'AKIAIYX566ZQH3IFSUVA',
    secretAccessKey: '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'
});
var Cart = require('../models/cart');
var Product = require('../models/product');
var Order = require('../models/order');

/*GET home page. */
router.get('/', function (req, res, next) {
    Product.find(function (err, docs) {
        var productChunks = [];
        var chunkSize = 3;
        for (var i = 0; i < docs.length; i += chunkSize) {
            productChunks.push(docs.slice(i, i + chunkSize));
        }
        res.render('shop/index', {
            title: 'Game Shot!',
            products: productChunks
        });
    })
});
router.get('/cart', function (req, res, next) {
    if (!req.session.cart) {
        return res.render('shop/cart', {
            products: null
        });
    }
    var cart = new Cart(req.session.cart);
    res.render('shop/cart', {
        products: cart.generateArray(),
        totalPrice: cart.totalPrice
    });
});
router.get('/add-to-cart/:id', function (req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    Product.findById(productId, function (err, product) {
        if (err) {
            return res.redirect('/');
        }
        cart.add(product, product.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect('/');
    });
});
router.get('/reduce/:id', function (req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    cart.reduceByOne(productId);
    req.session.cart = cart;
    res.redirect('/cart');
});

router.get('/remove/:id', function (req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    cart.removeItem(productId);
    req.session.cart = cart;
    res.redirect('/cart');
});

router.get('/checkout', isLoggedIn, function (req, res, next) {
    if (!req.session.cart) {
        return res.render('/cart', {
            products: null
        });
    }
    var cart = new Cart(req.session.cart);
    var errMsg = req.flash('error')[0];
    res.render('shop/checkout', {
        total: cart.totalPrice,
        errMsg: errMsg,
        noError: !errMsg
    });
});

router.post('/checkout', isLoggedIn, function (req, res, next) {
    if (!req.session.cart) {
        return res.redirect('/cart');
    }
    var cart = new Cart(req.session.cart);

    var stripe = require('stripe')
        ('sk_test_ZxDUVHHXusTFsONcvqSFhxdu');
    stripe.charges.create({
        amount: (cart.totalPrice % 50) * 100,
        currency: "cad",
        description: "Example charge",
        source: req.body.stripeToken,
    }, function (err, charge) {
        if (err) {
            req.flash('error', err.message);
            return res.redirect('/checkout');
        }
        var order = new Order({
            user: req.user,
            cart: cart,
            address: req.body.address,
            name: req.body.name,
            paymentId: charge.id
        });
        order.save(function (err, result) {
            req.flash('success', 'Successfully bought product!');
            req.session.cart = null;
            res.redirect('/');
        });
    });
});

router.get('/baap/sabkamalikek', function (req, res, next) {
    res.render('admin/administrator');
});

router.post('/baap/sabkamalikek', upload.single('file'), function (req, res, next) {
    var file = req.file;
    console.log(file);
    console.log(file.path);

    var stream = fs.createReadStream(file.path);

    S3fsImpl.writeFile(file.originalname, stream).then(function () {
        var filePath = S3fsImpl.getPath(file.originalname);
        var realPath = 'https://s3-us-west-2.amazonaws.com/' + filePath;
        console.log(realPath);
        
        console.log('File has been sent - OK');
    })
    var product = new Product({
        imagePath: 'https://s3-us-west-2.amazonaws.com/game-shot/' + file.originalname,
        title: req.body.title,
        price: req.body.price,
        description: req.body.description
    });
    product.save(function (err, result) {
        console.log('Item saved to database.', product);
        req.flash('success', 'Item added successfully');
        res.redirect('/baap/sabkamalikek');
    });
});
module.exports = router;

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated) {
        return next();
    }
    req.session.oldOrl = req.url;
    res.redirect('/user/signin');
}