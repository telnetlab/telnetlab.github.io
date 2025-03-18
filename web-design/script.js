const teamMembers = [
    {name: "Telecommunication Network Laboratory", position: "Telkom University"}
];

function generateTeamMembers() {
    const teamGrid = document.getElementById('teamMembers');
    
    teamMembers.forEach((member, index) => {
        const memberHTML = `
            <div class="team-member">
                <div class="member-photo">
                    <img src="https://avatars.githubusercontent.com/u/203100969?v=4,${index}" alt="${member.name}">
                </div>
                <h3>${member.name}</h3>
                <p>${member.position}</p>
                <div class="social-links">
                    <a href="https://github.com/telnetlab"><i class="fab fa-github"></i></a>
                    <a href="mailto:telnetlab@duck.com"><i class="fas fa-envelope"></i></a>
                </div>
            </div>
        `;
        teamGrid.innerHTML += memberHTML;
    });
}

window.onload = generateTeamMembers;