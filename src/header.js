import React from "react";
import Title from "./Form";

const Spacer = (_) => <div className="spacer" />;

export default (_) => {
	return (
		<div className="header">
			<Title title="APP" classes="headertitle" />
			<Spacer />
			<div className="btns">
				<button className="link">Anmelden</button>
				<button className="link">Calender</button>
				<button className="link">Admin</button>
				<button className="link">Abmelden</button>
			</div>
		</div>
	);
};
