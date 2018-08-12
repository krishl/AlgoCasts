// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let charCount = {}
    let highestValue = 0
    let maxChar = ''

    for (let char of str) {
        charCount[char] = charCount[char]++ || 1
    }
    for (let char in charCount) {
        if (charCount[char] > highestValue) {
            highestValue = charCount[char]
            maxChar = char
        }
    }
    return maxChar
}

module.exports = maxChar;
