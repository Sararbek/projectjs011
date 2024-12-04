//Popup js

const popupModal = document.querySelector('#popupModal')

function openPopUp(){
    popupModal.style.display = 'flex'
    document.body.overflow = 'hidden'
}
function closePopu(){
    popupModal.style.display = 'none'
    document.body.overflow = 'auto'
}

//sidebar js

const sidebar = document.querySelector('.sidebar')

function openSidebar(){
    sidebar.style.left = '0'
    document.body.overflow = 'hidden'
}

function closeSidebar(){
    sidebar.style.left = '-500px'
    document.body.overflow = 'auto'
}