function percentOff(){
    $(".ProductList li").each(function(){
      var prices = $(this).find("em.p-price").text().trim();
      var retail = prices.split(" ")[0].replace("$","");
      var sale = prices.split(" ")[1].replace("$","");
        var percentRaw = (retail - sale) / retail * 100;
        var percentOff = Math.round(percentRaw);

        if( percentOff <= 10 ){
          $(this).find('.RetailPriceValue').addClass("hide");
        }
    })
}
percentOff();
