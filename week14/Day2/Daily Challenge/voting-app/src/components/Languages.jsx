import "./Language.css"

const Languages = (props) => {
    const addVotes = () => {
        props.increaseVotes(props.name); // Call increaseVotes function with the language name
     }

    return <div className="button" onClick={addVotes}>
   <span> {props.votes} </span>
   <span> {props.name} </span>
   <p className="p">Click Here</p>
    </div>
}

export default Languages