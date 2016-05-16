

angular.module('TallTails.services', [
  'ngResource'
])







  .service('Category', function($resource, backend) {
    return $resource(backend + '/taxonomy/term/:tid', {
      '_format': 'json'
    }, {
      'query': {
        method: 'GET',
        url: backend + '/api/categories',
        isArray: true
      }
    });
  })
  .service('Article', function($resource, backend) {
    return $resource(backend + '/node/:nid', {
      '_format': 'json'
    }, {
      'query': {
        method: 'GET',
        url: backend + '/api/categories/:tid',
        isArray: true
      }
    });
  })
  .service('File', function($resource, backend) {
    return $resource(backend + '/entity/file/:fid', {
      '_format': 'hal_json'
    });
  })
  
  

  
   .service('Product', function($resource, backend) {
    return $resource(backend + '/node/:nid', {
      '_format': 'json'
    }, {
      'query': {
        method: 'GET',
        url: backend + '/api/products/:nid',
        isArray: true
      }
    });
  })
  
  
     
       // favorites
 .factory('User', function() {
    var o = {
      favorites: []
    }

    o.addProductToFavorites = function(product) {
      // make sure there's a product to add
      if (!product) return false;

      // add to favorites array
      o.favorites.unshift(product);
    }

    o.removeProductFromFavorites = function(song, index) {
    // make sure there's a song to add
    if (!song) return false;

    // add to favorites array
    o.favorites.splice(index, 1);
  }    
    return o;
  });


  
  
  
