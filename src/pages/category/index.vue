<template>
    <div>
        <!-- 我是分类页 -->
         <nav-bar>
                  <!-- <i class="iconfont icon-zuojiantou1"  ></i> -->
                 <a class="zuojiantou1" slot="left" @click="goBack">首页</a>
                <!-- <i class="iconfont icon-zuojiantou" slot="left" @click="goBack"></i> -->
                <div slot="center"> 分类页 </div>
                <i class="iconfont icon-msg" slot="right"></i>
       </nav-bar>
       <div class="g-content-container">
        <div class="sidebar">
            <category-tab @switch-tab="getCurrentId"/>
        </div>
      <div class="main">
        <category-content :curId="curId"/>
      </div>
    </div>
    </div>
</template>

<script>
import CategoryTab from "./tab";
import CategoryContent from "./content";
import NavBar from "@/components/navbar";
    export default {
    name: "Category",
    components: {
    CategoryTab,
    CategoryContent,
    NavBar 
    },
    data(){
        return{
            curId:""
        };
    },
    methods:{
        goBack(){
            this.$router.go(-1);
        },
        getCurrentId(id) {
          this.curId = id;
        }
    }
    }
</script>

<style scoped>
#g-view{
  height:50px;
  background: linear-gradient(#eee, #ddd) !important;
  border-bottom: 1px solid #ddd;
}
.g-view-container .title{
  display: flex;
  height:50px;
  
}
.zuojiantou1{
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
.g-content-container {
  display: flex;
}
.sidebar {
  width: 80px;
  height: 100%;
}
.main {
  flex: 1;
  height: 100%;
}
</style>