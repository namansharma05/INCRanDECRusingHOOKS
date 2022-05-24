import React,{useState, useEffect} from 'react';
import './styles.css';
const UseHooks = ()=>{
	const [val,setVal] = useState(0);
	useEffect(()=>{
		document.title = `cliked(${val})`;	
	});
	return(
		<>
			<p>{val}</p>
			<div className = "button2" onClick = {()=>{
				setVal(val+1);
				// console.log(val);
			}} >INCR</div>
			<div className = "button2" onClick = {()=>{ val>=1?
				setVal(val-1):setVal(0);
				// console.log(val);
			}}>DECR</div>
		</>
	);
}

export default UseHooks;