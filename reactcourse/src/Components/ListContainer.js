import React from 'react';
import PropTypes from 'prop-types';
import Container from './Container';

const renderContainer = props => {
    return props.timers.map((timer => {
        return (
            <Container
                key={timer.id}
                {...timer}
                onFormSubmit={props.onFormSubmit}
                onDelete={props.onDelete}
                onPlay={props.onPlay}
                onPause={props.onPause}
            />
        )
    }))
}

const ListContainer = (props) => {
    return (
        <div className="list--container">
            {renderContainer(props)}
        </div>
    )
}

ListContainer.propTypes = {
    timers: PropTypes.array.isRequired,
    onFormSubmit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onPlay: PropTypes.func.isRequired,
    onPause: PropTypes.func.isRequired
}

export default ListContainer