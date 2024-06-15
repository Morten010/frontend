<script lang="ts" setup>
import { Icon } from "@iconify/vue";
import { useCartStore } from "../../../stores/cart";
const store = useCartStore();
</script>
<template>
    <button 
    class="cart"
    aria-label="Cart"
    >
        <Icon width="26" icon="iconoir:shopping-bag" />
        <div v-if="store.numberOfItems" class="amount">
            {{ store.numberOfItems }}
        </div>
    </button>
</template>

<style lang="scss">
@import "../../../assets/shared.scss";
    .cart {
        cursor: pointer;
        position: relative;
        background-color: transparent;
        border: none;
        outline: none;
        transition: color 0.3s;
        @include laptop{
            color: white;
        }

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
            @include laptop {
                background-color: white;
                color: black;
                font-weight: 700;
            }
        }
    }
</style>