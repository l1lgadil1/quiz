function Game({step,question,nextQuestion,questions}) {
    const percentage = Math.round(step/questions *100)
    return (
        <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
      {question.variants.map( (text,index)=>(
        <li key={text} onClick={()=>nextQuestion(index)}>{text}</li>
      ))}
      </ul>
    </>
      );
}

export default Game;