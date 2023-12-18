import React, { useState } from 'react';
import { Button, Form, FormGroup, FormControl, FormLabel, Col } from 'react-bootstrap';

// Example: Array of 50 questions
const questionPool = [
  { id: 1, text: 'What is the capital of France?', options: ['Paris', 'Berlin', 'London', 'Madrid'], correctAnswer: 'Paris' },
  // Add more questions...
];

function HeroSection() {
  const [showButton, setShowButton] = useState(true);
  const [showQuizForm, setShowQuizForm] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleButtonClick = () => {
    // Randomly select a question from the pool
    const randomIndex = Math.floor(Math.random() * questionPool.length);
    const selectedQuestion = questionPool[randomIndex];

    setShowButton(false);
    setShowQuizForm(true);
    setCurrentQuestion(selectedQuestion);
    setSelectedAnswer(null); // Reset selected answer
  };

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        {showButton && (
          <Button variant="primary" onClick={handleButtonClick}>
            Start Quiz
          </Button>
        )}

        {showQuizForm && currentQuestion && (
          <Form style={{ width: '100%' }}>
            <FormGroup>
              <FormLabel>{currentQuestion.text}</FormLabel>
              {currentQuestion.options.map((option, index) => (
                <Form.Check key={index} type="radio" id={`option-${index}`}>
                  <Form.Check.Input
                    type="radio"
                    name="answer"
                    value={option}
                    checked={selectedAnswer === option}
                    onChange={handleAnswerChange}
                  />
                  <Form.Check.Label style={{ fontSize: '16px', padding: '10px' }}>{option}</Form.Check.Label>
                </Form.Check>
              ))}
            </FormGroup>

            <Button variant="primary" type="submit" style={{ marginTop: '20px', fontSize: '18px', padding: '12px' }}>
              Submit Quiz
            </Button>
          </Form>
        )}
      </div>
    </div>
  );
}

export default HeroSection;
