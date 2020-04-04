import React, { Component } from 'react';
import ActionContainer from './ActionContainer';
import ListContainer from './ListContainer';
import uuid from 'uuid/v4';

class Box extends Component {
    state = {
        timers: [
            {
                title: "Apprendre React",
                project: "Développement web",
                elapsed: 5609620,
                id: "012651894651",
                runningSince: null
            },
            {
                title: "Apprendre Angular",
                project: "Développement web",
                elapsed: 1349620,
                id: "012651894652",
                runningSince: null
            }
        ]
    }
    handleCreateTimer = ({title, project }) => {
        const timer = {
            title,
            project,
            id: uuid(),
            elapsed: 0,
            runningSince: null
        }
        this.setState({
            timers: [...this.state.timers, timer]
        })
    }
    handleEditTimer = ({id, title, project}) => {
        this.setState({
            timers: this.state.timers.map(timer => {
                if(timer.id === id) {
                    return {
                        ...timer,
                        title,
                        project
                    }
                }
                return {...timer }
            })
        })
    }

    handleDelete = id => {
        this.setState({
            timers: this.state.timers.filter(timer => timer.id !== id)
        });
    }

    handlePlay = id => {
        const now = Date.now();
        this.setState({
            timers: this.state.timers.map(timer => {
                if(id === timer.id) {
                    return {
                        ...timer,
                        runningSince: now
                    }
                } else {
                    return {...timer}
                }
            })
        })
    }

    handlePause = id => {
        const now = Date.now();
        this.setState({
            timers: this.state.timers.map(timer => {
                if(id === timer.id) {
                    const nextElapsed = now - timer.runningSince
                    return {
                        ...timer,
                        runningSince: null,
                        elapsed: timer.elapsed + nextElapsed
                    }
                } else {
                    return {...timer}
                }
            })
        })
    }
    render(){
        return (
            <div className="boxed--view">
                <div className="boxed--view__box">
                    <ListContainer 
                    timers= {this.state.timers} 
                    onFormSubmit={this.handleEditTimer}
                    onDelete={this.handleDelete}
                    onPlay={this.handlePlay}
                    onPause={this.handlePause}
                    />
                    <ActionContainer  onFormSubmit={this.handleCreateTimer}/>
                </div>
            </div>

        )
    } 
}

export default Box