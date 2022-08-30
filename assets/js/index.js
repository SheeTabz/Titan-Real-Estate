document.addEventListener("DOMContentLoaded", () => {
    const dataApi = "https://sheetabz.github.io/Accommadation-api/db.json"

    function fetchData() {
        fetch(dataApi)
            .then(response => response.json())
            .then(data => {
                // data.properties.map(prop => arr.push(prop))
                const properties = data.properties

                function appendToDom(property){
                const fil = property.filter(item => item.reviews >= 420 ? item : null)
                fil.map(prop => {
                    const card = document.querySelector(".propCards")
                    const item = document.createElement("div")
                    item.setAttribute("class", "card")
                    item.innerHTML = ` <img src="${prop.img_cover}" alt="">
                              <h3 class="property-type">${prop.property_type}</h2>
                                  <p>${prop.title}</p>
                                  <label for="">Ratings:
                                      <span class="fa fa-star checked"></span>
                                      <span class="fa fa-star checked"></span>
                                      <span class="fa fa-star checked"></span>
                                      <span class="fa fa-star"></span>
                                      <span class="fa fa-star"></span>
                                  </label>`
                    card.appendChild(item)
                })
            }
            appendToDom(properties)


            })
    }
    fetchData()
  



})



