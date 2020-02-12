# Meadow
## Write
### Mathjax
Edit `_config.yml` file in the `Theme` folder.
```yml
mathjax:
  enabled: true
  src: https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js
```
Add `mathjax: true` in Front-matter of the article you want to use mathjax.
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
  # example, https://github.com/hexojs/hexojs.github.io
  branch: gh-pages
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
# Third-Party Setting
## Comment
### Gitalk
[Github: Gitalk](https://github.com/gitalk/gitalk)

[Click here](https://github.com/settings/applications/new) to register a new GitHub Application for authorization.

Edit `_config.yml` file in the `Theme` folder.
```YAML
comment:
  use: gitalk
  ## Gitalk
  gitalk_client_id: # Github Application Client ID
  gitalk_client_secret: # Github Application Client Secret
  gitalk_repo: # Repository name to store issues
  gitalk_owner: # Github repo owner 
  gitalk_sid_type:  
  gitalk_distractionFreeMode: true # Facebook-like distraction free mode
```

## Busuanzi
Edit `_config.yml` file in the `Theme` folder.
```
busuanzi:
  site: true
  page: true
  busuanzi_js: https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js
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
$ npm install hexo-generator-searchdb
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
  placeholder: 请输入关键字
  path: /search.xml
  use: plugin
```
