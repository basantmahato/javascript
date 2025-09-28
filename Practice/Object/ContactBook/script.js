const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");

const addContactBtn = document.getElementById("addContactBtn")
const contactList = document.getElementById("contactList")
const searchData = document.getElementById("search")


let phonebook = []

const render = (filtered) => {
    contactList.innerHTML = ""
    phonebook.forEach(function(phonebook){
        const li = document.createElement("li")
        li.innerHTML = `Name : ${phonebook.name} Phone: ${phonebook.phone} Email: ${phonebook.email}`
        contactList.appendChild(li)
    })

}

addContactBtn.addEventListener('click', ()=>{
    const name = nameInput.value;
    const phone = phoneInput.value;
    const email = emailInput.value;

    console.log(name , phone , email)

    const nameKey = "name"
    const phoneKey = "phone"
    const emailKey = "email"

    let obj = {}

    obj[nameKey] = name
    obj[phoneKey] = phone
    obj[emailKey] = email

    phonebook.push(obj)

    console.log(phonebook)

    render()

    

})


function searchContacts(query) {
    console.log(query + "query")
  const filtered = phonebook.filter(phonebook =>
    phonebook.name.toLowerCase().includes(query.toLowerCase())
  );

  console.log(phonebook.name)
  render(filtered);
}

searchData.addEventListener('input', e => {
    e.preventDefault()
    const searchValue = e.target.value
    console.log(searchValue)
    searchContacts(searchValue);
});
