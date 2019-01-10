var server = require('./server');
var ds = server.dataSources.postgresDB;
var lbTables = ['User', 'AccessToken', 'ACL', 'RoleMapping', 'Role'];
ds.automigrate(lbTables,console.log("migrating..s"), function(er) {
   if (er) throw er;
   console.log('Loopback tables [' - lbTables - '] created in ', ds.adapter.name);
   ds.disconnect();
 });

 //run node create-lb-tables.js