import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  // styleUrls: ['./pai.component.scss']
})
export class PaiComponent {

  status: string = "Esperando status ...";
  form?: any;

  setStatus(resp: any) {
    this.status = resp.status;
    this.form = resp.form;
  }

}
