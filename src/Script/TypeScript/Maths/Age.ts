/**
 * @function
 * @name CalculateAge
 * @param {Date} DateOfBirth
 * @returns {number}
*/
function CalculateAge(DateOfBirth: Date): number
{
    return new Mathematics().Age(DateOfBirth);
}