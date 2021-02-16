import React from 'react';

export const GrifGridItem = ({ url, id, title }) => {
    return (
        <div className="card animate__animated animate__backInRight">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    );
};
