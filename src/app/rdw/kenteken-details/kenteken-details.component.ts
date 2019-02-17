import { Component, OnInit, Input } from '@angular/core';
import { Kenteken} from '../kenteken.interface';

@Component({
  selector: 'kenteken-details',
  templateUrl: './kenteken-details.component.html',
  styleUrls: ['./kenteken-details.component.css']
})
export class KentekenDetailsComponent implements OnInit {

  @Input() kenteken: Kenteken;

  constructor() { }

  ngOnInit() {
  }

}
