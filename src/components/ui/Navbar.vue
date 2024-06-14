<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { categories } from "../../constants/index"
import { RouterLink } from 'vue-router'
</script>

<template>
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
        <input class="hind" placeholder="Indtatst søgeord" />
        <Icon width="26" icon="ion:search-outline" />
      </div>
      <!-- search -->

      <!-- cart -->
      <div class="shopping hind">
        <span> 0,00 DKK </span>
        <button class="cart">
          <Icon width="26" icon="iconoir:shopping-bag" />
          <div class="amount">3</div>
        </button>
      </div>
      <!-- cart -->
    </nav>
  </div>
  <div class="bottom">
    <ul>
        <li v-for="category in categories">
            {{ category }}
        </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.top {
    padding: 0 20px;
  nav {
    display: flex;
    max-width: 1280px;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0;

    .logo {
      text-transform: uppercase;
      display: flex;
      align-items: center;
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

    .shopping {
      display: flex;
      align-items: center;

      span {
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
    }
  }
}

.bottom{
    background-color: black;
    color: white;
    ul {
        max-width: 1280px;
        margin: 0 auto;
        display: flex;
        gap: 2.8rem;
        font-weight: 500;
        li{
            list-style: none;
            padding: 2.5rem 0;
            font-size: 1.6rem;
            text-transform: uppercase;
            cursor: pointer;
            transition: opacity 0.2s;
            &:hover{
                opacity: 0.6;
            }
        }
    }
}
</style>
