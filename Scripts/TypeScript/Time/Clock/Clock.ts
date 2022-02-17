/**
 * @class
 * @name Clock
 */
class Clock
{
    // Constructor.
    /**
     * @hideconstructor
     * @returns {void}
     */
    public constructor()
    {
        
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
            if (whoInsert === clockInsert.Date)
            {
                setInterval((): void => {
                    DocumentElement = (document.getElementById(Id) as HTMLElement);

                    DocumentElement.innerHTML = Today().toLocaleDateString(undefined, Options);
                }, 0);
            }
            else
            if (whoInsert === clockInsert.Time)
            {
                setInterval((): void => {
                    DocumentElement = (document.getElementById(Id) as HTMLElement);

                    DocumentElement.innerHTML = Today().toLocaleTimeString(undefined, Options)
                }, 0);
            }
        }
    }
}