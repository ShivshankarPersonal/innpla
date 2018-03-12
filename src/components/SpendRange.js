import React from 'react'
import PropTypes from 'prop-types'

const SpendRange = ({initialValue}) => (
    <input type="range" defaultValue={initialValue.substr(0,initialValue.length-1)}/>
);

SpendRange.propTypes = {
    initialValue:PropTypes.string.isRequired
};

export default SpendRange;