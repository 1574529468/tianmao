<template>
    <div>
        <my-scroll
            class="wrapper"
            :data="productData"
            :listenScroll="isScroll"
            @scroll="_scroll"
            :pullup="pullup"
            @pullup="_pullup"
             ref="scroll"
        >
         <!-- 产品详情页路由出口 -->
        <!-- <router-view></router-view> -->
        <div class="content">
        <!-- nav-bar内容 -->
       <nav-bar>
           	    <img src="./images/fenlei.png" alt="" slot="left">
               <img src="./images/logo.png" slot="center">
               <a href="" slot="right">登录</a>
       </nav-bar>
           <div class="title-sousuo">
                <div class="input">
                    <input type="text" @click="text1">
                    <i class="iconfont icon-search"></i>
                    <span class="shop" v-if="text">搜索商品、品牌</span>
                </div>
            </div>
        <!-- nav导航 -->
            <nav class="nav">
                <ul>
                    <li class="nav-item" v-for="(val,key) in navs" :key="key">
                        <a href="#">
                            <img :src="val.navUrl" alt="">
                            <span>{{val.title}}</span>
                        </a>
                    </li>
                </ul>
            </nav>
        <!-- swiper轮播图 -->
            <swiper :options="swiperOption">
                <swiper-slide v-for="(val,key) in sliders" :key="key">
                    <a :href="val.imgurl">
                        <img :src="val.imgName" id="swiper-img" alt >
                    </a>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        <!-- banner图部分 -->
            <div class="ban">
                <a href="">
                    <img src="./images/banner.png"/>
                </a>
            </div>
        <!-- ajax调用数据 商品信息 -->
        <product-list @loaded="getProductData" ref="productList"></product-list>
       </div>
          </my-scroll>
        <div class="g-backtop-container">
            <me-backtop :visible="isBacktopVisible" @backtop="backToTop"/>
        </div>
    </div>
</template>

<script>
import NavBar from '@/components/navbar';
import MyScroll from "@/components/scroll";
import MeBacktop from "@/components/backtop";
import {swiper,swiperSlide} from "vue-awesome-swiper";
import ProductList from "./productList.vue";
    export default {
        name:"home",
        components:{
            NavBar,
            MyScroll,
            swiper,
            swiperSlide,
            ProductList,
            MeBacktop
        },
        data(){
            return{
                isScroll:true,
                isBacktopVisible:false,
                productData:[],
                page:1,
                totalPage:0,
                pulldown:true,
                pullup:true,
                text:true,
                sliders:[
                    {
                        imgurl:"http://www.baidu.com",
                        imgName:require('./images/01.png')
                    },
                     {
                        imgurl:"http://www.baidu.com",
                        imgName:require('./images/02.png')
                    },
                     {
                        imgurl:"http://www.baidu.com",
                        imgName:require('./images/03.png')
                    },
                     {
                        imgurl:"http://www.baidu.com",
                        imgName:require('./images/04.png')
                    },
                     {
                        imgurl:"http://www.baidu.com",
                        imgName:require('./images/05.png')
                    },
                     {
                        imgurl:"http://www.baidu.com",
                        imgName:require('./images/06.png')
                    },
                     {
                        imgurl:"http://www.baidu.com",
                        imgName:require('./images/07.png')
                    }
                ],
                swiperOption:{
                    direction:"horizontal",
                    loop:true,
                    pagination:{
                        el:".swiper-pagination"
                    },
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: false
                    }
                },
                navs:[
                    {
                        navUrl:require("./images/title1.png"),
                        title:"苏宁易购"
                    },
                    {
                        navUrl:require("./images/title2.png"),
                        title:"天猫超市"
                    },
                    {
                        navUrl:require("./images/title3.png"),
                        title:"天猫国际"
                    },
                    {
                        navUrl:require("./images/title4.png"),
                        title:"聚划算"
                    },
                    {
                        navUrl:require("./images/title5.png"),
                        title:"分类"
                    }
                ]
            };
        },
        methods:{
            text1(){
                this.text=false
            },
            getProductData(obj){
                this.productData=obj.productList;
                this.page=obj.page;
                this.totalPage=obj.totalPage;
            },
            _scroll(pos){
                console.log(pos);
                    console.log(pos.y);
                    this.isBacktopVisible=pos.y < 0 &&-pos.y>200;
            },

            _pulldown(){
                console.log("正在下拉")
            },
             _pullup(){
                console.log("正在上拉");
                if (this.page > this.totalPage) {
                    console.log("没有更多了");
                    this.pullup = false;
                    return false;
                }
                this.$refs.productList.updata(); 
             },
           backToTop() {
            this.$refs.scroll && this.$refs.scroll.scrollTo(0, 0);
            }
        }
    };
    
</script>

<style scoped>
/* 搜索部分 */
.title-sousuo{
    text-decoration: none;
    box-sizing: border-box;
    align-self: center;
    padding: 0px 10.6667px 10.6667px;
    display: flex;
    flex-direction: row;
    width: 100%;
    position: relative;
    min-height: 49.0667px;
     background-color: rgb(255, 0, 54);
     margin:0 auto;
  }
  .title-sousuo>.input{
      width:100%;
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-content: flex-start;
    flex: 1 1 0%;
    background-color: rgb(255, 255, 255);
    border-radius: 4.26667px;
    -webkit-box-flex: 1;
    position: relative;
  }
  .title-sousuo>.input>input{
      width:90%;
      height:100%;
      position: absolute;
      top:0;
      left:30px;
  }
  .title-sousuo>.input>span{
    white-space: pre-wrap;
    position: relative;
    box-sizing: border-box;
    display: flex;
    -webkit-box-orient: vertical;
    flex-direction: column;
    align-content: flex-start;
    flex-shrink: 0;
    font-size: 14.9333px;
    background-color: transparent;
    align-self: center;
    line-height: 40.5333px;
    color: rgba(0, 0, 0, 0.3);
  }
  .icon-search{
    width:16px;
    color:#ccc;
    height:17px;
    display: flex;
    position: relative;
    margin: 4.6667px 17px 0 6px;
    font-size: 28px;
  }

 /* 导航 */
    nav{
        height:82px;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
    }
    nav>ul{
        width:100%;
        margin: 0 auto;
    }
    nav>ul>li{
        display: flex;
        float: left;
        width: 20%;
        align-items: center;
        justify-content: center;
    }
    nav>ul>li>a{
        width: 100%;
        height:82px;
        display: flex;
        flex-direction:column;
         align-items: center;
        justify-content: center;
    }
    nav>ul>li img{
       width:51px;
       height:51px;
       display:flex;
       flex-direction: column;
    }
    nav>ul>li span{
        display:inline-block;
       display:flex;
       flex-direction: column;
       margin-top:10px;
       font-size: 13px;
       color:#000;
    } 
    /* 轮播图 */
    .swiper-container {
        width: 96%;
        height: 180px;
        margin:0 auto;
        margin-top:6px;
        box-shadow: 0px 4px 18px rgb(151, 148, 148);
        }
    #swiper-img {
        width: 100%;
        height: 100%;
        }
    .ban{
        display: flex;
        width:96%;
        align-items: center;
        justify-content: center;
        margin:10px auto;
    }
    .ban img{
        width:100%;
        height:100%;
    }
  
    /*滚动条*/
    .wrapper {
    width: 100%;
    height: 1000px;
    overflow: hidden;
    }
    .content {
    height: auto;
    }
    
</style>