Number.prototype.isPrime = function() {
    for (let i=2; i <= Math.sqrt(this); i++){
        if (this % i === 0) {
            return false;
        }
    }
    return true;
}

const {performance} = require('perf_hooks');

const calculatePrime = (nthNum) => {
    
    if (nthNum < 3) {
        return nthNum;
    }
    
    let primeCount = 1;
    let num = 3;
    
    while (primeCount < nthNum) {
        if (num.isPrime()) {
            primeCount++;
        }
        num+=2;
    }
    return num-2
}

let start = performance.now();
// console.log(`The 10,000th prime number is ${calculatePrime(1e4)}`);
// console.log(`This took ${performance.now() - start} milliseconds to run.`);

// console.log(`The 100,000th prime number is ${calculatePrime(1e5)}`);
// console.log(`This took ${performance.now() - start} milliseconds to run.`);

// console.log(`The 1,000,000th prime number is ${calculatePrime(1e6)}`);
// console.log(`This took ${performance.now() - start} milliseconds to run.`);

const rFib = n => {
    if (n < 2) {
        return n
    }
    return rFib(n-1) + rFib(n-2)
}

const iFib = n => {
    //FASTER
    const vals = [0,1];
    while (vals.length-1 < n){
        let len = vals.length;
        vals.push(vals[len-1]+vals[len-2]);
    }
    return vals[n]
}

// start = performance.now();
// console.log(`The 20th number of the Fibonacci sequence is ${rFib(20)}`);
// console.log(`Recursive : This took ${performance.now() - start} milliseconds to run.`);

// start = performance.now();
// console.log(`The 20th number of the Fibonacci sequence is ${iFib(20)}`);
// console.log(`Iterative : This took ${performance.now() - start} milliseconds to run.`);

const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";

const reverseString = str => {
    let newStr = ""
    for (let i=str.lenght-1; i>=0; i-- ){
        newStr = srt[i]
    }
    return newStr
}

// start = performance.now();
// const reversed1 = story.split("").reverse().join("");
// console.log(`This took ${performance.now() - start} milliseconds to run.`);

start = performance.now();
reverseString(story);
console.log(`This took ${performance.now() - start} milliseconds to run.`);
