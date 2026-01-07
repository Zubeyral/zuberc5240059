// Navigation
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));

        btn.classList.add('active');
        document.getElementById(btn.dataset.section).classList.add('active');
    });
});


// Object Creation
document.getElementById('objCreateBtn').addEventListener('click', () => {
    const player1 = { name: "Faker", game: "LoL", role: "Mid" };

    function Player(name, game, role) {
        this.name = name;
        this.game = game;
        this.role = role;
    }
    const player2 = new Player("s1mple", "CSGO", "AWP");

    class Gamer {
        constructor(name, game, role) {
            this.name = name;
            this.game = game;
            this.role = role;
        }
    }
    const player3 = new Gamer("TenZ", "Valorant", "Duelist");

    document.getElementById('objCreateResult').textContent =
        JSON.stringify({ player1, player2, player3 }, null, 2);
});


// Object Access
document.getElementById('objAccessBtn').addEventListener('click', () => {
    const player = { name: "Zubeyr", game: "JavaScript" };
    player.country = "Somalia";

    document.getElementById('objAccessResult').textContent =
        `Name: ${player.name}\nGame: ${player.game}\nCountry: ${player.country}`;
});


// Object Iteration
document.getElementById('objIterateBtn').addEventListener('click', () => {
    const obj = { a: 1, b: 2, c: 3 };
    let output = "";

    for (let key in obj) {
        output += `${key}: ${obj[key]}\n`;
    }

    document.getElementById('objIterateResult').textContent = output;
});


// JSON
document.getElementById('jsonBtn').addEventListener('click', () => {
    const data = { name: "Zubeyr", skill: "JavaScript" };
    const json = JSON.stringify(data, null, 2);

    document.getElementById('jsonResult').textContent = json;
});


// Run All
document.getElementById('runAllBtn').addEventListener('click', () => {
    document.getElementById('objCreateBtn').click();
    document.getElementById('objAccessBtn').click();
    document.getElementById('objIterateBtn').click();
    document.getElementById('jsonBtn').click();

    document.getElementById('runAllResult').textContent =
        "Dhamaan examples waa la wada orday ✅";
});


// Contact
document.getElementById('submitBtn').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const result = document.getElementById('contactResult');

    result.textContent = name
        ? `Mahadsanid ${name}, fariinta waa la helay 👍`
        : "Fadlan magaca geli";
});