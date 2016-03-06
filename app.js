// APPEND PERCENT OFF SPAN IF PERCENT OFF IS > 10%
function percentOff(){
    $(".ProductList li").each(function(){
      var prices = $(this).find("em.p-price").text();
      var retail = prices.split(" ")[0].replace("$","");
      var sale = prices.split(" ")[1].replace("$","");
        var percentRaw = (retail - sale) / retail * 100;
        var percentOff = Math.round(percentRaw);

        if( percentOff >= 10 ){
          $(this).append('<span class="calc-percent-off">' + percentOff + '% OFF</span>')
        }
    })
}
percentOff();
