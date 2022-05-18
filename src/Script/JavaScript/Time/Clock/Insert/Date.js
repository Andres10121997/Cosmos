"use strict";
/**
 * @function
 * @name InsertDate
 * @param {string} Id
 * @param {string} Type
 * @returns {Promise<void>}
 */
async function InsertDate(Id, Type) {
    await new Promise(() => {
        // Object.
        /**
         * @access private
         * @member
         * @constant
         * @type {Clock}
         * @alias clock
        */
        const OClock = new Clock();
        /**
         * @access private
         * @member
         * @constant
         * @type {Validation}
         * @alias OValidate
         */
        const OValidate = new Validation();
        if (OValidate.IsString(Id) == true &&
            OValidate.IsString(Type) === true) {
            if (Type.toLocaleLowerCase() === OClock.GetSize().Long.toLocaleLowerCase()) {
                OClock.Insert(Id, OClock.GetClockInsert().Date, {
                    weekday: `long`,
                    year: `numeric`,
                    month: `long`,
                    day: `numeric`
                });
            }
            else if (Type.toLocaleLowerCase() === OClock.GetSize().Short.toLocaleLowerCase()) {
                OClock.Insert(Id, OClock.GetClockInsert().Date, undefined);
            }
        }
    })
        .catch((reason) => {
        console.error(`---`);
        console.error(`Error inserting date.`);
        console.error(`Error: ${reason}`);
        console.error(`---`);
    });
}
