"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMenuObject = void 0;
const createMenuObject = (activeMenu) => {
    let returnObjects = {
        all: false,
        dog: false,
        cat: false,
        fishe: false
    };
    if (activeMenu !== '') {
        returnObjects[activeMenu] = true;
    }
    return returnObjects;
};
exports.createMenuObject = createMenuObject;
