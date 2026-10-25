// Database organized by Generation 1 through 9 with rounded pricing
const gamesData = [
    // Gen 1
    {
        id: 'red', name: 'Pokémon Red', gen: 1,
        cover: 'https://upload.wikimedia.org/wikipedia/en/a/af/Pokemon_Red_Box.jpg',
        prices: { loose: 63, cib: 392 } //[span_7](start_span)[span_7](end_span)
    },
    {
        id: 'blue', name: 'Pokémon Blue', gen: 1,
        cover: 'https://upload.wikimedia.org/wikipedia/en/1/16/Pokemon_Blue_Box.jpg',
        prices: { loose: 55, cib: 325 } //[span_8](start_span)[span_8](end_span)
    },
    {
        id: 'yellow', name: 'Pokémon Yellow', gen: 1,
        cover: 'https://upload.wikimedia.org/wikipedia/en/9/95/Pokemon_Yellow_Box.jpg',
        prices: { loose: 55, cib: 325 } //[span_9](start_span)[span_9](end_span)
    },

    // Gen 2
    {
        id: 'gold', name: 'Pokémon Gold', gen: 2,
        cover: 'https://upload.wikimedia.org/wikipedia/en/2/29/Pokemon_Gold_Box.jpg',
        prices: { loose: 60, cib: 256 } //[span_10](start_span)[span_10](end_span)
    },
    {
        id: 'silver', name: 'Pokémon Silver', gen: 2,
        cover: 'https://upload.wikimedia.org/wikipedia/en/3/30/Pokemon_Silver_Box.jpg',
        prices: { loose: 49, cib: 325 } //[span_11](start_span)[span_11](end_span)
    },
    {
        id: 'crystal', name: 'Pokémon Crystal', gen: 2,
        cover: 'https://upload.wikimedia.org/wikipedia/en/c/c5/Pokemon_Crystal_Box.jpg',
        prices: { loose: 120, cib: 350 }
    },

    // Gen 3
    {
        id: 'ruby', name: 'Pokémon Ruby', gen: 3,
        cover: 'https://upload.wikimedia.org/wikipedia/en/2/20/Pokemon_Ruby_Box.jpg',
        prices: { loose: 89, cib: 386 } //[span_12](start_span)[span_12](end_span)
    },
    {
        id: 'sapphire', name: 'Pokémon Sapphire', gen: 3,
        cover: 'https://upload.wikimedia.org/wikipedia/en/1/11/Pokemon_Sapphire_Box.jpg',
        prices: { loose: 81, cib: 297 } //[span_13](start_span)[span_13](end_span)
    },
    {
        id: 'emerald', name: 'Pokémon Emerald', gen: 3,
        cover: 'https://upload.wikimedia.org/wikipedia/en/5/52/Pokemon_Emerald_Box.jpg',
        prices: { loose: 231, cib: 749 } //[span_14](start_span)[span_14](end_span)
    },
    {
        id: 'firered', name: 'Pokémon FireRed', gen: 3,
        cover: 'https://upload.wikimedia.org/wikipedia/en/7/7e/Pokemon_FireRed_Box.jpg',
        prices: { loose: 105, cib: 350 } //[span_15](start_span)[span_15](end_span)
    },
    {
        id: 'leafgreen', name: 'Pokémon LeafGreen', gen: 3,
        cover: 'https://upload.wikimedia.org/wikipedia/en/f/f6/Pokemon_LeafGreen_Box.jpg',
        prices: { loose: 100, cib: 440 } //[span_16](start_span)[span_16](end_span)
    },

    // Gen 4
    {
        id: 'diamond', name: 'Pokémon Diamond', gen: 4,
        cover: 'https://upload.wikimedia.org/wikipedia/en/b/ba/Pokemon_Diamond_Box.jpg',
        prices: { loose: 35, cib: 74 } //[span_17](start_span)[span_17](end_span)
    },
    {
        id: 'pearl', name: 'Pokémon Pearl', gen: 4,
        cover: 'https://upload.wikimedia.org/wikipedia/en/3/36/Pokemon_Pearl_Box.jpg',
        prices: { loose: 42, cib: 84 } //[span_18](start_span)[span_18](end_span)
    },
    {
        id: 'platinum', name: 'Pokémon Platinum', gen: 4,
        cover: 'https://upload.wikimedia.org/wikipedia/en/3/3d/Pokemon_Platinum_Box.jpg',
        prices: { loose: 112, cib: 177 } //[span_19](start_span)[span_19](end_span)
    },
    {
        id: 'heartgold', name: 'Pokémon HeartGold', gen: 4,
        cover: 'https://upload.wikimedia.org/wikipedia/en/2/24/Pokemon_HeartGold_Box.jpg',
        prices: { loose: 250, cib: 493 } //[span_20](start_span)[span_20](end_span)
    },
    {
        id: 'soulsilver', name: 'Pokémon SoulSilver', gen: 4,
        cover: 'https://upload.wikimedia.org/wikipedia/en/d/df/Pokemon_SoulSilver_Box.jpg',
        prices: { loose: 145, cib: 200 } //[span_21](start_span)[span_21](end_span)
    },

    // Gen 5
    {
        id: 'black', name: 'Pokémon Black', gen: 5,
        cover: 'https://upload.wikimedia.org/wikipedia/en/0/07/Pokemon_Black_Box.jpg',
        prices: { loose: 81, cib: 122 } //[span_22](start_span)[span_22](end_span)
    },
    {
        id: 'white', name: 'Pokémon White', gen: 5,
        cover: 'https://upload.wikimedia.org/wikipedia/en/2/2d/Pokemon_White_Box.jpg',
        prices: { loose: 76, cib: 110 } //[span_23](start_span)[span_23](end_span)
    },
    {
        id: 'black2', name: 'Pokémon Black 2', gen: 5,
        cover: 'https://upload.wikimedia.org/wikipedia/en/e/e0/Pokemon_Black_2_Box.jpg',
        prices: { loose: 150, cib: 210 } //[span_24](start_span)[span_24](end_span)
    },
    {
        id: 'white2', name: 'Pokémon White 2', gen: 5,
        cover: 'https://upload.wikimedia.org/wikipedia/en/c/c8/Pokemon_White_2_Box.jpg',
        prices: { loose: 143, cib: 192 } //[span_25](start_span)[span_25](end_span)
    },

    // Gen 6
    {
        id: 'x', name: 'Pokémon X', gen: 6,
        cover: 'https://upload.wikimedia.org/wikipedia/en/5/52/Pokemon_X_Box.jpg',
        prices: { loose: 34, cib: 39 } //[span_26](start_span)[span_26](end_span)
    },
    {
        id: 'y', name: 'Pokémon Y', gen: 6,
        cover: 'https://upload.wikimedia.org/wikipedia/en/4/41/Pokemon_Y_Box.jpg',
        prices: { loose: 33, cib: 40 } //[span_27](start_span)[span_27](end_span)
    },
    {
        id: 'omegaruby', name: 'Pokémon Omega Ruby', gen: 6,
        cover: 'https://upload.wikimedia.org/wikipedia/en/d/d4/Pokemon_Omega_Ruby_Box.jpg',
        prices: { loose: 38, cib: 45 } //[span_28](start_span)[span_28](end_span)
    },
    {
        id: 'alphasapphire', name: 'Pokémon Alpha Sapphire', gen: 6,
        cover: 'https://upload.wikimedia.org/wikipedia/en/c/c6/Pokemon_Alpha_Sapphire_Box.jpg',
        prices: { loose: 36, cib: 46 } //[span_29](start_span)[span_29](end_span)
    },

    // Gen 7
    {
        id: 'sun', name: 'Pokémon Sun', gen: 7,
        cover: 'https://upload.wikimedia.org/wikipedia/en/7/7b/Pokemon_Sun_Box.jpg',
        prices: { loose: 18, cib: 24 } //[span_30](start_span)[span_30](end_span)
    },
    {
        id: 'moon', name: 'Pokémon Moon', gen: 7,
        cover: 'https://upload.wikimedia.org/wikipedia/en/0/06/Pokemon_Moon_Box.jpg',
        prices: { loose: 20, cib: 25 } //[span_31](start_span)[span_31](end_span)
    },
    {
        id: 'ultrasun', name: 'Pokémon Ultra Sun', gen: 7,
        cover: 'https://upload.wikimedia.org/wikipedia/en/8/87/Pokemon_Ultra_Sun_Box.jpg',
        prices: { loose: 43, cib: 49 } //[span_32](start_span)[span_32](end_span)
    },
    {
        id: 'ultramoon', name: 'Pokémon Ultra Moon', gen: 7,
        cover: 'https://upload.wikimedia.org/wikipedia/en/1/14/Pokemon_Ultra_Moon_Box.jpg',
        prices: { loose: 45, cib: 55 } //[span_33](start_span)[span_33](end_span)
    },
    {
        id: 'letsgo_pikachu', name: "Pokémon: Let's Go, Pikachu!", gen: 7,
        cover: 'https://upload.wikimedia.org/wikipedia/en/1/17/Pokemon_Lets_Go_Pikachu_Box.jpg',
        prices: { loose: 30, cib: 32, new: 60 } //[span_34](start_span)[span_34](end_span)
    },
    {
        id: 'letsgo_eevee', name: "Pokémon: Let's Go, Eevee!", gen: 7,
        cover: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Pokemon_Lets_Go_Eevee_Box.jpg',
        prices: { loose: 31, cib: 35, new: 60 } //[span_35](start_span)[span_35](end_span)
    },

    // Gen 8
    {
        id: 'sword', name: 'Pokémon Sword', gen: 8,
        cover: 'https://upload.wikimedia.org/wikipedia/en/a/a2/Pokemon_Sword_Box.jpg',
        prices: { loose: 28, cib: 34, new: 44 } //[span_36](start_span)[span_36](end_span)
    },
    {
        id: 'shield', name: 'Pokémon Shield', gen: 8,
        cover: 'https://upload.wikimedia.org/wikipedia/en/1/1d/Pokemon_Shield_Box.jpg',
        prices: { loose: 31, cib: 35, new: 52 } //[span_37](start_span)[span_37](end_span)
    },
    {
        id: 'brilliant_diamond', name: 'Pokémon Brilliant Diamond', gen: 8,
        cover: 'https://upload.wikimedia.org/wikipedia/en/f/f3/Pokemon_Brilliant_Diamond_Box.jpg',
        prices: { loose: 35, cib: 38, new: 41 } //[span_38](start_span)[span_38](end_span)
    },
    {
        id: 'shining_pearl', name: 'Pokémon Shining Pearl', gen: 8,
        cover: 'https://upload.wikimedia.org/wikipedia/en/1/14/Pokemon_Shining_Pearl_Box.jpg',
        prices: { loose: 32, cib: 34, new: 40 } //[span_39](start_span)[span_39](end_span)
    },
    {
        id: 'bdsp_double', name: 'BDSP Double Pack', gen: 8,
        cover: 'https://m.media-amazon.com/images/I/71Y86Nq86XL._AC_SL1500_.jpg',
        prices: { loose: 86, cib: 87, new: 105 } //[span_40](start_span)[span_40](end_span)
    },

    // Gen 9
    {
        id: 'scarlet', name: 'Pokémon Scarlet', gen: 9,
        cover: 'https://upload.wikimedia.org/wikipedia/en/4/4b/Pokemon_Scarlet_Box.jpg',
        prices: { loose: 32, cib: 35, new: 40 } //[span_41](start_span)[span_41](end_span)[span_42](start_span)[span_42](end_span)
    },
    {
        id: 'violet', name: 'Pokémon Violet', gen: 9,
        cover: 'https://upload.wikimedia.org/wikipedia/en/a/ab/Pokemon_Violet_Box.jpg',
        prices: { loose: 38, cib: 40, new: 45 } //[span_43](start_span)[span_43](end_span)
    },
    {
        id: 'sc_vi_double', name: 'Scarlet & Violet Double Pack', gen: 9,
        cover: 'https://m.media-amazon.com/images/I/81L8EwL18yL._AC_SL1500_.jpg',
        prices: { loose: 83, cib: 88, new: 98 } //[span_44](start_span)[span_44](end_span)
    }
];

// Load progress from browser storage
let collection = JSON.parse(localStorage.getItem('pokemonTrackerDB_v4')) || {};

function saveCollection() {
    localStorage.setItem('pokemonTrackerDB_v4', JSON.stringify(collection));
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
