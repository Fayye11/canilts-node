type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fishe'

export const createMenuObject = (activeMenu: MenuOptions)=> {
    let returnObjects = {
        all: false,
        dog: false,
        cat: false,
        fishe: false
    }
    if(activeMenu !== '') {
        returnObjects[activeMenu] = true
    }
    return returnObjects
}