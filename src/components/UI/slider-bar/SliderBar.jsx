import React from 'react';

const SliderBar = ({displayList}) => {
    return (
        <nav>
            {
                displayList.map(item => (
                    <button></button>
                ))
            }
        </nav>
    );
};

export default SliderBar;