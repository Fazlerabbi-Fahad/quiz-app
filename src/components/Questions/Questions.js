import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from './../Quiz/Quiz'

const Questions = () => {
    const questions = useLoaderData();
    const question = questions.data;
    const quiz = question.questions;
    return (
        <div>
            <h1>{question.name}</h1>
            {
                // quiz.map(question => <Quiz
                //     key={question.id}
                //     question={question}></Quiz>)
            }
        </div>
    );
};

export default Questions;