(function (){
    const wrapper = document.querySelector('.wrapper');
    const navigator = document.querySelector('.navigator');
    const nav_item = document.querySelector('.nav_item');
    const greeting = document.querySelector('.greeting');
    const intro_mask = document.querySelector('.intro_mask');
    const greeting_hi = document.querySelector('.greeting_hi');
    const intro_title = document.querySelector('.intro_title');
    const intro_text = document.querySelector('.intro_text');
    window.onscroll = ()=> {
        if(window.pageYOffset > 1){
            wrapper.classList.add('wrapper_active');
            navigator.classList.add('navigator_active');
            nav_item.classList.add('nav_item_active');
            greeting.classList.add('greeting_active');
            intro_mask.classList.add('intro_mask_active');
        } else if(window.pageYOffset < 1){
            wrapper.classList.remove('wrapper_active');
            navigator.classList.remove('navigator_active');
            nav_item.classList.remove('nav_item_active');
            greeting.classList.remove('greeting_active');
            intro_mask.classList.remove('intro_mask_active');
        }
    
        if(window.pageYOffset > 1500){
            navigator.classList.add('navigator_foot');
            greeting.classList.add('greeting_foot');
            greeting_hi.classList.add('greeting_hi_foot');
            intro_mask.classList.add('intro_mask_foot');
            intro_title.classList.add('intro_title_foot');
            intro_text.classList.add('intro_text_foot');
        } else{
            navigator.classList.remove('navigator_foot');
            greeting.classList.remove('greeting_foot');
            greeting_hi.classList.remove('greeting_hi_foot');
            intro_mask.classList.remove('intro_mask_foot');
            intro_title.classList.remove('intro_title_foot');
            intro_text.classList.remove('intro_text_foot');
        }
    };
    
    }());
    
        (function (){
            const portfolio1 = document.querySelector('.portfolio_1');
            const portfolio2 = document.querySelector('.portfolio_2');
            const portfolio3 = document.querySelector('.portfolio_3');
            const min = document.querySelector('.min');
            const plus = document.querySelector('.plus');
            let page = 1;
            plus.addEventListener('click',()=>{
                
                switch(page) {
                    case 1 :
                    portfolio1.classList.add('none_portfolio');
                    portfolio2.classList.remove('none_portfolio');
                    page+=1;
                    break;
                
                    case 2 :
                    portfolio2.classList.add('none_portfolio');
                    portfolio3.classList.remove('none_portfolio');
                    page+=1;
                    break;
                    case 3 :
                    portfolio3.classList.add('none_portfolio');
                    portfolio1.classList.remove('none_portfolio');
                    page=1;
                    break;
                }
                console.log('Page=',page);
            })
            min.addEventListener('click',()=>{
              
                switch(page) {
                    case 1 :
                       
                    portfolio1.classList.add('none_portfolio');
                    portfolio3.classList.remove('none_portfolio');
                    page=3;
                    break;
                
                    case 2 :
                    portfolio2.classList.add('none_portfolio');
                    portfolio1.classList.remove('none_portfolio');
                    page-=1;
                    break;
                    case 3 :
                    portfolio3.classList.add('none_portfolio');
                    portfolio2.classList.remove('none_portfolio');
                    page-=1;
                    break;
                }
                console.log('Page=',page);
            })
            
            }());
(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());

