const cheerio = require('cheerio')
const axios = require('axios')
const admin = require('firebase-admin');
const functions = require('firebase-functions')
admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

//Scrapper function
async function getBitCoinPrice() {
    try {
      const baseUrl = "https://coinmarketcap.com/currencies/bitcoin/";
      const { data } = await axios({
        method: "GET",
        url: baseUrl,
      });
  
      const $ = cheerio.load(data);
      const eleSelector = ".priceValue  > span";
      const price = $(eleSelector).text();
      return price;
    } catch (error) {
      console.log(error);
    }
}
  
  
  
var options={ memory: '2GB', timeoutSeconds: 300, }


const formatPrice = (Price) => {
    var price = Price.replace(",", "") //Clean fetched data
    return price.substring(1, Price.length)
}

//Cron Job running every 15 minutes 
exports.priceTrackerCron = functions.runWith(options).pubsub.schedule('every 15 minutes').onRun((context) => {
    return getBitCoinPrice().then(res => {

        var currentPrice = formatPrice(res)
        console.log(Number(currentPrice))
        console.log(new Date().toLocaleTimeString())
        db.collection("bitcoin-prices").add({ price: Number(currentPrice), time: Date.now() });

     
    })

});