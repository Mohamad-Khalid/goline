// Translation data
const translations = {
    en: {
        company_name: "GOLINE",
        nav_home: "Home",
        about_us: "About Us",
        partners: "Partners",
        nav_services: "Services",
        nav_about: "About",
        nav_contact: "Contact Us",
        hero_title: "Welcome to GOLINE",
        hero_subtitle: "Your trusted partner in computer networks and information technology solutions across Egypt",
        hero_cta: "Explore Our Services",
        services_title: "Our Services",
        service_network_title: "Network Solutions",
        service_network_desc: "Design, implementation, management, and maintenance of computer networks for businesses and government entities.",
        service_security_title: "Cybersecurity",
        service_security_desc: "Comprehensive cybersecurity services, data protection, and safeguarding systems against cyber threats.",
        service_software_title: "Software Development",
        service_software_desc: "Custom software, web and mobile applications, and modern e-commerce platform development.",
        service_marketing_title: "Digital Marketing",
        service_marketing_desc: "Digital marketing solutions, search engine optimization, and strategic digital content development.",
        service_consultancy_title: "IT Consultancy",
        service_consultancy_desc: "Expert consultancy in digital transformation, IT solutions, and technical training programs.",
        service_infrastructure_title: "Technology Infrastructure",
        service_infrastructure_desc: "Establishment and management of technology zones and their related infrastructure systems.",
        about_title: "About GOLINE",
        about_para1: "We are delighted to welcome you to our website and pleased to introduce you to our company and the services we offer. At GOLINE, we are an Egyptian company specializing in computer networks and information technology.",
        about_para2: "For over three years, we have been providing integrated technical solutions that meet the needs of individuals, businesses, and government entities across Egypt. We believe that technology is a key to success, and we are always committed to being true partners to our clients on their path to digital advancement.",
        about_para3: "Our comprehensive services include network design and implementation, cybersecurity solutions, software development, digital marketing, and IT consultancy. We also provide technical training and support services to ensure the sustainability and effectiveness of our solutions.",
        mission_title: "Our Mission",
        mission_para1: "At GOLINE, we believe that technology is no longer just a tool — it is a key partner in driving business growth and development. Our mission is to provide integrated and reliable technological solutions that empower our clients to fully leverage digital capabilities, streamline their operations, and enhance efficiency.",
        mission_para2: "We are committed to meeting our clients' needs by delivering high-quality services in computer networking, information technology, digital marketing, and software development, while offering ongoing technical support and consultancy.",
        vision_title: "Our Vision",
        vision_para1: "At GOLINE, we aspire to be one of the leading companies in the field of information technology and digital transformation across the region. Our vision is to continuously expand our service offerings, adopt the latest technologies, and build long-term strategic partnerships.",
        vision_para2: "We aim to become the first choice for those seeking advanced and secure digital solutions, contributing to the digital transformation journey in Egypt and the Arab world by developing smart and flexible digital environments.",
        contact_title: "Get In Touch",
        contact_desc: "Thank you for visiting our website. We hope you find everything you're looking for, and we always welcome your communication.",
        contact_cta_text: "Ready to start your digital transformation journey with GOLINE?",
        contact_cta: "Contact Us Today",
        footer_text: "© 2024 GOLINE. All rights reserved. | Egyptian Company Specializing in Computer Networks & IT Solutions"
    },
    ar: {
        company_name: "جولاين",
        nav_home: "الرئيسية",
        nav_services: "الخدمات",
        nav_about: "عن الشركة",
        partners: "الشركاء",
        nav_contact: "اتصل بنا",
        hero_title: "مرحباً بكم في جولاين",
        hero_subtitle: "شريككم الموثوق في حلول الشبكات الحاسوبية وتقنية المعلومات في جميع أنحاء مصر",
        hero_cta: "اكتشف خدماتنا",
        services_title: "خدماتنا",
        service_network_title: "حلول الشبكات",
        service_network_desc: "تصميم وتنفيذ وإدارة وصيانة الشبكات الحاسوبية للشركات والجهات الحكومية.",
        service_security_title: "الأمن السيبراني",
        service_security_desc: "خدمات شاملة للأمن السيبراني وحماية البيانات والحماية من التهديدات الإلكترونية.",
        service_software_title: "تطوير البرمجيات",
        service_software_desc: "تطوير برمجيات مخصصة وتطبيقات الويب والهاتف المحمول ومنصات التجارة الإلكترونية الحديثة.",
        service_marketing_title: "التسويق الرقمي",
        service_marketing_desc: "حلول التسويق الرقمي وتحسين محركات البحث وتطوير المحتوى الرقمي الاستراتيجي.",
        service_consultancy_title: "استشارات تقنية المعلومات",
        service_consultancy_desc: "استشارات متخصصة في التحول الرقمي وحلول تقنية المعلومات وبرامج التدريب التقني.",
        service_infrastructure_title: "البنية التحتية التقنية",
        service_infrastructure_desc: "إنشاء وإدارة المناطق التقنية وأنظمة البنية التحتية المرتبطة بها.",
        about_title: "عن جولاين",
        about_para1: "يسعدنا أن نرحب بكم في موقعنا ونتشرف بتعريفكم بشركتنا والخدمات التي نقدمها. في جولاين، نحن شركة مصرية متخصصة في الشبكات الحاسوبية وتقنية المعلومات.",
        about_para2: "لأكثر من ثلاث سنوات، نقدم حلولاً تقنية متكاملة تلبي احتياجات الأفراد والشركات والجهات الحكومية في جميع أنحاء مصر. نؤمن بأن التكنولوجيا هي مفتاح النجاح، ونحن ملتزمون دائماً بأن نكون شركاء حقيقيين لعملائنا في رحلة التقدم الرقمي.",
        about_para3: "تشمل خدماتنا الشاملة تصميم وتنفيذ الشبكات، وحلول الأمن السيبراني، وتطوير البرمجيات، والتسويق الرقمي، واستشارات تقنية المعلومات. كما نقدم خدمات التدريب والدعم التقني لضمان استدامة وفعالية حلولنا.",
        mission_title: "رسالتنا",
        mission_para1: "في جولاين، نؤمن بأن التكنولوجيا لم تعد مجرد أداة - بل هي شريك أساسي في دفع نمو الأعمال وتطويرها. رسالتنا هي تقديم حلول تكنولوجية متكاملة وموثوقة تمكن عملاءنا من الاستفادة الكاملة من القدرات الرقمية وتبسيط عملياتهم وتعزيز الكفاءة.",
        mission_para2: "نحن ملتزمون بتلبية احتياجات عملائنا من خلال تقديم خدمات عالية الجودة في الشبكات الحاسوبية وتقنية المعلومات والتسويق الرقمي وتطوير البرمجيات، مع تقديم الدعم التقني والاستشارات المستمرة.",
        vision_title: "رؤيتنا",
        vision_para1: "في جولاين، نتطلع إلى أن نكون إحدى الشركات الرائدة في مجال تقنية المعلومات والتحول الرقمي في المنطقة. رؤيتنا هي التوسع المستمر في عروض خدماتنا واعتماد أحدث التقنيات وبناء شراكات استراتيجية طويلة الأمد.",
        vision_para2: "نهدف إلى أن نصبح الخيار الأول لمن يسعون للحصول على حلول رقمية متقدمة وآمنة، والمساهمة في رحلة التحول الرقمي في مصر والعالم العربي من خلال تطوير بيئات رقمية ذكية ومرنة.",
        contact_title: "تواصل معنا",
        contact_desc: "شكراً لزيارة موقعنا. نأمل أن تجدوا كل ما تبحثون عنه، ونرحب دائماً بتواصلكم معنا.",
        contact_cta_text: "هل أنتم مستعدون لبدء رحلة التحول الرقمي مع جولاين؟",
        contact_cta: "اتصلوا بنا اليوم",
        footer_text: "© 2024 جولاين. جميع الحقوق محفوظة. | شركة مصرية متخصصة في الشبكات الحاسوبية وحلول تقنية المعلومات"
    }
};

