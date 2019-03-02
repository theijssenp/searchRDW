import { Component, OnInit } from '@angular/core';
import { rdwinfo } from 'src/app/rdwinfo.model';
import { RdwsearchService } from 'src/app/rdwsearch.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-kenteken-details',
  templateUrl: './kenteken-details.component.html',
  styleUrls: ['./kenteken-details.component.css']
})
export class KentekenDetailsComponent implements OnInit {
  kenteken: String;
  rdwinfos: rdwinfo[];
  constructor(private rdwInfoService: RdwsearchService, private route: ActivatedRoute) { }

  searchRdw(kenteken: String) {
    return this.rdwInfoService.getRdwInfo(kenteken)
      .subscribe(data => this.rdwinfos = data);
  }
  ngOnInit() {
    this.kenteken = this.route.snapshot.params['kenteken'];
    this.searchRdw(this.kenteken);
    this.route.params.subscribe(
      (params: Params) => {
      this.kenteken = params['kenteken'];
      }
    );
  }
}
