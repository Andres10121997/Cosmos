/**
 * @async
 * @function
 * @name InsertClockTimeAsync
 * @param {string} Id
 * @param {string} Type
 * @returns {Promise<void>}
 */
async function InsertClockTimeAsync(Id: string,
                                    Type: string): Promise<void>
{
    return await new Promise<void>(async (): Promise<void> => {
        // Object.
        /**
         * @access private
         * @member
         * @constant
         * @type {Clock}
         * @alias OClock
         */
        const OClock: Clock = new Clock(Id);

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
                await OClock.Insert(OClock.GetClockInsert().Time, {
                    formatMatcher: `best fit`,
                    hour12: undefined,
                    hour: `numeric`,
                    minute: `numeric`,
                    second: `numeric`
                })
                .catch((reason: any): void => {
                    console.error(`---`);
                    console.error(`Error InsertClockTime function.`);
                    console.error(`Error calling method "OClock.Insert".`);
                    console.error(`Error: ${reason}`);
                    console.error(`---`);
                });
            }
            else
            if (Type.toLocaleLowerCase() === OClock.GetSize().Short.toLocaleLowerCase())
            {
                await OClock.Insert(OClock.GetClockInsert().Time, {
                    formatMatcher: `best fit`,
                    hour12: undefined,
                    hour: `numeric`,
                    minute: `numeric`
                })
                .catch((reason: any): void => {
                    console.error(`---`);
                    console.error(`Error InsertClockTime function.`);
                    console.error(`Error calling method "OClock.Insert".`);
                    console.error(`Error: ${reason}`);
                    console.error(`---`);
                });
            }
        }
    })
    .catch<void>((reason: any): void => {
        console.error(`---`);
        console.error(`Error InsertClockTime function.`);
        console.error(`Error: ${reason}`);
        console.error(`---`);
    });
}