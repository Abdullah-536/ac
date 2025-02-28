import styles from "./CartPage.module.css"
export const CartPage = () => {
    let cartProducts = JSON.parse(localStorage.getItem("setData")) || [];

    console.log(cartProducts); 

    if (cartProducts.length === 0) return <h2>Your Cart is Empty</h2>;

    return (
        <div className={styles.container}>
            
                {cartProducts.map((CurProd) => {
                    const { id, name, price, image, quantity, category } = CurProd;

                    return (
                        <div key={id} className={styles[`col-4`]}>
                            <div className={styles.category}>{category}</div>
                            <div className={styles.name}>{name}</div>
                            <div className={styles.image}>
                                <img src={image} alt={name} width="100" height="100" />
                            </div>
                            <div className={styles.quantity}>Quantity: {quantity}</div>
                            <div className={styles.price}>Price: Rs.{price}</div>
                            <button className={styles.button} onClick={() => removeFromCart(id)}>Remove</button>
                        </div>
                    );
                })}
            
        </div>
    );
};

// Function to remove item from cart
const removeFromCart = (id) => {
    let cart = JSON.parse(localStorage.getItem("setData")) || [];
    cart = cart.filter((item) => item.id !== id);
    localStorage.setItem("setData", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
    window.location.reload(); // Refresh to update UI
};
