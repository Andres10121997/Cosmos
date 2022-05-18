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
    #DocumentElement = document.getElementById("");
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
     * @returns {Clock.#Size}
     */
    GetSize() {
        return this.#Size;
    }
    /**
     * @access public
     * @method
     * @alias Clock.GetClockInsert
     * @returns {Clock.#ClockInsert}
     */
    GetClockInsert() {
        return this.#ClockInsert;
    }
    /**
     * @access private
     * @method
     * @alias UpdateDay
     * @param {string} Id
     * @param {(Intl.DateTimeFormatOptions | undefined)} Options
     * @returns {Promise<unknown>}
     */
    async #UpdateDayAsync(Id, Options) {
        return await new Promise((resolve) => {
            setInterval(() => {
                this.#DocumentElement = document.getElementById(Id);
                this.#DocumentElement.innerHTML = Today().toLocaleDateString(undefined, Options);
            }, 0);
        })
            .catch((reason) => {
            console.error(`---`);
            console.error(`Clock day update failed.`);
            console.error(`The error was: ${reason}`);
            console.error(`---`);
        });
    }
    /**
     * @access private
     * @method
     * @alias UpdateTime
     * @param {string} Id
     * @param {(Intl.DateTimeFormatOptions | undefined)} Options
     * @returns {Promise<unknown>}
     */
    async #UpdateTimeAsync(Id, Options) {
        return await new Promise((resolve) => {
            setInterval(() => {
                this.#DocumentElement = document.getElementById(Id);
                this.#DocumentElement.innerHTML = Today().toLocaleTimeString(undefined, Options);
            }, 0);
        })
            .catch((reason) => {
            console.error(`---`);
            console.error(`Clock time update failed.`);
            console.error(`The error was: ${reason}`);
            console.error(`---`);
        });
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
         * @type {Promise<unknown>}
         * @alias Insert
         */
        let Insert;
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
                Insert = this.#UpdateDayAsync(Id, Options);
            }
            else if (whoInsert === this.GetClockInsert().Time) {
                Insert = this.#UpdateTimeAsync(Id, Options);
            }
        }
    }
}
