import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Sidebar from "../components/sidebar";
import Content from "@/components/content";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { BASE_URL, BASE__URL } from "@/Apis/api";

const Index = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");

  const handleName = (e: any) => {
    setEmail(e.target.value);
  };

  // const handleEnter=()=>{
  //   name==='admin123' ?router.push('/alldata') : router.push('/quizPage')

  // }

  const checkSubscribers = () => {
    if (email == "admin123@gmail.com") {
      router.push("/alldata");
    } else {
      try {
        axios.get(`${BASE__URL}getsubscriber?email=${email}`,).then((res) => {
          console.log('response',res);
          if(res.status==200)
          router.push('/quizPage')
         else{
          toast.error("You need to Subscibe First");
         }
        });
      } catch (error) {
        console.error('you need to subscribe',error);
        
      }
    }
  };

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
            placeholder="Enter your email"
            value={email}
            onChange={handleName}
          />
          <button onClick={checkSubscribers}> Enter </button>
        </div>
      </div>
    
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        theme="dark"
      />
    </>
  );
};

export default Index;

export const App = () => {};
