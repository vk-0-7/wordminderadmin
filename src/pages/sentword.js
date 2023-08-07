import {useEffect,useState} from "react";
import Sidebar from "@/components/sidebar";
import styles from "../styles/sentword.module.css";
import Content from "@/components/content";
import Datacard from "@/components/datacard";
import Data from "../Data/data.json";
import axios from "axios";
import { BASE_URL } from "@/Apis/api";

const SentWord = () => {

  const [sentData,setsentData]=useState([]);

  useEffect(() => {
    getsentData()
  }, [])
  
  const getsentData = () => {
    try {
      axios.get(`${BASE_URL}/getallsentword`).then((res) => {
        console.log(res.data);
        setsentData(res.data);
    });
    } catch (error) {
       console.error(error)
    }
   
  };

 

  return (
    <div className={styles.static_bg}>
      <Sidebar />
      {/* <Content> */}
      <div className={styles.content}>
        {" "}
        <Datacard data={sentData} />{" "}
      </div>
      {/* </Content> */}
    </div>
  );
};

export default SentWord;
