import React from "react";

const Tweet = (props) => {
	const value = props.value;
	return (
		<div style={{ border: "1px solid black" }}>
			<p>cool component 😎🤯🧐</p>
			<h4>{value}</h4>
		</div>
	);
};

export default Tweet;
