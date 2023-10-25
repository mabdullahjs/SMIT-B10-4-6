// function greetUser(){
//     console.log('hello abdullah');
// }

// const btn = document.querySelector('#btn');

// btn.addEventListener('click' , greetUser , false);






const ul = document.querySelector('.ul');
const item = document.querySelector('.item6');
const image2 = document.querySelector('.li2');

ul.addEventListener('click', (event) => {
    // console.log();
    if(event.target.tagName === 'IMG'){
        event.target.parentNode.remove();
        console.log('ul clicked');
    }else{
        console.log('image nahi ha');
    }
}, true)

item.addEventListener('click' , (e)=>{
    e.preventDefault()
    console.log('google clicked');

})


image2.addEventListener('click', (e) => {
    // e.stopPropagation()
    console.log('image clicked');
}, true)












