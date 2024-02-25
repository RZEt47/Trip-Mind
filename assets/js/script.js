
document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('#header')
    const headerH = header.clientHeight

    /*Scroll To Element*/

    document.addEventListener('scroll', function (){
        const scrollTop = window.scrollY

        if (scrollTop >= headerH) {
            header.classList.add('header-static')
        } else {
            header.classList.remove('header-static')
        }
        scrollSpy(scrollTop)
    })

    /*Scroll Spy*/

    const windowH = window.innerHeight
    const dataScrollSpy = document.querySelectorAll('[data-scrollspy]')
    const dataSection = document.querySelectorAll('.header-spy [data-scroll]')

    function scrollSpy(scrollTop) {
        dataScrollSpy.forEach(function (el){
            let section = el.getAttribute('data-scrollspy')
            let sectionOffset = el.offsetTop
            sectionOffset = sectionOffset - (windowH * 0.33333)

            if (scrollTop >= sectionOffset) {
                dataSection.forEach(function (el){
                    el.classList.remove('active')
                })
            document.querySelector('.header-spy [data-scroll="' + section + '"]').classList.add('active');
            }

            if (scrollTop === 0) {
                dataSection.forEach(function (el) {
                    el.classList.remove('active');
                });
            }
        })
    }

    /*AOS*/

    AOS.init();

    AOS.init({
        // Global settings:
        disable: 'mobile', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 300, // values from 0 to 3000, with step 50ms
        duration: 1200, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });

})


