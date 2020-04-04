import React, { Component } from 'react';
import '../helpers';

class Timer extends Component {

    componentDidMount(){
        this.myInterval = setInterval(() => { this.forceUpdate()}, 50)
    }
    componentWillUnmount(){
        clearInterval(this.myInterval);
    }

    handlePlay = () => {
        this.props.onPlay(this.props.id);
    }
    handlePause = () => {
        this.props.onPause(this.props.id)
    }
    renderButton(){
        if(this.props.runningSince) {
            return <button className="button" onClick={this.handlePause}>Pause</button>
        } else {
            return <button className="button" onClick={this.handlePlay}>Play</button>
        }
    }
    render(){
        const elapsedString = window.helpers.renderElapsedString(
            this.props.elapsed,
            this.props.runningSince
        )
        return (
            <div className="timer--box">
                <div className="timer--content">
                    <div className="timer--header">
                        <h2>{this.props.title}</h2>
                    </div>
                    <div className="timer--meta">
                        <p>{this.props.project}</p>
                    </div>
                    <div className="timer--h2">
                        <h4>{elapsedString}</h4>
                    </div>
                    <div className="actions">
                        <span className="trash" onClick={() => {this.props.onDelete(this.props.id)}}>Supprimer</span>
                        <span className="edit" onClick={this.props.onEditFormOpen}>Modifier</span>
                    </div>
                </div>
                {this.renderButton()}
            </div>
        )
    }
}

export default Timer