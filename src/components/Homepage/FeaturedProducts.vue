<script setup lang="ts">
    import { products } from "../../constants/index"
    import ProductCard from "../ui/ProductCard.vue"
</script>

<template>
    <section
    class="container"
    >
        <h2>
            Our Featured Products
        </h2>
        <div
        class="product-container"
        >
            <ProductCard 
                v-for="product in products"
                :image="product.image"
                :price="product.price"
                :title="product.title"
            />
            <ProductCard 
                v-for="product in products"
                :image="product.image"
                :price="product.price"
                :title="product.title"
            />
        </div>
    </section>
</template>

<style scoped lang="scss">
    .container{
        max-width: 1280px;
        width: 100%;
        margin: 0 auto 4rem;
        overflow: hidden;
        h2{
            margin-top: 4rem;
            margin-bottom: 2rem;
            font-size: 3.2rem;
            color: #454545;
        }
        .product-container{
            display: flex;
            gap: 1rem;
            justify-content: space-between;
        }
    }
</style>