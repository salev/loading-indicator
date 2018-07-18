
const CALL_DONE_AFTER = 10;

import * as NProgress from 'nprogress';
import {Injectable} from '@angular/core';

@Injectable()
export class NprogressHandlerService {

  private progressState = 0;

  onXhrStart() {
    this.onAction(1);
  }
  onXhrFinish() {
    this.onAction(-1);
  }

  private onAction = function(inc) {
    this.progressState += inc;
    if (this.progressState === 1) {
      NProgress.set(0.35).start();
    } else if (this.progressState === 0) {
      setTimeout(() => {  if (this.progressState === 0) { NProgress.done(); }  },  CALL_DONE_AFTER);
    }

  };

}
