const cart = document.querySelector('.cart');
const cartProducts = document.querySelector('.cart__products');
cart.style.display = "none";

document.addEventListener('click', key => {
  const product = key.target.closest('.product');
  const quantityValue = product.querySelector('.product__quantity-value');
  const src = product.querySelector('.product__image').getAttribute('src');

  let result;

  if (!product) {
    return false;
  }

  if (key.target.classList.contains('product__quantity-control_dec')) {
    (quantityValue.textContent > 1) && (quantityValue.textContent -= 1);
  }
  else if (key.target.classList.contains('product__quantity-control_inc')) {
    quantityValue.textContent -= -1;
  }
  else if (key.target.classList.contains('product__add')) {
    result = addPurchase(product.dataset.id, src, quantityValue.textContent)
  };
});

function createPurchase(id, src, quantity) {
  let product = document.createElement('div');
  product.classList.add('cart__product');
  product.setAttribute('data-id', id);

  product.innerHTML = `<img class="cart__product-image" src="${src}">
                       <div class="cart__product-count">${quantity}</div>`;

  return product;
}

function newPurchase(id, src, quantity) {
  let product = createPurchase(id, src, quantity);

  product.addEventListener('click', key => {
    cartProducts.removeChild(key.target.parentElement);
    !cartProducts.children.length && (cart.style.display = "none");
  });

  cartProducts.appendChild(product);
  cart.style.display = "block";
  
  return product.getBoundingClientRect();
}

function addPurchase(id, src, quantity) {
  const productInCart = document.querySelector(`.cart__product[data-id='${id}']`);
  let result;
    
  if (productInCart) {
    productInCart.querySelector('.cart__product-count').textContent -= -quantity;
    result = productInCart.getBoundingClientRect();
  }
  else {
    result = newPurchase(id, src, quantity);
  }
  
  return result;
}