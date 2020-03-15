const a         = require('request') ;  
const chalkAnimation = require('chalk-animation');
const chalk = require('chalk');


console.log(chalk
  `{bold.cyan 
                                                                                   
 ######   #######  ##     ## #### ########             ##    #######  
##    ## ##     ## ##     ##  ##  ##     ##          ####   ##     ## 
##       ##     ## ##     ##  ##  ##     ##            ##   ##     ## 
##       ##     ## ##     ##  ##  ##     ## #######    ##    ######## 
##       ##     ##  ##   ##   ##  ##     ##            ##          ## 
##    ## ##     ##   ## ##    ##  ##     ##            ##   ##     ## 
 ######   #######     ###    #### ########           ######  #######

                                    https://api.kawalcorona.com

                        }  {bold.yellow     Aldi Linalda }                                 
      `);

chalkAnimation.rainbow('processing.. %s \n');
setTimeout(() => {
    // Stop the 'Lorem ipsum' animation, then write on a new line.
}, 2000);



a('https://api.kawalcorona.com/indonesia', function(error, response, body){
        

        var jsonData = JSON.parse(body);
            var counter = jsonData[0];
            var counter1 = jsonData[1];
            var t= (' Terkonfirmasi   : '+counter.positif+(' Kasus')+
                     '\n Berhasil Pulih  : '+counter.sembuh+(' Kasus')+
                     '\n Meninggal       : '+counter.meninggal+(' Kasus'+
                     '\n Terakhir Update : '+counter1.lastupdate));

            chalkAnimation.neon(t);
            setTimeout(() => {
   
            }, 1000);
       // spinner.stop(jsonData)

        
  });







