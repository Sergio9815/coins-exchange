import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
import Error from '@/views/Error'
import CoinDetail from '@/views/CoinDetail'

Vue.use(Router) //UTILIZAR LOS PLUGINS

export default new Router({
  mode: 'history', //UTILIZAR el history mode de HTML

  //Definir las rutas
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/coin/:id', //:id  ES UN PARAMETRO DINAMICO
      name: 'coin-detail',
      component: CoinDetail,
    },
    {
      path: '*', //UTILIZAMOS * PARA QUE SE MUESTRE ESTA RUTA EN CASO DE NO ENCONTRAR UN RUTA CORRECTA
      name: 'error',
      component: Error,
    },
  ],
})
