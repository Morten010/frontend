import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { ProductProps } from '@/types/index'

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [
            {
                id: 7,
                title: "Bruun & Stengade Nicky - Skjorter",
                price: 59900,
                amount: 1,
                image: {
                    src: "/products/shirt1.jpg",
                    alt: "shirt 1"
                }
            },
        ]
    }),
    getters: {
        numberOfItems: (state) => {
            let total = 0;
            for(const item of state.items){
                total += item.amount
            }
            return total
        },
        totalPrice: (state) => {
            let price = 0
            for(const item of state.items){
                price += item.price ?? 0
            }
            return price
        }
    },
    actions: {
        addProduct(product: ProductProps) {
            const products = this.items
            // Check if product exists
            const productExists = products.find(p => p.id === product.id)
            

            //if product exists add to existing product
            if(productExists){
                const updatedProductArray = products.map(p => {
                    if(p.id === product.id){
                        return {
                            ...p,
                            amount: p.amount + 1
                        }
                    }else{
                        return p
                    }
                })

                this.items = updatedProductArray
                return
            }else{
                // if products dont exist
                this.items = [...this.items, {
                    ...product,
                    amount: 1
                }]
                return
            }

        }
    }
    // delete product could be here
})
