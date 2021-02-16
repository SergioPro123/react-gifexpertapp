import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
const GifExpertApp = () => {
    // const category = ['PLC', 'Arduino', 'SCADA'];
    const [category, setCategory] = useState(['PLC']);

    /*const handdleAdd = () => {
        setCategy([...category, 'Nuevo Elemento']);
    }; */
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategy={setCategory} />
            <hr />

            <ol>
                {category.map((category) => (
                    <GifGrid key={category} category={category} />
                ))}
            </ol>
        </>
    );
};

export default GifExpertApp;
