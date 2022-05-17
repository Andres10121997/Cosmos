/**
 * @function
 * @name InsertDate
 * @param {string} Id
 * @param {string} Type
 * @returns {void}
 */
function InsertDate(Id: string,
                    Type: string): void
{
    // Object.
    /**
     * @access private
     * @member
     * @constant
     * @type {Clock}
     * @alias clock
    */
    const OClock: Clock = new Clock();

    /**
     * @access private
     * @member
     * @constant
     * @type {Validation}
     * @alias OValidate
     */
    const OValidate: Validation = new Validation();



    if (OValidate.IsString(Id) &&
        OValidate.IsString(Type) === true)
    {
        if (Type === OClock.GetSize().Long)
        {
            OClock.Insert(Id, OClock.GetClockInsert().Date, {
                weekday: `long`,
                year: `numeric`,
                month: `long`,
                day: `numeric`
            });
        }
        else
        if (Type === OClock.GetSize().Short)
        {
            OClock.Insert(Id, OClock.GetClockInsert().Date, undefined);
        }
    }
}