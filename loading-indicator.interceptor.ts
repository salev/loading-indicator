import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import {NprogressHandlerService} from './nprogress-handler.service';
import {Injectable} from '@angular/core';

@Injectable()
export class LoadingIndicatorInterceptor implements HttpInterceptor {

  constructor(private progressHandler: NprogressHandlerService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // handler for both success and fail responce
    const onReqFinish = (event: HttpEvent<any>) => {
      if (event.type === undefined || event.type === 4) {
        this.progressHandler.onXhrFinish();
      }
    };

    this.progressHandler.onXhrStart();
    return next.handle(req).do(
      onReqFinish,
      onReqFinish
    );
  }


}
