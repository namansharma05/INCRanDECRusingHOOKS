import React,{useReducer} from 'react';
import './styles.css';

const reducer = (state,action)=>{
	if(action.type === "INCR"){
		state = state+1;
	}
	if(state>0 && action.type === "DECR"){
		state = state-1;
	}
	return state;
}

const UseReducer = ()=>{
	const[state,dispatch] = useReducer(reducer,0);
	return (
		<>
			<p>{state}</p>
			<div className = "button2" onClick = {()=> dispatch({type: "INCR"}) }>INCR</div>
			<div className = "button2" onClick = {()=> dispatch({type: "DECR"})} >DECR</div>
		</>
	)
}

export default UseReducer;