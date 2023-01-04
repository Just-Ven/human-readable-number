module.exports = function toReadable (n) {
    if (n >= 100) {
    const arr = String(n).split('')
    let result1
    let result4
    if (n % 100 <= 19) {
        switch(arr[0]) {
            case "1": result1 = "one hundred"; break
            case "2": result1 = "two hundred"; break
            case "3": result1 = "three hundred"; break
            case "4": result1 = "four hundred"; break
            case "5": result1 = "five hundred"; break
            case "6": result1 = "six hundred"; break
            case "7": result1 = "seven hundred"; break
            case "8": result1 = "eight hundred"; break
            case "9": result1 = "nine hundred"; break
        }
        
        switch(n % 100) {
            case 0: result4 = ""; break
            case 1: result4 = " one"; break
            case 2: result4 = " two"; break
            case 3: result4 = " three"; break
            case 4: result4 = " four"; break
            case 5: result4 = " five"; break
            case 6: result4 = " six"; break
            case 7: result4 = " seven"; break
            case 8: result4 = " eight"; break
            case 9: result4 = " nine"; break
            case 10: result4 = " ten"; break
            case 11: result4 = " eleven"; break
            case 12: result4 = " twelve"; break
            case 13: result4 = " thirteen"; break
            case 14: result4 = " fourteen"; break
            case 15: result4 = " fifteen"; break
            case 16: result4 = " sixteen"; break
            case 17: result4 = " seventeen"; break
            case 18: result4 = " eighteen"; break
            case 19: result4 = " nineteen"; break

        }
        return result1 + result4
    } 
    else {
        switch(arr[0]) {
            case "1": result1 = "one hundred"; break
            case "2": result1 = "two hundred"; break
            case "3": result1 = "three hundred"; break
            case "4": result1 = "four hundred"; break
            case "5": result1 = "five hundred"; break
            case "6": result1 = "six hundred"; break
            case "7": result1 = "seven hundred"; break
            case "8": result1 = "eight hundred"; break
            case "9": result1 = "nine hundred"; break
        }
        let result2
        switch(arr[1]) {
            // 1
            case "0": result2 = ""; break
            case "2": result2 = " twenty"; break
            case "3": result2 = " thirty"; break
            case "4": result2 = " forty"; break
            case "5": result2 = " fifty"; break
            case "6": result2 = " sixty"; break
            case "7": result2 = " seventy"; break
            case "8": result2 = " eighty"; break
            case "9": result2 = " ninety"; break
        }
        let result3
        switch(arr[2]) {
            case "0": result3 = ""; break
            case "1": result3 = " one"; break
            case "2": result3 = " two"; break
            case "3": result3 = " three"; break
            case "4": result3 = " four"; break
            case "5": result3 = " five"; break
            case "6": result3 = " six"; break
            case "7": result3 = " seven"; break
            case "8": result3 = " eight"; break
            case "9": result3 = " nine"; break
        }
        return result1 + result2 + result3
    }
}
else {
    if (n <= 19) {
        switch(n) {
            case 0: result5 = "zero"; break
            case 1: result5 = "one"; break
            case 2: result5 = "two"; break
            case 3: result5 = "three"; break
            case 4: result5 = "four"; break
            case 5: result5 = "five"; break
            case 6: result5 = "six"; break
            case 7: result5 = "seven"; break
            case 8: result5 = "eight"; break
            case 9: result5 = "nine"; break
            case 10: result5 = "ten"; break
            case 11: result5 = "eleven"; break
            case 12: result5 = "twelve"; break
            case 13: result5 = "thirteen"; break
            case 14: result5 = "fourteen"; break
            case 15: result5 = "fifteen"; break
            case 16: result5 = "sixteen"; break
            case 17: result5 = "seventeen"; break
            case 18: result5 = "eighteen"; break
            case 19: result5 = "nineteen"; break
        }
        return result5
    }
    else {
        let result6
        arr = String(n).split('')
        switch(arr[0]) {
            case "0": result6 = ""; break
            case "2": result6 = "twenty"; break
            case "3": result6 = "thirty"; break
            case "4": result6 = "forty"; break
            case "5": result6 = "fifty"; break
            case "6": result6 = "sixty"; break
            case "7": result6 = "seventy"; break
            case "8": result6 = "eighty"; break
            case "9": result6 = "ninety"; break
        }
        let result7
        switch(arr[1]) {
            case "0": result7 = ""; break
            case "1": result7 = " one"; break
            case "2": result7 = " two"; break
            case "3": result7 = " three"; break
            case "4": result7 = " four"; break
            case "5": result7 = " five"; break
            case "6": result7 = " six"; break
            case "7": result7 = " seven"; break
            case "8": result7 = " eight"; break
            case "9": result7 = " nine"; break
        }
        return result6 + result7
    }
}
}
