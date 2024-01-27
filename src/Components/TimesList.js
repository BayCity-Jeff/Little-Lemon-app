
import { useState, useEffect } from "react"; 
 
export default function TimesList() { 
  const [timesData, setTimesData] = useState({}); 
 
  const fetchData = () => { 
    fetch(`https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js`) 
      .then((response) => response.json()) 
      .then((jsonData) => setTimesData(jsonData)) 
      .catch((error) => console.log(error)); 
  }; 
 
  useEffect(() => {
    fetchAPI(date);
  }, []); 
 
  return ( 
    <> 
      <h1>Current times data</h1> 
      <p>Code: {TimesData}</p> 
      <p>Symbol: </p> 
      <p>Rate: </p> 
      <p>Description: </p> 
      <p>Rate Float: </p> 
    </> 
  ); 
} 
