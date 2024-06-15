<script setup lang="ts">
import { Icon } from "@iconify/vue";
import CartButton from "./CartButton.vue";
import CartContent from "./CartContent.vue";
import { useCartStore } from "../../../stores/cart";
import { formatPrice } from "../../../utils/index";
import { ref } from "vue";
const open = ref<boolean>(false);
const store = useCartStore();
</script>

<template>
    <div class="shopping hind">
        <!-- navbar content -->
        <span
            class="total-price"
        > {{ formatPrice(store.totalPrice) }} </span>
        <CartButton
        @click="open = true"
        />
        <!-- navbar content -->

        <!-- modal -->
        <CartContent 
        class="cart-content-large-screen"
        v-if="open"
        />
        <!-- modal -->
    </div>

    <!-- modal background -->
     <div 
     v-if="open"
     @click="open = false"
     class="modal-bg"
     />
    <!-- modal background -->


</template>

<style scoped lang="scss">
.modal-bg{
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 15;
}
.shopping {
    display: flex;
    align-items: center;
    position: relative;
    
    .total-price {
        color: #797979;
        font-size: 1.6rem;
        margin-right: 1rem;
    }

    .cart {
        position: relative;
        background-color: transparent;
        border: none;
        transition: color 0.3s;

        .amount {
            position: absolute;
            font-size: 1rem;
            top: 0;
            right: 0;
            width: 1.7rem;
            border-radius: 100px;
            transform: translateX(50%) translateY(-50%);
            background-color: black;
            color: #fff;
            aspect-ratio: 1/1;
            padding: 0.2rem;
            display: grid;
            place-content: center;
        }

        cursor: pointer;

        &:hover {
            color: #4a90e2;
        }
    }

    .cart-content-large-screen {
        position: absolute;
        z-index: 20;
        bottom: 0;
        right: 0;
        transform: translateY(100%);
    }
}
</style>
