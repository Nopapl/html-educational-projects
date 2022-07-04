(() => {
    let burger = document.querySelector('.burger-menu');
    let nav = document.querySelector('.header__nav');
    let navLink = nav.querySelectorAll('.header__link');
    let blackout = document.querySelector('.blackout-wrapper');
    let headerLogo = document.querySelector('.logo-link');

    burger.addEventListener('click', () => {
        burger.classList.toggle('burger-menu--active');
        nav.classList.toggle('header__nav--active');
        headerLogo.classList.toggle('hidden-element');
        blackout.classList.toggle('blackout-wrapper--active');
        document.body.classList.toggle('scroll-stop');
    });

    navLink.forEach(e => {
        e.addEventListener('click', () => {
            burger.classList.remove('burger-menu--active');
            nav.classList.remove('header__nav--active');
            headerLogo.classList.remove('hidden-element');
            blackout.classList.remove('blackout-wrapper--active');
            document.body.classList.remove('scroll-stop');
        });
    });


    document.querySelectorAll('a[href^="#"').forEach(link => { // плавный скролл
        link.addEventListener('click', function(e) {
            e.preventDefault();
    
            let href = this.getAttribute('href').substring(1);
    
            const scrollTarget = document.getElementById(href);
    
            const topOffset = 100;
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset;
    
            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });

    let tabsBtn = document.querySelectorAll('.work-plan__btn');
    let tabsItem = document.querySelectorAll('.work-plan__step');
    let tabsImage = document.querySelectorAll('.work-plan__wrapper-right');


    tabsBtn.forEach((el) => {
        el.addEventListener('click', (e) => {
            const path = e.currentTarget.dataset.path;
            const tabsContent = document.querySelectorAll(`[data-target="${path}"]`)


            tabsBtn.forEach((btn) => btn.classList.remove('work-plan__btn--active'));
            e.currentTarget.classList.add('work-plan__btn--active');

            tabsItem.forEach((el) => el.classList.remove('work-plan__step--active'));
            tabsImage.forEach((el) => el.classList.remove('work-plan__step--active'));
            tabsContent.forEach((el) => el.classList.add('work-plan__step--active'));
        });
    });

    const searchForm = document.querySelector('.header-search');
    const searchBtn = document.querySelector('.search-button');
    const closedBtn = document.querySelector('.closed-button');
    const searchInput = document.querySelector('.header-search__input');

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
    });

    searchBtn.addEventListener('click', () => {
        searchInput.classList.add('header-search__input--active');
        closedBtn.classList.add('closed-button--active');
        searchBtn.classList.add('search-button--active');
    });

    closedBtn.addEventListener('click', () => {
        searchInput.classList.remove('header-search__input--active');
        closedBtn.classList.remove('closed-button--active');
        searchBtn.classList.remove('search-button--active');
    });

})();