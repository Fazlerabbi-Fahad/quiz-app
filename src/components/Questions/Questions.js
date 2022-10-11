import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Quiz from './../Quiz/Quiz'

const Questions = () => {
    const questions = useLoaderData();
    const question = questions.data;
    const quiz = question.questions;
    const [answers, setAnswers] = useState([]);
    const CheckCorrectAnswer = (answer, correctAnswer) => {
        if (answer !== correctAnswer) {
            alert('Your Answer is Wrong');

        } else {
            const newAnswers = [...answers, answer];
            setAnswers(newAnswers);
        }

    };





    return (
        <div className='container mt-5'>
            <h1 className='fs-1 fw-bold mb-2'>{question.name}</h1>
            <h2 className='mb-2'>Total:{question.total}</h2>
            <h2 className='mb-5'>Correct Answers:{answers.length}</h2>
            {
                quiz.map(question => <Quiz
                    key={question.id}
                    question={question}
                    answers={answers}
                    CheckCorrectAnswer={CheckCorrectAnswer}></Quiz>)
            }
            <button className='btn text-decoration-none mb-5 border bg-secondary'><Link className='text-decoration-none text-white' to='/home'>Go to homepage</Link></button>

        </div>
    );
};

export default Questions;