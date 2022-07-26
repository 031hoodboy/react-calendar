import React, { Component } from 'react';

const Style = {
  width: "50%"  
};

class Panel extends Component {

  render(){
    return(
        <>
          <div style={Style}>
            <div>
              div1
            </div>
            <div>
              div2
            </div>
          </div>
        </>
    );
  }
};


export default Panel;