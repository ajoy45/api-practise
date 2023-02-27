const loadUsers=async()=>{
    const url=`https://randomuser.me/api/`;
    const res=await fetch(url);
    const data=await res.json();
    showUser(data.results)

}
const showUser=(users)=>{
    const usersContainer=document.getElementById('users-container');
    users.forEach(user=>{
        const div=document.createElement('div');
        div.innerHTML=`
        <img src="${user.picture.thumbnail}" alt="">
        <h1>Name:${user.name.title} ${user.name.first} ${user.name.last} </h1>
        <h1>Number:${user.phone}</h1>
        <h1>Email:${user.email}</h1>
        <h1>Age:${user.registered.age}</h1>
        `
        usersContainer.appendChild(div)
    })
       
}
loadUsers()