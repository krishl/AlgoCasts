// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str.split('').reduce(function(reversed, character) {
        return character + reversed
    }, '')
}

module.exports = reverse;


// function reverse(str) {
//     return newString.split('').reverse().join('')
// }

// function reverse(str) {
//     let newString = ''
//     for (let character of str) {
//         newString = character + newString
//     }
//     return newString
// }