let currentLang = localStorage.getItem('language') || 'en';

// Language toggle functionality
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    localStorage.setItem('language', currentLang);
    updateLanguage();
}

// Update language content and layout
function updateLanguage() {
    const html = document.documentElement;
    const body = document.body;
    const langIcon = document.getElementById('lang-icon');

    // Update lang and dir attributes
    html.setAttribute('lang', currentLang);
    html.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');

    // Update font family
    body.className = body.className.replace(/font-(english|arabic)/, `font-${currentLang === 'ar' ? 'arabic' : 'english'}`);

    // Update language toggle button
    langIcon.textContent = currentLang === 'en' ? 'AR' : 'EN';

    // Update all text content
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });
}

// Theme toggle functionality
function toggleTheme() {
    const html = document.documentElement;
    const themeIcon = document.getElementById('theme-icon');

    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        themeIcon.innerHTML = '<img src="./assets/moon.svg" alt="Light Mode">';
        localStorage.setItem('theme', 'light');
    } else {
        html.classList.add('dark');
        themeIcon.innerHTML = '<img src="./assets/sun.svg" alt="Dark Mode">';
        localStorage.setItem('theme', 'dark');
    }
}

// Initialize theme on page load
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const themeIcon = document.getElementById('theme-icon');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.classList.add('dark');
        themeIcon.innerHTML = '<img src="./assets/sun.svg" alt="Dark Mode">';
    } else {
        themeIcon.innerHTML = '<img src="./assets/moon.svg" alt="Light Mode">';
    }
}

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        const themeIcon = document.getElementById('theme-icon');
        if (e.matches) {
            document.documentElement.classList.add('dark');
            themeIcon.innerHTML = '<img src="./assets/sun.svg" alt="Dark Mode">';
        } else {
            document.documentElement.classList.remove('dark');
            themeIcon.innerHTML = '<img src="./assets/moon.svg" alt="Light Mode">';
        }
    }
});

