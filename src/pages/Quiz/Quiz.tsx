import React, { useState } from "react";
import "../../assets/css/Quiz.css";
import routingTable from "../../assets/img/quiz.png";

const Quiz: React.FC = () => {
	const [showResults, setShowResults] = useState(false);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);

	const questions = [
		{
			text: "Which of the following is the correct order of encapsulation?",
			options: [
				{ id: 0, text: "Network - Data link - Physical", isCorrect: false },
				{ id: 1, text: "Application - Transport - Network - Data link", isCorrect: false },
				{ id: 2, text: "Transport - Application - Network - Data link", isCorrect: false },
				{ id: 3, text: "Physical - Data link - Network - Transport - Application", isCorrect: true },
			],
		},
		{
			text: "HTTP is deployed on which of the following layers?",
			options: [
				{ id: 0, text: "Application layer", isCorrect: true },
				{ id: 1, text: "Network layer", isCorrect: false },
				{ id: 2, text: "Transport layer", isCorrect: false },
				{ id: 3, text: "Data link layer", isCorrect: false },
			],
		},
		{
			text: "Which of the following layer is not included in the TCP/IP model?",
			options: [
				{ id: 0, text: "Presentation layer", isCorrect: true },
				{ id: 1, text: "Network layer", isCorrect: false },
				{ id: 2, text: "Application layer", isCorrect: false },
				{ id: 3, text: "Data link layer", isCorrect: false },
			],
		},
		{
			text: "Which of the following belongs to the transmission device?",
			options: [
				{ id: 0, text: "Switch", isCorrect: false },
				{ id: 1, text: "Cookie", isCorrect: false },
				{ id: 2, text: "Cable", isCorrect: true },
				{ id: 3, text: "Public key", isCorrect: false },
			],
		},
		{
			text: "Which fields of IP header is IP address filled?",
			options: [
				{ id: 0, text: "Source IP", isCorrect: true },
				{ id: 1, text: "TTL", isCorrect: false },
				{ id: 2, text: "DF", isCorrect: false },
				{ id: 3, text: "Header checksum", isCorrect: false },
			],
		},
		{
			text: "Which field is changed during the packet transmission?",
			options: [
				{ id: 0, text: "Network header - TTL", isCorrect: true },
				{ id: 1, text: "Network header - version", isCorrect: false },
				{ id: 2, text: "Ethernet header - Type", isCorrect: false },
				{ id: 3, text: "Network header - DF", isCorrect: false },
			],
		},
		{
			text: "Which of the following is the user input URL from the animation?",
			options: [
				{ id: 0, text: "Ece.utoronto.ca", isCorrect: true },
				{ id: 1, text: "1 Yonge st.", isCorrect: false },
				{ id: 2, text: "147.322.51.1", isCorrect: false },
				{ id: 3, text: "80:61:5f:08:2c:56", isCorrect: false },
			],
		},
		{
			text: "Based on the longest prefix match and routing table provided below, the IP address 204.100.12.0 should be directed to which interface?",
			options: [
				{ id: 0, text: "Eth0", isCorrect: false },
				{ id: 1, text: "Eth1", isCorrect: true },
				{ id: 2, text: "Eth2", isCorrect: false },
				{ id: 3, text: "None of above", isCorrect: false },
			],
		},
	];


	/* A possible answer was clicked */
	const optionClicked = (isCorrect: boolean) => {
		// Increment the score
		if (isCorrect) {
			setScore(score + 1);

		}

		if (currentQuestion + 1 < questions.length) {
			setCurrentQuestion(currentQuestion + 1);
		} else {
			setShowResults(true);
		}
	};

	/* Resets the quiz back to default */
	const restartQuiz = () => {
		setScore(0);
		setCurrentQuestion(0);
		setShowResults(false);
	};

	return (
    <div className="section_wrapper">
        {/* 1. Header  */}
        <h1>Quiz</h1>

        {/* 2. Current Score  */}
        <h2>Score: {score}</h2>

        {/* 3. Show results or show the question  */}
        {showResults ? (
            /* 4. Final Results */
            <div className="final-results">
                <h1>Final Results</h1>
                <h2>
                    {score} out of {questions.length} correct - (
                    {(score / questions.length) * 100}%)
                </h2>
                <button onClick={() => restartQuiz()}>Restart Quiz</button>
            </div>
        ) : (
            /* 5. Question Card  */
            <div className="question-card">
                {/* Current Question  */}
                <h2>
                    Question: {currentQuestion + 1} out of {questions.length}
                </h2>
                <h3 className="question-text">{questions[currentQuestion].text}</h3>
				{/* Check if currentQuestion is the last one and render an image */}
				{currentQuestion === questions.length - 1 && (
                    <img src={routingTable} alt="routingTable"/>
                )}

                {/* List of possible answers  */}
                <ul>
                    {questions[currentQuestion].options.map((option) => {
                        return (
                            <li
                                key={option.id}
                                onClick={() => optionClicked(option.isCorrect)}
                            >
                                {option.text}
                            </li>
                        );
                    })}
                </ul>
					
            </div>
        )}
    </div>
);


};

export default Quiz;
