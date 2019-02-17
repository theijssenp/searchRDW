import { Component, OnInit } from '@angular/core';
import { KentekenSource } from '../kenteken.interface';
import { ElasticsearchService } from '../../elasticsearch.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  private static readonly INDEX = 'rdw';
  private static readonly TYPE = 'kentekens';

  KentekenSources: KentekenSource[];
  private queryText = '';

  private lastKeypress = 0;

  constructor(private es: ElasticsearchService) {
    this.queryText = '';
  }

  ngOnInit() {

  }

  search($event) {
    if ($event.timeStamp - this.lastKeypress > 100) {
      this.queryText = $event.target.value;

      this.es.fullTextSearch(
        SearchComponent.INDEX,
        SearchComponent.TYPE, this.queryText).then(
          response => {
            this.KentekenSources = response.hits.hits;

          }, error => {
            console.error(error);
          }).then(() => {
            console.log('Search Completed!');
          });
    }

    this.lastKeypress = $event.timeStamp;
  }
}
