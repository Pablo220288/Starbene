const blog = [
    {
        id:1,
        img:'../../assets/blog_12-8-22.jpg', 
        date:'Agosto 12,2022', 
        title:'Fotodepilación con láser diodo.', 
        text:'Nuestro equipo de profesionales se luce aquí brindando una cuasi tarjeta de referencia o refcard, sintética y muy completa sin dejar de ser útil, sencilla y comprensible para aquellos que recibieron capacitaciones y certificaron el uso de equipos de medicina estética con nosotros.',
        avatar: '../../assets/capacitacionImg.png',
        avatarText:'Area de Capacitación',
        page:'../page/blog/blog_12.html',
    },
    {
        id:2, 
        img:'../../assets/blog_12-8-22_2.jpg',
        date:'Agosto 12,2022', 
        title:'Vacuna contra el Covid-19 y fotodepilación láser - IPL.', 
        text:'Que se sabe respecto a los tratamientos de medicina estética y las correspondientes vacunas contra el COVID-19? Que tan seguro es aplicarse un tratamiento y cuando después de transitar la enfermedad o la inoculación de una vacuna?',
        avatar: '../../assets/capacitacionImg.png',
        avatarText:'Area de Capacitación',
        page:'../page/blog/blog_11.html'
    },
    {
        id:3, 
        img:'../../assets/blog_11-8-22.jpg',
        date:'Agosto 11,2022', 
        title:'Conbinación de terapias para potenciar tus resultados.', 
        text:'Es buena la eliminación no invasiva del tejido adiposo, mejorar los signos y síntomas de la celulitis y aumentar la hipertrofia muscular, se recurre a la combinación de dos tecnologías ampliamente conocidas en el mercado actual: Radiofrecuencia resistiva multipolar con un sistema de vacum-dermo-movilización (Alpha Synergy) y Campos electromagnéticos pulsados de alta intensidad (Mio Up)?',
        avatar: '../../assets/capacitacionImg.png',
        avatarText:'Area de Capacitación',
        page:'../page/blog/blog_10.html'
    },
    {
        id:4, 
        img:'../../assets/blog_25-04-22.jpg',
        date:'Abril 25,2022', 
        title:'Puntos motores en la aplicación de pulsos magnéticos focalizados de alta intensidad.', 
        text:'Si no veo contracción muscular, estoy haciendo correctamente el tratamiento de pulso magnético? Aquí nuestros profesionales especialistas del Área de Capacitación comparten unos tips.',
        avatar: '../../assets/capacitacionImg.png',
        avatarText:'Area de Capacitación',
        page:'../page/blog/blog_10.html'
    },
    {
        id:5, 
        img:'../../assets/blog_12-04-22.jpg',
        date:'Abril 12,2022', 
        title:'Radiofrecuencia: Una tecnología atemporal.', 
        text:'¿Cuanto sabes de la mejora en la piel por tratamientos de radiofrecuencia? Aqui veras conceptos básicos y orientativos de una terapia siempre efectiva y exitosa en equipos de radiofrecuencia STARBENE.',
        avatar: '../../assets/capacitacionImg.png',
        avatarText:'Area de Capacitación',
        page:'../page/blog/blog_10.html'
    },
    {
        id:6, 
        img:'../../assets/blog_11-04-22.jpg',
        date:'Abril 11,2022', 
        title:'Reacciones cutáneas a productos cosmeticos y medicamentos fotosensibles.', 
        text:'¿Sabias cuales substancias pueden alterar tu piel? Nuestro equipo de profesionales en este paper presenta recomendaciones para que estés atento y luzcas espectacular siempre.',
        avatar: '../../assets/capacitacionImg.png',
        avatarText:'Area de Capacitación',
        page:'../page/blog/blog_10.html'
    },
    {
        id:7, 
        img:'../../assets/blog_04-04-22.jpg',
        date:'Abril 4,2022', 
        title:'¿Cómo afectan las hormonas a la piel?', 
        text:'La piel es un órgano extenso y muy importante en nuestro cuerpo. En este artículo nuestros especialistas repasan la influencia hormonal e implicancias.',
        avatar: '../../assets/capacitacionImg.png',
        avatarText:'Area de Capacitación',
        page:'../page/blog/blog_10.html'
    },
    {
        id:8, 
        img:'../../assets/blog_17-02-22.jpg',
        date:'Febrero 17,2022', 
        title:'Reducción de tejido adiposo ¿Por frío o por calor?.', 
        text:'Si de reducir tejido graso se trata, priman dos mecanismos físicos opuestos e infalibles que se pueden implementar para disminuir el tamaño de un pliegue graso cuando se acerca la temporada de verano.',
        avatar: '../../assets/capacitacionImg.png',
        avatarText:'Area de Capacitación',
        page:'../page/blog/blog_10.html'
    },
    {
        id:8, 
        img:'../../assets/blog_09-06-21.jpg',
        date:'Junio 9,2021', 
        title:'¿Cómo agregar valor y fortalecer tu servicio de alquiler de equipos de estética?', 
        text:'El alquiler de equipos de medicina estética ha crecido exponencialmente en el último tiempo y de manera muy rápida.',
        avatar: '../../assets/Kurt_Rubinstein.jpg',
        avatarText:'Kurt Rubinstein',
        page:'../page/blog/blog_10.html'
    },
    
    

    
    

     
    







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