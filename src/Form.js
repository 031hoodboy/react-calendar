import React from "react";

export default (_) => {
	const [state, setState] = React.useState({
		name: "",
		password: ""
	});

	return (
		<div>
			<Title title="LOGIN" />
			<input
				type="text"
				value={state.name}
				onChange={(e) => setState({ ...state, name: e.target.value })}
			/>
			<br />
			<input
				type="password"
				value={state.password}
				onChange={(e) => setState({ ...state, password: e.target.value })}
			/>
			<br />
			<button className="btn">submit</button>
			{state.name}
			{state.password}
		</div>
	);
};

export const Title = ({ title, classes }) => {
	return <div className={classes}>{title}</div>;
};
