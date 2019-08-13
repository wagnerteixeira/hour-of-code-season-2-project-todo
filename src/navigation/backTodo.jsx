import React from 'react';
import PropTypes from 'prop-types';
import Reply from '@material-ui/icons/Reply';
import WithNavigationIcon from './withNavigationIcon';

function BackTodo({ goTo }) {
    return (
        <WithNavigationIcon goTo={goTo} goToPath={''} tooltip={'Voltar a lista de tarefas'}>
            <Reply />
        </WithNavigationIcon>
    );
};

BackTodo.propTypes ={
    goTo: PropTypes.func.isRequired
}

export default BackTodo;
