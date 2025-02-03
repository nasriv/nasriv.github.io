const projects = [
    {
        title: 'JL Zombies',
        description: '2D Platformer game built using PyGame package',
        image: 'images/project-images/splash_screen1.png',
        github: 'https://github.com/nasriv/JLZombies'
    },
    {
        title: 'NYC Gas Consumption Analysis',
        description: 'Data visualization of NYC gas consumption patterns',
        image: 'images/project-images/Gas_Consump_ZIP.png',
        github: 'https://github.com/nasriv/NYC_GasUsage'
    },
    // Add more projects as needed
];

function createProjectCard(project) {
    return `
        <div class="project-card">
            <img src="${project.image}" alt="${project.title}">
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.github}" class="project-link" target="_blank">View on GitHub</a>
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    const projectsContainer = document.getElementById('projectsContainer');
    projectsContainer.innerHTML = projects.map(createProjectCard).join('');
});
