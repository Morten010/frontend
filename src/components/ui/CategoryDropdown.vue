<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import { type CategoryProps } from "../../types/index"
import { Icon } from "@iconify/vue";
import { ref } from "vue"
const open = ref(false)

defineProps<{
    category: CategoryProps
}>()
</script>

<template>
    <li class="category" @mouseenter="open = true" @mouseleave="open = false">
        <div class="top-link">
            <RouterLink :to="category.href">
                {{ category.title }}

            </RouterLink>
        </div>
        <div v-if="open" class="bottom-links">
            <ul>
                <li v-for="link in category.underLinks">
                    <RouterLink :to="link.href">
                        {{ link.title }}
                        <Icon width="16" icon="fluent:chevron-right-20-regular" />
                    </RouterLink>
                </li>
            </ul>
        </div>
    </li>
</template>

<style scoped lang="scss">
.category {
    list-style: none;
    position: relative;

    .top-link {
        list-style: none;
        padding: 2.5rem 0;
        font-size: 1.6rem;
        text-transform: uppercase;
        cursor: pointer;
        transition: opacity 0.2s;

        &:hover {
            opacity: 0.6;
        }

        a {
            text-decoration: none;
            color: white;
        }
    }

    .bottom-links {
        position: absolute;
        z-index: 15;
        background-color: white;
        padding: 2rem;
        min-width: 300px;
        left: 0;
        bottom: 0;
        transform: translateY(100%);

        ul {
            display: flex;
            flex-direction: column;
            gap: 2rem;

            li {
                list-style-type: none;

                a {
                    color: black;
                    text-decoration: none;
                    display: flex;
                    justify-content: space-between;
                    font-size: 1.6rem;
                    &:hover{
                        color: #4a90e2;
                    }
                    svg {
                        color: #c1b7b7;
                    }
                }
            }
        }

    }
}
</style>