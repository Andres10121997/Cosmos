﻿/**
 * @class
 * @name Clock
 */
class Clock
{
    #ID: string;
    
    #Size = {
        Long: `Long`,
        Short: `Short`
    }

    #ClockInsert: IClockInsert = {
        Date: `Date`,
        Time: `Time`
    }

    #DocumentElement: HTMLElement = (document.getElementById("") as HTMLElement);
    


    // Constructor.
    /**
     * @hideconstructor
     * @returns {void}
     */
    constructor(ID: string)
    {
        this.#ID = ID;
    }


    
    // Getters and Setters.
    /**
     * @access public
     * @method
     * @alias Clock.GetID
     * @returns {string}
     */
    GetID(): string
    {
        return this.#ID;
    }

    /**
     * @access public
     * @method
     * @alias Clock.SetID
     * @param {string} ID
     * @return {string}
     */
    SetID(ID: string): void
    {
        this.#ID = ID;
    }

    /**
     * @access public
     * @method
     * @alias Clock.GetSize
     * @returns {Clock.#Size}
     */
    GetSize()
    {
        return this.#Size;
    }

    /**
     * @access public
     * @method
     * @alias Clock.GetClockInsert
     * @returns {Clock.#ClockInsert}
     */
    GetClockInsert(): IClockInsert
    {
        return this.#ClockInsert
    }



    /**
     * @async
     * @access private
     * @method
     * @alias UpdateDay
     * @param {string} Id
     * @param {(Intl.DateTimeFormatOptions | undefined)} Options
     * @returns {Promise<unknown>}
     */
    async #UpdateDayAsync(Options: (Intl.DateTimeFormatOptions | undefined)): Promise<unknown>
    {
        return await new Promise<void>((): void => {
            setInterval((): void => {
                this.#DocumentElement = (document.getElementById(this.#ID) as HTMLElement);

                this.#DocumentElement.innerHTML = Today().toLocaleDateString(undefined, Options);
            }, 0);
        })
        .catch<void>((reason: any): void => {
            console.error(`---`);
            console.error(`Clock day update failed.`);
            console.error(`The error was: ${reason}`);
            console.error(`---`);
        });
    }

    /**
     * @async
     * @access private
     * @method
     * @alias UpdateTime
     * @param {string} Id
     * @param {(Intl.DateTimeFormatOptions | undefined)} Options
     * @returns {Promise<unknown>}
     */
    async #UpdateTimeAsync(Options: (Intl.DateTimeFormatOptions | undefined)): Promise<unknown>
    {
        return await new Promise<void>((): void => {
            setInterval((): void => {
                this.#DocumentElement = (document.getElementById(this.#ID) as HTMLElement);

                this.#DocumentElement.innerHTML = Today().toLocaleTimeString(undefined, Options);
            }, 0);
        })
        .catch((reason: any): void => {
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
    async Insert(Id: string,
                 whoInsert: string,
                 Options: (Intl.DateTimeFormatOptions | undefined)): Promise<void>
    {
        await new Promise((): void => {
            // Objects.
            /**
             * @access private
             * @member
             * @constant
             * @type {Validation}
             * @alias OValidate
             */
            const OValidate: Validation = new Validation();



            if (OValidate.IsString(Id) === true &&
                OValidate.IsString(whoInsert) === true)
            {
                if (whoInsert === this.GetClockInsert().Date)
                {
                    this.#UpdateDayAsync(Options);
                }
                else
                if (whoInsert === this.GetClockInsert().Time)
                {
                    this.#UpdateTimeAsync(Options);
                }
            }
        });
    }
}