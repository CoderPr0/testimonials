// All variables
const img = document.querySelector('.tanya-img')
const tanya = document.querySelectorAll('.tanya')
const john = document.querySelectorAll('.john')

const buttonContainer = document.querySelector('.next-button')
const buttons = document.querySelectorAll('.next-button img')

// functions
hidder = () => {
    if (img.classList.contains('hide') == true) {
        tanya.forEach((tanyaInfo)=> {
            tanyaInfo.classList.remove('hide')
        })
        john.forEach((johnInfo)=> {
            johnInfo.classList.add('hide')
        })
    }else{
        tanya.forEach((tanyaInfo)=> {
            tanyaInfo.classList.add('hide')
        })
        john.forEach((johnInfo)=> {
            johnInfo.classList.remove('hide')
        })
    }
}

// events
buttonContainer.addEventListener('keydown', ()=> {
    if(event.keyCode == 37 || event.keyCode == 39){
        hidder()
    }
})

buttons.forEach((button)=> {
    button.addEventListener('click', () => {
        hidder()
    })
})

// hide john stuff for initial
john.forEach((johnInfo) => {
    johnInfo.classList.add('hide')
})