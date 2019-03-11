<template>
    <div>
       <nav-bar>
                <i class="iconfont icon-back" slot="left" @click="goBack"></i>
                <div slot="center"> 购物车 ({{totalQuantity}})</div>
                <i class="iconfont icon-msg" slot="right"></i>
       </nav-bar>
    
    <div class="total">
      <div class="cart-no-good" :class="hasProduct?'isHidden':''">
        <div class="opps">
          <img src="~@/assets/icon/pay_pop_img_loading_fail.png" alt>
        </div>
        <p class="empty-title">您的购物车中没有商品，请先去挑选心爱的商品吧！</p>
        <div class="go-shop" @click="goToShop">去逛逛</div>
      </div>
      <div :class="hasProduct?'':'isHidden'">
        <my-scroll  class="wrapper" ref="scroll" :style="{'height':maxheight}"> 
          <div class="main">
            <div class="cart-wrap">
              <div class="cart-account">
                <!-- 店铺描述开始 -->
              
                <div class="cart-title">
                  <div class="tcont">
                    <span class="check-icon" @click="chooseAlll()">
                      <img :src="chooseAll?checkIcon:checkNotIcon" alt>
                    </span>
                    <img src="./images/icon.png" id="tianmao">
                    <a href="#">希芸小店</a>
                  </div>
                </div>
                
                <!-- 店铺描述结束 -->
                <div class="cart-list" v-for="(item, index) in cartLists" :key="index">
                  <span class="check-icon" @click="chooseOne(index)">
                      <img :src="item.isCheck?checkIcon:checkNotIcon" alt>
                  </span>
                  <div class="cart-right">
                    <a href>
                      <img :src="`http:${item.img}`">
                    </a>
                    <div class="cart-info">
                      <a href>{{item.title}}</a>
                      <div class="cart-pay">
                        <p class="pay-price">
                          ￥
                          <span>{{item.price}}</span>
                        </p>
                        <div class="pay-btn">
                          <span class="min-btn" @click="reduceNum(item)"></span>
                          <b>{{item.quantity}}</b>
                          <span class="max-btn" @click="addNum(item)"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         </my-scroll>
        <div class="c-footer">
          <div class="c-f-left">
            <div class="qx">
              <span class="check-icon" @click="chooseAlll()">
                 <img :src="chooseAll?checkIcon:checkNotIcon" alt>
              </span>
              <h3>全选</h3>
            </div>
            <p>
              合计:
              <span>￥</span>
              <strong>{{totalPrice.toFixed(2)}}</strong>
            </p>
          </div>
          <div class="c-f-right" @click="sumbitBtn()">结算 ({{totalQuantity}})</div>
        </div>
      </div>
    </div>
  
    </div>
</template>

