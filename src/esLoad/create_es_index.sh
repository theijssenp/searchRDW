echo Verwijderen rdw_test
curl -XDELETE 'localhost:9200/rdw' 

echo Plaatsen nieuwe index rdw_test
curl -XPUT 'localhost:9200/rdw' -H 'Content-Type: application/json' -d '@/Users/pietertheijssen/projects/clientRdw/esLoad/mapping_dev.json'