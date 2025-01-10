// const arr = ['femi', 'jide', 'tola', 'bola', 'kola'];
const arr =  ['one', ]
const test = () => { 
    return arr.reduce((acc, curr) => {
        (acc[curr] = (arr[curr] || 0) + 1);
        return acc;
    }, {})
}

console.log(test());