// Listen for window resize to handle menu visibility
window.addEventListener('resize', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    if (window.innerWidth >= 768) {
        mobileMenu.classList.remove('hidden');
    } else if (!mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
    }
});

// Smooth scrolling for navigation links
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

// Toggle mobile menu functionality
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';

    mobileMenu.classList.toggle('hidden');
    mobileMenuButton.setAttribute('aria-expanded', !isExpanded);

    // Toggle icons
    if (menuIcon && closeIcon) {
        menuIcon.classList.toggle('hidden', !isExpanded);
        closeIcon.classList.toggle('hidden', isExpanded);
    }
}

// Close mobile menu when clicking on a link
function setupMobileMenuLinks() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');

    mobileMenuButton.addEventListener('click', toggleMobileMenu);

    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (window.innerWidth < 768) { // Only on mobile
                toggleMobileMenu();
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function (event) {
        const isClickInsideMenu = mobileMenu.contains(event.target);
        const isClickOnButton = mobileMenuButton.contains(event.target);
        const isMenuOpen = !mobileMenu.classList.contains('hidden');

        if (isMenuOpen && !isClickInsideMenu && !isClickOnButton && window.innerWidth < 768) {
            toggleMobileMenu();
        }
    });
}


// handle scroll to top button
function setupScrollToTopButton() {
    const backToTopBtn = document.getElementById('backToTopBtn');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
            backToTopBtn.classList.add('opacity-100');
        } else {
            backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
            backToTopBtn.classList.remove('opacity-100');
        }
    });
    // Scroll to top on click
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// handle hero section
function handleHeroSection() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dot');
    const contentSlides = document.querySelectorAll('.hero-content-slide');
    let current = 0;
    let sliderInterval = null;

    function showSlide(idx) {
        slides.forEach((slide, i) => {
            slide.style.opacity = i === idx ? '1' : '0';
            slide.style.zIndex = i === idx ? '15' : '10';
        });
        contentSlides.forEach((content, i) => {
            if (i === idx) {
                content.style.opacity = '1';
                content.style.transform = 'translateY(-50%) translateX(0) scale(1)';
                content.style.zIndex = '30';
                content.classList.add('animate-fade-in-up');
            } else {
                content.style.opacity = '0';
                content.style.transform = 'translateY(-50%) translateX(32px) scale(0.95)';
                content.style.zIndex = '20';
                content.classList.remove('animate-fade-in-up');
            }
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('bg-white/70', i === idx);
            dot.classList.toggle('bg-white/40', i !== idx);
        });
        current = idx;
    }

    function nextSlide() {
        showSlide((current + 1) % slides.length);
    }

    dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => {
            showSlide(idx);
            resetInterval();
        });
    });

    function resetInterval() {
        clearInterval(sliderInterval);
        sliderInterval = setInterval(nextSlide, 6000);
    }

    showSlide(0);
    sliderInterval = setInterval(nextSlide, 6000);
}

