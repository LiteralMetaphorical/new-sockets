import { Component, OnInit, Output } from '@angular/core';
import { WebsocketService } from "../websocket.service";
import { share } from "rxjs/operators";

import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";

interface AppStore {
  message: object;
}

@Component({
  selector: 'app-display-price',
  templateUrl: './display-price.component.html',
  styleUrls: ['./display-price.component.scss']
})
export class DisplayPriceComponent implements OnInit {
  constructor(private service: WebsocketService, private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch({type: "PRICES", message: {lol: "lel"}})
    this.service.subToSocket();
    for (let price in this.service.observableObj) {
      this.service.observableObj[price].pipe(share())
    }
  }
}
