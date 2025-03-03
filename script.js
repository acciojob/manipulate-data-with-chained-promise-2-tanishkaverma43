let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([1, 2, 3, 4]);
    }, 0);
});

promise.then((array) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let filteredArray = array.filter(num => num % 2 === 0);
            document.getElementById('output').innerText = filteredArray.toString();
            resolve(filteredArray);
        }, 1000);
    });
}).then((array) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let doubledArray = array.map(num => num*2);
            document.getElementById('output').innerText = doubledArray.toString();
            resolve(doubledArray);
        }, 2000);
    });
});