<script>
import MyScroll from "@/components/scroll";
import NavBar from "@/components/navbar";
import { MessageBox } from "mint-ui";
    export default {
      name:'cart',
    data() {
    return {
      hasProduct: false,
      totalPrice: 0,
      num:0,
      totalQuantity: 0,
      checkNotIcon: require("@/assets/icon/order_not_checked.png"),
      checkIcon: require("@/assets/icon/order_checked.png"),
      chooseAll: false,
      cartLists: [],
      maxheight:document.documentElement.clientHeight - 100 +'px'
    };
  },
  components:{
    NavBar,
    MyScroll
  },
  created(){
    this.carts();
  },
   computed: {
    quantityArray() {
      let added = this.cartLists;
      let array = [];
      for (let item of added) {
        array.push(item.quantity);
      }
      // console.log(array)
      return array;
    }
  },
   methods:{
        // 如果有数据 就显示数据页面 没有数据就显示没数据页面 用hasProduct 真假来判断
        carts(){
            this.cartLists = this.$store.state.cart.added;
            if( this.cartLists.length != 0){
                this.hasProduct = true;
            }
        },
        // 跳转
        goToShop(){
            this.$router.replace('./home')
        },
        goBack(){
            this.$router.go(-1)
        },
        // del(item){
        //     let { id, type, quantity } = item;
        //     let newProduct = {
        //     id: id,
        //     type: type,
        //     quantity: quantity=0
        //     };
        //     this.$store.dispatch("updateThisCart", newProduct);
        //     console.log(item.id);
            
        //     if(this.cartLists == 0){
        //         this.hasProduct = false;
        //     }
        // },
        // 单选并且计算价格
        chooseOne(id){
            console.log(this.cartLists[id].isCheck)
            this.cartLists[id].isCheck = !this.cartLists[id].isCheck
            if(this.cartLists[id].isCheck == true){
                this.num++
            this.totalQuantity += this.cartLists[id].quantity
             this.totalPrice += this.cartLists[id].quantity * this.cartLists[id].price
            }else{
                this.num--
                let item = this.cartLists[id]
                this.totalQuantity -= item.quantity
                this.totalPrice -= Math.round(item.quantity * item.price * 100)/100
            }   
            if(this.num == this.$store.state.cart.added.length){
                this.chooseAll = true
            }else{
                this.chooseAll = false
            }
            console.log(this.cartLists);  
        },
        // 改变购买数量减减
        reduceNum(item){
           let { id, type, quantity } = item;
            quantity--;
            if (quantity <= 1) {
            quantity = 1;
            }
            let newProduct = {
            id: id,
            type: type,
            quantity: quantity
            };
            this.$store.dispatch("updateThisCart", newProduct);
        },
        // 改变购买数量加加
         addNum(item) {
            let { id, type, quantity } = item;
            quantity++;
            let newProduct = {
                id: id,
                type: type,
                quantity: quantity
            };
            this.$store.dispatch("updateThisCart", newProduct);
            },
        // 计算价格方法
       getAllCart() {
           if(this.cartLists){
            for (let item of this.cartLists) {
            // 累加的总数量
            if (item.isCheck) {
            this.totalQuantity += item.quantity;
            // 累加的总价钱
            this.totalPrice += item.price * item.quantity;
            }
          }
      }
    },

        // 全选  并且计算价格
        chooseAlll(){
            console.log(this.chooseAll);
            this.chooseAll = !this.chooseAll
            if(this.chooseAll){
                for(let item of this.cartLists){
                        item.isCheck = true
                }
                let len = this.$store.state.cart.added.length
                 this.num = len
                 this.totalQuantity = 0;
                 this.totalPrice = 0;
                 this.getAllCart();
            }else{
                 for(let item of this.cartLists){
                    item.isCheck = false
                }
                 this.num = 0
                  this.totalQuantity = 0;
                 this.totalPrice = 0;
            }
        },

        sumbitBtn(){
             if (this.totalQuantity) {
                MessageBox.alert("恭喜你结算成功,请等待收货！");
                this.$store.state.cart.added = [];
                storage.setItem("cart", []);
                }
                console.log(this.cartLists[0].isCheck)
             if(this.cartLists != 0){
                this.hasProduct = false;
            }
        },
        updateList(id, type, quantity, isCheck) {
            let newProduct = {
                id: id,
                type: type,
                quantity: quantity,
                isCheck: isCheck
            };
            this.$store.dispatch("updateThisCart", newProduct);
            this.cartLists = storage.getItem("cart")
                ? JSON.parse(storage.getItem("cart"))
                : [];
        }
        
    },
     watch:{
        quantityArray() {
            if(this.quantityArray){
        // 监听数据的变化 从而改变价格
                this.totalQuantity = 0;
                this.totalPrice = 0;
                this.getAllCart();
            }
        }
    }
    };
</script>

<style scoped>
#tianmao{
  margin-right:10px;
}
#g-view{
  height:50px;
  background: linear-gradient(#eee, #ddd) !important;
  border-bottom: 1px solid #ddd;
}
.g-view-container{
  position: relative;
  z-index: 10;
}
.g-view-container .title{
  display: flex;
  height:50px;
  
}
.icon-back{
  position: relative;
  top:10px;
  font-size:18px;
}
.g-view-container>.title>.title-logo>.fenlei{
    position: absolute;
    display: flex;
    flex-direction: row;
    align-content: flex-start;
    flex-shrink: 0;
    width:30px;
    overflow: hidden;
    left: 18px;
    top: 50px;
    padding: 8.92267px 0px;
    transition: all 300ms ease 0ms;
    transform: translateY(0px);
}
.g-view-container>.title>.title-logo{
  display: flex;
  height:60px;
}
.g-view-container>.title>.title-logo .logo>div{
  font-size: 20px;
}

