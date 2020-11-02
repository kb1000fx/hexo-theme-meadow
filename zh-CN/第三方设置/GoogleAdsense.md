编辑主题目录下的 `_config.yml` 文件来设置Google Adsense. 其中Pub Id 和 Slot Id 可以在Adsense设置中找到.

主题中默认包含了 `sidebar`(抽屉侧边栏), `banner`(标题下方), `footer`(文章结尾) 这三个广告单元. 如果你想在其他位置设置广告单元可使用以下步骤: 
+ 在`~hexo/themes/meadow/layout/_adsense`路径下新建文件.
+ 在文件中插入你的Google Adsense代码.
+ 编辑EJS文件，在你想要加入广告的位置加入 `partial('_adsense/{YOUR_FILE_NAME}')`
```
google_adsense:
  enabled: true
  auto_ad: true
  pub_id: 
  footer_slot: 
  sidebar_slot: 
  banner_slot:
```
