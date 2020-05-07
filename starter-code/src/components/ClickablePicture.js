import React, { Component } from 'react';


class ClickablePicture extends Component {

    state = {
        imgClicked: false
    }

    clickHandler = () => {
        this.setState({
            imgClicked: !this.state.imgClicked
        });
    }

    render () {
        
        return (
            <div>

            </div>
        )
    }    
}



export default ClickablePicture;