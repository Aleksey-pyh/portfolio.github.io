(function (){
    const wrapper = document.querySelector('.wrapper');
    const navigator = document.querySelector('.navigator');
    const nav_item = document.querySelector('.nav_item');
    const greeting = document.querySelector('.greeting');
    const intro_mask = document.querySelector('.intro_mask');
    window.onscroll = ()=> {
        if(window.pageYOffset > 1){
            wrapper.classList.add('wrapper_active');
            navigator.classList.add('navigator_active');
            nav_item.classList.add('nav_item_active');
            greeting.classList.add('greeting_active');
            intro_mask.classList.add('intro_mask_active');
        } else{
            wrapper.classList.remove('wrapper_active');
            navigator.classList.remove('navigator_active');
            nav_item.classList.remove('nav_item_active');
            greeting.classList.remove('greeting_active');
            intro_mask.classList.remove('intro_mask_active');
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
           

