

let nada = "1a"

const decoder = str => {
    
    let word = '';
    let abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    for (let i = 1; i < str.length; i++) {
        for(let g = 0; g < abc.length; g++) {
            let j = g + parseInt(str[0])
            if(str[i] === abc[g]) {
                word += abc[j]
            }
        }
    }
    console.log(word)
}

decoder(nada)

//another way to solvete


// function decoder (str) {
//     let num = +str[0]

//     let answer = ''

//     str = str.toLowerCase()

//     for(let i = 1; i < str.length; i++) {
//         let origTndex = letterList.indexOf(str[i])

//         if ((newIndex + 1) > 26) {
//             newIndex = (newIndex + 1) % 26 - 1
//         }

//         answer += letterList[newIndex]
//     }

//     return answer
// }

// console.log(decode("1a"))