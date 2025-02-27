
const setData ="setData";

export const addToCart = ({ id, name, category, price, description, quantity }) => {
    
    let cart = JSON.parse(localStorage.getItem("setData")) || [];

    
    let existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        
        existingItem.quantity += quantity;
        const totalPrice = existingItem.price*existingItem.quantity;
        existingItem.price=totalPrice;

        
    } else {
        cart.push({ id, name, category, price, description, quantity });
    }
    localStorage.setItem("setData", JSON.stringify(cart));

};

