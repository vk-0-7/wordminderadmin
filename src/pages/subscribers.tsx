import React from 'react'
import Content from "@/components/content";
import Datacard from "@/components/datacard";
import styles from "../styles/sentword.module.css";
import {useEffect,useState} from "react";
import Sidebar from "@/components/sidebar";
import axios from "axios";
import { BASE_URL } from "@/Apis/api";

const Subscribers = () => {
  
    const [isLoading,setisLoading]=useState<Boolean>(false)
    const [Data,setData]=useState([]);

  useEffect(() => {
    getsentData()
  }, [])
  
  const getsentData = () => {
    setisLoading(true)
    try {
      axios.get(`${BASE_URL}getallsubscriber`).then((res) => {
        console.log(res.data);
        setData(res.data);
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
        <Datacard data={Data} isLoading={isLoading} toDisplay={'subscribers'}/>{" "}
      </div>
      {/* </Content> */}
    </div>
  )
}

export default Subscribers