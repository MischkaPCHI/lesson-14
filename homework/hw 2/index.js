const playerJohn = [['height', 170], ['weight', 80], ['sport', 'regbi'], ['full name', 'John Doe']];

const obj = [];

const toObject = (arr) => {
    for(let i = 0; i < arr.length; i++){
        obj[i] = arr[i]
    }
    return obj;
}

console.log(toObject(playerJohn));
