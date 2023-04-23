
const apiBase = "http://cross-course.local"
const woocommerceBase = "/wp-json/wc/store"
const productsBase = "/products/"

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const idJacket = params.get("id");

const specificContainer = document.querySelector(".specific-container");

const urlSpecificJacket = apiBase + woocommerceBase + productsBase + idJacket;

async function findJacket() {
    try {
        const respond = await fetch(urlSpecificJacket);
        const data = await respond.json();

        /* I SHOULD MAYBE JUST RETURN DATA VARIABLE, AND CONTINUE IN NEW FUNCTION*/

        specificContainer.innerHTML = "";

        specificContainer.innerHTML = `
            <h1>${data.name}</h1>
                <div class="product-in-list spec-grid layout1000">
                    <p class="spec-price">${data.price_html}</p>
                    <div class="product-img spec-img">
                        <img src="${data.images[0].src}" alt="${data.images[0].alt}">
                    </div> 
                    ${data.description}
                    <div class="spec-btns">
                        <a href="checkout.html" class="cta">add to cart</a>
                        <a href="products.html" class="cta cta-back">back</a>
                    </div>
                </div>`;
    }
    catch (error) {
        console.log("OOOPSIE:/sjekk internettforbindelse!", error);
        specificContainer.innerHTML = `<div class="error">OH NO, something went wrong 😢</div>`;
    }
}

findJacket();


