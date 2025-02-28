
const setData ="setData";

export const addToCart = ({ id, name, category, price,img_src, description, quantity }) => {
   
    if (quantity === 0) return;

    let cart = JSON.parse(localStorage.getItem("setData")) || [];

    
    let existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        
        existingItem.quantity += quantity;
        // const totalPrice = existingItem.price * existingItem.quantity;
        // existingItem.price=totalPrice;

        
    } else {
        cart.push({ id, name, category,img_src, price, description, quantity });
    }
    localStorage.setItem("setData", JSON.stringify(cart));
          
     // Dispatch an event to notify cart update
     window.dispatchEvent(new Event("cartUpdated"));
};

