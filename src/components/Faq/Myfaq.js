import React, {useState} from 'react'

const Myfaq = ({question, answer}) => {
    const [show, setShow] = useState(false);
    return (
        <>
        <div className="main-heading">
            <p onClick={() => setShow(!show)}> {show? "➖" : "➕"} </p>
            <h4>{question}</h4>
        </div>
        { show && <p className="answer">{ answer}</p>}
       </>
    )
}

export default Myfaq
