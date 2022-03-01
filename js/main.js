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
            console.log(phone)
            const div = document.createElement('div')
            div.classList.add('col')
            div.innerHTML = `
        <div class="card h-100">
                <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">Brand:${phone.brand}</p>
                <button onclick="showMore()" type="button" class="btn btn-primary">Show more</button>
                
            </div>
        </div>`
            mainDiv.appendChild(div);
        });
    }
}
const showMore = () => {

}