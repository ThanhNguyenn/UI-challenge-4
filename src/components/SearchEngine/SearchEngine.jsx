import React from 'react'
import './SearchEngine_Styled.css'
import Policy from '../Policy/Policy';
import Quill from '../Quill/Quill';

function SearchEngine() {
 
    return (
        <div className="searchEngine--container">
            <div className="searchEngine--inner-container">
               <h3>Your answer</h3>
               <Quill />
               <Policy />
            </div>
        </div>

    )
}

export default SearchEngine
