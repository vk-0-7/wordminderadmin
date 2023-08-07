import React from 'react'
import styles from '../styles/questionCreator.module.css'
import Sidebar from '@/components/sidebar'
import Creator from '@/components/creator'


const QuestionCreator = () => {
  return (
    <div className={styles.static_bg}>
    <Sidebar />
    {/* <Content> */}
    <div className={styles.content}>
      {" "}
         <Creator/>
      
    </div>
    {/* </Content> */}
  </div>
  )
}

export default QuestionCreator