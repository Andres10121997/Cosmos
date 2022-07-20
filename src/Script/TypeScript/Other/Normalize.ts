/**
 * @class
 * @alias Normalize
 */
class Normalize
{
    // Constructor.
    /**
     * @hideconstructor
     * @returns {void}
     */
    constructor()
    {
        
    }



    // Normalize.
    /**
     * @access public
     * @method
     * @alias Normalize.Word
     * @param {string} Word
     * @returns {string}
     */
    Word(Word: string): string
    {
        return Word.toLowerCase().replace(RegularExpression.NotWord, "");
    }
}