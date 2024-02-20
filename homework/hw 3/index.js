const playerJohn = {
    height: 170,
    weight: 80,
    sport: ['regbi','baseball','basketball'],
    'full name': 'John Doe',
}

const result = [];

const object = (obj) => {
    
    for(i in obj){
        result.push(obj[i]);
    }
    return result.join(', ');
}

console.log(object(playerJohn));