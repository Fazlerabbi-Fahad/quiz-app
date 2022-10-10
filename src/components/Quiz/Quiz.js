import React from 'react';

const Quiz = ({ question }) => {
    console.log(question.question);
    return (
        <div>
            {/* <h2>{question.question}</h2>
            <p>{question.correctAnswer}</p> */}
        </div>
    );
};

export default Quiz;