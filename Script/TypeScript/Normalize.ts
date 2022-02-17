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
     * @alias Normalize.word
     * @param {string} Word
     * @returns {string}
     */
    word(Word: string): string
    {
        return Word.toLowerCase().replace(/[-+*/∖∗∓∔=_#π∞Σ√∛∜∫∬∭∮∯∰∱∲∳∀∁∂∃∄∅∆∇∈∉∊∋∌∍∎∏∐∑∘∙∝∟∠∡∢∣∤∥∦∧∨∩∪∴∵∶∷∸∹∺∻∼∽∾∿≀¡!¿?(){}<>:;.'$0-9]/g, "");
    }
}