/**
 * @function
 * @name CalculateAge
 * @param {Date} DateOfBirth
 * @returns {number}
*/
function CalculateAge(DateOfBirth: Date): number
{
    // Objects.
    /**
     * @access private
     * @member
     * @constant
     * @type {Calculate}
     * @alias OCalculate
     */
    const OCalculate: Calculate = new Calculate();

    return OCalculate.Age(DateOfBirth);
}