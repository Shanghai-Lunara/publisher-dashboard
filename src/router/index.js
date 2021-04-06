import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/Whb/login'
import index from '@/components/Whb/index'

Vue.use(Router)

const router = new Router({
	routes: [

		{
			path: '/',
			redirect: '/login'
		},
		{
			path: '/login',
			name: 'login',
			component: login,
		},
		{
			path: '/index',
			name: 'index',
			component: index,
			meta : {                     
			   	requireAuth:true      
			}
		}
	]
})

// router.beforeEach((to,from,next)=>{	
// 	var name = $cookies.get('username');
// 	if(to.meta.requireAuth){
// 		if(name){
// 			next()
// 		}else{
// 			next({path:'/login'})
// 			// let token = localStorage.getItem('Authorization');
// 			// if (token === 'null' || token === '') { 
// 			// 	next('/login'); 
// 			// } else { 
// 			// 	next(); 
// 			// } 
// 		}
// 	}else{
// 		next()
// 	}
// })

export default router



