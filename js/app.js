let cardsData = [
  {
    id: 1,
    src: "./assests/hoodie.remove.bg-removebg-preview.png",
    price: 1000,
    title: "Mordern Hoddie with laces",
  },
  {
    id: 2,
    src: "./assests/hoodie.remove.bg-removebg-preview.png",
    price: 990,
    title: "Mordern Hoddie with laces",
  },
  {
    id: 3,
    src: "./assests/hoodie.remove.bg-removebg-preview.png",
    price: 980,
    title: "Mordern Hoddie with laces",
  },
  {
    id: 4,
    src: "./assests/hoodie.remove.bg-removebg-preview.png",
    price: 970,
    title: "Mordern Hoddie with laces",
  },
  {
    id: 5,
    src: "./assests/hoodie.remove.bg-removebg-preview.png",
    price: 960,
    title: "Mordern Hoddie with laces",
  },
  {
    id: 6,
    src: "./assests/hoodie.remove.bg-removebg-preview.png",
    price: 950,
    title: "Mordern Hoddie with laces",
  },
  {
    id: 7,
    src: "./assests/hoodie.remove.bg-removebg-preview.png",
    price: 940,
    title: "Mordern Hoddie with laces",
  },
  {
    id: 8,
    src: "./assests/hoodie.remove.bg-removebg-preview.png",
    price: 930,
    title: "Mordern Hoddie with laces",
  },
  {
    id: 9,
    src: "./assests/hoodie.remove.bg-removebg-preview.png",
    price: 920,
    title: "Mordern Hoddie with laces",
  },
  {
    id: 10,
    src: "./assests/hoodie.remove.bg-removebg-preview.png",
    price: 910,
    title: "Mordern Hoddie with laces",
  },
  {
    id: 11,
    src: "./assests/hoodie.remove.bg-removebg-preview.png",
    price: 900,
    title: "Mordern Hoddie with laces",
  },
  {
    id: 12,
    src: "./assests/hoodie.remove.bg-removebg-preview.png",
    price: 890,
    title: "Mordern Hoddie with laces",
  },
  {
    id: 13,
    src: "./assests/hoodie.remove.bg-removebg-preview.png",
    price: 880,
    title: "Mordern Hoddie with laces",
  },
  {
    id: 14,
    src: "./assests/hoodie.remove.bg-removebg-preview.png",
    price: 870,
    title: "Mordern Hoddie with laces",
  },
  {
    id: 15,
    src: "./assests/hoodie.remove.bg-removebg-preview.png",
    price: 860,
    title: "Mordern Hoddie with laces",
  },
  {
    id: 16,
    src: "./assests/hoodie.remove.bg-removebg-preview.png",
    price: 850,
    title: "Mordern Hoddie with laces",
  },
  {
    id: 17,
    src: "./assests/hoodie.remove.bg-removebg-preview.png",
    price: 840,
    title: "Mordern Hoddie with laces",
  },
  {
    id: 18,
    src: "./assests/hoodie.remove.bg-removebg-preview.png",
    price: 830,
    title: "Mordern Hoddie with laces",
  },
  {
    id: 19,
    src: "./assests/hoodie.remove.bg-removebg-preview.png",
    price: 820,
    title: "Mordern Hoddie with laces",
  },
  {
    id: 20,
    src: "./assests/hoodie.remove.bg-removebg-preview.png",
    price: 810,
    title: "Mordern Hoddie with laces",
  },
];

let arrivalCards = document.querySelectorAll(".arrival-cards");
let showDesc = document.querySelector("#show_desc");
var pid;



Array.from(arrivalCards).forEach((e) => {
  e.addEventListener("click", () => {
    pid = e.id;
    // console.log(pid);
  });
});

window.addEventListener("click", function () {
  diplayMenuItems(cardsData, pid);
//   displayMenuButtons();
});

