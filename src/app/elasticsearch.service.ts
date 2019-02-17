import { Injectable } from '@angular/core';
import { Client } from 'elasticsearch-browser';

@Injectable({
  providedIn: 'root'
})
export class ElasticsearchService {

  private client: Client;

  private queryalldocs = {
    'query': {
      'match_all': {}
    }
  };

  constructor() {
    if (!this.client) {
      this.connect();
    }
  }

  private connect() {
    this.client = new Client({
      host: 'http://localhost:9200',
      log: 'trace'
    });
  }

  isAvailable(): any {
    return this.client.ping({
      requestTimeout: Infinity,
      body: 'Hello Pieter!'
    });
  }

  addToIndex(value): any {
    return this.client.create(value);
  }

  getAllDocuments(_index, _type): any {
    return this.client.search({
      index: _index,
      type: _type,
      body: this.queryalldocs,
      filterPath: ['hits.hits._source']
    });
  }

  getAllDocumentsWithScroll(_index, _type, _size): any {
    return this.client.search({
      index: _index,
      type: _type,
      scroll: '1m',
      filterPath: ['hits.hits._source', 'hits.total', '_scroll_id'],
      body: {
        'size': _size,
        'query': {
          'match_all': {}
        },
        'sort': [
          { '_uid': { 'order': 'asc' } }
        ]
      }
    });
  }

  getNextPage(scroll_id): any {
    return this.client.scroll({
      scrollId: scroll_id,
      scroll: '1m',
      filterPath: ['hits.hits._source', 'hits.total', '_scroll_id']
    });
  }

  fullTextSearch(_index, _type, _queryText): any {
    var allStrings = _queryText.split(' ');
    var firstString: string;
    firstString = allStrings[0];

    console.log('strpart ' + firstString);
    return this.client.search({
      index: _index,
      type: _type,
      filterPath: ['hits.hits._source', 'hits.total', '_scroll_id'],
      body: {
        'query': {
          "bool": {
            "should": [
              {
                "match": {
                  "message": {
                    "query": _queryText
                  }
                }
              },
              {
                "bool": {
                  "should": [
                    { "wildcard": { "Kenteken": '*' + firstString + '*' } }
                  ], "boost": 40
                }
              }
            ]
          }
        }
      },
      '_source': ["Aanhangwagenautonoomgeremd",
        "RetrofitRoetfilter",
        "Voertuigsoort",
        "AantalCilinders",
        "@Version",
        "AantalStaanplaatsen",
        "AantalWielen",
        "EuropeseVoertuigcategorie",
        "Wielbasis",
        "OpenstaandeTerugroepactieIndicator",
        "BrutoBpm",
        "Kenteken",
        "Variant",
        "ApiGekentekende_Voertuigen_Brandstof",
        "Breedte",
        "EersteKleur",
        "Vermogen(Brom/Snorfiets)",
        "VervaldatumApk",
        "MaximumMassaTrekkenOngeremd",
        "EuropeseVoertuigcategorieToevoeging",
        "ApiGekentekende_Voertuigen_Carrosserie",
        "AantalDeuren",
        "ToegestaneMaximumMassaVoertuig",
        "Merk",
        "OpleggerGeremd",
        "VervaldatumTachograaf",
        "MaximaleConstructiesnelheid(Brom/Snorfiets)",
        "Path",
        "AantalRolstoelplaatsen",
        "TaxiIndicator",
        "MaximumTrekkenMassaGeremd",
        "Zuinigheidslabel",
        "TechnischeMax.MassaVoertuig",
        "TypeGasinstallatie",
        "Typegoedkeuringsnummer",
        "VolgnummerWijzigingEuTypegoedkeuring",
        "MaximumMassaSamenstelling",
        "Cilinderinhoud",
        "WachtOpKeuren",
        "Laadvermogen",
        "AanhangwagenMiddenasGeremd",
        "WamVerzekerd",
        "Message",
        "Inrichting",
        "PlaatsChassisnummer",
        "Type",
        "ExportIndicator",
        "MassaRijklaar",
        "AfstandHartKoppelingTotAchterzijdeVoertuig",
        "DatumTenaamstelling",
        "Host",
        "ApiGekentekende_Voertuigen_Voertuigklasse",
        "VermogenMassarijklaar",
        "Lengte",
        "EuropeseUitvoeringcategorieToevoeging",
        "TweedeKleur",
        "AantalZitplaatsen",
        "MassaLedigVoertuig",
        "AfwijkendeMaximumSnelheid",
        "MaximumOndersteunendeSnelheid",
        "DatumEersteAfgifteNederland",
        "Handelsbenaming",
        "ApiGekentekende_Voertuigen_Carrosserie_Specifiek",
        "DatumEersteToelating",
        "Catalogusprijs",
        "ApiGekentekende_Voertuigen_Assen",
        "@Timestamp",
        "Uitvoering",
        "AfstandVoorzijdeVoertuigTotHartKoppeling"]
    });
  }
}
