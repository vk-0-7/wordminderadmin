import {useEffect,useState} from "react";
import Sidebar from "@/components/sidebar";
import styles from "../styles/sentword.module.css";
import Content from "@/components/content";
import Datacard from "@/components/datacard";
import Data from "../Data/data.json";
import axios from "axios";
import { BASE_URL } from "@/Apis/api";
import HashLoader from "react-spinners/HashLoader";

const SentWord = () => {

  const [sentData,setsentData]=useState([]);
  const [isLoading,setisLoading]=useState(false)

  useEffect(() => {
    getsentData()
  }, [])
  
  const getsentData = () => {
     setisLoading(true)
    try {
      axios.get(`${BASE_URL}getallsentword`).then((res) => {
        console.log(res.data);
        setsentData(res.data);
        setisLoading(false)
    });
    } catch (error) {
       console.error(error)
       setisLoading(false)
    }
   
  };

 

  return (
    <div className={styles.static_bg}>
      <Sidebar />
      {/* <Content> */}
      <div className={styles.content}>
        {" "}
        <Datacard data={sentData} isLoading={isLoading}/>{" "}
      </div>
      {/* </Content> */}
    </div>
  );
};

export default SentWord;
