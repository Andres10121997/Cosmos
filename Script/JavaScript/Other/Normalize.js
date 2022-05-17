"use strict";
/**
 * @class
 * @alias Normalize
 */
class Normalize {
    // Constructor.
    /**
     * @hideconstructor
     * @returns {void}
     */
    constructor() {
    }
    // Normalize.
    /**
     * @access public
     * @method
     * @alias Normalize.word
     * @param {string} Word
     * @returns {string}
     */
    word(Word) {
        return Word.toLowerCase().replace(RegularExpression.NotWord, "");
    }
}
