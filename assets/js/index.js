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
                        let ratings;
                        console.log(hom.rating)
                        if(hom.rating >=9.8){
                            ratings = `<label for="">Ratings:
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                        </label>`
                        }
                        else if(hom.rating >=9.3 && hom.rating <=9.7){
                            ratings =`<label for="">Ratings:
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star "></span>
                        </label>`
                        }
                        else if(hom.rating >=9.0 && hom.rating <=9.2){
                          ratings =  `<label for="">Ratings:
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star "></span>
                            <span class="fa fa-star "></span>
                        </label>`
                        }
                        else if(hom.rating >=2 && hom.rating <=8.9){
                            ratings =  `<label for="">Ratings:
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star "></span>
                            <span class="fa fa-star "></span>
                            <span class="fa fa-star "></span>
                        </label>`
                        }
                        else {
                            ratings =  `<label for="">Ratings:
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star "></span>
                            <span class="fa fa-star "></span>
                            <span class="fa fa-star "></span>
                            <span class="fa fa-star "></span>
                        </label>`
                        }
                        const item = document.createElement("div")
                        item.setAttribute("class", "card")
                        item.innerHTML = ` <img src="${hom.img_cover}" alt="">
                          <h3 class="property-type">${hom.property_type}</h2>
                              <p>${hom.title}</p>
                              
                              ${ratings}`
                        card.appendChild(item)

                    })
                }
                
                function eventListener(btn, filter){
                    btn.addEventListener("click", () => {
                        appendsOnClick(filter)
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
                    eventListener(homeBtn, filtered)
                }
                appendHomes(properties)

                function appendVacationHomes(data) {
                    const filtered = data.filter(item => item.property_type == "Villa" ? item : null)
                    const vacBtn = document.getElementById("vacation")
                    console.log()
                    eventListener(vacBtn, filtered)
                }
                appendVacationHomes(properties)

                function appendRentals(data) {
                    const filtered = data.filter(item => item.property_type == "Rental unit" && item.reviews >= 220 ? item : null)
                    const rentBtn = document.getElementById("rental")
                    eventListener(rentBtn, filtered)
                }
                appendRentals(properties)

                function appendBungalows(data) {
                    const filtered = data.filter(item => item.property_type == "Bungalow" && item.reviews >= 20 ? item : null)
                    const bungalowBtn = document.getElementById("bungalow")
                    eventListener(bungalowBtn, filtered)
                }
                appendBungalows(properties)

                function appendApartment(data) {
                    const filtered = data.filter(item => item.property_type == "Apartment" ? item : null);
                    const apartBtn = document.getElementById("apartment")
                    eventListener(apartBtn, filtered)
                }
                appendApartment(properties)

                function appendOther(data) {
                    const filtered = data.filter(item => item.property_type !== "Home" && item.property_type !== "Villa" && item.property_type !== "Rental unit" && item.property_type !== "Bungalow" && item.property_type !== "Apartment" && item.property_type !== "Guesthouse" && item.reviews > 150 ? item : null)
                    const otherBtn = document.getElementById("other")
                    eventListener(otherBtn, filtered)
                }
                appendOther(properties)
            })
    }
    fetchData()

    const form = document.querySelector("form")
    console.log(form)
    form.addEventListener("submit", (e)=>{
      e.preventDefault()
      const inputArea = form.comments.value
      console.log(inputArea)
      const ul = document.getElementById("response")
      const li = document.createElement("li")   
      li.textContent = inputArea
      ul.appendChild(li)

    form.reset()
    })
})



