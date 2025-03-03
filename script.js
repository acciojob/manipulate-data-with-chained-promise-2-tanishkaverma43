let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([1, 2, 3, 4]);
    }, 3000);
});

promise.then((array) => {
    let filteredArray = array.filter(num => num % 2 === 0);
    document.getElementById('output').innerText = filteredArray.toString();
    return filteredArray;
}).then((array) => {
    let doubledArray = array.map(num => num*2);
    document.getElementById('output').innerText = doubledArray.toString();
    return doubledArray;
});