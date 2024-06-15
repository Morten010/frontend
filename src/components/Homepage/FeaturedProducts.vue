<script setup lang="ts">
import { products } from "../../constants/index"
import ProductCard from "../ui/ProductCard.vue"
import { Icon } from "@iconify/vue";
import { ref } from 'vue'

const scrollContainer = ref(null)

const handleScrollLeft = () => {
    if (scrollContainer.value) {
        const container = scrollContainer.value as HTMLElement;
        container.scrollLeft -= container.clientWidth + 6;
    }
}

const handleScrollRight = () => {
    if (scrollContainer.value) {
        const container = scrollContainer.value as HTMLElement;
        container.scrollLeft += container.clientWidth + 6;
    }
}
</script>

<template>
    <div class="wrapper">
        <section class="container">
            <div class="top">
                <h2>Our Featured Products</h2>
                <div class="button-container">
                    <button @click="handleScrollLeft">
                        <Icon width="23" icon="fluent:chevron-left-20-regular" />
                    </button>
                    <button @click="handleScrollRight">
                        <Icon width="23" icon="fluent:chevron-right-20-regular" />
                    </button>
                </div>
            </div>
            <div class="product-container no-scrollbar" ref="scrollContainer">
                <ProductCard v-for="(product, index) in products" :key="product.id + '-featuredProduct'"
                    :id="product.id" :image="product.image" :price="product.price" :title="product.title" />
            </div>
        </section>
    </div>
</template>

<style scoped lang="scss">
.wrapper {
    padding: 0 2rem;
    .container {
        max-width: 1280px;
        width: 100%;
        margin: 0 auto 4rem;
        overflow: hidden;

        .top {
            display: flex;
            justify-content: space-between;
            align-items: end;
            margin-bottom: 2rem;

            .button-container {
                display: flex;
                gap: 2px;

                button {
                    border: 0;
                    background-color: #f5f5f5;
                    padding: 1rem;
                    display: grid;
                    place-content: center;
                    transition: background-color 0.2s;

                    &:hover {
                        background-color: #e8e8e8;
                    }
                }
            }
        }

        h2 {
            margin-top: 4rem;
            font-size: 3.2rem;
            color: #454545;
        }

        .product-container {
            display: flex;
            gap: 1rem;
            justify-content: space-between;
            overflow-x: scroll;
            /* Add horizontal scroll */
            scroll-behavior: smooth;
            /* Smooth scrolling */
        }
    }
}
</style>
