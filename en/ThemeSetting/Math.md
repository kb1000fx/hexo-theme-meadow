## Config
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
## Mathjax

Set enabled to true and engine to mathjax

Set `mhchem` to `true` if you wanna use it to write chemical equations.

Add `mathjax: true` in Front-matter of the article you want to use mathjax.
## Katex
Set enabled to true and engine to katex 

Add `katex: true` in Front-matter of the article you want to use katex.

> Here are some [memos (in Chinese)](https://garybear.cn/t-29708/#Latex) of the usages of Mathjax and Katex on my blog.
