import React from 'react'
import './ResultItem_Styled.css'
function ResultItem({content}) {
    return (
        <div className="resultItem--container">
            {content}
        </div>
    )
}

export default ResultItem
