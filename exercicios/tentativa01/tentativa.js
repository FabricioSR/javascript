const menu = document.querySelector(".menu");
const links = document.querySelector(".links")

menu.addEventListener("click", function() {
    links.classList.toggle("show-links")
})

const projetos = [
    {
      id: 1,
      title: "site 1",
      category: "sites",
      img: "buenos.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "site 2",
      category: "sites",
      img: "buenos.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "site 3",
      category: "sites",
      img: "buenos.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "app 1",
      category: "apps",
      img: "buenos.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "app 2",
      category: "apps",
      img: "buenos.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "app 3",
      category: "apps",
      img: "buenos.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "software 1",
      category: "softwares",
      img: "buenos.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "software 2",
      category: "softwares",
      img: "buenos.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "software 3",
      category: "softwares",
      img: "buenos.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "cyber security",
      category: "cybersecurity",
      img: "buenos.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];

const projects = document.querySelector(".projetos-center")
const filterBtns = document.querySelectorAll(".filter-btn")  

window.addEventListener("DOMContentLoaded", function(){
    displayMenuItems(projetos)
})

filterBtns.forEach(function (btn){
    btn.addEventListener("click", function (e) {
        const category = e.currentTarget.dataset.id;
        const menuCategory = projetos.filter(function (menuItem) {
            if (menuItem.category === category) {
                return menuItem;
            }
        });
        if (category === "all") {
            displayMenuItems(projetos);
        } else {
            displayMenuItems(menuCategory);
        }
    });
})
/*
filterBtns.forEach(function (btn) {
    btn.addEventlistener("click", function (e) {
        const category = e.currentTarguet.dataset.id;
        const menuCategory = projetos.filter(function(menuItem) {
            if (menuItem.category === category) {
                return menuItem;
            }
        });
        if (category ==="all") {
            displayMenuItem(projetos);
        } else {
            displayMenuItems(menuCategory)
        }
    });
});
*/
function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function (item) {
        return `<article class="projeto-item"> 
        <img src=${item.img}  class="photo" alt=${item.title}/>
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
            </header>
            <p class="item-text">
                ${item.desc}
            </p>
        </div>
    </article>`;
    });
    displayMenu = displayMenu.join("");
    projects.innerHTML = displayMenu;
  }