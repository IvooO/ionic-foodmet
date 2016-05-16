var controllers = angular.module('TallTails.controllers', ['ionic', 'TallTails.services'])

/**
 * /app
 */
controllers.controller('WelcomeCtrl', function($scope) {
  // Set a variable that's accessible in the template
  $scope.logo = 'img/Borough-Market.jpg';
});

/**
 * /categories
 */
controllers.controller('CategoriesCtrl', function($scope, Category) {

  $scope.categories = Category.query();

});

/**
 * /categories/{tid}
 */
controllers.controller('CategoryCtrl', function($scope, $stateParams, Category, Article, File) {

  $scope.category = Category.get({tid: $stateParams.tid });
  $scope.articles = Article.query({tid: $stateParams.tid}, function(article) {
    // Once the article is loaded, retrieve the image.
    $scope.image = File.query({fid: article.field_image[0].target_id});
  });
});

  


/**
 * /articles/{nid}
 */
controllers.controller('ArticleCtrl', function($scope, $stateParams, Article, File) {
  // We have to fetch both the article and the image.
  $scope.article = Article.get({nid: $stateParams.nid}, function(article) {
    // Once the article is loaded, retrieve the image.
    $scope.image = File.get({fid: article.field_image[0].target_id});
  });
});


 //Controller for the products page

controllers.controller('ProductsCtrl', function($scope, Product, $stateParams, File) {

  $scope.products = Product.query ();

  
 
  });
  
  controllers.controller('ProductCtrl', function($scope, $stateParams, Product, File) {
  // We have to fetch both the article and the image.
  $scope.product = Product.get({nid: $stateParams.nid}, function(product) {
    // Once the article is loaded, retrieve the image.
    $scope.image = File.get({fid: product.field_image[0].target_id});
  });
});




  

 controllers.controller('DiscoverCtrl', function($scope, $timeout, User) {
  
  //

    $scope.products = [
      {
        "name": "Groeve boontjes",
        "tagline": "A new way to hire freelancers from LinkedIn",
        "discussion_url": "https://www.producthunt.com/tech/linkedin-profinder-2",
        "thumbnail": "https://images.unsplash.com/uploads/141143339879512fe9b0d/f72e2c85?crop=entropy&fit=crop&fm=jpg&h=650&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1375",
        "product_url": "https://www.producthunt.com/r/0109266759e0f0/40894?app_id=1948"
      },
      {
        "name": "Boul de berlin",
        "tagline": "Kardashian content blocker for iOS",
        "discussion_url": "https://www.producthunt.com/tech/k-blocker",
        "thumbnail": "https://images.unsplash.com/photo-1422919869950-5fdedb27cde8?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=13c45b40ee9277ef5ea16ada5962fd63",
        "product_url": "https://www.producthunt.com/r/1239ed9df03056/40854?app_id=1948"
      },
      {
        "name": "Pain Francais",
        "tagline": "Share photos with friends, only visible when you're together",
        "discussion_url": "https://www.producthunt.com/tech/hangoverapp",
        "thumbnail": "http://www.nogarlicnoonions.com/wp-content/uploads/2012/09/Borough_Market_Food_London_NoGarlicNoOinions69.jpg",
        "product_url": "https://www.producthunt.com/r/8a94554894f2bb/40912?app_id=1948"
      },
      {
        "name": "Chorizo Sandwich",
        "tagline": "Teespring for event decorations and gifts",
        "discussion_url": "https://www.producthunt.com/tech/43-layers",
        "thumbnail": "https://c2.staticflickr.com/4/3538/3861043068_fb304ef26d_o.jpg",
        "product_url": "https://www.producthunt.com/r/b704ae84e992e1/41413?app_id=1948"
      },
      
           {
        "name": "Meat pie",
        "tagline": "Teespring for event decorations and gifts",
        "discussion_url": "https://www.producthunt.com/tech/43-layers",
        "thumbnail": "https://c2.staticflickr.com/4/3236/2659890956_199960e502_b.jpg",
        "product_url": "https://www.producthunt.com/r/b704ae84e992e1/41413?app_id=1948"
      }
    ];

    // initialize current product
    $scope.currentProduct = angular.copy($scope.products[0]);

    // fired when we favorite or skip a product
    $scope.sendFeedback = function(bool) {
      // first, add to favorites if they favorited
      if (bool) User.addProductToFavorites($scope.currentProduct);

      // set the variable for the correct animation sequence
      $scope.currentProduct.rated = bool;
      $scope.currentProduct.hide = true;

      // $timeout to allow animation to complete before changing to the next product
      $timeout(function() {
        // get the index of a random product
        var randomProductIndex = Math.round(Math.random() * ($scope.products.length - 1));

        // update current product in scope
        $scope.currentProduct = angular.copy($scope.products[randomProductIndex]);

      }, 250);
    }
  })
  
    /*
  Controller for the favorites page
  */
  .controller('FavoritesCtrl', function($scope, User) {
    // get the list of our favorites from our user service
    $scope.favorites = User.favorites;

    $scope.removeProduct = function(product, index) {
      User.removeProductFromFavorites(product, index);
    }
  })




  
