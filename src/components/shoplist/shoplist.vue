<template>
	<div>
        <article class="shop_content">
            <section>
                <img src="../../../static/img/mahua.png" alt="">
            </section>
            <section class="detail_container">
            <section class="detail_left">
                <p>
                    <span>西安小麻花</span>
                    <span>月售：2000</span>
                    <span>售价：¥10</span>
                    <buy-cart></buy-cart>
                </p>   
            </section>
        </section>
        </article>
    </div>
</template>

<script>
import buyCart from '../buycart/buycart';
export default {
	data(){
		return {
			
		}
	},
	mounted(){
		
    },
    components: { buyCart }
}
</script>

<style lang="scss" scoped>
    @import 'src/style/mixin';
    .shop_content {
        padding: 2.1rem 0.5rem 0;
        font-size: 0;
		@include wh(100%, 200px);
		img {
			width: 100%;
		}
    }
    .detail_left {
        p {
            @include sc(.6rem, #333);
            margin: .2rem 0;
        }
    }
</style>
