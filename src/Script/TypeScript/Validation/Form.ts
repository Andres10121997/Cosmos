/**
 * @function
 * @name ValidationForm
 * @param {Array<string>} ID It is an Arrays that saves the IDs of the Inputs, TextArea, Select, among others.
 * @param {Array<number>} MaxLength
 * @param {Array<string>} DateType
 * @param {Array<boolean>} Require
 * @param {number} [MinimumAge]
 * @returns {boolean}
 * @summary This function is used to validate any form.
 */
function ValidationForm(ID: Array<string>,
                        MaxLength: Array<number>,
                        DateType: Array<string>,
                        Require: Array<boolean>,
                        MinimumAge: number = NaN): boolean
{
    // Variable.
    /**
     * @access private
     * @member
     * @var
     * @type {number}
     * @alias Count
     */
    let Count: number;
    
    /**
     * @access private
     * @member
     * @var
     * @type {HTMLElement}
     * @alias element
     */
    let element: HTMLElement;

    // Constants.
    /**
     * @access private
     * @member
     * @constant
     * @type {Array<boolean>}
     * @alias LengthComparison
     */
    const LengthComparison: Array<boolean> = new Array<boolean>(
        Boolean(ID.length !== MaxLength.length),
        Boolean(ID.length !== DateType.length),
        Boolean(ID.length !== Require.length)
    );

    // Objects.
    /**
     * @access private
     * @member
     * @constant
     * @type {Validation}
     * @alias OValidate
     */
    const OValidate: Validation = new Validation();

    // Initialization.
    Count = 0;



    // Validation.
    LengthComparison.forEach((value: boolean, i: number): (boolean | void) => {
        if (OValidate.IsBoolean(value) === false)
        {
            console.error(`---`);
            console.error(`The "Comparison" (${value} | ${(i + 1)}° position) is not a boolean.`);
            console.error(`---`);
            return false;
        }
        else
        if (value === false)
        {
            return false;
        }
    });

    ID.forEach((value: string, i: number): (boolean | void) => {
        element = (document.getElementById(value) as HTMLElement);
        
        if (OValidate.IsString(value) === false)
        {
            console.error(`---`);
            console.error(`The "ID" (${value} | ${(i + 1)}° position) is not a string.`);
            console.error(`---`);
            return false;
        }
        else
        if (element.tagName.toLocaleLowerCase() !== FormType.Date.toLocaleLowerCase() &&
            element.tagName.toLocaleLowerCase() !== FormType.Input.toLocaleLowerCase() &&
            element.tagName.toLocaleLowerCase() !== FormType.Select.toLocaleLowerCase() &&
            element.tagName.toLocaleLowerCase() !== FormType.TextArea.toLocaleLowerCase())
        {
            console.error(`---`);
            console.error(`The tag with the id id "${value}" (${i + 1}° position of the array) does not match.`);
            console.error(`---`);
            return false;
        }
    });

    MaxLength.forEach((value: number, i: number): (boolean | void) => {
        if (OValidate.IsNumber(value) === false)
        {
            console.error(`---`);
            console.error(`The "MaxLength" (${value} | ${(i + 1)}° position) is not a number.`);
            console.error(`---`);
            return false;
        }
    });

    DateType.forEach((value: string, i: number): (boolean | void) => {
        if (OValidate.DateType(value) === false)
        {
            console.error(`---`);
            console.error(`The "DateType" (${value} | ${(i + 1)}° position) is not a string.`);
            console.error(`---`);
            return false;
        }
    });

    Require.forEach((value: boolean, i: number): (boolean | void) => {
        if (OValidate.IsBoolean(value) === false)
        {
            console.error(`---`);
            console.error(`The "Require" (${value} | ${(i + 1)}° position) is not a boolean.`);
            console.error(`---`);
            return false;
        }
    });



    ID.forEach((value: string, i: number): void => {
        element = (document.getElementById(value) as HTMLElement);

        if (element.tagName.toLocaleLowerCase() === FormType.Select.toLocaleLowerCase())
        {
            Count++;
        }
        else
        if ((element.tagName.toLocaleLowerCase() === FormType.Input.toLocaleLowerCase() ||
             element.tagName.toLocaleLowerCase() === FormType.Input.toLocaleLowerCase()) &&
            OValidate.Info(value, Require[i], MaxLength[i]))
        {
            Count++;
        }
        else
        if (element.tagName.toLocaleLowerCase() === FormType.Date &&
            DateType[i] === dateOptions.DateOfBirth &&
            OValidate.DateOfBirth(value, MinimumAge))
        {
            Count++;
        }
    });

    

    if (Count === ID.length)
    {
        return true;
    }
    else
    {
        return false;
    }
}