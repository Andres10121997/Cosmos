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
        return Word.toLowerCase().replace(/[-+*/∖∗∓∔=_#π∞Σ√∛∜∫∬∭∮∯∰∱∲∳∀∁∂∃∄∅∆∇∈∉∊∋∌∍∎∏∐∑∘∙∝∟∠∡∢∣∤∥∦∧∨∩∪∴∵∶∷∸∹∺∻∼∽∾∿≀¡!¿?(){}<>:;.'$0-9]/g, "");
    }
}
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
/**
 * @function
 * @name CalculateAge
 * @param {Date} DateOfBirth
 * @returns {number}
*/
function CalculateAge(DateOfBirth) {
    // Objects.
    /**
     * @access private
     * @member
     * @constant
     * @type {Calculate}
     * @alias OCalculate
     */
    const OCalculate = new Calculate();
    return OCalculate.Age(DateOfBirth);
}
/**
 * @class
 * @name Calculation
 * @classdesc Class to perform calculations.
 */
class Calculate {
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
     * @alias Calculation.Age
     * @param {Date} DateOfBirth This parameter receives the date of birth, in date format.
     * @returns {number}
     * @summary This method calculates age.
     */
    Age(DateOfBirth) {
        // Variables.
        /**
         * @access private
         * @member
         * @var
         * @type {number}
         * @alias Age
         */
        let Age;
        // Constants.
        /**
         * @access private
         * @member
         * @constant
         * @type {Array<boolean>}
         * @alias Validation
         */
        const Validation = new Array(Boolean(Today().getMonth() < DateOfBirth.getMonth()), Boolean(Today().getMonth() === DateOfBirth.getMonth()) && Boolean(Today().getDate() < DateOfBirth.getDate()));
        // Initialization.
        Age = parseInt(String(Today().getFullYear() - DateOfBirth.getFullYear()));
        Validation.forEach((value) => {
            if (value === true) {
                Age--;
            }
        });
        return Age;
    }
}
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Person_FirstName, _Person_SecondName, _Person_FirstLastName, _Person_SecondLastName, _Person_DateOfBirth;
class Person {
    constructor(FirstName = {
        Value: "",
        MaxLength: 30,
        RegularExpression: new RegExp(`^[A-Za-zÀ-ÿ]{1,30}$`),
        Require: true,
        FormType: FormType.Input
    }, SecondName = {
        Value: "",
        MaxLength: 30,
        RegularExpression: new RegExp(`^[A-Za-zÀ-ÿ]{0,30}$`),
        Require: false,
        FormType: FormType.Input
    }, FirstLastName = {
        Value: "",
        MaxLength: 30,
        RegularExpression: new RegExp(`^[A-Za-zÀ-ÿ]{1,30}$`),
        Require: true,
        FormType: FormType.Input
    }, SecondLastName = {
        Value: "",
        MaxLength: 30,
        RegularExpression: new RegExp(`^[A-Za-zÀ-ÿ]{1,30}$`),
        Require: false,
        FormType: FormType.Input
    }, DateOfBirth = {
        Value: Today(),
        MaxLength: NaN,
        Require: true,
        FormType: FormType.Date
    }) {
        _Person_FirstName.set(this, void 0);
        _Person_SecondName.set(this, void 0);
        _Person_FirstLastName.set(this, void 0);
        _Person_SecondLastName.set(this, void 0);
        _Person_DateOfBirth.set(this, void 0);
        __classPrivateFieldSet(this, _Person_FirstName, FirstName, "f");
        __classPrivateFieldSet(this, _Person_SecondName, SecondName, "f");
        __classPrivateFieldSet(this, _Person_FirstLastName, FirstLastName, "f");
        __classPrivateFieldSet(this, _Person_SecondLastName, SecondLastName, "f");
        __classPrivateFieldSet(this, _Person_DateOfBirth, DateOfBirth, "f");
    }
    GetFirstName() {
        return __classPrivateFieldGet(this, _Person_FirstName, "f");
    }
    SetFirstName(FirstName) {
        __classPrivateFieldSet(this, _Person_FirstName, FirstName, "f");
    }
    GetSecondName() {
        return __classPrivateFieldGet(this, _Person_SecondName, "f");
    }
    SetSecondName(SecondName) {
        __classPrivateFieldSet(this, _Person_SecondName, SecondName, "f");
    }
    GetFirstLastName() {
        return __classPrivateFieldGet(this, _Person_FirstLastName, "f");
    }
    SetFirstLastName(FirstLastName) {
        __classPrivateFieldSet(this, _Person_FirstLastName, FirstLastName, "f");
    }
    GetSecondLastName() {
        return __classPrivateFieldGet(this, _Person_SecondLastName, "f");
    }
    SetSecondLastName(SecondLastName) {
        __classPrivateFieldSet(this, _Person_SecondLastName, SecondLastName, "f");
    }
    GetDateOfBirth() {
        return __classPrivateFieldGet(this, _Person_DateOfBirth, "f");
    }
    SetDateOfBirth(DateOfBirth) {
        __classPrivateFieldSet(this, _Person_DateOfBirth, DateOfBirth, "f");
    }
}
_Person_FirstName = new WeakMap(), _Person_SecondName = new WeakMap(), _Person_FirstLastName = new WeakMap(), _Person_SecondLastName = new WeakMap(), _Person_DateOfBirth = new WeakMap();
;
/**
 * @function
 * @name Today
 * @returns {Date}
 */
