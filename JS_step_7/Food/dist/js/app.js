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
});