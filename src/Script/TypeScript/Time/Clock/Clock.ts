/**
 * @class
 * @name Clock
 */
class Clock
{
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
    constructor()
    {
        
    }


    
    // Getters and Setters
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
     * @access private
     * @method
     * @alias UpdateDay
     * @param {string} Id
     * @param {(Intl.DateTimeFormatOptions | undefined)} Options
     * @returns {Promise<unknown>}
     */
    async #UpdateDay(Id: string,
                     Options: (Intl.DateTimeFormatOptions | undefined)): Promise<unknown>
    {
        return await new Promise((resolve): void => {
            setInterval((): void => {
                this.#DocumentElement = (document.getElementById(Id) as HTMLElement);

                this.#DocumentElement.innerHTML = Today().toLocaleDateString(undefined, Options);
            }, 0);
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
    async #UpdateTime(Id: string,
                      Options: (Intl.DateTimeFormatOptions | undefined)): Promise<unknown>
    {
        return await new Promise((resolve): void => {
            setInterval((): void => {
                this.#DocumentElement = (document.getElementById(Id) as HTMLElement);

                this.#DocumentElement.innerHTML = Today().toLocaleTimeString(undefined, Options)
            }, 0);
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
    Insert(Id: string,
           whoInsert: string,
           Options: (Intl.DateTimeFormatOptions | undefined)): void
    {
        // Variables.
        /**
         * @access private
         * @member
         * @var
         * @type {Promise<unknown>}
         * @alias Insert
         */
        let Insert: Promise<unknown>;

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
                Insert = this.#UpdateDay(Id, Options);
            }
            else
            if (whoInsert === this.GetClockInsert().Time)
            {
                Insert = this.#UpdateTime(Id, Options);
            }
        }
    }
}