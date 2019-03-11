<template>
 <div class="g-container" id="app">
		<div class="g-view-container">
       <keep-alive>
        <transition :name="transitionName">    
        <router-view></router-view> 
        </transition>
       </keep-alive>
    </div>
		<div class="g-footer-container">
			<tabbar></tabbar>
		  </div>
    </div>
</template>

<script>
import loading from "@/components/loading";
import tabbar from "@/components/tabbar";
export default {
  name: 'App',
  data(){
    return{
      transitionName:"fold-left"
    };
  },
  watch:{
     $route(to, from) {
      console.log(from.path);
      console.log(to.path);
       const routerDeep = [
        "/home",
        "/category",
        "/cart",
        "/personal",
        "/product"
      ];
      const toDepth = routerDeep.indexOf(to.path);
      const fromDepth = routerDeep.indexOf(from.path);
      this.transitionName = toDepth > fromDepth ? "fold-left" : "fold-right";
    }
  },
  components:{
  tabbar
  },
  created(){
    this.$store.state.cart.added = JSON.parse(window.localStorage.getItem('cart'))
if(this.$store.state.cart.added==null){
  this.$store.state.cart.added=[];
}  
  }
};
</script>

<style socped>
.fold-left-enter-active {
  animation-name: fold-left-in;
  animation-duration: 0.3s;
}
.fold-left-leave-active {
  animation-name: fold-left-out;
  animation-duration: 0.3s;
}
@keyframes fold-left-in {
  0% {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    /* visibility: visible; */
  }
  /*50% {
      transform: translate3d(50%, 0, 0);
    }*/
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fold-left-out {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  /*50% {
      transform: translate3d(-50%, 0 , 0);
    }*/
  100% {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    /* visibility: hidden; */
  }
}

.fold-right-enter-active {
  animation-name: fold-right-in;
  animation-duration: 0.3s;
}
.fold-right-leave-active {
  animation-name: fold-right-out;
  animation-duration: 0.3s;
}
@keyframes fold-right-in {
  0% {
    width: 100%;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    /* visibility: visible; */
  }
  /*50% {
      transform: translate3d(50%, 0, 0);
    }*/
  100% {
    width: 100%;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fold-right-out {
  0% {
    width: 100%;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  /*50% {
      transform: translate3d(-50%, 0 , 0);
    }*/
  100% {
    width: 100%;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    /* visibility: hidden; */
  }
}
</style>