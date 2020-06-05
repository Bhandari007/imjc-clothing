import React from 'react';
import './preview.styles.scss';
import Collection from '../collection/collection.component';

const PreviewCollection = ({title , items})=>(
    <div className ="collection-preview">
        <h1 className = 'title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
            .filter((item , idx)=> idx < 4)
            .map(({ id, ...otherItemsProps})=>(
                <Collection key={id} {...otherItemsProps}/>
            ))}

        </div>
    </div>
);

export default PreviewCollection;

