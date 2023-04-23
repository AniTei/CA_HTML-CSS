

/* const apiBase = "http://cross-course.local/"
const woocommerceBase = "wp-json/wc/store/"
const productsBase = "products"
 */


const jacketsContent = document.querySelector(".content-container");

const url = "http://cross-course.local/wp-json/wc/store/products";

//const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

async function getJackets() {
    try {
        const respond = await fetch(url);
        const data = await respond.json();

        jacketsContent.innerHTML += "";

        for (let i = 0; i < data.length; i++) {

            console.log(data[i].id);

            jacketsContent.innerHTML += `


                <div class="listed-product">
                
                    <a class="products-top" href="product-specific.html?id=${data[i].id}"> 

                    <div class="list-head">
                        <h3 class="name-jacket"> ${data[i].name}</h3> 
                        <p class="prod-price"> ${data[i].price_html} </p>
                    </div>
                
                    <img src="${data[i].images[0].thumbnail}" alt="${data[i].images[0].alt}" class="product-img list-img">
                    </a>
                    
                    <div class="list-info">
                        ${data[i].short_description}
                    </div> 

                    <div class="list-btns">
                        <p class="cta">sold out :(</p>
                        <a href="product-specific.html?id=${data[i].id}" class="cta">read more</a>
                    </div>  
                    
                </div> `;

        }

    }

    catch (error) {
        console.log("OOOPSIE:/sjekk internettforbindelse!", error);
        jacketsContent.innerHTML = `<div class="error">OH NO, something went wrong 😢</div>`;
    }
}

getJackets();








/* ///////////////// */



const featuredContainer = document.querySelector(".featured-content");


const urlFeatured = "http://cross-course.local/wp-json/wc/store/products/?featured=true";

/* //// devide up the first url, and use it for the featured part as well  */

async function getFeatured() {

    const respond = await fetch(urlFeatured);
    const dataFeatured = await respond.json();

    console.log(dataFeatured);

    for (let i = 0; i < dataFeatured.length; i++) {

        console.log(dataFeatured[i].id);

        featuredContainer.innerHTML += `  
        
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
                </div> `;
    }


    /* 
I WEREN'T ABLE TO FILTER THE FEATURED PRODUCTS BASED ON THE FEATURED PROPERTY, BUT I WAS ABLE TO DO IT BY NAME.
I DECIDED TO JUST USE THE URL FOR FEATURED PRODUCTS, AS IT WILL BE AFFECTED BY THE CHIOCES MADE IN THE CMS, AND USING NAME WOULDN'T HAVE.

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




