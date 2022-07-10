const items = document.querySelectorAll(".right-item");
const itemsContent = document.querySelectorAll(".list-item-content");
// console.log(itemsContent)

function start() {
    items.forEach((item, index) => {
        const content = itemsContent[index];

        item.onclick = function() {
            this.classList.add('list-item-active')
            content.classList.add('list-item-active');
        }
    })
}

start();