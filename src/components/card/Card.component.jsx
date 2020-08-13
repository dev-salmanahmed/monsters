import React from 'react';
import './Card.styles.scss';

export const Card = props => {
        return <div className='card-container'>
                        <img alt='monsters' src={`${props.monster.avatar_url}`} />
                        <h1>{props.monster.login}</h1>
                        {/* <span>{props.monster.url}</span> */}
                </div>
};