
<template>
    <div>
    	<head-top :head-title="'订单'" goBack="true"></head-top>
    	<footer-guide></footer-guide>
    </div>    
</template>

<script>

import headTop from '../header/header'
import footerGuide from '../footerguide/footerguide'
export default {
	data(){
        return {
        	
        }
    },
    components: {
    	headTop,
    	footerGuide
    }
}

</script>

<style lang="scss" scoped>
    
</style>
