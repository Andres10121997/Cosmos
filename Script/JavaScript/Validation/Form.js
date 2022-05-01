"use strict";
/**
 * @function
 * @name ValidationForm
 * @param {Array<string>} Id It is an Arrays that saves the IDs of the Inputs, TextArea, Select, among others.
 * @param {Array<number>} MaxLength
 * @param {Array<string>} HtmlType
 * @param {Array<string>} DateType
 * @param {Array<boolean>} Require
 * @param {number} [MinimumAge]
 * @returns {boolean}
 * @summary This function is used to validate any form.
 */
function ValidationForm(Id, MaxLength, HtmlType, DateType, Require, MinimumAge = NaN) {
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
    const Comparison = new Array(Boolean(Id.length !== MaxLength.length), Boolean(Id.length !== HtmlType.length), Boolean(Id.length !== DateType.length), Boolean(Id.length !== Require.length));
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
    Count = 0;
    // Validation.
    Comparison.forEach((value, i) => {
        if (OValidate.IsBoolean(value) === false) {
            console.error(`The "Comparison" (${value} | ${(i + 1)}° position) is not a boolean.`);
            return false;
        }
    });
    Id.forEach((value, i) => {
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
            OValidate.Select(Id[i]) === true) {
            Count++;
        }
        else if ((value === FormType.Input ||
            value === FormType.TextArea) &&
            OValidate.Info(Id[i], Require[i], MaxLength[i]) === true) {
            Count++;
        }
        else if (value === FormType.Date &&
            DateType[i] === dateOptions.DateOfBirth &&
            OValidate.DateOfBirth(Id[i], MinimumAge) === true) {
            Count++;
        }
    });
    if (Count === Id.length) {
        return true;
    }
    else {
        return false;
    }
}
