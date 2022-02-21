import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sous-menu-page-component',
  templateUrl: './sous-menu-page.component.html',
  styleUrls: ['./sous-menu-page.component.scss']
})
export class SousMenuPageComponent implements OnInit {

   

  @Input() lienEncours:string = "";
  @Input() lienHistorique:string = "";
  @Input() libelleEncours: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
