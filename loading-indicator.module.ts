import {ModuleWithProviders, NgModule} from '@angular/core';
import {NprogressHandlerService} from './nprogress-handler.service';
import {LoadingIndicatorInterceptor} from './loading-indicator.interceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

@NgModule({
})
export class LoadingIndicatorModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LoadingIndicatorModule,
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: LoadingIndicatorInterceptor,
          multi: true,
        },
        NprogressHandlerService
      ]
    };
  }
}

