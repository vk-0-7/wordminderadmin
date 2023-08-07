import { useState, useEffect } from "react";
import styles from "../styles/creator.module.css";
import axios from "axios";
import { BASE_URL } from "@/Apis/api";

let questionarray: any = [];
let option1arr: any = [];
let option2arr: any = [];
let option3arr: any = [];
let option4arr: any = [];
let ansarr: any = [];

const Creator = () => {
  const arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [questions, setQuestions] = useState<any>({
    question: [],
    option1: [],
    option2: [],
    option3: [],
    option4: [],
     answer: [],
  });

  const addQuestion = (e: any, index: any) => {
    const { name, value } = e.target;
    if (name === "question") {
      questionarray[index] = value;
      //   console.log(questionarray);
      setQuestions({ ...questions, question: questionarray });
    } else if (name === "option1") {
      option1arr[index] = value;
      //   console.log(option1arr);
      setQuestions({ ...questions, option1: option1arr });
    } else if (name == "option2") {
      option2arr[index] = value;
      //   console.log(option1arr);
      setQuestions({ ...questions, option2: option2arr });
    } else if (name == "option3") {
      option3arr[index] = value;
      //   console.log(option1arr);
      setQuestions({ ...questions, option3: option3arr });
    } else if (name == "option4") {
      option4arr[index] = value;
      //   console.log(option1arr);
      setQuestions({ ...questions, option4: option4arr });
    }
  };

  const sendQuestions = () => {
    try {
      axios
        .post(`${BASE_URL}createQuestions`, { data: questions })
        .then((res) => {
          //   console.log(res);
          //  setQuestions({
          //     question: [""],
          //     option1: [""],
          //     option2: [""],
          //     option3: [""],
          //     option4: [""],
          //  })
        });
    } catch (error) {
      console.error(error);
    }
  };

  const handleanswers=(e:any,index:any)=>{
         ansarr[index]=e.target.value;
         setQuestions({...questions,answer:ansarr})
  }

  return (
    <>
      {console.log(questions)}
      <div className={styles.card_box}>
        {arry.map((val: any, index: any) => {
          return (
            <div key={index} className={styles.questionCard}>
              <span>
                <h2>{index + 1}</h2>
                <input
                  type="text"
                  placeholder={`Enter question ${index + 1} Here`}
                  name="question"
                  //   value={questions.question[index + 1]}
                  onChange={(e) => addQuestion(e, index)}
                />
              </span>

              <div className={styles.options}>
                <input
                  type="text"
                  placeholder="Option 1"
                  name="option1"
                  onChange={(e) => addQuestion(e, index)}
                />
                <input
                  type="text"
                  placeholder="Option 2"
                  name="option2"
                  onChange={(e) => addQuestion(e, index)}
                />
                <input
                  type="text"
                  placeholder="Option 3"
                  name="option3"
                  onChange={(e) => addQuestion(e, index)}
                />
                <input
                  type="text"
                  placeholder="Option 4"
                  name="option4"
                  onChange={(e) => addQuestion(e, index)}
                />
              </div>
            </div>
          );
        })}
        <div className={styles.answer_section}>
          {arry.map((val: any, index: any) => {
            return (
              <div className={styles.answer_input} key={index}>
                <input type="text" name="answer" onChange={(e)=>handleanswers(e,index)} />
              </div>
            );
          })}
        </div>
        <div className={styles.btn}>
          {" "}
          <button onClick={sendQuestions}>Submit</button>{" "}
        </div>
      </div>
    </>
  );
};

export default Creator;
