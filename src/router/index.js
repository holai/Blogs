// import Vue from 'vue'
// import Router from 'vue-router'
import index from '@/components/web/index'
// import about from '@/components/web/about'
// import blog from '@/components/web/blog'
// import essay from '@/components/web/essay'
// import intro from '@/components/web/intro'

const about = ()=> import('@/components/web/about')
const intro = ()=> import('@/components/web/intro')
const essay = ()=> import('@/components/web/essay')
const blog = ()=> import('@/components/web/blog')
const btInfo = ()=> import('@/components/web/btInfo')

// import admin from '@/components/admin/admin'
// import login from '@/components/admin/login'
// import news from '@/components/admin/news'
// import articlesManage from '@/components/admin/articles-manage'
// import aboutManage from '@/components/admin/about-manage'


const admin = ()=> import('@/components/admin/admin')
const login = ()=> import('@/components/admin/login')
const news = ()=> import('@/components/admin/news')
const chart = ()=> import('@/components/admin/chart')
const aboutManage = ()=> import('@/components/admin/about-manage')
const articlesManage = ()=> import('@/components/admin/articles-manage')


// Vue.use(Router)

export default new VueRouter({
  routes: [
	{
		path: '/',
		component: index,
		children:[
			{
			  path: '/',
			   component: blog,
			   meta: {
			       keepAlive: true // 需要被缓存
			   }
			},
			 {
			   path: '/about',
			   component: about,
				meta: {
				   keepAlive: false // 不需要缓存
				}
			},
			{
				path: '/essay',
				name: 'essay',
				component: essay,
				  meta: {
					keepAlive: false // 不需要缓存
				  }
			},
      {
        path:'/intro',
        component:intro
      },
      {
        path:'/btInfo',
        component:btInfo
      },

		]
	},
	{
	  path: '/admin',
	  // component: admin,
    component:admin,
	  children:[
		  {
			 path:'/',
			 component:news,
		  },
		  {
			  path:'/news',
        name: 'news',
			  component:news,
		  },
		  {
			  path:'/articlesManage',
			  component: articlesManage,
		  },
          {
              path:'/chart',
              component: chart,
          },
      {
        path:'/aboutManage',
        component: aboutManage,
      },
      {
        path: '/blog',
        name:'blog',
         component: blog,
      }

	  ]
	},
	{
			path: '/login',
			component: login
	},
	{   //app 时使用  可删除
			path: '/essays',
      name: 'essays',
			component: essay,
        meta: {
      	keepAlive: false // 不需要缓存
        }
	}

  // ,
    // {
    //   path:'/intro',
    //   component:intro
    // }
  ]
})
