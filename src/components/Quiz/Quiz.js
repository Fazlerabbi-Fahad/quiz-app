import React from 'react';
import './Quiz.css';
import { EyeIcon } from '@heroicons/react/24/solid';

const Quiz = (props) => {
    const { question, options, correctAnswer } = props.question;
    const ShowCorrectAnswer = correctAnswer => {
        alert(correctAnswer);
    }

    return (
        <div className='border rounded m-5 p-5 quiz'>
            <div className='d-flex justify-content-between' >
                <h2>{question}</h2>
                <EyeIcon title="It's the correct answer" onClick={() => ShowCorrectAnswer(correctAnswer)} className='btn-icon mb-5'></EyeIcon>
            </div>
            {
                options.map(option =>
                    <button className='btn border me-5 mt-3 btn-quiz'
                        onClick={() => props.CheckCorrectAnswer(option, correctAnswer)}>{option}</button>)
            }


        </div>
    )
};

export default Quiz;