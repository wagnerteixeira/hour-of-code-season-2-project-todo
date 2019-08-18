import React from 'react';
import PropTypes from 'prop-types';
import { ListAlt, CheckCircleOutline, Update } from '@material-ui/icons';

function TodoIconTyped({ status, ...props }) {
    switch (status) {
        case 'TODO':
            return <ListAlt fontSize="large" {...props} />;
        case 'DOING':
            return <Update fontSize="large" {...props}/>;
        case 'DONE':
            return <CheckCircleOutline fontSize="large" {...props} />
        default:
            return null;
    }
}

TodoIconTyped.propTypes ={
    status: PropTypes.string.isRequired
}
export default TodoIconTyped;