// Sahifadagi barcha mahsulot kartochkalarini tanlab olamiz
const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
  const buyNowBtn = card.querySelector('.buy-now-btn');
  const qtyControls = card.querySelector('.quantity-controls');
  const btnMinus = card.querySelector('.bir');
  const btnPlus = card.querySelector('.ikki');
  const qtyNum = card.querySelector('.raqam');
  const priceSpan = card.querySelector('.narx');
  const btnRemove = card.querySelector('.yoq');

  // HTML ichidagi boshlang'ich narxni aniqlaymiz (Masalan: "$20.00" -> 20.00)
  const basePrice = parseFloat(priceSpan.textContent.replace('$', ''));

  // 1. Buy Now bosilganda counter paydo bo'lishi
  buyNowBtn.addEventListener('click', function (e) {
    e.preventDefault();
    card.classList.add('active-counter');
    qtyNum.textContent = 1;
    priceSpan.textContent = `$${basePrice.toFixed(2)}`;
  });

  // 2. Plyus (+) tugmasi bosilganda ko'paytirish (Maksimum 10 ta)
  btnPlus.addEventListener('click', function () {
    let currentQty = Number(qtyNum.textContent);
    if (currentQty < 10) {
      currentQty++;
      qtyNum.textContent = currentQty;
      // Narxni songa ko'paytirib, ekranga chiqaramiz
      priceSpan.textContent = `$${(currentQty * basePrice).toFixed(2)}`;
    }
  });

  // 3. Minus (-) tugmasi bosilganda kamaytirish (Minimum 1 ta)
  btnMinus.addEventListener('click', function () {
    let currentQty = Number(qtyNum.textContent);
    if (currentQty > 1) {
      currentQty--;
      qtyNum.textContent = currentQty;
      // Narxni yangilash
      priceSpan.textContent = `$${(currentQty * basePrice).toFixed(2)}`;
    }
  });

  // 4. Trash (Yo'q qilish) tugmasi bosilganda hammasini ortga qaytarish
  btnRemove.addEventListener('click', function () {
    card.classList.remove('active-counter');
    qtyNum.textContent = null;
    priceSpan.textContent = `$${basePrice.toFixed(2)}`;
  });
});