<script setup lang="ts">
import { useCartStore } from "../../../stores/cart";
import { formatPrice } from "../../../utils/index";
const store = useCartStore();
</script>

<template lang="">
    <div class="modal">
        <div
        class="modal-top"
        >
            <p
            class="modal-top-left"
            >
                <span>
                    {{ store.numberOfItems }}
                </span> VARER
            </p>
            <div
            class="modal-top-right"
            >
                <p>
                    KURV TOTAL: <br>
                    <span>
                        {{ formatPrice(store.totalPrice) }}
                    </span>
                </p>
            </div>
        </div>
        <button
        class="cta-cart"
        >
            GÅ TIL CHECKOUT
        </button>

        <ul
            class="product-list"
        >
            <li 
                v-for="item in store.items"
                class="product-list-item"
            >
                <img 
                :src="item.image.src"
                :alt="item.image.alt"
                />
                <div>
                    <div class="top">
                        <h3>
                        {{ item.title }}
                        </h3>
                        <span>
                            {{ formatPrice(item.price) }}
                        </span>
                    </div>
                    <span
                    class="bottom"
                    >
                        Antal {{ item.amount }}
                    </span>
                </div>
            </li>
        </ul>

        <RouterLink
            to="#"
        >
            Se eller rediger din kurv
        </RouterLink>

    </div>
</template>

<style lang="scss">

.modal {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        padding: 2rem;
        background-color: white;
        min-width: 400px;
        a{
            font-size: 1.6rem;
            color: black;
            text-underline-offset: 4px;
            display: block;
            width: 100%;
            text-align: center;
            transition: opacity 0.3;
            &:hover{
                opacity: 0.7;
            }
        }
        .modal-top{
            display: flex;
            justify-content: space-between;
            margin-bottom: 2rem;
            .modal-top-left{
                font-size: 1.5rem;
                span{
                    font-weight: 600;
                }
            }
            .modal-top-right{
                font-size: 1.6rem;
                text-align: end;
                span{
                    font-weight: bold;
                }
            }
        }
        .cta-cart{
            display: inline-block;
            color: white;
            background-color: #4a90e2;
            font-size: 1.8rem; 
            padding: 1.6rem 5rem;
            border-radius: 100px;
            text-decoration: none;
            font-weight: bold;
            width: 100%;
            border: none;
            transition: background-color 0.3s;
            cursor: pointer;
            &:hover{
                background-color: #287ee0;
            }
        }
        .product-list{
            border-top: 1px solid #e9e9e9;
            border-bottom: 1px solid #e9e9e9;
            margin: 2rem 0;
            padding: 1rem 0;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            max-height: 40vh;
            overflow: auto;
            .product-list-item{
                display: flex;
                border-bottom: 1px solid #e9e9e9;
                padding-bottom: 1rem;
                &:last-child{
                     border-bottom: 0px
                }
                img{
                    width: 90px;
                    aspect-ratio: 31/40;
                }
                div{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    font-size: 1.3rem;
                    .top{
                        h3{
                            max-width: 150px;
                            font-weight: 500;
                            line-height: 1.5rem;
                            margin-bottom: 0.6rem;
                        }
                        span{
                            font-size: 1.5rem;
                            font-weight: bold;
                        }
                    }
                    .bottom{
                        font-size: 1.6rem;
                        font-weight: 500;
                        margin-bottom: 0.5rem
                    }
                    
                }
            }
        }
    }

</style>