// Assuming you have an event listener for the form submission
document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);

    // Assuming you have a function to handle the file upload (e.g., using fetch or XMLHttpRequest)
    uploadFile(formData);
});

function uploadFile(formData) {
    // Assuming you have server-side logic to handle the file upload
    // Once the upload is complete, display a success message

    // For example, if the upload is successful:
    const uploadStatus = document.getElementById('uploadStatus');
    uploadStatus.textContent = 'File(s) uploaded successfully!';
}
