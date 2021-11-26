import React from 'react'
import './Result_Styled.css'
import ResultItem from '../ResultItem/ResultItem'

function Result() {
    const items = [
    {
        content: "combinatorics",
    },
    {
        content: "graph-theory",
    },
    {
        content: "game-theory",
    },
    {
        content: "closed-form",
    },
    {
        content: "theories",
    },

] 



    return (
        <div className="result--container">
            <div className="result--inner-container">
                <h3>Not the answer you are looking for?</h3>
                <h5>Browse other questions with the following tags:</h5>
                {items.map(item => <ResultItem content={item.content}/>)}
            </div>
        </div>
    )
}

export default Result
