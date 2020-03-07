# Meadow
![Hexo](https://img.shields.io/badge/Hexo-3.0+-blue)
![Node.JS](https://img.shields.io/badge/node.js-6.0-brightgreen)

Meadow is a Material Designed Hexo theme based on MDUI.

[Demo](https://garybear.cn/)

[中文文档](https://garybear.cn/t-4072/)

## Installation
**1. Change dir to Hexo root directory.**
```
$ cd hexo
```
**2. Get theme from GitHub.**

Download latest master branch
```
$ git clone https://github.com/kb1000fx/Meadow
```
Or download release version from [Github Releases Page](https://github.com/kb1000fx/Meadow/releases)

**3. Change theme**

Edit `_config.yml` file in the `Site` folder and set theme to meadow
```
theme: meadow
```
## Deploy
### Github Page
Install [hexo-deployer-git](https://github.com/hexojs/hexo-deployer-git)
```
$ npm install hexo-deployer-git --save
```

Add the following configurations to `_config.yml` file in the `Site` folder:
```YML
deploy:
  type: git
  repo: https://github.com/<username>/<project>
  branch: <branch>
```

Use `hexo g -d` to deploy

### Tencent Cloud COS
Install [hexo-deployer-cos](https://github.com/sdlzhd/hexo-deployer-cos)
```
$ npm install hexo-deployer-cos --save
```

Add the following configurations to `_config.yml` file in the `Site` folder:
```YML
deploy:
  type: cos
  secretId: yourSecretId
  secretKey: yourSecretKey
  bucket: yourBucket
  region: yourRegion
```

Use `hexo g -d` to deploy
# Theme Setting
## Sidebar Menu
### Tags page
>Add a tags page contains all tags in your site.

**1. Create a page named tags**
```
$ hexo new page "tags"
```
**2. Edit tags page**

Set page type to tags
```
title: All Tags
date: 2020-02-02 20:00:02
type: "tags"
```
**3. Add tags to theme `_config.yml`**
```
menu:
  ...
  ...
  tags: /tags/ || bookmark
```
### Categories page
>Add a categories page contains all categories in your site.

**1. Create a page named categories**
```
$ hexo new page "categories"
```
**2. Edit categories page**

Set page type to categories
```
title: All Categories
date: 2020-02-02 20:00:02
type: "categories"
```
**3. Add categories to theme `_config.yml`**
```
menu:
  ...
  ...
  categories: /categories/ || folder
```
### Other Menu Items
**Add siderbar menu item to theme `_config.yml` as shown, view [MDUI Doc](https://www.mdui.org/docs/material_icon) to check out icons**
```
menu:
  ...
  menu_item: ~path/ || icon_name
  ...
```
## Social Link
**Add social links to theme `_config.yml` as shown, view [MDUI Doc](https://www.mdui.org/docs/material_icon) to check out icons**
```
social:
  social_item: links_url || icon_name
```
## Passage End Tag
Edit `_config.yml` file in the `Theme` folder.
```
passage_end_tag:
  enabled: true
  text: --- 本文结束 <i class="fa fa-heartbeat"></i> The End ---
```
## Math
### Config
Edit `_config.yml` file in the `Theme` folder.
```yml
math:
  enabled: true
  engine: mathjax ##可选渲染引擎：mathjax、katex
  mathjax:
    cdn: https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js
    mhchem: true
  katex:
    cdn_css: https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css
    cdn_js: https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.js
    auto_render: https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/contrib/auto-render.min.js
```
### Mathjax

Set enabled to true and engine to mathjax

Set `mhchem` to `true` if you wanna use it to write chemical equations.

Add `mathjax: true` in Front-matter of the article you want to use mathjax.
### Katex
Set enabled to true and engine to katex 

Add `katex: true` in Front-matter of the article you want to use katex.
> Here are some [memos (in Chinese)](https://garybear.cn/t-29708/#Latex) of the usages of Mathjax and Katex on my blog.

## Mermaid
### Config
Edit `_config.yml` file in the `Theme` folder.
```YML
# mermaid 
mermaid:
  enable: true 
  version: "8.4.0" 
  startOnload: true  #default true
  theme: 'default'    #default, forest, dark, neutral.
```
### Usage
Insert your mermaid code between `<div>` tags with `mermaid` class as below:
```HTML
<div class="mermaid">
  your mermaid code
</div>
```
More grammars of mermaid code can be viewed in [Github: mermaid](https://github.com/mermaid-js/mermaid).

Or the [memo (in Chinese)](https://garybear.cn/t-29708/#Mermaid) on my blog.

# Third-Party Setting
## Comment Services
Edit `comment` part of `_config.yml` file in the `Theme` folder.

Set different values of `use` to select the comment service.
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

## Busuanzi
Edit `_config.yml` file in the `Theme` folder.
```
busuanzi:
  site: true
  page: true
  busuanzi_js: https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js
```

## Google Adsense
Edit `_config.yml` file in the `Theme` folder to set google adsense.

Here are 3 Ads Units for default, which is `footer`, `sidebar`, `banner`. 

Pub Id and Ads Slot Id can be found in your Google Adsense Settings.

If your want to set more ads units on more positions: 
+ Add new files in path `~hexo/themes/meadow/layout/_adsense`.
+ Fill your Google Adsense Code in the new files.
+ Then add `partial('_adsense/{YOUR_FILE_NAME}')` to the EJS files at the positions you want.
```
google_adsense:
  enabled: true
  auto_ad: true
  pub_id: 
  footer_slot: 
  sidebar_slot: 
  banner_slot:
```

## Analytics Services
Edit `_config.yml` file in the `Theme` folder to set your Analytics Services.
```
analytics:
  google_analytics:
    tracking_id: 
    localhost_ignored: true
  baidu_site_id:
  cnzz_site_id:
  tencent_site_id:
```

# Plugin
## Abbrlink
[Github: hexo-abbrlink](https://github.com/rozbo/hexo-abbrlink)
### Install：
``` bash
npm install hexo-abbrlink --save
```
### Use：
Modify permalink in `_config.yml` file in the `Site` folder:
```
permalink: :abbrlink/
```

## Sitemap
[Github: hexo-generator-sitemap](https://github.com/hexojs/hexo-generator-sitemap)
### Install:
``` bash
$ npm install hexo-generator-sitemap --save
```
### Use:
Modify sitemap configures in `_config.yml` file in the `Site` folder.
```
sitemap:
  path: sitemap.xml
  template: ./sitemap_template.xml
  rel: false
```
## Local Search
[Github: hexo-generator-searchdb](https://github.com/theme-next/hexo-generator-searchdb)
### Install
```
$ npm install hexo-generator-searchdb --save
```
### Use:
Modify search configures in `_config.yml` file in the `Site` folder.
```
search:
  path: search.xml
  field: post
  content: true
  format: html
```

Edit `_config.yml` file in the `Theme` folder.
```
search:
  local: true
  path: /search.xml
  placeholder: 请输入关键字
```
> If you set `local` to false, Meadow will use Google Search as the Site Search Service by default