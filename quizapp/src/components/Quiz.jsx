import { useState, useEffect } from "react";
import questionsData from "./data";

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);

    const [score, setScore] = useState(() => {
        const savedScore = localStorage.getItem("score");
        return savedScore ? JSON.parse(savedScore) : 0;
    });

    useEffect(() => {
        localStorage.setItem("score", JSON.stringify(score));
    }, [score]);

    const handleAnswerClick = (option) => {
        if (isAnswered) return;

        setSelectedAnswer(option);
        setIsAnswered(true);

        if (option === questionsData[currentQuestion].answer) {
            setScore((prev) => prev + 1);
        }

        setTimeout(() => {
            const next = currentQuestion + 1;

            if (next < questionsData.length) {
                setCurrentQuestion(next);
                setSelectedAnswer(null);
                setIsAnswered(false);
            } else {
                setShowResult(true);
            }
        }, 1500);
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowResult(false);
        setSelectedAnswer(null);
        setIsAnswered(false);
        localStorage.removeItem("score");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-600 p-4">
            <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl p-8 text-center">
                <h1 className="text-3xl font-bold text-indigo-600 mb-6">
                    Programming & Tech Quiz
                </h1>

                {showResult ? (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-semibold text-gray-700">
                            Final Score
                        </h2>

                        <p className="text-4xl font-bold text-green-600">
                            {score} / {questionsData.length}
                        </p>

                        <button
                            onClick={restartQuiz}
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition duration-300"
                        >
                            Restart Quiz
                        </button>
                    </div>
                ) : (
                    <div>
                        <div className="flex justify-between text-sm text-gray-500 mb-4">
                            <span>
                                Question {currentQuestion + 1} / {questionsData.length}
                            </span>
                        </div>

                        <h3 className="text-lg font-semibold text-gray-800 mb-6">
                            {questionsData[currentQuestion].question}
                        </h3>

                        <div className="space-y-3">
                            {questionsData[currentQuestion].options.map((option, index) => {
                                let buttonStyle =
                                    "w-full border py-2 rounded-lg transition duration-300 ";

                                if (isAnswered) {
                                    if (option === questionsData[currentQuestion].answer) {
                                        buttonStyle += "bg-green-500 text-white";
                                    } else if (option === selectedAnswer) {
                                        buttonStyle += "bg-red-500 text-white";
                                    } else {
                                        buttonStyle += "bg-gray-200";
                                    }
                                } else {
                                    buttonStyle +=
                                        "border-indigo-400 text-indigo-600 hover:bg-indigo-500 hover:text-white";
                                }

                                return (
                                    <button
                                        key={index}
                                        onClick={() => handleAnswerClick(option)}
                                        className={buttonStyle}
                                        disabled={isAnswered}
                                    >
                                        {option}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Quiz;