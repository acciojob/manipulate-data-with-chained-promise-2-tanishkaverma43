let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([1, 2, 3, 4]);
    }, 3000);
});

promise.then((array) => {
    return array.filter(num => num % 2 === 0);
}).then((array) => {
	return array.map(num => num*2);
});