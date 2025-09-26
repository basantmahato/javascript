const searchTerm = "sci-fi & fantasy books/films";

const baseURL = "https://example.com/search";


const unsafeURL = baseURL + "?q=" + searchTerm;

console.log("--- Unsafe URL (DO NOT USE) ---");
console.log(unsafeURL);
console.log("-".repeat(30));

const encodedSearchTerm = encodeURIComponent(searchTerm);

const safeURL = baseURL + "?q=" + encodedSearchTerm;

console.log("--- Safe URL (CORRECT) ---");
console.log(encodedSearchTerm);
console.log(safeURL);