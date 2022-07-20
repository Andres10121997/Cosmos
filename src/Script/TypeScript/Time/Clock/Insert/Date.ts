/**
 * @async
 * @function
 * @name InsertClockDateAsync
 * @param {string} Id
 * @param {string} Type
 * @returns {Promise<void>}
 */
async function InsertClockDateAsync(Id: string,
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
                await OClock.Insert(OClock.GetClockInsert().Date, {
                    weekday: `long`,
                    year: `numeric`,
                    month: `long`,
                    day: `numeric`
                })
                .catch((reason: any): void => {
                    console.error(`---`);
                    console.error(`Error InsertClockDate function.`);
                    console.error(`Error calling method "OClock.Insert".`);
                    console.error(`Error: ${reason}`);
                    console.error(`---`);
                });
            }
            else
            if (Type.toLocaleLowerCase() === OClock.GetSize().Short.toLocaleLowerCase())
            {
                await OClock.Insert(OClock.GetClockInsert().Date, undefined)
                .catch((reason: any): void => {
                    console.error(`---`);
                    console.error(`Error InsertClockDate function.`);
                    console.error(`Error calling method "OClock.Insert".`);
                    console.error(`Error: ${reason}`);
                    console.error(`---`);
                });
            }
        }
    })
    .catch<void>((reason: any): void => {
        console.error(`---`);
        console.error(`Error InsertClockDate function.`);
        console.error(`Error: ${reason}`);
        console.error(`---`);
    });
}