function Today() {
    return new Date();
}
/**
 * @class
 * @name Clock
 */
class Clock {
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
     * @alias Clock.Insert
     * @param {string} Id
     * @param {string} whoInsert
     * @param {Intl.DateTimeFormatOptions | undefined} Options
     * @returns {void}
     */
    Insert(Id, whoInsert, Options) {
        // Variables.
        /**
         * @access private
         * @member
         * @var
         * @type {HTMLElement}
         * @alias DocumentElement
         */
        let DocumentElement;
        // Objects.
        /**
         * @access private
         * @member
         * @constant
         * @type {Validation}
         * @alias OValidate
         */
        const OValidate = new Validation();
        if (OValidate.IsString(Id) === true &&
            OValidate.IsString(whoInsert) === true) {
            if (whoInsert === clockInsert.Date) {
                setInterval(() => {
                    DocumentElement = document.getElementById(Id);
                    DocumentElement.innerHTML = Today().toLocaleDateString(undefined, Options);
                }, 0);
            }
            else if (whoInsert === clockInsert.Time) {
                setInterval(() => {
                    DocumentElement = document.getElementById(Id);
                    DocumentElement.innerHTML = Today().toLocaleTimeString(undefined, Options);
                }, 0);
            }
        }
    }
}
/**
 * @function
 * @name InsertDate
 * @param {string} Id
 * @param {string} Type
 * @returns {void}
 */
function InsertDate(Id, Type) {
    // Object.
    /**
     * @access private
     * @member
     * @constant
     * @type {Clock}
     * @alias clock
    */
    const OClock = new Clock();
    /**
     * @access private
     * @member
     * @constant
     * @type {Validation}
     * @alias OValidate
     */
    const OValidate = new Validation();
    if (OValidate.IsString(Id) &&
        OValidate.IsString(Type) === true) {
        if (Type === clock.Long) {
            OClock.Insert(Id, clockInsert.Date, {
                weekday: `long`,
                year: `numeric`,
                month: `long`,
                day: `numeric`
            });
        }
        else if (Type === clock.Short) {
            OClock.Insert(Id, clockInsert.Date, undefined);
        }
    }
}
/**
 * @function
 * @name InsertTime
 * @param {string} Id
 * @param {string} Type
 * @returns {void}
 */
function InsertTime(Id, Type) {
    // Object.
    /**
     * @access private
     * @member
     * @constant
     * @type {Clock}
     * @alias OClock
     */
    const OClock = new Clock();
    /**
     * @access private
     * @member
     * @constant
     * @type {Validation}
     * @alias OValidate
     */
    const OValidate = new Validation();
    if (OValidate.IsString(Id) === true &&
        OValidate.IsString(Type) === true) {
        if (Type === clock.Long) {
            OClock.Insert(Id, clockInsert.Time, {
                formatMatcher: `best fit`,
                hour12: undefined,
                hour: `numeric`,
                minute: `numeric`,
                second: `numeric`
            });
        }
        else if (Type === clock.Short) {
            OClock.Insert(Id, clockInsert.Time, {
                formatMatcher: `best fit`,
                hour12: undefined,
                hour: `numeric`,
                minute: `numeric`
            });
        }
    }
}
const clock = {
    Long: `Long`,
    Short: `Short`
};
const clockInsert = {
    Date: `Date`,
    Time: `Time`
};
const dateOptions = {
    DateOfBirth: `Date of birth`,
    None: `None`
};
/**
 * @function
 * @name ValidationForm
 * @param {Array<string>} ElementId It is an Arrays that saves the IDs of the Inputs, TextArea, Select, among others.
 * @param {Array<number>} MaxLength
 * @param {Array<string>} HtmlType
 * @param {Array<string>} DateType
 * @param {Array<boolean>} Require
 * @param {number} [MinimumAge]
 * @returns {boolean}
 * @summary This function is used to validate any form.
 */