.nav-center {
  flex: 1;
  margin: 0 0.1rem;
  text-align: center !important;
  font: 18px 微软雅黑;
}
.login .iconfont {
  font-size: 20px;
}
input[type="checkbox"] {
  display: none;
}
.isHidden {
  display: none;
}
.check-icon {
  display: inline-block;
  height: 40px;
  width: 40px;
}
.check-icon img {
  width: 100%;
}
.cart-no-good {
  padding-top: 10px;
  padding-bottom: 69px;
  margin-top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.cart-no-good.isHidden {
  display: none;
}
.opps {
  height: 325px;
  width: 325px;
}
.opps img {
  width: 100%;
}
.empty-title {
  margin-top: 13px;
  font-size:16px;
}
.go-shop {
  margin-top: 30px;
  width: 150px;
  height: 60px;
  background: #f60;
  color: #fff;
  text-align: center;
  line-height:60px;
  border-radius: 20px;
  font-size: 20px;
}
.navbar {
  display: flex;
  justify-content: space-between;
  height: 40px;
  background: #f60;
  align-items: center;
  color: #fff;
}
.navbar h3 {
  font-size: 18px;
  font-weight: 700;
}
.navbar span {
  font-size: 18px;
}

/* 购物车开始 */
/* 外面大盒子 */
.main{
  width:100%;
}
.cart-wrap {
  overflow: hidden;
  margin-top: 10px;
  width: 100%;
  height:100%;
  display: flex;
  justify-content: center;
}
/* 店铺描述开始 */
.cart-account {
  width: 100%;
  height:510px;
  border-radius: 6px;
  background: #fff;
}
.cart-title,
.cart-list {
  width: 100%;
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding: 0px 5px;
}
.cart-title {
  height: 40px;
  border-bottom: 2px solid #f5f5f5;
}
.cart-title .tcont {
  display: flex;
  align-items: center;
  height: 24px;
}
.icon {
  width: 24px;
  height: 24px;
  background: url("./images/icon.png") no-repeat;
  background-size: 24px 24px;
  margin: 0px 6px;
}
.cart-title a {
  color: #000;
  font-size: 16px;
}
.cart-title span {
  font-size: 14px;
}
/* 店铺描述结束 */
/* 商品描述开始 */
.cart-list {
  width: 100%;
  height: 140px;
}
.cart-list > input {
  margin-right: 20px;
}

.cart-right {
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: space-between;
}
.cart-right img {
  height: 120px;
}
.cart-info {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
}
.cart-info a {
  font-size: 14px;
}
.cart-info .cart-pay {
  display: flex;
  height: 30px;
  padding-right: 6px;
  align-items: flex-end;
  justify-content: space-between;
}
.cart-info .pay-price {
  color: #f60;
}

.pay-btn {
  display: flex;
  height: 40px;
  align-items: center;
  justify-items: right;
  text-align:right;
  cursor: pointer;
}
.pay-btn .min-btn {
  width: 40px;
  height: 40px;
  font-size: 18px;
  display: inline-block;
  background: url("~@/assets/icon/cartReduce.png") no-repeat;
  background-size: 100% 100%;
}
.pay-btn b {
  padding: 0 10px;
}
.pay-btn .max-btn {
  width: 40px;
  height: 40px;
  font-size: 18px;
  display: inline-block;
  background: url("~@/assets/icon/cartAdd.png") no-repeat;
  background-size: 100% 100%;
}

.c-footer {
  position: fixed;
  bottom: 50px;
  width: 100%;
  max-width: 640px;
  min-width: 320px;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background: #fff;
}
.c-f-left {
  width: 70%;
  display: flex;
  justify-content: space-between;
  padding: 0px 5px;
  align-items: center;
}
.qx {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.qx input {
  margin-right: 4px;
}
.c-f-left p {
  font-size: 14px;
  padding: 0px 3px;
  color: #000;
}
.c-f-left span,
.c-f-left strong {
  color: #f60;
}
.c-f-left strong {
  font-size: 16px;
}
.c-f-right {
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 14px;
  background: #f60;
}
</style>