import React from 'react';
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';

const Activity = props => {
    const expense = () => {
        const num = Math.round(props.activity.price * 5);
        let priceArr = []
        if (num === 0) {
            return [];
        }
        for (let i = 1; i <= 5; i++){
            if (i <= num) {
                priceArr.push(1);
            }else {
                priceArr.push(0);
            }
        }
        console.log(priceArr);
        return priceArr;
    }
    
    return (
        <div>
            {props.error !== '' ? <span>{props.error}</span> : ''}
            {
                props.activity ?
                props.isFetching ? <h3>Loading...</h3> :
                <div className='activity'>
                    <h2>Here's an idea!</h2>
                    <p> You should {props.activity.activity.toLowerCase()}.</p>
                    <p>{ expense().length > 0 ?
                        expense().map(item => {
                            if (item === 1) {
                                return <span key={uuid()} className='money colored'>$</span>
                            }else {
                                return <span key={uuid()} className='money greyed'>$</span>
                            }
                        })
                        : <span>It's FREE!</span>
                    }</p>
                </div>
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