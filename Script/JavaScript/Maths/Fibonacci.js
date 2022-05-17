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
    const fibonacci = [0, 1];
    for (let i = 2; i <= num; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    return fibonacci[num];
}
