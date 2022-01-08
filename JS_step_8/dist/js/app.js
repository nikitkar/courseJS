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
    //function 1 - receipt timers
    //function 2 - timer setting
    //function 3 - update time

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

});