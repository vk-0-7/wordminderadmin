import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Sidebar from "../components/sidebar";
import Content from "@/components/content";
import { useRouter } from "next/router";

const Index = () => {
  const router=useRouter();
  const [name, setName] = useState<string>("");

  const handleName = (e: any) => {
    setName(e.target.value);
  };

  const handleEnter=()=>{
    name==='admin123' ?router.push('/alldata') : router.push('/quizPage')

  }

  return (
    // <div className={styles.static_bg}>
    //  <div className={styles.sidebar} > <Sidebar/> </div>
    //  <div className={styles.content}><Content

    //  />

    //    </div>
    // </div>

    <>
      <div className={styles.Login_main_page}>
        <div className={styles.login_box}>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={handleName}
          /> 
          <button onClick={handleEnter} > Enter </button>
        </div>
      </div>
    </>
  );
};

export default Index;

export const App = () => {};
