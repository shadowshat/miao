import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import movieRouter from './Movie'
import cinemaRouter from './Mine'
import mineRouter from './Cinema'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
	  movieRouter,
	  cinemaRouter,
	  mineRouter,
	  {
		  path:'/*',
		  redirect:'/movie'
	  }
  ]
})

export default router
