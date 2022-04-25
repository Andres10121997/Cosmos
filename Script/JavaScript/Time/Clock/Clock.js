"use strict";
/**
 * @class
 * @name Clock
 */
class Clock {
    #Size = {
        Long: `Long`,
        Short: `Short`
    };
    #ClockInsert = {
        Date: `Date`,
        Time: `Time`
    };
    // Constructor.
    /**
     * @hideconstructor
     * @returns {void}
     */
    constructor() {
    }
    // Getters and Setters
    /**
     * @access public
     * @method
     * @alias Clock.GetSize
     * @returns
     */
    GetSize() {
        return this.#Size;
    }
    /**
     * @access public
     * @method
     * @alias Clock.GetClockInsert
     * @returns
     */
    GetClockInsert() {
        return this.#ClockInsert;
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
            if (whoInsert === this.GetClockInsert().Date) {
                setInterval(() => {
                    DocumentElement = document.getElementById(Id);
                    DocumentElement.innerHTML = Today().toLocaleDateString(undefined, Options);
                }, 0);
            }
            else if (whoInsert === this.GetClockInsert().Time) {
                setInterval(() => {
                    DocumentElement = document.getElementById(Id);
                    DocumentElement.innerHTML = Today().toLocaleTimeString(undefined, Options);
                }, 0);
            }
        }
    }
}
