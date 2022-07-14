/**
 * @class
 * @name Calculation
 * @classdesc Class to perform calculations.
 */
class Calculate
{
    // Constructor.
    /**
     * @hideconstructor
     * @returns {void}
     */
    constructor()
    {

    }



    /**
     * @access public
     * @method
     * @alias Calculation.Age
     * @param {Date} DateOfBirth This parameter receives the date of birth, in date format.
     * @returns {number}
     * @summary This method calculates age.
     */
    Age(DateOfBirth: Date): number
    {
        // Variables.
        /**
         * @access private
         * @member
         * @var
         * @type {number}
         * @alias Age
         */
        let Age: number;

        // Constants.
        /**
         * @access private
         * @member
         * @constant
         * @type {Array<boolean>}
         * @alias Validation
         */
        const Validation: Array<boolean> = new Array<boolean>(
            Boolean(Today().getMonth() < DateOfBirth.getMonth()),
            Boolean(Today().getMonth() === DateOfBirth.getMonth()) && Boolean(Today().getDate() < DateOfBirth.getDate())
        );

        // Initialization.
        Age = Number(Today().getFullYear() - DateOfBirth.getFullYear());



        Validation.forEach((value: boolean): void => {
            if (value === true)
            {
                Age--;
            }
        });

        return Age;
    }
}