/**
 * @function
 * @name ValidationForm
 * @param {Array<string>} Id It is an Arrays that saves the IDs of the Inputs, TextArea, Select, among others.
 * @param {Array<number>} MaxLength
 * @param {Array<string>} DateType
 * @param {Array<boolean>} Require
 * @param {number} [MinimumAge]
 * @returns {boolean}
 * @summary This function is used to validate any form.
 */
function ValidationForm(Id: Array<string>,
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

    // Constants.
    /**
     * @access private
     * @member
     * @constant
     * @type {Array<boolean>}
     * @alias Comparison
     */
    const Comparison: Array<boolean> = new Array<boolean>(
        Boolean(Id.length !== MaxLength.length),
        Boolean(Id.length !== DateType.length),
        Boolean(Id.length !== Require.length)
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
    Comparison.forEach((value: boolean, i: number): (boolean | void) => {
        if (OValidate.IsBoolean(value) === false)
        {
            console.error(`The "Comparison" (${value} | ${(i + 1)}° position) is not a boolean.`);
            return false;
        }
    });

    Id.forEach((value: string, i: number): (boolean | void) => {
        const element = (document.getElementById(value) as HTMLElement);
        
        if (OValidate.IsString(value) === false)
        {
            console.error(`The "ID" (${value} | ${(i + 1)}° position) is not a string.`);
            return false;
        }
        else
        if (element.tagName.toLocaleLowerCase() !== FormType.Date.toLocaleLowerCase() &&
            element.tagName.toLocaleLowerCase() !== FormType.Input.toLocaleLowerCase() &&
            element.tagName.toLocaleLowerCase() !== FormType.Select.toLocaleLowerCase() &&
            element.tagName.toLocaleLowerCase() !== FormType.TextArea.toLocaleLowerCase())
        {
            return false;
        }
    });

    MaxLength.forEach((value: number, i: number): (boolean | void) => {
        if (OValidate.IsNumber(value) === false)
        {
            console.error(`The "MaxLength" (${value} | ${(i + 1)}° position) is not a number.`);
            return false;
        }
    });

    DateType.forEach((value: string, i: number): (boolean | void) => {
        if (OValidate.DateType(value) === false)
        {
            console.error(`The "DateType" (${value} | ${(i + 1)}° position) is not a string.`);
            return false;
        }
    });

    Require.forEach((value: boolean, i: number): (boolean | void) => {
        if (OValidate.IsBoolean(value) === false)
        {
            console.error(`The "Require" (${value} | ${(i + 1)}° position) is not a boolean.`);
            return false;
        }
    });



    Id.forEach((value: string, i: number): void => {
        const element: HTMLElement = (document.getElementById(value) as HTMLElement);

        if (element.tagName.toLocaleLowerCase() == FormType.Select.toLocaleLowerCase())
        {
            Count++;
        }
        else
        if ((element.tagName.toLocaleLowerCase() == FormType.Input.toLocaleLowerCase() ||
             element.tagName.toLocaleLowerCase() == FormType.Input.toLocaleLowerCase()) &&
            OValidate.Info(Id[i], Require[i], MaxLength[i]))
        {
            Count++;
        }
        else
        if (element.tagName.toLocaleLowerCase() == FormType.Date &&
            DateType[i] === dateOptions.DateOfBirth &&
            OValidate.DateOfBirth(Id[i], MinimumAge))
        {
            Count++;
        }
    });


    if (Count === Id.length)
    {
        return true;
    }
    else
    {
        return false;
    }
}