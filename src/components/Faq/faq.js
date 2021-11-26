import React, {useState} from 'react';
import { questions } from './api';
import "./faq.css";
import Myfaq from './Myfaq';

const Faq = () => {
    const [data, setData] = useState(questions);
    return (
        <>
            <section className="main-div">
                <h1>Have a Question ?</h1>
                 {
                 data.map((curElem) => {
                   const { id } = curElem;
                   return <Myfaq key={ id} { ... curElem} />
                 })
            }
            </section>
        </>
    )
}

export default Faq
