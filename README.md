# SLV Loading Indicator (Angular 5)

### [Demo](https://salev.github.io/angular/slv-loading-indicator/)

The loading indicator uses [nprogress](https://www.npmjs.com/package/nprogress)

```shell
npm install nprogress --save
npm install @types/nprogress --save
```

```css
@import "../node_modules/nprogress/nprogress.css";
@import "style-includes/nprogress-ovewrite.css";
```
You can customize color of a progress bar through nprogress-ovewrite.scss

Include __LoadingIndicatorModule.forRoot()__ into your app module.

Angular interceptor of the loading indicator will appear on each single or "banch" of Ajax requests.
