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
     * @returns 
     */
    GetSize()
    {
        return this.#Size;
    }

    /**
     * @access public
     * @method
     * @alias Clock.GetClockInsert
     * @returns 
     */
    GetClockInsert(): IClockInsert
    {
        return this.#ClockInsert
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
         * @type {HTMLElement}
         * @alias DocumentElement
         */
        let DocumentElement: HTMLElement;

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
            if (whoInsert === this.#ClockInsert.Date)
            {
                setInterval((): void => {
                    DocumentElement = (document.getElementById(Id) as HTMLElement);

                    DocumentElement.innerHTML = Today().toLocaleDateString(undefined, Options);
                }, 0);
            }
            else
            if (whoInsert === this.#ClockInsert.Time)
            {
                setInterval((): void => {
                    DocumentElement = (document.getElementById(Id) as HTMLElement);

                    DocumentElement.innerHTML = Today().toLocaleTimeString(undefined, Options)
                }, 0);
            }
        }
    }
}