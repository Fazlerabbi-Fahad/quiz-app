import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Footer from '../Footer/Footer';
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
        <div>
            <div className='container mt-5 pt-5 bg-black rounded pb-5 mb-5'>
                <h1 className='fs-1 fw-bold mb-2 text-white '>{question.name}</h1>
                <h2 className='mb-2 text-white'>Total:{question.total}</h2>
                <h2 className='mb-5 text-white'>Correct Answers:{answers.length}</h2>
                {
                    quiz.map(question => <Quiz
                        key={question.id}
                        question={question}
                        answers={answers}
                        CheckCorrectAnswer={CheckCorrectAnswer}></Quiz>)
                }

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Questions;