document.addEventListener('DOMContentLoaded', () => {
    const asteriskButton = document.querySelector('.asterisk-button');
    const productInfoFull = document.querySelector('.product-info-card-full');
    const cartButton = document.querySelector('.cart-button');

    asteriskButton.addEventListener('mouseenter', () => {
        productInfoFull.classList.add('show');
        productInfoFull.style.pointerEvents = 'auto';
    });

    asteriskButton.addEventListener('mouseleave', () => {
        setTimeout(() => {
            if (!productInfoFull.matches(':hover')) {
                productInfoFull.classList.remove('show');
                cartButton.classList.remove('show');
                productInfoFull.style.pointerEvents = 'none';
            }
        }, 100);
    });

    productInfoFull.addEventListener('mouseenter', () => {
        productInfoFull.classList.add('hovered');
        cartButton.classList.add('show');
    });

    productInfoFull.addEventListener('mouseleave', () => {
        productInfoFull.classList.remove('hovered');
        cartButton.classList.remove('show');

        setTimeout(() => {
            if (!asteriskButton.matches(':hover')) {
                productInfoFull.classList.remove('show');
                productInfoFull.style.pointerEvents = 'none';
            }
        }, 100);
    });

    const heartIcon = document.querySelector('.heart-icon');

    heartIcon.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        heartIcon.classList.toggle('liked');
    });

    cartButton.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        const textEl = cartButton.querySelector('.cart-text');

        if (!cartButton.classList.contains('added')) {
        cartButton.classList.add('text-changing');

        setTimeout(() => {
            cartButton.classList.add('added');
            textEl.textContent = 'Added to Cart';
            cartButton.classList.remove('text-changing');
        }, 150);

        } else {
        window.open('https://www.ikea.com/us/en/shoppingcart/', '_blank');
        }
    });
});