
import { Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-componente2',
 
  templateUrl: './Componente2.component.html',
  styleUrls: ['./Componente2.component.scss']
})
export class Componente2Component implements OnInit {
title: string = ''
constructor()  {}

  ngOnInit(): void {
    this.title = 'Secondo Component Title'
   }

}
