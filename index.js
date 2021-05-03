// Code your solutions in this file
const writeCards = (strings, eventNames) => {
    let array = [];
    for (let i = 0; i < strings.length; i++) {
        
        array.push(`Thank you, ${strings[i]}, for the wonderful ${eventNames} gift!`);
        
    }
    return array;
}

const countDown = () => {
    let i = 10;
    while (i >=0){
        console.log(i--)
    }
}