"use strict";
/**
 * @function
 * @name InsertDate
 * @param {string} Id
 * @param {string} Type
 * @returns {void}
 */
function InsertDate(Id, Type) {
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
    if (OValidate.IsString(Id) &&
        OValidate.IsString(Type) === true) {
        if (Type === clock.Long) {
            OClock.Insert(Id, clockInsert.Date, {
                weekday: `long`,
                year: `numeric`,
                month: `long`,
                day: `numeric`
            });
        }
        else if (Type === clock.Short) {
            OClock.Insert(Id, clockInsert.Date, undefined);
        }
    }
}
