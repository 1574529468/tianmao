<template>
    <div class="all">
        <my-scroll class="wrapper" ref="scroll" :style="{'height':maxheight}"> 
        <div class="main">
        <div class="main-layout">
            <div class="header">
                <img src="./images/logo.png">
                <div class="header-name">
                    <span class="name">茜茜的精品小店</span>
                    <span class="my">
                        <i class="iconfont icon-close"></i>
                        我的亲情账号></span>
                </div>
                <div class="tubiao">
                <i class="iconfont icon-collect"></i>
                <i class="iconfont icon-cart"></i>
                </div>
            </div>
            <div class="transprant">
                <div>
                    <span>27</span>
                    <span>收藏夹</span>
                </div>
                <div>
                    <span>106</span>
                    <span>关注店铺</span>
                </div>
                <div>
                    <span>23</span>
                    <span>足迹</span>
                </div>
            </div>
            <div class="vip">
                <div class="vip-title">
                    <div class="left">
                        <span><img src="./images/huiyuan.png" width="50" height="20"></span>
                        <span>淘气值535</span>
                    </div>
                    <div class="right">花小积分兑大权力</div>
                </div>
            </div>
        </div>
        <div class="main-button">
                <div class="order">
                <div class="ordertitle">
                    <div class="DFrametop">
                        <h3>我的订单</h3>
                        <div>查看全部订单></div>
                    </div>
                    <span></span>
                    <div class="DFrameLayout">
                        <div>
                            <img src="./images/dingdan.png" alt="" width="29" height="29"><br>
                                <span>代付款</span>
                        </div>
                        <div>
                                <img src="./images/dingdan.png" alt="" width="29" height="29"><br>
                                <span>代发货</span>
                        </div>
                        <div>
                                <img src="./images/dingdan.png" alt="" width="29" height="29"><br>
                                <span>待收货</span>
                        </div>
                        <div>
                                <img src="./images/dingdan.png" alt="" width="29" height="29"><br>
                                <span>评价</span>
                        </div>
                        <div>
                                <img src="./images/dingdan.png" alt="" width="29" height="29"><br>
                                <span>退款/售货</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="banner">
                <div class="banner-title">
                    <img src="./images/banner.png" alt="">
                </div>
            </div>
            <div class="round">
                <div class="round-title">
                    <div class="DFrametop">
                        <h3>必备工具</h3>
                        <div>查看全部工具></div>
                    </div>
                    <p></p>
                    <div class="DFrameLayout">
                        <nav class="nav">
                            <ul>
                                <li class="nav-item" v-for="(val,key) in bibei" :key="key">
                                    <a href="#">
                                        <img :src="val.navUrl" alt="">
                                        <span>{{val.title}}</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>  
                    </div>
                </div>
            </div>
        </div>
        </div>
        </my-scroll> 
    </div>
</template>

<script>
import MyScroll from "@/components/scroll";
    export default {
        components: {
                 MyScroll
         },
        data(){
            return{
                bibei:[
                    {
                        navUrl:require("./images/title1.png"),
                        title:"野生小伙伴"
                    },
                    {
                        navUrl:require("./images/title2.png"),
                        title:"领券中心"
                    },
                    {
                        navUrl:require("./images/title3.png"),
                        title:"闲置换钱"
                    },
                    {
                        navUrl:require("./images/title4.png"),
                        title:"客服小密"
                    },
                    {
                        navUrl:require("./images/title5.png"),
                        title:"阿里宝卡"
                    },
                    {
                        navUrl:require("./images/title6.png"),
                        title:"我的评价"
                    },
                    {
                        navUrl:require("./images/title7.png"),
                        title:"主题换肤"
                    },
                    {
                        navUrl:require("./images/title8.png"),
                        title:"更多"
                    }
                ],
                 maxheight:document.documentElement.clientHeight - 100 +'px'
            }
        }
    }
</script>

