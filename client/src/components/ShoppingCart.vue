

<script setup lang="ts">
import { ShoppingCartItem, addToCart, getCart, removeFromCart, total, count } from "@/model/shoppingCart";
const Cart = getCart();
</script>


 <template>
    <div>
        <h1 class="subtitle"> 
        Cart: {{ count() }} items, total: ${{ total() }}
            </h1>

        <div class = "cart-item">
            <div v-for = "item in cart" : key="item.product.id" class="item">
                <img :src ="item.product.thumbnail" :alt="item.product.title"/>
                <div class="itam-details">
                    <h2 class ="title is-5"> {{  item.product.title }}</h2>
                    <p class ="subtitle is-6">
                        {{ item.product.price }}
                        {{ item.quantity }} = ${{ item.product.price * item.quantity }}
                    </p>
                </div>
            </div>
        </div>
    </div>
 </template>

 <style scoped>
</style>

//NODE_ add enivornment variable and the password is the verison 