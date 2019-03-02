import { Component } from '@angular/core';
import { rdwinfo } from './rdwinfo.model';
import { RdwsearchService } from './rdwsearch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RDWSearch';
  rdwinfos: rdwinfo[];

constructor(private rdwInfoService: RdwsearchService){}

searchRdw ( kenteken: String){
  return this.rdwInfoService.getRdwInfo(kenteken)
  .subscribe(data=> this.rdwinfos = data);
  console.log('Start logging');
  console.log(this.rdwinfos);
console.log('Stop logging');

}

}