<style scoped>
.all{
    width:100%;
    height:100%;
    min-height:300px;
    background: rgb(242, 242, 242);
}
.main-layout{
    display: flex;
    width:100%;
     flex-direction: column;
    height:auto;
    min-height: 200px;
    margin-top: -0.11rem;
    background-color: #FF5000;
    background-image: linear-gradient(to right, #FD9126, #FF5000);
    position: relative;
}
.main-button{
    width:100%;
   height:100%;
    position: relative;
}
.main-layout .header{
    display: flex;
    overflow: hidden;
    width: 96%;
    height: 75px;
    margin:0 auto;
    margin-top: 30px;
    position: relative;
}
.main-layout .header img{
    width:60px;
    height:59px;
    display: flex;
    margin-left: 6px;
    
}
.main-layout .header .header-name{
    display: flex;
    flex-direction: column;
    height:auto;
    margin-top:5px; 
}
.main-layout .header .header-name span{
    height:24px;
    display: inline-block;
    margin-left: 10px;
     color:#fff;
}
.main-layout .header .header-name .name{
    font-size: 18px;
    font-weight: bold;  
}
.main-layout .header .header-name .my{
    margin-top:3px;
    background: rgba(0, 0, 0,.2);
    opacity: 0.8;
    border-radius: 10px;
    text-align: center;
    line-height: 24px;
    font-size: 12px;
}
.main-layout .header .header-name .my>i{
      vertical-align: -2px;
}
.main-layout .header>.tubiao{
   position: absolute;
   right:10px;
   top:6px;
}
.main-layout .header>.tubiao i{
    font-size: 26px;
    color:#fff;
}
.transprant{
    display:flex;
    height:61px;
    width:96%;
    margin:0 auto;
}
.transprant div{
    width:91px;
    height:61px;
    display: flex;
    flex-direction: column;
    color:#fff;
    text-align: center;
    line-height: 26px; }
.vip,.order,.banner,.round{
    display: flex;
    width:94%;
    margin:0 auto;
    position: relative;
}
.vip .vip-title{
    display: flex;
    width:100%;
    background: #fff;
    height:59px;
    position: absolute;
    bottom: -73px;
     border-radius: 10px;
}
.vip .vip-title .left{
    width: 93px;
    height:59px;
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 14px;
}
.vip .vip-title .left span{
    padding-top:6px; 
}
.vip .vip-title .right{
    line-height: 40px;
    font-size: 14px;
    margin-left: 10px;
}
.order{
    height:180px;
}
.order .ordertitle{
    width:100%;
    height: 126px;
    position: absolute;
    background: #fff;
     border-radius: 10px;
     top:50px;
     display: flex;
    flex-direction: column;
}
.ordertitle .DFrametop,.round-title>.DFrametop{
    display: flex;
    justify-content: space-between;
    width: 96%;
    margin:0 auto;
    height:38px;
    line-height: 38px;
}
.ordertitle .DFrametop>h3,.round-title .DFrametop>h3{
    font-weight: bold;
}
.ordertitle .DFrametop>div,.round-title .DFrametop>div{
    font-size: 14px;
}
.ordertitle span,.round-title>p{
    width:100%;
    height:3px;
    background: rgb(242, 242, 242);
}
.ordertitle .DFrameLayout{
    display: flex;
    height:80px;
    width:100%;
}
.ordertitle .DFrameLayout div{
    width:20%;
    height: 76px;
    font-size: 14px;
    text-align: center;
    line-height: 36px;
    cursor: pointer;
}
.ordertitle .DFrameLayout div>span{
    background: transparent;
}
.ordertitle .DFrameLayout div:hover span{
    color: saddlebrown;;
}
.ordertitle .DFrameLayout div>img{
    margin-top:16px;
}
.banner .banner-title{
    height:120px;
    background: #fff;
    border-radius: 10px;
}
.banner .banner-title>img{
    width:100%;
    height: 94%;
    margin-top:4px;
}
.round .round-title{
    width:100%;
    margin-top:10px;
    height:230px;
    background: #fff;
    border-radius: 10px;
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
        width: 25%;
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
    nav>ul>li>a:hover span{
        color:saddlebrown;
    }
    nav>ul>li img{
       width:51px;
       height:51px;
       display:flex;
       flex-direction: column;
    }
    nav>ul>li>a>span{
        display:inline-block;
       display:flex;
       flex-direction: column;
       margin-top:10px;
       font-size: 13px;
       color:#000;
       text-align: center;
    } 
</style>