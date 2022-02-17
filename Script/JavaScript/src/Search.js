"use strict";
/**
 * @class
 * @name Search
 */
class Search {
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
     * @alias Search.WordRepetition
     * @param {string} text
     * @returns {object}
     */
    WordRepetition(text) {
        // Variables.
        /**
         * @access private
         * @member
         * @var
         * @type {{ [key: string]: number} }
         * @alias dict
         */
        let dict = {};
        /**
         * @access private
         * @member
         * @var
         * @type {Array<string>}
         * @alias separateWords
         */
        let separateWords = text.split(" ");
        // Objects.
        /**
         * @access private
         * @member
         * @constant
         * @type {Normalize}
         * @alias ONormalize
         */
        const ONormalize = new Normalize();
        for (const word of separateWords) {
            if (ONormalize.word(word) in dict) {
                ++dict[ONormalize.word(word)];
            }
            else {
                dict[ONormalize.word(word)] = 1;
            }
        }
        return dict;
    }
}
