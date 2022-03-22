const humbureger = document.querySelector('.humburger'),
topNavList = document.querySelector('.nav-list-top'),
anchors = document.querySelectorAll('a[href*="#"]')
let addActive = () =>{
    humbureger.classList.toggle('humburger_active')
    topNavList.classList.toggle('nav-list-top_active')
}
humbureger.addEventListener('click', addActive)
for (let anchor of anchors){
    anchor.addEventListener('click', (e) => {
        e.preventDefault()
        blockId = anchor.getAttribute('href').substr(1)
        document.getElementById(blockId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        humbureger.classList.remove('humburger_active')
        topNavList.classList.remove('nav-list-top_active')
    })
}