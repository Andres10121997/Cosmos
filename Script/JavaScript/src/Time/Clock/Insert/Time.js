"use strict";
/**
 * @function
 * @name InsertTime
 * @param {string} Id
 * @param {string} Type
 * @returns {void}
 */
function InsertTime(Id, Type) {
    // Object.
    /**
     * @access private
     * @member
     * @constant
     * @type {Clock}
     * @alias OClock
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
    if (OValidate.IsString(Id) === true &&
        OValidate.IsString(Type) === true) {
        if (Type === clock.Long) {
            OClock.Insert(Id, clockInsert.Time, {
                formatMatcher: `best fit`,
                hour12: undefined,
                hour: `numeric`,
                minute: `numeric`,
                second: `numeric`
            });
        }
        else if (Type === clock.Short) {
            OClock.Insert(Id, clockInsert.Time, {
                formatMatcher: `best fit`,
                hour12: undefined,
                hour: `numeric`,
                minute: `numeric`
            });
        }
    }
}
