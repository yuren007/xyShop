<template>
    <div>
    	<head-top :head-title="'首页'" goBack="true"></head-top>
		<article>
			<shop-list></shop-list>
		</article>
    	<footer-guide></footer-guide>
    </div>    
</template>

<script>
import headTop from '../header/header';
import footerGuide from '../footerguide/footerguide';
import shopList from '../shoplist/shoplist'
export default {
	data() {
		return {};
	},
	components: {
		headTop,
		footerGuide,
		shopList
	}
};
</script>

<style lang="scss" scoped>
	@import '../../style/mixin';
</style>
