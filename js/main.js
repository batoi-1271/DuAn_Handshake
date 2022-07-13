const a = document.querySelector.bind(document);
const aa = document.querySelectorAll.bind(document);

const itemsLeft = aa(".left-item");
const itemsContent = aa(".list-item-content");

const itemsRight = aa(".right-item");
const itemsContentRight = aa(".list-item-content-Right");


function start() {
  itemsLeft.forEach((item, index) => {
    const content = itemsContent[index];

    item.onclick = function () {
      if (content.classList.contains("active")) {
        content.classList.remove("active");
      } else {
        itemsContent.forEach((item) => {
          item.classList.remove("active");

        });
        content.classList.add("active");

      }
    };
  });

  itemsRight.forEach((item, index) => {
    const content = itemsContentRight[index];
    item.onclick = function () {
      if (content.classList.contains("active")) {
        content.classList.remove("active");
      } else {
        itemsContentRight.forEach((item) => {
          item.classList.remove("active");
        });
        content.classList.add("active");
      }
    };
  });

  getManager(renderManager);
}

var managerApi = 'http://localhost:3000/manager';
const accountManager = a('.accountManager');

function getManager(callback) {
  fetch(managerApi)
    .then(response => response.json())
    .then(callback)
}
function renderManager(managers) {
  const htmls = managers.map((manager, index) => {
    return `
    <div class="block-Manager">
    <div class="block-img">
        <img src="${manager.avatar}" alt="">
    </div>
    <div class="responsibility">
        <h4>${manager.responsibility}</h4>
    </div>
    <div class="name">
        <h3>${manager.name}e</h3>
    </div>
    <div class="describe">
        <p>${manager.describe}</p>
    </div>
    <div class="social">
        <ul>
            <li><a href="#">IG</a></li>
            <li><a href="#">TW</a></li>
            <li><a href="#">LI</a></li>
        </ul>
    </div>
</div>
    `;
  });
  accountManager.innerHTML = htmls.join("");
}

start();



