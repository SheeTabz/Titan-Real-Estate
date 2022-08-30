document.addEventListener("DOMContentLoaded", () => {
    const dataApi = "https://sheetabz.github.io/Accommadation-api/db.json"
    const card = document.querySelector(".propCards")
    function fetchData() {
        fetch(dataApi)
            .then(response => response.json())
            .then(data => {
                const properties = data.properties
                console.log(properties.map(prop => prop.property_type));
                // APPENDS DATA TO THE PAGE WHEN LOADED AND WHEN THE BUTTONS ARE CLICKED
                function appendsOnClick(filtered) {
                    card.innerHTML = ''
                    filtered.map(hom => {
                        const item = document.createElement("div")
                        item.setAttribute("class", "card")
                        item.innerHTML = ` <img src="${hom.img_cover}" alt="">
                          <h3 class="property-type">${hom.property_type}</h2>
                              <p>${hom.title}</p>
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


                function appendToDom(property) {
                    const fil = property.filter(item => item.reviews >= 420 ? item : null)
                    appendsOnClick(fil)
                }
                appendToDom(properties)

                // FILTERS THE API DATA AND APPENDS TO DOM DEPENDING ON THE CLICKED BUTTON
                function appendHomes(data) {
                    const filtered = data.filter(item => item.property_type == "Home" && item.reviews >= 180 ? item : null)
                    const homeBtn = document.getElementById("homes")
                    homeBtn.addEventListener("click", () => {
                        appendsOnClick(filtered)
                    })
                }
                appendHomes(properties)

                function appendVacationHomes(data) {
                    const filtered = data.filter(item => item.property_type == "Villa" ? item : null)
                    console.log(filtered);
                    const vacBtn = document.getElementById("vacation")
                    vacBtn.addEventListener("click", () => {
                        appendsOnClick(filtered)
                    })
                }
                appendVacationHomes(properties)

                function appendRentals(data) {
                    const filtered = data.filter(item => item.property_type == "Rental unit" && item.reviews >= 220 ? item : null)
                    console.log(filtered);
                    const rentBtn = document.getElementById("rental")
                    rentBtn.addEventListener("click", () => {
                        appendsOnClick(filtered)
                    })
                }
                appendRentals(properties)

                function appendBungalows(data) {
                    const filtered = data.filter(item => item.property_type == "Bungalow" && item.reviews >= 20 ? item : null)
                    console.log(filtered);
                    const bungalowtBtn = document.getElementById("bungalow")
                    bungalowtBtn.addEventListener("click", () => {
                        appendsOnClick(filtered)
                    })
                }
                appendBungalows(properties)

                function appendApartment(data) {
                    const filtered = data.filter(item => item.property_type == "Apartment" ? item : null)
                    console.log(filtered);
                    const apartBtn = document.getElementById("apartment")
                    apartBtn.addEventListener("click", () => {
                        appendsOnClick(filtered)
                    })
                }
                appendApartment(properties)
                function appendOther(data) {
                    const filtered = data.filter(item => item.property_type !== "Home" && item.property_type !== "Villa" && item.property_type !== "Rental unit" && item.property_type !== "Bungalow" && item.property_type !== "Apartment" && item.property_type !== "Guesthouse" && item.reviews > 100 ? item : null)
                    console.log(filtered);
                    const othertBtn = document.getElementById("other")
                    othertBtn.addEventListener("click", () => {
                        appendsOnClick(filtered)
                    })
                }
                appendOther(properties)






            })
    }
    fetchData()




})



