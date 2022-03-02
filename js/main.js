const searchPhoneValue = () => {
    const searchPhone = document.getElementById('search-input');
    const phoneName = searchPhone.value;
    searchPhone.value = ''
    if (phoneName == '') {
        searchPhone.style.background = 'red'
    }
    else {
        const url = ` https://openapi.programming-hero.com/api/phones?search=${phoneName}`
        fetch(url)
            .then(res => res.json())
            .then(data => ShowPhone(data.data))
    }
    const clearDetails = document.getElementById('details');
    clearDetails.innerHTML = '';

}


const ShowPhone = phones => {
    const maximamPhone = (phones.slice(0, 20));
    const mainDiv = document.getElementById('search-phone');
    mainDiv.textContent = '';
    if (phones.length == 0) {
        const erorrMassage = document.createElement('div')
        erorrMassage.innerHTML = `<h2 class="text-center bg-danger p-4 m-5">Sorroy no phone found</h2>`
        document.body.appendChild(erorrMassage)
    }
    else {
        maximamPhone.forEach(phone => {
            const div = document.createElement('div')
            div.classList.add('col')
            div.innerHTML = `
        <div class="card h-100 p-3">
                <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">Brand:${phone.brand}</p>
                <button onclick="showMore('${phone.slug}')" type="button" class="btn btn-primary">Show more</button>
                
            </div>
        </div>`
            mainDiv.appendChild(div);
        });
    }
}
const showMore = phoneSlug => {
    window.scrollTo(0, 0);
    const url = `https://openapi.programming-hero.com/api/phone/${phoneSlug}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneDetails(data.data))
}
const displayPhoneDetails = data => {
    const phoneImage = data.image;
    const slug = data.slug;
    const releaseDate = data.releaseDate;
    const chipSet = data.mainFeatures.chipSet;
    const memory = data.mainFeatures.memory;
    const sensors = data.mainFeatures.sensors;
    const storage = data.mainFeatures.storage
    const displaySize = data.mainFeatures.displaySize;
    if (data.others == null) {
        if (releaseDate == '') {
            const more = document.getElementById('details')
            more.textContent = '';
            more.innerHTML = `
                <div class="card rounded mx-auto" style="width: 18rem;">
                <img src="${phoneImage}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${slug}</h5>
                    <p class="card-text">Release Date: <span class="text-danger">Sorry relese date not found</span></p> 
                    <p class="card-text">
                    Chipset: ${chipSet}
                    </p>
                    <p>
                    Storage: ${storage}</p>
                    <p>
                    Display size: ${displaySize}
                    </p>
                    <p>
                    Memory: ${memory}
                    <p>
                    Sensors: ${sensors}
                    </p>
                </div>
            </div>`
        }
        else {
            const more = document.getElementById('details')
            more.textContent = '';
            more.innerHTML = `
            <div class="card rounded mx-auto" style="width: 18rem;">
            <img src="${phoneImage}" class="card-img-top" alt="...">
            <div class="card-body bg-Dark
            ">
                <h5 class="card-title">${slug}</h5>
                <p class="card-text">Release Date:${releaseDate}</p>  
                <p class="card-text">
                    Chipset: ${chipSet}
                    </p>
                    <p>
                    Storage: ${storage}</p>
                    <p>
                    Display size: ${displaySize}
                    </p>
                    <p>
                    Memory: ${memory}
                    <p>
                    Sensors: ${sensors}
                    </p>                   
            </div>
        </div>`
        }
    }
    else {
        const bluetooth = data.others.Bluetooth;
        const GPS = data.others.GPS;
        const NFC = data.others.NFC;
        const Radio = data.others.Radio;
        const USB = data.others.USB;
        const WLAN = data.others.WLAN;
        if (releaseDate == '') {
            const more = document.getElementById('details')
            more.textContent = '';
            more.innerHTML = `
            <div class="card rounded mx-auto" style="width: 18rem;">
            <img src="${phoneImage}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${slug}</h5>
                <p class="card-text">Release Date: <span class="text-danger">Sorry relese date not found</span></p> 
                <p class="card-text">
                Chipset: ${chipSet}
                </p>
                <p>
                Storage: ${storage}</p>
                <p>
                Display size: ${displaySize}
                </p>
                <p>
                Memory: ${memory}
                <p>
                Sensors: ${sensors}
                </p> 
                
                <p class="card-text">
                Bluetooth: ${bluetooth}
                </p>
                <p>
                GPS: ${GPS}</p>
                <p>
                NFC: ${NFC}
                </p>
                <p>
                Radio: ${Radio}
                <p>
                USB: ${USB}
                </p>
                <p>
                WLAN: ${WLAN}
                </p>
            </div>
        </div>`
        }
        else {
            const more = document.getElementById('details')
            more.textContent = '';
            more.innerHTML = `
        <div class="card rounded mx-auto" style="width: 18rem;">
        <img src="${phoneImage}" class="card-img-top" alt="...">
        <div class="card-body bg-Dark
        ">
            <h5 class="card-title">${slug}</h5>
            <p class="card-text">Release Date:${releaseDate}</p>  
            <p class="card-text">
                Chipset: ${chipSet}
                </p>
                <p>
                Storage: ${storage}</p>
                <p>
                Display size: ${displaySize}
                </p>
                <p>
                Memory: ${memory}
                <p>
                Sensors: ${sensors}
                </p>          
                <p class="card-text">
                Bluetooth: ${bluetooth}
                </p>
                <p>
                GPS: ${GPS}</p>
                <p>
                NFC: ${NFC}
                </p>
                <p>
                Radio: ${Radio}
                <p>
                USB: ${USB}
                </p>
                <p>
                WLAN: ${WLAN}
                </p>          
        </div>
    </div>`
        }
    }
}