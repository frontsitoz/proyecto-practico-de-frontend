let user = document.querySelector('.navbar-email')
let desktopMenu = document.querySelector('.desktop-menu')
let menuMobile = document.querySelector('.menu-mobile')
let iconMenu = document.querySelector('.menu') 
let menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
let shoppingCartContainer = document.querySelector('#shoppingCartContainer')
let cardsContainer = document.querySelector('.cards-container')
let productDetailContainer = document.querySelector('#productDetail')
let productDetailCloseIcon = document.querySelector('.product-detail-close')

user.addEventListener('click', toggleDesktopMenu) //Este toggleDesktopMenu solo es el nombre de una función

iconMenu.addEventListener('click', toggleMenuMobile)

menuCarritoIcon.addEventListener('click', toggleCarritoAside)

productDetailCloseIcon.addEventListener('click', closeProductDetailAside)

function toggleDesktopMenu(){
    
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive')
    
    if(!isAsideClosed ){
        shoppingCartContainer.classList.add('inactive')
        
    }
    //El método toggle permite cada vez que se ejecuta, cambia de estado la visibilidad del elemento HTML, es decir si está visible pasa a oculto y si se encuentra oculto pasa a visible. 
 

desktopMenu.classList.toggle('inactive')

}

function toggleMenuMobile(){
const isAsideClosed = shoppingCartContainer.classList.contains('inactive')

if(!isAsideClosed ){
    shoppingCartContainer.classList.add('inactive')

}
closeProductDetailAside

menuMobile.classList.toggle('inactive')
}
//La propiedad classList , permite acceder a la clase del elemento , y el método toggle, hará el cambio en dicha clase

function toggleCarritoAside(){

const isDesktopMenuClosed = menuMobile.classList.contains('active')

    const isMenuMobileClosed = menuMobile.classList.contains('inactive')


if(!isMenuMobileClosed){
    menuMobile.classList.add('inactive')
    
}

const isProductDetailClosed = productDetailContainer.classList.contains('inactive')

if (!isProductDetailClosed){
productDetailContainer.classList.add('inactive')
}


shoppingCartContainer.classList.toggle('inactive')


}

function openProductDetailAside(){
shoppingCartContainer.classList.add('inactive')

    productDetailContainer.classList.remove('inactive')
}
 
function closeProductDetailAside(){

      productDetailContainer.classList.add('inactive')
 
}


const productList = []
productList.push({
    name: 'Bike',
    price: 60,
    image:'https://netzun.s3.us-west-1.amazonaws.com/mailing/plus/2022/imagenes-de-proyecto-alvaro/bicicleta3.jpg'

})

productList.push({
    name: 'Scooter',
    price: 40,
    image:'https://netzun.s3.us-west-1.amazonaws.com/mailing/plus/2022/imagenes-de-proyecto-alvaro/scooter.jfif'
})

productList.push({
    name:'Skateboard',
    price: 24,
    image:'https://netzun.s3.us-west-1.amazonaws.com/mailing/plus/2022/imagenes-de-proyecto-alvaro/patineta.jpg'
})

productList.push({
    name: 'Baby tricycle',
    price: 43,
    image:'https://netzun.s3.us-west-1.amazonaws.com/mailing/plus/2022/imagenes-de-proyecto-alvaro/ebaby-triciclo.jpg'
})

productList.push({
    name: 'Boxing gloves',
    price: 24,
    image:'https://netzun.s3.us-west-1.amazonaws.com/mailing/plus/2022/imagenes-de-proyecto-alvaro/guantes-de-box.png'
})

productList.push({
    name: 'Baseball gloves',
    price: 23,
    image:'https://netzun.s3.us-west-1.amazonaws.com/mailing/plus/2022/imagenes-de-proyecto-alvaro/guantes-de-beisbol.jpg'
})

productList.push({
    name:'Baseball bat',
    price: 16,
    image:'https://netzun.s3.us-west-1.amazonaws.com/mailing/plus/2022/imagenes-de-proyecto-alvaro/bate-de-beisbol2.jpg'
})

productList.push({
    name:'Metal Baseball bat',
    price: 24,
    image:'https://netzun.s3.us-west-1.amazonaws.com/mailing/plus/2022/imagenes-de-proyecto-alvaro/bate-de-beisbol-mizuno-hot-metal.jpg'
})

