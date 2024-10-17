// profile-script.js

document.addEventListener('DOMContentLoaded', function() {
    // Assuming you have a function to fetch the user's uploaded files from the server
    fetchUserUploadedFiles();
});

function fetchUserUploadedFiles() {
    // Assuming you have a function to fetch user uploaded files from the server
    // For example, using fetch or XMLHttpRequest
    // Once you have the files, update the 'fileList' element in profile.html
    const fileList = document.getElementById('fileList');

    // Example: Display a list of sample files
    const sampleFiles = ['file1.txt', 'image.jpg', 'video.mp4'];

    sampleFiles.forEach(fileName => {
        const listItem = document.createElement('li');
        listItem.textContent = fileName;
        fileList.appendChild(listItem);
    });
}
