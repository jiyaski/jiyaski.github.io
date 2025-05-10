
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Resume from '@/pages/Resume.vue'
import Blog from '@/pages/Blog.vue'
import BlogPost from '@/pages/BlogPost.vue' 
import NotFound from './pages/NotFound.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/resume', component: Resume },
  { path: '/blog', component: Blog },
  { path: '/blog/:slug', component: BlogPost, props: true }, 
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }, 
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router