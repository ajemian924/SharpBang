const imageInput = document.getElementById('imageInput');
const resultText = document.getElementById('resultText');

document.getElementById('submissionButton').addEventListener('click', () => {
    // Check if a file has been selected
    if (imageInput.files.length > 0) {
        const formData = new FormData();
        formData.append('file', imageInput.files[0]);

        // Send request through CORS proxy
        fetch('https://cors-anywhere.herokuapp.com/https://huggingface.co/spaces/sairusses/alphabet-sign-api/predict', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log('Prediction Result:', data);

            // Assuming the API response includes predicted_letter and confidence fields
            if (data.predicted_letter && data.confidence) {
                resultText.innerText = `Prediction: ${data.predicted_letter} (Confidence: ${data.confidence})`;
            } else {
                resultText.innerText = `Error: Unable to retrieve prediction.`;
            }
        })
        .catch(error => {
            console.error('Error:', error);
            resultText.innerText = `Error: ${error.message}`;
        });
    } else {
        resultText.innerText = 'Error: No image selected. Please input an image.';
    }
});
