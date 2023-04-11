/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    let namePointer = typedPointer = 0
    
    while (typedPointer < typed.length) {
        if (name[namePointer] === typed[typedPointer]) {
            namePointer++
            typedPointer++
        } else if (name[namePointer - 1] === typed[typedPointer]){
            typedPointer++
        } else {
            return false
        }
    }
    
    return namePointer === name.length
};