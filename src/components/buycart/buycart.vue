 <template>
    <section class="cart_module">
        <section class="cart_button">
           
                <span>
                    <svg>
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-minus"></use>
                    </svg>
                </span>
            
           
                <span class="cart_num">2</span>
            
            <svg class="add_icon">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-add"></use>
            </svg>
        </section>
        <section class="choose_specification">
            <section class="choose_icon_container">
               
                    <svg class="specs_reduce_icon">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-minus"></use>
                    </svg>
                
               
                    <span class="cart_num">1</span>
                
                <span class="show_chooselist">选规格</span>
            </section>
        </section>
    </section>
</template>

<script>
export default {
	data() {
		return {
			showMoveDot: [] //控制下落的小圆点显示隐藏
		};
	},
	mounted() {},
	methods: {}
};
</script>

<style lang="scss" scoped>
@import '../../style/mixin';
.cart_module {
	.add_icon {
		position: relative;
		z-index: 999;
	}
	.cart_button {
		display: flex;
		align-items: center;
	}
	svg {
		@include wh(0.9rem, 0.9rem);
		fill: #3190e8;
	}
	.specs_reduce_icon {
		fill: #999;
	}
	.cart_num {
		@include sc(0.65rem, #666);
		min-width: 1rem;
		text-align: center;
		font-family: Helvetica Neue, Tahoma;
	}
	.choose_specification {
		.choose_icon_container {
			display: flex;
			align-items: center;
			.show_chooselist {
				display: block;
				@include sc(0.55rem, #fff);
				padding: 0.1rem 0.2rem;
				background-color: $blue;
				border-radius: 0.2rem;
				border: 1px solid $blue;
			}
		}
	}
}
.showReduce-enter-active,
.showReduce-leave-active {
	transition: all 0.3s ease-out;
}
.showReduce-enter,
.showReduce-leave-active {
	opacity: 0;
	transform: translateX(1rem);
}
.fade-enter-active,
.fade-leave-active {
	transition: all 0.3s;
}
.fade-enter,
.fade-leave-active {
	opacity: 0;
}
.fadeBounce-enter-active,
.fadeBounce-leave-active {
	transition: all 0.3s;
}
.fadeBounce-enter,
.fadeBounce-leave-active {
	opacity: 0;
	transform: scale(0.7);
}
</style>

