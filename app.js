const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');

function PageTransitions() {
    // Button click active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function () {
            // Remove 'active-btn' class from all buttons
            sectBtn.forEach(btn => {
                btn.classList.remove('active-btn');
            });
            // Add 'active-btn' class to the clicked button
            this.classList.add('active-btn');
        });
    }

    // Sections Active class
    allSections.forEach(section => {
        section.addEventListener('click', (e) => {
            const id = e.target.dataset.id;
            if (id) {
                // Remove 'active' class from other buttons
                sectBtns.forEach(btn => {
                    btn.classList.remove('active');
                });

                e.target.classList.add('active');

                // Hide other sections
                sections.forEach(section => {
                    section.classList.remove('active');
                });

                const element = document.getElementById(id);
                element.classList.add('active');
            }
        });
    });

    //toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', ()=>{
        let element=document.body;
        element.classList.toggle('light-mode')
    })
}

PageTransitions();
