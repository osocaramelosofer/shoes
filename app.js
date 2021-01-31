// movement animation 
const card      = document.querySelector('.card');
const container = document.querySelector('.container');

// animated items
const title       = document.querySelector('.title');
const sneaker     = document.querySelector('.sneaker img');
const purchase    = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes       = document.querySelector('.sizes');

// moving animation event
container.addEventListener('mousemove', (e) =>{
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerWidth / 2 - e.pageY) / 20;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`

});

// animated in
container.addEventListener('mouseenter', (e) =>{

    card.style.transition = 'none';

    //Popout
    
    sneaker.style.transform     = `translateZ(200px) rotateZ(-45deg)`
    title.style.transform       = 'translateZ(150px)'
    description.style.transform = `translateZ(125px)`
    sizes.style.transform       = `translateZ(100px)`
    purchase.style.transform    = 'translateZ(75px)'

});
// animated out
container.addEventListener('mouseleave', (e)=>{

    card.style.transition = 'all .5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`

    //Popback
    sneaker.style.transform     = `translateZ(0) rotateZ(0)`
    title.style.transform       = 'translateZ(0)'
    description.style.transform = `translateZ(0)`
    sizes.style.transform       = `translateZ(0)`
    purchase.style.transform    = 'translateZ(0)'

});