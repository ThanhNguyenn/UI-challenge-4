import React from 'react'
import './Page_Styled.css'
import SearchEngine from '../SearchEngine/SearchEngine'
import Result from '../Result/Result'
function Page() {
    return (
        <div>
            <SearchEngine />
            <Result />
        </div>
    )
}

export default Page
