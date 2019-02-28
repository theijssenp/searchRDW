import { Component, OnInit } from '@angular/core';
import { Kenteken } from '../kenteken.interface';
import { RdwInfo } from 'src/app/RdwInfo.model';
import { RdwsearchService } from 'src/app/rdwsearch.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-kenteken-details',
  templateUrl: './kenteken-details.component.html',
  styleUrls: ['./kenteken-details.component.css']
})
export class KentekenDetailsComponent implements OnInit {
  kenteken: String;
  rdwinfos: RdwInfo[];
  constructor(private rdwInfoService: RdwsearchService, private route: ActivatedRoute) { }

  searchRdw(kenteken: String) {
    return this.rdwInfoService.getRdwInfo(kenteken)
      .subscribe(data => this.rdwinfos = data);
  }
  ngOnInit() {
    this.kenteken = this.route.snapshot.params['kenteken'];
    this.searchRdw(this.kenteken);
  }

}
