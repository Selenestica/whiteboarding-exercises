

function disemvowel(string) {
    const vowels = ["a", "e", "i", "o", "u"]
    let strArray = string.split('')
    for (let i = 0; i < strArray.length; i++) {
        for (let v = 0; v < vowels.length; v++) {
            if (vowels[v] === strArray[i]) {
                console.log(strArray[i])
                strArray.splice(i, 1)
            }
        }
    }
    console.log(strArray.join(''))
}

disemvowel("hello world")
