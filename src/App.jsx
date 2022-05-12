import { useState } from "react";
import "./app.css";
import Trivia from "./components/Trivia";

function App() {
const [questionNumber, setQuestionNumber] = useState(1)
const [timeOut, setTimeOut] = useState(false)
 


  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
  ];


  const moneyPyramid = [
    {id:1, amount:"$ 100"},
    {id:2, amount:"$ 200"},
    {id:3, amount:"$ 300"},
    {id:4, amount:"$ 500"},
    {id:5, amount:"$ 1000"},
    {id:6, amount:"$ 2000"},
    {id:7, amount:"$ 4000"},
    {id:8, amount:"$ 8000"},
    {id:9, amount:"$ 16000"},
    {id:10, amount:"$ 32000"},
    {id:11, amount:"$ 64000"},
    {id:12, amount:"$ 125000"},
    {id:13, amount:"$ 250000"},
    {id:14, amount:"$ 500000"},
    {id:15, amount:"$ 1000000"},

  ].reverse();
  return (
    <div className="app">
    <div className="main">
      <div className="top">
        <div className="timer">30</div>
      </div>
      <div className="bottom">
        <Trivia
         data={data}
         setTimeOut={setTimeOut} 
         questionNumber={questionNumber}
         setQuestionNumber={setQuestionNumber}/>
      </div>
    </div>
    <div className="pyramid">
      <ul className="moneyList">
        {moneyPyramid.map((m) => (
        <li className={questionNumber === m.id? "moneyListItem active" : "moneyListItem"}>
          <span className="moneyListItemNumber">{m.id}</span>
           <span className="moneyListItemAmount">{m.amount}</span>
        </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default App;
