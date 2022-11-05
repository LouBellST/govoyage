const list = document.querySelector('.list')

const load = document.querySelector('.loader');


const loading = () => {
    load.classList.add('finLoad');
}

window.addEventListener('load', () =>{
    setTimeout(loading, 500)
})


allDest = [
    {
        ville: 'Paris',
        image: './image/paris.jpg',
        description: 'Visitez la plus belle ville du monde, au plus près des décors historiques.',
        price: 599.99,
        tendance: false
    },
    {
        ville: 'Venise',
        image: './image/venise.jpeg',
        description: 'Venise est célèbre pour ses canaux bordés de luxueux palais construits depuis le Moyen Âge.',
        price: 359.99,
        tendance: true
    },
    {
        ville: 'New York',
        image: './image/ny.jpg',
        description: "New York est la plus grande ville des Etats-Unis avec plus de 8 millions d'habitants.",
        price: 459.99,
        tendance: false
    },
    {
        ville: 'Tokyo',
        image: './image/tokyo.jpg',
        description: 'Venez découvrir les temples, les restaurants typiques et les paysages féeriques de Tokyo.',
        price: 599.99,
        tendance: true
    }
]

function listDest(){
    for(let dest of allDest){
        let a = document.createElement('div');
        let b = document.createElement('div');


        let destImg = document.createElement('img')
        destImg.src = dest.image;
        destImg.classList.add('destImg')
        a.append(destImg);

        let destCity = document.createElement("h2")
        destCity.innerText = `${dest.ville}`;
        destCity.classList.add('destCity')
        b.append(destCity);

        let destDesc = document.createElement("p")
        destDesc.innerText = `${dest.description}`;
        destDesc.classList.add('destDesc')
        b.append(destDesc);

        let destPrice = document.createElement('h3')
        destPrice.innerText = `${dest.price}€`;
        destPrice.classList.add('destPrice')
        b.append(destPrice);

        if(dest.tendance === true){
            let c = document.createElement('div')
            c.classList.add('fuego');
            b.append(c)
        }

        b.classList.add('destCol')
        a.append(b)
        a.classList.add('dest')
        list.append(a)
    }
}
if(list){listDest()}

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (currentScrollPos !== 0) {
    document.querySelector('nav').style.top = "-75px";
  } else {
    document.querySelector('nav').style.top = "0";
  }
}



const retour = document.querySelector('.retour')
window.addEventListener('scroll', () => {
    if(window.scrollY > 0){
        retour.classList.add('retourAnim')
    } else {
        retour.classList.remove('retourAnim')
    }
})



const boutonL = document.querySelector('.left');
const boutonR = document.querySelector('.right');
const carou = document.querySelector('.tdcCarou');
if (boutonR && boutonL){
    boutonR.addEventListener('click', function(){
        carou.scrollLeft += carou.clientWidth;
    })
    
    boutonL.addEventListener('click', function(){
        carou.scrollLeft -= carou.clientWidth;
    })
}
