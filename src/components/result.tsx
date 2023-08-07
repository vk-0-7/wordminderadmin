import { useState, useEffect } from "react";
import styles from "../styles/result.module.css";

// let correctAns=0;
const Result = ({ useranswer, realanswer }: any) => {
  const [correctAns, setCorrectAns] = useState<any>(0);
  // console.log(useranswer, realanswer);
  useEffect(() => {
    setCorrectAns(0);
    for (let i = 0; i < 10; i++) {
      if (useranswer[i] == realanswer.answer[i]) {
        setCorrectAns((old: any) => old + 1);
      }
    }
  }, []);

  return (
    <div className={styles.full_page}>
      <h1>Your Score is {correctAns}/10</h1>
      <div className={styles.solution_body}>
        {realanswer.answer.map((val: any, ind: any) => {
          return (
            <div key={ind}>
              <h2>{realanswer.question[ind]}</h2>
              <div className={styles.options}>
                <p className={val == 1 ? `${styles.correct}` : ""}>
                  {realanswer.option1[ind]}
                </p>
                <p className={val == 2 ? `${styles.correct}` : ""}>
                  {realanswer.option2[ind]}
                </p>
                <p className={val == 3 ? `${styles.correct}` : ""}>
                  {realanswer.option3[ind]}
                </p>
                <p className={val == 4 ? `${styles.correct}` : ""}>
                  {realanswer.option4[ind]}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Result;
