<template>
    <div class="recomment">
        <div class="re-title">
            <img src="./images/relike.png" alt="">
        </div>
        <ul>
            <li  v-for="(item,key) in productList" :key="key" @click="findProduct(key)">
                <router-link :to="{name:'home-product',params:{id:item.baseinfo.itemId,imgurl:item.baseinfo.picUrl}}">
                <div class="re-img">
                    <img v-lazy="`http:${item.baseinfo.picUrlNew}`" alt="">
                </div>
                <p class="name">{{item.name.shortName}}</p>
                <p class="origPrice"><del>¥{{item.price.origPrice}}</del></p>
                <p class="info">
                    <span class="price">{{item.price.actPrice}}元</span>
                    <span class="count">{{item.remind.soldCount}}件已售</span>
                </p>
                <div class="youhui">
                    <p style="margin-top:10px;">预计新人红包后可再减10元</p>
                    <p style="font-size:16px;">快来抢购吧-->></p>
                </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
// 导入axios
import axios from "axios";
import { getRecommend } from "@/api/productList.js";
    export default {
        name:"productList",
        data(){
            return{
                productList:[],
                page:1,
                totalPage:1
            };
        },
        created(){
            this.getProductList();
        },
        
        methods:{
            updata(){
                return this.getProductList();
            },
            getProductList(){
                // 跨越代理配置
                // axios.defaults.baseURL="http://localhost:8080";
                // return axios
                //     .get("/api/json/tg/ajaxGetItemsV2.json",{
                //         params:{
                //             page:this.page,
                //             paize:20,
                //             type:0,
                //             frontCaId:""
                //         }
                //     })
                getRecommend(this.page)
                    .then(res=>{
                        // console.log(res.data);
                                   
                        if (res.code == "200") {
                        this.page++;
                        this.totalPage = res.totalPage;
                        this.productList = this.productList.concat(res.itemList);

                        this.$store.dispatch("addGoods",this.productList);
                        
                         let obj = {
                        productList: this.productList,
                        page: this.page,
                        totalPage: this.totalPage
                        };
                         this.$emit("loaded", obj);
                    }
                    })
                    .catch(err=>{
                        // console.log(err);
                    });
            },
            findProduct(id){
                this.$store.dispatch("productInfo",this.goodList[id]);
                // console.log(this.goodList[id]);
            }
        },
        computed:{
            goodList(){
                return this.$store.state.goodsList;
                // console.log(goodsList);
            }
        }
    };
</script>

<style scoped>
.recomment{
    display: flex;
    width:100%;
    height:auto;
    min-height:600px;
    margin: 0 auto;
    background: #fff5ee;
    flex-direction: column;
}
.recomment>.re-title{
    height:109px;
    display: flex;
}
.recomment>.re-title>img{
    width:100%;
    height: 109px;
}
.recomment>ul{
    width:96%;
    height:auto;
    margin:0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap:wrap
}
.recomment>ul>li{
    display: flex;
    flex-direction: column;
    width:49%;
    height:355px;
    background: #fff;
    border:1px solid rgb(237, 237, 237);
}
.recomment>ul>li .re-img{
    width:100%;
    height: 208px;
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    background-color: rgba(0, 0, 0, 0.03);
    padding: 18px;
}
.recomment>ul>li .re-img>img{
    margin:0 auto;
    width:100%;
    height:100%;
}
.recomment>ul>li .name{
    height: 36px;
    padding: 0 5px;
    margin-bottom: 8px;
    line-height: 1.5;
}
.recomment>ul>li .origPrice{
    padding: 0 5px;
    margin-bottom: 8px;
    color: #ccc;
}
.recomment>ul>li .info{
    display:flex;
    justify-content: space-between;
    padding: 0 5px;
    margin-bottom: 8px;
}
.recomment>ul>li .youhui{
    width: 100%;
    height:50px;
    background:url("./images/youhui.png") -15px;
    line-height:18px;
}
.recomment>ul>li .youhui>p{
    font-size: 12px;
    color:#fff;   
    margin-left:8px;
}
</style>