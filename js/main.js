window.onload = function() {

    var productsItem = document.querySelectorAll('.productsItem');

    for (var i = 0; i < productsItem.length; i++ ){
        console.log(i);
        productsItem[i].onclick = function(){
            //this.classList.toggle('productsItem-unactive');
            var productsItemsChild = this.children;
              console.log(productsItemsChild);
              productsItemsChild[0].classList.toggle('productsItem__img-unactive');
              productsItemsChild[1].classList.toggle('productsItem__descr-unactive');
              productsItemsChild[2].classList.toggle('productsItem__price-unactive');
              productsItemsChild[3].classList.toggle('productsItem__btn-unactive');

              var resp = document.querySelector('.resp');
              resp.classList.toggle('resp-act');
        };
    }
};