function ValidationForm(ElementId, MaxLength, HtmlType, DateType, Require, MinimumAge = NaN) {
    // Variable.
    /**
     * @access private
     * @member
     * @var
     * @type {number}
     * @alias Count
     */
    let Count;
    // Constants.
    /**
     * @access private
     * @member
     * @constant
     * @type {Array<boolean>}
     * @alias Comparison
     */
    const Comparison = new Array(Boolean(ElementId.length !== MaxLength.length), Boolean(ElementId.length !== HtmlType.length), Boolean(ElementId.length !== DateType.length), Boolean(ElementId.length !== Require.length));
    // Objects.
    /**
     * @access private
     * @member
     * @constant
     * @type {Validation}
     * @alias OValidate
     */
    const OValidate = new Validation();
    // Initialization.
    Count = parseInt(String(0));
    // Validation.
    Comparison.forEach((value, i) => {
        if (OValidate.IsBoolean(value) === false) {
            console.error(`The "Comparison" (${value} | ${(i + 1)}° position) is not a boolean.`);
            return false;
        }
    });
    ElementId.forEach((value, i) => {
        if (OValidate.IsString(value) === false) {
            console.error(`The "ID" (${value} | ${(i + 1)}° position) is not a string.`);
            return false;
        }
    });
    MaxLength.forEach((value, i) => {
        if (OValidate.IsNumber(value) === false) {
            console.error(`The "MaxLength" (${value} | ${(i + 1)}° position) is not a number.`);
            return false;
        }
    });
    HtmlType.forEach((value, i) => {
        if (OValidate.IsString(value) === false) {
            console.error(`The "HtmlType" (${value} | ${(i + 1)}° position) is not a string.`);
            return false;
        }
    });
    DateType.forEach((value, i) => {
        if (OValidate.DateType(value) === false) {
            console.error(`The "DateType" (${value} | ${(i + 1)}° position) is not a string.`);
            return false;
        }
    });
    Require.forEach((value, i) => {
        if (OValidate.IsBoolean(value) === false) {
            console.error(`The "Require" (${value} | ${(i + 1)}° position) is not a boolean.`);
            return false;
        }
    });
    HtmlType.forEach((value, i) => {
        if (value === FormType.Select &&
            OValidate.Select(ElementId[i]) === true) {
            Count++;
        }
        else if ((value === FormType.Input ||
            value === FormType.TextArea) &&
            OValidate.Info(ElementId[i], Require[i], MaxLength[i]) === true) {
            Count++;
        }
        else if (value === FormType.Date &&
            DateType[i] === dateOptions.DateOfBirth &&
            OValidate.DateOfBirth(ElementId[i], MinimumAge) === true) {
            Count++;
        }
    });
    if (Count === ElementId.length) {
        return true;
    }
    else {
        return false;
    }
}
/**
 * @class
 * @name Validation
 */
