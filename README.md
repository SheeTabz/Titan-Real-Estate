# TITAN REAL ESTATE
***

## Describtion
The Vallie's Estate website is a platform that provides clients from all corners of the world to locate house properties that meet their desires and at affordable prices.

## Demo
Use the link provided to navigate to the Titan Real Estate website.
[Titan Real Estate](https://titan-real-estate.netlify.app/)<br>

The page appears as shown below and has the following feaures:
- This the landingpage
<img src="./assets/images/FirstPage.png">
- Other pages<br>
<img src="./assets/images/Products.png">

## Technologies used & Features
- Well designed and responsive UI
- HTML
- CSS
- JavaScript
- API

## Future-implementations 
- Payment Api

## Contribution
If you need to contribute to this project follow the steps below:<br>
- Clone the repo(`git clone <repo link>`)
- Create a branch where you will add changes (`git branch -b <branchname>`)
- Add the changes (`git add .`)
- Commit changes (`git commit -m"contributing changes"`)
- Push your changes (`git push origin <branchname>`)

## Code Samples
```Html
<section class="property" id="property-exploration">
        <h1 id="exper">GET THE TYPE OF PROPERTY YOU DESIRE</h1>
        <div class="filter-prop">
            <div class="left-prop">
                <button id="homes">Homes</button>
                <button id="vacation">Vacation Homes</button>
                <button id="rental">Rental Units</button>
                <button id="bungalow">Bungalows</button>
                <button id="apartment">Apartments</button>
            </div>
            <div class="right-prop">
                <button id="filter"><i class="fa fa-filter" style="font-size:18px"></i></button>
                <button id="other">Other</button>
            </div>
        </div>

        <div class="propCards">

        </div>
    </section>
```
```JavaScript
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
```
### Author
[<img src="./assets/images/profile2.jpg" width="300px">](https://github.com/SheeTabz)<br>
[TABITHA MURIITHI](https://github.com/SheeTabz)

## License information.
### MIT License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  
`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`

