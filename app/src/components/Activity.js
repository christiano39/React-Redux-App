import React from 'react';
import { connect } from 'react-redux';

const Activity = props => {
    return (
        <div>
            {props.error !== '' ? <span>{props.error}</span> : ''}
            {
                props.activity ?
                props.isFetching ? <h2>Loading...</h2> :
                <p>Here's an idea! You should {props.activity.activity.toLowerCase()}</p>
                : ''
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isFetching: state.isFetching,
        activity: state.activity,
        error: state.error
    }
}

export default connect(mapStateToProps, {})(Activity);