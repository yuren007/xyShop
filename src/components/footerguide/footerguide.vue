<template>
    <section id='foot_guide'>
        <section class="guide_item" @click="gotoAddress('/homepage')">
            <svg class="icon_style">
                <use xmlns:xlink="../../assets/img/homepage.svg"></use>
            </svg>
            <span>首页</span>
        </section>
        <section class="guide_item" @click="gotoAddress('/classification')">
            <svg class="icon_style">
                <use xmlns:xlink="http://www.w3.org/1999/xlink"></use>
            </svg>
            <span>分类</span>
        </section>
        <section class="guide_item" @click="gotoAddress('/order')">
            <svg class="icon_style">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="$route.path.indexOf('order') !== -1? '#orderActive' : '#order'"></use>
            </svg>
            <span>订单</span>
        </section>
        <section class="guide_item" @click="gotoAddress('/profile')">
            <svg class="icon_style">
                <use xmlns:xlink="http://www.w3.org/1999/xlink"></use>
            </svg>
            <span>我的</span>
        </section>
    </section>
</template>

<script>
    export default {
    	data(){
            return{
                
            }
        },
        created(){
           
        },
        mounted(){
            
        },
        methods: {
        	gotoAddress(path){
        		this.$router.push(path)
        	}
        },

    }

</script>

<style lang="scss" scoped>
    @import '../../style/mixin';

    #foot_guide{
        background-color: #fff;
        position: fixed;
        z-index: 100;
        left: 0;
        right: 0;
        bottom: 0;
        @include wh(100%, 1.95rem);
        display: flex;
        box-shadow: 0 -0.026667rem 0.053333rem rgba(0,0,0,.1);
    }
    .guide_item{
    	flex: 1;
    	display: flex;
    	text-align: center;
    	flex-direction: column;
        align-items: center;
        .icon_style{
			@include wh(.8rem, .8rem);
			margin-top: .3rem;
			fill: #ccc;
		}
		span{
			@include sc(.45rem, #666);
		}
    }
   
</style>
