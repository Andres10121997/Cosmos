/**
 * @async
 * @function
 * @name InsertClock
 * @param {string} DateID
 * @param {string} DateType
 * @param {string} TimeID
 * @param {string} TimeType
 * @returns {Promise<void>}
 */
async function InsertClock(DateID: string, DateType: string, TimeID: string, TimeType: string): Promise<void>
{
    // Object.
    /**
     * @access private
     * @member
     * @constant
     * @type {Validation}
     * @alias OValidation
     */
    const OValidation: Validation = new Validation();

    if (OValidation.IsString(DateID) === true &&
        OValidation.IsString(DateType) === true &&
        OValidation.IsString(TimeID) === true &&
        OValidation.IsString(TimeType) === true)
    {
        await Promise.all(
            [
                InsertClockDate(DateID, DateType),
                InsertClockTime(TimeID, TimeType)
            ]
        )
        .catch((reason: any): void => {
            console.error(`---`);
            console.error(`Error InsertClockDate function.`);
            console.error(`Error: ${reason}`);
            console.error(`---`);
        });
    }
}