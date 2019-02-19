# ClientRdw

This project is not completed.

Generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## To start mock server
json-server --watch /Users/pietertheijssen/projects/clientRdw/mock/rdw_mock.json --port 3004
to call it http://localhost:3004/rdw

Download elasticsearch, kibana en logstash van de Elasticsearch webpage
https://www.elastic.co/downloads

Download de kenteken open dataset bij de rdw in csv formaat
https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen/m9d7-ebf2

Pak elasticsearch, kibana en logstash uit

Pas in de elasticsearch config directory de elasticsearch.yml file aan door inderin de twee regels toe te voegen:

http.cors.enabled: true
http.cors.allow-origin: "*"



Start elasticsearch en kibana.

Hernoem de csv file rdw.csv en zorg dat het path aangegeven in logstash_rdw.conf overeen komt
Verander de header in rdw.csv met de headers die je in rdwtest_small.csv aantreft.

Start logstash -f logstash_rdw.conf
Dit draait uren! Maar levert een mooie index


Indien er een probleem is met het ophalen van elasticsearch-browser library pak dan de elasticsearch-browser.zip uit in node_modules.

