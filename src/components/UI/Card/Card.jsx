import { NavLink } from "react-router-dom";
import styles from "./Card.module.css";


export const Card = ({ Ele }) => {

  if (!Ele) {
    return <div>No Product Available</div>
  }
  const { id, name, img_src, price,   description } = Ele;

  return (
    
      <div className={styles.card}>
        <div className={styles[`card-header`]}>
          <span className={styles.badge}>New</span>
        </div>
        <img src={img_src} alt={name} className={styles[`product-image`]}  />

        <div className={styles[`quick-look`]}>Quick Look</div>

        <div className= {styles[`card-body`]}>
          <h3 className={styles[`product-name`]}>{name}</h3>
           <div className={styles.price}>Rs. {price}</div>

          <div className={styles.buttons}>
            <button className={styles[`buy-now`]}>Buy now</button>
            <button className={styles['learn-more']}><NavLink to={`/${Ele.category}/${id}`}>Learn more</NavLink>


            </button>
          </div>
        </div>
      </div>
    
  );
};
