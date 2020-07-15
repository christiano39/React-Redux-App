import React from 'react';
import { connect } from 'react-redux';

import { getActivity } from '../actions'

const Form = props => {
    return (
        <button onClick={props.getActivity}>Get activity</button>
    )
}

export default connect(null, { getActivity })(Form)