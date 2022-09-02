import React from 'react';
import './index.scss';
import Game from './components/Game';
import Result from './components/Result';

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];


function App() {
  const [step,setStep] = React.useState(0);
  const question = questions[step];
  
  const [correct,setCorrect] =React.useState(0);

  function nextQuestion(index){
    setStep(step+1);
    if(index==correct){
      setCorrect(correct+1);
    }
  }
  const totalQ =questions.length;
  return (
    <div className="App">
      {step<questions.length 
      ?(<Game step={step} question={question} questions={totalQ} nextQuestion={nextQuestion}/>)
      : (<Result correct={correct} questions={totalQ} />)
       }
    </div>
  );
}

export default App;
