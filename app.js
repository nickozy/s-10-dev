fetch("https://preeminent-taffy-d88f8d.netlify.app/data.json")
  .then((response) => response.json())
  .then((item) => {
    localStorage.setItem("item", JSON.stringify(item));
  });

let initialItems = 4;
let loadItems = 4;
const loadMoreBtn = document.querySelector(".your-history__load-more");
const container = document.querySelector(".your-history__list");

// Init elements on first load

function loadItem() {
  let out = "";
  let items = JSON.parse(localStorage.getItem("item"));
  let counter = 0;
  for (let item of items) {
    if (counter < initialItems) {
      out += `
      <li class="your-history__list-item">
        <div class="your-history__image-mask">
            <img src="${item.image}" loading="lazy" height="230" width="680" alt="" class="your-history__image">
        </div>
        <div class="your-history__list-heading">
            <h3 class="h4">${item.name}</h3>
        </div>
        <div class="your-history__list-down">
            <div class="your-history__list-description">
                <p class="h4">${item.description}</p>
                <div class="your-history__quote num">“
                </div>
            </div><a href="#" class="your-history__link w-inline-block">
                <div class="h5">Читать дальше</div>
            </a>
        </div>
        </li>
    `;
    }
    counter++;
  }
  container.innerHTML = out;
}

// Init elements on first load
function loadMore() {
  let out = "";
  let items = JSON.parse(localStorage.getItem("item"));
  let counter = 0;
  let currentDisplayedItems = document.querySelectorAll(
    ".your-history__list-item"
  ).length;

  for (let item of items) {
    if (
      counter >= currentDisplayedItems &&
      counter < loadItems + currentDisplayedItems
    ) {
      out += `
      <li class="your-history__list-item">
        <div class="your-history__image-mask">
            <img src="${item.image}" loading="lazy" height="230" width="680" alt="" class="your-history__image">
        </div>
        <div class="your-history__list-heading">
            <h3 class="h4">${item.name}</h3>
        </div>
        <div class="your-history__list-down">
            <div class="your-history__list-description">
                <p class="h4">${item.description}</p>
                <div class="your-history__quote num">“
                </div>
            </div><a href="#" class="your-history__link w-inline-block">
                <div class="h5">Читать дальше</div>
            </a>
        </div>
        </li>
    `;
    }
    counter++;
  }

  container.innerHTML += out;

  if (
    document.querySelectorAll(".your-history__list-item").length == items.length
  ) {
    loadMoreBtn.style.display = "none";
  }
}

loadItem();

loadMoreBtn.addEventListener("click", loadMore);
