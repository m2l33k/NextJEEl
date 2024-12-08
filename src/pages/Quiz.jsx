import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import '../styles/quiz.css';

const DyslexiaQuiz = () => {
    const [answers, setAnswers] = useState({});
    const navigate = useNavigate(); // Hook for navigation

    const handleChange = (e, questionId) => {
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionId]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Redirect to the books page immediately after form submission
        navigate('/books'); // Replace '/books' with the actual route to your books page
    };

    return (
        <div className="quiz-page">
            <h2>Awareness Quiz</h2>
            <form onSubmit={handleSubmit}>
                <div className="question">
                    <p>1. Do you often struggle with reading words out loud?</p>
                    <label>
                        <input
                            type="radio"
                            value="yes"
                            checked={answers.q1 === 'yes'}
                            onChange={(e) => handleChange(e, 'q1')}
                        />
                        Yes
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="no"
                            checked={answers.q1 === 'no'}
                            onChange={(e) => handleChange(e, 'q1')}
                        />
                        No
                    </label>
                </div>
                <div className="question">
                    <p>2. Do you often mix up letters or numbers while writing or reading?</p>
                    <label>
                        <input
                            type="radio"
                            value="yes"
                            checked={answers.q2 === 'yes'}
                            onChange={(e) => handleChange(e, 'q2')}
                        />
                        Yes
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="no"
                            checked={answers.q2 === 'no'}
                            onChange={(e) => handleChange(e, 'q2')}
                        />
                        No
                    </label>
                </div>
                <div className="question">
                    <p>3. Do you often find it difficult to spell words correctly?</p>
                    <label>
                        <input
                            type="radio"
                            value="yes"
                            checked={answers.q3 === 'yes'}
                            onChange={(e) => handleChange(e, 'q3')}
                        />
                        Yes
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="no"
                            checked={answers.q3 === 'no'}
                            onChange={(e) => handleChange(e, 'q3')}
                        />
                        No
                    </label>
                </div>
                <div className="question">
                    <p>4. Do you have difficulty with handwriting or feel that your handwriting is often illegible?</p>
                    <label>
                        <input
                            type="radio"
                            value="yes"
                            checked={answers.q4 === 'yes'}
                            onChange={(e) => handleChange(e, 'q4')}
                        />
                        Yes
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="no"
                            checked={answers.q4 === 'no'}
                            onChange={(e) => handleChange(e, 'q4')}
                        />
                        No
                    </label>
                </div>
                <div className="question">
                    <p>5. Do you often feel confused when reading or processing written information?</p>
                    <label>
                        <input
                            type="radio"
                            value="yes"
                            checked={answers.q5 === 'yes'}
                            onChange={(e) => handleChange(e, 'q5')}
                        />
                        Yes
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="no"
                            checked={answers.q5 === 'no'}
                            onChange={(e) => handleChange(e, 'q5')}
                        />
                        No
                    </label>
                </div>
                <div className="question">
                    <p>6. Do you have trouble remembering the order of letters in words?</p>
                    <label>
                        <input
                            type="radio"
                            value="yes"
                            checked={answers.q6 === 'yes'}
                            onChange={(e) => handleChange(e, 'q6')}
                        />
                        Yes
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="no"
                            checked={answers.q6 === 'no'}
                            onChange={(e) => handleChange(e, 'q6')}
                        />
                        No
                    </label>
                </div>
                <div className="question">
                    <p>7. Do you struggle with remembering instructions or following multi-step directions?</p>
                    <label>
                        <input
                            type="radio"
                            value="yes"
                            checked={answers.q7 === 'yes'}
                            onChange={(e) => handleChange(e, 'q7')}
                        />
                        Yes
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="no"
                            checked={answers.q7 === 'no'}
                            onChange={(e) => handleChange(e, 'q7')}
                        />
                        No
                    </label>
                </div>
                <div className="question">
                    <p>8. Do you find it hard to differentiate between left and right?</p>
                    <label>
                        <input
                            type="radio"
                            value="yes"
                            checked={answers.q8 === 'yes'}
                            onChange={(e) => handleChange(e, 'q8')}
                        />
                        Yes
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="no"
                            checked={answers.q8 === 'no'}
                            onChange={(e) => handleChange(e, 'q8')}
                        />
                        No
                    </label>
                </div>
                <div className="question">
                    <p>9. Do you have trouble understanding reading material when it involves complex words or phrases?</p>
                    <label>
                        <input
                            type="radio"
                            value="yes"
                            checked={answers.q9 === 'yes'}
                            onChange={(e) => handleChange(e, 'q9')}
                        />
                        Yes
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="no"
                            checked={answers.q9 === 'no'}
                            onChange={(e) => handleChange(e, 'q9')}
                        />
                        No
                    </label>
                </div>
                <div className="question">
                    <p>10. Do you find it difficult to concentrate or stay focused on reading for extended periods?</p>
                    <label>
                        <input
                            type="radio"
                            value="yes"
                            checked={answers.q10 === 'yes'}
                            onChange={(e) => handleChange(e, 'q10')}
                        />
                        Yes
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="no"
                            checked={answers.q10 === 'no'}
                            onChange={(e) => handleChange(e, 'q10')}
                        />
                        No
                    </label>
                </div>
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
};

export default DyslexiaQuiz;
