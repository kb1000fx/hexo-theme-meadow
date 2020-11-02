You can add comment services for your website.

Edit `comment` part of `_config.yml` file in the `Theme` folder.

Set different values of `use` to select the comment service. You can set several comment services at the same time.

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