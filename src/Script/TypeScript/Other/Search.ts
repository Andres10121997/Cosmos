/**
 * @class
 * @name Search
 */
class Search
{
    // Constructor.
    /**
     * @hideconstructor
     * @returns {void}
     */
    constructor()
    {

    }


    /**
     * @access public
     * @method
     * @alias Search.WordRepetition
     * @param {string} text
     * @returns {object}
     */
    WordRepetition(text: string): object
    {
        // Variables.
        /**
         * @access private
         * @member
         * @var
         * @type {{ [key: string]: number} }
         * @alias dict
         */
        let dict: { [key: string]: number } = {};

        /**
         * @access private
         * @member
         * @var
         * @type {Array<string>}
         * @alias separateWords
         */
        let separateWords: Array<string> = text.split(" ");

        // Objects.
        /**
         * @access private
         * @member
         * @constant
         * @type {Normalize}
         * @alias ONormalize
         */
        const ONormalize: Normalize = new Normalize();



        for (const word of separateWords)
        {
            if (ONormalize.Word(word) in dict)
            {
                ++dict[ONormalize.Word(word)];
            }
            else
            {
                dict[ONormalize.Word(word)] = 1;
            }
        }



        return dict;
    }
}