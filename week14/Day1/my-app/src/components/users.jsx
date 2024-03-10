import './users.css'
import Switch from '@mui/material/Switch';

const User = (props) => {
    console.log(props);
    return(
        <div className="dib bg-light-green br3 pa3 ma2 bw2 grow shadow">
            <img src={`https://robohash.org/${props.id}?size=150x150`}/>
            <h2>{props.name}</h2>
            <h4>{props.username}</h4>
            <p>{props.email}</p>
            <Switch defaultChecked/>
        </div>
    )
}

export default User