/**
 * @class
 * @name Mathematics
 * @classdesc
 */
class Mathematics
{
    #OValidation: Validation = new Validation();
    
    // Constructor.
    /**
     * @hideconstructor
     * @returns {void}
     */
    constructor ()
    {

    }

    

    /**
     * @access public
     * @method
     * @alias Mathematics.Age
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

            Boolean(Today().getMonth() === DateOfBirth.getMonth()) &&
            Boolean(Today().getDate() < DateOfBirth.getDate())
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

    /**
     * @access public
     * @method
     * @alias Mathematics.Fibonacci
     * @param {number} num
     * @returns {number}
     */
    Fibonacci(num: number): number
    {
        if (this.#OValidation.IsNumber(num) === true)
        {
            /**
             * @access private
             * @constant
             * @type {Array<number>}
             * @alias fibonacci
             */
            const fibonacci: Array<number> = new Array<number>(0, 1);

            for(let i = 2; i <= num; i++)
            {
                fibonacci[i] = Number(fibonacci[i - 1] + fibonacci[i - 2]);
            }

            return fibonacci[num];
        }
        else
        {
            return NaN;
        }
    }
}