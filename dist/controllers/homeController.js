"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fish = exports.cats = exports.dogs = exports.home = void 0;
const pet_1 = require("../models/pet");
const createMenuObject_1 = require("../helpers/createMenuObject");
const home = (req, res) => {
    const list = pet_1.Pet.getAll;
    res.render('pages/home', {
        menu: (0, createMenuObject_1.createMenuObject)('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg',
        },
        list
    });
};
exports.home = home;
const dogs = (req, res) => {
    const list = pet_1.Pet.getFromType('dog');
    res.render('pages/home', {
        menu: (0, createMenuObject_1.createMenuObject)('dog'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg',
        },
        list
    });
};
exports.dogs = dogs;
const cats = (req, res) => {
    const list = pet_1.Pet.getFromType('cat');
    res.render('pages/home', {
        menu: (0, createMenuObject_1.createMenuObject)('cat'),
        banner: {
            title: 'Gatitos',
            background: 'banner_cat.jpg',
        },
        list
    });
};
exports.cats = cats;
const fish = (req, res) => {
    const list = pet_1.Pet.getFromType('fish');
    res.render('pages/home', {
        menu: (0, createMenuObject_1.createMenuObject)('fishe'),
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg',
        },
        list
    });
};
exports.fish = fish;
