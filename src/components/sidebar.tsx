import React from "react";
import styles from "../styles/sidebar.module.css";
import { FiLogOut } from "react-icons/fi";
import { BsDatabaseFill, BsCollectionFill } from "react-icons/bs";
import { IoIosCreate } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();
  return (
    <div className={styles.sidebar_main}>
      <div className={styles.main_container}>
        <span  onClick={() => router.push("/alldata")}>
          {" "}
          <BsDatabaseFill />{" "}
        </span>
        <span onClick={() => router.push("/sentword")}>
          {" "}
          <BsCollectionFill />{" "}
        </span>
        <span onClick={()=>router.push("/questioncreator")} >
          {" "}
          <IoIosCreate />{" "}
        </span>
        {/* <span> <FiLogOut/> </span> */}
        {/* <span> <FiLogOut/> </span> */}
      </div>
      <div className={styles.logout}>
        <span>
          {" "}
          <FiLogOut />{" "}
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
