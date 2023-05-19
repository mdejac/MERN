import React from "react";

class LightSwitch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            position: true
        }
    };

    render() {
        return(
            <fieldset>
                <p>This light is currently {this.state.position ? 'On' : 'Off'}</p>
                <button onClick={() => this.setState({position : !this.state.position})}>Flip Switch</button>
            </fieldset>
        );
    }
}

export default LightSwitch