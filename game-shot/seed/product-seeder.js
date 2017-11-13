var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://test:test@ds023373.mlab.com:23373/games');

var products = [
    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/91E4eQzQGLL._SL1500_.jpg',
        title: 'Call of Duty: Ghosts (PS3)',
        company: 'ACTIVISION',
        genre: 'Action, Shooting',
        description: "The Call of Duty: Ghosts forms the tenth instalment of the popular video game collection and follows a new game plot. The game series has been branded as one of the fiercest games from the stables of Infinity Ward. Set in an era where the Unites States of America has been swallowed into a dark zone of annoyance and death, the Ghosts are ready to trouble the current generation systems as well as the next-gen gaming consoles.",
        price: 95,
        requirements: {
            os: 'Windows 7 / Vista / XP / Me / 2000',
            processor: 'Core 2 Duo or Higher',
            memory: '4 GB',
            gpu: 'Nvida GTX 1800',
            sound_card: 'Realtek',
            hard_drive: '30 GB',
            dvd: 'required'
        },
        seller: 'Cloudtail India',
        platforms: 'PC',
        totalItems: 20,
        age: 18,
        delievery: 2,
        release: '4 November 2014',
        dimensions: '222 g'
    }),
    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/91V8OkiySYL._SL1500_.jpg',
        title: 'Max Payne 3 (PC)',
        company: 'Rockstar Games',
        genre: 'Action, Shooting, Story',
        description: "The Max Payne 3 PC video game was developed primarily by Rockstar Vancouver and was published by Rockstar Games. This third-person shooter video game was released in May 2012. It is the third in the Max Payne series, after Max Payne 2: The Fall of Max Payne. In this third game, the player assumes the role of Max Payne, who is a former NYPD detective. Set nine years after the incidents of the previous game, this game focuses on the difficult situations encountered by Max. The online multi-player mode of the Max Payne 3 PC game engages up to 16 players in co-operative and competitive game play. Designed with a wide array of high-powered weaponry, incredible visuals and amazing sound, the exciting and thrilling PC Max Payne 3 game is sure to keep you engrossed for a long time.",
        price: 478,
        requirements: {
            os: 'Windows 7 or Higher',
            processor: 'Core i3 or Higher',
            memory: '4 GB',
            gpu: 'Nvidia GeForce 480 or Higher',
            sound_card: 'Realtek',
            hard_drive: '30 GB',
            dvd: 'required'
        },
        seller: 'Beyond Toys and Gifts',
        platforms: 'PC',
        totalItems: 25,
        age: 18,
        delievery: 3,
        release: '15 May 2012',
        dimensions: '150 g'
    }),
    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/81DQN1kaTXL._SL1500_.jpg',
        title: 'Watch Dogs',
        company: 'Ubisoft',
        genre: 'Open World',
        description: "All it takes is the swipe of a finger. We connect with friends. We buy the latest gadgets and gear. We find out what’s happening in the world. But with that same simple swipe, we cast an increasingly expansive shadow. With each connection, we leave a digital trail that tracks our every move and milestone, our every like and dislike. And it’s not just people. Today, all major cities are networked. Urban infrastructures are monitored and controlled by complex operating systems.",
        price: 1299,
        requirements: {
            os: 'Windows Vista (SP2), Windows 7 (SP1) or Windows 8 (Please note that we only support 64 bit OSs.',
            processor: 'Intel Core 2 Quad Q8400 @ 2.66Ghz or AMD Phenom II X4 940 @ 3.0Ghz',
            memory: '6 GB RAM',
            gpu: 'DirectX 11 Graphics Card with 1 GB Video RAM',
            sound_card: 'Direct x 9.0c Compatible Sound card',
            hard_drive: '25 GB available space.',
            dvd: 'required'
        },
        seller: 'Cloudtail India',
        platforms: 'PC',
        totalItems: 20,
        age: 18,
        delievery: 2,
        release: '26 May 2014',
        dimensions: '159 g'
    }),
    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/91Fov-yed%2BL._SL1500_.jpg',
        title: 'Battlefield 4 - Standard Edition',
        company: 'Activision',
        genre: 'Shooting, Adventure',
        description: "There are moments in the battlefield where game and glory are not clearly defined. Gear up to experience those adrenaline-fuelled moments with the Battlefield 4 - Standard Edition (PC) Video Game. This genre-defining action blockbuster is backed by the powerful Frostbite 3 game engine to deliver a dynamic battling experience that any game has hardly produced. The next generation engine delivers brilliant audio and video fidelity coupled with splendid animations and graphics, all running smooth at 60 FPS.",
        price: 1150,
        requirements: {
            os: 'Windows 7 / Vista / XP / Me / 2000',
            processor: 'Core 2 Duo or Higher',
            memory: '4 GB',
            gpu: 'Nvidia GeForce 740 or Higher',
            sound_card: 'Direct x 9.0 Compatible Sound Card',
            hard_drive: '20 GB',
            dvd: 'required'
        },
        seller: 'Beyond Toys And Gifts',
        platforms: 'PC',
        totalItems: 20,
        age: 18,
        delievery: 4,
        release: '29th October 2013',
        dimensions: '150 g'
    }),
    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/91zMgRXuWBL._SL1500_.jpg',
        title: "Assassin's Creed Brotherhood",
        company: 'Ubisoft',
        genre: 'Action, Story, Fighting',
        description: "Live and breathe as Ezio, a legendary Master Assassin, in his enduring struggle against the powerful Templar Order. He must journey into Italy's greatest city, Rome, center of power, greed and corruption to strike at the heart of the enemy. Defeating the corrupt tyrants entrenched there will require not only strength, but leadership, as Ezio commands an entire Brotherhood who will rally to his side. Only by working together can the Assassins defeat their mortal enemies. And for the first time, introducing a never-before-seen multiplayer layer that allows you to choose from a wide range of unique characters, each with their own signature weapons and assassination techniques, and match your skills against other players from around the world.",
        price: 264,
        requirements: {
            os: ' Windows 7 / Vista / XP / Me / 2000',
            processor: 'Core 2 Quad or Higher',
            memory: '3 GB',
            gpu: 'Nvidia 200 series or Higher',
            sound_card: 'Direct x 9.0 Compatible Card',
            hard_drive: '20 GB',
            dvd: 'required'
        },
        seller: 'Cloudtail India',
        platforms: 'PC',
        totalItems: 10,
        age: 18,
        delievery: 2,
        release: '18th March 2011',
        dimensions: '91 g'
    }),
    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/71Tfsc%2BpTwL._SL1151_.jpg',
        title: 'The Witcher 2: Assassins of Kings Enhanced Edition',
        company: 'CD Projekt Red',
        genre: 'Action, Open World, Adventure',
        description: "The player is Geralt of Rivia, a professional monster slayer, a witcher. Entangled in the political turmoil that engulfed Temeria, Geralt helped quell the rebellion of the Order of the Flaming Rose. Soon after, he saved King Foltest’s life when the monarch was attacked by a witcher-like assassin. He continues to protect the king, serving as his bodyguard as Foltest strives to bring peace to his kingdom. The Order’s last bastions have yielded to the royal army, yet one more task remains - the Baroness La Valette announced her secession from the realm, and her fortress must be taken. A month after the attempted assassination, Foltest’s armies stand at the gates of La Valette Castle, preparing for a final assault. Still at Foltest’s side, Geralt is among them, unable to begin his personal quest to discover the mysterious assassin’s origin and identity.",
        price: 79,
        requirements: {
            os: 'Windows 7 or Higher',
            processor: 'Core 2 Duo or higher',
            memory: '4 GB',
            gpu: 'Nvidia 600 series or higher',
            sound_card: 'Direct x 9.0 compatible sound card',
            hard_drive: '30 GB',
            dvd: 'required'
        },
        seller: 'G2A India',
        platforms: 'PC',
        totalItems: 20,
        age: 18,
        delievery: 3,
        release: '17th May 2011',
        dimensions: '18 g'
    }),
    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/919ARBaPuRL._SL1500_.jpg',
        title: 'Call of Duty: WWII',
        company: 'Activision',
        genre: 'Shooting, Adventure',
        description: "Call of Duty: WWII creates the definitive World War II next generation experience across three different game modes: Campaign, Multiplayer, and Co-Operative. Featuring stunning visuals, the Campaign transports players to the European theatre as they engage in an all-new Call of Duty story set in iconic World War II battles. Multiplayer marks a return to original, boots-on-the ground Call of Duty gameplay. Authentic weapons and traditional run-and-gun action immerse you in a vast array of World War II–themed locations. The Co-Operative mode unleashes a new and original story in a standalone game experience full of unexpected, adrenaline-pumping moments.",
        price: 3799,
        requirements: {
            os: 'Windows 7 or Higher',
            processor: 'Core 2 Duo or Higher',
            memory: '6 GB',
            gpu: 'Nvidia 800 series or higher',
            sound_card: 'Direct x 9.0 or higher',
            hard_drive: '60 GB',
            dvd: 'required'
        },
        seller: 'Cloudtail India',
        platforms: 'PC',
        totalItems: 50,
        age: 18,
        delievery: 4,
        release: '3rd November 2017',
        dimensions: '231 g'
    }),
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function (err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}