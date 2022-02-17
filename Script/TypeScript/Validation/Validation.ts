/**
 * @class
 * @name Validation
 */
class Validation
{
    // Constructor.
    /**
     * @hideconstructor
     * @returns {void}
     */
    constructor()
    {

    }



    // Validations.
    /**
     * @access public
     * @method
     * @alias Validation.IsBoolean
     * @param {boolean} Element
     * @returns {boolean}
     */
    IsBoolean(value: boolean): boolean
    {
        if (typeof (value) !== `boolean`)
        {
            return false;
        }
        else
        if (this.IsNotEmpty(String(value)) === false)
        {
            return false;
        }
        else
        {
            return true;
        }
    }

    /**
     * @access public
     * @method
     * @alias Validation.IsNumber
     * @param {number} Element
     * @returns {boolean}
     */
    IsNumber(Element: number): boolean
    {
        if (typeof (Element) !== `number`)
        {
            return false;
        }
        else
        if (this.IsNotEmpty(Element.toString()) === false)
        {
            return false;
        }
        else
        {
            return true;
        }
    }

    /**
     * @access public
     * @method
     * @alias IsRegularExpression
     * @param {RegExp} RegularExpression
     * @returns {boolean}
     */
    IsRegularExpression(RegularExpression: RegExp): boolean
    {
        if (typeof (RegularExpression) !== `object`)
        {
            return false;
        }
        else
        {
            return true;
        }
    }

    /**
     * @access public
     * @method
     * @alias Validation.IsString
     * @param {string} Element
     * @returns {boolean}
     */
    IsString(Element: string): boolean
    {
        if (typeof (Element) !== `string`)
        {
            console.error(`The element "${Element}" is not a string.`);
            return false;
        }
        else
        if (this.IsNotEmpty(Element) === false)
        {
            return false;
        }
        else
        if (Element.length < 0)
        {
            return false;
        }
        else
        {
            return true;
        }
    }

    /**
     * @access public
     * @method
     * @alias Validation.Age
     * @param {number} Age
     * @returns {boolean}
     */
    Age(Age: number): boolean
    {
        if (this.IsNumber(Age) === false)
        {
            return false;
        }
        else
        if (Age < 0)
        {
            return false;
        }
        else
        {
            return true;
        }
    }

    /**
     * @access public
     * @method
     * @alias Validation.DateOfBirth
     * @param {string} Id
     * @param {number} [MinimumAge] This parameter refers to the minimum age that the user will be able to do something, for example, register.
     * @returns {boolean}
     */
    DateOfBirth(Id: string,
                       MinimumAge: number = 0): boolean
    {
        // Constants.
        /**
         * @access private
         * @member
         * @constant
         * @type {string}
         * @alias information
        */
        const information: string = (document.getElementById(Id) as HTMLDataElement).value;

        /**
         * @access private
         * @member
         * @constant
         * @type {Date}
         * @alias DateOfBirth
         */
        const DateOfBirth: Date = new Date(information);

        /**
         * @access private
         * @member
         * @constant
         * @type {number}
         * @alias age
         */
        const age: number = CalculateAge(DateOfBirth);



        if (this.IsString(DateOfBirth.toString()) === false)
        {
            return false;
        }
        else
        if (DateOfBirth > Today())
        {
            return false;
        }
        else
        if (this.IsNumber(age) === false)
        {
            return false;
        }
        else
        if (age < MinimumAge ||
            age > 100)
        {
            return false;
        }
        else
        {
            return true;
        }
    }

    /**
     * @access public
     * @method
     * @alias DateType
     * @param {string} dateType
     * @returns {boolean}
     */
    DateType(dateType: string): boolean
    {
        // Constants.
        /**
         * @access private
         * @member
         * @constant
         * @type {Array<string>}
         * @alias DateType
        */
        const DateType: Array<string> = new Array<string>(dateOptions.DateOfBirth, dateOptions.None);



        if (this.IsString(dateType) === false)
        {
            console.error(`The Date Type "${dateType}" is not a string.`);
            return false;
        }
        else
        if (dateType !== DateType[0] &&
            dateType !== DateType[1])
        {
            console.error(`There are only 2 options for date_type, which are:`);

            DateType.forEach((value: string, i: number): void => {
                console.error(`${(i + 1)}) ${value}`);
            });

            return false;
        }
        else
        {
            return true;
        }
    }

    /**
     * @access public
     * @method
     * @alias Validation.Info
     * @param {string} Id
     * @param {boolean} IsRequired
     * @param {number} [MaxLength]
     * @returns {boolean}
     */
    Info(Id: string,
                IsRequired: boolean,
                MaxLength: number = NaN): boolean
    {
        // Constants.
        /**
         * @access private
         * @member
         * @constant
         * @type {string}
         * @alias info
        */
        const information: string = (document.getElementById(Id) as HTMLDataElement).value;



        if (this.IsString(Id) === false ||
            this.IsString(information) === false ||
            this.IsNumber(MaxLength) === false)
        {
            return false;
        }
        else
        if (information.length < 0)
        {
            console.error(`The number of characters in the word "${information}" cannot be less than 0.`);
            return false;
        }
        else
        if ((information.length === 0 ||
            information.length > MaxLength) &&
            IsRequired === true)
        {
            console.error(`The number od characters in the word "${information} cannot be less than ${MaxLength}".`);
            return false;
        }
        else
        {
            return true;
        }
    }

    /**
     * @access public
     * @method
     * @alias Validation.Select
     * @param {string} Id
     * @returns {boolean}
     */
    Select(Id: string): boolean
    {
        // Constants.
        /**
         * @access private
         * @member
         * @constant
         * @type {string}
         * @access information
        */
        const information: string = (document.getElementById(Id) as HTMLDataElement).value;



        if (this.IsNumber(parseInt(information)) === false)
        {
            return false;
        }
        else
        if (parseInt(information) < 0)
        {
            return false;
        }
        else
        {
            return true;
        }
    }

    /**
     * @access public
     * @method
     * @alias Validation.IsNotEmpty
     * @param {string} Element
     * @returns {boolean}
     */
    IsNotEmpty(Element: string): boolean
    {
        if (Element === null ||
            Element === undefined ||
            Element === void 0 ||
            Element === ``)
        {
            return false;
        }
        else
        {
            return true;
        }
    }
}