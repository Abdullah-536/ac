import { useState } from "react";
import styles from "./DisplayCard.module.css";
import { addToCart } from "../AddToCart/AddToCart";

export const DisplayCard = ({ updatedMobileData }) => {


  const [quantity, setQuantity] = useState(0);

  const setIncrement = () => {
    setQuantity((prev) => prev + 1);
  }
  const setDecrement = () => {

    return setQuantity((prev) => (prev > 0 ? prev - 1 : 0));

  }

  const { id, name, img_src, price, category, description, specifications, variants } = updatedMobileData;
  return (
    <div className={styles[`display-card`]}>
      {/* <div className={styles[`image-container`]}> */}
      <img src={img_src} alt={name} />
      {/* </div> */}
      <div className={styles[`card-details`]}>
        <h2 className={styles[`image-name`]}>{name}</h2>
        <span>Rs.</span>
        <p className={styles.price}> {price}</p>
        <br />
        <span>Memory:</span>
        <p className={styles.rom}>{specifications.ROM}</p>
        <br />
        <span>Ram:</span>
        <p className={styles.ram}>{specifications.RAM}</p>
        <br />
        <span>Processor</span>
        <p className={styles.processor}>{specifications.Processor}</p>
        <br />
        <span>Screen:</span>
        <p className={styles.screen}> {specifications.Display}</p>
        <br />
        <span>Camera:</span>
        <p className={styles.camera}>{specifications.Camera}</p>
        <br />
        <span>Battery:</span>
        <p className={styles.battery}> {specifications.Battery}</p>
        <br />
        <span>Category:</span>
        <p className={styles.category}>{category}</p>
      </div>

      <div className={styles[`product-quantity`]}>
        <span>Quantity:</span>
        <div className={styles[`quantity-increment`]} onClick={setIncrement}>+</div>
        <div className={styles.quantity}>{quantity}</div>
        <div className={styles[`quantity-decrement`]} onClick={setDecrement}>-</div>


      </div>
      <div className={styles.button}>

        <button onClick={() => {
          if (quantity > 0) {
            addToCart({ id, name, category, price,img_src, description, quantity });
            setQuantity(0);
          } else {
            alert("Please add a quantity before adding to cart.")
          }
        }}
        >
          Add To Cart </button>
      </div>

    </div>
  );
};
