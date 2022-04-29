const counter = document.getElementById('count')
const incrementButton = document.getElementById('increment-button')

incrementButton.addEventListener('click',()=>{
    let c = counter.innerText
    c = parseInt(c)
    c++;
    console.log(c)
    counter.innerText=c
})


