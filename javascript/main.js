import { pipeline, env } from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.6.0';

env.allowLocalModels = false

const imageInput = document.getElementById('imageInput')
const resultText = document.getElementById('resultText')

resultText.innerText = 'Loading Model...'
let model = null
try {
    model = await pipeline('image-classification','Abuzaid01/asl-sign-language-classifier')
}
catch(e) {
    resultText.innerHTML = `Model Failed to Load: <span style="color: red">${e}</span>`
}

if (model !== null) {
    // Actually Allow the Program to Run

}