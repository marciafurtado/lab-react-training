import React, { Component } from 'react';


class LikeButton extends Component {
    state = {
        clickCount: 0,
        liked: false
    }

    clickHandler = () => {
        this.setState({
            clickCount: this.state.clickCount + 1
        });
    }

    likeHandler = () => {
        this.setState({
            like: !this.state.liked
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>{this.state.clickCount} likes</button>
            </div>
        )
    }
}
export default LikeButton;