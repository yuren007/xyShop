<template>
    <div>
    	<head-top :head-title="'分类'" goBack="true"></head-top>
        <nav class="class-nav">敬请期待</nav>
    	<footer-guide></footer-guide>
    </div>    
</template>

<script>
import headTop from '../header/header';
import footerGuide from '../footerguide/footerguide';
export default {
	data() {
		return {};
	},
	components: {
		headTop,
		footerGuide
	}
};
</script>

<style lang="scss" scoped>
.class-nav {
	padding: 2.1rem 0.5rem;
}
</style>
