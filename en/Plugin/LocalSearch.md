[Github: hexo-generator-searchdb](https://github.com/theme-next/hexo-generator-searchdb)
## Install
```
$ npm install hexo-generator-searchdb --save
```
## Use:
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