productList.push({
    name:'Soccer ball',
    price: 20,
    image:'https://netzun.s3.us-west-1.amazonaws.com/mailing/plus/2022/imagenes-de-proyecto-alvaro/pelota-de-futbol.jpg'
})

productList.push({
    name: 'Volleyball ball',
    price: 20,
    image:'https://netzun.s3.us-west-1.amazonaws.com/mailing/plus/2022/imagenes-de-proyecto-alvaro/pelota-de-voley.png'
})

productList.push({
    name:'Ping pong racket',
    price: 10,
    image:'https://netzun.s3.us-west-1.amazonaws.com/mailing/plus/2022/imagenes-de-proyecto-alvaro/raqueta-de-ping-pong.jpg'
})

productList.push({
    name: 'Tennis racket',
    price: 22,
    image:'https://netzun.s3.us-west-1.amazonaws.com/mailing/plus/2022/imagenes-de-proyecto-alvaro/raqueta-de-tennis.png'
})

productList.push({
    name:'Surf table',
    price: 24,
    image:'https://netzun.s3.us-west-1.amazonaws.com/mailing/plus/2022/imagenes-de-proyecto-alvaro/tabla+de+surf.png'
})

productList.push({
    name: 'American Football ball',
    price: 33,
    image:'https://netzun.s3.us-west-1.amazonaws.com/mailing/plus/2022/imagenes-de-proyecto-alvaro/balon-de-futbol-americano.jpg'
})

productList.push({
    name:'Basketball ball',
    price: 22,
    image:'https://netzun.s3.us-west-1.amazonaws.com/mailing/plus/2022/imagenes-de-proyecto-alvaro/balon-de-baloncesto.png'
})

productList.push({
    name: 'Swimming goggles',
    price: 10,
    image:'https://netzun.s3.us-west-1.amazonaws.com/mailing/plus/2022/imagenes-de-proyecto-alvaro/lentes-de-natacion.jpg'
})

productList.push({
    name:'Swimming cap',
    price: 16,
    image:'https://netzun.s3.us-west-1.amazonaws.com/mailing/plus/2022/imagenes-de-proyecto-alvaro/gorro-de-natacion-phelps.jpg'
})

productList.push({
    name:'Boxing head',
    price: 16,
    image:'https://netzun.s3.us-west-1.amazonaws.com/mailing/plus/2022/imagenes-de-proyecto-alvaro/casco.jpg'
})

productList.push({
    name:'Tennis balls',
    price: 18,
    image:'https://netzun.s3.us-west-1.amazonaws.com/mailing/plus/2022/imagenes-de-proyecto-alvaro/PELOTAS-TENIS-WILSON-ULTRA-ALLCOURT-768x768.jpg'
})

productList.push({
    name:'Bicycle helmet',
    price: 30,
    image:'https://netzun.s3.us-west-1.amazonaws.com/mailing/plus/2022/imagenes-de-proyecto-alvaro/casco+para+bicicleta.jfif'
})

//Empezamos a hacer la maquetación de cada elemento para que pueda verse en la página
function renderProducts (arr){
    for(product of arr){
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
    
        //product = {name, price, image} -> product.image
    
        const productImage = document.createElement('img')
        productImage.setAttribute('src', product.image)
    productImage.addEventListener('click',openProductDetailAside)

        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
    
        const productInfoDiv = document.createElement('div')
        
    const productPrice = document.createElement('p')
    productPrice.innerText = '$'+ product.price
    
        const productName = document.createElement('p')
        productName.innerText = product.name
    
        productInfoDiv.appendChild(productPrice)
    productInfoDiv.appendChild(productName)
    
    const productInfoFigure = document.createElement('figure')
    const productImgCart = document.createElement('img')
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
    
    
    productInfoFigure.appendChild(productImgCart)
    productInfo.appendChild(productInfoDiv)
    productInfo.appendChild(productInfoFigure)
    
    productCard.appendChild(productImage)
    productCard.appendChild(productInfo)
    
    cardsContainer.appendChild(productCard)
    }
}

renderProducts(productList)