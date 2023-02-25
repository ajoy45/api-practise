const person = {
    found: 2,
    message: "Found 2 persons",
    result: [
        {
            name: {
                common: "John",
                fullName: ["John", "Doe"]
            },
            age: 32,
            isMale: false,
            address: {
                street: "13/A St Joseph",
                house: 10,
            },
        },
        {
            name: {
                common: "Humayoun",
                fullName: ["Humayoun", "Kabir"]
            },
            age: 33,
            isMale: false,
            address: {
                street: "13/A St Lucia",
                house: 11,
            },
        },
    ]
};
const {result}=person;
const showData=(result)=>{
    const cardContainer=document.getElementById('card-container');
    result.forEach(data=>{
        console.log(data)
         const {name,age,address}=data;
         const div=document.createElement('div');
         div.classList.add('card');
         div.innerHTML=`
                    <h5 class="card-header">person Name:${name.common}</h5>
                    <div class="card-body">
                      <h5 class="card-title">age:${age}</h5>
                      <p class="card-text">street:${address.street}</p>
                      
                    </div>
         `
         cardContainer.appendChild(div)
    })
}
showData(result)