// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    let newArray = []
    let index = 0
    while (index < array.length) {
        newArray.push(array.slice(index, index + size))
        index += size
    }
    return newArray
}

module.exports = chunk;

// function chunk(array, size) {
//     let newArray = []
//     for (num of array) {
//         const lastArray = newArray[newArray.length - 1]
//         if (!lastArray || lastArray.length === size) {
//             newArray.push([num])
//         } else {
//             lastArray.push(num)
//         }
//     }
//     return newArray
// }