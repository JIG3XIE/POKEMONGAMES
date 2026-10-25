// Database with shape property ('square' for GB/GBC/GBA/DS, 'rect' for 3DS, 'tall' for Switch)
const gamesData = [
    // Gen 1 (Game Boy - Square)
    { id: 'red', name: 'Pokémon Red', gen: 1, shape: 'square', cover: 'covers/red.jpg', prices: { loose: 63, cib: 392 } },
    { id: 'blue', name: 'Pokémon Blue', gen: 1, shape: 'square', cover: 'covers/blue.jpg', prices: { loose: 55, cib: 325 } },
    { id: 'yellow', name: 'Pokémon Yellow', gen: 1, shape: 'square', cover: 'covers/yellow.jpg', prices: { loose: 55, cib: 325 } },

    // Gen 2 (GBC - Square)
    { id: 'gold', name: 'Pokémon Gold', gen: 2, shape: 'square', cover: 'covers/gold.jpg', prices: { loose: 60, cib: 256 } },
    { id: 'silver', name: 'Pokémon Silver', gen: 2, shape: 'square', cover: 'covers/silver.jpg', prices: { loose: 49, cib: 325 } },
    { id: 'crystal', name: 'Pokémon Crystal', gen: 2, shape: 'square', cover: 'covers/crystal.jpg', prices: { loose: 120, cib: 350 } },

    // Gen 3 (GBA - Square)
    { id: 'ruby', name: 'Pokémon Ruby', gen: 3, shape: 'square', cover: 'covers/ruby.jpg', prices: { loose: 89, cib: 386 } },
    { id: 'sapphire', name: 'Pokémon Sapphire', gen: 3, shape: 'square', cover: 'covers/sapphire.jpg', prices: { loose: 81, cib: 297 } },
    { id: 'emerald', name: 'Pokémon Emerald', gen: 3, shape: 'square', cover: 'covers/emerald.jpg', prices: { loose: 231, cib: 749 } },
    { id: 'firered', name: 'Pokémon FireRed', gen: 3, shape: 'square', cover: 'covers/firered.jpg', prices: { loose: 105, cib: 350 } },
    { id: 'leafgreen', name: 'Pokémon LeafGreen', gen: 3, shape: 'square', cover: 'covers/leafgreen.jpg', prices: { loose: 100, cib: 440 } },

    // Gen 4 (DS - Square)
    { id: 'diamond', name: 'Pokémon Diamond', gen: 4, shape: 'square', cover: 'covers/diamond.jpg', prices: { loose: 35, cib: 74 } },
    { id: 'pearl', name: 'Pokémon Pearl', gen: 4, shape: 'square', cover: 'covers/pearl.jpg', prices: { loose: 42, cib: 84 } },
    { id: 'platinum', name: 'Pokémon Platinum', gen: 4, shape: 'square', cover: 'covers/platinum.jpg', prices: { loose: 112, cib: 177 } },
    { id: 'heartgold', name: 'Pokémon HeartGold', gen: 4, shape: 'square', cover: 'covers/heartgold.jpg', prices: { loose: 250, cib: 493 } },
    { id: 'soulsilver', name: 'Pokémon SoulSilver', gen: 4, shape: 'square', cover: 'covers/soulsilver.jpg', prices: { loose: 145, cib: 200 } },

    // Gen 5 (DS - Square)
    { id: 'black', name: 'Pokémon Black', gen: 5, shape: 'square', cover: 'covers/black.jpg', prices: { loose: 81, cib: 122 } },
    { id: 'white', name: 'Pokémon White', gen: 5, shape: 'square', cover: 'covers/white.jpg', prices: { loose: 76, cib: 110 } },
    { id: 'black2', name: 'Pokémon Black 2', gen: 5, shape: 'square', cover: 'covers/black2.jpg', prices: { loose: 150, cib: 210 } },
    { id: 'white2', name: 'Pokémon White 2', gen: 5, shape: 'square', cover: 'covers/white2.jpg', prices: { loose: 143, cib: 192 } },

    // Gen 6 (3DS - Rectangle)
    { id: 'x', name: 'Pokémon X', gen: 6, shape: 'rect', cover: 'covers/x.jpg', prices: { loose: 34, cib: 39 } },
    { id: 'y', name: 'Pokémon Y', gen: 6, shape: 'rect', cover: 'covers/y.jpg', prices: { loose: 33, cib: 40 } },
    { id: 'omegaruby', name: 'Pokémon Omega Ruby', gen: 6, shape: 'rect', cover: 'covers/omegaruby.jpg', prices: { loose: 38, cib: 45 } },
    { id: 'alphasapphire', name: 'Pokémon Alpha Sapphire', gen: 6, shape: 'rect', cover: 'covers/alphasapphire.jpg', prices: { loose: 36, cib: 46 } },

    // Gen 7 (3DS & Switch)
    { id: 'sun', name: 'Pokémon Sun', gen: 7, shape: 'rect', cover: 'covers/sun.jpg', prices: { loose: 18, cib: 24 } },
    { id: 'moon', name: 'Pokémon Moon', gen: 7, shape: 'rect', cover: 'covers/moon.jpg', prices: { loose: 20, cib: 25 } },
    { id: 'ultrasun', name: 'Pokémon Ultra Sun', gen: 7, shape: 'rect', cover: 'covers/ultrasun.jpg', prices: { loose: 43, cib: 49 } },
    { id: 'ultramoon', name: 'Pokémon Ultra Moon', gen: 7, shape: 'rect', cover: 'covers/ultramoon.jpg', prices: { loose: 45, cib: 55 } },
    { id: 'letsgo_pikachu', name: "Pokémon: Let's Go, Pikachu!", gen: 7, shape: 'tall', cover: 'covers/letsgo_pikachu.jpg', prices: { loose: 30, cib: 32, new: 60 } },
    { id: 'letsgo_eevee', name: "Pokémon: Let's Go, Eevee!", gen: 7, shape: 'tall', cover: 'covers/letsgo_eevee.jpg', prices: { loose: 31, cib: 35, new: 60 } },

    // Gen 8 (Switch - Tall)
    { id: 'sword', name: 'Pokémon Sword', gen: 8, shape: 'tall', cover: 'covers/sword.jpg', prices: { loose: 28, cib: 34, new: 44 } },
    { id: 'shield', name: 'Pokémon Shield', gen: 8, shape: 'tall', cover: 'covers/shield.jpg', prices: { loose: 31, cib: 35, new: 52 } },
    { id: 'brilliant_diamond', name: 'Pokémon Brilliant Diamond', gen: 8, shape: 'tall', cover: 'covers/brilliant_diamond.jpg', prices: { loose: 35, cib: 38, new: 41 } },
    { id: 'shining_pearl', name: 'Pokémon Shining Pearl', gen: 8, shape: 'tall', cover: 'covers/shining_pearl.jpg', prices: { loose: 32, cib: 34, new: 40 } },
    { id: 'bdsp_double', name: 'BDSP Double Pack', gen: 8, shape: 'tall', cover: 'covers/bdsp_double.jpg', prices: { loose: 86, cib: 87, new: 105 } },

    // Gen 9 (Switch - Tall)
    { id: 'scarlet', name: 'Pokémon Scarlet', gen: 9, shape: 'tall', cover: 'covers/scarlet.jpg', prices: { loose: 32, cib: 35, new: 40 } },
    { id: 'violet', name: 'Pokémon Violet', gen: 9, shape: 'tall', cover: 'covers/violet.jpg', prices: { loose: 38, cib: 40, new: 45 } },
    { id: 'sc_vi_double', name: 'Scarlet & Violet Double Pack', gen: 9, shape: 'tall', cover: 'covers/sc_vi_double.jpg', prices: { loose: 83, cib: 88, new: 98 } }
];

