// Save this as fibonacci.js
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// const start = process.hrtime.bigint();
const result = fibonacci(35);
// const end = process.hrtime.bigint();

console.log(`Result: ${result}`);
// console.log(`Execution time: ${(end - start) / BigInt(1e6)} ms`);
