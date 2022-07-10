const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const itemsLeft = $$(".left-item");
const itemsContent = $$(".list-item-content");

const itemsRight = $$(".right-item");
const itemsContentRight = $$(".list-item-content-Right");


function start() {
    itemsLeft.forEach((item, index) => {
        const content = itemsContent[index];
        console.log(content)

        item.onclick = function() {
            // $('.list-item-content').classList.remove('active');
            // content.classList.remove('active');
            if (content.classList.contains('active')) {
                content.classList.remove('active')
            } else {
                content.classList.remove('active')

                content.classList.add('active');
            }
        }
    })

    itemsRight.forEach((item, index) => {
        const content = itemsContentRight[index];
        console.log(content)

        item.onclick = function() {
            content.classList.add('active');
        }
    })
}

start();