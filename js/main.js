const searchPhoneValue = () => {
    const searchPhone = document.getElementById('search-input');
    const phoneName = searchPhone.value;
    searchPhone.value = ''
    if (phoneName == '') {
        console.log('khali')
    }
    else {
        const url = ` https://openapi.programming-hero.com/api/phones?search=${phoneName}`
        fetch(url)
            .then(res => res.json())
            .then(data => ShowPhone(data.data))
    }
}


const ShowPhone = phones => {
    const mainDiv = document.getElementById('search-phone');
    mainDiv.textContent = '';
    if (phones.length == 0) {
        const erorrMassage = document.createElement('div')
        erorrMassage.innerHTML = `<h2 class=" text-center">Sorroy no phone found</h2>`
        document.body.appendChild(erorrMassage)
    }
    else {
        phones.forEach(phone => {
            // console.log(phone)
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
    const url = `https://openapi.programming-hero.com/api/phone/${phoneSlug}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneDetails(data.data, data.data.image, data.data.slug, data.data.releaseDate, data.data.mainFeatures.storage, data.data.mainFeatures.displaySize))


}
const displayPhoneDetails = (data, image, slug, releaseDate, mainFeatureStorage, mainFeatureDisplaySize) => {
    console.log(data)
    if (releaseDate == '') {
        const more = document.getElementById('details')
        more.textContent = '';
        more.innerHTML = `
            <div class="card rounded mx-auto" style="width: 18rem;">
            <img src="${image}" class="card-img-top" alt="...">
            <div class="card-body bg-primary">
                <h5 class="card-title">${slug}</h5>
                <p class="card-text">Release Date:<span class="text-danger">Sorry relese date not found</span></p> 
                <p class="card-text">Storage:${mainFeatureStorage}</p>
                <p>
                Display size:${mainFeatureDisplaySize}
                </p>        
            </div>
        </div>`
    }
    else {
        const more = document.getElementById('details')
        more.textContent = '';
        more.innerHTML = `
        <div class="card rounded mx-auto" style="width: 18rem;">
        <img src="${image}" class="card-img-top" alt="...">
        <div class="card-body bg-Dark
        ">
            <h5 class="card-title">${slug}</h5>
            <p class="card-text">Release Date:${releaseDate}</p>  
            <p class="card-text">Storage:${mainFeatureStorage}</p>
            <p>
            Display size:${mainFeatureDisplaySize}
            </p>     
        </div>
    </div>`
    }
}