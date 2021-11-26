import React from 'react'
import {useQuill} from 'react-quilljs'
import 'quill/dist/quill.snow.css';
import './Quill_Styled.css'

function Quill() {

    const placeholder = 'Start typing your answer';
    
    const {quill, quillRef} = useQuill({placeholder});
    console.log(quill);
    console.log(quillRef);


    return (
            <div>
                <div ref={quillRef} style={{height: '90px', fontWeight:'normal'}}/>
                <button className="quill--button">Post Your Answer</button>
            </div>
    )
}

export default Quill
