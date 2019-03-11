<template>
<div class="g-view-container" id="g-view">
		<div class="title">
            <div class="title-logo">
                <div class="fenlei"  v-if="$slots.left">
                    <slot name="left"> 左 </slot>
                </div>
                <div class="logo"  v-if="$slots.center">
                    <slot name="center" > 中</slot>
                </div>
                <div class="login"  v-if="$slots.right">
                    <slot name="right" >右</slot>
                </div>
            </div>
            
		</div>
	</div>
</template>

<script>
    export default {
        name:"nabbar"
    }
</script>

<style scoped> 
 .g-view-container{
 background-color: rgb(255, 0, 54);
 }
    .g-view-container .title{
   
    border: 0px solid black;
    position: relative;
    box-sizing: border-box;
    display: flex;
    -webkit-box-orient: vertical;
    flex-direction: column;
    align-content: flex-start;
    flex-shrink: 0;
    width: 100%;
    height: 55px;
    align-self: center;
   
  }
    
  .g-view-container>.title>.title-logo>.fenlei{
    border: 0px solid black;
    position: absolute;
    box-sizing: border-box;
    display: flex;
    -webkit-box-orient: vertical;
    flex-direction: column;
    align-content: flex-start;
    flex-shrink: 0;
    width: 40px;
    overflow: hidden;
    left: 15.296px;
    top: 0px;
    padding: 8.92267px 0px;
    transition: all 300ms ease 0ms;
    transform: translateY(0px);
  }
  .g-view-container>.title>.title-logo>.fenlei img{
    display: flex;
    width: 382.4px;
    height: 38.24px;
  }
  .g-view-container>.title>.title-logo .logo{
    width:150px;
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    place-content: flex-start center;
    flex-shrink: 0;
    -webkit-box-align: center;
    align-items: center;
    height: 56.0853px;
    margin:0 auto;
    line-height: 56.0853px;
    -webkit-box-pack: center;
    transition: all 300ms ease 0ms;
    transform: scale(1);
    align-items: center;
    justify-items: center;
  }
  .g-view-container>.title>.title-logo .logo img{
    display: flex;
    width: 151.048px;
    height: 26.1307px;
    margin-top: 15px;
  }
  .g-view-container>.title>.title-logo .login{
    border: 0px solid black;
    position: absolute;
    box-sizing: border-box;
    display: flex;
    -webkit-box-orient: vertical;
    flex-direction: column;
    align-content: flex-start;
    flex-shrink: 0;
    width: 32px;
    overflow: hidden;
    right: 12.8px;
    top: 0px;
    line-height: 42px;
    padding: 7.46667px 0px;
  }
  .g-view-container>.title>.title-logo .login>a{
    text-decoration: none;
    color: rgb(255, 255, 255);
    font-size: 14.9333px;
    align-self: flex-end;
  }
  
</style>