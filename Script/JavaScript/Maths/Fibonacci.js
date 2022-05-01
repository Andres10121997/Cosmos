"use strict";
/**
 * @function
 * @name Fibonacci
 * @param {number} num
 * @returns {number}
 */
function Fibonacci(num) {
    /**
     * @access private
     * @constant
     * @type {Array<number>}
     * @alias fib
     */
    const fib = [0, 1];
    for (let i = 2; i <= num; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[num];
}
