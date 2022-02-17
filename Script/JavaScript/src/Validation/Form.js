"use strict";
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
        if (value === htmlOption.Select &&
            OValidate.Select(ElementId[i]) === true) {
            Count++;
        }
        else if ((value === htmlOption.Input ||
            value === htmlOption.TextArea) &&
            OValidate.Info(ElementId[i], Require[i], MaxLength[i]) === true) {
            Count++;
        }
        else if (value === htmlOption.Date &&
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
