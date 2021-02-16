import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategy }) => {
    const [state, setState] = useState('');

    const handleChangeInput = (e) => {
        setState(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (state.trim().length > 2) {
            setCategy((category) => [state, ...category]);
            setState('');
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={state} onChange={handleChangeInput} />
        </form>
    );
};

AddCategory.propTypes = {
    setCategy: PropTypes.func.isRequired,
};
