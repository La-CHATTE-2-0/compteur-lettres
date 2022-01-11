const excludedChars = ['\n', '\r', '\t', ' ']
const equivalentChars = {
    "9": "6",
    "O": "0",
    "^": "v",
    "⁰": "o"
}

function Occurences(text, boolMemeInsigne) {

    let occurences = []

    for (let c of text) {
        if (!excludedChars.includes(c)) {
            if (boolMemeInsigne && equivalentChars[c])
                c = equivalentChars[c]

            const c_occurence = occurences[c]
            if (c_occurence)
                occurences[c] = occurences[c] + 1
            else
                occurences[c] = 1
        }
    }

    return occurences
}

function ExportOccurences(text, boolMemeInsigne) {

    const occurences = Occurences(text, boolMemeInsigne)
    let exportArr = [];

    Object
        .keys(occurences)
        .sort()
        .forEach(key => {
            exportArr.push({
                lettre: key,
                nombre: occurences[key]
            })
        })

    return exportArr
}

export { Occurences, ExportOccurences, excludedChars }