/**
 * @function
 * @name Fibonacci
 * @param {number} num 
 * @returns {number}
 */
function Fibonacci(num: number): number
{
    /**
     * @access private
     * @constant
     * @type {Array<number>}
     * @alias fib
     */
    const fibonacci: Array<number> = [0, 1];

    for(let i = 2; i <= num; i++)
    {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    return fibonacci[num];
}