// Menú Hamburguesa
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Formulario de Contacto
const formularioContacto = document.getElementById('formulario-contacto');

formularioContacto.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;

    // Crear el cuerpo del email
    const emailBody = `
Nombre: ${nombre}
Email: ${email}
Asunto: ${asunto}

Mensaje:
${mensaje}
    `.trim();

    // Emails de destino
    const emailsDestino = [
        'officialmegamente4@gmail.com',
        'quinterx420@gmail.com'
    ];

    // Mostrar mensaje de confirmación
    alert('¡Mensaje preparado para enviar a ' + emailsDestino.join(' y ') + '!\n\nPor favor, completa el envío en tu cliente de correo.');
    
    // Limpiar formulario
    formularioContacto.reset();

    // Log para debug
    console.log('Mensaje de contacto preparado:', {
        nombre: nombre,
        email: email,
        asunto: asunto,
        mensaje: mensaje,
        destinatarios: emailsDestino
    });
});

// Animaciones al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Aplicar observador a elementos
document.querySelectorAll('.servicio-card, .galeria-item, .valor').forEach(element => {
    element.style.opacity = '0';
    observer.observe(element);
});

// Agregar estilos de animación
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Suavizar scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Efecto navbar al scroll
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        navbar.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

console.log('%c✨ Carlitos Tech - Sitio Web Cargado Correctamente', 'color: #2563eb; font-size: 14px; font-weight: bold;');