<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { useCartStore } from "../../stores/cart.ts";
import { formatPrice } from "../../utils/index";
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
        <button class="cart" @click="open = true">
            <Icon width="26" icon="iconoir:shopping-bag" />
            <div v-if="store.numberOfItems" class="amount">
                {{ store.numberOfItems }}
            </div>
        </button>
        <!-- navbar content -->

        <!-- modal -->
        <div v-if="open" class="modal">
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

    button {
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

    .modal {
        position: absolute;
        z-index: 20;
        bottom: 0;
        right: 0;
        transform: translateY(100%);
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
        }
        .product-list{
            border-top: 1px solid #e9e9e9;
            border-bottom: 1px solid #e9e9e9;
            margin: 2rem 0;
            padding: 1rem 0;
            display: flex;
            flex-direction: column;
            gap: 1rem;
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
}
</style>
