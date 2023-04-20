window.addEventListener('scroll', () =>{
    const headerPage = document.querySelector('.cabecalho');
    headerPage.classList.toggle('active-scroll', window.scrollY > 100)
})