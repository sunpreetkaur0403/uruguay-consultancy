const arr = [];

for (let i = 1; i < 100; i++) {
    arr.push(i);
}

// for loop
const loadData = async () => {
    const start = new Date();

    for (let i = 0; i < arr.length; i++) {
        await fetch(`https://jsonplaceholder.typicode.com/todos/${arr[i]}`);
    }

    const end = new Date();

    console.log("With a for loop:", end - start);
};

// Promise.all

const loadDataWithPromiseAll = async () => {
    const start = new Date();

    const promises = arr.map((num) =>
        fetch(`https://jsonplaceholder.typicode.com/todos/${num}`)
    );

    const result = await Promise.all(promises);

    const end = new Date();

    console.log("With promise all:", end - start);
};

loadData();
loadDataWithPromiseAll();