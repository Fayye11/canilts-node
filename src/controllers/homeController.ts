import { Request, Response } from "express";
import { Pet } from '../models/pet';

import { createMenuObject } from '../helpers/createMenuObject';

export const home = (req: Request, res: Response)=> {
    const list = Pet.getAll;

    res.render('pages/home', {
        menu:  
        createMenuObject('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg',
        },
        list
    })
}
export const dogs = (req: Request, res: Response)=> {
    const list = Pet.getFromType('dog');
    res.render('pages/home', {
        menu:  
        createMenuObject('dog'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg',
        },
        list
    });
};
export const cats = (req: Request, res: Response)=> {
    const list = Pet.getFromType('cat');
    res.render('pages/home', {
        menu:  
        createMenuObject('cat'),
        banner: {
            title: 'Gatitos',
            background: 'banner_cat.jpg',
        },
        list
    })
}
export const fish = (req: Request, res: Response)=> {
    const list = Pet.getFromType('fish');
    res.render('pages/home', {
        menu:  
        createMenuObject('fishe'),
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg',
        },
        list
    })
}


