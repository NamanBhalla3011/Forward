var baseUrl = "https://api.coinranking.com/v2/coins?limit=10";
var proxyUrl = "https://cors-anywhere.herokuapp.com/";
var apiKey = "coinranking80b16bb32e2b55408e969912449615aafa2399a2f5081b91";
var a=1;
fetch(`${proxyUrl}${baseUrl}`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "x-access-token": `${apiKey}`,
    "Access-Control-Allow-Origin": "*",
  },
})
  .then((response) => {
    if (response.ok) {
      response.json().then((json) => {
        var a="24hVolume";
        console.log(json.data.coins);
        let coinsData = json.data.coins;
        
        if (coinsData.length > 0) {
          var cryptoCoins = "";
        }
        
        //For Loop
        coinsData.forEach((coin) => {
          cryptoCoins += "<tr>";

          // cryptoCoins += `<td> ${coin.uuid}</td>`;
          icon= coin.iconUrl;
          // var changeColor = parseInt(coin.change);
          // if(changeColor.includes("-")){
          //   var colors='#008000';
          //   console.log(changeColor);
          // }
          cryptoCoins += `<td style='display:flex; align-items:center;'> <img src=${icon} style='padding-right:10px'>${coin.name}</td>`;
          
          cryptoCoins += `<td> ${coin.symbol}</td>`;
          cryptoCoins += `<td> ${coin.price}</td>`;
          cryptoCoins += `<td> ${coin.change}</td>`;
          // cryptoCoins += `<td style='color:${colors}'> ${coin.marketCap}</td>`;
          cryptoCoins += `<td> ${coin.marketCap}</td>`;

          // cryptoCoins += `<td> ${coin.color}</td>`;
          // cryptoCoins += `<td> ${coinsStats.24hVolume}</td>`;
          // cryptoCoins += `<td> $${Math.round(coin.price)} Billions</td>`;
          // cryptoCoins += `<td> ${coin.symbol}</td>`;
          "</tr>"
        });
        document.getElementById("data").innerHTML =  cryptoCoins
        // document.getElementsByTagName("tr").classList.add("Hello");
        // document.getElementById("data").innerHTML.style =  cryptoCoins

      });
    }
  })
  .catch((error) => {
    console.log(error);
  });
