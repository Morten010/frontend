<script setup lang="ts">
    import { formatPrice } from "../../utils/index"
     import { useCartStore } from "../../stores/cart"
    const store = useCartStore()

    defineProps<{
        id: number
        title: string;
        price: number;
        image: {
            src: string;
            alt: string;
        };
    }>()

</script>

<template>
    <article
    class="product-card"
    >
        <img 
            :src="image.src"
            :alt="image.alt"
        />
        <div
        class="card-body"
        >
            <h3>
                {{ title }}
            </h3>
            <p>
                {{ formatPrice(price) }}
            </p>
            <button
                @click="store.addProduct({
                    id,
                    title,
                    price,
                    image
                })"
            >
                Buy now
            </button>
        </div>
    </article>
</template>

<style scoped lang="scss">
    @import "../../assets/shared.scss";
    .product-card{
        border: 0.15rem solid #e3e3e3;
        background-color: #fbfbfb;
        width: calc(25% - 8px);
        min-width: calc(25% - 8px);
        cursor: pointer;
        @include laptop{
            width: calc(50% - 8px);
            min-width: calc(50% - 8px);
        }
        img{
            width: 100%;
            aspect-ratio: 31/40;
            object-fit: cover;
            border-bottom: 0.15rem solid #e3e3e3;
        }
        .card-body{
            padding: 2rem;
            text-align: center;
            h3{
                font-size: 1.6rem;
                font-weight: 500;
                text-transform: uppercase;
                padding-bottom: 1rem;
            }
            p{
                font-size: 1.8rem;
                font-weight: bold;
                padding-bottom: 1rem;
            }
            button{
                border: .1rem solid #4a90e2;
                cursor: pointer;
                background: transparent;
                padding: 1rem 3rem; 
                font-size: 1.4rem;
                color: #4a90e2;
                font-weight: 600;
                border-radius: 100px;
                text-transform: uppercase;
                transition: all 0.2s;
                &:hover{
                    background-color: #4a90e2;
                    color: white;
                }
            }
        }
    }
</style>