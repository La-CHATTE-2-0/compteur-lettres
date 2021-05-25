function Afficheur(props) {

    let occurences = Occurences(props.text)

    return (
        <div>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Insigne</th>
                        <th>Nombre</th>
                    </tr>
                </thead>
                <tbody>
                {Object.keys(occurences)
                .sort()
                .map(key => {
                    return (
                        <tr key={key}>
                            <td>{key}</td>
                            <td>{occurences[key]}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}

function Occurences(text) {

    const excludedChars = ['\n', '\r', '\t', ' ']
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

export default Afficheur;
