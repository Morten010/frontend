<script setup lang="ts">
import { Icon } from "@iconify/vue";
import Cart from "./cart/Cart.vue";
import CartButton from "./cart/CartButton.vue";
import CartContent from "./cart/CartContent.vue";
import CategoryDropdown from "./CategoryDropdown.vue";
import { categories } from "../../constants/index"
import { RouterLink } from 'vue-router'
import { useCartStore } from "../../stores/cart"
import { formatPrice } from "../../utils/index"
import { ref } from "vue"
const store = useCartStore()
const openCartSmallScreen = ref(false)
const openMenuSmallScreen = ref(false)
const openSearchSmallScreen = ref(false)
const search = ref("")

const handleSmallSearch = () => {
  if(openCartSmallScreen){
    openCartSmallScreen.value = false
  }
  if(openMenuSmallScreen){
    openMenuSmallScreen.value = false
  }
  openSearchSmallScreen.value = !openSearchSmallScreen.value
}

const handleSmallMenu = () => {
  if(openCartSmallScreen){
    openCartSmallScreen.value = false
  }
  if(openSearchSmallScreen){
    openSearchSmallScreen.value = false
  }
  const appElement = document.getElementById("app");
  const bodyElement = document.querySelector("body");

  if (!openMenuSmallScreen.value && appElement && bodyElement) {
    appElement.setAttribute("style", "transform: translateX(75%); z-index: 40; box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; position: relative;");
    bodyElement.setAttribute("style", "overflow: hidden; max-height: 100%; max-width: 100vw;");
  }
  if (openMenuSmallScreen.value && appElement && bodyElement) {
    appElement.setAttribute("style", "");
    bodyElement.setAttribute("style", "");
  }
  
  openMenuSmallScreen.value = !openMenuSmallScreen.value
}

const handleSmallCart = () => {
  if(openMenuSmallScreen){
    openMenuSmallScreen.value = false
  }
  if(openSearchSmallScreen){
    openSearchSmallScreen.value = false
  }

  openCartSmallScreen.value = !openCartSmallScreen.value
  
}

</script>

<template>
  <!-- top nav -->
  <div class="top">
    <nav>
      <!-- logo -->
      <RouterLink to="/" class="logo hind">
        <span class="big"> Improving </span>
        <span class="small"> Store </span>
      </RouterLink>
      <!-- logo -->

      <!-- search -->
      <div class="input-wrapper">
        <input class="hind" placeholder="Indtatst søgeord" v-model="search" />
        <Icon width="26" icon="ion:search-outline" />
      </div>
      <!-- search -->

      <!-- cart -->
      <div class="cart-large-screen">
        <Cart />
      </div>
      <!-- cart -->

    </nav>
  </div>
  <!-- top nav end -->

  <!-- bottom nav -->
  <div class="bottom">
    <ul class="category-list">
      <CategoryDropdown v-for="category in categories" :category="category" />
    </ul>
    <ul class="phone-nav">
      <li
      @click="handleSmallMenu"
      >
        <Icon width="33" icon="iconoir:menu" />
      </li>
      <li
      @click="handleSmallSearch"
      >
        <Icon width="33" icon="ion:search-outline" />
      </li>
      <li @click="handleSmallCart" class="cart-mobile">
        <CartButton />
      </li>
    </ul>
  </div>
  <!-- bottom nav -->


  <!-- small screens popups -->
  <div v-if="openCartSmallScreen" class="cart-small-screen-content">
    <CartContent />
  </div>
  
  <div
  v-if="openSearchSmallScreen"
  class="input-small-screen"
  >
    <div class="input-wrapper">
      <input class="hind" placeholder="Indtatst søgeord" v-model="search" />
      <Icon width="26" icon="ion:search-outline" />
    </div>
  </div>
  <!-- small screens popups -->

  <!-- sidebar -->
   <Teleport v-if="openMenuSmallScreen" to="body">
    <div
    class="sidebar"
    >
      <div
      class="sidebar-content"
      >
        <div
        class="sidebar-top"
        >
          <h2>
            Menu
          </h2>
          <Icon 
          width="30" 
          icon="ion:close-circle-outline" 
          @click="handleSmallMenu"
          />
        </div>
        <ul>
          <li v-for="link in categories">
              <RouterLink :to="link.href">
                  {{ link.title }}
                  <Icon width="16" icon="fluent:chevron-right-20-regular" />
              </RouterLink>
          </li>
        </ul>
      </div>
    </div>
   </Teleport>
  <!-- sidebar -->

</template>

<style lang="scss" scoped>
@import "../../assets/shared.scss";
  .sidebar{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 75vw;
    height: 100%;
    background-color: transparent;
    z-index: 30;
    .sidebar-content{
      .sidebar-top{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.8rem;
        svg{
          color: #c1b7b7;
        }
      }
      padding: 2rem;
      width: 100%;
      background-color: white;
      height: 100%;
      ul{
        padding-top: 2rem;
        li{
          list-style-type: none;
          a{
            color: black;
            text-decoration: none;
            font-size: 2rem;
            justify-content: space-between;
            display: flex;
            padding: 0.5rem 0;
            transition: color 0.2s;
            &:hover{
              color: #4a90e2;
            }
            svg{
              color: #c1b7b7;
            }
          }
        }
      }
    }
  }
.top {
  padding: 0 20px;

  nav {
    display: flex;
    max-width: 1280px;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    padding: 3rem 0;

    @include laptop {
      padding: 1rem;
    }

    .logo {
      text-transform: uppercase;
      display: flex;
      align-items: center;

      @include laptop {
        margin: 0 auto;
      }

      // gap: 1rem;
      font-size: 2.9rem;
      text-decoration: none;

      .big {
        letter-spacing: 7px;
        font-weight: 600;
        color: #2a2e31;
      }

      .small {
        font-size: 2.6rem;
        font-weight: 500;
        color: #aeaeae;
      }
    }

    .cart-large-screen,
    .input-wrapper {
      display: block;

      @include laptop {
        display: none;
      }
    }
  }
}

.input-wrapper {
  position: relative;

  input {
    font-size: 1.6rem;
    padding: 1rem 1.5rem;
    border-radius: 10000px;
    width: 450px;
    background-color: #f3f3f3;
    border: 0.15rem solid #e3e3e3;
    padding-top: 1.2rem;
    @include laptop{
      width: 100%;
    }

    &:focus {
      outline: none;
    }
  }

  svg {
    position: absolute;
    right: 1.5rem;
    top: 50%;
    transform: translateY(-50%);
  }
}

.bottom {
  background-color: black;
  color: white;
  padding: 0 2rem;

  .cart-mobile {
    display: grid;
    place-content: center;
  }

  .phone-nav {
    display: none;
    justify-content: space-evenly;

    @include laptop {
      display: flex;
      justify-content: space-between;
    }

    list-style: none;

    li {
      padding: 1.5rem 2rem;
      cursor: pointer;
    }
  }

  .category-list {
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    gap: 2.8rem;
    font-weight: 500;

    @include laptop {
      display: none;
    }
  }
}

.cart-small-screen-content {
  padding: 0 2rem 2rem;
  display: none;

  @include laptop {
    display: block;
  }
}
.input-small-screen{
  padding: 2rem;
  display: none;

  @include laptop {
    display: block;
  }
}

</style>
