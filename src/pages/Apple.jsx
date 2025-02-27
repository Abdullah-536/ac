import { useEffect, useState } from "react"
import { Card } from "../components/UI/Card/Card";
import styles from "../components/UI/Card/Card.module.css"

export const Apple=({appleApi})=>{
    const [data,setData]=useState([]);
   
    useEffect(()=>{

        const fetchData=async ()=>{
            try {
                  const res=await fetch(appleApi);
                  const resp = await res.json();
                  setData(resp);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    },[])

     return (
            <div className={styles[`card-container`]}>
                {data.length > 0 ? (
                    data.map((ele) => <Card Ele={ele} key={ele.id} />)
                ) : (
                    <p>Error</p>
                )}
            </div>
        );

}