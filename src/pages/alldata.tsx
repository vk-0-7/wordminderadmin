import React from 'react'
import styles from '../styles/alldata.module.css'
import Sidebar from "@/components/sidebar";
import Content from "@/components/content";
import Datacard from "@/components/datacard";
import Data from '../Data/data.json'

const AllData = () => {
  return (
    <div className={styles.static_bg}>
      <Sidebar />
      {/* <Content> */}
      <div className={styles.content}> <Datacard data={Data} /> </div>
      {/* </Content> */}
    </div>
  )
}

export default AllData