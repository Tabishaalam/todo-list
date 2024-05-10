let a=document.getElementById('in')
let b=document.getElementById('btn')
let c=document.getElementById('po')
a.addEventListener('click',()=>{
    a.value=''

}
)
btn.addEventListener('click',()=>{
    if(a.value==''){
        d.style.display='none'
    }

let d=document.createElement('li')
d.innerHTML=`${a.value} <i class="fa-solid fa-xmark"></i>`
a.value=''
d.style.color="white"
d.style.border="2px solid black"
d.style.listStyle='none'
d.style.margin='10px 15px  '
d.style.display='flex'
d.style.justifyContent='space-between'
d.style.borderRadius='5px'
d.style.width="90%"
c.appendChild(d)
d.addEventListener("click",()=>{
    d.remove()
})

})