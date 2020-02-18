# Meadow简介
![Hexo](https://img.shields.io/badge/Hexo-3.0+-blue) ![Node.JS](https://img.shields.io/badge/node.js-6.0-brightgreen)

Meadow 是一款基于MDUI开发的，符合Material Designed的Hexo主题。
[Demo](https://garybear.cn/)
[Github](https://github.com/kb1000fx/hexo-theme-meadow)
## 安装
**1. 切换至Hexo根目录**
```
$ cd hexo
```
**2.从GitHub获取主题**
下载最新的master分支
```
$ git clone https://github.com/kb1000fx/Meadow
```
或从[Github Releases Page](https://github.com/kb1000fx/Meadow/releases)下载发行版本

**3. 切换主题**
编辑站点根目录下的`_config.yml`文件，并将主题设为meadow
```
theme: meadow
```
## 部署
### 部署至Github Page
安装 [hexo-deployer-git](https://github.com/hexojs/hexo-deployer-git)
```
$ npm install hexo-deployer-git --save
```
在站点目录的`_config.yml`文件中加入以下配置内容:
```YML
deploy:
  type: git
  repo: https://github.com/<username>/<project>
  branch: <branch>
```
使用 `hexo g -d` 命令进行部署
### 部署腾讯云COS
安装 [hexo-deployer-cos](https://github.com/sdlzhd/hexo-deployer-cos)
```
$ npm install hexo-deployer-cos --save
```
在站点目录的`_config.yml`文件中加入以下配置内容:
```YML
deploy:
  type: cos
  secretId: yourSecretId
  secretKey: yourSecretKey
  bucket: yourBucket
  region: yourRegion
```
使用 `hexo g -d` 命令进行部署
# 主题设置
## 侧边栏目录
### 标签页
>添加一个包含站点内所有标签的标签页

**1. 创建标签页**
```
$ hexo new page "tags"
```
**2. 编辑标签页**

将类型设为tag
```
title: All Tags
date: 2020-02-02 20:00:02
type: "tags"
```
**3. 在主题的`_config.yml`文件中加入标签页**
```
menu:
  ...
  ...
  tags: /tags/ || bookmark
```
### 分类页
>添加一个包含站点内所有分类的分类页

**1. 创建分类页**
```
$ hexo new page "categories"
```
**2. 编辑分类页**

将类型设为categories
```
title: All Categories
date: 2020-02-02 20:00:02
type: "categories"
```
**3. 在主题的`_config.yml`文件中加入分类页**
```
menu:
  ...
  ...
  categories: /categories/ || folder
```
### 其他菜单项
**如下所示在主题`_config.yml`文件中添加侧边栏菜单项 , 图标名称可参考[MDUI Doc](https://www.mdui.org/docs/material_icon)**
```
menu:
  ...
  menu_item: ~path/ || icon_name
  ...
```
## 社交链接
**如下所示，在主题文件夹中的 `_config.yml` 文件中添加社交链接 , 图标名称可参考[MDUI Doc](https://www.mdui.org/docs/material_icon)**
```
social:
  social_item: links_url || icon_name
```
## 本文结束标签
编辑主题文件夹中的 `_config.yml` 文件
```
passage_end_tag:
  enabled: true
  text: --- 本文结束 <i class="fa fa-heartbeat"></i> The End ---
```
## 数学公式渲染
编辑主题文件夹中的 `_config.yml` 文件
```yml
math:
  enabled: true
  engine: mathjax ##可选渲染引擎：mathjax、katex
  mathjax:
    cdn: https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js
  katex:
    cdn_css: https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css
    cdn_js: https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.js
    auto_render: https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/contrib/auto-render.min.js
```
### Mathjax
将enabled设为true，并将engine设为mathjax

在你想要使用mathjax的文章的Front-matter中添加 `mathjax: true`

### Katex
将enabled设为true，并将engine设为katex 

在你想要使用katex的文章的Front-matter中添加 `katex: true`

# 第三方设置
## 评论服务
编辑主题目录下的 `_config.yml` 文件中的`comment` 部分
通过设置`use`的值来选择启用的评论服务
```YAML
comment:
  use: #OPTION：gitalk; disqus; livere; valine; changyan; false
  ## Gitalk
  ### https://github.com/gitalk/gitalk
  gitalk_client_id: 
  gitalk_client_secret: 
  gitalk_repo: 
  gitalk_owner: 
  gitalk_sid_type:  #Ensure uniqueness and length less than 50
  gitalk_distractionFreeMode: #Facebook-like distraction free mode
  ## Disqus
  disqus_shortname:
  ## Livere
  livere_data_uid:
  ## Valine
  valine_leancloud_app_id:
  valine_leancloud_app_key:
  valine_placeholder:
  valine_page_size:
  valine_avatar:
  valine_lang:
  valine_guest_info:
  valine_notify:
  valine_verify:
  ## 畅言
  changyan_app_id:
  changyan_app_key:
  changyan_sid_type:
```

## 不蒜子计数
编辑主题目录下的 `_config.yml` 文件
```
busuanzi:
  site: true
  page: true
  busuanzi_js: https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js
```

## Google Adsense
编辑`~hexo/themes/meadow/layout/_adsense`中的文件并加入你的Google Adsense代码

编辑主题目录下的 `_config.yml` 文件来设置Google Adsense文件路径
```
google_adsense:
  enabled: true
  footer: ../_adsense/footer.ejs
  sidebar: ../_adsense/sidebar.ejs
  banner: ../_adsense/banner.ejs
```

## 分析服务
编辑主题目录下的 `_config.yml` 文件来设置你的分析服务

>与评论服务不同的是，可以同时开启多个分析服务
```
analytics:
  google_analytics:
    tracking_id: 
    localhost_ignored: true
  baidu_site_id:
  cnzz_site_id:
  tencent_site_id:
```

# 插件
## Abbrlink
[Github: hexo-abbrlink](https://github.com/rozbo/hexo-abbrlink)
### 安装：
``` bash
npm install hexo-abbrlink --save
```
### 用法：
修改站点目录下`_config.yml`文件中的`permalink`部分:
```
permalink: :abbrlink/
```

## 站点地图
[Github: hexo-generator-sitemap](https://github.com/hexojs/hexo-generator-sitemap)
### 安装:
``` bash
$ npm install hexo-generator-sitemap --save
```
### 用法:
修改站点目录下`_config.yml`文件中的`sitemap`部分:
```
sitemap:
  path: sitemap.xml
  template: ./sitemap_template.xml
  rel: false
```
## 本地搜索
[Github: hexo-generator-searchdb](https://github.com/theme-next/hexo-generator-searchdb)
### 安装
```
$ npm install hexo-generator-searchdb
```
### 用法
修改站点目录下`_config.yml`文件中的`search`部分:
```
search:
  path: search.xml
  field: post
  content: true
  format: html
```

编辑主题目录下的 `_config.yml` 文件
```
search:
  local: true
  path: /search.xml
  placeholder: 请输入关键字
```
> 如果你将 `local` 设为false, Meadow 将默认使用谷歌搜索作为站点搜索服务