import React, { useState } from "react";
import Tweet from "./components/Tweet";

function App() {
	// reminder: inputVal will be displayed inside input,
	// setInputVal() changes our input value.
	const [inputVal, setInputVal] = useState("");
	// values variable will store our array of data values
	// [{ value: "hello" }, { value: "world" }, { value: "what's up"}]
	const [values, setValues] = useState([]);

	return (
		<div className="App">
			{/* Reminder: we can display our state/any other JS 
            inside of our html (JSX) */}
			<h1>{inputVal}</h1>

			{/* We set the value displayed in the input with value={"display value"}
            
            We decide what happens when someone tries to change 
            the input with onChange={someFunction}*/}
			<input
				value={inputVal}
				onChange={(e) => {
					// when we want to exclude some input or otherwise process it,
					// this can be done inside our onChange function
					// if (!e.target.value.includes(" "))
					setInputVal(e.target.value);
				}}
			/>

			{/* We can do whatever we want when this button is clicked
            by passing in an onClick={someFunction}

            In this case, we choose to clear our input value 
            and add this to our state 
         */}
			<button
				onClick={() => {
					setInputVal("");
					setValues([...values, { value: inputVal }]);
				}}
			>
				Add Value
			</button>

			{/* We can map each of our array values into an HTML element */}
			<h3>Unordered list displaying array data:</h3>
			<ul>
				{values.map((item) => (
					<li key={item.value}>{item.value}</li>
				))}
			</ul>

			{/* Or we can pass in the required data into a separate component */}
			<h3>Rendered components displaying array data:</h3>
			{values.map((item) => (
				<Tweet key={item.value} value={item.value} />
			))}
		</div>
	);
}

export default App;
