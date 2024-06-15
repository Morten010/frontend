<script setup lang="ts">
import { footerLinks } from "../../constants/index"
import { Icon } from "@iconify/vue";
</script>

<template>
    <div class="footer-container">
        <footer>
            <!-- info -->
            <div class="info">
                <h2>
                    LIPSUMRESOMEN
                </h2>
                <p>
                    Cras a enim accumsan ante pulvinar porttitor. Aliquam
                    pharetra fringilla magna vel condimentum. Mauris rhoncus
                    elit rhoncus sodales luctus. Vestibulum orci urna,
                    malesuada eget nunc faucibus, ultrices pharetra arcu.
                    Suspendisse vulputate libero non sapien tempus rutrum.
                    Nulla lacus velit, convallis quis augue sed, pulvinar faucibus
                    dolor.
                </p>
            </div>
            <!-- info -->

            <!-- links -->
            <div class="link-section" v-for="linkSection in footerLinks">
                <h2>
                    {{ linkSection.title }}
                </h2>
                <ul>
                    <li v-for="link in linkSection.links">
                        <RouterLink :to="link.href">
                            {{ link.title }}
                        </RouterLink>
                    </li>
                </ul>
            </div>
            <!-- links -->

            <!-- socials -->
            <div class="socials">
                <Icon width="26" icon="iconoir:facebook" />
                <Icon width="26" icon="iconoir:instagram" />
                <Icon width="26" icon="foundation:social-linkedin" />
                <Icon width="26" icon="codicon:twitter" />
                <Icon width="26" icon="foundation:social-pinterest" />
            </div>
            <!-- socials -->
        </footer>
    </div>
</template>

<style scoped lang="scss">
@import "../../assets/shared.scss";

.footer-container {
    background-color: #303030;
    color: white;
    padding: 0 2rem;

    h2 {
        font-size: 2.2rem;
        font-weight: 500;
        margin-bottom: 1.5rem;
    }

    footer {
        max-width: 1280px;

        margin: 0 auto;
        padding: 10rem 0;
        display: grid;
        grid-template-columns: minmax(200px, 2fr) repeat(auto-fit, minmax(150px, 1fr));

        @include laptop {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        }

        gap: 4rem;

        .info {
            p {
                font-size: 1.4rem;
                color: #808080;
            }
        }

        .link-section {
            li {
                list-style-type: none;
                margin-bottom: 1rem;

                a {
                    text-decoration: none;
                    color: #808080;
                    font-size: 1.4rem;
                    transition: color 0.2s;

                    &:hover {
                        color: white;
                    }
                }
            }
        }

        .socials {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            color: #808080;

            svg {
                transition: color 0.2s;

                &:hover {
                    color: white;
                }
            }
        }
    }
}
</style>