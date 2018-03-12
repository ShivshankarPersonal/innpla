import React from 'react'
import PropTypes from 'prop-types'

const OtherCount = ({name, value}) => (
    <div>
        <span className="oc-value">
            {value}
        </span>
        <span className="oc-name">
            {name}
        </span>
    </div>
);

OtherCount.propTypes = {
    name:PropTypes.string.isRequired,
    value:PropTypes.string.isRequired
};

export default OtherCount;