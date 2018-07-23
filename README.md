# Loading Indicator (Angular 5)

### [Demo](https://salev.github.io/angular/slv-loading-indicator/)

The loading indicator takes advantage of Angular interceptor.
Hence the progress bar will appear on each single or "banch" of Ajax requests.

The loading indicator uses [nprogress](https://www.npmjs.com/package/nprogress)

```shell
npm install nprogress --save
npm install @types/nprogress --save
```

You can customize color of a progress bar through nprogress-ovewrite.scss
```css
@import "../node_modules/nprogress/nprogress.css";
@import "<path>/nprogress-ovewrite.css";
```

Include __LoadingIndicatorModule.forRoot()__ into your app module.
