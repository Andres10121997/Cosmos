/**
 * @async
 * @function
 * @name InsertClockAsync
 * @param {string} DateID
 * @param {string} DateType
 * @param {string} TimeID
 * @param {string} TimeType
 * @returns {Promise<void>}
 */
async function InsertClockAsync(DateID: string,
                                DateType: string,
                                TimeID: string,
                                TimeType: string): Promise<void>
{
    await Promise.all<[Promise<void>, Promise<void>]>(
        [
            InsertClockDateAsync(DateID, DateType),
            InsertClockTimeAsync(TimeID, TimeType)
        ]
    )
    .catch<void>((reason: any): void => {
        console.error(`---`);
        console.error(`Error InsertClockDate function.`);
        console.error(`Error: ${reason}`);
        console.error(`---`);
    });
}