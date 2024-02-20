const playerJohn = {
    height: 170,
    weight: 80,
    sport: ['regbi','baseball','basketball'],
    'full name': 'John Doe',
}

const obj = {};

const objectToObjectAndTypes = (object) => {
    for(i in object){

        obj[i] = {
            value: object[i],
            typeOf: typeof object[i]
        };
        // obj[i] = typeof object[i];
    }
    return obj;
}

console.log(objectToObjectAndTypes(playerJohn));