var os = require("os");
console.log('type : ' + os.type());
// OS platform
console.log('platform : ' + os.platform());
console.log('total memory : ' + os.totalmem() + " bytes.");
console.log('free memory : ' + os.freemem() + " bytes.");

//os.networkInterfaces() Method

const os = require('os');
var net_int = os.networkInterfaces();
  
var no_of_network_interfaces = 0;
  
for (var key in net_int) {
  console.log(key);
  var net_infos=net_int[key];
     
  net_infos.forEach(element => {      
  no_of_network_interfaces++;
  console.log("\tinterface:");
  
    for (var attr in element){
      console.log("\t\t" + attr + 
          " : " + element[attr] );
    }
  });  
}
  
console.log("total number of network "
  + "interfaces is " + no_of_network_interfaces);