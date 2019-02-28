import { Component, OnInit, Input } from '@angular/core';
import { Kenteken } from '../kenteken.interface';

@Component({
  selector: 'kenteken-lijst',
  templateUrl: './kenteken-lijst.component.html',
  styleUrls: ['./kenteken-lijst.component.css']
})
export class KentekenLijstComponent {

  @Input() kenteken: Kenteken;

  constructor() { }


}
