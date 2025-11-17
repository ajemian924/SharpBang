import { AutoProcessor, AutoModel, env } from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@latest'

// Prevent from trying to Load a model locally
env.allowLocalModels = false

const imageInput = document.getElementById('imageInput');
const resultText = document.getElementById('resultText');

const modelName = 'prithivMLmods/Alphabet-Sign-Language-Detection'
let processor = null
let model = null

try {
    console.log('Attempting to Get Model Processor')
    processor = await AutoProcessor.from_pretrained(modelName)
}
catch(e) {
    console.error(e)
    resultText.innerHTML = `<span style="color: red">${e}</span>`
}

try {
    model = await AutoModel.from_pretrained(modelName)
}
catch(e) {
    console.error(e)
    resultText.innerHTML = `<span style="color: red">${e}</span>`
}

document.getElementById('submissionButton').addEventListener('click', () => {});

if(processor != null && model != null) {
    // Actually do things
}
else {
    console.error(`Model and/or Processor Failed to Load`)
    resultText.innerHTML = `<span style="color: red">Model and/or Processor Failed to Load</span><br><span>View Console for More Details</span>`
}