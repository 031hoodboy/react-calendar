import React, { Component } from "react";

import Header from "./header";
import FC from "./fullcalendar";
import Panel from "./panel";

const PanelStyle = {
  padding: "10px",
};

const FCStyle = {
  width: "70%",
  float: "left",
  marginLeft: "5%",
  marginRight: "2.5%",
}

const divStyle = {
  width: "20%",
  overflow: "hidden",
  marginLeft: "2.5%",
  marginRight: "5%",
  border: "black solid 1px",
}

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div style={PanelStyle}>
          <div style={FCStyle}>  
            <FC/>
          </div>
          <div style={divStyle}>
            <Panel/>
          </div>
        </div>
      </>
    );
  }
};

// <div style={divStyle}>
//   <Calender
//     style={textStyle}
//     showDateInput={false}
//     showToday={false}
//     onSelect={clickEvent}
//   />
// </div>

export default App;