function diplayMenuItems(menuItems, pid) {
  let displayMenu = menuItems.map(function (item) {
    if(item.id == pid){
      return `<div class="container">
        <div class="product">
            <div class="history1">
                <p>Mens > Clothing > <span>Sweatshirts & Hoodies</span></p>
            </div>
            <div class="left">
                
                <div class="small-image-box">
                    <!-- <div class="small-image-box"> -->
                        <div class="small-image"><img src="./assests/hoodie.remove.bg-removebg-preview.png" alt=""></div>
                        <div class="small-image"><img src="./assests/hoodie.remove.bg-removebg-preview.png" alt=""></div>
                        <div class="small-image"><img src="./assests/hoodie.remove.bg-removebg-preview.png" alt=""></div>
                        <div class="small-image"><img src="./assests/hoodie.remove.bg-removebg-preview.png" alt=""></div>
                        <!-- <div class="small-image"></div> -->
                    <!-- </div> -->
                </div>
                <div class="big-image">
                    <img src="./assests/hoodie.remove.bg-removebg-preview.png" alt="">
                </div>
            </div>
            <div class="right">
                <div class="history2">
                    <p>Mens > Clothing > Sweatshirts & Hoodies</p>
                </div>
                <div class="product-name">
                    <p>Heavyweight Hoodie</p>
                </div>
                <div class="price-and-review">
                    <div class="price">
                        <p class="new-price">₹<span>${item.price}</span></p>
                        <p class="old-price">₹<span>1200</span></p>
                    </div>
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <p><span>4.9</span> (69 reviews)</p>
                    </div>
                </div>
                <div class="size">
                    <p class="heading">Select Size:</p>
                    <div class="size-box">
                        <div class="select-size"><span class="size-1">XS</span></div>
                        <div class="select-size"><span class="size-2">S</span></div>
                        <div class="select-size"><span class="size-3">M</span></div>
                        <div class="select-size"><span class="size-4">L</span></div>
                        <div class="select-size"><span class="size-5">XL</span></div>
                        <div class="select-size"><span class="size-6">XXL</span></div>
                    </div>
                </div>
                <div class="color">
                    <p class="heading">Select Color:</p>
                    <div class="color-box">
                        <div class="select-color color1"><i class="fas fa-check tick"></i></div>
                        <div class="select-color color2"><i class="fas fa-check tick"></i></div>
                        <div class="select-color color3"><i class="fas fa-check tick"></i></div>
                        <div class="select-color color4"><i class="fas fa-check tick"></i></div>
                        <div class="select-color color5"><i class="fas fa-check tick"></i></div>
                        <div class="select-color color6"><i class="fas fa-check tick"></i></div>
                    </div>
                </div>
                <div class="quantity">
                    <p class="heading">Quantity: </p>
                    <div class="q-box">
                        <div class="minus"><i class="fas fa-minus"></i></div>
                        <span class="q-value">1</span>
                        <div class="plus"><i class="fas fa-plus"></i></div>
                    </div>
                </div>
                <div class="promo-note">
                    <p><i class="fa-solid fa-tags"></i> Enjoy upto ₹300 off with Promo code: <span>#478294</span> Until 9/10/22</p>
                </div>
                <div class="btns">
                    <button class="btn btn-primary">
                        <p>Add To Cart</p>
                        <i class="fas fa-bag-shopping"></i>
                    </button>
                    <button class="btn btn-secondary">
                        <p>Favroite</p>
                        <p class="fas fa-heart"></p>
                    </button>
                </div>
            </div>
        </div>
        <div class="divider"></div>
        <section class="product-details">
            <div class="btns">
                <a href="#" class="btn1 isActive">Details</a>
                <a href="#" class="btn2">Reviews</a>
                <a href="#" class="btn3">Related</a>
            </div>
            <div class="details">
                <div class="heading">
                    <p>Product Details</p>
                </div>
                <div class="column">
                    <div class="description">
                        <div class="material desc-item">
                            <span>Materials</span>
                            <p>100% Cotton</p>
                        </div>
                        <div class="shipping desc-item">
                            <span>Shipping</span>
                            <p>Standard shipping arives in 4 to 6 days, <br> with one bussiness day for shopping.</p>
                        </div>
                        <div class="returns desc-item">
                            <span>Returns</span>
                            <p>Returns accepted within 30 days of delivery. <br> For more information <a href="#">Click here</a></p>
                        </div>
                        <div class="info desc-item">
                            <span>Info</span>
                            <p>01. Ultra-soft interior <br> 02. Hooded with tie</p>
                        </div>
                    </div>
                    <div class="ad">
                        <div class="ad-card">
                            <div class="content">
                                <span>25% off</span>
                                <p class="tag1">Explore New <br> Arrivals</p>
                                <p class="tag2">Shop The Latest From Top Brands</p>
                            </div>
                            <div class="image">
                                <img src="./assests/girl-n-sweater.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="divider"></div>
        <section class="review-section">
            <div class="left">
                <div class="heading">
                    <p>Reviews</p>
                    <span>Take pride in our reviews and won't censor them unless they've been flagged.</span>
                </div>
                <div class="reviews">
                    <div class="review review1">
                        <div class="row1">
                            <div class="col1">
                                <div class="image">
                                    <img src="./assests/profile-1.jpg" alt="">
                                </div>
                                <div class="name-date">
                                    <p class="name">Ruchi Sharma</p>
                                    <p class="date">December 18, 2022</p>
                                </div>
                            </div>
                            <div class="col2">
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star gray"></i>
                                </div>
                                <p>4.0</p>
                            </div>
                        </div>
                        <div class="row2">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, saepe. Ab, repudiandae. Sit corrupti ad
                            fugiat nihil corporis! Laboriosam sapiente nostrum aliquid dolorum iste ut ipsam, iure incidunt doloribus enim!
                            <a href="#">Read More...</a></p>
                        </div>
                    </div>
                    <div class="divider"></div>
                    <div class="review review1">
                        <div class="row1">
                            <div class="col1">
                                <div class="image">
                                    <img src="./assests/profile-1.jpg" alt="">
                                </div>
                                <div class="name-date">
                                    <p class="name">Ruchi Sharma</p>
                                    <p class="date">December 18, 2022</p>
                                </div>
                            </div>
                            <div class="col2">
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star gray"></i>
                                </div>
                                <p>4.0</p>
                            </div>
                        </div>
                        <div class="row2">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, saepe. Ab, repudiandae. Sit corrupti ad
                                fugiat nihil corporis! Laboriosam sapiente nostrum aliquid dolorum iste ut ipsam, iure incidunt doloribus
                                enim!
                                <a href="#">Read More...</a>
                            </p>
                        </div>
                    </div>
                    <div class="divider"></div>
                </div>
            </div>
            <div class="right">
                <div class="review-table">
                    <div class="review-num">
                        <p>269 Review</p>
                        <span><i class="fas fa-star"></i> 4.8</span>
                    </div>
                    <div class="star-percent">
                        <div class="star5 star">
                            <p class="star-num"><i class="fas fa-star"></i> 5</p>
                            <div class="bar"><span></span></div>
                            <p class="percent">80%</p>
                        </div>
                        <div class="star4 star">
                            <p class="star-num"><i class="fas fa-star"></i> 4</p>
                            <div class="bar"><span></span></div>
                            <p class="percent">10%</p>
                        </div>
                        <div class="star3 star">
                            <p class="star-num"><i class="fas fa-star"></i> 3</p>
                            <div class="bar"><span></span></div>
                            <p class="percent">0%</p>
                        </div>
                        <div class="star2 star">
                            <p class="star-num"><i class="fas fa-star"></i> 2</p>
                            <div class="bar"><span></span></div>
                            <p class="percent">0%</p>
                        </div>
                        <div class="star1 star">
                            <p class="star-num"><i class="fas fa-star"></i> 1</p>
                            <div class="bar"><span></span></div>
                            <p class="percent">0%</p>
                        </div>
                </div>
                </div>
            </div>
        </section>
    </div>`;
    }
    else{
    //   console.log("no");
    } 
  });

  showDesc.innerHTML = displayMenu;
}
// cardsData.forEach((e) => {
//   displayDescription(e);
// });

let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let q_value = document.querySelector(".q-value");
let select_size = document.querySelectorAll(".select-size");

plus.addEventListener('click', () => {
    let x = parseInt(q_value.innerHTML);
    x += 1;
    let y = x.toString();
    q_value.innerHTML = y;
});

minus.addEventListener("click", () => {
    let x = parseInt(q_value.innerHTML);
    if(x > 1){
        x -= 1;
        let y = x.toString();
        q_value.innerHTML = y;
    }
});

let remove_size_active_effect = () => {
    Array.from(select_size).forEach((e) => {
        // console.log(e.classList)
        e.classList.remove("active");
    });
}

// console.log(select_size);
Array.from(select_size).forEach((e) => {
    e.addEventListener('click', () => {
        remove_size_active_effect();
        e.classList.toggle("active");
    });
});

let select_color = document.querySelectorAll(".select-color");
let select_tick = document.querySelectorAll(".tick");

// console.log(select_color.chil);
let remove_tick = () => {
    Array.from(select_tick).forEach((e) => {
        e.style.display = "none";
    });
}


Array.from(select_color).forEach((e) => {
    e.addEventListener('click', () => {
        remove_tick();
        e.children[0].style.display = "block";
    });
});
