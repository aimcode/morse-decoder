const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = []
    let size = expr.length / 10

    for (let i = 0, j = 0 ; i < size; i++, j+=10) {
        arr.push(expr.slice(j, j+10))
    }

    arr = arr.map(el => {
        let str = ""

        if(el.includes("*")) return " "
        for(let i = 0; i < el.length; i += 2) {
            let subStr = el.slice(i, i+2)

            switch (subStr) {
                case "10":
                    str += "."
                    break
                case "11":
                    str += "-"
                    break
                default:
                    str += ""
            }
        }

        return MORSE_TABLE[str]
    })

    return arr.join("")
}

module.exports = {
    decode
}