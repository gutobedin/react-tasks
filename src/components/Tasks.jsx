import '../App'

export function Tasks(props) {
    return (
        <div>
            <h2>{props.author}</h2>
            <h3>{props.content}</h3>
        </div>

    )
}