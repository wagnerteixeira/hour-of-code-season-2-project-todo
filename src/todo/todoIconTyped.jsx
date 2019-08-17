import React from 'react';
import { ListAlt, CheckCircleOutline, Update } from '@material-ui/icons';

function TodoIconTyped({ type, ...props }) {
    switch (type) {
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

export default TodoIconTyped;