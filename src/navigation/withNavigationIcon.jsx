import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core/';
import Tooltip from '@material-ui/core/Tooltip';

function WithNavigationIcon({ goTo, children, goToPath, tooltip }) {
    return (
        <Tooltip title={tooltip}>
            <IconButton color="inherit" onClick={() => goTo(goToPath)}>
                {children}
            </IconButton>
        </Tooltip>
    );
};

WithNavigationIcon.propTypes = {
    goTo: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
    goToPath: PropTypes.string.isRequired,
    tooltip: PropTypes.string.isRequired,
}

export default WithNavigationIcon;
