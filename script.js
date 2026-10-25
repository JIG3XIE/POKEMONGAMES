// Database of games
const gamesData = [
    { id: 'red', name: 'Pokémon Red', gen: 1, price: 60 },
    { id: 'blue', name: 'Pokémon Blue', gen: 1, price: 60 },
    { id: 'yellow', name: 'Pokémon Yellow', gen: 1, price: 70 },
    { id: 'gold', name: 'Pokémon Gold', gen: 2, price: 65 },
    { id: 'silver', name: 'Pokémon Silver', gen: 2, price: 65 },
    { id: 'crystal', name: 'Pokémon Crystal', gen: 2, price: 120 },
    { id: 'ruby', name: 'Pokémon Ruby', gen: 3, price: 80 },
    { id: 'sapphire', name: 'Pokémon Sapphire', gen: 3, price: 80 },
    { id: 'emerald', name: 'Pokémon Emerald', gen: 3, price: 190 },
    { id: 'firered', name: 'Pokémon FireRed', gen: 3, price: 110 },
    { id: 'leafgreen', name: 'Pokémon LeafGreen', gen: 3, price: 110 },
    { id: 'diamond', name: 'Pokémon Diamond', gen: 4, price: 45 },
    { id: 'pearl', name: 'Pokémon Pearl', gen: 4, price: 40 },
    { id: 'platinum', name: 'Pokémon Platinum', gen: 4, price: 100 },
    { id: 'heartgold', name: 'Pokémon HeartGold', gen: 4, price: 160 },
    { id: 'soulsilver', name: 'Pokémon SoulSilver', gen: 4, price: 150 },
    { id: 'black', name: 'Pokémon Black', gen: 5, price: 95 },
    { id: 'white', name: 'Pokémon White', gen: 5, price: 95 },
    { id: 'black2', name: 'Pokémon Black Version 2', gen: 5, price: 150 },
    { id: 'white2', name: 'Pokémon White Version 2', gen: 5, price: 150 },
    { id: 'x', name: 'Pokémon X', gen: 6, price: 35 },
    { id: 'y', name: 'Pokémon Y', gen: 6, price: 35 },
    { id: 'omegaruby', name: 'Pokémon Omega Ruby', gen: 6, price: 45 },
    { id: 'alphasapphire', name: 'Pokémon Alpha Sapphire', gen: 6, price: 45 },
    { id: 'sun', name: 'Pokémon Sun', gen: 7, price: 25 },
    { id: 'moon', name: 'Pokémon Moon', gen: 7, price: 25 },
    { id: 'ultrasun', name: 'Pokémon Ultra Sun', gen: 7, price: 40 },
    { id: 'ultramoon', name: 'Pokémon Ultra Moon', gen: 7, price: 40 }
];

// Load saved collection from local storage
let collection = JSON.parse(localStorage.getItem('pokemonTrackerDB')) || {};

function saveCollection() {
    localStorage.setItem('pokemonTrackerDB', JSON.stringify(collection));
    updateSummary();
}

function init() {
    setupNav();
    updateSummary();
    showView('summary-view');
}

function setupNav() {
    const genNav = document.getElementById('gen-buttons');
    const gens = [...new Set(gamesData.map(g => g.gen))]; // Extract unique generations
    
    gens.forEach(gen => {
        const btn = document.createElement('button');
        btn.textContent = `Gen ${gen}`;
        btn.onclick = () => loadGeneration(gen);
        genNav.appendChild(btn);
    });

    // Home button logic
    document.getElementById('home-btn').onclick = () => {
        updateSummary();
        showView('summary-view');
    };
}

function showView(viewId) {
    document.getElementById('summary-view').classList.add('hidden');
    document.getElementById('gen-view').classList.add('hidden');
    document.getElementById(viewId).classList.remove('hidden');
}

function updateSummary() {
    const total = gamesData.length;
    const collectedCount = Object.values(collection).filter(v => v).length;
    
    document.getElementById('collected-stat').textContent = `Bought: ${collectedCount}`;
    document.getElementById('missing-stat').textContent = `Missing: ${total - collectedCount}`;
    
    const missingList = document.getElementById('missing-list');
    missingList.innerHTML = '';
    
    gamesData.forEach(game => {
        if (!collection[game.id]) {
            const li = document.createElement('li');
            li.textContent = game.name;
            missingList.appendChild(li);
        }
    });
}

function loadGeneration(gen) {
    showView('gen-view');
    document.getElementById('current-gen-title').textContent = `Generation ${gen}`;
    
    const gamesList = document.getElementById('games-list');
    gamesList.innerHTML = '';
    
    const genGames = gamesData.filter(g => g.gen === gen);
    
    genGames.forEach(game => {
        const isCollected = collection[game.id];
        const card = document.createElement('div');
        card.className = `game-card ${isCollected ? 'collected' : ''}`;
        
        card.innerHTML = `
            <div class="game-info">
                <h3>${game.name}</h3>
                <span class="price">Est. Market: $${game.price}</span>
            </div>
            <input type="checkbox" ${isCollected ? 'checked' : ''} 
                   onchange="toggleGame('${game.id}', this)">
        `;
        gamesList.appendChild(card);
    });
}

// Global function to handle checkbox clicks
window.toggleGame = function(id, checkbox) {
    collection[id] = checkbox.checked;
    saveCollection();
    
    const card = checkbox.closest('.game-card');
    if (checkbox.checked) {
        card.classList.add('collected');
    } else {
        card.classList.remove('collected');
    }
};

// Start the app
init();
