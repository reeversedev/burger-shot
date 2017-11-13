var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    imagePath: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    requirements: {
        os: {
            type: String,
            required: true
        },
        processor: {
            type: String,
            required: true,
        },
        memory: {
            type: String,
            required: true
        },
        gpu: {
            type: String,
            required: true
        },
        sound_card: {
            type: String,
            required: true
        },
        hard_drive: {
            type: String,
            required: true,
        },
        dvd: {
            type: String,
            required: true
        }
    },
    seller: {
        type: String,
        required: true
    },
    platforms: {
        type: Array,
        required: true
    },
    totalItems: {
        type: Number,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    delievery: {
        type: Number,
        required: true
    },
    release: {
        type: String,
        required:true
    },
    dimensions: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Product', schema);