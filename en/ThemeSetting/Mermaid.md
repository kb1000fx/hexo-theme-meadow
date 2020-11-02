## Config
Edit `_config.yml` file in the `Theme` folder.
```YML
# mermaid 
mermaid:
  enable: true 
  version: "8.4.0" 
  startOnload: true  #default true
  theme: 'default'    #default, forest, dark, neutral.
```
## Usage
Insert your mermaid code between `<div>` tags with `mermaid` class as below:
```HTML
<div class="mermaid">
  your mermaid code
</div>
```
More grammars of mermaid code can be viewed in [Github: mermaid](https://github.com/mermaid-js/mermaid).

Or the [memo (in Chinese)](https://garybear.cn/t-29708/#Mermaid) on my blog.
