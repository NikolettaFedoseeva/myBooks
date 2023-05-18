<template>
    <div class="app-wrapper">
        <router-view></router-view>
    </div>
</template>
<script setup lang="ts">
import {onMounted} from "vue";


onMounted(async () => {
});
</script>
<style lang="less">
//#app {
//  overflow: hidden;
//  -webkit-font-smoothing: antialiased;
//  -moz-osx-font-smoothing: grayscale;
//  color: #2c3e50;
//}
//
//.custom-scroll {
//  margin-right: -10px;
//  padding-right: 5px;
//
//  &::-webkit-scrollbar {
//    width: 5px;
//    max-height: 50%;
//  }
//
//  /* Track */
//
//  &::-webkit-scrollbar-track {
//    box-shadow: inset 0 0 5px #fff;
//    border-radius: 10px;
//  }
//
//  /* Handle */
//
//  &::-webkit-scrollbar-thumb {
//    background: #fff;
//    border-radius: 10px;
//  }
//
//  /* Handle on hover */
//
//  &::-webkit-scrollbar-thumb:hover {
//    background: #fff;
//  }
//
//  &:hover {
//    &::-webkit-scrollbar {
//      width: 5px;
//    }
//
//    /* Track */
//
//    &::-webkit-scrollbar-track {
//      box-shadow: inset 0 0 5px #fff;
//      border-radius: 10px;
//    }
//
//    /* Handle */
//
//    &::-webkit-scrollbar-thumb {
//      background: rgba(0, 0, 0, 0.08);
//      border-radius: 10px;
//    }
//
//    /* Handle on hover */
//
//    &::-webkit-scrollbar-thumb:hover {
//      background: rgba(0, 0, 0, 0.2);
//    }
//  }
//}
//
//body {
//  font-family: 'Gilroy';
//  margin: 0;
//}
//
//* {
//  box-sizing: border-box;
//}
//
//*:focus,
//*:focus-visible {
//  outline: none;
//}
//
//a {
//  text-decoration: none;
//  transition: color 0.15s;
//}
//
//ol,
//ul {
//  list-style-type: none;
//}
//
//.col-1 {
//  flex: 0 0 auto;
//  width: 8.33333333%;
//}
//
//.col-2 {
//  flex: 0 0 auto;
//  width: 16.66666667%;
//}
//
//.col-4 {
//  flex: 0 0 auto;
//  width: 33.33333333%;
//}
//
//.col-5 {
//  flex: 0 0 auto;
//  width: 41.66666667%;
//}
//
//.col-6 {
//  flex: 0 0 auto;
//  width: 50%;
//}
//
//.col-7 {
//  flex: 0 0 auto;
//  width: 58.33333333%;
//}
//
//.col-11 {
//  flex: 0 0 auto;
//  width: 91.66666667%;
//}
//
//.col-12 {
//  flex: 0 0 auto;
//  width: 100%;
//}
//
//@media (min-width: 600px) {
//  .col-sm-2 {
//    flex: 0 0 16.6666666667%;
//    max-width: 16.6666666667%;
//  }
//
//  .col-sm-3 {
//    flex: 0 0 25%;
//    max-width: 25%;
//  }
//
//  .col-sm-4 {
//    flex: 0 0 33.3333333333%;
//    max-width: 33.3333333333%;
//  }
//
//  .col-sm-6 {
//    flex: 0 0 50%;
//    max-width: 50%;
//  }
//
//  .col-sm-8 {
//    flex: 0 0 66.6666666667%;
//    max-width: 66.6666666667%;
//  }
//
//  .col-sm-10 {
//    flex: 0 0 83.3333333333%;
//    max-width: 83.3333333333%;
//  }
//
//  .col-sm-12 {
//    flex: 0 0 100%;
//    max-width: 100%;
//  }
//}
//
//@media (min-width: 768px) {
//  .col-md-2 {
//    flex: 0 0 16.6666666667%;
//    max-width: 16.6666666667%;
//  }
//
//  .col-md-3 {
//    flex: 0 0 25%;
//    max-width: 25%;
//  }
//
//  .col-md-4 {
//    flex: 0 0 33.3333333333%;
//    max-width: 33.3333333333%;
//  }
//
//  .col-md-6 {
//    flex: 0 0 50%;
//    max-width: 50%;
//  }
//
//  .col-md-8 {
//    flex: 0 0 66.6666666667%;
//    max-width: 66.6666666667%;
//  }
//
//  .col-md-10 {
//    flex: 0 0 83.3333333333%;
//    max-width: 83.3333333333%;
//  }
//
//  .col-md-12 {
//    flex: 0 0 100%;
//    max-width: 100%;
//  }
//}
//
//@media (min-width: 961px) {
//  .col-lg-2 {
//    flex: 0 0 16.6666666667%;
//    max-width: 16.6666666667%;
//  }
//
//  .col-lg-3 {
//    flex: 0 0 25%;
//    max-width: 25%;
//  }
//
//  .col-lg-4 {
//    flex: 0 0 33.3333333333%;
//    max-width: 33.3333333333%;
//  }
//
//  .col-lg-6 {
//    flex: 0 0 50%;
//    max-width: 50%;
//  }
//
//  .col-lg-8 {
//    flex: 0 0 66.6666666667%;
//    max-width: 66.6666666667%;
//  }
//
//  .col-lg-10 {
//    flex: 0 0 83.3333333333%;
//    max-width: 83.3333333333%;
//  }
//
//  .col-lg-12 {
//    flex: 0 0 100%;
//    max-width: 100%;
//  }
//}
//
//@media (min-width: 1200px) {
//  .col-xl-2 {
//    flex: 0 0 16.6666666667%;
//    max-width: 16.6666666667%;
//  }
//
//  .col-xl-3 {
//    flex: 0 0 25%;
//    max-width: 25%;
//  }
//
//  .col-xl-4 {
//    flex: 0 0 33.3333333333%;
//    max-width: 33.3333333333%;
//  }
//
//  .col-xl-6 {
//    flex: 0 0 50%;
//    max-width: 50%;
//  }
//
//  .col-xl-8 {
//    flex: 0 0 66.6666666667%;
//    max-width: 66.6666666667%;
//  }
//
//  .col-xl-10 {
//    flex: 0 0 83.3333333333%;
//    max-width: 83.3333333333%;
//  }
//
//  .col-xl-12 {
//    flex: 0 0 100%;
//    max-width: 100%;
//  }
//}
//
//.row-play-keys-layout {
//  display: flex;
//  flex-wrap: wrap;
//}
//
//
///** TODO  PlayKeys */
//.container-layout {
//    width: 100%;
//    margin-right: auto;
//    margin-left: auto;
//    padding: 0 95px 0 65px;
//    max-width: 1440px;
//    @media (max-width: 1400px) {
//        padding: 0 55px 0 65px;
//        max-width: 1300px;
//    }
//    @media (max-width: 1300px) {
//        max-width: 1220px;
//    }
//    @media (max-width: 992px) {
//        max-width: 100%;
//    }
//    @media (max-width: 960px) {
//        padding: 0 25px;
//    }
//    @media (max-width: 767px) {
//        padding: 0 10px;
//    }
//}
//
//.container {
//  width: 100%;
//  margin-right: auto;
//  margin-left: auto;
//  padding: 0 175px 0 65px;
//  max-width: 1440px;
//  @media (max-width: 1400px) {
//    padding: 0 75px 0 65px;
//    max-width: 1300px;
//  }
//  @media (max-width: 1300px) {
//    max-width: 1220px;
//  }
//  @media (max-width: 992px) {
//    max-width: 100%;
//  }
//  @media (max-width: 960px) {
//    padding: 0 25px;
//  }
//  @media (max-width: 767px) {
//    padding: 0 10px;
//  }
//}
</style>