class Validation {
    // Constructor.
    /**
     * @hideconstructor
     * @returns {void}
     */
    constructor() {
    }
    // Validations.
    /**
     * @access public
     * @method
     * @alias Validation.IsBoolean
     * @param {boolean} Element
     * @returns {boolean}
     */
    IsBoolean(value) {
        if (typeof (value) !== `boolean`) {
            return false;
        }
        else if (this.IsNotEmpty(String(value)) === false) {
            return false;
        }
        else {
            return true;
        }
    }
    /**
     * @access public
     * @method
     * @alias Validation.IsNumber
     * @param {number} Element
     * @returns {boolean}
     */
    IsNumber(Element) {
        if (typeof (Element) !== `number`) {
            return false;
        }
        else if (this.IsNotEmpty(Element.toString()) === false) {
            return false;
        }
        else {
            return true;
        }
    }
    /**
     * @access public
     * @method
     * @alias Validation.IsRegularExpression
     * @param {RegExp} RegularExpression
     * @returns {boolean}
     */
    IsRegularExpression(RegularExpression) {
        if (typeof (RegularExpression) !== `object`) {
            return false;
        }
        else {
            return true;
        }
    }
    /**
     * @access public
     * @method
     * @alias Validation.IsString
     * @param {string} Element
     * @returns {boolean}
     */
    IsString(Element) {
        if (typeof (Element) !== `string`) {
            console.error(`The element "${Element}" is not a string.`);
            return false;
        }
        else if (this.IsNotEmpty(Element) === false) {
            return false;
        }
        else if (Element.length < 0) {
            return false;
        }
        else {
            return true;
        }
    }
    /**
     * @access public
     * @method
     * @alias Validation.Age
     * @param {number} Age
     * @returns {boolean}
     */
    Age(Age) {
        if (this.IsNumber(Age) === false) {
            return false;
        }
        else if (Age < 0) {
            return false;
        }
        else {
            return true;
        }
    }
    /**
     * @access public
     * @method
     * @alias Validation.DateOfBirth
     * @param {string} Id
     * @param {number} [MinimumAge] This parameter refers to the minimum age that the user will be able to do something, for example, register.
     * @returns {boolean}
     */
    DateOfBirth(Id, MinimumAge = 0) {
        // Constants.
        /**
         * @access private
         * @member
         * @constant
         * @type {string}
         * @alias information
        */
        const information = document.getElementById(Id).value;
        /**
         * @access private
         * @member
         * @constant
         * @type {Date}
         * @alias DateOfBirth
         */
        const DateOfBirth = new Date(information);
        /**
         * @access private
         * @member
         * @constant
         * @type {number}
         * @alias age
         */
        const age = CalculateAge(DateOfBirth);
        if (this.IsString(DateOfBirth.toString()) === false) {
            return false;
        }
        else if (DateOfBirth > Today()) {
            return false;
        }
        else if (this.IsNumber(age) === false) {
            return false;
        }
        else if (age < MinimumAge ||
            age > 100) {
            return false;
        }
        else {
            return true;
        }
    }
    /**
     * @access public
     * @method
     * @alias Validation.DateType
     * @param {string} dateType
     * @returns {boolean}
     */
    DateType(dateType) {
        // Constants.
        /**
         * @access private
         * @member
         * @constant
         * @type {Array<string>}
         * @alias DateType
        */
        const DateType = new Array(dateOptions.DateOfBirth, dateOptions.None);
        if (this.IsString(dateType) === false) {
            console.error(`The Date Type "${dateType}" is not a string.`);
            return false;
        }
        else if (dateType !== DateType[0] &&
            dateType !== DateType[1]) {
            console.error(`There are only 2 options for date_type, which are:`);
            DateType.forEach((value, i) => {
                console.error(`${(i + 1)}) ${value}`);
            });
            return false;
        }
        else {
            return true;
        }
    }
    /**
     * @access public
     * @method
     * @alias Validation.Info
     * @param {string} Id
     * @param {boolean} IsRequired
     * @param {number} [MaxLength]
     * @returns {boolean}
     */
    Info(Id, IsRequired, MaxLength = NaN) {
        // Constants.
        /**
         * @access private
         * @member
         * @constant
         * @type {string}
         * @alias info
        */
        const information = document.getElementById(Id).value;
        if (this.IsString(Id) === false ||
            this.IsString(information) === false ||
            this.IsNumber(MaxLength) === false) {
            return false;
        }
        else if (information.length < 0) {
            console.error(`The number of characters in the word "${information}" cannot be less than 0.`);
            return false;
        }
        else if ((information.length === 0 ||
            information.length > MaxLength) &&
            IsRequired === true) {
            console.error(`The number od characters in the word "${information} cannot be less than ${MaxLength}".`);
            return false;
        }
        else {
            return true;
        }
    }
    /**
     * @access public
     * @method
     * @alias Validation.Select
     * @param {string} Id
     * @returns {boolean}
     */
    Select(Id) {
        // Constants.
        /**
         * @access private
         * @member
         * @constant
         * @type {string}
         * @access information
        */
        const information = document.getElementById(Id).value;
        if (this.IsNumber(parseInt(information)) === false) {
            return false;
        }
        else if (parseInt(information) < 0) {
            return false;
        }
        else {
            return true;
        }
    }
    /**
     * @access public
     * @method
     * @alias Validation.IsNotEmpty
     * @param {string} Element
     * @returns {boolean}
     */
    IsNotEmpty(Element) {
        if (Element === null ||
            Element === undefined ||
            Element === void 0 ||
            Element === ``) {
            return false;
        }
        else {
            return true;
        }
    }
}
/**
 * @access public
 * @constant
 * @alias FormType
 */
const FormType = {
    Input: `Input`,
    Date: `Date`,
    TextArea: `TextArea`,
    Select: `Select`
};
/**
 * @class
 * @name RichTextEditor
 */
class RichTextEditor {
    // Constructor.
    /**
     * @hideconstructor
     * @returns {void}
     */
    constructor() {
    }
}
