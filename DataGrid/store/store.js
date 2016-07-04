import { EventEmitter }  from 'events';
import Dispatcher  from '../dispatcher/dispatcher.js';

class Store extends EventEmitter {

  constructor() { super(); }

  handlerActions(action) {
    switch (action.type) {
      case 'SHOW_AND_HIDE_FILTER_COLUMNS':
        this.emit("ControlShowFilterColumns", action.show);
      break;
    }
  }

}

var objStore = new Store;
Dispatcher.register(objStore.handlerActions.bind(objStore));
export default objStore;
