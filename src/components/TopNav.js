import React from "react";

class TopNav extends React.Component {
    updateCategory = (e) => {
        e.preventDefault()
        this.props.changeCategory(e.target.id)
    }

    render(){
        return(
            <div className="top-nav">
                <ul>
                    <li><a id="headlights" href="#" onClick={this.updateCategory}>Car Lights</a></li>
                    <li><a id="tires" href="#" onClick={this.updateCategory}>Car Wheels</a></li>
                    <li><a id="bumpers" href="#" onClick={this.updateCategory}>Bumpers</a></li>
                    <li><a id="audio" href="#" onClick={this.updateCategory}>Car Audiosystem</a></li>
                    <li><a id="engine" href="#" onClick={this.updateCategory}>Engine Parts</a></li>
                    <li><a href="contact.html">Feedback</a></li>
                    <div className="clear"> </div>
                </ul>
            </div>
        );
    }
}

export default TopNav;