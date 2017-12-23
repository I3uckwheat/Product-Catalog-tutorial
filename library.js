(function(window){
  function myLibrary(){

    const catalog = createRandomCatalog(100);

    return {
      searchProductsById,
      searchProductsByPrice,
      searchProductsByType,
      searchAllProducts
    }


    function createRandomProduct(){
      const typeArray = ["Electronics", "Book", "clothing", "food"];
      const price = (Math.random()*500).toFixed(2);
      const type = typeArray[Math.floor(Math.random()*4)];

      return {
        price,
        type
      }
    }

    function createRandomCatalog(num){
      const catalog = [];
      for(let i = 0; i < num; i++){
        const obj = createRandomProduct();
        catalog.push({
          id: i,
          price: obj.price,
          type: obj.type
        });
      }
      return catalog;
    }

    function searchAllProducts(){
      const promise = new Promise((resolve, reject) => {

        setTimeout(() => {
          resolve(catalog);
        }, 1000)
      });
    }
    return promise;
  }

  if(typeof(window.api) === 'undefined'){
  window.api = myLibrary();
  }

})(window);
