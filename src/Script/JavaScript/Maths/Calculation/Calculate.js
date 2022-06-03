"use strict";
/**
 * @class
 * @name Calculation
 * @classdesc Class to perform calculations.
 */
class Calculate {
    // Constructor.
    /**
     * @hideconstructor
     * @returns {void}
     */
    constructor() {
    }
    /**
     * @access public
     * @method
     * @alias Calculation.Age
     * @param {Date} DateOfBirth This parameter receives the date of birth, in date format.
     * @returns {number}
     * @summary This method calculates age.
     */
    Age(DateOfBirth) {
        // Variables.
        /**
         * @access private
         * @member
         * @var
         * @type {number}
         * @alias Age
         */
        let Age;
        // Constants.
        /**
         * @access private
         * @member
         * @constant
         * @type {Array<boolean>}
         * @alias Validation
         */
        const Validation = new Array(Boolean(Today().getMonth() < DateOfBirth.getMonth()), Boolean(Today().getMonth() === DateOfBirth.getMonth()) && Boolean(Today().getDate() < DateOfBirth.getDate()));
        // Initialization.
        Age = Today().getFullYear() - DateOfBirth.getFullYear();
        Validation.forEach((value) => {
            if (value === true) {
                Age--;
            }
        });
        return Age;
    }
}
