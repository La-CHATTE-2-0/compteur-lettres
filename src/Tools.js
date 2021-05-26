const excludedChars = ['\n', '\r', '\t', ' ']

function Occurences(text) {

    let occurences = []

    for (const c of text) {
        if (!excludedChars.includes(c)){
            const c_occurence  = occurences[c]
            if (c_occurence)
            occurences[c] = occurences[c] + 1
            else
            occurences[c] = 1
        }
    }

    return occurences
}

function ExportOccurences(text) {

    const occurences = Occurences(text)
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