// Load progress from browser storage
let collection = JSON.parse(localStorage.getItem('pokemonTrackerDB_v9')) || {};

function saveCollection() {
    localStorage.setItem('pokemonTrackerDB_v9', JSON.stringify(collection));
    updateSummary();
}

function init() {
    setupNav();
    updateSummary();
    showView('summary-view');
}

function setupNav() {
    const genNav = document.getElementById('gen-buttons');
    const gens = [...new Set(gamesData.map(g => g.gen))].sort((a, b) => a - b);
    
    genNav.innerHTML = '';

    gens.forEach(gen => {
        const btn = document.createElement('button');
        btn.textContent = `Gen ${gen}`;
        btn.onclick = () => loadGeneration(gen);
        genNav.appendChild(btn);
    });

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
    let totalItems = 0;
    let collectedItems = 0;
    const missingList = document.getElementById('missing-list');
    missingList.innerHTML = '';

    gamesData.forEach(game => {
        let gameHasUnowned = false;
        
        Object.keys(game.prices).forEach(condition => {
            totalItems++;
            const itemKey = `${game.id}_${condition}`;
            
            if (collection[itemKey]) {
                collectedItems++;
            } else {
                gameHasUnowned = true;
            }
        });

        // Display only the game name on the overview homepage if it has any unowned variants
        if (gameHasUnowned) {
            const li = document.createElement('li');
            li.textContent = game.name;
            missingList.appendChild(li);
        }
    });

    document.getElementById('collected-stat').textContent = `Items Owned: ${collectedItems}`;
    document.getElementById('missing-stat').textContent = `Items Missing: ${totalItems - collectedItems}`;
}

function loadGeneration(gen) {
    showView('gen-view');
    document.getElementById('current-gen-title').textContent = `Generation ${gen}`;
    
    const gamesList = document.getElementById('games-list');
    gamesList.innerHTML = '';
    
    const genGames = gamesData.filter(g => g.gen === gen);
    
    genGames.forEach(game => {
        const card = document.createElement('div');
        card.className = 'game-card';
        
        let conditionsHTML = '';
        Object.entries(game.prices).forEach(([cond, price]) => {
            const itemKey = `${game.id}_${cond}`;
            const isChecked = collection[itemKey] || false;
            
            conditionsHTML += `
                <div class="condition-item ${isChecked ? 'owned' : ''}">
                    <span class="condition-label">${cond.toUpperCase()}:</span>
                    <span class="price">$${price}</span>
                    <input type="checkbox" ${isChecked ? 'checked' : ''} 
                           onchange="toggleCondition('${itemKey}', this)">
                </div>
            `;
        });

        card.innerHTML = `
            <img src="${game.cover}" alt="${game.name}" class="cover-art ${game.shape}" onerror="this.src='https://via.placeholder.com/80x100?text=No+Cover'">
            <div class="game-info">
                <h3>${game.name}</h3>
                <div class="conditions-list">
                    ${conditionsHTML}
                </div>
            </div>
        `;
        gamesList.appendChild(card);
    });
}

window.toggleCondition = function(itemKey, checkbox) {
    collection[itemKey] = checkbox.checked;
    saveCollection();
    
    const parentItem = checkbox.closest('.condition-item');
    if (checkbox.checked) {
        parentItem.classList.add('owned');
    } else {
        parentItem.classList.remove('owned');
    }
};

init();
