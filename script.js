// Database with local cover paths and rounded pricing
const gamesData = [
    // Gen 1
    { id: 'red', name: 'Pokémon Red', gen: 1, cover: 'covers/red.jpg', prices: { loose: 63, cib: 392 } },[span_36](start_span)[span_36](end_span)
    { id: 'blue', name: 'Pokémon Blue', gen: 1, cover: 'covers/blue.jpg', prices: { loose: 55, cib: 325 } },[span_37](start_span)[span_37](end_span)
    { id: 'yellow', name: 'Pokémon Yellow', gen: 1, cover: 'covers/yellow.jpg', prices: { loose: 55, cib: 325 } },[span_38](start_span)[span_38](end_span)

    // Gen 2
    { id: 'gold', name: 'Pokémon Gold', gen: 2, cover: 'covers/gold.jpg', prices: { loose: 60, cib: 256 } },[span_39](start_span)[span_39](end_span)
    { id: 'silver', name: 'Pokémon Silver', gen: 2, cover: 'covers/silver.jpg', prices: { loose: 49, cib: 325 } },[span_40](start_span)[span_40](end_span)
    { id: 'crystal', name: 'Pokémon Crystal', gen: 2, cover: 'covers/crystal.jpg', prices: { loose: 120, cib: 350 } },

    // Gen 3
    { id: 'ruby', name: 'Pokémon Ruby', gen: 3, cover: 'covers/ruby.jpg', prices: { loose: 89, cib: 386 } },[span_41](start_span)[span_41](end_span)
    { id: 'sapphire', name: 'Pokémon Sapphire', gen: 3, cover: 'covers/sapphire.jpg', prices: { loose: 81, cib: 297 } },[span_42](start_span)[span_42](end_span)
    { id: 'emerald', name: 'Pokémon Emerald', gen: 3, cover: 'covers/emerald.jpg', prices: { loose: 231, cib: 749 } },[span_43](start_span)[span_43](end_span)
    { id: 'firered', name: 'Pokémon FireRed', gen: 3, cover: 'covers/firered.jpg', prices: { loose: 105, cib: 350 } },[span_44](start_span)[span_44](end_span)
    { id: 'leafgreen', name: 'Pokémon LeafGreen', gen: 3, cover: 'covers/leafgreen.jpg', prices: { loose: 100, cib: 440 } },[span_45](start_span)[span_45](end_span)

    // Gen 4
    { id: 'diamond', name: 'Pokémon Diamond', gen: 4, cover: 'covers/diamond.jpg', prices: { loose: 35, cib: 74 } },[span_46](start_span)[span_46](end_span)
    { id: 'pearl', name: 'Pokémon Pearl', gen: 4, cover: 'covers/pearl.jpg', prices: { loose: 42, cib: 84 } },[span_47](start_span)[span_47](end_span)
    { id: 'platinum', name: 'Pokémon Platinum', gen: 4, cover: 'covers/platinum.jpg', prices: { loose: 112, cib: 177 } },[span_48](start_span)[span_48](end_span)
    { id: 'heartgold', name: 'Pokémon HeartGold', gen: 4, cover: 'covers/heartgold.jpg', prices: { loose: 250, cib: 493 } },[span_49](start_span)[span_49](end_span)
    { id: 'soulsilver', name: 'Pokémon SoulSilver', gen: 4, cover: 'covers/soulsilver.jpg', prices: { loose: 145, cib: 200 } },[span_50](start_span)[span_50](end_span)

    // Gen 5
    { id: 'black', name: 'Pokémon Black', gen: 5, cover: 'covers/black.jpg', prices: { loose: 81, cib: 122 } },[span_51](start_span)[span_51](end_span)
    { id: 'white', name: 'Pokémon White', gen: 5, cover: 'covers/white.jpg', prices: { loose: 76, cib: 110 } },[span_52](start_span)[span_52](end_span)
    { id: 'black2', name: 'Pokémon Black 2', gen: 5, cover: 'covers/black2.jpg', prices: { loose: 150, cib: 210 } },[span_53](start_span)[span_53](end_span)
    { id: 'white2', name: 'Pokémon White 2', gen: 5, cover: 'covers/white2.jpg', prices: { loose: 143, cib: 192 } },[span_54](start_span)[span_54](end_span)

    // Gen 6
    { id: 'x', name: 'Pokémon X', gen: 6, cover: 'covers/x.jpg', prices: { loose: 34, cib: 39 } },[span_55](start_span)[span_55](end_span)
    { id: 'y', name: 'Pokémon Y', gen: 6, cover: 'covers/y.jpg', prices: { loose: 33, cib: 40 } },[span_56](start_span)[span_56](end_span)
    { id: 'omegaruby', name: 'Pokémon Omega Ruby', gen: 6, cover: 'covers/omegaruby.jpg', prices: { loose: 38, cib: 45 } },[span_57](start_span)[span_57](end_span)
    { id: 'alphasapphire', name: 'Pokémon Alpha Sapphire', gen: 6, cover: 'covers/alphasapphire.jpg', prices: { loose: 36, cib: 46 } },[span_58](start_span)[span_58](end_span)

    // Gen 7
    { id: 'sun', name: 'Pokémon Sun', gen: 7, cover: 'covers/sun.jpg', prices: { loose: 18, cib: 24 } },[span_59](start_span)[span_59](end_span)
    { id: 'moon', name: 'Pokémon Moon', gen: 7, cover: 'covers/moon.jpg', prices: { loose: 20, cib: 25 } },[span_60](start_span)[span_60](end_span)
    { id: 'ultrasun', name: 'Pokémon Ultra Sun', gen: 7, cover: 'covers/ultrasun.jpg', prices: { loose: 43, cib: 49 } },[span_61](start_span)[span_61](end_span)
    { id: 'ultramoon', name: 'Pokémon Ultra Moon', gen: 7, cover: 'covers/ultramoon.jpg', prices: { loose: 45, cib: 55 } },[span_62](start_span)[span_62](end_span)
    { id: 'letsgo_pikachu', name: "Pokémon: Let's Go, Pikachu!", gen: 7, cover: 'covers/letsgo_pikachu.jpg', prices: { loose: 30, cib: 32, new: 60 } },[span_63](start_span)[span_63](end_span)
    { id: 'letsgo_eevee', name: "Pokémon: Let's Go, Eevee!", gen: 7, cover: 'covers/letsgo_eevee.jpg', prices: { loose: 31, cib: 35, new: 60 } },[span_64](start_span)[span_64](end_span)

    // Gen 8
    { id: 'sword', name: 'Pokémon Sword', gen: 8, cover: 'covers/sword.jpg', prices: { loose: 28, cib: 34, new: 44 } },[span_65](start_span)[span_65](end_span)
    { id: 'shield', name: 'Pokémon Shield', gen: 8, cover: 'covers/shield.jpg', prices: { loose: 31, cib: 35, new: 52 } },[span_66](start_span)[span_66](end_span)
    { id: 'brilliant_diamond', name: 'Pokémon Brilliant Diamond', gen: 8, cover: 'covers/brilliant_diamond.jpg', prices: { loose: 35, cib: 38, new: 41 } },[span_67](start_span)[span_67](end_span)
    { id: 'shining_pearl', name: 'Pokémon Shining Pearl', gen: 8, cover: 'covers/shining_pearl.jpg', prices: { loose: 32, cib: 34, new: 40 } },[span_68](start_span)[span_68](end_span)
    { id: 'bdsp_double', name: 'BDSP Double Pack', gen: 8, cover: 'covers/bdsp_double.jpg', prices: { loose: 86, cib: 87, new: 105 } },[span_69](start_span)[span_69](end_span)

    // Gen 9
    { id: 'scarlet', name: 'Pokémon Scarlet', gen: 9, cover: 'covers/scarlet.jpg', prices: { loose: 32, cib: 35, new: 40 } },[span_70](start_span)[span_70](end_span)[span_71](start_span)[span_71](end_span)
    { id: 'violet', name: 'Pokémon Violet', gen: 9, cover: 'covers/violet.jpg', prices: { loose: 38, cib: 40, new: 45 } },[span_72](start_span)[span_72](end_span)
    { id: 'sc_vi_double', name: 'Scarlet & Violet Double Pack', gen: 9, cover: 'covers/sc_vi_double.jpg', prices: { loose: 83, cib: 88, new: 98 } }[span_73](start_span)[span_73](end_span)
];

// Load progress from browser storage
let collection = JSON.parse(localStorage.getItem('pokemonTrackerDB_v6')) || {};

function saveCollection() {
    localStorage.setItem('pokemonTrackerDB_v6', JSON.stringify(collection));
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
        Object.keys(game.prices).forEach(condition => {
            totalItems++;
            const itemKey = `${game.id}_${condition}`;
            
            if (collection[itemKey]) {
                collectedItems++;
            } else {
                const li = document.createElement('li');
                li.textContent = `${game.name} (${condition.toUpperCase()})`;
                missingList.appendChild(li);
            }
        });
    });

    document.getElementById('collected-stat').textContent = `Owned: ${collectedItems}`;
    document.getElementById('missing-stat').textContent = `Missing: ${totalItems - collectedItems}`;
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
            <img src="${game.cover}" alt="${game.name}" class="cover-art" onerror="this.src='https://via.placeholder.com/80x100?text=No+Cover'">
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
