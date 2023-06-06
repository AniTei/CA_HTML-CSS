const apiBase = "http://cross-course.local"
const woocommerceBase = "/wp-json/wc/store"
const productsBase = "/products"

const urlProducts = apiBase + woocommerceBase + productsBase;

const jacketsContent = document.querySelector(".content-container");

async function getJackets() {
    
        const respond = await fetch(urlProducts);
        const data = await respond.json();

        console.log (data);

        /* I SHOULD MAYBE JUST RETURN DATA VARIABLE, AND CONTINUE IN NEW FUNCTION*/

        for (let i = 0; i < data.length; i++) {

            jacketsContent.innerHTML += `
                <div class="listed-product">
                    <a class="products-top" href="product-specific.html?id=${data[i].id}"> 
                        <div class="list-head">
                            <h3 class="name-jacket"> ${data[i].name}</h3>           
                        </div>                
                        <img src="${data[i].images[0].thumbnail}" alt="${data[i].images[0].alt}" class="product-img list-img">                    
                        <p class="prod-price"> ${data[i].price_html} </p>
                    </a>
                    <div class="list-btns">
                        <p class="cta">sold out :(</p>
                        <a href="product-specific.html?id=${data[i].id}" class="cta">read more</a>
                    </div>  
                </div> 
                `;
        }
}

getJackets();


/* FEATURED ONES  ///////////////// */


const featuredContainer = document.querySelector(".featured-content");

const featuredBase = "/?featured=true"

const urlFeatured = urlProducts + featuredBase;

async function getFeatured() {

    const respond = await fetch(urlFeatured);
    const dataFeatured = await respond.json();

    for (let i = 0; i < dataFeatured.length; i++) {

        featuredContainer.innerHTML += `  
        <div class="featured-product">
            <a class="products-top" href="product-specific.html?id=${dataFeatured[i].id}"> 
                <div class="list-head">
                    <h3>${dataFeatured[i].name}</h3>                   
                    <p class="prod-price"> ${dataFeatured[i].price_html} </p>
                </div>
                <img src="${dataFeatured[i].images[0].thumbnail}" alt="${dataFeatured[i].images[0].alt}" class="product-img list-img">
            </a>  
            <div class="list-info">
                ${dataFeatured[i].short_description}
            </div> 
            <div class="list-btns">
                <p class="cta">sold out :(</p>
                <a href="product-specific.html?id=${dataFeatured[i].id}" class="cta">read more</a>
            </div> 
        </div> 
                `;
    }

    /* 
I WEREN'T ABLE TO FILTER THE FEATURED PRODUCTS BASED ON THE FEATURED PROPERTY, 
BUT I WAS ABLE TO DO IT BY NAME.
I DECIDED TO JUST USE THE URL FOR FEATURED PRODUCTS, 
BECAUSE IT WILL BE AFFECTED BY THE CHIOCES MADE IN THE CMS, AND FILTERING BY NAME WOULDN'T.

        const filteredJackets = data.filter(filterJackets)
    
        function filterJackets(featuredJackets) {
            if (featuredJackets.name.includes("4")) {
                return true;
            }
        }
    
        console.log(data)
        console.log(filteredJackets);
    
    featuredContainer.innerHTML = `<div>test ${filteredJackets[0].name}</div>`; */

}
getFeatured();



