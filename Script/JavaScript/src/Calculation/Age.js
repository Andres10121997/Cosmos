"use strict";
/**
 * @function
 * @name CalculateAge
 * @param {Date} DateOfBirth
 * @returns {number}
*/
function CalculateAge(DateOfBirth) {
    // Objects.
    /**
     * @access private
     * @member
     * @constant
     * @type {Calculate}
     * @alias OCalculate
     */
    const OCalculate = new Calculate();
    return OCalculate.Age(DateOfBirth);
}
