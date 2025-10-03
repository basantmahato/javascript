const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");

const addContactBtn = document.getElementById("addContactBtn");
const contactList = document.getElementById("contactList");
const searchData = document.getElementById("search");

let phonebook = [];

const render = (dataToRender = phonebook) => {
  contactList.innerHTML = "";
  dataToRender.forEach(function (contact) {
    const li = document.createElement("li");
    li.innerHTML = `Name : ${contact.name} Phone: ${contact.phone} Email: ${contact.email}`;
    contactList.appendChild(li);
  });
};

// const renderFiltered = (filtered) => {
//     contactList.innerHTML = ""
//     const filter = filtered || phonebook
//     filter.forEach(function(filter){
//         const li = document.createElement("li")
//         li.innerHTML = `Name : ${filter.name} Phone: ${filter.phone} Email: ${filter.email}`
//         contactList.appendChild(li)
//     })

// }

addContactBtn.addEventListener("click", (e) => {
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  const name = nameInput.value;
  const phone = phoneInput.value;
  const email = emailInput.value;

  console.log(name, phone, email);

  const nameKey = "name";
  const phoneKey = "phone";
  const emailKey = "email";

  let obj = {};

  obj[nameKey] = name;
  obj[phoneKey] = phone;
  obj[emailKey] = email;

  phonebook.push(obj);

  console.log(phonebook);

  render();

  nameInput.value = "";
  phoneInput.value = "";
  emailInput.value = "";
});

function searchContacts(query) {
  console.log(query + "query");
  const filtered = phonebook.filter((contact) =>
    contact.name.toLowerCase().includes(query.toLowerCase())
  );

  console.log(filtered + "filtered");
  render(filtered);
}

searchData.addEventListener("input", (e) => {
  e.preventDefault();
  const searchValue = e.target.value;
  console.log(searchValue);
  searchContacts(searchValue);
});
