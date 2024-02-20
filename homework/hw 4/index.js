const playerJohn = {
    height: 170,
    weight: 80,
    sport: ['regbi','baseball','basketball'],
    'full name': 'John Doe',
}

const obj = {};

const objectToObject = (object) => {
    for(i in object){
        obj[i] = typeof object[i];
    }
    return obj;
}

console.log(objectToObject(playerJohn));