const arr = ['a', 36.6, 'John Doe'];

const obj = {};


const arrayObject = (array) => {
    for(let i = 0; i < array.length; i++){
        obj[array[i]] = array[i];
    }
    return obj;
}

console.log(arrayObject(arr));