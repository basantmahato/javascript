// let uri = "https://www.w3schools.com/jsrEF/jsref_decodeuri.asp"
// let encodedURI = encodeURI(uri)
// let decodedURI = decodeURI(encodedURI)
// console.log("decodedURI")

let uri = "my test.asp?name=ståle&car=saab";
let encoded = encodeURI(uri);
let decoded = decodeURI(encoded);

console.log(decoded)