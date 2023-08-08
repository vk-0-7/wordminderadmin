import {useState} from "react";
import styles from "../styles/datacard.module.css";
import HashLoader from "react-spinners/HashLoader";

type Props = {
  data: any;
  isLoading?:any;
  toDisplay?: String;
};

const Datacard = ({ data,isLoading, toDisplay }: Props) => {
  // console.log(data);

  let [color, setColor] = useState("#ffffff");

  const getDate = (date: any) => {
    const utcTime = new Date(date);
    console.log(utcTime);
    const istOffset = 5.5 * 60 * 60 * 1000; // IST offset in milliseconds
    const istTime = new Date(utcTime.getTime() + istOffset);

    const istYear = istTime.getUTCFullYear();
    const istMonth = istTime.getUTCMonth() + 1; // Months are 0-based, so adding 1
    const istDay = istTime.getUTCDate();
    const istHours = istTime.getUTCHours();
    const istMinutes = istTime.getUTCMinutes();
    const istSeconds = istTime.getUTCSeconds();

    const formattedIST = `${istYear}-${istMonth
      .toString()
      .padStart(2, "0")}-${istDay.toString().padStart(2, "0")} ${istHours
      .toString()
      .padStart(2, "0")}:${istMinutes.toString().padStart(2, "0")}:${istSeconds
      .toString()
      .padStart(2, "0")}`;
    return formattedIST;
  };

  return (
    <>
{  isLoading ? 
     <div className='spinner_new'>
     <HashLoader
          color={'#ffffff'}
          loading={isLoading}
          
          size={60}
          aria-label="Loading Spinner"
          data-testid="loader"
        /> </div> :
    <div>
      {toDisplay === "subscribers" ? (
         <div className={styles.card_box}>
         {data.map((val: any, ind: any) => {
           return (
             <div key={ind} className={styles.datacard}>
               
                <h3>{val.email}</h3>
             </div>
           );
         })}
       </div>
      ) : (
        <div className={styles.card_box}>
          {data.map((val: any, ind: any) => {
            return (
              <div key={ind} className={styles.datacard}>
                {val.createdAt ? <h5> {getDate(val.createdAt)} </h5> : ""}
                <h2> word : {val.word}</h2>
                <h3> Meaning : {val.meaning}</h3>
                <h4> Antonym : {val.antonym}</h4>
                <h4> Synonym : {val.synonym}</h4>
                <h4> Example : {val.example}</h4>
              </div>
            );
          })}
        </div>
      )}
      </div>}
    </>
    
  );
};

export default Datacard;
