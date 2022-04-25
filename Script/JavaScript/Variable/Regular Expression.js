"use strict";
/**
 * @access public
 * @constant
 * @alias RegularExpression
 */
const RegularExpression = {
    NameRequire: new RegExp(`^[A-Za-zÀ-ÿ]{1,30}$`),
    NameNotRequire: new RegExp(`^[A-Za-zÀ-ÿ]{0,30}$`),
    NotWord: new RegExp(/[-+*/∖∗∓∔=_#π∞Σ√∛∜∫∬∭∮∯∰∱∲∳∀∁∂∃∄∅∆∇∈∉∊∋∌∍∎∏∐∑∘∙∝∟∠∡∢∣∤∥∦∧∨∩∪∴∵∶∷∸∹∺∻∼∽∾∿≀¡!¿?(){}<>:;.'$0-9]/g)
};
