import { defineConfig } from 'vitepress';
import { set_sidebar } from '../utils/sidebar.mjs'; // 改成自己的路径

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/CADelog/',
  head: [['link', { rel: 'icon', href: 'logo.dio.svg' }]],
  title: 'CADelog',
  description: 'CADel的个人网站',
  themeConfig: {
    logo: 'blog.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      {
        text: '博客',
        link: '/blogs/',
      },
    ],

    sidebar: {
      '/blogs/': set_sidebar('docs/blogs/'),
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/cadel114514' }],
    footer: {
      message: 'CADel的个人网站 -CADelog',
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },
  },
});

