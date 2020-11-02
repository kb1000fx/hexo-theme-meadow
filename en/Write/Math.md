## Insert math formula
According to the engine enabled in the theme settings, add in the head of the article
`` `
mathjx: true
`` `
or it could be
`` `
katex: true
`` `
Use the `$$` symbol to wrap a single-line formula where the formula needs to be inserted or use the `$` symbol to wrap an in-line formula

## Responsive
If you need to prevent a single-line formula from displaying the wrong line under a small screen, you can use the `div` tag to wrap the formula content, and add a class` .math-fluid` on the `div` tag to make the formula have a horizontal scroll bar.