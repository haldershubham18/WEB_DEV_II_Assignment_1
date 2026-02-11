const form=document.querySelector("#form")
const eventTitle=document.getElementById("eventTitle")
const eventDate=document.getElementById("eventDate")
const category=document.getElementById("category")
const description=document.getElementById("description")
const eventCards=document.querySelector(".card")
form.addEventListener("submit",function(event){
    event.preventDefault()
    const title=eventTitle.value
    const date=eventDate.value
    const cat=category.value
    const desc=description.value

    const card=document.createElement("div")
    card.classList.add("card")
    card.innerHTML=`
    <h3>${title}</h3>
    <p>🗓️${date}</p>
    <button>${cat}</button>
    <p>${desc}</p>
    <div class="deleteCard">X</div>
    `
    card.querySelector(".deleteCard").addEventListener("click",function(){
        eventCards.removeChild(card)
    })
    eventCards.appendChild(card)
    form.reset()
})

document.addEventListener('keydown',(event)=>{
    document.querySelector('.key').innerText=event.key
})

document.querySelectorAll(".events button")[0].addEventListener("click",function(){
    eventCards.innerHTML=""
})

document.querySelectorAll(".events button")[1].addEventListener("click",function(){
    const sampleEvents=[
        {title:"Tech Conference 2026",date:"2026-03-15",cat:"Conference",desc:"Annual tech conference with industry leaders"},
        {title:"JavaScript Workshop",date:"2026-02-20",cat:"Workshop",desc:"Learn advanced JavaScript concepts"},
        {title:"Dev Meetup",date:"2026-02-25",cat:"Meetup",desc:"Network with local developers"}
    ]
    sampleEvents.forEach(event=>{
        const card=document.createElement("div")
        card.classList.add("card")
        card.innerHTML=`
        <h3>${event.title}</h3>
        <p>🗓️${event.date}</p>
        <button>${event.cat}</button>
        <p>${event.desc}</p>
        <div class="deleteCard">X</div>
        `
        card.querySelector(".deleteCard").addEventListener("click",function(){
            eventCards.removeChild(card)
        })
        eventCards.appendChild(card)
    })
})