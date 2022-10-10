import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Quiz from './../Quiz/Quiz'

const Questions = () => {
    const questions = useLoaderData();
    const question = questions.data;
    const quiz = question.questions;

    const CheckCorrectAnswer = (answer, correctAnswer) => {
        if (answer !== correctAnswer) {
            alert('Your answer is wrong');
        }
    };


    return (
        <div className='container mt-5'>
            <h1 className='fs-1 fw-bold mb-2'>{question.name}</h1>
            <h2 className='mb-5'>Total:{question.total}</h2>
            {
                quiz.map(question => <Quiz
                    key={question.id}
                    question={question}
                    CheckCorrectAnswer={CheckCorrectAnswer}></Quiz>)
            }
            <button className='btn text-decoration-none mb-5 border bg-secondary'><Link className='text-decoration-none text-white' to='/home'>Go to homepage</Link></button>
        </div>
    );
};

export default Questions;