<template>
	<div class="loginContainer">
		<head-top :head-title="'注册'" goBack="true"></head-top>
		<form class="loginForm">
				<section class="input_container">
						<input type="text" placeholder="账号">
				</section>
				<section class="input_container phone_number">
						<input type="text" placeholder="验证码" name="phone" maxlength="11">
						<button>获取验证码</button>
				</section>
				<section class="input_container">
						<input type="password" placeholder="密码">
				</section>
				<section class="input_container">
						<input type="password" placeholder="确认密码">
				</section>
		</form>
		<div class="login_container">注册</div>
		<router-link class="to_register" to="/">已有账号？请登录</router-link>
    </div>
</template>

<script>
import headTop from '../header/header';
export default {
	name: 'register',
	data() {
		return {
			msg: '注册'
		};
	},
	components: { headTop }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

