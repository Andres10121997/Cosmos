"use strict";
/**
 * @class
 * @name Clock
 */
class Clock {
    // Constructor.
    /**
     * @hideconstructor
     * @returns {void}
     */
    constructor() {
    }
    /**
     * @access public
     * @method
     * @alias Clock.Insert
     * @param {string} Id
     * @param {string} whoInsert
     * @param {Intl.DateTimeFormatOptions | undefined} Options
     * @returns {void}
     */
    Insert(Id, whoInsert, Options) {
        // Variables.
        /**
         * @access private
         * @member
         * @var
         * @type {HTMLElement}
         * @alias DocumentElement
         */
        let DocumentElement;
        // Objects.
        /**
         * @access private
         * @member
         * @constant
         * @type {Validation}
         * @alias OValidate
         */
        const OValidate = new Validation();
        if (OValidate.IsString(Id) === true &&
            OValidate.IsString(whoInsert) === true) {
            if (whoInsert === clockInsert.Date) {
                setInterval(() => {
                    DocumentElement = document.getElementById(Id);
                    DocumentElement.innerHTML = Today().toLocaleDateString(undefined, Options);
                }, 0);
            }
            else if (whoInsert === clockInsert.Time) {
                setInterval(() => {
                    DocumentElement = document.getElementById(Id);
                    DocumentElement.innerHTML = Today().toLocaleTimeString(undefined, Options);
                }, 0);
            }
        }
    }
}
