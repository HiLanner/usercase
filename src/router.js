import VueRouter from 'vue-router'
import routes from './routes'
import Vue from 'vue'

Vue.use(VueRouter)

const router = new VueRouter(routes)

router.map(routes)

export default router
