import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GrifGridItem } from './GrifGridItem';

export const GifGrid = ({ category }) => {
    const { data, loading } = useFetchGifs(category);
    return (
        <>
            <h3>{category}</h3>
            {loading && <p className="animate__animated animate__flash">Loading...</p>}
            {
                <div className="card-grid">
                    {data.map((img) => (
                        <GrifGridItem key={img.id} {...img} />
                    ))}
                </div>
            }
        </>
    );
};
