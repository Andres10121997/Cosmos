/**
 * @function
 * @name InsertDate
 * @param {string} Id
 * @param {string} Type
 * @returns {Promise<void>}
 */
async function InsertDate(Id: string,
                          Type: string): Promise<void>
{
    await new Promise((): void => {
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



        if (OValidate.IsString(Id) == true &&
            OValidate.IsString(Type) === true)
        {
            if (Type.toLocaleLowerCase() === OClock.GetSize().Long.toLocaleLowerCase())
            {
                OClock.Insert(Id, OClock.GetClockInsert().Date, {
                    weekday: `long`,
                    year: `numeric`,
                    month: `long`,
                    day: `numeric`
                });
            }
            else
            if (Type.toLocaleLowerCase() === OClock.GetSize().Short.toLocaleLowerCase())
            {
                OClock.Insert(Id, OClock.GetClockInsert().Date, undefined);
            }
        }
    });
}