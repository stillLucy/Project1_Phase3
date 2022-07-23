import.meta.env.VITE_API_KEY


const api = document.getElementById('api');
const title = document.getElementById('title');
const imdb = document.getElementByyId('imdb');
const input = document.getElementByyId('input');
const year = document.getElementById('year');
const short = document.getElementById (short);
const long = document.getElementByyId('long');
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
let messages = []
if (api.value === '' || api.value == null) {
messages.push("API required")
}

if (year.value >=2023) {
messages.push("Please Select Relevant Year")
}
e. preventDefault()
errorElement.innerText = messages.join(', ')

}
