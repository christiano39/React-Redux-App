import React, { useState } from 'react';
import { connect } from 'react-redux';

import { getActivity } from '../actions'

const initialFormValues = {
    type: ''
}

const Form = props => {
    const [formValues, setFormValues] = useState(initialFormValues);

    const onInputChange = e => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        })
    }
    
    const getActivity = e => {
        e.preventDefault();
        props.getActivity(`http://www.boredapi.com/api/activity?type=${formValues.type}`);
    }

    return (
        <div className='form'>
            <h2>I'M BORED!</h2>
            <form onSubmit={getActivity}>
                <p>I need something to do! Preferably something</p>&nbsp;
                <select
                    name='type'
                    value={formValues.type}
                    onChange={onInputChange}
                >
                    <option value=''>that exists</option>
                    <option value='education'>educational</option>
                    <option value='recreational'>recreational</option>
                    <option value='social'>social</option>
                    <option value='diy'>DIY</option>
                    <option value='charity'>charitable</option>
                    <option value='cooking'>cooking-related</option>
                    <option value='relaxation'>relaxing</option>
                    <option value='music'>musical</option>
                    <option value='busywork'>to keep busy</option>
                </select>
                <button>Get activity</button>
            </form>
        </div>
    )
}

export default connect(null, { getActivity })(Form)