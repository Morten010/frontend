<script setup lang="ts">
    import type { PropType, ButtonHTMLAttributes } from 'vue';
    defineProps<{
    image: {
        url: string
        alt: string
    },
    title: string
    subtitle: string
    cta: {
        title: string
        href: string
    }
    }>()
</script>

<template>
    <section>
        <div>
            <h1>
                {{ title || "Improve" }}
            </h1>
            <p>
                {{ subtitle || "You're style" }}
            </p>
            <RouterLink :to="cta.href">
                {{  cta.title  }}
            </RouterLink>
        </div>
           
        <img 
            :src="image.url"
            :alt="image.alt"
            class="bg-image"
        />
    </section>
</template>

<style scoped lang="scss"">
    @import "../../assets/shared.scss";
    section{
        position: relative;
        width: 100%;
        height: calc(100vh - 69px - 110px);
        display: grid;
        place-content: center;
        .bg-image{
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: 0;
        }
        div{
            text-align: center;
            z-index: 10;
            color: white;
            h1{
                font-size: 8.5rem;
                max-width: 60rem;
                margin: 0 auto;
                line-height: 8rem;
                @include tablet{
                    font-size: 6rem;
                    line-height: 4.5rem;
                }
                @include mobile{
                    font-size: 5rem;
                }
            }
            p{
                font-size: 4rem;
                font-weight: bolder;
                margin-bottom: 1.6rem;
                @include tablet{
                    margin-top: 1rem;
                    margin-bottom: 2rem;
                }
            }
            a{
                display: inline-block;
                color: white;
                background-color: #4a90e2;
                font-size: 2.5rem; 
                padding: 1.6rem 5rem;
                border-radius: 100px;
                text-decoration: none;
                font-weight: bold;
                @include tablet{
                    font-size: 1.4rem;
                    padding: 1rem 3rem;
                }
            }
        }
    }
</style>