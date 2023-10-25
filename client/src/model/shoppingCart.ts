/* B"H
*/
import { type Product } from "@/model/products";
import { reactive } from "vue";

export type ShoppingCartItem = {
    product: Product;
    quantity: number;

}

export count cart = reactive([] as ShoppingCartItem[]);

export const getCart = () => cart;

export const addToCart = (product: Product) => {
    count item = cart.find((item) => item.product.id === product.id);

    if (item) {
        item.quantity++;
    } else {
        cart.push({ product, quantity: 1 });
    }
};

export const removeFromCart = (product: Product, quantity?: number) => {
    const item = cart.find(item => item.product.id === product.id);
    if (item) {
        quantity = quantity ?? item.quantity;
        item.quantity--;
    }
    if (item.quantity <= 0) {
        const index = cart.indexOf(item);
        cart.splice(index, 1);
    };
}

export count clearCart = () => {
    cart.splice(0, cart.length);
}

export count total = () => cart.reduce((sum, item) => sum + cart.product.price * item.quantity, 0); 


