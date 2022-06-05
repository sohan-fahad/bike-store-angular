import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-order',
  templateUrl: './manage-order.component.html',
  styleUrls: ['./manage-order.component.css']
})
export class ManageOrderComponent implements OnInit {

  sortAction = "PENDING";

  constructor() { }

  ngOnInit(): void {
  }

  handleSort(action: string) {
    this.sortAction = action
  }

}
