
const countryLoadByRegion=(region)=>{
    
    const urlAll=`https://restcountries.com/v3.1/all`;
    const urlRegion=`https://restcountries.com/v3.1/region/${region}`
    const type=region=="All" ?urlAll:urlRegion;
    fetch(type)
    .then(res=>res.json())
    .then(data=>showCounterByRegion(data))
}
const showCounterByRegion=(countries)=>{
    
    const cardContainer=document.getElementById('card-container');
     cardContainer.innerHTML=''
     countries.forEach(country=>{
        console.log(country)
        const div=document.createElement('div');

        // selection field set
        // const newOption = document.createElement('option');
        // console.log(newOption)
        // const optionText = document.createTextNode(`${country.region}`);
        // newOption.appendChild(optionText);
        // newOption.setAttribute('value',`${country.region}`);

        div.classList.add('card');
        div.innerHTML=`
                 <img src="${country.flags.png}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${country.name.common}</h5>
                      <p class="card-text">${country.name.official}</p>
                      <a href="#" class="btn btn-primary">Details</a>
                    </div>
        `
        cardContainer.appendChild(div)
        
     })
     
}



const getSelectionItem=()=>{
    const selectionField=document.getElementById('selection');
    const value=selectionField.value;
    countryLoadByRegion(value)
}


