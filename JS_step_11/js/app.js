window.addEventListener('DOMContentLoaded', ()=> {
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabParent = document.querySelector('.tabheader__items');
    
    function hideTabContent(){
        tabsContent.forEach((tab) => {
            tab.classList.add('hide');
            tab.classList.remove('show', 'fade');
        });
        
        tabs.forEach((tab) => {
            tab.classList.remove('tabheader__item_active');
        });
    }    

    function showTabContent(i = 0){
        // tabsContent.forEach((tab, a) => {
        //     if(i == a) {
        //         tab.classList.add('show');
        //         tab.classList.remove('hide');
        //     }
        //     else tab.classList.remove('show');
        // });

        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabParent.addEventListener('click', (event)=> {
        const target = event.target;

        if(target && target.classList.contains('tabheader__item')){
            tabs.forEach((item, i) => {
                if(target == item){
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
        
    });

    //
    //start timer
    //

    const timeOnline = '2022-10-27';

    function getTimerRemainig(endTimer){
        const endTime = Date.parse(endTimer) - Date.parse(new Date()),
              days = Math.floor(endTime / (1000 * 60 * 60 *24)),
              hours = Math.floor((endTime / (1000 * 60 * 60)) % 24),
              minutes = Math.floor((endTime / 1000 / 60) % 60),
              seconds = Math.floor((endTime / 1000) % 60);

        return {
            'total' : endTime,
            'days' : days,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        }
    }

    function gerZero(num){
        if(num >= 0 && num <= 10) return `0${num}`;
        else return num;
    }

    function setClock(selector, endtime){
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);

        updateClock();
              
        function updateClock(){
            const endTimer = getTimerRemainig(endtime);

            days.innerHTML = gerZero(endTimer.days);
            hours.innerHTML = gerZero(endTimer.hours);
            minutes.innerHTML = gerZero(endTimer.minutes);
            seconds.innerHTML = gerZero(endTimer.seconds);

            if(endTimer.total <= 0) clearInterval(timeInterval);
        }
    }
    
    setClock('.timer', timeOnline);

    //
    //end timer
    //


    //
    //active modal
    //

    const modal = document.querySelector('.modal'),
          modalBtnsOpen = document.querySelectorAll('[data-modal]'),
          modalBtnClose = document.querySelector('[data-close]');



    function modalOpen(){
        modal.classList.toggle('show');
        document.body.style.overflow = 'hidden';
        
        // clearInterval(modalTimer);
    }

    function modalClose(){
        modal.classList.toggle('show');
        document.body.style.overflow = '';
    }

    modalBtnsOpen.forEach(btn =>{
        btn.addEventListener('click', modalOpen);
    });

    modalBtnClose.addEventListener('click', modalClose);

    modal.addEventListener('click', (e)=>{
        if(e.target === modal) modalClose();
    });
    
    document.addEventListener('keydown', (e)=>{
        if(e.code === 'Escape' && modal.classList.contains('show')) modalClose();
    });


    // const modalTimer = setTimeout(modalOpen, 3000);
    
    function modalOpenByScroll(){
        if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            modalOpen();
            window.removeEventListener('scroll', modalOpenByScroll);
        }
    }

    window.addEventListener('scroll', modalOpenByScroll);

    //
    //end modal
    //


    //
    //start new menu
    //

    class NewMenu{
        constructor(img, alt, title, text, price, parentSelector, ...classes){
            this.img = img;
            this.alt = alt;
            this.title = title;
            this.text = text;
            this.price = price;
            this.parent = document.querySelector(parentSelector);
            this.classes = classes;
        }

        createMenu(){
            const div = document.createElement('div');

            if(this.classes.length === 0){
                this.div = 'menu__item';
                div.classList.add(this.div);
            }
            else this.classes.forEach(element =>  div.classList.add(element));

            div.innerHTML = `
                <img src=${this.img} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.text}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;

            this.parent.append(div);
        }
    }

    new NewMenu(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        229,
        '.menu .container',

    ).createMenu();
    
    new NewMenu(
        "img/tabs/elite.jpg",
        "elite",
        'Меню "“Премиум”"',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        550,
        '.menu .container',
        'menu__item'
    ).createMenu();

    new NewMenu(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        430,
        '.menu .container',
        'menu__item'
    ).createMenu();


    //
    //end menu
    //
});