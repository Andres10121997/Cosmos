/**
 * @function
 * @name InsertTime
 * @param {string} Id
 * @param {string} Type
 * @returns {Promise<void>}
 */
async function InsertTime(Id: string,
                          Type: string): Promise<void>
{
    return await new Promise<void>((): void => {
        // Object.
        /**
         * @access private
         * @member
         * @constant
         * @type {Clock}
         * @alias OClock
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


        if (OValidate.IsString(Id) === true &&
            OValidate.IsString(Type) === true)
        {
            if (Type.toLocaleLowerCase() === OClock.GetSize().Long.toLocaleLowerCase())
            {
                OClock.Insert(Id, OClock.GetClockInsert().Time, {
                    formatMatcher: `best fit`,
                    hour12: undefined,
                    hour: `numeric`,
                    minute: `numeric`,
                    second: `numeric`
                });
            }
            else
            if (Type.toLocaleLowerCase() === OClock.GetSize().Short.toLocaleLowerCase())
            {
                OClock.Insert(Id, OClock.GetClockInsert().Time, {
                    formatMatcher: `best fit`,
                    hour12: undefined,
                    hour: `numeric`,
                    minute: `numeric`
                });
            }
        }
    })
    .catch<void>((reason: any): void => {
        console.error(`---`);
        console.error(`Error InsertTime function.`);
        console.error(`Error: ${reason}`);
        console.error(`---`);
    });
}