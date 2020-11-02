Edit `_config.yml` file in the `Theme` folder to set google adsense.

Here are 3 Ads Units for default (Auto Size), which is `footer`, `sidebar`, `banner`. 

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