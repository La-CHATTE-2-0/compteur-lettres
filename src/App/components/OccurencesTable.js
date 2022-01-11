import { Occurences } from "../tools/occurencesTool"

function OccurencesTable(props) {

    let occurences = Occurences(props.text, props.boolMemeInsigne)

    return (
        <div>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Insigne</th>
                        <th>Nombre</th>
                    </tr>
                </thead>
                <tbody>
                    {Object
                        .keys(occurences)
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

export default OccurencesTable;
