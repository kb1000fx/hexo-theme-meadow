## Tags page
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
## Categories page
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
## Other Menu Items

Add siderbar menu item to theme `_config.yml` as shown

```
menu:
  ...
  menu_item: ~path/ || icon_name
  ...
```
We used `Iconfont` in Meadow Theme, you can find `Icon_name` in [Icon](_icon/index.html ':ignore')

If you want to use more icons, contact with me or just link to your own Iconfont Project.
