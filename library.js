(function(window){
  function myLibrary(){

    return {
      searchProductsById,
      searchProductsByPrice,
      searchProductsByType,
      searchAllProducts
    }


    function createRandomObject(){
      const typeArray = ["Electronics", "Book", "clothing", "food"];
      const price = (Math.random()*500).toFixed(2);
      const type = typeArray[Math.floor(Math.random()*4)];

      return {
        price,
        type
      }
    }

    function createRandomCatalognum(){
      const catalog = [];
      for(let i = 0; i < num; i++){
        const obj = createRandomObject();
        catalog.push({
          id: i,
          price: obj.price,
          type: obj.type
        });
      }
      return catalog;
    }

  }

  if(typeof(window.api) === 'undefined'){
  window.api = myLibrary();
  }

})(window);
