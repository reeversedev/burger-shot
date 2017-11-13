var express = require('express');
var router = express.Router();
var multer = require('multer');

var User = require('../models/user');
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
router.get('/products/:id', function (req, res, next) {
    var productId = req.params.id;
    Product.findById(productId, function (err, product) {
        if (err) {
            console.log(err);
        }
        res.render('product/product', {
            productTitle: product.title,
            productImage: product.imagePath,
            productPrice: product.price,
            productDescription: product.description,
            productCompany: product.company,
            productSeller: product.seller,
            productGenre: product.genre,
            productPlatforms: product.platforms,
            productDelievery: product.delievery,
            productRequirements: product.requirements,
            productRelease: product.release,
            productDimensions: product.dimensions
        });
    })
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
    User.find({
        firstname: req.firstname,
        lastname: req.lastname
    }, function (err, user) {
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
            noError: !errMsg,
            firstname: req.user.firstname,
            lastname: req.user.lastname,
            address: req.user.address
        });
    });
});

router.post('/checkout', isLoggedIn, function (req, res, next) {
    if (!req.session.cart) {
        return res.redirect('/cart');
    }
    var cart = new Cart(req.session.cart);

    var stripe = require('stripe')
        ('sk_test_vmru1iNMINJZLWXyPU5fomxW');
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



module.exports = router;

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated) {
        return next();
    }
    req.session.oldOrl = req.url;
    res.redirect('/user/signin');
}