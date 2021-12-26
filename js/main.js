import {users} from "./data.js" // import data from data.js

const userImg = document.querySelector(".user-img")
const nameSpan = document.querySelector(".user-name-span")
const jobSpan = document.querySelector(".user-job-span")
const descriptionP = document.querySelector(".user-description-p")

// dot-box
const dotBox = document.querySelector(".dot-box")

// buttons
const nextBtn = document.querySelector(".next-btn")
const prevBtn = document.querySelector(".prev-btn")

nextBtn.addEventListener("click", nextUser)
prevBtn.addEventListener("click", prevUser)

// initial index and counter
let counter;
let dataLength = users.length

// On load page load initial data
window.addEventListener("DOMContentLoaded", ()=>{
    counter = 0 // initial value
    assignValues(counter)

    users.forEach((element, index)=>{
        let spanElement = document.createElement("span")
        spanElement.classList.add("span-element")
        dotBox.appendChild(spanElement)        
    })

    const spanElement = document.querySelectorAll(".span-element")
    spanElement.forEach((element, index)=>{
        element.addEventListener("click", ()=>{
            counter = index
            assignValues(index)
        })
    })
})

function nextUser(){
    counter += 1;
    if(counter <= (dataLength - 1)){
        assignValues(counter) 
    }if(counter > (users.length - 1)){
        counter = 0
        assignValues(counter)
    }
}

function prevUser(){
    counter -= 1;
    if(counter < 0){
        counter = (dataLength - 1)
        assignValues(counter)
    }else{
        assignValues(counter)
    }

}

function assignValues(counter){
    userImg.src = users[counter].img
    nameSpan.innerHTML = users[counter].name
    jobSpan.innerHTML = users[counter].job
    descriptionP.innerHTML = users[counter].description 
}



