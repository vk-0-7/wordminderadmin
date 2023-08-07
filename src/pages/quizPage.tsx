import { useState, useEffect } from "react";
import Sidebar from "@/components/sidebar";
import styles from "../styles/quizPage.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import Result from "@/components/result";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HashLoader from "react-spinners/HashLoader";
import { BASE_URL } from "@/Apis/api";

const ansArry: any = [];

const QuizPage = () => {
  const router = useRouter();
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");
  const [data, setData] = useState<any>();
  const [questionNumber, setquestionNumber] = useState<any>(1);
  const [showsubmitBtn, setShowsubmitBtn] = useState<Boolean>(false);
  const [showresultpage, setShowResultPage] = useState<Boolean>(false);

  const [useranswers, setUserAnswers] = useState<any>([]);

  useEffect(() => {
    sendQuestions();
  }, []);

  useEffect(() => {
    // console.log(questionNumber);
    const abc: HTMLElement | null = document?.getElementById(
      `btn${questionNumber}`
    );
    if (abc) {
      abc.style.color = "blue";
    }

    const bcd: any = document.getElementById("#btn1");
    bcd ? (bcd.style.color = "blue") : "";
  }, [questionNumber]);

  const sendQuestions = () => {
    try {
      axios.get( `${BASE_URL}getQuestions`).then((res) => {
        // console.log(res.data);
        setData(res.data[res.data.length - 1]);
        setLoading(false)
      });
    } catch (error) {
      console.error(error);
      setLoading(false)
    }
  };
  //   console.log(data);

  const handlenumber = (e: any) => {
    setquestionNumber(e);
  };

  const handleclick = (e: any) => {
    ansArry[questionNumber - 1] = e;
    setUserAnswers(ansArry);
    // console.log(ansArry);
    // getAnswered()
    if (questionNumber < 10) {
      setquestionNumber(questionNumber + 1);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    //   console.log('useranswer',useranswers.length);
    if (useranswers.length == 10) {
      setShowResultPage(true);
    } else {
      toast.error("Complete all Questions");
    }
  };

  //   console.log(useranswers);

  //   console.log(useranswers);

  return (
   <>
   {loading ? 
     <div className={styles.spinner}>
   <HashLoader
        color={color}
        loading={loading}
        
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> </div>
      :
      
      <div className={styles.full_page}>
      <div className={styles.number_section}>
        {data?.question.map((val: any, index: any) => {
          return (
            <button
              key={index}
              id={`btn${index + 1}`}
              onClick={() => handlenumber(index + 1)}
            >
              {index + 1}{" "}
            </button>
          );
        })}
      </div>

      <div className={styles.quiz_body}>
        <div className={styles.inner_quiz_body}>
          <button className={styles.submit} onClick={(e) => handleSubmit(e)}>
            Submit
          </button>
          <h1>{data?.question[questionNumber - 1]}</h1>
          <div className={styles.option_div}>
            <h4 onClick={() => handleclick(1)}>
              {data?.option1[questionNumber - 1]}
            </h4>
            <h4 onClick={() => handleclick(2)}>
              {" "}
              {data?.option2[questionNumber - 1]}
            </h4>
            <h4 onClick={() => handleclick(3)}>
              {data?.option3[questionNumber - 1]}
            </h4>
            <h4 onClick={() => handleclick(4)}>
              {data?.option4[questionNumber - 1]}
            </h4>
          </div>
        </div>
      </div>
      {showresultpage && <Result useranswer={useranswers} realanswer={data} />}

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        theme="dark"
      />
    </div>
      }

    
    </>
  );
};

export default QuizPage;
