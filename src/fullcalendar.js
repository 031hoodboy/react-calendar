import React, { Component } from "react";

import FullCalendar from "rc-calendar/lib/FullCalendar";
import calendarCSS from "rc-calendar/assets/index.css";

import FCCSS from "rc-select/assets/index.css";
import Select from "rc-select";
import moment from "moment";

const now = moment();
const format = "YYYY-MM-DD";

const defaultCalendarValue = now.clone();
defaultCalendarValue.add(-1, "month");

function onSelect(value) {
	console.log("select", value.format(format));
}

class FC extends Component {
	state = {
		type: "date"
	};

	onTypeChange = (type) => {
		this.setState({
			type
		});
	};

	render() {
		return (
			<div>
				<FullCalendar
					Select={Select}
					fullscreen
					defaultValue={now}
					onSelect={onSelect}
					type={this.state.type}
					onTypeChange={this.onTypeChange}
				/>
			</div>
		);
	}
}

export default FC;
