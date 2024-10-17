// view-script.js

document.addEventListener('DOMContentLoaded', function() {
    // Fetch and display projects
    fetchProjects();
});

function fetchProjects() {
    // Assuming you have a function to fetch projects from the server
    // For example, using fetch or XMLHttpRequest
    // Once you have the projects, update the 'projectList' element in view.html
    const projectList = document.getElementById('projectList');

    // Example: Display a list of sample projects
    const sampleProjects = [
        { title: 'Project 1', description: 'Description of Project 1', owner: 'John Doe' },
        { title: 'Project 2', description: 'Description of Project 2', owner: 'Jane Smith' },
        // Add more projects as needed
    ];

    sampleProjects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');

        projectDiv.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <p>Owner: ${project.owner}</p>
        `;

        projectList.appendChild(projectDiv);
    });
}