// handle partners slider
function handlePartnersSlider() {
    const partnersTrack = document.getElementById('partners-track');
    if (!partnersTrack) return; // Exit if not on this page

    const partnersPrev = document.getElementById('partners-prev');
    const partnersNext = document.getElementById('partners-next');
    const dotsContainer = document.getElementById('partners-dots');
    let partnerCards = Array.from(partnersTrack.children);
    let visibleCount = window.innerWidth < 768 ? 1 : 3;
    let totalPartners = partnerCards.length;
    let partnerCurrent = 0;
    let partnerInterval = null;

    function setupClones() {
        partnersTrack.querySelectorAll('.clone').forEach(el => el.remove());
        partnerCards = Array.from(partnersTrack.children).filter(el => !el.classList.contains('clone'));
        totalPartners = partnerCards.length;
        visibleCount = window.innerWidth < 768 ? 1 : 3;

        for (let i = totalPartners - visibleCount; i < totalPartners; i++) {
            let clone = partnerCards[i].cloneNode(true);
            clone.classList.add('clone');
            partnersTrack.insertBefore(clone, partnerCards[0]);
        }
        for (let i = 0; i < visibleCount; i++) {
            let clone = partnerCards[i].cloneNode(true);
            clone.classList.add('clone');
            partnersTrack.appendChild(clone);
        }

        partnersTrack.style.transition = 'none';
        partnersTrack.style.transform = `translateX(-${visibleCount * (100 / visibleCount)}%)`;
        setTimeout(() => {
            partnersTrack.style.transition = 'transform 0.7s cubic-bezier(.4,0,.2,1)';
        }, 50);
        partnerCurrent = 0;
    }

    function renderDots() {
        dotsContainer.innerHTML = '';
        const dotCount = Math.max(totalPartners - visibleCount + 1, 1);
        for (let i = 0; i < dotCount; i++) {
            const btn = document.createElement('button');
            btn.className = `partners-dot w-3 h-3 rounded-full ${i === 0 ? 'bg-primary/70' : 'bg-primary/30'} border-2 border-primary transition-all duration-300`;
            btn.setAttribute('aria-label', `Partner ${i + 1}`);
            btn.addEventListener('click', () => {
                moveTo(i);
                resetPartnerInterval();
            });
            dotsContainer.appendChild(btn);
        }
    }

    function moveTo(idx, animate = true) {
        visibleCount = window.innerWidth < 768 ? 1 : 3;
        const slideWidth = 100 / visibleCount;
        if (!animate) partnersTrack.style.transition = 'none';
        else partnersTrack.style.transition = 'transform 0.7s cubic-bezier(.4,0,.2,1)';
        partnerCurrent = idx;
        partnersTrack.style.transform = `translateX(-${(idx + visibleCount) * slideWidth}%)`;

        const dots = dotsContainer.querySelectorAll('.partners-dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('bg-primary/70', i === idx);
            dot.classList.toggle('bg-primary/30', i !== idx);
        });
    }

    function nextPartnerSlide() {
        moveTo(partnerCurrent + 1);
        visibleCount = window.innerWidth < 768 ? 1 : 3;
        const dotCount = Math.max(totalPartners - visibleCount + 1, 1);
        if (partnerCurrent + 1 >= dotCount) {
            setTimeout(() => {
                moveTo(0, false);
            }, 700);
        }
    }

    function prevPartnerSlide() {
        moveTo(partnerCurrent - 1);
        visibleCount = window.innerWidth < 768 ? 1 : 3;
        const dotCount = Math.max(totalPartners - visibleCount + 1, 1);
        if (partnerCurrent - 1 < 0) {
            setTimeout(() => {
                moveTo(dotCount - 1, false);
            }, 700);
        }
    }

    function resetPartnerInterval() {
        clearInterval(partnerInterval);
        partnerInterval = setInterval(nextPartnerSlide, 4000);
    }

    function updateSlider() {
        setupClones();
        renderDots();
        moveTo(0, false);

        if (window.innerWidth < 768) {
            if (partnersPrev) partnersPrev.classList.add('hidden');
            if (partnersNext) partnersNext.classList.add('hidden');
        } else {
            if (partnersPrev) partnersPrev.classList.remove('hidden');
            if (partnersNext) partnersNext.classList.remove('hidden');
        }
    }

    if (partnersPrev) partnersPrev.addEventListener('click', () => {
        prevPartnerSlide();
        resetPartnerInterval();
    });
    if (partnersNext) partnersNext.addEventListener('click', () => {
        nextPartnerSlide();
        resetPartnerInterval();
    });

    window.addEventListener('resize', updateSlider);

    updateSlider();
    partnerInterval = setInterval(nextPartnerSlide, 4000);
}

// handle scroll animation
function handleScrollAnimation() {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 }); // Trigger when 20% is visible

    sections.forEach(section => observer.observe(section));
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function () {
    initTheme();
    updateLanguage();
    handleHeroSection();
    handlePartnersSlider();
    setupMobileMenuLinks();
    setupScrollToTopButton();
    handleScrollAnimation();
});
