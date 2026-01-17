fetch('https://api.github.com/users/ahmination/repos')
  .then(response => response.json())
  .then(repos => {
    const projectsDiv = document.getElementById('projects');
    projectsDiv.innerHTML = ''; // Clear "Loading..." message
    
    repos.forEach(repo => {
      projectsDiv.innerHTML += `
        <div class="project">
          <h3>${repo.name}</h3>
          <p>${repo.description || 'No description'}</p>
          <a href="${repo.html_url}" target="_blank">View on GitHub</a>
        </div>
      `;
    });
  });
