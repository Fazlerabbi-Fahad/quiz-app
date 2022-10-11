import React from 'react';
import './Quiz.css';
import { EyeIcon } from '@heroicons/react/24/solid';

const Quiz = (props) => {
    const { question, options, correctAnswer } = props.question;
    let answer;
    for (answer of props.answers) {
        console.log(answer);
    }
    console.log(answer);
    const ShowCorrectAnswer = correctAnswer => {
        alert(correctAnswer);
    }

    return (
        <div className='border rounded m-5 p-5 quiz'>
            <div className="container">
                <div className="row">
                    <div className='col-10' >
                        <h2>{question}</h2>
                    </div>
                    <div className="col-2">
                        <EyeIcon title="It's the correct answer" onClick={() => ShowCorrectAnswer(correctAnswer)} className='btn-icon mb-5'></EyeIcon>

                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {
                        options.map(option =>
                            <button className='btn border col-5 me-5 mt-3 btn-quiz'
                                onClick={() => props.CheckCorrectAnswer(option, correctAnswer)}>{option}</button>)
                    }
                </div>
            </div>


        </div >
    )
};

export default Quiz;