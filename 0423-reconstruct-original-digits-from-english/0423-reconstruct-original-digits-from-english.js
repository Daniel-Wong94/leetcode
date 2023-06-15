/**
 * @param {string} s
 * @return {string}
 */

// zero - z unique
// one - n - # of 7s - # of 9s * 2 since 1, 7, 9 share n's and 9 has two n's
// two - w unique
// three - h - # of g since only 3 and 8 shares "h"
// four - u unique
// five - f - # of u since only 4 and 5 shares "f"
// six - x unique
// seven - s - # of x since 7 and 6 shares "s"
// eight - g unique
// nine - i - # of g - # of x - # of f - # of u since 9, 8, 6, and 5 shares "i" but 5 and 4 shares "f"
// var originalDigits = function(s) {
//     const count = {}
    
//     for (const c of s) {
//         count[c] = count[c] + 1 || 1
//     }
    
//     const output = {}
    
//     output["0"] = count["z"]
//     output["2"] = count["w"]
//     output["4"] = count["u"]
//     output["6"] = count["x"]
//     output["8"] = count["g"]
    
//     output["3"] = count["h"] - output["8"]
//     output["5"] = count["f"] - output["4"]
//     output["7"] = count["s"] - output["6"]
//     output["9"] = count["i"] - output["8"] - output["6"] - output["5"]
//     output["1"] = count["n"] - output["7"] - 2 * output["9"]
    
//     console.log(output)

//     let result = ""
    
//     for (const [char, num] of Object.entries(output)) {
//         result += char.repeat(num)
//     }
    
//     return result
// };

// initialize an array for counting sort, each index will represent the count of that index
// iterate to update all the given numbers (has unique letter in it) first then the rest
// use the logic to correct the count by subtracting with the unique counts


const originalDigits = s => {
    const count = Array(10).fill(0)
    
    for (const c of s) {
        switch (c) {
            case "z" : count[0]++; break; // 0 is true
            case "w" : count[2]++; break; // 2 is true
            case "u" : count[4]++; break; // 4 is true
            case "x" : count[6]++; break; // 6 is true
            case "g" : count[8]++; break; // 8 is true
            
            // since these indicies share multiple numbers
            // pick a letter that's shared by only the givens (evens)
            case "o" : count[1]++; break; // shared by 0, 1, 2, 4            
            case "r" : count[3]++; break; // shared by 0, 3, 4            
            case "s" : count[7]++; break; // shared by 6, 7
            case "v" : count[5]++; break; // shared by 5, 7


            case "i" : count[9]++; break; // shared by 5, 6, 8, 9
        }
    }
    
    // corrections
    count[7] -= count[6]; // 7 is now true
    count[5] -= count[7]; // 5 is now true 
    count[3] -= count[0] + count[4]; // 3 is now true
    count[1] -= count[0] + count[2] + count[4]; // 1 is now true
    count[9] -= count[5] + count[6] + count[8]; // 9 is now true
    
    let result = ""
    
    for (let i = 0; i < count.length; i++) {
        for (let j = 0; j < count[i]; j++) {
            result += i
        }
    }
    
    return result
}
