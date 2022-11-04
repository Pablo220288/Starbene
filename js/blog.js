const blog = [
    {
        id:1,
        img:'../../assets/blog_12-8-22.jpg', 
        date:'Agosto 12,2022', 
        title:'FOTODEPILACIÓN CON LÁSER DIODO', 
        text:'Nuestro equipo de profesionales se luce aquí brindando una cuasi tarjeta de referencia o refcard, sintética y muy completa sin dejar de ser útil, sencilla y comprensible para aquellos que recibieron capacitaciones y certificaron el uso de equipos de medicina estética con nosotros.',
        avatar: '../../assets/capacitacionImg.png',
        avatarText:'Area de Capacitación',
        page:'../page/blog/blog_12.html',
    },
    {
        id:2, 
        img:'../../assets/blog_12-8-22_2.jpg',
        date:'Agosto 12,2022', 
        title:'Vacuna contra el Covid-19 y fotodepilación láser - IPL', 
        text:'Que se sabe respecto a los tratamientos de medicina estética y las correspondientes vacunas contra el COVID-19? Que tan seguro es aplicarse un tratamiento y cuando después de transitar la enfermedad o la inoculación de una vacuna?',
        avatar: '../../assets/capacitacionImg.png',
        avatarText:'Area de Capacitación',
        page:'../page/blog/blog_11.html'
    }
]

const blogSections = document.getElementById('blog-sections')

const cargarBlog = (blog) => {
    let div = document.createElement('div');
    div.classList.add('blog-section');
    div.innerHTML = `
    <div class="section-img-contain">
        <div class="section-img">
            <img src="${blog.img}" alt="${blog.title}">
        </div>
        <div class="section-contain">
            <p class="contain-date">${blog.date}</p>
            <h3 class="contain-title">${blog.title}</h3>
            <p class="contain-text">${blog.text}</p>
        </div>
    </div>
    <div class="contain-avatar-boton">
        <div class="avatar-contain">
            <img src="${blog.avatar}" alt="Area de Capacitación" class="avatar-img">
            <p class="avatar-text">${blog.avatarText}</p>
        </div>
        <a class="contain-boton" href="${blog.page}">Mas Info</a>
    </div>
    <hr>`
    blogSections.appendChild(div)
}

window.addEventListener('load', ()  => {
    blog.forEach((producto) => {
        cargarBlog(producto);
      });
})