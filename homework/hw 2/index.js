const playerJohn = [['height', 170], ['weight', 80], ['sport', 'regbi'], ['full name', 'John Doe']];

const obj = {};

const toObject = (arr) => {
    for(let i = 0; i < arr.length; i++){
        const key = arr[i][0];
        const value = arr[i][1];
        obj[key] = value;
    }
    return obj;
}

console.log(toObject(playerJohn));
