import { useEffect, useMemo, useState } from "react";
import "./App.css";
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [username, setUserName] = useState(null);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");

  const data = [
  
    {
      id: 1,
      question: "Şiranın kedisinin adı nedir ?",
      answers: [
        {
          text: "Yaman",
          correct: false,
        },
        {
          text: "Ceku",
          correct: false,
        },
        {
          text: "Pamuk",
          correct: false,
        },
        {
          text: "Tarçın",
          correct: true,
        },
      ],
    },

    {
      id: 2,
      question:
        "Ali Tangel aşağıdaki kişilerden hangisine vizede tam puan verir ?",
      answers: [
        {
          text: "Einstein",
          correct: false,
        },
        {
          text: "İrem",
          correct: true,
        },
        {
          text: "Nicola Tesla",
          correct: false,
        },
        {
          text: "Aziz Sancar",
          correct: false,
        },
      ],
    },

    {
      id: 3,
      question: "Aşagıdakilerden hangisi daha soğuktur ?",
      answers: [
        {
          text: "Kutuplar",
          correct: false,
        },
        {
          text: "Çöl Geceleri",
          correct: false,
        },
        {
          text: "Okan'ın Evi",
          correct: true,
        },
        {
          text: "Neptün",
          correct: false,
        },
      ],
    },

    {
      id: 4,
      question: "İremin en sevdiği yemek nedir ?",
      answers: [
        {
          text: "Sarma (zeytinyağlı)",
          correct: false,
        },
        {
          text: "Steak Köfte",
          correct: false,
        },
        {
          text: "Kabak Dolması",
          correct: true,
        },
        {
          text: "Pırasa",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "İremin en sevdiği yemek nedir ?",
      answers: [
        {
          text: "Sarma (zeytinyağlı)",
          correct: false,
        },
        {
          text: "Steak Köfte",
          correct: false,
        },
        {
          text: "Kabak Dolması",
          correct: true,
        },
        {
          text: "Pırasa",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "İremin en sevdiği yemek nedir ?",
      answers: [
        {
          text: "Sarma (zeytinyağlı)",
          correct: false,
        },
        {
          text: "Steak Köfte",
          correct: false,
        },
        {
          text: "Kabak Dolması",
          correct: true,
        },
        {
          text: "Pırasa",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "İremin en sevdiği yemek nedir ?",
      answers: [
        {
          text: "Sarma (zeytinyağlı)",
          correct: false,
        },
        {
          text: "Steak Köfte",
          correct: false,
        },
        {
          text: "Kabak Dolması",
          correct: true,
        },
        {
          text: "Pırasa",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "İremin en sevdiği yemek nedir ?",
      answers: [
        {
          text: "Sarma (zeytinyağlı)",
          correct: false,
        },
        {
          text: "Steak Köfte",
          correct: false,
        },
        {
          text: "Kabak Dolması",
          correct: true,
        },
        {
          text: "Pırasa",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "İremin en sevdiği yemek nedir ?",
      answers: [
        {
          text: "Sarma (zeytinyağlı)",
          correct: false,
        },
        {
          text: "Steak Köfte",
          correct: false,
        },
        {
          text: "Kabak Dolması",
          correct: true,
        },
        {
          text: "Pırasa",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "İremin en sevdiği yemek nedir ?",
      answers: [
        {
          text: "Sarma (zeytinyağlı)",
          correct: false,
        },
        {
          text: "Steak Köfte",
          correct: false,
        },
        {
          text: "Kabak Dolması",
          correct: true,
        },
        {
          text: "Pırasa",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "İremin en sevdiği yemek nedir ?",
      answers: [
        {
          text: "Sarma (zeytinyağlı)",
          correct: false,
        },
        {
          text: "Steak Köfte",
          correct: false,
        },
        {
          text: "Kabak Dolması",
          correct: true,
        },
        {
          text: "Pırasa",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "İremin en sevdiği yemek nedir ?",
      answers: [
        {
          text: "Sarma (zeytinyağlı)",
          correct: false,
        },
        {
          text: "Steak Köfte",
          correct: false,
        },
        {
          text: "Kabak Dolması",
          correct: true,
        },
        {
          text: "Pırasa",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "İremin en sevdiği yemek nedir ?",
      answers: [
        {
          text: "Sarma (zeytinyağlı)",
          correct: false,
        },
        {
          text: "Steak Köfte",
          correct: false,
        },
        {
          text: "Kabak Dolması",
          correct: true,
        },
        {
          text: "Pırasa",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "İremin en sevdiği yemek nedir ?",
      answers: [
        {
          text: "Sarma (zeytinyağlı)",
          correct: false,
        },
        {
          text: "Steak Köfte",
          correct: false,
        },
        {
          text: "Kabak Dolması",
          correct: true,
        },
        {
          text: "Pırasa",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "İremin en sevdiği yemek nedir ?",
      answers: [
        {
          text: "Sarma (zeytinyağlı)",
          correct: false,
        },
        {
          text: "Steak Köfte",
          correct: false,
        },
        {
          text: "Kabak Dolması",
          correct: true,
        },
        {
          text: "Pırasa",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid =useMemo(()=>
    [
      { id: 1, amount: "$ 100" },
      { id: 2, amount: "$ 200" },
      { id: 3, amount: "$ 300" },
      { id: 4, amount: "$ 500" },
      { id: 5, amount: "$ 1000" },
      { id: 6, amount: "$ 2000" },
      { id: 7, amount: "$ 4000" },
      { id: 8, amount: "$ 8000" },
      { id: 9, amount: "$ 16000" },
      { id: 10, amount: "$ 32000" },
      { id: 11, amount: "$ 64000" },
      { id: 12, amount: "$ 125000" },
      { id: 13, amount: "$ 250000" },
      { id: 14, amount: "$ 500000" },
      { id: 15, amount: "$ 1000000" },
    ].reverse(),
  []
  );
  

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id == questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);
  
  return (
    <div className="app">
      <div className="main">
        {stop ? (
          <h1 className="endText">You earned: {earned}</h1>
          
        ) : (
          <>
            <div className="top">
              <div className="timer">
                <Timer setStop={setStop} questionNumber={questionNumber}/>
              </div>
            </div>
            <div className="bottom">
              <Trivia
                data={data}
                setStop={setStop}
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
              />
            </div>
          </>
        )}
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map((m) => (
            <li
              className={
                questionNumber === m.id
                  ? "moneyListItem active"
                  : "moneyListItem"
              }
            >
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
