<template>
	<div class="login-bg">
		<div class="login">

			<a-form id="components-form-demo-normal-login" :form="form" class="login-form" @submit="handleSubmit">
				<div class="title-container">
					<h3 class="title">Login</h3>
				</div>
				<div style="margin-top: 50px;">
					<div style="font-size: 14px;font-weight: bold;">用户名</div>
					<a-form-item>
					  <a-input
					    v-decorator="[
					      'userName',
					      { rules: [{ required: true, message: 'Please input your username!' }] },
					    ]"
					    placeholder="Username"
					  >
					    <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
					  </a-input>
					</a-form-item>
				</div>

				<div style="margin-top: 40px;">
					<div style="font-size: 14px;font-weight: bold;">密码</div>
					<a-form-item>
					  <a-input-password
					    v-decorator="[
					      'password',
					      { rules: [{ required: true, message: 'Please input your Password!' }] },
					    ]"
					    type="password"
					    placeholder="Password"
					  >
					    <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
					  </a-input-password>
					</a-form-item>
				</div>

				<div style="text-align: center;margin-top: 40px;">
					<a-button class="btn" type="primary" html-type="submit">
						Login
					</a-button>
				</div>


			</a-form>
		</div>

	</div>
</template>

<script>
	import $ from 'jquery'
	
	export default {		
		data() {
			return{
				/* username:'admin',
				password:'admin', */
		    };
		},
		beforeCreate() {
		  this.form = this.$form.createForm(this, { name: 'normal_login' });
		},
		methods: {
			handleSubmit(e) {
			  e.preventDefault();
			  this.form.validateFields((err, values) => {
			    if (!err) {
					
					//得到params对象，用来接收参数
					let params = new URLSearchParams() 
					params.append('username', values.userName)
					params.append('password', values.password)
					this.$axios({
						url: '/api/login',//接口 
						method: 'get',
						headers: { //请求头设置为表单提交的请求头
							//'Content-Type': "application/x-www-form-urlencoded"
						},
						data: params,
						withCredentials : true
					}).then((response) => {
						
						//console.log(this.$cookies.get('test-cookies'));
						let redirect = decodeURIComponent(
							this.$route.query.redirect || "/index"
						);
						this.$router.push({path: redirect});
						/* if (response.data.success == true) {
							//this.$cookies.set("status", "logined", 30 * 60); // 设置cookie中存放的生命周期
							let redirect = decodeURIComponent(
								this.$route.query.redirect || "/index"
							);
							this.$router.push({path: redirect});
						} else {
							this.$error({
								title: 'This is an error message',
								content: '用户名或密码错误！请重新登录！'
							});
						} */
						
					}).catch((response) => {
							console.log(response);
					});
							
			      
					
				}
			});
		}
		}
	};
</script>
<style scoped>
	.login-bg {
		width: 100%;
		height: 100%;
		display: -webkit-flex;
		justify-content: center;
		align-items: center;
		/* background-image: url(../../static/img/login-bg.png);
		background-repeat: no-repeat;
		background-size: 100% 100%; */
		background-color: #2d3a4b;

	}

	.login {
		width: 350px;
		height: 450px;
		background: #FFFFFF;
		box-shadow: 0px 11px 14px 2px rgba(32, 32, 32, 0.17);
		border-radius: 16px;
		padding: 20px;
	}

	.title-container {
		text-align: center;
	}

	.title {
		font-size: 26px;
		font-weight: bold;
	}

	.btn {

		margin-top: 30px;
		width: 120px;
		height: 40px;
		background: #547BD5;
		box-shadow: 0px 11px 14px 2px rgba(84, 123, 213, 0.35);
		border-radius: 25px;
	}

	.line {
		width: 100%;
		height: 1px;
		background: #547BD5;
		border: 1px solid #547BD5;
	}

	.input {
		border: none;
		width: 100%;
		font-size: 16px;
		font-weight: 400;
	}
	.input:focus {
		outline: none;
		border: 0px;
	}

	::-webkit-input-placeholder {
		color: #aab2bd;
		font-size: 12px;
	}

	::-moz-placeholder {
		color: #aab2bd;
		font-size: 12px;
	}

	:-ms-input-placeholder {
		color: #aab2bd;
		font-size: 12px;
	}


</style>
