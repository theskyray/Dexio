exports.BattlePokedex = {
    bulbasaur: {
        num: 1,
        species: "Bulbasaur",
        types: ["Grass", "Poison"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 45,
            atk: 49,
            def: 49,
            spa: 65,
            spd: 65,
            spe: 45
        },
        abilities: {
            "0": "Overgrow",
            H: "Chlorophyll"
        },
        heightm: 0.7,
        weightkg: 6.9,
        color: "Green",
        evos: ["ivysaur"],
        eggGroups: ["Monster", "Grass"],
        tier: "Bank-LC"
    },
    ivysaur: {
        num: 2,
        species: "Ivysaur",
        types: ["Grass", "Poison"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 60,
            atk: 62,
            def: 63,
            spa: 80,
            spd: 80,
            spe: 60
        },
        abilities: {
            "0": "Overgrow",
            H: "Chlorophyll"
        },
        heightm: 1,
        weightkg: 13,
        color: "Green",
        prevo: "bulbasaur",
        evos: ["venusaur"],
        evoLevel: 16,
        eggGroups: ["Monster", "Grass"],
        tier: "Bank-NFE"
    },
    venusaur: {
        num: 3,
        species: "Venusaur",
        types: ["Grass", "Poison"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 80,
            atk: 82,
            def: 83,
            spa: 100,
            spd: 100,
            spe: 80
        },
        abilities: {
            "0": "Overgrow",
            H: "Chlorophyll"
        },
        heightm: 2,
        weightkg: 100,
        color: "Green",
        prevo: "ivysaur",
        evoLevel: 32,
        eggGroups: ["Monster", "Grass"],
        otherFormes: ["venusaurmega"],
        tier: "Bank"
    },
    venusaurmega: {
        num: 3,
        species: "Venusaur-Mega",
        baseSpecies: "Venusaur",
        forme: "Mega",
        formeLetter: "M",
        types: ["Grass", "Poison"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 80,
            atk: 100,
            def: 123,
            spa: 122,
            spd: 120,
            spe: 80
        },
        abilities: {
            "0": "Thick Fat"
        },
        heightm: 2.4,
        weightkg: 155.5,
        color: "Green",
        eggGroups: ["Monster", "Grass"],
        tier: "Bank",
        requiredItem: "Venusaurite"
    },
    charmander: {
        num: 4,
        species: "Charmander",
        types: ["Fire"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 39,
            atk: 52,
            def: 43,
            spa: 60,
            spd: 50,
            spe: 65
        },
        abilities: {
            "0": "Blaze",
            H: "Solar Power"
        },
        heightm: 0.6,
        weightkg: 8.5,
        color: "Red",
        evos: ["charmeleon"],
        eggGroups: ["Monster", "Dragon"],
        tier: "Bank-LC"
    },
    charmeleon: {
        num: 5,
        species: "Charmeleon",
        types: ["Fire"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 58,
            atk: 64,
            def: 58,
            spa: 80,
            spd: 65,
            spe: 80
        },
        abilities: {
            "0": "Blaze",
            H: "Solar Power"
        },
        heightm: 1.1,
        weightkg: 19,
        color: "Red",
        prevo: "charmander",
        evos: ["charizard"],
        evoLevel: 16,
        eggGroups: ["Monster", "Dragon"],
        tier: "Bank-NFE"
    },
    charizard: {
        num: 6,
        species: "Charizard",
        types: ["Fire", "Flying"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 78,
            atk: 84,
            def: 78,
            spa: 109,
            spd: 85,
            spe: 100
        },
        abilities: {
            "0": "Blaze",
            H: "Solar Power"
        },
        heightm: 1.7,
        weightkg: 90.5,
        color: "Red",
        prevo: "charmeleon",
        evoLevel: 36,
        eggGroups: ["Monster", "Dragon"],
        otherFormes: ["charizardmegax", "charizardmegay"],
        tier: "Bank"
    },
    charizardmegax: {
        num: 6,
        species: "Charizard-Mega-X",
        baseSpecies: "Charizard",
        forme: "Mega-X",
        formeLetter: "M",
        types: ["Fire", "Dragon"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 78,
            atk: 130,
            def: 111,
            spa: 130,
            spd: 85,
            spe: 100
        },
        abilities: {
            "0": "Tough Claws"
        },
        heightm: 1.7,
        weightkg: 110.5,
        color: "Red",
        eggGroups: ["Monster", "Dragon"],
        tier: "Bank",
        requiredItem: "Charizardite X"
    },
    charizardmegay: {
        num: 6,
        species: "Charizard-Mega-Y",
        baseSpecies: "Charizard",
        forme: "Mega-Y",
        formeLetter: "M",
        types: ["Fire", "Flying"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 78,
            atk: 104,
            def: 78,
            spa: 159,
            spd: 115,
            spe: 100
        },
        abilities: {
            "0": "Drought"
        },
        heightm: 1.7,
        weightkg: 100.5,
        color: "Red",
        eggGroups: ["Monster", "Dragon"],
        tier: "Bank",
        requiredItem: "Charizardite Y"
    },
    squirtle: {
        num: 7,
        species: "Squirtle",
        types: ["Water"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 44,
            atk: 48,
            def: 65,
            spa: 50,
            spd: 64,
            spe: 43
        },
        abilities: {
            "0": "Torrent",
            H: "Rain Dish"
        },
        heightm: 0.5,
        weightkg: 9,
        color: "Blue",
        evos: ["wartortle"],
        eggGroups: ["Monster", "Water 1"],
        tier: "Bank-LC"
    },
    wartortle: {
        num: 8,
        species: "Wartortle",
        types: ["Water"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 59,
            atk: 63,
            def: 80,
            spa: 65,
            spd: 80,
            spe: 58
        },
        abilities: {
            "0": "Torrent",
            H: "Rain Dish"
        },
        heightm: 1,
        weightkg: 22.5,
        color: "Blue",
        prevo: "squirtle",
        evos: ["blastoise"],
        evoLevel: 16,
        eggGroups: ["Monster", "Water 1"],
        tier: "Bank-NFE"
    },
    blastoise: {
        num: 9,
        species: "Blastoise",
        types: ["Water"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 79,
            atk: 83,
            def: 100,
            spa: 85,
            spd: 105,
            spe: 78
        },
        abilities: {
            "0": "Torrent",
            H: "Rain Dish"
        },
        heightm: 1.6,
        weightkg: 85.5,
        color: "Blue",
        prevo: "wartortle",
        evoLevel: 36,
        eggGroups: ["Monster", "Water 1"],
        otherFormes: ["blastoisemega"],
        tier: "Bank"
    },
    blastoisemega: {
        num: 9,
        species: "Blastoise-Mega",
        baseSpecies: "Blastoise",
        forme: "Mega",
        formeLetter: "M",
        types: ["Water"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 79,
            atk: 103,
            def: 120,
            spa: 135,
            spd: 115,
            spe: 78
        },
        abilities: {
            "0": "Mega Launcher"
        },
        heightm: 1.6,
        weightkg: 101.1,
        color: "Blue",
        eggGroups: ["Monster", "Water 1"],
        tier: "Bank",
        requiredItem: "Blastoisinite"
    },
    caterpie: {
        num: 10,
        species: "Caterpie",
        types: ["Bug"],
        baseStats: {
            hp: 45,
            atk: 30,
            def: 35,
            spa: 20,
            spd: 20,
            spe: 45
        },
        abilities: {
            "0": "Shield Dust",
            H: "Run Away"
        },
        heightm: 0.3,
        weightkg: 2.9,
        color: "Green",
        evos: ["metapod"],
        eggGroups: ["Bug"],
        tier: "LC"
    },
    metapod: {
        num: 11,
        species: "Metapod",
        types: ["Bug"],
        baseStats: {
            hp: 50,
            atk: 20,
            def: 55,
            spa: 25,
            spd: 25,
            spe: 30
        },
        abilities: {
            "0": "Shed Skin"
        },
        heightm: 0.7,
        weightkg: 9.9,
        color: "Green",
        prevo: "caterpie",
        evos: ["butterfree"],
        evoLevel: 7,
        eggGroups: ["Bug"],
        tier: "NFE"
    },
    butterfree: {
        num: 12,
        species: "Butterfree",
        types: ["Bug", "Flying"],
        baseStats: {
            hp: 60,
            atk: 45,
            def: 50,
            spa: 90,
            spd: 80,
            spe: 70
        },
        abilities: {
            "0": "Compound Eyes",
            H: "Tinted Lens"
        },
        heightm: 1.1,
        weightkg: 32,
        color: "White",
        prevo: "metapod",
        evoLevel: 10,
        eggGroups: ["Bug"],
        tier: "New"
    },
    weedle: {
        num: 13,
        species: "Weedle",
        types: ["Bug", "Poison"],
        baseStats: {
            hp: 40,
            atk: 35,
            def: 30,
            spa: 20,
            spd: 20,
            spe: 50
        },
        abilities: {
            "0": "Shield Dust",
            H: "Run Away"
        },
        heightm: 0.3,
        weightkg: 3.2,
        color: "Brown",
        evos: ["kakuna"],
        eggGroups: ["Bug"],
        tier: "Bank-LC"
    },
    kakuna: {
        num: 14,
        species: "Kakuna",
        types: ["Bug", "Poison"],
        baseStats: {
            hp: 45,
            atk: 25,
            def: 50,
            spa: 25,
            spd: 25,
            spe: 35
        },
        abilities: {
            "0": "Shed Skin"
        },
        heightm: 0.6,
        weightkg: 10,
        color: "Yellow",
        prevo: "weedle",
        evos: ["beedrill"],
        evoLevel: 7,
        eggGroups: ["Bug"],
        tier: "Bank-NFE"
    },
    beedrill: {
        num: 15,
        species: "Beedrill",
        types: ["Bug", "Poison"],
        baseStats: {
            hp: 65,
            atk: 90,
            def: 40,
            spa: 45,
            spd: 80,
            spe: 75
        },
        abilities: {
            "0": "Swarm",
            H: "Sniper"
        },
        heightm: 1,
        weightkg: 29.5,
        color: "Yellow",
        prevo: "kakuna",
        evoLevel: 10,
        eggGroups: ["Bug"],
        otherFormes: ["beedrillmega"],
        tier: "Bank"
    },
    beedrillmega: {
        num: 15,
        species: "Beedrill-Mega",
        baseSpecies: "Beedrill",
        forme: "Mega",
        formeLetter: "M",
        types: ["Bug", "Poison"],
        baseStats: {
            hp: 65,
            atk: 150,
            def: 40,
            spa: 15,
            spd: 80,
            spe: 145
        },
        abilities: {
            "0": "Adaptability"
        },
        heightm: 1.4,
        weightkg: 40.5,
        color: "Yellow",
        eggGroups: ["Bug"],
        tier: "Unreleased",
        requiredItem: "Beedrillite"
    },
    pidgey: {
        num: 16,
        species: "Pidgey",
        types: ["Normal", "Flying"],
        baseStats: {
            hp: 40,
            atk: 45,
            def: 40,
            spa: 35,
            spd: 35,
            spe: 56
        },
        abilities: {
            "0": "Keen Eye",
            "1": "Tangled Feet",
            H: "Big Pecks"
        },
        heightm: 0.3,
        weightkg: 1.8,
        color: "Brown",
        evos: ["pidgeotto"],
        eggGroups: ["Flying"],
        tier: "Bank-LC"
    },
    pidgeotto: {
        num: 17,
        species: "Pidgeotto",
        types: ["Normal", "Flying"],
        baseStats: {
            hp: 63,
            atk: 60,
            def: 55,
            spa: 50,
            spd: 50,
            spe: 71
        },
        abilities: {
            "0": "Keen Eye",
            "1": "Tangled Feet",
            H: "Big Pecks"
        },
        heightm: 1.1,
        weightkg: 30,
        color: "Brown",
        prevo: "pidgey",
        evos: ["pidgeot"],
        evoLevel: 18,
        eggGroups: ["Flying"],
        tier: "Bank-NFE"
    },
    pidgeot: {
        num: 18,
        species: "Pidgeot",
        types: ["Normal", "Flying"],
        baseStats: {
            hp: 83,
            atk: 80,
            def: 75,
            spa: 70,
            spd: 70,
            spe: 101
        },
        abilities: {
            "0": "Keen Eye",
            "1": "Tangled Feet",
            H: "Big Pecks"
        },
        heightm: 1.5,
        weightkg: 39.5,
        color: "Brown",
        prevo: "pidgeotto",
        evoLevel: 36,
        eggGroups: ["Flying"],
        otherFormes: ["pidgeotmega"],
        tier: "Bank"
    },
    pidgeotmega: {
        num: 18,
        species: "Pidgeot-Mega",
        baseSpecies: "Pidgeot",
        forme: "Mega",
        formeLetter: "M",
        types: ["Normal", "Flying"],
        baseStats: {
            hp: 83,
            atk: 80,
            def: 80,
            spa: 135,
            spd: 80,
            spe: 121
        },
        abilities: {
            "0": "No Guard"
        },
        heightm: 2.2,
        weightkg: 50.5,
        color: "Brown",
        eggGroups: ["Flying"],
        tier: "Unreleased",
        requiredItem: "Pidgeotite"
    },
    rattata: {
        num: 19,
        species: "Rattata",
        types: ["Normal"],
        baseStats: {
            hp: 30,
            atk: 56,
            def: 35,
            spa: 25,
            spd: 35,
            spe: 72
        },
        abilities: {
            "0": "Run Away",
            "1": "Guts",
            H: "Hustle"
        },
        heightm: 0.3,
        weightkg: 3.5,
        color: "Purple",
        evos: ["raticate"],
        eggGroups: ["Field"],
        otherFormes: ["rattataalola"],
        tier: "Bank-LC"
    },
    rattataalola: {
        num: 19,
        species: "Rattata-Alola",
        baseSpecies: "Rattata",
        forme: "Alola",
        formeLetter: "A",
        types: ["Dark", "Normal"],
        baseStats: {
            hp: 30,
            atk: 56,
            def: 35,
            spa: 25,
            spd: 35,
            spe: 72
        },
        abilities: {
            "0": "Gluttony",
            "1": "Hustle",
            H: "Thick Fat"
        },
        heightm: 0.3,
        weightkg: 3.8,
        color: "Black",
        evos: ["raticatealola"],
        eggGroups: ["Field"],
        tier: "LC"
    },
    raticate: {
        num: 20,
        species: "Raticate",
        types: ["Normal"],
        baseStats: {
            hp: 55,
            atk: 81,
            def: 60,
            spa: 50,
            spd: 70,
            spe: 97
        },
        abilities: {
            "0": "Run Away",
            "1": "Guts",
            H: "Hustle"
        },
        heightm: 0.7,
        weightkg: 18.5,
        color: "Brown",
        prevo: "rattata",
        evoLevel: 20,
        eggGroups: ["Field"],
        otherFormes: ["raticatealola"],
        tier: "Bank"
    },
    raticatealola: {
        num: 20,
        species: "Raticate-Alola",
        baseSpecies: "Raticate",
        forme: "Alola",
        formeLetter: "A",
        types: ["Dark", "Normal"],
        baseStats: {
            hp: 75,
            atk: 71,
            def: 70,
            spa: 40,
            spd: 80,
            spe: 77
        },
        abilities: {
            "0": "Gluttony",
            "1": "Hustle",
            H: "Thick Fat"
        },
        heightm: 0.7,
        weightkg: 25.5,
        color: "Black",
        prevo: "rattataalola",
        evoLevel: 20,
        eggGroups: ["Field"],
        tier: "New"
    },
    spearow: {
        num: 21,
        species: "Spearow",
        types: ["Normal", "Flying"],
        baseStats: {
            hp: 40,
            atk: 60,
            def: 30,
            spa: 31,
            spd: 31,
            spe: 70
        },
        abilities: {
            "0": "Keen Eye",
            H: "Sniper"
        },
        heightm: 0.3,
        weightkg: 2,
        color: "Brown",
        evos: ["fearow"],
        eggGroups: ["Flying"],
        tier: "LC"
    },
    fearow: {
        num: 22,
        species: "Fearow",
        types: ["Normal", "Flying"],
        baseStats: {
            hp: 65,
            atk: 90,
            def: 65,
            spa: 61,
            spd: 61,
            spe: 100
        },
        abilities: {
            "0": "Keen Eye",
            H: "Sniper"
        },
        heightm: 1.2,
        weightkg: 38,
        color: "Brown",
        prevo: "spearow",
        evoLevel: 20,
        eggGroups: ["Flying"],
        tier: "New"
    },
    ekans: {
        num: 23,
        species: "Ekans",
        types: ["Poison"],
        baseStats: {
            hp: 35,
            atk: 60,
            def: 44,
            spa: 40,
            spd: 54,
            spe: 55
        },
        abilities: {
            "0": "Intimidate",
            "1": "Shed Skin",
            H: "Unnerve"
        },
        heightm: 2,
        weightkg: 6.9,
        color: "Purple",
        evos: ["arbok"],
        eggGroups: ["Field", "Dragon"],
        tier: "Bank-LC"
    },
    arbok: {
        num: 24,
        species: "Arbok",
        types: ["Poison"],
        baseStats: {
            hp: 60,
            atk: 95,
            def: 69,
            spa: 65,
            spd: 79,
            spe: 80
        },
        abilities: {
            "0": "Intimidate",
            "1": "Shed Skin",
            H: "Unnerve"
        },
        heightm: 3.5,
        weightkg: 65,
        color: "Purple",
        prevo: "ekans",
        evoLevel: 22,
        eggGroups: ["Field", "Dragon"],
        tier: "Bank"
    },
    pikachu: {
        num: 25,
        species: "Pikachu",
        types: ["Electric"],
        baseStats: {
            hp: 35,
            atk: 55,
            def: 40,
            spa: 50,
            spd: 50,
            spe: 90
        },
        abilities: {
            "0": "Static",
            H: "Lightning Rod"
        },
        heightm: 0.4,
        weightkg: 6,
        color: "Yellow",
        prevo: "pichu",
        evos: ["raichu", "raichualola"],
        evoLevel: 1,
        eggGroups: ["Field", "Fairy"],
        otherFormes: ["pikachucosplay", "pikachurockstar", "pikachubelle", "pikachupopstar", "pikachuphd", "pikachulibre"],
        tier: "NFE"
    },
    pikachucosplay: {
        num: 25,
        species: "Pikachu-Cosplay",
        baseSpecies: "Pikachu",
        forme: "Cosplay",
        formeLetter: "C",
        types: ["Electric"],
        gender: "F",
        baseStats: {
            hp: 35,
            atk: 55,
            def: 40,
            spa: 50,
            spd: 50,
            spe: 90
        },
        abilities: {
            "0": "Lightning Rod"
        },
        heightm: 0.4,
        weightkg: 6,
        color: "Yellow",
        eggGroups: ["Undiscovered"],
        tier: "Illegal"
    },
    pikachurockstar: {
        num: 25,
        species: "Pikachu-Rock-Star",
        baseSpecies: "Pikachu",
        forme: "Rock-Star",
        formeLetter: "R",
        types: ["Electric"],
        gender: "F",
        baseStats: {
            hp: 35,
            atk: 55,
            def: 40,
            spa: 50,
            spd: 50,
            spe: 90
        },
        abilities: {
            "0": "Lightning Rod"
        },
        heightm: 0.4,
        weightkg: 6,
        color: "Yellow",
        eggGroups: ["Undiscovered"],
        tier: "Illegal"
    },
    pikachubelle: {
        num: 25,
        species: "Pikachu-Belle",
        baseSpecies: "Pikachu",
        forme: "Belle",
        formeLetter: "B",
        types: ["Electric"],
        gender: "F",
        baseStats: {
            hp: 35,
            atk: 55,
            def: 40,
            spa: 50,
            spd: 50,
            spe: 90
        },
        abilities: {
            "0": "Lightning Rod"
        },
        heightm: 0.4,
        weightkg: 6,
        color: "Yellow",
        eggGroups: ["Undiscovered"],
        tier: "Illegal"
    },
    pikachupopstar: {
        num: 25,
        species: "Pikachu-Pop-Star",
        baseSpecies: "Pikachu",
        forme: "Pop-Star",
        formeLetter: "P",
        types: ["Electric"],
        gender: "F",
        baseStats: {
            hp: 35,
            atk: 55,
            def: 40,
            spa: 50,
            spd: 50,
            spe: 90
        },
        abilities: {
            "0": "Lightning Rod"
        },
        heightm: 0.4,
        weightkg: 6,
        color: "Yellow",
        eggGroups: ["Undiscovered"],
        tier: "Illegal"
    },
    pikachuphd: {
        num: 25,
        species: "Pikachu-PhD",
        baseSpecies: "Pikachu",
        forme: "PhD",
        formeLetter: "D",
        types: ["Electric"],
        gender: "F",
        baseStats: {
            hp: 35,
            atk: 55,
            def: 40,
            spa: 50,
            spd: 50,
            spe: 90
        },
        abilities: {
            "0": "Lightning Rod"
        },
        heightm: 0.4,
        weightkg: 6,
        color: "Yellow",
        eggGroups: ["Undiscovered"],
        tier: "Illegal"
    },
    pikachulibre: {
        num: 25,
        species: "Pikachu-Libre",
        baseSpecies: "Pikachu",
        forme: "Libre",
        formeLetter: "L",
        types: ["Electric"],
        gender: "F",
        baseStats: {
            hp: 35,
            atk: 55,
            def: 40,
            spa: 50,
            spd: 50,
            spe: 90
        },
        abilities: {
            "0": "Lightning Rod"
        },
        heightm: 0.4,
        weightkg: 6,
        color: "Yellow",
        eggGroups: ["Undiscovered"],
        tier: "Illegal"
    },
    raichu: {
        num: 26,
        species: "Raichu",
        types: ["Electric"],
        baseStats: {
            hp: 60,
            atk: 90,
            def: 55,
            spa: 90,
            spd: 80,
            spe: 110
        },
        abilities: {
            "0": "Static",
            H: "Lightning Rod"
        },
        heightm: 0.8,
        weightkg: 30,
        color: "Yellow",
        prevo: "pikachu",
        evoLevel: 1,
        eggGroups: ["Field", "Fairy"],
        otherFormes: ["raichualola"],
        tier: "Bank"
    },
    raichualola: {
        num: 26,
        species: "Raichu-Alola",
        baseSpecies: "Raichu",
        forme: "Alola",
        formeLetter: "A",
        types: ["Electric", "Psychic"],
        baseStats: {
            hp: 60,
            atk: 85,
            def: 50,
            spa: 95,
            spd: 85,
            spe: 110
        },
        abilities: {
            "0": "Surge Surfer"
        },
        heightm: 0.7,
        weightkg: 21,
        color: "Brown",
        prevo: "pikachu",
        evoLevel: 1,
        eggGroups: ["Field", "Fairy"],
        tier: "New"
    },
    sandshrew: {
        num: 27,
        species: "Sandshrew",
        types: ["Ground"],
        baseStats: {
            hp: 50,
            atk: 75,
            def: 85,
            spa: 20,
            spd: 30,
            spe: 40
        },
        abilities: {
            "0": "Sand Veil",
            H: "Sand Rush"
        },
        heightm: 0.6,
        weightkg: 12,
        color: "Yellow",
        evos: ["sandslash"],
        eggGroups: ["Field"],
        otherFormes: ["sandshrewalola"],
        tier: "Bank-LC"
    },
    sandshrewalola: {
        num: 27,
        species: "Sandshrew-Alola",
        baseSpecies: "Sandshrew",
        forme: "Alola",
        formeLetter: "A",
        types: ["Ice", "Steel"],
        baseStats: {
            hp: 50,
            atk: 75,
            def: 90,
            spa: 10,
            spd: 35,
            spe: 40
        },
        abilities: {
            "0": "Snow Cloak",
            H: "Slush Rush"
        },
        heightm: 0.7,
        weightkg: 40,
        color: "White",
        evos: ["sandslashalola"],
        eggGroups: ["Field"],
        tier: "LC"
    },
    sandslash: {
        num: 28,
        species: "Sandslash",
        types: ["Ground"],
        baseStats: {
            hp: 75,
            atk: 100,
            def: 110,
            spa: 45,
            spd: 55,
            spe: 65
        },
        abilities: {
            "0": "Sand Veil",
            H: "Sand Rush"
        },
        heightm: 1,
        weightkg: 29.5,
        color: "Yellow",
        prevo: "sandshrew",
        evoLevel: 22,
        eggGroups: ["Field"],
        otherFormes: ["sandslashalola"],
        tier: "Bank"
    },
    sandslashalola: {
        num: 28,
        species: "Sandslash-Alola",
        baseSpecies: "Sandslash",
        forme: "Alola",
        formeLetter: "A",
        types: ["Ice", "Steel"],
        baseStats: {
            hp: 75,
            atk: 100,
            def: 120,
            spa: 25,
            spd: 65,
            spe: 65
        },
        abilities: {
            "0": "Snow Cloak",
            H: "Slush Rush"
        },
        heightm: 1.2,
        weightkg: 55,
        color: "Blue",
        prevo: "sandshrewalola",
        evoLevel: 1,
        eggGroups: ["Field"],
        tier: "New"
    },
    nidoranf: {
        num: 29,
        species: "Nidoran-F",
        types: ["Poison"],
        gender: "F",
        baseStats: {
            hp: 55,
            atk: 47,
            def: 52,
            spa: 40,
            spd: 40,
            spe: 41
        },
        abilities: {
            "0": "Poison Point",
            "1": "Rivalry",
            H: "Hustle"
        },
        heightm: 0.4,
        weightkg: 7,
        color: "Blue",
        evos: ["nidorina"],
        eggGroups: ["Monster", "Field"],
        tier: "Bank-LC"
    },
    nidorina: {
        num: 30,
        species: "Nidorina",
        types: ["Poison"],
        gender: "F",
        baseStats: {
            hp: 70,
            atk: 62,
            def: 67,
            spa: 55,
            spd: 55,
            spe: 56
        },
        abilities: {
            "0": "Poison Point",
            "1": "Rivalry",
            H: "Hustle"
        },
        heightm: 0.8,
        weightkg: 20,
        color: "Blue",
        prevo: "nidoranf",
        evos: ["nidoqueen"],
        evoLevel: 16,
        eggGroups: ["Undiscovered"],
        tier: "Bank-NFE"
    },
    nidoqueen: {
        num: 31,
        species: "Nidoqueen",
        types: ["Poison", "Ground"],
        gender: "F",
        baseStats: {
            hp: 90,
            atk: 92,
            def: 87,
            spa: 75,
            spd: 85,
            spe: 76
        },
        abilities: {
            "0": "Poison Point",
            "1": "Rivalry",
            H: "Sheer Force"
        },
        heightm: 1.3,
        weightkg: 60,
        color: "Blue",
        prevo: "nidorina",
        evoLevel: 16,
        eggGroups: ["Undiscovered"],
        tier: "Bank"
    },
    nidoranm: {
        num: 32,
        species: "Nidoran-M",
        types: ["Poison"],
        gender: "M",
        baseStats: {
            hp: 46,
            atk: 57,
            def: 40,
            spa: 40,
            spd: 40,
            spe: 50
        },
        abilities: {
            "0": "Poison Point",
            "1": "Rivalry",
            H: "Hustle"
        },
        heightm: 0.5,
        weightkg: 9,
        color: "Purple",
        evos: ["nidorino"],
        eggGroups: ["Monster", "Field"],
        tier: "Bank-LC"
    },
    nidorino: {
        num: 33,
        species: "Nidorino",
        types: ["Poison"],
        gender: "M",
        baseStats: {
            hp: 61,
            atk: 72,
            def: 57,
            spa: 55,
            spd: 55,
            spe: 65
        },
        abilities: {
            "0": "Poison Point",
            "1": "Rivalry",
            H: "Hustle"
        },
        heightm: 0.9,
        weightkg: 19.5,
        color: "Purple",
        prevo: "nidoranm",
        evos: ["nidoking"],
        evoLevel: 16,
        eggGroups: ["Monster", "Field"],
        tier: "Bank-NFE"
    },
    nidoking: {
        num: 34,
        species: "Nidoking",
        types: ["Poison", "Ground"],
        gender: "M",
        baseStats: {
            hp: 81,
            atk: 102,
            def: 77,
            spa: 85,
            spd: 75,
            spe: 85
        },
        abilities: {
            "0": "Poison Point",
            "1": "Rivalry",
            H: "Sheer Force"
        },
        heightm: 1.4,
        weightkg: 62,
        color: "Purple",
        prevo: "nidorino",
        evoLevel: 16,
        eggGroups: ["Monster", "Field"],
        tier: "Bank"
    },
    clefairy: {
        num: 35,
        species: "Clefairy",
        types: ["Fairy"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 70,
            atk: 45,
            def: 48,
            spa: 60,
            spd: 65,
            spe: 35
        },
        abilities: {
            "0": "Cute Charm",
            "1": "Magic Guard",
            H: "Friend Guard"
        },
        heightm: 0.6,
        weightkg: 7.5,
        color: "Pink",
        prevo: "cleffa",
        evos: ["clefable"],
        evoLevel: 1,
        eggGroups: ["Fairy"],
        tier: "New"
    },
    clefable: {
        num: 36,
        species: "Clefable",
        types: ["Fairy"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 95,
            atk: 70,
            def: 73,
            spa: 95,
            spd: 90,
            spe: 60
        },
        abilities: {
            "0": "Cute Charm",
            "1": "Magic Guard",
            H: "Unaware"
        },
        heightm: 1.3,
        weightkg: 40,
        color: "Pink",
        prevo: "clefairy",
        evoLevel: 1,
        eggGroups: ["Fairy"],
        tier: "New"
    },
    vulpix: {
        num: 37,
        species: "Vulpix",
        types: ["Fire"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 38,
            atk: 41,
            def: 40,
            spa: 50,
            spd: 65,
            spe: 65
        },
        abilities: {
            "0": "Flash Fire",
            H: "Drought"
        },
        heightm: 0.6,
        weightkg: 9.9,
        color: "Brown",
        evos: ["ninetales"],
        eggGroups: ["Field"],
        otherFormes: ["vulpixalola"],
        tier: "Bank-LC"
    },
    vulpixalola: {
        num: 37,
        species: "Vulpix-Alola",
        baseSpecies: "Vulpix",
        forme: "Alola",
        formeLetter: "A",
        types: ["Ice"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 38,
            atk: 41,
            def: 40,
            spa: 50,
            spd: 65,
            spe: 65
        },
        abilities: {
            "0": "Snow Cloak",
            H: "Snow Warning"
        },
        heightm: 0.6,
        weightkg: 9.9,
        color: "White",
        evos: ["ninetalesalola"],
        eggGroups: ["Field"],
        tier: "LC"
    },
    ninetales: {
        num: 38,
        species: "Ninetales",
        types: ["Fire"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 73,
            atk: 76,
            def: 75,
            spa: 81,
            spd: 100,
            spe: 100
        },
        abilities: {
            "0": "Flash Fire",
            H: "Drought"
        },
        heightm: 1.1,
        weightkg: 19.9,
        color: "Yellow",
        prevo: "vulpix",
        evoLevel: 1,
        eggGroups: ["Field"],
        otherFormes: ["ninetalesalola"],
        tier: "Bank"
    },
    ninetalesalola: {
        num: 38,
        species: "Ninetales-Alola",
        baseSpecies: "Ninetales",
        forme: "Alola",
        formeLetter: "A",
        types: ["Ice", "Fairy"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 73,
            atk: 67,
            def: 75,
            spa: 81,
            spd: 100,
            spe: 109
        },
        abilities: {
            "0": "Snow Cloak",
            H: "Snow Warning"
        },
        heightm: 1.1,
        weightkg: 19.9,
        color: "Blue",
        prevo: "vulpixalola",
        evoLevel: 1,
        eggGroups: ["Field"],
        tier: "New"
    },
    jigglypuff: {
        num: 39,
        species: "Jigglypuff",
        types: ["Normal", "Fairy"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 115,
            atk: 45,
            def: 20,
            spa: 45,
            spd: 25,
            spe: 20
        },
        abilities: {
            "0": "Cute Charm",
            "1": "Competitive",
            H: "Friend Guard"
        },
        heightm: 0.5,
        weightkg: 5.5,
        color: "Pink",
        prevo: "igglybuff",
        evos: ["wigglytuff"],
        evoLevel: 1,
        eggGroups: ["Fairy"],
        tier: "NFE"
    },
    wigglytuff: {
        num: 40,
        species: "Wigglytuff",
        types: ["Normal", "Fairy"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 140,
            atk: 70,
            def: 45,
            spa: 85,
            spd: 50,
            spe: 45
        },
        abilities: {
            "0": "Cute Charm",
            "1": "Competitive",
            H: "Frisk"
        },
        heightm: 1,
        weightkg: 12,
        color: "Pink",
        prevo: "jigglypuff",
        evoLevel: 1,
        eggGroups: ["Fairy"],
        tier: "New"
    },
    zubat: {
        num: 41,
        species: "Zubat",
        types: ["Poison", "Flying"],
        baseStats: {
            hp: 40,
            atk: 45,
            def: 35,
            spa: 30,
            spd: 40,
            spe: 55
        },
        abilities: {
            "0": "Inner Focus",
            H: "Infiltrator"
        },
        heightm: 0.8,
        weightkg: 7.5,
        color: "Purple",
        evos: ["golbat"],
        eggGroups: ["Flying"],
        tier: "LC"
    },
    golbat: {
        num: 42,
        species: "Golbat",
        types: ["Poison", "Flying"],
        baseStats: {
            hp: 75,
            atk: 80,
            def: 70,
            spa: 65,
            spd: 75,
            spe: 90
        },
        abilities: {
            "0": "Inner Focus",
            H: "Infiltrator"
        },
        heightm: 1.6,
        weightkg: 55,
        color: "Purple",
        prevo: "zubat",
        evos: ["crobat"],
        evoLevel: 22,
        eggGroups: ["Flying"],
        tier: "New"
    },
    oddish: {
        num: 43,
        species: "Oddish",
        types: ["Grass", "Poison"],
        baseStats: {
            hp: 45,
            atk: 50,
            def: 55,
            spa: 75,
            spd: 65,
            spe: 30
        },
        abilities: {
            "0": "Chlorophyll",
            H: "Run Away"
        },
        heightm: 0.5,
        weightkg: 5.4,
        color: "Blue",
        evos: ["gloom"],
        eggGroups: ["Grass"],
        tier: "Bank-LC"
    },
    gloom: {
        num: 44,
        species: "Gloom",
        types: ["Grass", "Poison"],
        baseStats: {
            hp: 60,
            atk: 65,
            def: 70,
            spa: 85,
            spd: 75,
            spe: 40
        },
        abilities: {
            "0": "Chlorophyll",
            H: "Stench"
        },
        heightm: 0.8,
        weightkg: 8.6,
        color: "Blue",
        prevo: "oddish",
        evos: ["vileplume", "bellossom"],
        evoLevel: 21,
        eggGroups: ["Grass"],
        tier: "Bank-NFE"
    },
    vileplume: {
        num: 45,
        species: "Vileplume",
        types: ["Grass", "Poison"],
        baseStats: {
            hp: 75,
            atk: 80,
            def: 85,
            spa: 110,
            spd: 90,
            spe: 50
        },
        abilities: {
            "0": "Chlorophyll",
            H: "Effect Spore"
        },
        heightm: 1.2,
        weightkg: 18.6,
        color: "Red",
        prevo: "gloom",
        evoLevel: 21,
        eggGroups: ["Grass"],
        tier: "Bank"
    },
    paras: {
        num: 46,
        species: "Paras",
        types: ["Bug", "Grass"],
        baseStats: {
            hp: 35,
            atk: 70,
            def: 55,
            spa: 45,
            spd: 55,
            spe: 25
        },
        abilities: {
            "0": "Effect Spore",
            "1": "Dry Skin",
            H: "Damp"
        },
        heightm: 0.3,
        weightkg: 5.4,
        color: "Red",
        evos: ["parasect"],
        eggGroups: ["Bug", "Grass"],
        tier: "LC"
    },
    parasect: {
        num: 47,
        species: "Parasect",
        types: ["Bug", "Grass"],
        baseStats: {
            hp: 60,
            atk: 95,
            def: 80,
            spa: 60,
            spd: 80,
            spe: 30
        },
        abilities: {
            "0": "Effect Spore",
            "1": "Dry Skin",
            H: "Damp"
        },
        heightm: 1,
        weightkg: 29.5,
        color: "Red",
        prevo: "paras",
        evoLevel: 24,
        eggGroups: ["Bug", "Grass"],
        tier: "New"
    },
    venonat: {
        num: 48,
        species: "Venonat",
        types: ["Bug", "Poison"],
        baseStats: {
            hp: 60,
            atk: 55,
            def: 50,
            spa: 40,
            spd: 55,
            spe: 45
        },
        abilities: {
            "0": "Compound Eyes",
            "1": "Tinted Lens",
            H: "Run Away"
        },
        heightm: 1,
        weightkg: 30,
        color: "Purple",
        evos: ["venomoth"],
        eggGroups: ["Bug"],
        tier: "Bank-LC"
    },
    venomoth: {
        num: 49,
        species: "Venomoth",
        types: ["Bug", "Poison"],
        baseStats: {
            hp: 70,
            atk: 65,
            def: 60,
            spa: 90,
            spd: 75,
            spe: 90
        },
        abilities: {
            "0": "Shield Dust",
            "1": "Tinted Lens",
            H: "Wonder Skin"
        },
        heightm: 1.5,
        weightkg: 12.5,
        color: "Purple",
        prevo: "venonat",
        evoLevel: 31,
        eggGroups: ["Bug"],
        tier: "Bank"
    },
    diglett: {
        num: 50,
        species: "Diglett",
        types: ["Ground"],
        baseStats: {
            hp: 10,
            atk: 55,
            def: 25,
            spa: 35,
            spd: 45,
            spe: 95
        },
        abilities: {
            "0": "Sand Veil",
            "1": "Arena Trap",
            H: "Sand Force"
        },
        heightm: 0.2,
        weightkg: 0.8,
        color: "Brown",
        evos: ["dugtrio"],
        eggGroups: ["Field"],
        otherFormes: ["diglettalola"],
        tier: "Bank-LC"
    },
    diglettalola: {
        num: 50,
        species: "Diglett-Alola",
        baseSpecies: "Diglett",
        forme: "Alola",
        formeLetter: "A",
        types: ["Ground", "Steel"],
        baseStats: {
            hp: 10,
            atk: 55,
            def: 30,
            spa: 35,
            spd: 45,
            spe: 90
        },
        abilities: {
            "0": "Sand Veil",
            "1": "Tangling Hair",
            H: "Sand Force"
        },
        heightm: 0.2,
        weightkg: 1,
        color: "Brown",
        evos: ["dugtrioalola"],
        eggGroups: ["Field"],
        tier: "LC"
    },
    dugtrio: {
        num: 51,
        species: "Dugtrio",
        types: ["Ground"],
        baseStats: {
            hp: 35,
            atk: 100,
            def: 50,
            spa: 50,
            spd: 70,
            spe: 120
        },
        abilities: {
            "0": "Sand Veil",
            "1": "Arena Trap",
            H: "Sand Force"
        },
        heightm: 0.7,
        weightkg: 33.3,
        color: "Brown",
        prevo: "diglett",
        evoLevel: 26,
        eggGroups: ["Field"],
        otherFormes: ["dugtrioalola"],
        tier: "Bank"
    },
    dugtrioalola: {
        num: 51,
        species: "Dugtrio-Alola",
        baseSpecies: "Dugtrio",
        forme: "Alola",
        formeLetter: "A",
        types: ["Ground", "Steel"],
        baseStats: {
            hp: 35,
            atk: 100,
            def: 60,
            spa: 50,
            spd: 70,
            spe: 110
        },
        abilities: {
            "0": "Sand Veil",
            "1": "Tangling Hair",
            H: "Sand Force"
        },
        heightm: 0.7,
        weightkg: 66.6,
        color: "Brown",
        prevo: "diglettalola",
        evoLevel: 26,
        eggGroups: ["Field"],
        tier: "New"
    },
    meowth: {
        num: 52,
        species: "Meowth",
        types: ["Normal"],
        baseStats: {
            hp: 40,
            atk: 45,
            def: 35,
            spa: 40,
            spd: 40,
            spe: 90
        },
        abilities: {
            "0": "Pickup",
            "1": "Technician",
            H: "Unnerve"
        },
        heightm: 0.4,
        weightkg: 4.2,
        color: "Yellow",
        evos: ["persian"],
        eggGroups: ["Field"],
        otherFormes: ["meowthalola"],
        tier: "Bank-LC"
    },
    meowthalola: {
        num: 52,
        species: "Meowth-Alola",
        baseSpecies: "Meowth",
        forme: "Alola",
        formeLetter: "A",
        types: ["Dark"],
        baseStats: {
            hp: 40,
            atk: 35,
            def: 35,
            spa: 50,
            spd: 40,
            spe: 90
        },
        abilities: {
            "0": "Pickup",
            "1": "Technician",
            H: "Rattled"
        },
        heightm: 0.4,
        weightkg: 4.2,
        color: "Blue",
        evos: ["persianalola"],
        eggGroups: ["Field"],
        tier: "LC"
    },
    persian: {
        num: 53,
        species: "Persian",
        types: ["Normal"],
        baseStats: {
            hp: 65,
            atk: 70,
            def: 60,
            spa: 65,
            spd: 65,
            spe: 115
        },
        abilities: {
            "0": "Limber",
            "1": "Technician",
            H: "Unnerve"
        },
        heightm: 1,
        weightkg: 32,
        color: "Yellow",
        prevo: "meowth",
        evoLevel: 28,
        eggGroups: ["Field"],
        otherFormes: ["persianalola"],
        tier: "Bank"
    },
    persianalola: {
        num: 53,
        species: "Persian-Alola",
        baseSpecies: "Persian",
        forme: "Alola",
        formeLetter: "A",
        types: ["Dark"],
        baseStats: {
            hp: 65,
            atk: 60,
            def: 60,
            spa: 75,
            spd: 65,
            spe: 115
        },
        abilities: {
            "0": "Fur Coat",
            "1": "Technician",
            H: "Rattled"
        },
        heightm: 1.1,
        weightkg: 33,
        color: "Blue",
        prevo: "meowthalola",
        evoLevel: 2,
        eggGroups: ["Field"],
        tier: "New"
    },
    psyduck: {
        num: 54,
        species: "Psyduck",
        types: ["Water"],
        baseStats: {
            hp: 50,
            atk: 52,
            def: 48,
            spa: 65,
            spd: 50,
            spe: 55
        },
        abilities: {
            "0": "Damp",
            "1": "Cloud Nine",
            H: "Swift Swim"
        },
        heightm: 0.8,
        weightkg: 19.6,
        color: "Yellow",
        evos: ["golduck"],
        eggGroups: ["Water 1", "Field"],
        tier: "LC"
    },
    golduck: {
        num: 55,
        species: "Golduck",
        types: ["Water"],
        baseStats: {
            hp: 80,
            atk: 82,
            def: 78,
            spa: 95,
            spd: 80,
            spe: 85
        },
        abilities: {
            "0": "Damp",
            "1": "Cloud Nine",
            H: "Swift Swim"
        },
        heightm: 1.7,
        weightkg: 76.6,
        color: "Blue",
        prevo: "psyduck",
        evoLevel: 33,
        eggGroups: ["Water 1", "Field"],
        tier: "New"
    },
    mankey: {
        num: 56,
        species: "Mankey",
        types: ["Fighting"],
        baseStats: {
            hp: 40,
            atk: 80,
            def: 35,
            spa: 35,
            spd: 45,
            spe: 70
        },
        abilities: {
            "0": "Vital Spirit",
            "1": "Anger Point",
            H: "Defiant"
        },
        heightm: 0.5,
        weightkg: 28,
        color: "Brown",
        evos: ["primeape"],
        eggGroups: ["Field"],
        tier: "LC"
    },
    primeape: {
        num: 57,
        species: "Primeape",
        types: ["Fighting"],
        baseStats: {
            hp: 65,
            atk: 105,
            def: 60,
            spa: 60,
            spd: 70,
            spe: 95
        },
        abilities: {
            "0": "Vital Spirit",
            "1": "Anger Point",
            H: "Defiant"
        },
        heightm: 1,
        weightkg: 32,
        color: "Brown",
        prevo: "mankey",
        evoLevel: 28,
        eggGroups: ["Field"],
        tier: "New"
    },
    growlithe: {
        num: 58,
        species: "Growlithe",
        types: ["Fire"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 55,
            atk: 70,
            def: 45,
            spa: 70,
            spd: 50,
            spe: 60
        },
        abilities: {
            "0": "Intimidate",
            "1": "Flash Fire",
            H: "Justified"
        },
        heightm: 0.7,
        weightkg: 19,
        color: "Brown",
        evos: ["arcanine"],
        eggGroups: ["Field"],
        tier: "LC"
    },
    arcanine: {
        num: 59,
        species: "Arcanine",
        types: ["Fire"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 90,
            atk: 110,
            def: 80,
            spa: 100,
            spd: 80,
            spe: 95
        },
        abilities: {
            "0": "Intimidate",
            "1": "Flash Fire",
            H: "Justified"
        },
        heightm: 1.9,
        weightkg: 155,
        color: "Brown",
        prevo: "growlithe",
        evoLevel: 1,
        eggGroups: ["Field"],
        tier: "New"
    },
    poliwag: {
        num: 60,
        species: "Poliwag",
        types: ["Water"],
        baseStats: {
            hp: 40,
            atk: 50,
            def: 40,
            spa: 40,
            spd: 40,
            spe: 90
        },
        abilities: {
            "0": "Water Absorb",
            "1": "Damp",
            H: "Swift Swim"
        },
        heightm: 0.6,
        weightkg: 12.4,
        color: "Blue",
        evos: ["poliwhirl"],
        eggGroups: ["Water 1"],
        tier: "LC"
    },
    poliwhirl: {
        num: 61,
        species: "Poliwhirl",
        types: ["Water"],
        baseStats: {
            hp: 65,
            atk: 65,
            def: 65,
            spa: 50,
            spd: 50,
            spe: 90
        },
        abilities: {
            "0": "Water Absorb",
            "1": "Damp",
            H: "Swift Swim"
        },
        heightm: 1,
        weightkg: 20,
        color: "Blue",
        prevo: "poliwag",
        evos: ["poliwrath", "politoed"],
        evoLevel: 25,
        eggGroups: ["Water 1"],
        tier: "NFE"
    },
    poliwrath: {
        num: 62,
        species: "Poliwrath",
        types: ["Water", "Fighting"],
        baseStats: {
            hp: 90,
            atk: 95,
            def: 95,
            spa: 70,
            spd: 90,
            spe: 70
        },
        abilities: {
            "0": "Water Absorb",
            "1": "Damp",
            H: "Swift Swim"
        },
        heightm: 1.3,
        weightkg: 54,
        color: "Blue",
        prevo: "poliwhirl",
        evoLevel: 25,
        eggGroups: ["Water 1"],
        tier: "New"
    },
    abra: {
        num: 63,
        species: "Abra",
        types: ["Psychic"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 25,
            atk: 20,
            def: 15,
            spa: 105,
            spd: 55,
            spe: 90
        },
        abilities: {
            "0": "Synchronize",
            "1": "Inner Focus",
            H: "Magic Guard"
        },
        heightm: 0.9,
        weightkg: 19.5,
        color: "Brown",
        evos: ["kadabra"],
        eggGroups: ["Human-Like"],
        tier: "LC"
    },
    kadabra: {
        num: 64,
        species: "Kadabra",
        types: ["Psychic"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 40,
            atk: 35,
            def: 30,
            spa: 120,
            spd: 70,
            spe: 105
        },
        abilities: {
            "0": "Synchronize",
            "1": "Inner Focus",
            H: "Magic Guard"
        },
        heightm: 1.3,
        weightkg: 56.5,
        color: "Brown",
        prevo: "abra",
        evos: ["alakazam"],
        evoLevel: 16,
        eggGroups: ["Human-Like"],
        tier: "New"
    },
    alakazam: {
        num: 65,
        species: "Alakazam",
        types: ["Psychic"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 55,
            atk: 50,
            def: 45,
            spa: 135,
            spd: 95,
            spe: 120
        },
        abilities: {
            "0": "Synchronize",
            "1": "Inner Focus",
            H: "Magic Guard"
        },
        heightm: 1.5,
        weightkg: 48,
        color: "Brown",
        prevo: "kadabra",
        evoLevel: 16,
        eggGroups: ["Human-Like"],
        otherFormes: ["alakazammega"],
        tier: "New"
    },
    alakazammega: {
        num: 65,
        species: "Alakazam-Mega",
        baseSpecies: "Alakazam",
        forme: "Mega",
        formeLetter: "M",
        types: ["Psychic"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 55,
            atk: 50,
            def: 65,
            spa: 175,
            spd: 105,
            spe: 150
        },
        abilities: {
            "0": "Trace"
        },
        heightm: 1.2,
        weightkg: 48,
        color: "Brown",
        eggGroups: ["Human-Like"],
        tier: "New",
        requiredItem: "Alakazite"
    },
    machop: {
        num: 66,
        species: "Machop",
        types: ["Fighting"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 70,
            atk: 80,
            def: 50,
            spa: 35,
            spd: 35,
            spe: 35
        },
        abilities: {
            "0": "Guts",
            "1": "No Guard",
            H: "Steadfast"
        },
        heightm: 0.8,
        weightkg: 19.5,
        color: "Gray",
        evos: ["machoke"],
        eggGroups: ["Human-Like"],
        tier: "LC"
    },
    machoke: {
        num: 67,
        species: "Machoke",
        types: ["Fighting"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 80,
            atk: 100,
            def: 70,
            spa: 50,
            spd: 60,
            spe: 45
        },
        abilities: {
            "0": "Guts",
            "1": "No Guard",
            H: "Steadfast"
        },
        heightm: 1.5,
        weightkg: 70.5,
        color: "Gray",
        prevo: "machop",
        evos: ["machamp"],
        evoLevel: 28,
        eggGroups: ["Human-Like"],
        tier: "New"
    },
    machamp: {
        num: 68,
        species: "Machamp",
        types: ["Fighting"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 90,
            atk: 130,
            def: 80,
            spa: 65,
            spd: 85,
            spe: 55
        },
        abilities: {
            "0": "Guts",
            "1": "No Guard",
            H: "Steadfast"
        },
        heightm: 1.6,
        weightkg: 130,
        color: "Gray",
        prevo: "machoke",
        evoLevel: 28,
        eggGroups: ["Human-Like"],
        tier: "New"
    },
    bellsprout: {
        num: 69,
        species: "Bellsprout",
        types: ["Grass", "Poison"],
        baseStats: {
            hp: 50,
            atk: 75,
            def: 35,
            spa: 70,
            spd: 30,
            spe: 40
        },
        abilities: {
            "0": "Chlorophyll",
            H: "Gluttony"
        },
        heightm: 0.7,
        weightkg: 4,
        color: "Green",
        evos: ["weepinbell"],
        eggGroups: ["Grass"],
        tier: "LC"
    },
    weepinbell: {
        num: 70,
        species: "Weepinbell",
        types: ["Grass", "Poison"],
        baseStats: {
            hp: 65,
            atk: 90,
            def: 50,
            spa: 85,
            spd: 45,
            spe: 55
        },
        abilities: {
            "0": "Chlorophyll",
            H: "Gluttony"
        },
        heightm: 1,
        weightkg: 6.4,
        color: "Green",
        prevo: "bellsprout",
        evos: ["victreebel"],
        evoLevel: 21,
        eggGroups: ["Grass"],
        tier: "NFE"
    },
    victreebel: {
        num: 71,
        species: "Victreebel",
        types: ["Grass", "Poison"],
        baseStats: {
            hp: 80,
            atk: 105,
            def: 65,
            spa: 100,
            spd: 70,
            spe: 70
        },
        abilities: {
            "0": "Chlorophyll",
            H: "Gluttony"
        },
        heightm: 1.7,
        weightkg: 15.5,
        color: "Green",
        prevo: "weepinbell",
        evoLevel: 21,
        eggGroups: ["Grass"],
        tier: "New"
    },
    tentacool: {
        num: 72,
        species: "Tentacool",
        types: ["Water", "Poison"],
        baseStats: {
            hp: 40,
            atk: 40,
            def: 35,
            spa: 50,
            spd: 100,
            spe: 70
        },
        abilities: {
            "0": "Clear Body",
            "1": "Liquid Ooze",
            H: "Rain Dish"
        },
        heightm: 0.9,
        weightkg: 45.5,
        color: "Blue",
        evos: ["tentacruel"],
        eggGroups: ["Water 3"],
        tier: "LC"
    },
    tentacruel: {
        num: 73,
        species: "Tentacruel",
        types: ["Water", "Poison"],
        baseStats: {
            hp: 80,
            atk: 70,
            def: 65,
            spa: 80,
            spd: 120,
            spe: 100
        },
        abilities: {
            "0": "Clear Body",
            "1": "Liquid Ooze",
            H: "Rain Dish"
        },
        heightm: 1.6,
        weightkg: 55,
        color: "Blue",
        prevo: "tentacool",
        evoLevel: 30,
        eggGroups: ["Water 3"],
        tier: "New"
    },
    geodude: {
        num: 74,
        species: "Geodude",
        types: ["Rock", "Ground"],
        baseStats: {
            hp: 40,
            atk: 80,
            def: 100,
            spa: 30,
            spd: 30,
            spe: 20
        },
        abilities: {
            "0": "Rock Head",
            "1": "Sturdy",
            H: "Sand Veil"
        },
        heightm: 0.4,
        weightkg: 20,
        color: "Brown",
        evos: ["graveler"],
        eggGroups: ["Mineral"],
        otherFormes: ["geodudealola"],
        tier: "Bank-LC"
    },
    geodudealola: {
        num: 74,
        species: "Geodude-Alola",
        baseSpecies: "Geodude",
        forme: "Alola",
        formeLetter: "A",
        types: ["Rock", "Electric"],
        baseStats: {
            hp: 40,
            atk: 80,
            def: 100,
            spa: 30,
            spd: 30,
            spe: 20
        },
        abilities: {
            "0": "Magnet Pull",
            "1": "Sturdy",
            H: "Galvanize"
        },
        heightm: 0.4,
        weightkg: 20.3,
        color: "Gray",
        evos: ["graveleralola"],
        eggGroups: ["Mineral"],
        tier: "LC"
    },
    graveler: {
        num: 75,
        species: "Graveler",
        types: ["Rock", "Ground"],
        baseStats: {
            hp: 55,
            atk: 95,
            def: 115,
            spa: 45,
            spd: 45,
            spe: 35
        },
        abilities: {
            "0": "Rock Head",
            "1": "Sturdy",
            H: "Sand Veil"
        },
        heightm: 1,
        weightkg: 105,
        color: "Brown",
        prevo: "geodude",
        evos: ["golem"],
        evoLevel: 25,
        eggGroups: ["Mineral"],
        otherFormes: ["graveleralola"],
        tier: "Bank-NFE"
    },
    graveleralola: {
        num: 75,
        species: "Graveler-Alola",
        baseSpecies: "Graveler",
        forme: "Alola",
        formeLetter: "A",
        types: ["Rock", "Electric"],
        baseStats: {
            hp: 55,
            atk: 95,
            def: 115,
            spa: 45,
            spd: 45,
            spe: 35
        },
        abilities: {
            "0": "Magnet Pull",
            "1": "Sturdy",
            H: "Galvanize"
        },
        heightm: 1,
        weightkg: 110,
        color: "Gray",
        prevo: "geodudealola",
        evos: ["golemalola"],
        evoLevel: 25,
        eggGroups: ["Mineral"],
        tier: "NFE"
    },
    golem: {
        num: 76,
        species: "Golem",
        types: ["Rock", "Ground"],
        baseStats: {
            hp: 80,
            atk: 120,
            def: 130,
            spa: 55,
            spd: 65,
            spe: 45
        },
        abilities: {
            "0": "Rock Head",
            "1": "Sturdy",
            H: "Sand Veil"
        },
        heightm: 1.4,
        weightkg: 300,
        color: "Brown",
        prevo: "graveler",
        evoLevel: 25,
        eggGroups: ["Mineral"],
        otherFormes: ["golemalola"],
        tier: "Bank"
    },
    golemalola: {
        num: 76,
        species: "Golem-Alola",
        baseSpecies: "Golem",
        forme: "Alola",
        formeLetter: "A",
        types: ["Rock", "Electric"],
        baseStats: {
            hp: 80,
            atk: 120,
            def: 130,
            spa: 55,
            spd: 65,
            spe: 45
        },
        abilities: {
            "0": "Magnet Pull",
            "1": "Sturdy",
            H: "Galvanize"
        },
        heightm: 1.7,
        weightkg: 316,
        color: "Gray",
        prevo: "graveleralola",
        evoLevel: 25,
        eggGroups: ["Mineral"],
        tier: "New"
    },
    ponyta: {
        num: 77,
        species: "Ponyta",
        types: ["Fire"],
        baseStats: {
            hp: 50,
            atk: 85,
            def: 55,
            spa: 65,
            spd: 65,
            spe: 90
        },
        abilities: {
            "0": "Run Away",
            "1": "Flash Fire",
            H: "Flame Body"
        },
        heightm: 1,
        weightkg: 30,
        color: "Yellow",
        evos: ["rapidash"],
        eggGroups: ["Field"],
        tier: "Bank-LC"
    },
    rapidash: {
        num: 78,
        species: "Rapidash",
        types: ["Fire"],
        baseStats: {
            hp: 65,
            atk: 100,
            def: 70,
            spa: 80,
            spd: 80,
            spe: 105
        },
        abilities: {
            "0": "Run Away",
            "1": "Flash Fire",
            H: "Flame Body"
        },
        heightm: 1.7,
        weightkg: 95,
        color: "Yellow",
        prevo: "ponyta",
        evoLevel: 40,
        eggGroups: ["Field"],
        tier: "Bank"
    },
    slowpoke: {
        num: 79,
        species: "Slowpoke",
        types: ["Water", "Psychic"],
        baseStats: {
            hp: 90,
            atk: 65,
            def: 65,
            spa: 40,
            spd: 40,
            spe: 15
        },
        abilities: {
            "0": "Oblivious",
            "1": "Own Tempo",
            H: "Regenerator"
        },
        heightm: 1.2,
        weightkg: 36,
        color: "Pink",
        evos: ["slowbro", "slowking"],
        eggGroups: ["Monster", "Water 1"],
        tier: "LC"
    },
    slowbro: {
        num: 80,
        species: "Slowbro",
        types: ["Water", "Psychic"],
        baseStats: {
            hp: 95,
            atk: 75,
            def: 110,
            spa: 100,
            spd: 80,
            spe: 30
        },
        abilities: {
            "0": "Oblivious",
            "1": "Own Tempo",
            H: "Regenerator"
        },
        heightm: 1.6,
        weightkg: 78.5,
        color: "Pink",
        prevo: "slowpoke",
        evoLevel: 37,
        eggGroups: ["Monster", "Water 1"],
        otherFormes: ["slowbromega"],
        tier: "New"
    },
    slowbromega: {
        num: 80,
        species: "Slowbro-Mega",
        baseSpecies: "Slowbro",
        forme: "Mega",
        formeLetter: "M",
        types: ["Water", "Psychic"],
        baseStats: {
            hp: 95,
            atk: 75,
            def: 180,
            spa: 130,
            spd: 80,
            spe: 30
        },
        abilities: {
            "0": "Shell Armor"
        },
        heightm: 2,
        weightkg: 120,
        color: "Pink",
        eggGroups: ["Monster", "Water 1"],
        tier: "(OU)",
        requiredItem: "Slowbronite"
    },
    magnemite: {
        num: 81,
        species: "Magnemite",
        types: ["Electric", "Steel"],
        gender: "N",
        baseStats: {
            hp: 25,
            atk: 35,
            def: 70,
            spa: 95,
            spd: 55,
            spe: 45
        },
        abilities: {
            "0": "Magnet Pull",
            "1": "Sturdy",
            H: "Analytic"
        },
        heightm: 0.3,
        weightkg: 6,
        color: "Gray",
        evos: ["magneton"],
        eggGroups: ["Mineral"],
        tier: "LC"
    },
    magneton: {
        num: 82,
        species: "Magneton",
        types: ["Electric", "Steel"],
        gender: "N",
        baseStats: {
            hp: 50,
            atk: 60,
            def: 95,
            spa: 120,
            spd: 70,
            spe: 70
        },
        abilities: {
            "0": "Magnet Pull",
            "1": "Sturdy",
            H: "Analytic"
        },
        heightm: 1,
        weightkg: 60,
        color: "Gray",
        prevo: "magnemite",
        evos: ["magnezone"],
        evoLevel: 30,
        eggGroups: ["Mineral"],
        tier: "New"
    },
    farfetchd: {
        num: 83,
        species: "Farfetch'd",
        types: ["Normal", "Flying"],
        baseStats: {
            hp: 52,
            atk: 90,
            def: 55,
            spa: 58,
            spd: 62,
            spe: 60
        },
        abilities: {
            "0": "Keen Eye",
            "1": "Inner Focus",
            H: "Defiant"
        },
        heightm: 0.8,
        weightkg: 15,
        color: "Brown",
        eggGroups: ["Flying", "Field"],
        tier: "Bank"
    },
    doduo: {
        num: 84,
        species: "Doduo",
        types: ["Normal", "Flying"],
        baseStats: {
            hp: 35,
            atk: 85,
            def: 45,
            spa: 35,
            spd: 35,
            spe: 75
        },
        abilities: {
            "0": "Run Away",
            "1": "Early Bird",
            H: "Tangled Feet"
        },
        heightm: 1.4,
        weightkg: 39.2,
        color: "Brown",
        evos: ["dodrio"],
        eggGroups: ["Flying"],
        tier: "Bank-LC"
    },
    dodrio: {
        num: 85,
        species: "Dodrio",
        types: ["Normal", "Flying"],
        baseStats: {
            hp: 60,
            atk: 110,
            def: 70,
            spa: 60,
            spd: 60,
            spe: 110
        },
        abilities: {
            "0": "Run Away",
            "1": "Early Bird",
            H: "Tangled Feet"
        },
        heightm: 1.8,
        weightkg: 85.2,
        color: "Brown",
        prevo: "doduo",
        evoLevel: 31,
        eggGroups: ["Flying"],
        tier: "Bank"
    },
    seel: {
        num: 86,
        species: "Seel",
        types: ["Water"],
        baseStats: {
            hp: 65,
            atk: 45,
            def: 55,
            spa: 45,
            spd: 70,
            spe: 45
        },
        abilities: {
            "0": "Thick Fat",
            "1": "Hydration",
            H: "Ice Body"
        },
        heightm: 1.1,
        weightkg: 90,
        color: "White",
        evos: ["dewgong"],
        eggGroups: ["Water 1", "Field"],
        tier: "Bank-LC"
    },
    dewgong: {
        num: 87,
        species: "Dewgong",
        types: ["Water", "Ice"],
        baseStats: {
            hp: 90,
            atk: 70,
            def: 80,
            spa: 70,
            spd: 95,
            spe: 70
        },
        abilities: {
            "0": "Thick Fat",
            "1": "Hydration",
            H: "Ice Body"
        },
        heightm: 1.7,
        weightkg: 120,
        color: "White",
        prevo: "seel",
        evoLevel: 34,
        eggGroups: ["Water 1", "Field"],
        tier: "Bank"
    },
    grimer: {
        num: 88,
        species: "Grimer",
        types: ["Poison"],
        baseStats: {
            hp: 80,
            atk: 80,
            def: 50,
            spa: 40,
            spd: 50,
            spe: 25
        },
        abilities: {
            "0": "Stench",
            "1": "Sticky Hold",
            H: "Poison Touch"
        },
        heightm: 0.9,
        weightkg: 30,
        color: "Purple",
        evos: ["muk"],
        eggGroups: ["Amorphous"],
        otherFormes: ["grimeralola"],
        tier: "Bank-LC"
    },
    grimeralola: {
        num: 88,
        species: "Grimer-Alola",
        baseSpecies: "Grimer",
        forme: "Alola",
        formeLetter: "A",
        types: ["Poison", "Dark"],
        baseStats: {
            hp: 80,
            atk: 80,
            def: 50,
            spa: 40,
            spd: 50,
            spe: 25
        },
        abilities: {
            "0": "Poison Touch",
            "1": "Gluttony",
            H: "Power of Alchemy"
        },
        heightm: 0.7,
        weightkg: 42,
        color: "Green",
        evos: ["mukalola"],
        eggGroups: ["Amorphous"],
        tier: "LC"
    },
    muk: {
        num: 89,
        species: "Muk",
        types: ["Poison"],
        baseStats: {
            hp: 105,
            atk: 105,
            def: 75,
            spa: 65,
            spd: 100,
            spe: 50
        },
        abilities: {
            "0": "Stench",
            "1": "Sticky Hold",
            H: "Poison Touch"
        },
        heightm: 1.2,
        weightkg: 30,
        color: "Purple",
        prevo: "grimer",
        evoLevel: 38,
        eggGroups: ["Amorphous"],
        otherFormes: ["mukalola"],
        tier: "Bank"
    },
    mukalola: {
        num: 89,
        species: "Muk-Alola",
        baseSpecies: "Muk",
        forme: "Alola",
        formeLetter: "A",
        types: ["Poison", "Dark"],
        baseStats: {
            hp: 105,
            atk: 105,
            def: 75,
            spa: 65,
            spd: 100,
            spe: 50
        },
        abilities: {
            "0": "Poison Touch",
            "1": "Gluttony",
            H: "Power of Alchemy"
        },
        heightm: 1,
        weightkg: 52,
        color: "Green",
        prevo: "grimeralola",
        evoLevel: 38,
        eggGroups: ["Amorphous"],
        tier: "New"
    },
    shellder: {
        num: 90,
        species: "Shellder",
        types: ["Water"],
        baseStats: {
            hp: 30,
            atk: 65,
            def: 100,
            spa: 45,
            spd: 25,
            spe: 40
        },
        abilities: {
            "0": "Shell Armor",
            "1": "Skill Link",
            H: "Overcoat"
        },
        heightm: 0.3,
        weightkg: 4,
        color: "Purple",
        evos: ["cloyster"],
        eggGroups: ["Water 3"],
        tier: "LC"
    },
    cloyster: {
        num: 91,
        species: "Cloyster",
        types: ["Water", "Ice"],
        baseStats: {
            hp: 50,
            atk: 95,
            def: 180,
            spa: 85,
            spd: 45,
            spe: 70
        },
        abilities: {
            "0": "Shell Armor",
            "1": "Skill Link",
            H: "Overcoat"
        },
        heightm: 1.5,
        weightkg: 132.5,
        color: "Purple",
        prevo: "shellder",
        evoLevel: 1,
        eggGroups: ["Water 3"],
        tier: "New"
    },
    gastly: {
        num: 92,
        species: "Gastly",
        types: ["Ghost", "Poison"],
        baseStats: {
            hp: 30,
            atk: 35,
            def: 30,
            spa: 100,
            spd: 35,
            spe: 80
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 1.3,
        weightkg: 0.1,
        color: "Purple",
        evos: ["haunter"],
        eggGroups: ["Amorphous"],
        tier: "LC"
    },
    haunter: {
        num: 93,
        species: "Haunter",
        types: ["Ghost", "Poison"],
        baseStats: {
            hp: 45,
            atk: 50,
            def: 45,
            spa: 115,
            spd: 55,
            spe: 95
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 1.6,
        weightkg: 0.1,
        color: "Purple",
        prevo: "gastly",
        evos: ["gengar"],
        evoLevel: 25,
        eggGroups: ["Amorphous"],
        tier: "New"
    },
    gengar: {
        num: 94,
        species: "Gengar",
        types: ["Ghost", "Poison"],
        baseStats: {
            hp: 60,
            atk: 65,
            def: 60,
            spa: 130,
            spd: 75,
            spe: 110
        },
        abilities: {
            "0": "Cursed Body"
        },
        heightm: 1.5,
        weightkg: 40.5,
        color: "Purple",
        prevo: "haunter",
        evoLevel: 25,
        eggGroups: ["Amorphous"],
        otherFormes: ["gengarmega"],
        tier: "New"
    },
    gengarmega: {
        num: 94,
        species: "Gengar-Mega",
        baseSpecies: "Gengar",
        forme: "Mega",
        formeLetter: "M",
        types: ["Ghost", "Poison"],
        baseStats: {
            hp: 60,
            atk: 65,
            def: 80,
            spa: 170,
            spd: 95,
            spe: 130
        },
        abilities: {
            "0": "Shadow Tag"
        },
        heightm: 1.4,
        weightkg: 40.5,
        color: "Purple",
        eggGroups: ["Amorphous"],
        tier: "Uber",
        requiredItem: "Gengarite"
    },
    onix: {
        num: 95,
        species: "Onix",
        types: ["Rock", "Ground"],
        baseStats: {
            hp: 35,
            atk: 45,
            def: 160,
            spa: 30,
            spd: 45,
            spe: 70
        },
        abilities: {
            "0": "Rock Head",
            "1": "Sturdy",
            H: "Weak Armor"
        },
        heightm: 8.8,
        weightkg: 210,
        color: "Gray",
        evos: ["steelix"],
        eggGroups: ["Mineral"],
        tier: "Bank-LC"
    },
    drowzee: {
        num: 96,
        species: "Drowzee",
        types: ["Psychic"],
        baseStats: {
            hp: 60,
            atk: 48,
            def: 45,
            spa: 43,
            spd: 90,
            spe: 42
        },
        abilities: {
            "0": "Insomnia",
            "1": "Forewarn",
            H: "Inner Focus"
        },
        heightm: 1,
        weightkg: 32.4,
        color: "Yellow",
        evos: ["hypno"],
        eggGroups: ["Human-Like"],
        tier: "LC"
    },
    hypno: {
        num: 97,
        species: "Hypno",
        types: ["Psychic"],
        baseStats: {
            hp: 85,
            atk: 73,
            def: 70,
            spa: 73,
            spd: 115,
            spe: 67
        },
        abilities: {
            "0": "Insomnia",
            "1": "Forewarn",
            H: "Inner Focus"
        },
        heightm: 1.6,
        weightkg: 75.6,
        color: "Yellow",
        prevo: "drowzee",
        evoLevel: 26,
        eggGroups: ["Human-Like"],
        tier: "New"
    },
    krabby: {
        num: 98,
        species: "Krabby",
        types: ["Water"],
        baseStats: {
            hp: 30,
            atk: 105,
            def: 90,
            spa: 25,
            spd: 25,
            spe: 50
        },
        abilities: {
            "0": "Hyper Cutter",
            "1": "Shell Armor",
            H: "Sheer Force"
        },
        heightm: 0.4,
        weightkg: 6.5,
        color: "Red",
        evos: ["kingler"],
        eggGroups: ["Water 3"],
        tier: "Bank-LC"
    },
    kingler: {
        num: 99,
        species: "Kingler",
        types: ["Water"],
        baseStats: {
            hp: 55,
            atk: 130,
            def: 115,
            spa: 50,
            spd: 50,
            spe: 75
        },
        abilities: {
            "0": "Hyper Cutter",
            "1": "Shell Armor",
            H: "Sheer Force"
        },
        heightm: 1.3,
        weightkg: 60,
        color: "Red",
        prevo: "krabby",
        evoLevel: 28,
        eggGroups: ["Water 3"],
        tier: "Bank"
    },
    voltorb: {
        num: 100,
        species: "Voltorb",
        types: ["Electric"],
        gender: "N",
        baseStats: {
            hp: 40,
            atk: 30,
            def: 50,
            spa: 55,
            spd: 55,
            spe: 100
        },
        abilities: {
            "0": "Soundproof",
            "1": "Static",
            H: "Aftermath"
        },
        heightm: 0.5,
        weightkg: 10.4,
        color: "Red",
        evos: ["electrode"],
        eggGroups: ["Mineral"],
        tier: "Bank-LC"
    },
    electrode: {
        num: 101,
        species: "Electrode",
        types: ["Electric"],
        gender: "N",
        baseStats: {
            hp: 60,
            atk: 50,
            def: 70,
            spa: 80,
            spd: 80,
            spe: 150
        },
        abilities: {
            "0": "Soundproof",
            "1": "Static",
            H: "Aftermath"
        },
        heightm: 1.2,
        weightkg: 66.6,
        color: "Red",
        prevo: "voltorb",
        evoLevel: 30,
        eggGroups: ["Mineral"],
        tier: "Bank"
    },
    exeggcute: {
        num: 102,
        species: "Exeggcute",
        types: ["Grass", "Psychic"],
        baseStats: {
            hp: 60,
            atk: 40,
            def: 80,
            spa: 60,
            spd: 45,
            spe: 40
        },
        abilities: {
            "0": "Chlorophyll",
            H: "Harvest"
        },
        heightm: 0.4,
        weightkg: 2.5,
        color: "Pink",
        evos: ["exeggutor", "exeggutoralola"],
        eggGroups: ["Grass"],
        tier: "LC"
    },
    exeggutor: {
        num: 103,
        species: "Exeggutor",
        types: ["Grass", "Psychic"],
        baseStats: {
            hp: 95,
            atk: 95,
            def: 85,
            spa: 125,
            spd: 75,
            spe: 55
        },
        abilities: {
            "0": "Chlorophyll",
            H: "Harvest"
        },
        heightm: 2,
        weightkg: 120,
        color: "Yellow",
        prevo: "exeggcute",
        evoLevel: 1,
        eggGroups: ["Grass"],
        otherFormes: ["exeggutoralola"],
        tier: "Bank"
    },
    exeggutoralola: {
        num: 103,
        species: "Exeggutor-Alola",
        baseSpecies: "Exeggutor",
        forme: "Alola",
        formeLetter: "A",
        types: ["Grass", "Dragon"],
        baseStats: {
            hp: 95,
            atk: 105,
            def: 85,
            spa: 125,
            spd: 75,
            spe: 45
        },
        abilities: {
            "0": "Frisk",
            H: "Harvest"
        },
        heightm: 10.9,
        weightkg: 415.6,
        color: "Yellow",
        prevo: "exeggcute",
        evoLevel: 1,
        eggGroups: ["Grass"],
        tier: "New"
    },
    cubone: {
        num: 104,
        species: "Cubone",
        types: ["Ground"],
        baseStats: {
            hp: 50,
            atk: 50,
            def: 95,
            spa: 40,
            spd: 50,
            spe: 35
        },
        abilities: {
            "0": "Rock Head",
            "1": "Lightning Rod",
            H: "Battle Armor"
        },
        heightm: 0.4,
        weightkg: 6.5,
        color: "Brown",
        evos: ["marowak", "marowakalola"],
        eggGroups: ["Monster"],
        tier: "LC"
    },
    marowak: {
        num: 105,
        species: "Marowak",
        types: ["Ground"],
        baseStats: {
            hp: 60,
            atk: 80,
            def: 110,
            spa: 50,
            spd: 80,
            spe: 45
        },
        abilities: {
            "0": "Rock Head",
            "1": "Lightning Rod",
            H: "Battle Armor"
        },
        heightm: 1,
        weightkg: 45,
        color: "Brown",
        prevo: "cubone",
        evoLevel: 28,
        eggGroups: ["Monster"],
        otherFormes: ["marowakalola"],
        tier: "Bank"
    },
    marowakalola: {
        num: 105,
        species: "Marowak-Alola",
        baseSpecies: "Marowak",
        forme: "Alola",
        formeLetter: "A",
        types: ["Fire", "Ghost"],
        baseStats: {
            hp: 60,
            atk: 80,
            def: 110,
            spa: 50,
            spd: 80,
            spe: 45
        },
        abilities: {
            "0": "Cursed Body",
            "1": "Lightning Rod",
            H: "Rock Head"
        },
        heightm: 1,
        weightkg: 34,
        color: "Purple",
        prevo: "cubone",
        evoLevel: 28,
        eggGroups: ["Monster"],
        tier: "New"
    },
    hitmonlee: {
        num: 106,
        species: "Hitmonlee",
        types: ["Fighting"],
        gender: "M",
        baseStats: {
            hp: 50,
            atk: 120,
            def: 53,
            spa: 35,
            spd: 110,
            spe: 87
        },
        abilities: {
            "0": "Limber",
            "1": "Reckless",
            H: "Unburden"
        },
        heightm: 1.5,
        weightkg: 49.8,
        color: "Brown",
        prevo: "tyrogue",
        evoLevel: 20,
        eggGroups: ["Human-Like"],
        tier: "Bank"
    },
    hitmonchan: {
        num: 107,
        species: "Hitmonchan",
        types: ["Fighting"],
        gender: "M",
        baseStats: {
            hp: 50,
            atk: 105,
            def: 79,
            spa: 35,
            spd: 110,
            spe: 76
        },
        abilities: {
            "0": "Keen Eye",
            "1": "Iron Fist",
            H: "Inner Focus"
        },
        heightm: 1.4,
        weightkg: 50.2,
        color: "Brown",
        prevo: "tyrogue",
        evoLevel: 20,
        eggGroups: ["Human-Like"],
        tier: "Bank"
    },
    lickitung: {
        num: 108,
        species: "Lickitung",
        types: ["Normal"],
        baseStats: {
            hp: 90,
            atk: 55,
            def: 75,
            spa: 60,
            spd: 75,
            spe: 30
        },
        abilities: {
            "0": "Own Tempo",
            "1": "Oblivious",
            H: "Cloud Nine"
        },
        heightm: 1.2,
        weightkg: 65.5,
        color: "Pink",
        evos: ["lickilicky"],
        eggGroups: ["Monster"],
        tier: "Bank-LC"
    },
    koffing: {
        num: 109,
        species: "Koffing",
        types: ["Poison"],
        baseStats: {
            hp: 40,
            atk: 65,
            def: 95,
            spa: 60,
            spd: 45,
            spe: 35
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 0.6,
        weightkg: 1,
        color: "Purple",
        evos: ["weezing"],
        eggGroups: ["Amorphous"],
        tier: "Bank-LC"
    },
    weezing: {
        num: 110,
        species: "Weezing",
        types: ["Poison"],
        baseStats: {
            hp: 65,
            atk: 90,
            def: 120,
            spa: 85,
            spd: 70,
            spe: 60
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 1.2,
        weightkg: 9.5,
        color: "Purple",
        prevo: "koffing",
        evoLevel: 35,
        eggGroups: ["Amorphous"],
        tier: "Bank"
    },
    rhyhorn: {
        num: 111,
        species: "Rhyhorn",
        types: ["Ground", "Rock"],
        baseStats: {
            hp: 80,
            atk: 85,
            def: 95,
            spa: 30,
            spd: 30,
            spe: 25
        },
        abilities: {
            "0": "Lightning Rod",
            "1": "Rock Head",
            H: "Reckless"
        },
        heightm: 1,
        weightkg: 115,
        color: "Gray",
        evos: ["rhydon"],
        eggGroups: ["Monster", "Field"],
        tier: "LC"
    },
    rhydon: {
        num: 112,
        species: "Rhydon",
        types: ["Ground", "Rock"],
        baseStats: {
            hp: 105,
            atk: 130,
            def: 120,
            spa: 45,
            spd: 45,
            spe: 40
        },
        abilities: {
            "0": "Lightning Rod",
            "1": "Rock Head",
            H: "Reckless"
        },
        heightm: 1.9,
        weightkg: 120,
        color: "Gray",
        prevo: "rhyhorn",
        evos: ["rhyperior"],
        evoLevel: 42,
        eggGroups: ["Monster", "Field"],
        tier: "New"
    },
    chansey: {
        num: 113,
        species: "Chansey",
        types: ["Normal"],
        gender: "F",
        baseStats: {
            hp: 250,
            atk: 5,
            def: 5,
            spa: 35,
            spd: 105,
            spe: 50
        },
        abilities: {
            "0": "Natural Cure",
            "1": "Serene Grace",
            H: "Healer"
        },
        heightm: 1.1,
        weightkg: 34.6,
        color: "Pink",
        prevo: "happiny",
        evos: ["blissey"],
        evoLevel: 1,
        eggGroups: ["Fairy"],
        tier: "New"
    },
    tangela: {
        num: 114,
        species: "Tangela",
        types: ["Grass"],
        baseStats: {
            hp: 65,
            atk: 55,
            def: 115,
            spa: 100,
            spd: 40,
            spe: 60
        },
        abilities: {
            "0": "Chlorophyll",
            "1": "Leaf Guard",
            H: "Regenerator"
        },
        heightm: 1,
        weightkg: 35,
        color: "Blue",
        evos: ["tangrowth"],
        eggGroups: ["Grass"],
        tier: "Bank"
    },
    kangaskhan: {
        num: 115,
        species: "Kangaskhan",
        types: ["Normal"],
        gender: "F",
        baseStats: {
            hp: 105,
            atk: 95,
            def: 80,
            spa: 40,
            spd: 80,
            spe: 90
        },
        abilities: {
            "0": "Early Bird",
            "1": "Scrappy",
            H: "Inner Focus"
        },
        heightm: 2.2,
        weightkg: 80,
        color: "Brown",
        eggGroups: ["Monster"],
        otherFormes: ["kangaskhanmega"],
        tier: "New"
    },
    kangaskhanmega: {
        num: 115,
        species: "Kangaskhan-Mega",
        baseSpecies: "Kangaskhan",
        forme: "Mega",
        formeLetter: "M",
        types: ["Normal"],
        gender: "F",
        baseStats: {
            hp: 105,
            atk: 125,
            def: 100,
            spa: 60,
            spd: 100,
            spe: 100
        },
        abilities: {
            "0": "Parental Bond"
        },
        heightm: 2.2,
        weightkg: 100,
        color: "Brown",
        eggGroups: ["Monster"],
        tier: "Uber",
        requiredItem: "Kangaskhanite"
    },
    horsea: {
        num: 116,
        species: "Horsea",
        types: ["Water"],
        baseStats: {
            hp: 30,
            atk: 40,
            def: 70,
            spa: 70,
            spd: 25,
            spe: 60
        },
        abilities: {
            "0": "Swift Swim",
            "1": "Sniper",
            H: "Damp"
        },
        heightm: 0.4,
        weightkg: 8,
        color: "Blue",
        evos: ["seadra"],
        eggGroups: ["Water 1", "Dragon"],
        tier: "LC"
    },
    seadra: {
        num: 117,
        species: "Seadra",
        types: ["Water"],
        baseStats: {
            hp: 55,
            atk: 65,
            def: 95,
            spa: 95,
            spd: 45,
            spe: 85
        },
        abilities: {
            "0": "Poison Point",
            "1": "Sniper",
            H: "Damp"
        },
        heightm: 1.2,
        weightkg: 25,
        color: "Blue",
        prevo: "horsea",
        evos: ["kingdra"],
        evoLevel: 32,
        eggGroups: ["Water 1", "Dragon"],
        tier: "NFE"
    },
    goldeen: {
        num: 118,
        species: "Goldeen",
        types: ["Water"],
        baseStats: {
            hp: 45,
            atk: 67,
            def: 60,
            spa: 35,
            spd: 50,
            spe: 63
        },
        abilities: {
            "0": "Swift Swim",
            "1": "Water Veil",
            H: "Lightning Rod"
        },
        heightm: 0.6,
        weightkg: 15,
        color: "Red",
        evos: ["seaking"],
        eggGroups: ["Water 2"],
        tier: "LC"
    },
    seaking: {
        num: 119,
        species: "Seaking",
        types: ["Water"],
        baseStats: {
            hp: 80,
            atk: 92,
            def: 65,
            spa: 65,
            spd: 80,
            spe: 68
        },
        abilities: {
            "0": "Swift Swim",
            "1": "Water Veil",
            H: "Lightning Rod"
        },
        heightm: 1.3,
        weightkg: 39,
        color: "Red",
        prevo: "goldeen",
        evoLevel: 33,
        eggGroups: ["Water 2"],
        tier: "New"
    },
    staryu: {
        num: 120,
        species: "Staryu",
        types: ["Water"],
        gender: "N",
        baseStats: {
            hp: 30,
            atk: 45,
            def: 55,
            spa: 70,
            spd: 55,
            spe: 85
        },
        abilities: {
            "0": "Illuminate",
            "1": "Natural Cure",
            H: "Analytic"
        },
        heightm: 0.8,
        weightkg: 34.5,
        color: "Brown",
        evos: ["starmie"],
        eggGroups: ["Water 3"],
        tier: "LC"
    },
    starmie: {
        num: 121,
        species: "Starmie",
        types: ["Water", "Psychic"],
        gender: "N",
        baseStats: {
            hp: 60,
            atk: 75,
            def: 85,
            spa: 100,
            spd: 85,
            spe: 115
        },
        abilities: {
            "0": "Illuminate",
            "1": "Natural Cure",
            H: "Analytic"
        },
        heightm: 1.1,
        weightkg: 80,
        color: "Purple",
        prevo: "staryu",
        evoLevel: 1,
        eggGroups: ["Water 3"],
        tier: "New"
    },
    mrmime: {
        num: 122,
        species: "Mr. Mime",
        types: ["Psychic", "Fairy"],
        baseStats: {
            hp: 40,
            atk: 45,
            def: 65,
            spa: 100,
            spd: 120,
            spe: 90
        },
        abilities: {
            "0": "Soundproof",
            "1": "Filter",
            H: "Technician"
        },
        heightm: 1.3,
        weightkg: 54.5,
        color: "Pink",
        prevo: "mimejr",
        evoLevel: 1,
        evoMove: "Mimic",
        eggGroups: ["Human-Like"],
        tier: "Bank"
    },
    scyther: {
        num: 123,
        species: "Scyther",
        types: ["Bug", "Flying"],
        baseStats: {
            hp: 70,
            atk: 110,
            def: 80,
            spa: 55,
            spd: 80,
            spe: 105
        },
        abilities: {
            "0": "Swarm",
            "1": "Technician",
            H: "Steadfast"
        },
        heightm: 1.5,
        weightkg: 56,
        color: "Green",
        evos: ["scizor"],
        eggGroups: ["Bug"],
        tier: "New"
    },
    jynx: {
        num: 124,
        species: "Jynx",
        types: ["Ice", "Psychic"],
        gender: "F",
        baseStats: {
            hp: 65,
            atk: 50,
            def: 35,
            spa: 115,
            spd: 95,
            spe: 95
        },
        abilities: {
            "0": "Oblivious",
            "1": "Forewarn",
            H: "Dry Skin"
        },
        heightm: 1.4,
        weightkg: 40.6,
        color: "Red",
        prevo: "smoochum",
        evoLevel: 30,
        eggGroups: ["Human-Like"],
        tier: "Bank"
    },
    electabuzz: {
        num: 125,
        species: "Electabuzz",
        types: ["Electric"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 65,
            atk: 83,
            def: 57,
            spa: 95,
            spd: 85,
            spe: 105
        },
        abilities: {
            "0": "Static",
            H: "Vital Spirit"
        },
        heightm: 1.1,
        weightkg: 30,
        color: "Yellow",
        prevo: "elekid",
        evos: ["electivire"],
        evoLevel: 30,
        eggGroups: ["Human-Like"],
        tier: "NFE"
    },
    magmar: {
        num: 126,
        species: "Magmar",
        types: ["Fire"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 65,
            atk: 95,
            def: 57,
            spa: 100,
            spd: 85,
            spe: 93
        },
        abilities: {
            "0": "Flame Body",
            H: "Vital Spirit"
        },
        heightm: 1.3,
        weightkg: 44.5,
        color: "Red",
        prevo: "magby",
        evos: ["magmortar"],
        evoLevel: 30,
        eggGroups: ["Human-Like"],
        tier: "NFE"
    },
    pinsir: {
        num: 127,
        species: "Pinsir",
        types: ["Bug"],
        baseStats: {
            hp: 65,
            atk: 125,
            def: 100,
            spa: 55,
            spd: 70,
            spe: 85
        },
        abilities: {
            "0": "Hyper Cutter",
            "1": "Mold Breaker",
            H: "Moxie"
        },
        heightm: 1.5,
        weightkg: 55,
        color: "Brown",
        eggGroups: ["Bug"],
        otherFormes: ["pinsirmega"],
        tier: "New"
    },
    pinsirmega: {
        num: 127,
        species: "Pinsir-Mega",
        baseSpecies: "Pinsir",
        forme: "Mega",
        formeLetter: "M",
        types: ["Bug", "Flying"],
        baseStats: {
            hp: 65,
            atk: 155,
            def: 120,
            spa: 65,
            spd: 90,
            spe: 105
        },
        abilities: {
            "0": "Aerilate"
        },
        heightm: 1.7,
        weightkg: 59,
        color: "Brown",
        eggGroups: ["Bug"],
        tier: "New",
        requiredItem: "Pinsirite"
    },
    tauros: {
        num: 128,
        species: "Tauros",
        types: ["Normal"],
        gender: "M",
        baseStats: {
            hp: 75,
            atk: 100,
            def: 95,
            spa: 40,
            spd: 70,
            spe: 110
        },
        abilities: {
            "0": "Intimidate",
            "1": "Anger Point",
            H: "Sheer Force"
        },
        heightm: 1.4,
        weightkg: 88.4,
        color: "Brown",
        eggGroups: ["Field"],
        tier: "New"
    },
    magikarp: {
        num: 129,
        species: "Magikarp",
        types: ["Water"],
        baseStats: {
            hp: 20,
            atk: 10,
            def: 55,
            spa: 15,
            spd: 20,
            spe: 80
        },
        abilities: {
            "0": "Swift Swim",
            H: "Rattled"
        },
        heightm: 0.9,
        weightkg: 10,
        color: "Red",
        evos: ["gyarados"],
        eggGroups: ["Water 2", "Dragon"],
        tier: "LC"
    },
    gyarados: {
        num: 130,
        species: "Gyarados",
        types: ["Water", "Flying"],
        baseStats: {
            hp: 95,
            atk: 125,
            def: 79,
            spa: 60,
            spd: 100,
            spe: 81
        },
        abilities: {
            "0": "Intimidate",
            H: "Moxie"
        },
        heightm: 6.5,
        weightkg: 235,
        color: "Blue",
        prevo: "magikarp",
        evoLevel: 20,
        eggGroups: ["Water 2", "Dragon"],
        otherFormes: ["gyaradosmega"],
        tier: "New"
    },
    gyaradosmega: {
        num: 130,
        species: "Gyarados-Mega",
        baseSpecies: "Gyarados",
        forme: "Mega",
        formeLetter: "M",
        types: ["Water", "Dark"],
        baseStats: {
            hp: 95,
            atk: 155,
            def: 109,
            spa: 70,
            spd: 130,
            spe: 81
        },
        abilities: {
            "0": "Mold Breaker"
        },
        heightm: 6.5,
        weightkg: 305,
        color: "Blue",
        eggGroups: ["Water 2", "Dragon"],
        tier: "New",
        requiredItem: "Gyaradosite"
    },
    lapras: {
        num: 131,
        species: "Lapras",
        types: ["Water", "Ice"],
        baseStats: {
            hp: 130,
            atk: 85,
            def: 80,
            spa: 85,
            spd: 95,
            spe: 60
        },
        abilities: {
            "0": "Water Absorb",
            "1": "Shell Armor",
            H: "Hydration"
        },
        heightm: 2.5,
        weightkg: 220,
        color: "Blue",
        eggGroups: ["Monster", "Water 1"],
        tier: "New"
    },
    ditto: {
        num: 132,
        species: "Ditto",
        types: ["Normal"],
        gender: "N",
        baseStats: {
            hp: 48,
            atk: 48,
            def: 48,
            spa: 48,
            spd: 48,
            spe: 48
        },
        abilities: {
            "0": "Limber",
            H: "Imposter"
        },
        heightm: 0.3,
        weightkg: 4,
        color: "Purple",
        eggGroups: ["Ditto"],
        tier: "New"
    },
    eevee: {
        num: 133,
        species: "Eevee",
        types: ["Normal"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 55,
            atk: 55,
            def: 50,
            spa: 45,
            spd: 65,
            spe: 55
        },
        abilities: {
            "0": "Run Away",
            "1": "Adaptability",
            H: "Anticipation"
        },
        heightm: 0.3,
        weightkg: 6.5,
        color: "Brown",
        evos: ["vaporeon", "jolteon", "flareon", "espeon", "umbreon", "leafeon", "glaceon", "sylveon"],
        eggGroups: ["Field"],
        tier: "LC"
    },
    vaporeon: {
        num: 134,
        species: "Vaporeon",
        types: ["Water"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 130,
            atk: 65,
            def: 60,
            spa: 110,
            spd: 95,
            spe: 65
        },
        abilities: {
            "0": "Water Absorb",
            H: "Hydration"
        },
        heightm: 1,
        weightkg: 29,
        color: "Blue",
        prevo: "eevee",
        evoLevel: 1,
        eggGroups: ["Field"],
        tier: "New"
    },
    jolteon: {
        num: 135,
        species: "Jolteon",
        types: ["Electric"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 65,
            atk: 65,
            def: 60,
            spa: 110,
            spd: 95,
            spe: 130
        },
        abilities: {
            "0": "Volt Absorb",
            H: "Quick Feet"
        },
        heightm: 0.8,
        weightkg: 24.5,
        color: "Yellow",
        prevo: "eevee",
        evoLevel: 1,
        eggGroups: ["Field"],
        tier: "New"
    },
    flareon: {
        num: 136,
        species: "Flareon",
        types: ["Fire"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 65,
            atk: 130,
            def: 60,
            spa: 95,
            spd: 110,
            spe: 65
        },
        abilities: {
            "0": "Flash Fire",
            H: "Guts"
        },
        heightm: 0.9,
        weightkg: 25,
        color: "Red",
        prevo: "eevee",
        evoLevel: 1,
        eggGroups: ["Field"],
        tier: "New"
    },
    porygon: {
        num: 137,
        species: "Porygon",
        types: ["Normal"],
        gender: "N",
        baseStats: {
            hp: 65,
            atk: 60,
            def: 70,
            spa: 85,
            spd: 75,
            spe: 40
        },
        abilities: {
            "0": "Trace",
            "1": "Download",
            H: "Analytic"
        },
        heightm: 0.8,
        weightkg: 36.5,
        color: "Pink",
        evos: ["porygon2"],
        eggGroups: ["Mineral"],
        tier: "LC Uber"
    },
    omanyte: {
        num: 138,
        species: "Omanyte",
        types: ["Rock", "Water"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 35,
            atk: 40,
            def: 100,
            spa: 90,
            spd: 55,
            spe: 35
        },
        abilities: {
            "0": "Swift Swim",
            "1": "Shell Armor",
            H: "Weak Armor"
        },
        heightm: 0.4,
        weightkg: 7.5,
        color: "Blue",
        evos: ["omastar"],
        eggGroups: ["Water 1", "Water 3"],
        tier: "Bank-LC"
    },
    omastar: {
        num: 139,
        species: "Omastar",
        types: ["Rock", "Water"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 70,
            atk: 60,
            def: 125,
            spa: 115,
            spd: 70,
            spe: 55
        },
        abilities: {
            "0": "Swift Swim",
            "1": "Shell Armor",
            H: "Weak Armor"
        },
        heightm: 1,
        weightkg: 35,
        color: "Blue",
        prevo: "omanyte",
        evoLevel: 40,
        eggGroups: ["Water 1", "Water 3"],
        tier: "Bank"
    },
    kabuto: {
        num: 140,
        species: "Kabuto",
        types: ["Rock", "Water"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 30,
            atk: 80,
            def: 90,
            spa: 55,
            spd: 45,
            spe: 55
        },
        abilities: {
            "0": "Swift Swim",
            "1": "Battle Armor",
            H: "Weak Armor"
        },
        heightm: 0.5,
        weightkg: 11.5,
        color: "Brown",
        evos: ["kabutops"],
        eggGroups: ["Water 1", "Water 3"],
        tier: "Bank-LC"
    },
    kabutops: {
        num: 141,
        species: "Kabutops",
        types: ["Rock", "Water"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 60,
            atk: 115,
            def: 105,
            spa: 65,
            spd: 70,
            spe: 80
        },
        abilities: {
            "0": "Swift Swim",
            "1": "Battle Armor",
            H: "Weak Armor"
        },
        heightm: 1.3,
        weightkg: 40.5,
        color: "Brown",
        prevo: "kabuto",
        evoLevel: 40,
        eggGroups: ["Water 1", "Water 3"],
        tier: "Bank"
    },
    aerodactyl: {
        num: 142,
        species: "Aerodactyl",
        types: ["Rock", "Flying"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 80,
            atk: 105,
            def: 65,
            spa: 60,
            spd: 75,
            spe: 130
        },
        abilities: {
            "0": "Rock Head",
            "1": "Pressure",
            H: "Unnerve"
        },
        heightm: 1.8,
        weightkg: 59,
        color: "Purple",
        eggGroups: ["Flying"],
        otherFormes: ["aerodactylmega"],
        tier: "New"
    },
    aerodactylmega: {
        num: 142,
        species: "Aerodactyl-Mega",
        baseSpecies: "Aerodactyl",
        forme: "Mega",
        formeLetter: "M",
        types: ["Rock", "Flying"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 80,
            atk: 135,
            def: 85,
            spa: 70,
            spd: 95,
            spe: 150
        },
        abilities: {
            "0": "Tough Claws"
        },
        heightm: 2.1,
        weightkg: 79,
        color: "Purple",
        eggGroups: ["Flying"],
        tier: "New",
        requiredItem: "Aerodactylite"
    },
    snorlax: {
        num: 143,
        species: "Snorlax",
        types: ["Normal"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 160,
            atk: 110,
            def: 65,
            spa: 65,
            spd: 110,
            spe: 30
        },
        abilities: {
            "0": "Immunity",
            "1": "Thick Fat",
            H: "Gluttony"
        },
        heightm: 2.1,
        weightkg: 460,
        color: "Black",
        prevo: "munchlax",
        evoLevel: 1,
        eggGroups: ["Monster"],
        tier: "New"
    },
    articuno: {
        num: 144,
        species: "Articuno",
        types: ["Ice", "Flying"],
        gender: "N",
        baseStats: {
            hp: 90,
            atk: 85,
            def: 100,
            spa: 95,
            spd: 125,
            spe: 85
        },
        abilities: {
            "0": "Pressure",
            H: "Snow Cloak"
        },
        heightm: 1.7,
        weightkg: 55.4,
        color: "Blue",
        eggGroups: ["Undiscovered"],
        tier: "Bank"
    },
    zapdos: {
        num: 145,
        species: "Zapdos",
        types: ["Electric", "Flying"],
        gender: "N",
        baseStats: {
            hp: 90,
            atk: 90,
            def: 85,
            spa: 125,
            spd: 90,
            spe: 100
        },
        abilities: {
            "0": "Pressure",
            H: "Static"
        },
        heightm: 1.6,
        weightkg: 52.6,
        color: "Yellow",
        eggGroups: ["Undiscovered"],
        tier: "Bank"
    },
    moltres: {
        num: 146,
        species: "Moltres",
        types: ["Fire", "Flying"],
        gender: "N",
        baseStats: {
            hp: 90,
            atk: 100,
            def: 90,
            spa: 125,
            spd: 85,
            spe: 90
        },
        abilities: {
            "0": "Pressure",
            H: "Flame Body"
        },
        heightm: 2,
        weightkg: 60,
        color: "Yellow",
        eggGroups: ["Undiscovered"],
        tier: "Bank"
    },
    dratini: {
        num: 147,
        species: "Dratini",
        types: ["Dragon"],
        baseStats: {
            hp: 41,
            atk: 64,
            def: 45,
            spa: 50,
            spd: 50,
            spe: 50
        },
        abilities: {
            "0": "Shed Skin",
            H: "Marvel Scale"
        },
        heightm: 1.8,
        weightkg: 3.3,
        color: "Blue",
        evos: ["dragonair"],
        eggGroups: ["Water 1", "Dragon"],
        tier: "LC"
    },
    dragonair: {
        num: 148,
        species: "Dragonair",
        types: ["Dragon"],
        baseStats: {
            hp: 61,
            atk: 84,
            def: 65,
            spa: 70,
            spd: 70,
            spe: 70
        },
        abilities: {
            "0": "Shed Skin",
            H: "Marvel Scale"
        },
        heightm: 4,
        weightkg: 16.5,
        color: "Blue",
        prevo: "dratini",
        evos: ["dragonite"],
        evoLevel: 30,
        eggGroups: ["Water 1", "Dragon"],
        tier: "NFE"
    },
    dragonite: {
        num: 149,
        species: "Dragonite",
        types: ["Dragon", "Flying"],
        baseStats: {
            hp: 91,
            atk: 134,
            def: 95,
            spa: 100,
            spd: 100,
            spe: 80
        },
        abilities: {
            "0": "Inner Focus",
            H: "Multiscale"
        },
        heightm: 2.2,
        weightkg: 210,
        color: "Brown",
        prevo: "dragonair",
        evoLevel: 55,
        eggGroups: ["Water 1", "Dragon"],
        tier: "New"
    },
    mewtwo: {
        num: 150,
        species: "Mewtwo",
        types: ["Psychic"],
        gender: "N",
        baseStats: {
            hp: 106,
            atk: 110,
            def: 90,
            spa: 154,
            spd: 90,
            spe: 130
        },
        abilities: {
            "0": "Pressure",
            H: "Unnerve"
        },
        heightm: 2,
        weightkg: 122,
        color: "Purple",
        eggGroups: ["Undiscovered"],
        otherFormes: ["mewtwomegax", "mewtwomegay"],
        tier: "Bank-Uber"
    },
    mewtwomegax: {
        num: 150,
        species: "Mewtwo-Mega-X",
        baseSpecies: "Mewtwo",
        forme: "Mega-X",
        formeLetter: "M",
        types: ["Psychic", "Fighting"],
        gender: "N",
        baseStats: {
            hp: 106,
            atk: 190,
            def: 100,
            spa: 154,
            spd: 100,
            spe: 130
        },
        abilities: {
            "0": "Steadfast"
        },
        heightm: 2.3,
        weightkg: 127,
        color: "Purple",
        eggGroups: ["Undiscovered"],
        tier: "Unreleased",
        requiredItem: "Mewtwonite X"
    },
    mewtwomegay: {
        num: 150,
        species: "Mewtwo-Mega-Y",
        baseSpecies: "Mewtwo",
        forme: "Mega-Y",
        formeLetter: "M",
        types: ["Psychic"],
        gender: "N",
        baseStats: {
            hp: 106,
            atk: 150,
            def: 70,
            spa: 194,
            spd: 120,
            spe: 140
        },
        abilities: {
            "0": "Insomnia"
        },
        heightm: 1.5,
        weightkg: 33,
        color: "Purple",
        eggGroups: ["Undiscovered"],
        tier: "Unreleased",
        requiredItem: "Mewtwonite Y"
    },
    mew: {
        num: 151,
        species: "Mew",
        types: ["Psychic"],
        gender: "N",
        baseStats: {
            hp: 100,
            atk: 100,
            def: 100,
            spa: 100,
            spd: 100,
            spe: 100
        },
        abilities: {
            "0": "Synchronize"
        },
        heightm: 0.4,
        weightkg: 4,
        color: "Pink",
        eggGroups: ["Undiscovered"],
        tier: "Bank"
    },
    chikorita: {
        num: 152,
        species: "Chikorita",
        types: ["Grass"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 45,
            atk: 49,
            def: 65,
            spa: 49,
            spd: 65,
            spe: 45
        },
        abilities: {
            "0": "Overgrow",
            H: "Leaf Guard"
        },
        heightm: 0.9,
        weightkg: 6.4,
        color: "Green",
        evos: ["bayleef"],
        eggGroups: ["Monster", "Grass"],
        tier: "LC"
    },
    bayleef: {
        num: 153,
        species: "Bayleef",
        types: ["Grass"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 60,
            atk: 62,
            def: 80,
            spa: 63,
            spd: 80,
            spe: 60
        },
        abilities: {
            "0": "Overgrow",
            H: "Leaf Guard"
        },
        heightm: 1.2,
        weightkg: 15.8,
        color: "Green",
        prevo: "chikorita",
        evos: ["meganium"],
        evoLevel: 16,
        eggGroups: ["Monster", "Grass"],
        tier: "NFE"
    },
    meganium: {
        num: 154,
        species: "Meganium",
        types: ["Grass"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 80,
            atk: 82,
            def: 100,
            spa: 83,
            spd: 100,
            spe: 80
        },
        abilities: {
            "0": "Overgrow",
            H: "Leaf Guard"
        },
        heightm: 1.8,
        weightkg: 100.5,
        color: "Green",
        prevo: "bayleef",
        evoLevel: 32,
        eggGroups: ["Monster", "Grass"],
        tier: "New"
    },
    cyndaquil: {
        num: 155,
        species: "Cyndaquil",
        types: ["Fire"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 39,
            atk: 52,
            def: 43,
            spa: 60,
            spd: 50,
            spe: 65
        },
        abilities: {
            "0": "Blaze",
            H: "Flash Fire"
        },
        heightm: 0.5,
        weightkg: 7.9,
        color: "Yellow",
        evos: ["quilava"],
        eggGroups: ["Field"],
        tier: "LC"
    },
    quilava: {
        num: 156,
        species: "Quilava",
        types: ["Fire"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 58,
            atk: 64,
            def: 58,
            spa: 80,
            spd: 65,
            spe: 80
        },
        abilities: {
            "0": "Blaze",
            H: "Flash Fire"
        },
        heightm: 0.9,
        weightkg: 19,
        color: "Yellow",
        prevo: "cyndaquil",
        evos: ["typhlosion"],
        evoLevel: 14,
        eggGroups: ["Field"],
        tier: "NFE"
    },
    typhlosion: {
        num: 157,
        species: "Typhlosion",
        types: ["Fire"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 78,
            atk: 84,
            def: 78,
            spa: 109,
            spd: 85,
            spe: 100
        },
        abilities: {
            "0": "Blaze",
            H: "Flash Fire"
        },
        heightm: 1.7,
        weightkg: 79.5,
        color: "Yellow",
        prevo: "quilava",
        evoLevel: 36,
        eggGroups: ["Field"],
        tier: "New"
    },
    totodile: {
        num: 158,
        species: "Totodile",
        types: ["Water"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 50,
            atk: 65,
            def: 64,
            spa: 44,
            spd: 48,
            spe: 43
        },
        abilities: {
            "0": "Torrent",
            H: "Sheer Force"
        },
        heightm: 0.6,
        weightkg: 9.5,
        color: "Blue",
        evos: ["croconaw"],
        eggGroups: ["Monster", "Water 1"],
        tier: "LC"
    },
    croconaw: {
        num: 159,
        species: "Croconaw",
        types: ["Water"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 65,
            atk: 80,
            def: 80,
            spa: 59,
            spd: 63,
            spe: 58
        },
        abilities: {
            "0": "Torrent",
            H: "Sheer Force"
        },
        heightm: 1.1,
        weightkg: 25,
        color: "Blue",
        prevo: "totodile",
        evos: ["feraligatr"],
        evoLevel: 18,
        eggGroups: ["Monster", "Water 1"],
        tier: "NFE"
    },
    feraligatr: {
        num: 160,
        species: "Feraligatr",
        types: ["Water"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 85,
            atk: 105,
            def: 100,
            spa: 79,
            spd: 83,
            spe: 78
        },
        abilities: {
            "0": "Torrent",
            H: "Sheer Force"
        },
        heightm: 2.3,
        weightkg: 88.8,
        color: "Blue",
        prevo: "croconaw",
        evoLevel: 30,
        eggGroups: ["Monster", "Water 1"],
        tier: "New"
    },
    sentret: {
        num: 161,
        species: "Sentret",
        types: ["Normal"],
        baseStats: {
            hp: 35,
            atk: 46,
            def: 34,
            spa: 35,
            spd: 45,
            spe: 20
        },
        abilities: {
            "0": "Run Away",
            "1": "Keen Eye",
            H: "Frisk"
        },
        heightm: 0.8,
        weightkg: 6,
        color: "Brown",
        evos: ["furret"],
        eggGroups: ["Field"],
        tier: "Bank-LC"
    },
    furret: {
        num: 162,
        species: "Furret",
        types: ["Normal"],
        baseStats: {
            hp: 85,
            atk: 76,
            def: 64,
            spa: 45,
            spd: 55,
            spe: 90
        },
        abilities: {
            "0": "Run Away",
            "1": "Keen Eye",
            H: "Frisk"
        },
        heightm: 1.8,
        weightkg: 32.5,
        color: "Brown",
        prevo: "sentret",
        evoLevel: 15,
        eggGroups: ["Field"],
        tier: "Bank"
    },
    hoothoot: {
        num: 163,
        species: "Hoothoot",
        types: ["Normal", "Flying"],
        baseStats: {
            hp: 60,
            atk: 30,
            def: 30,
            spa: 36,
            spd: 56,
            spe: 50
        },
        abilities: {
            "0": "Insomnia",
            "1": "Keen Eye",
            H: "Tinted Lens"
        },
        heightm: 0.7,
        weightkg: 21.2,
        color: "Brown",
        evos: ["noctowl"],
        eggGroups: ["Flying"],
        tier: "Bank-LC"
    },
    noctowl: {
        num: 164,
        species: "Noctowl",
        types: ["Normal", "Flying"],
        baseStats: {
            hp: 100,
            atk: 50,
            def: 50,
            spa: 86,
            spd: 96,
            spe: 70
        },
        abilities: {
            "0": "Insomnia",
            "1": "Keen Eye",
            H: "Tinted Lens"
        },
        heightm: 1.6,
        weightkg: 40.8,
        color: "Brown",
        prevo: "hoothoot",
        evoLevel: 20,
        eggGroups: ["Flying"],
        tier: "Bank"
    },
    ledyba: {
        num: 165,
        species: "Ledyba",
        types: ["Bug", "Flying"],
        baseStats: {
            hp: 40,
            atk: 20,
            def: 30,
            spa: 40,
            spd: 80,
            spe: 55
        },
        abilities: {
            "0": "Swarm",
            "1": "Early Bird",
            H: "Rattled"
        },
        heightm: 1,
        weightkg: 10.8,
        color: "Red",
        evos: ["ledian"],
        eggGroups: ["Bug"],
        tier: "LC"
    },
    ledian: {
        num: 166,
        species: "Ledian",
        types: ["Bug", "Flying"],
        baseStats: {
            hp: 55,
            atk: 35,
            def: 50,
            spa: 55,
            spd: 110,
            spe: 85
        },
        abilities: {
            "0": "Swarm",
            "1": "Early Bird",
            H: "Iron Fist"
        },
        heightm: 1.4,
        weightkg: 35.6,
        color: "Red",
        prevo: "ledyba",
        evoLevel: 18,
        eggGroups: ["Bug"],
        tier: "New"
    },
    spinarak: {
        num: 167,
        species: "Spinarak",
        types: ["Bug", "Poison"],
        baseStats: {
            hp: 40,
            atk: 60,
            def: 40,
            spa: 40,
            spd: 40,
            spe: 30
        },
        abilities: {
            "0": "Swarm",
            "1": "Insomnia",
            H: "Sniper"
        },
        heightm: 0.5,
        weightkg: 8.5,
        color: "Green",
        evos: ["ariados"],
        eggGroups: ["Bug"],
        tier: "LC"
    },
    ariados: {
        num: 168,
        species: "Ariados",
        types: ["Bug", "Poison"],
        baseStats: {
            hp: 70,
            atk: 90,
            def: 70,
            spa: 60,
            spd: 70,
            spe: 40
        },
        abilities: {
            "0": "Swarm",
            "1": "Insomnia",
            H: "Sniper"
        },
        heightm: 1.1,
        weightkg: 33.5,
        color: "Red",
        prevo: "spinarak",
        evoLevel: 22,
        eggGroups: ["Bug"],
        tier: "New"
    },
    crobat: {
        num: 169,
        species: "Crobat",
        types: ["Poison", "Flying"],
        baseStats: {
            hp: 85,
            atk: 90,
            def: 80,
            spa: 70,
            spd: 80,
            spe: 130
        },
        abilities: {
            "0": "Inner Focus",
            H: "Infiltrator"
        },
        heightm: 1.8,
        weightkg: 75,
        color: "Purple",
        prevo: "golbat",
        evoLevel: 23,
        eggGroups: ["Flying"],
        tier: "New"
    },
    chinchou: {
        num: 170,
        species: "Chinchou",
        types: ["Water", "Electric"],
        baseStats: {
            hp: 75,
            atk: 38,
            def: 38,
            spa: 56,
            spd: 56,
            spe: 67
        },
        abilities: {
            "0": "Volt Absorb",
            "1": "Illuminate",
            H: "Water Absorb"
        },
        heightm: 0.5,
        weightkg: 12,
        color: "Blue",
        evos: ["lanturn"],
        eggGroups: ["Water 2"],
        tier: "LC"
    },
    lanturn: {
        num: 171,
        species: "Lanturn",
        types: ["Water", "Electric"],
        baseStats: {
            hp: 125,
            atk: 58,
            def: 58,
            spa: 76,
            spd: 76,
            spe: 67
        },
        abilities: {
            "0": "Volt Absorb",
            "1": "Illuminate",
            H: "Water Absorb"
        },
        heightm: 1.2,
        weightkg: 22.5,
        color: "Blue",
        prevo: "chinchou",
        evoLevel: 27,
        eggGroups: ["Water 2"],
        tier: "New"
    },
    pichu: {
        num: 172,
        species: "Pichu",
        types: ["Electric"],
        baseStats: {
            hp: 20,
            atk: 40,
            def: 15,
            spa: 35,
            spd: 35,
            spe: 60
        },
        abilities: {
            "0": "Static",
            H: "Lightning Rod"
        },
        heightm: 0.3,
        weightkg: 2,
        color: "Yellow",
        evos: ["pikachu"],
        eggGroups: ["Undiscovered"],
        otherFormes: ["pichuspikyeared"],
        tier: "LC"
    },
    pichuspikyeared: {
        num: 172,
        species: "Pichu-Spiky-eared",
        baseSpecies: "Pichu",
        forme: "Spiky-eared",
        formeLetter: "S",
        types: ["Electric"],
        baseStats: {
            hp: 20,
            atk: 40,
            def: 15,
            spa: 35,
            spd: 35,
            spe: 60
        },
        abilities: {
            "0": "Static"
        },
        heightm: 0.3,
        weightkg: 2,
        color: "Yellow",
        eggGroups: ["Undiscovered"],
        tier: "Illegal"
    },
    cleffa: {
        num: 173,
        species: "Cleffa",
        types: ["Fairy"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 50,
            atk: 25,
            def: 28,
            spa: 45,
            spd: 55,
            spe: 15
        },
        abilities: {
            "0": "Cute Charm",
            "1": "Magic Guard",
            H: "Friend Guard"
        },
        heightm: 0.3,
        weightkg: 3,
        color: "Pink",
        evos: ["clefairy"],
        eggGroups: ["Undiscovered"],
        tier: "LC"
    },
    igglybuff: {
        num: 174,
        species: "Igglybuff",
        types: ["Normal", "Fairy"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 90,
            atk: 30,
            def: 15,
            spa: 40,
            spd: 20,
            spe: 15
        },
        abilities: {
            "0": "Cute Charm",
            "1": "Competitive",
            H: "Friend Guard"
        },
        heightm: 0.3,
        weightkg: 1,
        color: "Pink",
        evos: ["jigglypuff"],
        eggGroups: ["Undiscovered"],
        tier: "LC"
    },
    togepi: {
        num: 175,
        species: "Togepi",
        types: ["Fairy"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 35,
            atk: 20,
            def: 65,
            spa: 40,
            spd: 65,
            spe: 20
        },
        abilities: {
            "0": "Hustle",
            "1": "Serene Grace",
            H: "Super Luck"
        },
        heightm: 0.3,
        weightkg: 1.5,
        color: "White",
        evos: ["togetic"],
        eggGroups: ["Undiscovered"],
        tier: "LC"
    },
    togetic: {
        num: 176,
        species: "Togetic",
        types: ["Fairy", "Flying"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 55,
            atk: 40,
            def: 85,
            spa: 80,
            spd: 105,
            spe: 40
        },
        abilities: {
            "0": "Hustle",
            "1": "Serene Grace",
            H: "Super Luck"
        },
        heightm: 0.6,
        weightkg: 3.2,
        color: "White",
        prevo: "togepi",
        evos: ["togekiss"],
        evoLevel: 2,
        eggGroups: ["Flying", "Fairy"],
        tier: "New"
    },
    natu: {
        num: 177,
        species: "Natu",
        types: ["Psychic", "Flying"],
        baseStats: {
            hp: 40,
            atk: 50,
            def: 45,
            spa: 70,
            spd: 45,
            spe: 70
        },
        abilities: {
            "0": "Synchronize",
            "1": "Early Bird",
            H: "Magic Bounce"
        },
        heightm: 0.2,
        weightkg: 2,
        color: "Green",
        evos: ["xatu"],
        eggGroups: ["Flying"],
        tier: "Bank-LC"
    },
    xatu: {
        num: 178,
        species: "Xatu",
        types: ["Psychic", "Flying"],
        baseStats: {
            hp: 65,
            atk: 75,
            def: 70,
            spa: 95,
            spd: 70,
            spe: 95
        },
        abilities: {
            "0": "Synchronize",
            "1": "Early Bird",
            H: "Magic Bounce"
        },
        heightm: 1.5,
        weightkg: 15,
        color: "Green",
        prevo: "natu",
        evoLevel: 25,
        eggGroups: ["Flying"],
        tier: "Bank"
    },
    mareep: {
        num: 179,
        species: "Mareep",
        types: ["Electric"],
        baseStats: {
            hp: 55,
            atk: 40,
            def: 40,
            spa: 65,
            spd: 45,
            spe: 35
        },
        abilities: {
            "0": "Static",
            H: "Plus"
        },
        heightm: 0.6,
        weightkg: 7.8,
        color: "White",
        evos: ["flaaffy"],
        eggGroups: ["Monster", "Field"],
        tier: "Bank-LC"
    },
    flaaffy: {
        num: 180,
        species: "Flaaffy",
        types: ["Electric"],
        baseStats: {
            hp: 70,
            atk: 55,
            def: 55,
            spa: 80,
            spd: 60,
            spe: 45
        },
        abilities: {
            "0": "Static",
            H: "Plus"
        },
        heightm: 0.8,
        weightkg: 13.3,
        color: "Pink",
        prevo: "mareep",
        evos: ["ampharos"],
        evoLevel: 15,
        eggGroups: ["Monster", "Field"],
        tier: "Bank-NFE"
    },
    ampharos: {
        num: 181,
        species: "Ampharos",
        types: ["Electric"],
        baseStats: {
            hp: 90,
            atk: 75,
            def: 85,
            spa: 115,
            spd: 90,
            spe: 55
        },
        abilities: {
            "0": "Static",
            H: "Plus"
        },
        heightm: 1.4,
        weightkg: 61.5,
        color: "Yellow",
        prevo: "flaaffy",
        evoLevel: 30,
        eggGroups: ["Monster", "Field"],
        otherFormes: ["ampharosmega"],
        tier: "Bank"
    },
    ampharosmega: {
        num: 181,
        species: "Ampharos-Mega",
        baseSpecies: "Ampharos",
        forme: "Mega",
        formeLetter: "M",
        types: ["Electric", "Dragon"],
        baseStats: {
            hp: 90,
            atk: 95,
            def: 105,
            spa: 165,
            spd: 110,
            spe: 45
        },
        abilities: {
            "0": "Mold Breaker"
        },
        heightm: 1.4,
        weightkg: 61.5,
        color: "Yellow",
        eggGroups: ["Monster", "Field"],
        tier: "Unreleased",
        requiredItem: "Ampharosite"
    },
    bellossom: {
        num: 182,
        species: "Bellossom",
        types: ["Grass"],
        baseStats: {
            hp: 75,
            atk: 80,
            def: 95,
            spa: 90,
            spd: 100,
            spe: 50
        },
        abilities: {
            "0": "Chlorophyll",
            H: "Healer"
        },
        heightm: 0.4,
        weightkg: 5.8,
        color: "Green",
        prevo: "gloom",
        evoLevel: 21,
        eggGroups: ["Grass"],
        tier: "Bank"
    },
    marill: {
        num: 183,
        species: "Marill",
        types: ["Water", "Fairy"],
        baseStats: {
            hp: 70,
            atk: 20,
            def: 50,
            spa: 20,
            spd: 50,
            spe: 40
        },
        abilities: {
            "0": "Thick Fat",
            "1": "Huge Power",
            H: "Sap Sipper"
        },
        heightm: 0.4,
        weightkg: 8.5,
        color: "Blue",
        prevo: "azurill",
        evos: ["azumarill"],
        evoLevel: 1,
        eggGroups: ["Water 1", "Fairy"],
        tier: "NFE"
    },
    azumarill: {
        num: 184,
        species: "Azumarill",
        types: ["Water", "Fairy"],
        baseStats: {
            hp: 100,
            atk: 50,
            def: 80,
            spa: 60,
            spd: 80,
            spe: 50
        },
        abilities: {
            "0": "Thick Fat",
            "1": "Huge Power",
            H: "Sap Sipper"
        },
        heightm: 0.8,
        weightkg: 28.5,
        color: "Blue",
        prevo: "marill",
        evoLevel: 18,
        eggGroups: ["Water 1", "Fairy"],
        tier: "New"
    },
    sudowoodo: {
        num: 185,
        species: "Sudowoodo",
        types: ["Rock"],
        baseStats: {
            hp: 70,
            atk: 100,
            def: 115,
            spa: 30,
            spd: 65,
            spe: 30
        },
        abilities: {
            "0": "Sturdy",
            "1": "Rock Head",
            H: "Rattled"
        },
        heightm: 1.2,
        weightkg: 38,
        color: "Brown",
        prevo: "bonsly",
        evoLevel: 1,
        evoMove: "Mimic",
        eggGroups: ["Mineral"],
        tier: "New"
    },
    politoed: {
        num: 186,
        species: "Politoed",
        types: ["Water"],
        baseStats: {
            hp: 90,
            atk: 75,
            def: 75,
            spa: 90,
            spd: 100,
            spe: 70
        },
        abilities: {
            "0": "Water Absorb",
            "1": "Damp",
            H: "Drizzle"
        },
        heightm: 1.1,
        weightkg: 33.9,
        color: "Green",
        prevo: "poliwhirl",
        evoLevel: 25,
        eggGroups: ["Water 1"],
        tier: "New"
    },
    hoppip: {
        num: 187,
        species: "Hoppip",
        types: ["Grass", "Flying"],
        baseStats: {
            hp: 35,
            atk: 35,
            def: 40,
            spa: 35,
            spd: 55,
            spe: 50
        },
        abilities: {
            "0": "Chlorophyll",
            "1": "Leaf Guard",
            H: "Infiltrator"
        },
        heightm: 0.4,
        weightkg: 0.5,
        color: "Pink",
        evos: ["skiploom"],
        eggGroups: ["Fairy", "Grass"],
        tier: "Bank-LC"
    },
    skiploom: {
        num: 188,
        species: "Skiploom",
        types: ["Grass", "Flying"],
        baseStats: {
            hp: 55,
            atk: 45,
            def: 50,
            spa: 45,
            spd: 65,
            spe: 80
        },
        abilities: {
            "0": "Chlorophyll",
            "1": "Leaf Guard",
            H: "Infiltrator"
        },
        heightm: 0.6,
        weightkg: 1,
        color: "Green",
        prevo: "hoppip",
        evos: ["jumpluff"],
        evoLevel: 18,
        eggGroups: ["Fairy", "Grass"],
        tier: "Bank-NFE"
    },
    jumpluff: {
        num: 189,
        species: "Jumpluff",
        types: ["Grass", "Flying"],
        baseStats: {
            hp: 75,
            atk: 55,
            def: 70,
            spa: 55,
            spd: 95,
            spe: 110
        },
        abilities: {
            "0": "Chlorophyll",
            "1": "Leaf Guard",
            H: "Infiltrator"
        },
        heightm: 0.8,
        weightkg: 3,
        color: "Blue",
        prevo: "skiploom",
        evoLevel: 27,
        eggGroups: ["Fairy", "Grass"],
        tier: "Bank"
    },
    aipom: {
        num: 190,
        species: "Aipom",
        types: ["Normal"],
        baseStats: {
            hp: 55,
            atk: 70,
            def: 55,
            spa: 40,
            spd: 55,
            spe: 85
        },
        abilities: {
            "0": "Run Away",
            "1": "Pickup",
            H: "Skill Link"
        },
        heightm: 0.8,
        weightkg: 11.5,
        color: "Purple",
        evos: ["ambipom"],
        eggGroups: ["Field"],
        tier: "Bank-LC"
    },
    sunkern: {
        num: 191,
        species: "Sunkern",
        types: ["Grass"],
        baseStats: {
            hp: 30,
            atk: 30,
            def: 30,
            spa: 30,
            spd: 30,
            spe: 30
        },
        abilities: {
            "0": "Chlorophyll",
            "1": "Solar Power",
            H: "Early Bird"
        },
        heightm: 0.3,
        weightkg: 1.8,
        color: "Yellow",
        evos: ["sunflora"],
        eggGroups: ["Grass"],
        tier: "Bank-LC"
    },
    sunflora: {
        num: 192,
        species: "Sunflora",
        types: ["Grass"],
        baseStats: {
            hp: 75,
            atk: 75,
            def: 55,
            spa: 105,
            spd: 85,
            spe: 30
        },
        abilities: {
            "0": "Chlorophyll",
            "1": "Solar Power",
            H: "Early Bird"
        },
        heightm: 0.8,
        weightkg: 8.5,
        color: "Yellow",
        prevo: "sunkern",
        evoLevel: 1,
        eggGroups: ["Grass"],
        tier: "Bank"
    },
    yanma: {
        num: 193,
        species: "Yanma",
        types: ["Bug", "Flying"],
        baseStats: {
            hp: 65,
            atk: 65,
            def: 45,
            spa: 75,
            spd: 45,
            spe: 95
        },
        abilities: {
            "0": "Speed Boost",
            "1": "Compound Eyes",
            H: "Frisk"
        },
        heightm: 1.2,
        weightkg: 38,
        color: "Red",
        evos: ["yanmega"],
        eggGroups: ["Bug"],
        tier: "Bank"
    },
    wooper: {
        num: 194,
        species: "Wooper",
        types: ["Water", "Ground"],
        baseStats: {
            hp: 55,
            atk: 45,
            def: 45,
            spa: 25,
            spd: 25,
            spe: 15
        },
        abilities: {
            "0": "Damp",
            "1": "Water Absorb",
            H: "Unaware"
        },
        heightm: 0.4,
        weightkg: 8.5,
        color: "Blue",
        evos: ["quagsire"],
        eggGroups: ["Water 1", "Field"],
        tier: "Bank-LC"
    },
    quagsire: {
        num: 195,
        species: "Quagsire",
        types: ["Water", "Ground"],
        baseStats: {
            hp: 95,
            atk: 85,
            def: 85,
            spa: 65,
            spd: 65,
            spe: 35
        },
        abilities: {
            "0": "Damp",
            "1": "Water Absorb",
            H: "Unaware"
        },
        heightm: 1.4,
        weightkg: 75,
        color: "Blue",
        prevo: "wooper",
        evoLevel: 20,
        eggGroups: ["Water 1", "Field"],
        tier: "Bank"
    },
    espeon: {
        num: 196,
        species: "Espeon",
        types: ["Psychic"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 65,
            atk: 65,
            def: 60,
            spa: 130,
            spd: 95,
            spe: 110
        },
        abilities: {
            "0": "Synchronize",
            H: "Magic Bounce"
        },
        heightm: 0.9,
        weightkg: 26.5,
        color: "Purple",
        prevo: "eevee",
        evoLevel: 2,
        eggGroups: ["Field"],
        tier: "New"
    },
    umbreon: {
        num: 197,
        species: "Umbreon",
        types: ["Dark"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 95,
            atk: 65,
            def: 110,
            spa: 60,
            spd: 130,
            spe: 65
        },
        abilities: {
            "0": "Synchronize",
            H: "Inner Focus"
        },
        heightm: 1,
        weightkg: 27,
        color: "Black",
        prevo: "eevee",
        evoLevel: 2,
        eggGroups: ["Field"],
        tier: "New"
    },
    murkrow: {
        num: 198,
        species: "Murkrow",
        types: ["Dark", "Flying"],
        baseStats: {
            hp: 60,
            atk: 85,
            def: 42,
            spa: 85,
            spd: 42,
            spe: 91
        },
        abilities: {
            "0": "Insomnia",
            "1": "Super Luck",
            H: "Prankster"
        },
        heightm: 0.5,
        weightkg: 2.1,
        color: "Black",
        evos: ["honchkrow"],
        eggGroups: ["Flying"],
        tier: "LC Uber"
    },
    slowking: {
        num: 199,
        species: "Slowking",
        types: ["Water", "Psychic"],
        baseStats: {
            hp: 95,
            atk: 75,
            def: 80,
            spa: 100,
            spd: 110,
            spe: 30
        },
        abilities: {
            "0": "Oblivious",
            "1": "Own Tempo",
            H: "Regenerator"
        },
        heightm: 2,
        weightkg: 79.5,
        color: "Pink",
        prevo: "slowpoke",
        evoLevel: 1,
        eggGroups: ["Monster", "Water 1"],
        tier: "New"
    },
    misdreavus: {
        num: 200,
        species: "Misdreavus",
        types: ["Ghost"],
        baseStats: {
            hp: 60,
            atk: 60,
            def: 60,
            spa: 85,
            spd: 85,
            spe: 85
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 0.7,
        weightkg: 1,
        color: "Gray",
        evos: ["mismagius"],
        eggGroups: ["Amorphous"],
        tier: "LC Uber"
    },
    unown: {
        num: 201,
        species: "Unown",
        baseForme: "A",
        types: ["Psychic"],
        gender: "N",
        baseStats: {
            hp: 48,
            atk: 72,
            def: 48,
            spa: 72,
            spd: 48,
            spe: 48
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 0.5,
        weightkg: 5,
        color: "Black",
        eggGroups: ["Undiscovered"],
        otherForms: ["unownb", "unownc", "unownd", "unowne", "unownf", "unowng", "unownh", "unowni", "unownj", "unownk", "unownl", "unownm", "unownn", "unowno", "unownp", "unownq", "unownr", "unowns", "unownt", "unownu", "unownv", "unownw", "unownx", "unowny", "unownz", "unownexclamation", "unownquestion"],
        tier: "Bank"
    },
    wobbuffet: {
        num: 202,
        species: "Wobbuffet",
        types: ["Psychic"],
        baseStats: {
            hp: 190,
            atk: 33,
            def: 58,
            spa: 33,
            spd: 58,
            spe: 33
        },
        abilities: {
            "0": "Shadow Tag",
            H: "Telepathy"
        },
        heightm: 1.3,
        weightkg: 28.5,
        color: "Blue",
        prevo: "wynaut",
        evoLevel: 15,
        eggGroups: ["Amorphous"],
        tier: "Bank"
    },
    girafarig: {
        num: 203,
        species: "Girafarig",
        types: ["Normal", "Psychic"],
        baseStats: {
            hp: 70,
            atk: 80,
            def: 65,
            spa: 90,
            spd: 65,
            spe: 85
        },
        abilities: {
            "0": "Inner Focus",
            "1": "Early Bird",
            H: "Sap Sipper"
        },
        heightm: 1.5,
        weightkg: 41.5,
        color: "Yellow",
        eggGroups: ["Field"],
        tier: "Bank"
    },
    pineco: {
        num: 204,
        species: "Pineco",
        types: ["Bug"],
        baseStats: {
            hp: 50,
            atk: 65,
            def: 90,
            spa: 35,
            spd: 35,
            spe: 15
        },
        abilities: {
            "0": "Sturdy",
            H: "Overcoat"
        },
        heightm: 0.6,
        weightkg: 7.2,
        color: "Gray",
        evos: ["forretress"],
        eggGroups: ["Bug"],
        tier: "Bank-LC"
    },
    forretress: {
        num: 205,
        species: "Forretress",
        types: ["Bug", "Steel"],
        baseStats: {
            hp: 75,
            atk: 90,
            def: 140,
            spa: 60,
            spd: 60,
            spe: 40
        },
        abilities: {
            "0": "Sturdy",
            H: "Overcoat"
        },
        heightm: 1.2,
        weightkg: 125.8,
        color: "Purple",
        prevo: "pineco",
        evoLevel: 31,
        eggGroups: ["Bug"],
        tier: "Bank"
    },
    dunsparce: {
        num: 206,
        species: "Dunsparce",
        types: ["Normal"],
        baseStats: {
            hp: 100,
            atk: 70,
            def: 70,
            spa: 65,
            spd: 65,
            spe: 45
        },
        abilities: {
            "0": "Serene Grace",
            "1": "Run Away",
            H: "Rattled"
        },
        heightm: 1.5,
        weightkg: 14,
        color: "Yellow",
        eggGroups: ["Field"],
        tier: "Bank"
    },
    gligar: {
        num: 207,
        species: "Gligar",
        types: ["Ground", "Flying"],
        baseStats: {
            hp: 65,
            atk: 75,
            def: 105,
            spa: 35,
            spd: 65,
            spe: 85
        },
        abilities: {
            "0": "Hyper Cutter",
            "1": "Sand Veil",
            H: "Immunity"
        },
        heightm: 1.1,
        weightkg: 64.8,
        color: "Purple",
        evos: ["gliscor"],
        eggGroups: ["Bug"],
        tier: "Bank"
    },
    steelix: {
        num: 208,
        species: "Steelix",
        types: ["Steel", "Ground"],
        baseStats: {
            hp: 75,
            atk: 85,
            def: 200,
            spa: 55,
            spd: 65,
            spe: 30
        },
        abilities: {
            "0": "Rock Head",
            "1": "Sturdy",
            H: "Sheer Force"
        },
        heightm: 9.2,
        weightkg: 400,
        color: "Gray",
        prevo: "onix",
        evoLevel: 1,
        eggGroups: ["Mineral"],
        otherFormes: ["steelixmega"],
        tier: "Bank"
    },
    steelixmega: {
        num: 208,
        species: "Steelix-Mega",
        baseSpecies: "Steelix",
        forme: "Mega",
        formeLetter: "M",
        types: ["Steel", "Ground"],
        baseStats: {
            hp: 75,
            atk: 125,
            def: 230,
            spa: 55,
            spd: 95,
            spe: 30
        },
        abilities: {
            "0": "Sand Force"
        },
        heightm: 10.5,
        weightkg: 740,
        color: "Gray",
        eggGroups: ["Mineral"],
        tier: "Unreleased",
        requiredItem: "Steelixite"
    },
    snubbull: {
        num: 209,
        species: "Snubbull",
        types: ["Fairy"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 60,
            atk: 80,
            def: 50,
            spa: 40,
            spd: 40,
            spe: 30
        },
        abilities: {
            "0": "Intimidate",
            "1": "Run Away",
            H: "Rattled"
        },
        heightm: 0.6,
        weightkg: 7.8,
        color: "Pink",
        evos: ["granbull"],
        eggGroups: ["Field", "Fairy"],
        tier: "LC"
    },
    granbull: {
        num: 210,
        species: "Granbull",
        types: ["Fairy"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 90,
            atk: 120,
            def: 75,
            spa: 60,
            spd: 60,
            spe: 45
        },
        abilities: {
            "0": "Intimidate",
            "1": "Quick Feet",
            H: "Rattled"
        },
        heightm: 1.4,
        weightkg: 48.7,
        color: "Purple",
        prevo: "snubbull",
        evoLevel: 23,
        eggGroups: ["Field", "Fairy"],
        tier: "New"
    },
    qwilfish: {
        num: 211,
        species: "Qwilfish",
        types: ["Water", "Poison"],
        baseStats: {
            hp: 65,
            atk: 95,
            def: 85,
            spa: 55,
            spd: 55,
            spe: 85
        },
        abilities: {
            "0": "Poison Point",
            "1": "Swift Swim",
            H: "Intimidate"
        },
        heightm: 0.5,
        weightkg: 3.9,
        color: "Gray",
        eggGroups: ["Water 2"],
        tier: "Bank"
    },
    scizor: {
        num: 212,
        species: "Scizor",
        types: ["Bug", "Steel"],
        baseStats: {
            hp: 70,
            atk: 130,
            def: 100,
            spa: 55,
            spd: 80,
            spe: 65
        },
        abilities: {
            "0": "Swarm",
            "1": "Technician",
            H: "Light Metal"
        },
        heightm: 1.8,
        weightkg: 118,
        color: "Red",
        prevo: "scyther",
        evoLevel: 1,
        eggGroups: ["Bug"],
        otherFormes: ["scizormega"],
        tier: "New"
    },
    scizormega: {
        num: 212,
        species: "Scizor-Mega",
        baseSpecies: "Scizor",
        forme: "Mega",
        formeLetter: "M",
        types: ["Bug", "Steel"],
        baseStats: {
            hp: 70,
            atk: 150,
            def: 140,
            spa: 65,
            spd: 100,
            spe: 75
        },
        abilities: {
            "0": "Technician"
        },
        heightm: 2,
        weightkg: 125,
        color: "Red",
        eggGroups: ["Bug"],
        tier: "New",
        requiredItem: "Scizorite"
    },
    shuckle: {
        num: 213,
        species: "Shuckle",
        types: ["Bug", "Rock"],
        baseStats: {
            hp: 20,
            atk: 10,
            def: 230,
            spa: 10,
            spd: 230,
            spe: 5
        },
        abilities: {
            "0": "Sturdy",
            "1": "Gluttony",
            H: "Contrary"
        },
        heightm: 0.6,
        weightkg: 20.5,
        color: "Yellow",
        eggGroups: ["Bug"],
        tier: "Bank"
    },
    heracross: {
        num: 214,
        species: "Heracross",
        types: ["Bug", "Fighting"],
        baseStats: {
            hp: 80,
            atk: 125,
            def: 75,
            spa: 40,
            spd: 95,
            spe: 85
        },
        abilities: {
            "0": "Swarm",
            "1": "Guts",
            H: "Moxie"
        },
        heightm: 1.5,
        weightkg: 54,
        color: "Blue",
        eggGroups: ["Bug"],
        otherFormes: ["heracrossmega"],
        tier: "Bank"
    },
    heracrossmega: {
        num: 214,
        species: "Heracross-Mega",
        baseSpecies: "Heracross",
        forme: "Mega",
        formeLetter: "M",
        types: ["Bug", "Fighting"],
        baseStats: {
            hp: 80,
            atk: 185,
            def: 115,
            spa: 40,
            spd: 105,
            spe: 75
        },
        abilities: {
            "0": "Skill Link"
        },
        heightm: 1.7,
        weightkg: 62.5,
        color: "Blue",
        eggGroups: ["Bug"],
        tier: "Unreleased",
        requiredItem: "Heracronite"
    },
    sneasel: {
        num: 215,
        species: "Sneasel",
        types: ["Dark", "Ice"],
        baseStats: {
            hp: 55,
            atk: 95,
            def: 55,
            spa: 35,
            spd: 75,
            spe: 115
        },
        abilities: {
            "0": "Inner Focus",
            "1": "Keen Eye",
            H: "Pickpocket"
        },
        heightm: 0.9,
        weightkg: 28,
        color: "Black",
        evos: ["weavile"],
        eggGroups: ["Field"],
        tier: "New"
    },
    teddiursa: {
        num: 216,
        species: "Teddiursa",
        types: ["Normal"],
        baseStats: {
            hp: 60,
            atk: 80,
            def: 50,
            spa: 50,
            spd: 50,
            spe: 40
        },
        abilities: {
            "0": "Pickup",
            "1": "Quick Feet",
            H: "Honey Gather"
        },
        heightm: 0.6,
        weightkg: 8.8,
        color: "Brown",
        evos: ["ursaring"],
        eggGroups: ["Field"],
        tier: "Bank-LC"
    },
    ursaring: {
        num: 217,
        species: "Ursaring",
        types: ["Normal"],
        baseStats: {
            hp: 90,
            atk: 130,
            def: 75,
            spa: 75,
            spd: 75,
            spe: 55
        },
        abilities: {
            "0": "Guts",
            "1": "Quick Feet",
            H: "Unnerve"
        },
        heightm: 1.8,
        weightkg: 125.8,
        color: "Brown",
        prevo: "teddiursa",
        evoLevel: 30,
        eggGroups: ["Field"],
        tier: "Bank"
    },
    slugma: {
        num: 218,
        species: "Slugma",
        types: ["Fire"],
        baseStats: {
            hp: 40,
            atk: 40,
            def: 40,
            spa: 70,
            spd: 40,
            spe: 20
        },
        abilities: {
            "0": "Magma Armor",
            "1": "Flame Body",
            H: "Weak Armor"
        },
        heightm: 0.7,
        weightkg: 35,
        color: "Red",
        evos: ["magcargo"],
        eggGroups: ["Amorphous"],
        tier: "Bank-LC"
    },
    magcargo: {
        num: 219,
        species: "Magcargo",
        types: ["Fire", "Rock"],
        baseStats: {
            hp: 60,
            atk: 50,
            def: 120,
            spa: 90,
            spd: 80,
            spe: 30
        },
        abilities: {
            "0": "Magma Armor",
            "1": "Flame Body",
            H: "Weak Armor"
        },
        heightm: 0.8,
        weightkg: 55,
        color: "Red",
        prevo: "slugma",
        evoLevel: 38,
        eggGroups: ["Amorphous"],
        tier: "Bank"
    },
    swinub: {
        num: 220,
        species: "Swinub",
        types: ["Ice", "Ground"],
        baseStats: {
            hp: 50,
            atk: 50,
            def: 40,
            spa: 30,
            spd: 30,
            spe: 50
        },
        abilities: {
            "0": "Oblivious",
            "1": "Snow Cloak",
            H: "Thick Fat"
        },
        heightm: 0.4,
        weightkg: 6.5,
        color: "Brown",
        evos: ["piloswine"],
        eggGroups: ["Field"],
        tier: "LC"
    },
    piloswine: {
        num: 221,
        species: "Piloswine",
        types: ["Ice", "Ground"],
        baseStats: {
            hp: 100,
            atk: 100,
            def: 80,
            spa: 60,
            spd: 60,
            spe: 50
        },
        abilities: {
            "0": "Oblivious",
            "1": "Snow Cloak",
            H: "Thick Fat"
        },
        heightm: 1.1,
        weightkg: 55.8,
        color: "Brown",
        prevo: "swinub",
        evos: ["mamoswine"],
        evoLevel: 33,
        eggGroups: ["Field"],
        tier: "New"
    },
    corsola: {
        num: 222,
        species: "Corsola",
        types: ["Water", "Rock"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 65,
            atk: 55,
            def: 95,
            spa: 65,
            spd: 95,
            spe: 35
        },
        abilities: {
            "0": "Hustle",
            "1": "Natural Cure",
            H: "Regenerator"
        },
        heightm: 0.6,
        weightkg: 5,
        color: "Pink",
        eggGroups: ["Water 1", "Water 3"],
        tier: "New"
    },
    remoraid: {
        num: 223,
        species: "Remoraid",
        types: ["Water"],
        baseStats: {
            hp: 35,
            atk: 65,
            def: 35,
            spa: 65,
            spd: 35,
            spe: 65
        },
        abilities: {
            "0": "Hustle",
            "1": "Sniper",
            H: "Moody"
        },
        heightm: 0.6,
        weightkg: 12,
        color: "Gray",
        evos: ["octillery"],
        eggGroups: ["Water 1", "Water 2"],
        tier: "Bank-LC"
    },
    octillery: {
        num: 224,
        species: "Octillery",
        types: ["Water"],
        baseStats: {
            hp: 75,
            atk: 105,
            def: 75,
            spa: 105,
            spd: 75,
            spe: 45
        },
        abilities: {
            "0": "Suction Cups",
            "1": "Sniper",
            H: "Moody"
        },
        heightm: 0.9,
        weightkg: 28.5,
        color: "Red",
        prevo: "remoraid",
        evoLevel: 25,
        eggGroups: ["Water 1", "Water 2"],
        tier: "Bank"
    },
    delibird: {
        num: 225,
        species: "Delibird",
        types: ["Ice", "Flying"],
        baseStats: {
            hp: 45,
            atk: 55,
            def: 45,
            spa: 65,
            spd: 45,
            spe: 75
        },
        abilities: {
            "0": "Vital Spirit",
            "1": "Hustle",
            H: "Insomnia"
        },
        heightm: 0.9,
        weightkg: 16,
        color: "Red",
        eggGroups: ["Water 1", "Field"],
        tier: "New"
    },
    mantine: {
        num: 226,
        species: "Mantine",
        types: ["Water", "Flying"],
        baseStats: {
            hp: 85,
            atk: 40,
            def: 70,
            spa: 80,
            spd: 140,
            spe: 70
        },
        abilities: {
            "0": "Swift Swim",
            "1": "Water Absorb",
            H: "Water Veil"
        },
        heightm: 2.1,
        weightkg: 220,
        color: "Purple",
        prevo: "mantyke",
        evoLevel: 1,
        eggGroups: ["Water 1"],
        tier: "Bank"
    },
    skarmory: {
        num: 227,
        species: "Skarmory",
        types: ["Steel", "Flying"],
        baseStats: {
            hp: 65,
            atk: 80,
            def: 140,
            spa: 40,
            spd: 70,
            spe: 70
        },
        abilities: {
            "0": "Keen Eye",
            "1": "Sturdy",
            H: "Weak Armor"
        },
        heightm: 1.7,
        weightkg: 50.5,
        color: "Gray",
        eggGroups: ["Flying"],
        tier: "New"
    },
    houndour: {
        num: 228,
        species: "Houndour",
        types: ["Dark", "Fire"],
        baseStats: {
            hp: 45,
            atk: 60,
            def: 30,
            spa: 80,
            spd: 50,
            spe: 65
        },
        abilities: {
            "0": "Early Bird",
            "1": "Flash Fire",
            H: "Unnerve"
        },
        heightm: 0.6,
        weightkg: 10.8,
        color: "Black",
        evos: ["houndoom"],
        eggGroups: ["Field"],
        tier: "Bank-LC"
    },
    houndoom: {
        num: 229,
        species: "Houndoom",
        types: ["Dark", "Fire"],
        baseStats: {
            hp: 75,
            atk: 90,
            def: 50,
            spa: 110,
            spd: 80,
            spe: 95
        },
        abilities: {
            "0": "Early Bird",
            "1": "Flash Fire",
            H: "Unnerve"
        },
        heightm: 1.4,
        weightkg: 35,
        color: "Black",
        prevo: "houndour",
        evoLevel: 24,
        eggGroups: ["Field"],
        otherFormes: ["houndoommega"],
        tier: "Bank"
    },
    houndoommega: {
        num: 229,
        species: "Houndoom-Mega",
        baseSpecies: "Houndoom",
        forme: "Mega",
        formeLetter: "M",
        types: ["Dark", "Fire"],
        baseStats: {
            hp: 75,
            atk: 90,
            def: 90,
            spa: 140,
            spd: 90,
            spe: 115
        },
        abilities: {
            "0": "Solar Power"
        },
        heightm: 1.9,
        weightkg: 49.5,
        color: "Black",
        eggGroups: ["Field"],
        tier: "Unreleased",
        requiredItem: "Houndoominite"
    },
    kingdra: {
        num: 230,
        species: "Kingdra",
        types: ["Water", "Dragon"],
        baseStats: {
            hp: 75,
            atk: 95,
            def: 95,
            spa: 95,
            spd: 95,
            spe: 85
        },
        abilities: {
            "0": "Swift Swim",
            "1": "Sniper",
            H: "Damp"
        },
        heightm: 1.8,
        weightkg: 152,
        color: "Blue",
        prevo: "seadra",
        evoLevel: 32,
        eggGroups: ["Water 1", "Dragon"],
        tier: "New"
    },
    phanpy: {
        num: 231,
        species: "Phanpy",
        types: ["Ground"],
        baseStats: {
            hp: 90,
            atk: 60,
            def: 60,
            spa: 40,
            spd: 40,
            spe: 40
        },
        abilities: {
            "0": "Pickup",
            H: "Sand Veil"
        },
        heightm: 0.5,
        weightkg: 33.5,
        color: "Blue",
        evos: ["donphan"],
        eggGroups: ["Field"],
        tier: "Bank-LC"
    },
    donphan: {
        num: 232,
        species: "Donphan",
        types: ["Ground"],
        baseStats: {
            hp: 90,
            atk: 120,
            def: 120,
            spa: 60,
            spd: 60,
            spe: 50
        },
        abilities: {
            "0": "Sturdy",
            H: "Sand Veil"
        },
        heightm: 1.1,
        weightkg: 120,
        color: "Gray",
        prevo: "phanpy",
        evoLevel: 25,
        eggGroups: ["Field"],
        tier: "Bank"
    },
    porygon2: {
        num: 233,
        species: "Porygon2",
        types: ["Normal"],
        gender: "N",
        baseStats: {
            hp: 85,
            atk: 80,
            def: 90,
            spa: 105,
            spd: 95,
            spe: 60
        },
        abilities: {
            "0": "Trace",
            "1": "Download",
            H: "Analytic"
        },
        heightm: 0.6,
        weightkg: 32.5,
        color: "Red",
        prevo: "porygon",
        evos: ["porygonz"],
        evoLevel: 1,
        eggGroups: ["Mineral"],
        tier: "New"
    },
    stantler: {
        num: 234,
        species: "Stantler",
        types: ["Normal"],
        baseStats: {
            hp: 73,
            atk: 95,
            def: 62,
            spa: 85,
            spd: 65,
            spe: 85
        },
        abilities: {
            "0": "Intimidate",
            "1": "Frisk",
            H: "Sap Sipper"
        },
        heightm: 1.4,
        weightkg: 71.2,
        color: "Brown",
        eggGroups: ["Field"],
        tier: "Bank"
    },
    smeargle: {
        num: 235,
        species: "Smeargle",
        types: ["Normal"],
        baseStats: {
            hp: 55,
            atk: 20,
            def: 35,
            spa: 20,
            spd: 45,
            spe: 75
        },
        abilities: {
            "0": "Own Tempo",
            "1": "Technician",
            H: "Moody"
        },
        heightm: 1.2,
        weightkg: 58,
        color: "White",
        eggGroups: ["Field"],
        tier: "New"
    },
    tyrogue: {
        num: 236,
        species: "Tyrogue",
        types: ["Fighting"],
        gender: "M",
        baseStats: {
            hp: 35,
            atk: 35,
            def: 35,
            spa: 35,
            spd: 35,
            spe: 35
        },
        abilities: {
            "0": "Guts",
            "1": "Steadfast",
            H: "Vital Spirit"
        },
        heightm: 0.7,
        weightkg: 21,
        color: "Purple",
        evos: ["hitmonlee", "hitmonchan", "hitmontop"],
        eggGroups: ["Undiscovered"],
        tier: "Bank-LC"
    },
    hitmontop: {
        num: 237,
        species: "Hitmontop",
        types: ["Fighting"],
        gender: "M",
        baseStats: {
            hp: 50,
            atk: 95,
            def: 95,
            spa: 35,
            spd: 110,
            spe: 70
        },
        abilities: {
            "0": "Intimidate",
            "1": "Technician",
            H: "Steadfast"
        },
        heightm: 1.4,
        weightkg: 48,
        color: "Brown",
        prevo: "tyrogue",
        evoLevel: 20,
        eggGroups: ["Human-Like"],
        tier: "Bank"
    },
    smoochum: {
        num: 238,
        species: "Smoochum",
        types: ["Ice", "Psychic"],
        gender: "F",
        baseStats: {
            hp: 45,
            atk: 30,
            def: 15,
            spa: 85,
            spd: 65,
            spe: 65
        },
        abilities: {
            "0": "Oblivious",
            "1": "Forewarn",
            H: "Hydration"
        },
        heightm: 0.4,
        weightkg: 6,
        color: "Pink",
        evos: ["jynx"],
        eggGroups: ["Undiscovered"],
        tier: "Bank-LC"
    },
    elekid: {
        num: 239,
        species: "Elekid",
        types: ["Electric"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 45,
            atk: 63,
            def: 37,
            spa: 65,
            spd: 55,
            spe: 95
        },
        abilities: {
            "0": "Static",
            H: "Vital Spirit"
        },
        heightm: 0.6,
        weightkg: 23.5,
        color: "Yellow",
        evos: ["electabuzz"],
        eggGroups: ["Undiscovered"],
        tier: "LC"
    },
    magby: {
        num: 240,
        species: "Magby",
        types: ["Fire"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 45,
            atk: 75,
            def: 37,
            spa: 70,
            spd: 55,
            spe: 83
        },
        abilities: {
            "0": "Flame Body",
            H: "Vital Spirit"
        },
        heightm: 0.7,
        weightkg: 21.4,
        color: "Red",
        evos: ["magmar"],
        eggGroups: ["Undiscovered"],
        tier: "LC"
    },
    miltank: {
        num: 241,
        species: "Miltank",
        types: ["Normal"],
        gender: "F",
        baseStats: {
            hp: 95,
            atk: 80,
            def: 105,
            spa: 40,
            spd: 70,
            spe: 100
        },
        abilities: {
            "0": "Thick Fat",
            "1": "Scrappy",
            H: "Sap Sipper"
        },
        heightm: 1.2,
        weightkg: 75.5,
        color: "Pink",
        eggGroups: ["Field"],
        tier: "New"
    },
    blissey: {
        num: 242,
        species: "Blissey",
        types: ["Normal"],
        gender: "F",
        baseStats: {
            hp: 255,
            atk: 10,
            def: 10,
            spa: 75,
            spd: 135,
            spe: 55
        },
        abilities: {
            "0": "Natural Cure",
            "1": "Serene Grace",
            H: "Healer"
        },
        heightm: 1.5,
        weightkg: 46.8,
        color: "Pink",
        prevo: "chansey",
        evoLevel: 2,
        eggGroups: ["Fairy"],
        tier: "New"
    },
    raikou: {
        num: 243,
        species: "Raikou",
        types: ["Electric"],
        gender: "N",
        baseStats: {
            hp: 90,
            atk: 85,
            def: 75,
            spa: 115,
            spd: 100,
            spe: 115
        },
        abilities: {
            "0": "Pressure",
            H: "Inner Focus"
        },
        heightm: 1.9,
        weightkg: 178,
        color: "Yellow",
        eggGroups: ["Undiscovered"],
        tier: "Bank",
        unreleasedHidden: true
    },
    entei: {
        num: 244,
        species: "Entei",
        types: ["Fire"],
        gender: "N",
        baseStats: {
            hp: 115,
            atk: 115,
            def: 85,
            spa: 90,
            spd: 75,
            spe: 100
        },
        abilities: {
            "0": "Pressure",
            H: "Inner Focus"
        },
        heightm: 2.1,
        weightkg: 198,
        color: "Brown",
        eggGroups: ["Undiscovered"],
        tier: "Bank",
        unreleasedHidden: true
    },
    suicune: {
        num: 245,
        species: "Suicune",
        types: ["Water"],
        gender: "N",
        baseStats: {
            hp: 100,
            atk: 75,
            def: 115,
            spa: 90,
            spd: 115,
            spe: 85
        },
        abilities: {
            "0": "Pressure",
            H: "Inner Focus"
        },
        heightm: 2,
        weightkg: 187,
        color: "Blue",
        eggGroups: ["Undiscovered"],
        tier: "Bank",
        unreleasedHidden: true
    },
    larvitar: {
        num: 246,
        species: "Larvitar",
        types: ["Rock", "Ground"],
        baseStats: {
            hp: 50,
            atk: 64,
            def: 50,
            spa: 45,
            spd: 50,
            spe: 41
        },
        abilities: {
            "0": "Guts",
            H: "Sand Veil"
        },
        heightm: 0.6,
        weightkg: 72,
        color: "Green",
        evos: ["pupitar"],
        eggGroups: ["Monster"],
        tier: "Bank-LC"
    },
    pupitar: {
        num: 247,
        species: "Pupitar",
        types: ["Rock", "Ground"],
        baseStats: {
            hp: 70,
            atk: 84,
            def: 70,
            spa: 65,
            spd: 70,
            spe: 51
        },
        abilities: {
            "0": "Shed Skin"
        },
        heightm: 1.2,
        weightkg: 152,
        color: "Gray",
        prevo: "larvitar",
        evos: ["tyranitar"],
        evoLevel: 30,
        eggGroups: ["Monster"],
        tier: "Bank-NFE"
    },
    tyranitar: {
        num: 248,
        species: "Tyranitar",
        types: ["Rock", "Dark"],
        baseStats: {
            hp: 100,
            atk: 134,
            def: 110,
            spa: 95,
            spd: 100,
            spe: 61
        },
        abilities: {
            "0": "Sand Stream",
            H: "Unnerve"
        },
        heightm: 2,
        weightkg: 202,
        color: "Green",
        prevo: "pupitar",
        evoLevel: 55,
        eggGroups: ["Monster"],
        otherFormes: ["tyranitarmega"],
        tier: "Bank"
    },
    tyranitarmega: {
        num: 248,
        species: "Tyranitar-Mega",
        baseSpecies: "Tyranitar",
        forme: "Mega",
        formeLetter: "M",
        types: ["Rock", "Dark"],
        baseStats: {
            hp: 100,
            atk: 164,
            def: 150,
            spa: 95,
            spd: 120,
            spe: 71
        },
        abilities: {
            "0": "Sand Stream"
        },
        heightm: 2.5,
        weightkg: 255,
        color: "Green",
        eggGroups: ["Monster"],
        tier: "Unreleased",
        requiredItem: "Tyranitarite"
    },
    lugia: {
        num: 249,
        species: "Lugia",
        types: ["Psychic", "Flying"],
        gender: "N",
        baseStats: {
            hp: 106,
            atk: 90,
            def: 130,
            spa: 90,
            spd: 154,
            spe: 110
        },
        abilities: {
            "0": "Pressure",
            H: "Multiscale"
        },
        heightm: 5.2,
        weightkg: 216,
        color: "White",
        eggGroups: ["Undiscovered"],
        tier: "Bank-Uber"
    },
    hooh: {
        num: 250,
        species: "Ho-Oh",
        types: ["Fire", "Flying"],
        gender: "N",
        baseStats: {
            hp: 106,
            atk: 130,
            def: 90,
            spa: 110,
            spd: 154,
            spe: 90
        },
        abilities: {
            "0": "Pressure",
            H: "Regenerator"
        },
        heightm: 3.8,
        weightkg: 199,
        color: "Red",
        eggGroups: ["Undiscovered"],
        tier: "Bank-Uber"
    },
    celebi: {
        num: 251,
        species: "Celebi",
        types: ["Psychic", "Grass"],
        gender: "N",
        baseStats: {
            hp: 100,
            atk: 100,
            def: 100,
            spa: 100,
            spd: 100,
            spe: 100
        },
        abilities: {
            "0": "Natural Cure"
        },
        heightm: 0.6,
        weightkg: 5,
        color: "Green",
        eggGroups: ["Undiscovered"],
        tier: "Bank"
    },
    treecko: {
        num: 252,
        species: "Treecko",
        types: ["Grass"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 40,
            atk: 45,
            def: 35,
            spa: 65,
            spd: 55,
            spe: 70
        },
        abilities: {
            "0": "Overgrow",
            H: "Unburden"
        },
        heightm: 0.5,
        weightkg: 5,
        color: "Green",
        evos: ["grovyle"],
        eggGroups: ["Monster", "Dragon"],
        tier: "Bank-LC"
    },
    grovyle: {
        num: 253,
        species: "Grovyle",
        types: ["Grass"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 50,
            atk: 65,
            def: 45,
            spa: 85,
            spd: 65,
            spe: 95
        },
        abilities: {
            "0": "Overgrow",
            H: "Unburden"
        },
        heightm: 0.9,
        weightkg: 21.6,
        color: "Green",
        prevo: "treecko",
        evos: ["sceptile"],
        evoLevel: 16,
        eggGroups: ["Monster", "Dragon"],
        tier: "Bank-NFE"
    },
    sceptile: {
        num: 254,
        species: "Sceptile",
        types: ["Grass"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 70,
            atk: 85,
            def: 65,
            spa: 105,
            spd: 85,
            spe: 120
        },
        abilities: {
            "0": "Overgrow",
            H: "Unburden"
        },
        heightm: 1.7,
        weightkg: 52.2,
        color: "Green",
        prevo: "grovyle",
        evoLevel: 36,
        eggGroups: ["Monster", "Dragon"],
        otherFormes: ["sceptilemega"],
        tier: "Bank"
    },
    sceptilemega: {
        num: 254,
        species: "Sceptile-Mega",
        baseSpecies: "Sceptile",
        forme: "Mega",
        formeLetter: "M",
        types: ["Grass", "Dragon"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 70,
            atk: 110,
            def: 75,
            spa: 145,
            spd: 85,
            spe: 145
        },
        abilities: {
            "0": "Lightning Rod"
        },
        heightm: 1.9,
        weightkg: 55.2,
        color: "Green",
        eggGroups: ["Monster", "Dragon"],
        tier: "Unreleased",
        requiredItem: "Sceptilite"
    },
    torchic: {
        num: 255,
        species: "Torchic",
        types: ["Fire"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 45,
            atk: 60,
            def: 40,
            spa: 70,
            spd: 50,
            spe: 45
        },
        abilities: {
            "0": "Blaze",
            H: "Speed Boost"
        },
        heightm: 0.4,
        weightkg: 2.5,
        color: "Red",
        evos: ["combusken"],
        eggGroups: ["Field"],
        tier: "Bank-LC"
    },
    combusken: {
        num: 256,
        species: "Combusken",
        types: ["Fire", "Fighting"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 60,
            atk: 85,
            def: 60,
            spa: 85,
            spd: 60,
            spe: 55
        },
        abilities: {
            "0": "Blaze",
            H: "Speed Boost"
        },
        heightm: 0.9,
        weightkg: 19.5,
        color: "Red",
        prevo: "torchic",
        evos: ["blaziken"],
        evoLevel: 16,
        eggGroups: ["Field"],
        tier: "Bank"
    },
    blaziken: {
        num: 257,
        species: "Blaziken",
        types: ["Fire", "Fighting"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 80,
            atk: 120,
            def: 70,
            spa: 110,
            spd: 70,
            spe: 80
        },
        abilities: {
            "0": "Blaze",
            H: "Speed Boost"
        },
        heightm: 1.9,
        weightkg: 52,
        color: "Red",
        prevo: "combusken",
        evoLevel: 36,
        eggGroups: ["Field"],
        otherFormes: ["blazikenmega"],
        tier: "Bank-Uber"
    },
    blazikenmega: {
        num: 257,
        species: "Blaziken-Mega",
        baseSpecies: "Blaziken",
        forme: "Mega",
        formeLetter: "M",
        types: ["Fire", "Fighting"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 80,
            atk: 160,
            def: 80,
            spa: 130,
            spd: 80,
            spe: 100
        },
        abilities: {
            "0": "Speed Boost"
        },
        heightm: 1.9,
        weightkg: 52,
        color: "Red",
        eggGroups: ["Field"],
        tier: "Unreleased",
        requiredItem: "Blazikenite"
    },
    mudkip: {
        num: 258,
        species: "Mudkip",
        types: ["Water"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 50,
            atk: 70,
            def: 50,
            spa: 50,
            spd: 50,
            spe: 40
        },
        abilities: {
            "0": "Torrent",
            H: "Damp"
        },
        heightm: 0.4,
        weightkg: 7.6,
        color: "Blue",
        evos: ["marshtomp"],
        eggGroups: ["Monster", "Water 1"],
        tier: "Bank-LC"
    },
    marshtomp: {
        num: 259,
        species: "Marshtomp",
        types: ["Water", "Ground"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 70,
            atk: 85,
            def: 70,
            spa: 60,
            spd: 70,
            spe: 50
        },
        abilities: {
            "0": "Torrent",
            H: "Damp"
        },
        heightm: 0.7,
        weightkg: 28,
        color: "Blue",
        prevo: "mudkip",
        evos: ["swampert"],
        evoLevel: 16,
        eggGroups: ["Monster", "Water 1"],
        tier: "Bank-NFE"
    },
    swampert: {
        num: 260,
        species: "Swampert",
        types: ["Water", "Ground"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 100,
            atk: 110,
            def: 90,
            spa: 85,
            spd: 90,
            spe: 60
        },
        abilities: {
            "0": "Torrent",
            H: "Damp"
        },
        heightm: 1.5,
        weightkg: 81.9,
        color: "Blue",
        prevo: "marshtomp",
        evoLevel: 36,
        eggGroups: ["Monster", "Water 1"],
        otherFormes: ["swampertmega"],
        tier: "Bank"
    },
    swampertmega: {
        num: 260,
        species: "Swampert-Mega",
        baseSpecies: "Swampert",
        forme: "Mega",
        formeLetter: "M",
        types: ["Water", "Ground"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 100,
            atk: 150,
            def: 110,
            spa: 95,
            spd: 110,
            spe: 70
        },
        abilities: {
            "0": "Swift Swim"
        },
        heightm: 1.9,
        weightkg: 102,
        color: "Blue",
        eggGroups: ["Monster", "Water 1"],
        tier: "Unreleased",
        requiredItem: "Swampertite"
    },
    poochyena: {
        num: 261,
        species: "Poochyena",
        types: ["Dark"],
        baseStats: {
            hp: 35,
            atk: 55,
            def: 35,
            spa: 30,
            spd: 30,
            spe: 35
        },
        abilities: {
            "0": "Run Away",
            "1": "Quick Feet",
            H: "Rattled"
        },
        heightm: 0.5,
        weightkg: 13.6,
        color: "Gray",
        evos: ["mightyena"],
        eggGroups: ["Field"],
        tier: "Bank-LC"
    },
    mightyena: {
        num: 262,
        species: "Mightyena",
        types: ["Dark"],
        baseStats: {
            hp: 70,
            atk: 90,
            def: 70,
            spa: 60,
            spd: 60,
            spe: 70
        },
        abilities: {
            "0": "Intimidate",
            "1": "Quick Feet",
            H: "Moxie"
        },
        heightm: 1,
        weightkg: 37,
        color: "Gray",
        prevo: "poochyena",
        evoLevel: 18,
        eggGroups: ["Field"],
        tier: "Bank"
    },
    zigzagoon: {
        num: 263,
        species: "Zigzagoon",
        types: ["Normal"],
        baseStats: {
            hp: 38,
            atk: 30,
            def: 41,
            spa: 30,
            spd: 41,
            spe: 60
        },
        abilities: {
            "0": "Pickup",
            "1": "Gluttony",
            H: "Quick Feet"
        },
        heightm: 0.4,
        weightkg: 17.5,
        color: "Brown",
        evos: ["linoone"],
        eggGroups: ["Field"],
        tier: "Bank-LC"
    },
    linoone: {
        num: 264,
        species: "Linoone",
        types: ["Normal"],
        baseStats: {
            hp: 78,
            atk: 70,
            def: 61,
            spa: 50,
            spd: 61,
            spe: 100
        },
        abilities: {
            "0": "Pickup",
            "1": "Gluttony",
            H: "Quick Feet"
        },
        heightm: 0.5,
        weightkg: 32.5,
        color: "White",
        prevo: "zigzagoon",
        evoLevel: 20,
        eggGroups: ["Field"],
        tier: "Bank"
    },
    wurmple: {
        num: 265,
        species: "Wurmple",
        types: ["Bug"],
        baseStats: {
            hp: 45,
            atk: 45,
            def: 35,
            spa: 20,
            spd: 30,
            spe: 20
        },
        abilities: {
            "0": "Shield Dust",
            H: "Run Away"
        },
        heightm: 0.3,
        weightkg: 3.6,
        color: "Red",
        evos: ["silcoon", "cascoon"],
        eggGroups: ["Bug"],
        tier: "Bank-LC"
    },
    silcoon: {
        num: 266,
        species: "Silcoon",
        types: ["Bug"],
        baseStats: {
            hp: 50,
            atk: 35,
            def: 55,
            spa: 25,
            spd: 25,
            spe: 15
        },
        abilities: {
            "0": "Shed Skin"
        },
        heightm: 0.6,
        weightkg: 10,
        color: "White",
        prevo: "wurmple",
        evos: ["beautifly"],
        evoLevel: 7,
        eggGroups: ["Bug"],
        tier: "Bank-NFE"
    },
    beautifly: {
        num: 267,
        species: "Beautifly",
        types: ["Bug", "Flying"],
        baseStats: {
            hp: 60,
            atk: 70,
            def: 50,
            spa: 100,
            spd: 50,
            spe: 65
        },
        abilities: {
            "0": "Swarm",
            H: "Rivalry"
        },
        heightm: 1,
        weightkg: 28.4,
        color: "Yellow",
        prevo: "silcoon",
        evoLevel: 10,
        eggGroups: ["Bug"],
        tier: "Bank"
    },
    cascoon: {
        num: 268,
        species: "Cascoon",
        types: ["Bug"],
        baseStats: {
            hp: 50,
            atk: 35,
            def: 55,
            spa: 25,
            spd: 25,
            spe: 15
        },
        abilities: {
            "0": "Shed Skin"
        },
        heightm: 0.7,
        weightkg: 11.5,
        color: "Purple",
        prevo: "wurmple",
        evos: ["dustox"],
        evoLevel: 7,
        eggGroups: ["Bug"],
        tier: "Bank-NFE"
    },
    dustox: {
        num: 269,
        species: "Dustox",
        types: ["Bug", "Poison"],
        baseStats: {
            hp: 60,
            atk: 50,
            def: 70,
            spa: 50,
            spd: 90,
            spe: 65
        },
        abilities: {
            "0": "Shield Dust",
            H: "Compound Eyes"
        },
        heightm: 1.2,
        weightkg: 31.6,
        color: "Green",
        prevo: "cascoon",
        evoLevel: 10,
        eggGroups: ["Bug"],
        tier: "Bank"
    },
    lotad: {
        num: 270,
        species: "Lotad",
        types: ["Water", "Grass"],
        baseStats: {
            hp: 40,
            atk: 30,
            def: 30,
            spa: 40,
            spd: 50,
            spe: 30
        },
        abilities: {
            "0": "Swift Swim",
            "1": "Rain Dish",
            H: "Own Tempo"
        },
        heightm: 0.5,
        weightkg: 2.6,
        color: "Green",
        evos: ["lombre"],
        eggGroups: ["Water 1", "Grass"],
        tier: "Bank-LC"
    },
    lombre: {
        num: 271,
        species: "Lombre",
        types: ["Water", "Grass"],
        baseStats: {
            hp: 60,
            atk: 50,
            def: 50,
            spa: 60,
            spd: 70,
            spe: 50
        },
        abilities: {
            "0": "Swift Swim",
            "1": "Rain Dish",
            H: "Own Tempo"
        },
        heightm: 1.2,
        weightkg: 32.5,
        color: "Green",
        prevo: "lotad",
        evos: ["ludicolo"],
        evoLevel: 14,
        eggGroups: ["Water 1", "Grass"],
        tier: "Bank-NFE"
    },
    ludicolo: {
        num: 272,
        species: "Ludicolo",
        types: ["Water", "Grass"],
        baseStats: {
            hp: 80,
            atk: 70,
            def: 70,
            spa: 90,
            spd: 100,
            spe: 70
        },
        abilities: {
            "0": "Swift Swim",
            "1": "Rain Dish",
            H: "Own Tempo"
        },
        heightm: 1.5,
        weightkg: 55,
        color: "Green",
        prevo: "lombre",
        evoLevel: 14,
        eggGroups: ["Water 1", "Grass"],
        tier: "Bank"
    },
    seedot: {
        num: 273,
        species: "Seedot",
        types: ["Grass"],
        baseStats: {
            hp: 40,
            atk: 40,
            def: 50,
            spa: 30,
            spd: 30,
            spe: 30
        },
        abilities: {
            "0": "Chlorophyll",
            "1": "Early Bird",
            H: "Pickpocket"
        },
        heightm: 0.5,
        weightkg: 4,
        color: "Brown",
        evos: ["nuzleaf"],
        eggGroups: ["Field", "Grass"],
        tier: "Bank-LC"
    },
    nuzleaf: {
        num: 274,
        species: "Nuzleaf",
        types: ["Grass", "Dark"],
        baseStats: {
            hp: 70,
            atk: 70,
            def: 40,
            spa: 60,
            spd: 40,
            spe: 60
        },
        abilities: {
            "0": "Chlorophyll",
            "1": "Early Bird",
            H: "Pickpocket"
        },
        heightm: 1,
        weightkg: 28,
        color: "Brown",
        prevo: "seedot",
        evos: ["shiftry"],
        evoLevel: 14,
        eggGroups: ["Field", "Grass"],
        tier: "Bank-NFE"
    },
    shiftry: {
        num: 275,
        species: "Shiftry",
        types: ["Grass", "Dark"],
        baseStats: {
            hp: 90,
            atk: 100,
            def: 60,
            spa: 90,
            spd: 60,
            spe: 80
        },
        abilities: {
            "0": "Chlorophyll",
            "1": "Early Bird",
            H: "Pickpocket"
        },
        heightm: 1.3,
        weightkg: 59.6,
        color: "Brown",
        prevo: "nuzleaf",
        evoLevel: 14,
        eggGroups: ["Field", "Grass"],
        tier: "Bank"
    },
    taillow: {
        num: 276,
        species: "Taillow",
        types: ["Normal", "Flying"],
        baseStats: {
            hp: 40,
            atk: 55,
            def: 30,
            spa: 30,
            spd: 30,
            spe: 85
        },
        abilities: {
            "0": "Guts",
            H: "Scrappy"
        },
        heightm: 0.3,
        weightkg: 2.3,
        color: "Blue",
        evos: ["swellow"],
        eggGroups: ["Flying"],
        tier: "Bank-LC"
    },
    swellow: {
        num: 277,
        species: "Swellow",
        types: ["Normal", "Flying"],
        baseStats: {
            hp: 60,
            atk: 85,
            def: 60,
            spa: 75,
            spd: 50,
            spe: 125
        },
        abilities: {
            "0": "Guts",
            H: "Scrappy"
        },
        heightm: 0.7,
        weightkg: 19.8,
        color: "Blue",
        prevo: "taillow",
        evoLevel: 22,
        eggGroups: ["Flying"],
        tier: "Bank"
    },
    wingull: {
        num: 278,
        species: "Wingull",
        types: ["Water", "Flying"],
        baseStats: {
            hp: 40,
            atk: 30,
            def: 30,
            spa: 55,
            spd: 30,
            spe: 85
        },
        abilities: {
            "0": "Keen Eye",
            "1": "Hydration",
            H: "Rain Dish"
        },
        heightm: 0.6,
        weightkg: 9.5,
        color: "White",
        evos: ["pelipper"],
        eggGroups: ["Water 1", "Flying"],
        tier: "LC"
    },
    pelipper: {
        num: 279,
        species: "Pelipper",
        types: ["Water", "Flying"],
        baseStats: {
            hp: 60,
            atk: 50,
            def: 100,
            spa: 95,
            spd: 70,
            spe: 65
        },
        abilities: {
            "0": "Keen Eye",
            "1": "Drizzle",
            H: "Rain Dish"
        },
        heightm: 1.2,
        weightkg: 28,
        color: "Yellow",
        prevo: "wingull",
        evoLevel: 25,
        eggGroups: ["Water 1", "Flying"],
        tier: "New"
    },
    ralts: {
        num: 280,
        species: "Ralts",
        types: ["Psychic", "Fairy"],
        baseStats: {
            hp: 28,
            atk: 25,
            def: 25,
            spa: 45,
            spd: 35,
            spe: 40
        },
        abilities: {
            "0": "Synchronize",
            "1": "Trace",
            H: "Telepathy"
        },
        heightm: 0.4,
        weightkg: 6.6,
        color: "White",
        evos: ["kirlia"],
        eggGroups: ["Amorphous"],
        tier: "Bank-LC"
    },
    kirlia: {
        num: 281,
        species: "Kirlia",
        types: ["Psychic", "Fairy"],
        baseStats: {
            hp: 38,
            atk: 35,
            def: 35,
            spa: 65,
            spd: 55,
            spe: 50
        },
        abilities: {
            "0": "Synchronize",
            "1": "Trace",
            H: "Telepathy"
        },
        heightm: 0.8,
        weightkg: 20.2,
        color: "White",
        prevo: "ralts",
        evos: ["gardevoir", "gallade"],
        evoLevel: 20,
        eggGroups: ["Amorphous"],
        tier: "Bank-NFE"
    },
    gardevoir: {
        num: 282,
        species: "Gardevoir",
        types: ["Psychic", "Fairy"],
        baseStats: {
            hp: 68,
            atk: 65,
            def: 65,
            spa: 125,
            spd: 115,
            spe: 80
        },
        abilities: {
            "0": "Synchronize",
            "1": "Trace",
            H: "Telepathy"
        },
        heightm: 1.6,
        weightkg: 48.4,
        color: "White",
        prevo: "kirlia",
        evoLevel: 30,
        eggGroups: ["Amorphous"],
        otherFormes: ["gardevoirmega"],
        tier: "Bank"
    },
    gardevoirmega: {
        num: 282,
        species: "Gardevoir-Mega",
        baseSpecies: "Gardevoir",
        forme: "Mega",
        formeLetter: "M",
        types: ["Psychic", "Fairy"],
        baseStats: {
            hp: 68,
            atk: 85,
            def: 65,
            spa: 165,
            spd: 135,
            spe: 100
        },
        abilities: {
            "0": "Pixilate"
        },
        heightm: 1.6,
        weightkg: 48.4,
        color: "White",
        eggGroups: ["Amorphous"],
        tier: "Unreleased",
        requiredItem: "Gardevoirite"
    },
    surskit: {
        num: 283,
        species: "Surskit",
        types: ["Bug", "Water"],
        baseStats: {
            hp: 40,
            atk: 30,
            def: 32,
            spa: 50,
            spd: 52,
            spe: 65
        },
        abilities: {
            "0": "Swift Swim",
            H: "Rain Dish"
        },
        heightm: 0.5,
        weightkg: 1.7,
        color: "Blue",
        evos: ["masquerain"],
        eggGroups: ["Water 1", "Bug"],
        tier: "LC"
    },
    masquerain: {
        num: 284,
        species: "Masquerain",
        types: ["Bug", "Flying"],
        baseStats: {
            hp: 70,
            atk: 60,
            def: 62,
            spa: 100,
            spd: 82,
            spe: 80
        },
        abilities: {
            "0": "Intimidate",
            H: "Unnerve"
        },
        heightm: 0.8,
        weightkg: 3.6,
        color: "Blue",
        prevo: "surskit",
        evoLevel: 22,
        eggGroups: ["Water 1", "Bug"],
        tier: "New"
    },
    shroomish: {
        num: 285,
        species: "Shroomish",
        types: ["Grass"],
        baseStats: {
            hp: 60,
            atk: 40,
            def: 60,
            spa: 40,
            spd: 60,
            spe: 35
        },
        abilities: {
            "0": "Effect Spore",
            "1": "Poison Heal",
            H: "Quick Feet"
        },
        heightm: 0.4,
        weightkg: 4.5,
        color: "Brown",
        evos: ["breloom"],
        eggGroups: ["Fairy", "Grass"],
        tier: "Bank-LC"
    },
    breloom: {
        num: 286,
        species: "Breloom",
        types: ["Grass", "Fighting"],
        baseStats: {
            hp: 60,
            atk: 130,
            def: 80,
            spa: 60,
            spd: 60,
            spe: 70
        },
        abilities: {
            "0": "Effect Spore",
            "1": "Poison Heal",
            H: "Technician"
        },
        heightm: 1.2,
        weightkg: 39.2,
        color: "Green",
        prevo: "shroomish",
        evoLevel: 23,
        eggGroups: ["Fairy", "Grass"],
        tier: "Bank"
    },
    slakoth: {
        num: 287,
        species: "Slakoth",
        types: ["Normal"],
        baseStats: {
            hp: 60,
            atk: 60,
            def: 60,
            spa: 35,
            spd: 35,
            spe: 30
        },
        abilities: {
            "0": "Truant"
        },
        heightm: 0.8,
        weightkg: 24,
        color: "Brown",
        evos: ["vigoroth"],
        eggGroups: ["Field"],
        tier: "LC"
    },
    vigoroth: {
        num: 288,
        species: "Vigoroth",
        types: ["Normal"],
        baseStats: {
            hp: 80,
            atk: 80,
            def: 80,
            spa: 55,
            spd: 55,
            spe: 90
        },
        abilities: {
            "0": "Vital Spirit"
        },
        heightm: 1.4,
        weightkg: 46.5,
        color: "White",
        prevo: "slakoth",
        evos: ["slaking"],
        evoLevel: 18,
        eggGroups: ["Field"],
        tier: "New"
    },
    slaking: {
        num: 289,
        species: "Slaking",
        types: ["Normal"],
        baseStats: {
            hp: 150,
            atk: 160,
            def: 100,
            spa: 95,
            spd: 65,
            spe: 100
        },
        abilities: {
            "0": "Truant"
        },
        heightm: 2,
        weightkg: 130.5,
        color: "Brown",
        prevo: "vigoroth",
        evoLevel: 36,
        eggGroups: ["Field"],
        tier: "New"
    },
    nincada: {
        num: 290,
        species: "Nincada",
        types: ["Bug", "Ground"],
        baseStats: {
            hp: 31,
            atk: 45,
            def: 90,
            spa: 30,
            spd: 30,
            spe: 40
        },
        abilities: {
            "0": "Compound Eyes",
            H: "Run Away"
        },
        heightm: 0.5,
        weightkg: 5.5,
        color: "Gray",
        evos: ["ninjask", "shedinja"],
        eggGroups: ["Bug"],
        tier: "Bank-LC"
    },
    ninjask: {
        num: 291,
        species: "Ninjask",
        types: ["Bug", "Flying"],
        baseStats: {
            hp: 61,
            atk: 90,
            def: 45,
            spa: 50,
            spd: 50,
            spe: 160
        },
        abilities: {
            "0": "Speed Boost",
            H: "Infiltrator"
        },
        heightm: 0.8,
        weightkg: 12,
        color: "Yellow",
        prevo: "nincada",
        evoLevel: 20,
        eggGroups: ["Bug"],
        tier: "Bank"
    },
    shedinja: {
        num: 292,
        species: "Shedinja",
        types: ["Bug", "Ghost"],
        gender: "N",
        baseStats: {
            hp: 1,
            atk: 90,
            def: 45,
            spa: 30,
            spd: 30,
            spe: 40
        },
        maxHP: 1,
        abilities: {
            "0": "Wonder Guard"
        },
        heightm: 0.8,
        weightkg: 1.2,
        color: "Brown",
        prevo: "nincada",
        evoLevel: 20,
        eggGroups: ["Mineral"],
        tier: "Bank"
    },
    whismur: {
        num: 293,
        species: "Whismur",
        types: ["Normal"],
        baseStats: {
            hp: 64,
            atk: 51,
            def: 23,
            spa: 51,
            spd: 23,
            spe: 28
        },
        abilities: {
            "0": "Soundproof",
            H: "Rattled"
        },
        heightm: 0.6,
        weightkg: 16.3,
        color: "Pink",
        evos: ["loudred"],
        eggGroups: ["Monster", "Field"],
        tier: "Bank-LC"
    },
    loudred: {
        num: 294,
        species: "Loudred",
        types: ["Normal"],
        baseStats: {
            hp: 84,
            atk: 71,
            def: 43,
            spa: 71,
            spd: 43,
            spe: 48
        },
        abilities: {
            "0": "Soundproof",
            H: "Scrappy"
        },
        heightm: 1,
        weightkg: 40.5,
        color: "Blue",
        prevo: "whismur",
        evos: ["exploud"],
        evoLevel: 20,
        eggGroups: ["Monster", "Field"],
        tier: "Bank-NFE"
    },
    exploud: {
        num: 295,
        species: "Exploud",
        types: ["Normal"],
        baseStats: {
            hp: 104,
            atk: 91,
            def: 63,
            spa: 91,
            spd: 73,
            spe: 68
        },
        abilities: {
            "0": "Soundproof",
            H: "Scrappy"
        },
        heightm: 1.5,
        weightkg: 84,
        color: "Blue",
        prevo: "loudred",
        evoLevel: 40,
        eggGroups: ["Monster", "Field"],
        tier: "Bank"
    },
    makuhita: {
        num: 296,
        species: "Makuhita",
        types: ["Fighting"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 72,
            atk: 60,
            def: 30,
            spa: 20,
            spd: 30,
            spe: 25
        },
        abilities: {
            "0": "Thick Fat",
            "1": "Guts",
            H: "Sheer Force"
        },
        heightm: 1,
        weightkg: 86.4,
        color: "Yellow",
        evos: ["hariyama"],
        eggGroups: ["Human-Like"],
        tier: "LC"
    },
    hariyama: {
        num: 297,
        species: "Hariyama",
        types: ["Fighting"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 144,
            atk: 120,
            def: 60,
            spa: 40,
            spd: 60,
            spe: 50
        },
        abilities: {
            "0": "Thick Fat",
            "1": "Guts",
            H: "Sheer Force"
        },
        heightm: 2.3,
        weightkg: 253.8,
        color: "Brown",
        prevo: "makuhita",
        evoLevel: 24,
        eggGroups: ["Human-Like"],
        tier: "New"
    },
    azurill: {
        num: 298,
        species: "Azurill",
        types: ["Normal", "Fairy"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 50,
            atk: 20,
            def: 40,
            spa: 20,
            spd: 40,
            spe: 20
        },
        abilities: {
            "0": "Thick Fat",
            "1": "Huge Power",
            H: "Sap Sipper"
        },
        heightm: 0.2,
        weightkg: 2,
        color: "Blue",
        evos: ["marill"],
        eggGroups: ["Undiscovered"],
        tier: "Bank-LC"
    },
    nosepass: {
        num: 299,
        species: "Nosepass",
        types: ["Rock"],
        baseStats: {
            hp: 30,
            atk: 45,
            def: 135,
            spa: 45,
            spd: 90,
            spe: 30
        },
        abilities: {
            "0": "Sturdy",
            "1": "Magnet Pull",
            H: "Sand Force"
        },
        heightm: 1,
        weightkg: 97,
        color: "Gray",
        evos: ["probopass"],
        eggGroups: ["Mineral"],
        tier: "LC"
    },
    skitty: {
        num: 300,
        species: "Skitty",
        types: ["Normal"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 50,
            atk: 45,
            def: 45,
            spa: 35,
            spd: 35,
            spe: 50
        },
        abilities: {
            "0": "Cute Charm",
            "1": "Normalize",
            H: "Wonder Skin"
        },
        heightm: 0.6,
        weightkg: 11,
        color: "Pink",
        evos: ["delcatty"],
        eggGroups: ["Field", "Fairy"],
        tier: "Bank-LC"
    },
    delcatty: {
        num: 301,
        species: "Delcatty",
        types: ["Normal"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 70,
            atk: 65,
            def: 65,
            spa: 55,
            spd: 55,
            spe: 90
        },
        abilities: {
            "0": "Cute Charm",
            "1": "Normalize",
            H: "Wonder Skin"
        },
        heightm: 1.1,
        weightkg: 32.6,
        color: "Purple",
        prevo: "skitty",
        evoLevel: 1,
        eggGroups: ["Field", "Fairy"],
        tier: "Bank"
    },
    sableye: {
        num: 302,
        species: "Sableye",
        types: ["Dark", "Ghost"],
        baseStats: {
            hp: 50,
            atk: 75,
            def: 75,
            spa: 65,
            spd: 65,
            spe: 50
        },
        abilities: {
            "0": "Keen Eye",
            "1": "Stall",
            H: "Prankster"
        },
        heightm: 0.5,
        weightkg: 11,
        color: "Purple",
        eggGroups: ["Human-Like"],
        otherFormes: ["sableyemega"],
        tier: "New"
    },
    sableyemega: {
        num: 302,
        species: "Sableye-Mega",
        baseSpecies: "Sableye",
        forme: "Mega",
        formeLetter: "M",
        types: ["Dark", "Ghost"],
        baseStats: {
            hp: 50,
            atk: 85,
            def: 125,
            spa: 85,
            spd: 115,
            spe: 20
        },
        abilities: {
            "0": "Magic Bounce"
        },
        heightm: 0.5,
        weightkg: 161,
        color: "Purple",
        eggGroups: ["Human-Like"],
        tier: "New",
        requiredItem: "Sablenite"
    },
    mawile: {
        num: 303,
        species: "Mawile",
        types: ["Steel", "Fairy"],
        baseStats: {
            hp: 50,
            atk: 85,
            def: 85,
            spa: 55,
            spd: 55,
            spe: 50
        },
        abilities: {
            "0": "Hyper Cutter",
            "1": "Intimidate",
            H: "Sheer Force"
        },
        heightm: 0.6,
        weightkg: 11.5,
        color: "Black",
        eggGroups: ["Field", "Fairy"],
        otherFormes: ["mawilemega"],
        tier: "Bank"
    },
    mawilemega: {
        num: 303,
        species: "Mawile-Mega",
        baseSpecies: "Mawile",
        forme: "Mega",
        formeLetter: "M",
        types: ["Steel", "Fairy"],
        baseStats: {
            hp: 50,
            atk: 105,
            def: 125,
            spa: 55,
            spd: 95,
            spe: 50
        },
        abilities: {
            "0": "Huge Power"
        },
        heightm: 1,
        weightkg: 23.5,
        color: "Black",
        eggGroups: ["Field", "Fairy"],
        tier: "Unreleased",
        requiredItem: "Mawilite"
    },
    aron: {
        num: 304,
        species: "Aron",
        types: ["Steel", "Rock"],
        baseStats: {
            hp: 50,
            atk: 70,
            def: 100,
            spa: 40,
            spd: 40,
            spe: 30
        },
        abilities: {
            "0": "Sturdy",
            "1": "Rock Head",
            H: "Heavy Metal"
        },
        heightm: 0.4,
        weightkg: 60,
        color: "Gray",
        evos: ["lairon"],
        eggGroups: ["Monster"],
        tier: "Bank-LC"
    },
    lairon: {
        num: 305,
        species: "Lairon",
        types: ["Steel", "Rock"],
        baseStats: {
            hp: 60,
            atk: 90,
            def: 140,
            spa: 50,
            spd: 50,
            spe: 40
        },
        abilities: {
            "0": "Sturdy",
            "1": "Rock Head",
            H: "Heavy Metal"
        },
        heightm: 0.9,
        weightkg: 120,
        color: "Gray",
        prevo: "aron",
        evos: ["aggron"],
        evoLevel: 32,
        eggGroups: ["Monster"],
        tier: "Bank-NFE"
    },
    aggron: {
        num: 306,
        species: "Aggron",
        types: ["Steel", "Rock"],
        baseStats: {
            hp: 70,
            atk: 110,
            def: 180,
            spa: 60,
            spd: 60,
            spe: 50
        },
        abilities: {
            "0": "Sturdy",
            "1": "Rock Head",
            H: "Heavy Metal"
        },
        heightm: 2.1,
        weightkg: 360,
        color: "Gray",
        prevo: "lairon",
        evoLevel: 42,
        eggGroups: ["Monster"],
        otherFormes: ["aggronmega"],
        tier: "Bank"
    },
    aggronmega: {
        num: 306,
        species: "Aggron-Mega",
        baseSpecies: "Aggron",
        forme: "Mega",
        formeLetter: "M",
        types: ["Steel"],
        baseStats: {
            hp: 70,
            atk: 140,
            def: 230,
            spa: 60,
            spd: 80,
            spe: 50
        },
        abilities: {
            "0": "Filter"
        },
        heightm: 2.2,
        weightkg: 395,
        color: "Gray",
        eggGroups: ["Monster"],
        tier: "Unreleased",
        requiredItem: "Aggronite"
    },
    meditite: {
        num: 307,
        species: "Meditite",
        types: ["Fighting", "Psychic"],
        baseStats: {
            hp: 30,
            atk: 40,
            def: 55,
            spa: 40,
            spd: 55,
            spe: 60
        },
        abilities: {
            "0": "Pure Power",
            H: "Telepathy"
        },
        heightm: 0.6,
        weightkg: 11.2,
        color: "Blue",
        evos: ["medicham"],
        eggGroups: ["Human-Like"],
        tier: "Bank"
    },
    medicham: {
        num: 308,
        species: "Medicham",
        types: ["Fighting", "Psychic"],
        baseStats: {
            hp: 60,
            atk: 60,
            def: 75,
            spa: 60,
            spd: 75,
            spe: 80
        },
        abilities: {
            "0": "Pure Power",
            H: "Telepathy"
        },
        heightm: 1.3,
        weightkg: 31.5,
        color: "Red",
        prevo: "meditite",
        evoLevel: 37,
        eggGroups: ["Human-Like"],
        otherFormes: ["medichammega"],
        tier: "Bank"
    },
    medichammega: {
        num: 308,
        species: "Medicham-Mega",
        baseSpecies: "Medicham",
        forme: "Mega",
        formeLetter: "M",
        types: ["Fighting", "Psychic"],
        baseStats: {
            hp: 60,
            atk: 100,
            def: 85,
            spa: 80,
            spd: 85,
            spe: 100
        },
        abilities: {
            "0": "Pure Power"
        },
        heightm: 1.3,
        weightkg: 31.5,
        color: "Red",
        eggGroups: ["Human-Like"],
        tier: "Unreleased",
        requiredItem: "Medichamite"
    },
    electrike: {
        num: 309,
        species: "Electrike",
        types: ["Electric"],
        baseStats: {
            hp: 40,
            atk: 45,
            def: 40,
            spa: 65,
            spd: 40,
            spe: 65
        },
        abilities: {
            "0": "Static",
            "1": "Lightning Rod",
            H: "Minus"
        },
        heightm: 0.6,
        weightkg: 15.2,
        color: "Green",
        evos: ["manectric"],
        eggGroups: ["Field"],
        tier: "Bank-LC"
    },
    manectric: {
        num: 310,
        species: "Manectric",
        types: ["Electric"],
        baseStats: {
            hp: 70,
            atk: 75,
            def: 60,
            spa: 105,
            spd: 60,
            spe: 105
        },
        abilities: {
            "0": "Static",
            "1": "Lightning Rod",
            H: "Minus"
        },
        heightm: 1.5,
        weightkg: 40.2,
        color: "Yellow",
        prevo: "electrike",
        evoLevel: 26,
        eggGroups: ["Field"],
        otherFormes: ["manectricmega"],
        tier: "Bank"
    },
    manectricmega: {
        num: 310,
        species: "Manectric-Mega",
        baseSpecies: "Manectric",
        forme: "Mega",
        formeLetter: "M",
        types: ["Electric"],
        baseStats: {
            hp: 70,
            atk: 75,
            def: 80,
            spa: 135,
            spd: 80,
            spe: 135
        },
        abilities: {
            "0": "Intimidate"
        },
        heightm: 1.8,
        weightkg: 44,
        color: "Yellow",
        eggGroups: ["Field"],
        tier: "Unreleased",
        requiredItem: "Manectite"
    },
    plusle: {
        num: 311,
        species: "Plusle",
        types: ["Electric"],
        baseStats: {
            hp: 60,
            atk: 50,
            def: 40,
            spa: 85,
            spd: 75,
            spe: 95
        },
        abilities: {
            "0": "Plus",
            H: "Lightning Rod"
        },
        heightm: 0.4,
        weightkg: 4.2,
        color: "Yellow",
        eggGroups: ["Fairy"],
        tier: "Bank"
    },
    minun: {
        num: 312,
        species: "Minun",
        types: ["Electric"],
        baseStats: {
            hp: 60,
            atk: 40,
            def: 50,
            spa: 75,
            spd: 85,
            spe: 95
        },
        abilities: {
            "0": "Minus",
            H: "Volt Absorb"
        },
        heightm: 0.4,
        weightkg: 4.2,
        color: "Yellow",
        eggGroups: ["Fairy"],
        tier: "Bank"
    },
    volbeat: {
        num: 313,
        species: "Volbeat",
        types: ["Bug"],
        gender: "M",
        baseStats: {
            hp: 65,
            atk: 73,
            def: 75,
            spa: 47,
            spd: 85,
            spe: 85
        },
        abilities: {
            "0": "Illuminate",
            "1": "Swarm",
            H: "Prankster"
        },
        heightm: 0.7,
        weightkg: 17.7,
        color: "Gray",
        eggGroups: ["Bug", "Human-Like"],
        tier: "Bank"
    },
    illumise: {
        num: 314,
        species: "Illumise",
        types: ["Bug"],
        gender: "F",
        baseStats: {
            hp: 65,
            atk: 47,
            def: 75,
            spa: 73,
            spd: 85,
            spe: 85
        },
        abilities: {
            "0": "Oblivious",
            "1": "Tinted Lens",
            H: "Prankster"
        },
        heightm: 0.6,
        weightkg: 17.7,
        color: "Purple",
        eggGroups: ["Bug", "Human-Like"],
        tier: "Bank"
    },
    roselia: {
        num: 315,
        species: "Roselia",
        types: ["Grass", "Poison"],
        baseStats: {
            hp: 50,
            atk: 60,
            def: 45,
            spa: 100,
            spd: 80,
            spe: 65
        },
        abilities: {
            "0": "Natural Cure",
            "1": "Poison Point",
            H: "Leaf Guard"
        },
        heightm: 0.3,
        weightkg: 2,
        color: "Green",
        prevo: "budew",
        evos: ["roserade"],
        evoLevel: 1,
        eggGroups: ["Fairy", "Grass"],
        tier: "New"
    },
    gulpin: {
        num: 316,
        species: "Gulpin",
        types: ["Poison"],
        baseStats: {
            hp: 70,
            atk: 43,
            def: 53,
            spa: 43,
            spd: 53,
            spe: 40
        },
        abilities: {
            "0": "Liquid Ooze",
            "1": "Sticky Hold",
            H: "Gluttony"
        },
        heightm: 0.4,
        weightkg: 10.3,
        color: "Green",
        evos: ["swalot"],
        eggGroups: ["Amorphous"],
        tier: "Bank-LC"
    },
    swalot: {
        num: 317,
        species: "Swalot",
        types: ["Poison"],
        baseStats: {
            hp: 100,
            atk: 73,
            def: 83,
            spa: 73,
            spd: 83,
            spe: 55
        },
        abilities: {
            "0": "Liquid Ooze",
            "1": "Sticky Hold",
            H: "Gluttony"
        },
        heightm: 1.7,
        weightkg: 80,
        color: "Purple",
        prevo: "gulpin",
        evoLevel: 26,
        eggGroups: ["Amorphous"],
        tier: "Bank"
    },
    carvanha: {
        num: 318,
        species: "Carvanha",
        types: ["Water", "Dark"],
        baseStats: {
            hp: 45,
            atk: 90,
            def: 20,
            spa: 65,
            spd: 20,
            spe: 65
        },
        abilities: {
            "0": "Rough Skin",
            H: "Speed Boost"
        },
        heightm: 0.8,
        weightkg: 20.8,
        color: "Red",
        evos: ["sharpedo"],
        eggGroups: ["Water 2"],
        tier: "LC"
    },
    sharpedo: {
        num: 319,
        species: "Sharpedo",
        types: ["Water", "Dark"],
        baseStats: {
            hp: 70,
            atk: 120,
            def: 40,
            spa: 95,
            spd: 40,
            spe: 95
        },
        abilities: {
            "0": "Rough Skin",
            H: "Speed Boost"
        },
        heightm: 1.8,
        weightkg: 88.8,
        color: "Blue",
        prevo: "carvanha",
        evoLevel: 30,
        eggGroups: ["Water 2"],
        otherFormes: ["sharpedomega"],
        tier: "New"
    },
    sharpedomega: {
        num: 319,
        species: "Sharpedo-Mega",
        baseSpecies: "Sharpedo",
        forme: "Mega",
        formeLetter: "M",
        types: ["Water", "Dark"],
        baseStats: {
            hp: 70,
            atk: 140,
            def: 70,
            spa: 110,
            spd: 65,
            spe: 105
        },
        abilities: {
            "0": "Strong Jaw"
        },
        heightm: 2.5,
        weightkg: 130.3,
        color: "Blue",
        eggGroups: ["Water 2"],
        tier: "New",
        requiredItem: "Sharpedonite"
    },
    wailmer: {
        num: 320,
        species: "Wailmer",
        types: ["Water"],
        baseStats: {
            hp: 130,
            atk: 70,
            def: 35,
            spa: 70,
            spd: 35,
            spe: 60
        },
        abilities: {
            "0": "Water Veil",
            "1": "Oblivious",
            H: "Pressure"
        },
        heightm: 2,
        weightkg: 130,
        color: "Blue",
        evos: ["wailord"],
        eggGroups: ["Field", "Water 2"],
        tier: "LC"
    },
    wailord: {
        num: 321,
        species: "Wailord",
        types: ["Water"],
        baseStats: {
            hp: 170,
            atk: 90,
            def: 45,
            spa: 90,
            spd: 45,
            spe: 60
        },
        abilities: {
            "0": "Water Veil",
            "1": "Oblivious",
            H: "Pressure"
        },
        heightm: 14.5,
        weightkg: 398,
        color: "Blue",
        prevo: "wailmer",
        evoLevel: 40,
        eggGroups: ["Field", "Water 2"],
        tier: "New"
    },
    numel: {
        num: 322,
        species: "Numel",
        types: ["Fire", "Ground"],
        baseStats: {
            hp: 60,
            atk: 60,
            def: 40,
            spa: 65,
            spd: 45,
            spe: 35
        },
        abilities: {
            "0": "Oblivious",
            "1": "Simple",
            H: "Own Tempo"
        },
        heightm: 0.7,
        weightkg: 24,
        color: "Yellow",
        evos: ["camerupt"],
        eggGroups: ["Field"],
        tier: "Bank-LC"
    },
    camerupt: {
        num: 323,
        species: "Camerupt",
        types: ["Fire", "Ground"],
        baseStats: {
            hp: 70,
            atk: 100,
            def: 70,
            spa: 105,
            spd: 75,
            spe: 40
        },
        abilities: {
            "0": "Magma Armor",
            "1": "Solid Rock",
            H: "Anger Point"
        },
        heightm: 1.9,
        weightkg: 220,
        color: "Red",
        prevo: "numel",
        evoLevel: 33,
        eggGroups: ["Field"],
        otherFormes: ["cameruptmega"],
        tier: "Bank"
    },
    cameruptmega: {
        num: 323,
        species: "Camerupt-Mega",
        baseSpecies: "Camerupt",
        forme: "Mega",
        formeLetter: "M",
        types: ["Fire", "Ground"],
        baseStats: {
            hp: 70,
            atk: 120,
            def: 100,
            spa: 145,
            spd: 105,
            spe: 20
        },
        abilities: {
            "0": "Sheer Force"
        },
        heightm: 2.5,
        weightkg: 320.5,
        color: "Red",
        eggGroups: ["Field"],
        tier: "Unreleased",
        requiredItem: "Cameruptite"
    },
    torkoal: {
        num: 324,
        species: "Torkoal",
        types: ["Fire"],
        baseStats: {
            hp: 70,
            atk: 85,
            def: 140,
            spa: 85,
            spd: 70,
            spe: 20
        },
        abilities: {
            "0": "White Smoke",
            "1": "Drought",
            H: "Shell Armor"
        },
        heightm: 0.5,
        weightkg: 80.4,
        color: "Brown",
        eggGroups: ["Field"],
        tier: "New"
    },
    spoink: {
        num: 325,
        species: "Spoink",
        types: ["Psychic"],
        baseStats: {
            hp: 60,
            atk: 25,
            def: 35,
            spa: 70,
            spd: 80,
            spe: 60
        },
        abilities: {
            "0": "Thick Fat",
            "1": "Own Tempo",
            H: "Gluttony"
        },
        heightm: 0.7,
        weightkg: 30.6,
        color: "Black",
        evos: ["grumpig"],
        eggGroups: ["Field"],
        tier: "Bank-LC"
    },
    grumpig: {
        num: 326,
        species: "Grumpig",
        types: ["Psychic"],
        baseStats: {
            hp: 80,
            atk: 45,
            def: 65,
            spa: 90,
            spd: 110,
            spe: 80
        },
        abilities: {
            "0": "Thick Fat",
            "1": "Own Tempo",
            H: "Gluttony"
        },
        heightm: 0.9,
        weightkg: 71.5,
        color: "Purple",
        prevo: "spoink",
        evoLevel: 32,
        eggGroups: ["Field"],
        tier: "Bank"
    },
    spinda: {
        num: 327,
        species: "Spinda",
        types: ["Normal"],
        baseStats: {
            hp: 60,
            atk: 60,
            def: 60,
            spa: 60,
            spd: 60,
            spe: 60
        },
        abilities: {
            "0": "Own Tempo",
            "1": "Tangled Feet",
            H: "Contrary"
        },
        heightm: 1.1,
        weightkg: 5,
        color: "Brown",
        eggGroups: ["Field", "Human-Like"],
        tier: "New"
    },
    trapinch: {
        num: 328,
        species: "Trapinch",
        types: ["Ground"],
        baseStats: {
            hp: 45,
            atk: 100,
            def: 45,
            spa: 45,
            spd: 45,
            spe: 10
        },
        abilities: {
            "0": "Hyper Cutter",
            "1": "Arena Trap",
            H: "Sheer Force"
        },
        heightm: 0.7,
        weightkg: 15,
        color: "Brown",
        evos: ["vibrava"],
        eggGroups: ["Bug"],
        tier: "LC"
    },
    vibrava: {
        num: 329,
        species: "Vibrava",
        types: ["Ground", "Dragon"],
        baseStats: {
            hp: 50,
            atk: 70,
            def: 50,
            spa: 50,
            spd: 50,
            spe: 70
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 1.1,
        weightkg: 15.3,
        color: "Green",
        prevo: "trapinch",
        evos: ["flygon"],
        evoLevel: 35,
        eggGroups: ["Bug"],
        tier: "NFE"
    },
    flygon: {
        num: 330,
        species: "Flygon",
        types: ["Ground", "Dragon"],
        baseStats: {
            hp: 80,
            atk: 100,
            def: 80,
            spa: 80,
            spd: 80,
            spe: 100
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 2,
        weightkg: 82,
        color: "Green",
        prevo: "vibrava",
        evoLevel: 45,
        eggGroups: ["Bug"],
        tier: "New"
    },
    cacnea: {
        num: 331,
        species: "Cacnea",
        types: ["Grass"],
        baseStats: {
            hp: 50,
            atk: 85,
            def: 40,
            spa: 85,
            spd: 40,
            spe: 35
        },
        abilities: {
            "0": "Sand Veil",
            H: "Water Absorb"
        },
        heightm: 0.4,
        weightkg: 51.3,
        color: "Green",
        evos: ["cacturne"],
        eggGroups: ["Grass", "Human-Like"],
        tier: "Bank-LC"
    },
    cacturne: {
        num: 332,
        species: "Cacturne",
        types: ["Grass", "Dark"],
        baseStats: {
            hp: 70,
            atk: 115,
            def: 60,
            spa: 115,
            spd: 60,
            spe: 55
        },
        abilities: {
            "0": "Sand Veil",
            H: "Water Absorb"
        },
        heightm: 1.3,
        weightkg: 77.4,
        color: "Green",
        prevo: "cacnea",
        evoLevel: 32,
        eggGroups: ["Grass", "Human-Like"],
        tier: "Bank"
    },
    swablu: {
        num: 333,
        species: "Swablu",
        types: ["Normal", "Flying"],
        baseStats: {
            hp: 45,
            atk: 40,
            def: 60,
            spa: 40,
            spd: 75,
            spe: 50
        },
        abilities: {
            "0": "Natural Cure",
            H: "Cloud Nine"
        },
        heightm: 0.4,
        weightkg: 1.2,
        color: "Blue",
        evos: ["altaria"],
        eggGroups: ["Flying", "Dragon"],
        tier: "Bank-LC"
    },
    altaria: {
        num: 334,
        species: "Altaria",
        types: ["Dragon", "Flying"],
        baseStats: {
            hp: 75,
            atk: 70,
            def: 90,
            spa: 70,
            spd: 105,
            spe: 80
        },
        abilities: {
            "0": "Natural Cure",
            H: "Cloud Nine"
        },
        heightm: 1.1,
        weightkg: 20.6,
        color: "Blue",
        prevo: "swablu",
        evoLevel: 35,
        eggGroups: ["Flying", "Dragon"],
        otherFormes: ["altariamega"],
        tier: "Bank"
    },
    altariamega: {
        num: 334,
        species: "Altaria-Mega",
        baseSpecies: "Altaria",
        forme: "Mega",
        formeLetter: "M",
        types: ["Dragon", "Fairy"],
        baseStats: {
            hp: 75,
            atk: 110,
            def: 110,
            spa: 110,
            spd: 105,
            spe: 80
        },
        abilities: {
            "0": "Pixilate"
        },
        heightm: 1.5,
        weightkg: 20.6,
        color: "Blue",
        eggGroups: ["Flying", "Dragon"],
        tier: "Unreleased",
        requiredItem: "Altarianite"
    },
    zangoose: {
        num: 335,
        species: "Zangoose",
        types: ["Normal"],
        baseStats: {
            hp: 73,
            atk: 115,
            def: 60,
            spa: 60,
            spd: 60,
            spe: 90
        },
        abilities: {
            "0": "Immunity",
            H: "Toxic Boost"
        },
        heightm: 1.3,
        weightkg: 40.3,
        color: "White",
        eggGroups: ["Field"],
        tier: "Bank"
    },
    seviper: {
        num: 336,
        species: "Seviper",
        types: ["Poison"],
        baseStats: {
            hp: 73,
            atk: 100,
            def: 60,
            spa: 100,
            spd: 60,
            spe: 65
        },
        abilities: {
            "0": "Shed Skin",
            H: "Infiltrator"
        },
        heightm: 2.7,
        weightkg: 52.5,
        color: "Black",
        eggGroups: ["Field", "Dragon"],
        tier: "Bank"
    },
    lunatone: {
        num: 337,
        species: "Lunatone",
        types: ["Rock", "Psychic"],
        gender: "N",
        baseStats: {
            hp: 90,
            atk: 55,
            def: 65,
            spa: 95,
            spd: 85,
            spe: 70
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 1,
        weightkg: 168,
        color: "Yellow",
        eggGroups: ["Mineral"],
        tier: "Bank"
    },
    solrock: {
        num: 338,
        species: "Solrock",
        types: ["Rock", "Psychic"],
        gender: "N",
        baseStats: {
            hp: 90,
            atk: 95,
            def: 85,
            spa: 55,
            spd: 65,
            spe: 70
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 1.2,
        weightkg: 154,
        color: "Red",
        eggGroups: ["Mineral"],
        tier: "Bank"
    },
    barboach: {
        num: 339,
        species: "Barboach",
        types: ["Water", "Ground"],
        baseStats: {
            hp: 50,
            atk: 48,
            def: 43,
            spa: 46,
            spd: 41,
            spe: 60
        },
        abilities: {
            "0": "Oblivious",
            "1": "Anticipation",
            H: "Hydration"
        },
        heightm: 0.4,
        weightkg: 1.9,
        color: "Gray",
        evos: ["whiscash"],
        eggGroups: ["Water 2"],
        tier: "LC"
    },
    whiscash: {
        num: 340,
        species: "Whiscash",
        types: ["Water", "Ground"],
        baseStats: {
            hp: 110,
            atk: 78,
            def: 73,
            spa: 76,
            spd: 71,
            spe: 60
        },
        abilities: {
            "0": "Oblivious",
            "1": "Anticipation",
            H: "Hydration"
        },
        heightm: 0.9,
        weightkg: 23.6,
        color: "Blue",
        prevo: "barboach",
        evoLevel: 30,
        eggGroups: ["Water 2"],
        tier: "New"
    },
    corphish: {
        num: 341,
        species: "Corphish",
        types: ["Water"],
        baseStats: {
            hp: 43,
            atk: 80,
            def: 65,
            spa: 50,
            spd: 35,
            spe: 35
        },
        abilities: {
            "0": "Hyper Cutter",
            "1": "Shell Armor",
            H: "Adaptability"
        },
        heightm: 0.6,
        weightkg: 11.5,
        color: "Red",
        evos: ["crawdaunt"],
        eggGroups: ["Water 1", "Water 3"],
        tier: "Bank-LC"
    },
    crawdaunt: {
        num: 342,
        species: "Crawdaunt",
        types: ["Water", "Dark"],
        baseStats: {
            hp: 63,
            atk: 120,
            def: 85,
            spa: 90,
            spd: 55,
            spe: 55
        },
        abilities: {
            "0": "Hyper Cutter",
            "1": "Shell Armor",
            H: "Adaptability"
        },
        heightm: 1.1,
        weightkg: 32.8,
        color: "Red",
        prevo: "corphish",
        evoLevel: 30,
        eggGroups: ["Water 1", "Water 3"],
        tier: "Bank"
    },
    baltoy: {
        num: 343,
        species: "Baltoy",
        types: ["Ground", "Psychic"],
        gender: "N",
        baseStats: {
            hp: 40,
            atk: 40,
            def: 55,
            spa: 40,
            spd: 70,
            spe: 55
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 0.5,
        weightkg: 21.5,
        color: "Brown",
        evos: ["claydol"],
        eggGroups: ["Mineral"],
        tier: "Bank-LC"
    },
    claydol: {
        num: 344,
        species: "Claydol",
        types: ["Ground", "Psychic"],
        gender: "N",
        baseStats: {
            hp: 60,
            atk: 70,
            def: 105,
            spa: 70,
            spd: 120,
            spe: 75
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 1.5,
        weightkg: 108,
        color: "Black",
        prevo: "baltoy",
        evoLevel: 36,
        eggGroups: ["Mineral"],
        tier: "Bank"
    },
    lileep: {
        num: 345,
        species: "Lileep",
        types: ["Rock", "Grass"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 66,
            atk: 41,
            def: 77,
            spa: 61,
            spd: 87,
            spe: 23
        },
        abilities: {
            "0": "Suction Cups",
            H: "Storm Drain"
        },
        heightm: 1,
        weightkg: 23.8,
        color: "Purple",
        evos: ["cradily"],
        eggGroups: ["Water 3"],
        tier: "Bank-LC"
    },
    cradily: {
        num: 346,
        species: "Cradily",
        types: ["Rock", "Grass"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 86,
            atk: 81,
            def: 97,
            spa: 81,
            spd: 107,
            spe: 43
        },
        abilities: {
            "0": "Suction Cups",
            H: "Storm Drain"
        },
        heightm: 1.5,
        weightkg: 60.4,
        color: "Green",
        prevo: "lileep",
        evoLevel: 40,
        eggGroups: ["Water 3"],
        tier: "Bank"
    },
    anorith: {
        num: 347,
        species: "Anorith",
        types: ["Rock", "Bug"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 45,
            atk: 95,
            def: 50,
            spa: 40,
            spd: 50,
            spe: 75
        },
        abilities: {
            "0": "Battle Armor",
            H: "Swift Swim"
        },
        heightm: 0.7,
        weightkg: 12.5,
        color: "Gray",
        evos: ["armaldo"],
        eggGroups: ["Water 3"],
        tier: "Bank-LC"
    },
    armaldo: {
        num: 348,
        species: "Armaldo",
        types: ["Rock", "Bug"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 75,
            atk: 125,
            def: 100,
            spa: 70,
            spd: 80,
            spe: 45
        },
        abilities: {
            "0": "Battle Armor",
            H: "Swift Swim"
        },
        heightm: 1.5,
        weightkg: 68.2,
        color: "Gray",
        prevo: "anorith",
        evoLevel: 40,
        eggGroups: ["Water 3"],
        tier: "Bank"
    },
    feebas: {
        num: 349,
        species: "Feebas",
        types: ["Water"],
        baseStats: {
            hp: 20,
            atk: 15,
            def: 20,
            spa: 10,
            spd: 55,
            spe: 80
        },
        abilities: {
            "0": "Swift Swim",
            "1": "Oblivious",
            H: "Adaptability"
        },
        heightm: 0.6,
        weightkg: 7.4,
        color: "Brown",
        evos: ["milotic"],
        eggGroups: ["Water 1", "Dragon"],
        tier: "LC"
    },
    milotic: {
        num: 350,
        species: "Milotic",
        types: ["Water"],
        baseStats: {
            hp: 95,
            atk: 60,
            def: 79,
            spa: 100,
            spd: 125,
            spe: 81
        },
        abilities: {
            "0": "Marvel Scale",
            "1": "Competitive",
            H: "Cute Charm"
        },
        heightm: 6.2,
        weightkg: 162,
        color: "Pink",
        prevo: "feebas",
        evoLevel: 1,
        eggGroups: ["Water 1", "Dragon"],
        tier: "New"
    },
    castform: {
        num: 351,
        species: "Castform",
        types: ["Normal"],
        baseStats: {
            hp: 70,
            atk: 70,
            def: 70,
            spa: 70,
            spd: 70,
            spe: 70
        },
        abilities: {
            "0": "Forecast"
        },
        heightm: 0.3,
        weightkg: 0.8,
        color: "White",
        eggGroups: ["Fairy", "Amorphous"],
        otherFormes: ["castformsunny", "castformrainy", "castformsnowy"],
        tier: "New"
    },
    castformsunny: {
        num: 351,
        species: "Castform-Sunny",
        baseSpecies: "Castform",
        forme: "Sunny",
        formeLetter: "S",
        types: ["Fire"],
        baseStats: {
            hp: 70,
            atk: 70,
            def: 70,
            spa: 70,
            spd: 70,
            spe: 70
        },
        abilities: {
            "0": "Forecast"
        },
        heightm: 0.3,
        weightkg: 0.8,
        color: "White",
        eggGroups: ["Fairy", "Amorphous"]
    },
    castformrainy: {
        num: 351,
        species: "Castform-Rainy",
        baseSpecies: "Castform",
        forme: "Rainy",
        formeLetter: "R",
        types: ["Water"],
        baseStats: {
            hp: 70,
            atk: 70,
            def: 70,
            spa: 70,
            spd: 70,
            spe: 70
        },
        abilities: {
            "0": "Forecast"
        },
        heightm: 0.3,
        weightkg: 0.8,
        color: "White",
        eggGroups: ["Fairy", "Amorphous"]
    },
    castformsnowy: {
        num: 351,
        species: "Castform-Snowy",
        baseSpecies: "Castform",
        forme: "Snowy",
        formeLetter: "S",
        types: ["Ice"],
        baseStats: {
            hp: 70,
            atk: 70,
            def: 70,
            spa: 70,
            spd: 70,
            spe: 70
        },
        abilities: {
            "0": "Forecast"
        },
        heightm: 0.3,
        weightkg: 0.8,
        color: "White",
        eggGroups: ["Fairy", "Amorphous"]
    },
    kecleon: {
        num: 352,
        species: "Kecleon",
        types: ["Normal"],
        baseStats: {
            hp: 60,
            atk: 90,
            def: 70,
            spa: 60,
            spd: 120,
            spe: 40
        },
        abilities: {
            "0": "Color Change",
            H: "Protean"
        },
        heightm: 1,
        weightkg: 22,
        color: "Green",
        eggGroups: ["Field"],
        tier: "Bank"
    },
    shuppet: {
        num: 353,
        species: "Shuppet",
        types: ["Ghost"],
        baseStats: {
            hp: 44,
            atk: 75,
            def: 35,
            spa: 63,
            spd: 33,
            spe: 45
        },
        abilities: {
            "0": "Insomnia",
            "1": "Frisk",
            H: "Cursed Body"
        },
        heightm: 0.6,
        weightkg: 2.3,
        color: "Black",
        evos: ["banette"],
        eggGroups: ["Amorphous"],
        tier: "Bank-LC"
    },
    banette: {
        num: 354,
        species: "Banette",
        types: ["Ghost"],
        baseStats: {
            hp: 64,
            atk: 115,
            def: 65,
            spa: 83,
            spd: 63,
            spe: 65
        },
        abilities: {
            "0": "Insomnia",
            "1": "Frisk",
            H: "Cursed Body"
        },
        heightm: 1.1,
        weightkg: 12.5,
        color: "Black",
        prevo: "shuppet",
        evoLevel: 37,
        eggGroups: ["Amorphous"],
        otherFormes: ["banettemega"],
        tier: "Bank"
    },
    banettemega: {
        num: 354,
        species: "Banette-Mega",
        baseSpecies: "Banette",
        forme: "Mega",
        formeLetter: "M",
        types: ["Ghost"],
        baseStats: {
            hp: 64,
            atk: 165,
            def: 75,
            spa: 93,
            spd: 83,
            spe: 75
        },
        abilities: {
            "0": "Prankster"
        },
        heightm: 1.2,
        weightkg: 13,
        color: "Black",
        eggGroups: ["Amorphous"],
        tier: "Unreleased",
        requiredItem: "Banettite"
    },
    duskull: {
        num: 355,
        species: "Duskull",
        types: ["Ghost"],
        baseStats: {
            hp: 20,
            atk: 40,
            def: 90,
            spa: 30,
            spd: 90,
            spe: 25
        },
        abilities: {
            "0": "Levitate",
            H: "Frisk"
        },
        heightm: 0.8,
        weightkg: 15,
        color: "Black",
        evos: ["dusclops"],
        eggGroups: ["Amorphous"],
        tier: "Bank-LC"
    },
    dusclops: {
        num: 356,
        species: "Dusclops",
        types: ["Ghost"],
        baseStats: {
            hp: 40,
            atk: 70,
            def: 130,
            spa: 60,
            spd: 130,
            spe: 25
        },
        abilities: {
            "0": "Pressure",
            H: "Frisk"
        },
        heightm: 1.6,
        weightkg: 30.6,
        color: "Black",
        prevo: "duskull",
        evos: ["dusknoir"],
        evoLevel: 37,
        eggGroups: ["Amorphous"],
        tier: "Bank-NFE"
    },
    tropius: {
        num: 357,
        species: "Tropius",
        types: ["Grass", "Flying"],
        baseStats: {
            hp: 99,
            atk: 68,
            def: 83,
            spa: 72,
            spd: 87,
            spe: 51
        },
        abilities: {
            "0": "Chlorophyll",
            "1": "Solar Power",
            H: "Harvest"
        },
        heightm: 2,
        weightkg: 100,
        color: "Green",
        eggGroups: ["Monster", "Grass"],
        tier: "Bank"
    },
    chimecho: {
        num: 358,
        species: "Chimecho",
        types: ["Psychic"],
        baseStats: {
            hp: 75,
            atk: 50,
            def: 80,
            spa: 95,
            spd: 90,
            spe: 65
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 0.6,
        weightkg: 1,
        color: "Blue",
        prevo: "chingling",
        evoLevel: 1,
        eggGroups: ["Amorphous"],
        tier: "Bank"
    },
    absol: {
        num: 359,
        species: "Absol",
        types: ["Dark"],
        baseStats: {
            hp: 65,
            atk: 130,
            def: 60,
            spa: 75,
            spd: 60,
            spe: 75
        },
        abilities: {
            "0": "Pressure",
            "1": "Super Luck",
            H: "Justified"
        },
        heightm: 1.2,
        weightkg: 47,
        color: "White",
        eggGroups: ["Field"],
        otherFormes: ["absolmega"],
        tier: "New"
    },
    absolmega: {
        num: 359,
        species: "Absol-Mega",
        baseSpecies: "Absol",
        forme: "Mega",
        formeLetter: "M",
        types: ["Dark"],
        baseStats: {
            hp: 65,
            atk: 150,
            def: 60,
            spa: 115,
            spd: 60,
            spe: 115
        },
        abilities: {
            "0": "Magic Bounce"
        },
        heightm: 1.2,
        weightkg: 49,
        color: "White",
        eggGroups: ["Field"],
        tier: "New",
        requiredItem: "Absolite"
    },
    wynaut: {
        num: 360,
        species: "Wynaut",
        types: ["Psychic"],
        baseStats: {
            hp: 95,
            atk: 23,
            def: 48,
            spa: 23,
            spd: 48,
            spe: 23
        },
        abilities: {
            "0": "Shadow Tag",
            H: "Telepathy"
        },
        heightm: 0.6,
        weightkg: 14,
        color: "Blue",
        evos: ["wobbuffet"],
        eggGroups: ["Undiscovered"],
        tier: "Bank-LC"
    },
    snorunt: {
        num: 361,
        species: "Snorunt",
        types: ["Ice"],
        baseStats: {
            hp: 50,
            atk: 50,
            def: 50,
            spa: 50,
            spd: 50,
            spe: 50
        },
        abilities: {
            "0": "Inner Focus",
            "1": "Ice Body",
            H: "Moody"
        },
        heightm: 0.7,
        weightkg: 16.8,
        color: "Gray",
        evos: ["glalie", "froslass"],
        eggGroups: ["Fairy", "Mineral"],
        tier: "LC"
    },
    glalie: {
        num: 362,
        species: "Glalie",
        types: ["Ice"],
        baseStats: {
            hp: 80,
            atk: 80,
            def: 80,
            spa: 80,
            spd: 80,
            spe: 80
        },
        abilities: {
            "0": "Inner Focus",
            "1": "Ice Body",
            H: "Moody"
        },
        heightm: 1.5,
        weightkg: 256.5,
        color: "Gray",
        prevo: "snorunt",
        evoLevel: 42,
        eggGroups: ["Fairy", "Mineral"],
        otherFormes: ["glaliemega"],
        tier: "New"
    },
    glaliemega: {
        num: 362,
        species: "Glalie-Mega",
        baseSpecies: "Glalie",
        forme: "Mega",
        formeLetter: "M",
        types: ["Ice"],
        baseStats: {
            hp: 80,
            atk: 120,
            def: 80,
            spa: 120,
            spd: 80,
            spe: 100
        },
        abilities: {
            "0": "Refrigerate"
        },
        heightm: 2.1,
        weightkg: 350.2,
        color: "Gray",
        eggGroups: ["Fairy", "Mineral"],
        tier: "New",
        requiredItem: "Glalitite"
    },
    spheal: {
        num: 363,
        species: "Spheal",
        types: ["Ice", "Water"],
        baseStats: {
            hp: 70,
            atk: 40,
            def: 50,
            spa: 55,
            spd: 50,
            spe: 25
        },
        abilities: {
            "0": "Thick Fat",
            "1": "Ice Body",
            H: "Oblivious"
        },
        heightm: 0.8,
        weightkg: 39.5,
        color: "Blue",
        evos: ["sealeo"],
        eggGroups: ["Water 1", "Field"],
        tier: "LC"
    },
    sealeo: {
        num: 364,
        species: "Sealeo",
        types: ["Ice", "Water"],
        baseStats: {
            hp: 90,
            atk: 60,
            def: 70,
            spa: 75,
            spd: 70,
            spe: 45
        },
        abilities: {
            "0": "Thick Fat",
            "1": "Ice Body",
            H: "Oblivious"
        },
        heightm: 1.1,
        weightkg: 87.6,
        color: "Blue",
        prevo: "spheal",
        evos: ["walrein"],
        evoLevel: 32,
        eggGroups: ["Water 1", "Field"],
        tier: "NFE"
    },
    walrein: {
        num: 365,
        species: "Walrein",
        types: ["Ice", "Water"],
        baseStats: {
            hp: 110,
            atk: 80,
            def: 90,
            spa: 95,
            spd: 90,
            spe: 65
        },
        abilities: {
            "0": "Thick Fat",
            "1": "Ice Body",
            H: "Oblivious"
        },
        heightm: 1.4,
        weightkg: 150.6,
        color: "Blue",
        prevo: "sealeo",
        evoLevel: 44,
        eggGroups: ["Water 1", "Field"],
        tier: "New"
    },
    clamperl: {
        num: 366,
        species: "Clamperl",
        types: ["Water"],
        baseStats: {
            hp: 35,
            atk: 64,
            def: 85,
            spa: 74,
            spd: 55,
            spe: 32
        },
        abilities: {
            "0": "Shell Armor",
            H: "Rattled"
        },
        heightm: 0.4,
        weightkg: 52.5,
        color: "Blue",
        evos: ["huntail", "gorebyss"],
        eggGroups: ["Water 1"],
        tier: "Bank-LC"
    },
    huntail: {
        num: 367,
        species: "Huntail",
        types: ["Water"],
        baseStats: {
            hp: 55,
            atk: 104,
            def: 105,
            spa: 94,
            spd: 75,
            spe: 52
        },
        abilities: {
            "0": "Swift Swim",
            H: "Water Veil"
        },
        heightm: 1.7,
        weightkg: 27,
        color: "Blue",
        prevo: "clamperl",
        evoLevel: 1,
        eggGroups: ["Water 1"],
        tier: "Bank"
    },
    gorebyss: {
        num: 368,
        species: "Gorebyss",
        types: ["Water"],
        baseStats: {
            hp: 55,
            atk: 84,
            def: 105,
            spa: 114,
            spd: 75,
            spe: 52
        },
        abilities: {
            "0": "Swift Swim",
            H: "Hydration"
        },
        heightm: 1.8,
        weightkg: 22.6,
        color: "Pink",
        prevo: "clamperl",
        evoLevel: 1,
        eggGroups: ["Water 1"],
        tier: "Bank"
    },
    relicanth: {
        num: 369,
        species: "Relicanth",
        types: ["Water", "Rock"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 100,
            atk: 90,
            def: 130,
            spa: 45,
            spd: 65,
            spe: 55
        },
        abilities: {
            "0": "Swift Swim",
            "1": "Rock Head",
            H: "Sturdy"
        },
        heightm: 1,
        weightkg: 23.4,
        color: "Gray",
        eggGroups: ["Water 1", "Water 2"],
        tier: "New"
    },
    luvdisc: {
        num: 370,
        species: "Luvdisc",
        types: ["Water"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 43,
            atk: 30,
            def: 55,
            spa: 40,
            spd: 65,
            spe: 97
        },
        abilities: {
            "0": "Swift Swim",
            H: "Hydration"
        },
        heightm: 0.6,
        weightkg: 8.7,
        color: "Pink",
        eggGroups: ["Water 2"],
        tier: "New"
    },
    bagon: {
        num: 371,
        species: "Bagon",
        types: ["Dragon"],
        baseStats: {
            hp: 45,
            atk: 75,
            def: 60,
            spa: 40,
            spd: 30,
            spe: 50
        },
        abilities: {
            "0": "Rock Head",
            H: "Sheer Force"
        },
        heightm: 0.6,
        weightkg: 42.1,
        color: "Blue",
        evos: ["shelgon"],
        eggGroups: ["Dragon"],
        tier: "LC"
    },
    shelgon: {
        num: 372,
        species: "Shelgon",
        types: ["Dragon"],
        baseStats: {
            hp: 65,
            atk: 95,
            def: 100,
            spa: 60,
            spd: 50,
            spe: 50
        },
        abilities: {
            "0": "Rock Head",
            H: "Overcoat"
        },
        heightm: 1.1,
        weightkg: 110.5,
        color: "White",
        prevo: "bagon",
        evos: ["salamence"],
        evoLevel: 30,
        eggGroups: ["Dragon"],
        tier: "NFE"
    },
    salamence: {
        num: 373,
        species: "Salamence",
        types: ["Dragon", "Flying"],
        baseStats: {
            hp: 95,
            atk: 135,
            def: 80,
            spa: 110,
            spd: 80,
            spe: 100
        },
        abilities: {
            "0": "Intimidate",
            H: "Moxie"
        },
        heightm: 1.5,
        weightkg: 102.6,
        color: "Blue",
        prevo: "shelgon",
        evoLevel: 50,
        eggGroups: ["Dragon"],
        otherFormes: ["salamencemega"],
        tier: "New"
    },
    salamencemega: {
        num: 373,
        species: "Salamence-Mega",
        baseSpecies: "Salamence",
        forme: "Mega",
        formeLetter: "M",
        types: ["Dragon", "Flying"],
        baseStats: {
            hp: 95,
            atk: 145,
            def: 130,
            spa: 120,
            spd: 90,
            spe: 120
        },
        abilities: {
            "0": "Aerilate"
        },
        heightm: 1.8,
        weightkg: 112.6,
        color: "Blue",
        eggGroups: ["Dragon"],
        tier: "Uber",
        requiredItem: "Salamencite"
    },
    beldum: {
        num: 374,
        species: "Beldum",
        types: ["Steel", "Psychic"],
        gender: "N",
        baseStats: {
            hp: 40,
            atk: 55,
            def: 80,
            spa: 35,
            spd: 60,
            spe: 30
        },
        abilities: {
            "0": "Clear Body",
            H: "Light Metal"
        },
        heightm: 0.6,
        weightkg: 95.2,
        color: "Blue",
        evos: ["metang"],
        eggGroups: ["Mineral"],
        tier: "LC"
    },
    metang: {
        num: 375,
        species: "Metang",
        types: ["Steel", "Psychic"],
        gender: "N",
        baseStats: {
            hp: 60,
            atk: 75,
            def: 100,
            spa: 55,
            spd: 80,
            spe: 50
        },
        abilities: {
            "0": "Clear Body",
            H: "Light Metal"
        },
        heightm: 1.2,
        weightkg: 202.5,
        color: "Blue",
        prevo: "beldum",
        evos: ["metagross"],
        evoLevel: 20,
        eggGroups: ["Mineral"],
        tier: "New"
    },
    metagross: {
        num: 376,
        species: "Metagross",
        types: ["Steel", "Psychic"],
        gender: "N",
        baseStats: {
            hp: 80,
            atk: 135,
            def: 130,
            spa: 95,
            spd: 90,
            spe: 70
        },
        abilities: {
            "0": "Clear Body",
            H: "Light Metal"
        },
        heightm: 1.6,
        weightkg: 550,
        color: "Blue",
        prevo: "metang",
        evoLevel: 45,
        eggGroups: ["Mineral"],
        otherFormes: ["metagrossmega"],
        tier: "New"
    },
    metagrossmega: {
        num: 376,
        species: "Metagross-Mega",
        baseSpecies: "Metagross",
        forme: "Mega",
        formeLetter: "M",
        types: ["Steel", "Psychic"],
        gender: "N",
        baseStats: {
            hp: 80,
            atk: 145,
            def: 150,
            spa: 105,
            spd: 110,
            spe: 110
        },
        abilities: {
            "0": "Tough Claws"
        },
        heightm: 2.5,
        weightkg: 942.9,
        color: "Blue",
        eggGroups: ["Mineral"],
        tier: "New",
        requiredItem: "Metagrossite"
    },
    regirock: {
        num: 377,
        species: "Regirock",
        types: ["Rock"],
        gender: "N",
        baseStats: {
            hp: 80,
            atk: 100,
            def: 200,
            spa: 50,
            spd: 100,
            spe: 50
        },
        abilities: {
            "0": "Clear Body",
            H: "Sturdy"
        },
        heightm: 1.7,
        weightkg: 230,
        color: "Brown",
        eggGroups: ["Undiscovered"],
        tier: "Bank"
    },
    regice: {
        num: 378,
        species: "Regice",
        types: ["Ice"],
        gender: "N",
        baseStats: {
            hp: 80,
            atk: 50,
            def: 100,
            spa: 100,
            spd: 200,
            spe: 50
        },
        abilities: {
            "0": "Clear Body",
            H: "Ice Body"
        },
        heightm: 1.8,
        weightkg: 175,
        color: "Blue",
        eggGroups: ["Undiscovered"],
        tier: "Bank"
    },
    registeel: {
        num: 379,
        species: "Registeel",
        types: ["Steel"],
        gender: "N",
        baseStats: {
            hp: 80,
            atk: 75,
            def: 150,
            spa: 75,
            spd: 150,
            spe: 50
        },
        abilities: {
            "0": "Clear Body",
            H: "Light Metal"
        },
        heightm: 1.9,
        weightkg: 205,
        color: "Gray",
        eggGroups: ["Undiscovered"],
        tier: "Bank"
    },
    latias: {
        num: 380,
        species: "Latias",
        types: ["Dragon", "Psychic"],
        gender: "F",
        baseStats: {
            hp: 80,
            atk: 80,
            def: 90,
            spa: 110,
            spd: 130,
            spe: 110
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 1.4,
        weightkg: 40,
        color: "Red",
        eggGroups: ["Undiscovered"],
        otherFormes: ["latiasmega"],
        tier: "Bank"
    },
    latiasmega: {
        num: 380,
        species: "Latias-Mega",
        baseSpecies: "Latias",
        forme: "Mega",
        formeLetter: "M",
        types: ["Dragon", "Psychic"],
        gender: "F",
        baseStats: {
            hp: 80,
            atk: 100,
            def: 120,
            spa: 140,
            spd: 150,
            spe: 110
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 1.8,
        weightkg: 52,
        color: "Red",
        eggGroups: ["Undiscovered"],
        tier: "Unreleased",
        requiredItem: "Latiasite"
    },
    latios: {
        num: 381,
        species: "Latios",
        types: ["Dragon", "Psychic"],
        gender: "M",
        baseStats: {
            hp: 80,
            atk: 90,
            def: 80,
            spa: 130,
            spd: 110,
            spe: 110
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 2,
        weightkg: 60,
        color: "Blue",
        eggGroups: ["Undiscovered"],
        otherFormes: ["latiosmega"],
        tier: "Bank"
    },
    latiosmega: {
        num: 381,
        species: "Latios-Mega",
        baseSpecies: "Latios",
        forme: "Mega",
        formeLetter: "M",
        types: ["Dragon", "Psychic"],
        gender: "M",
        baseStats: {
            hp: 80,
            atk: 130,
            def: 100,
            spa: 160,
            spd: 120,
            spe: 110
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 2.3,
        weightkg: 70,
        color: "Blue",
        eggGroups: ["Undiscovered"],
        tier: "Unreleased",
        requiredItem: "Latiosite"
    },
    kyogre: {
        num: 382,
        species: "Kyogre",
        types: ["Water"],
        gender: "N",
        baseStats: {
            hp: 100,
            atk: 100,
            def: 90,
            spa: 150,
            spd: 140,
            spe: 90
        },
        abilities: {
            "0": "Drizzle"
        },
        heightm: 4.5,
        weightkg: 352,
        color: "Blue",
        eggGroups: ["Undiscovered"],
        otherFormes: ["kyogreprimal"],
        tier: "Bank-Uber"
    },
    kyogreprimal: {
        num: 382,
        species: "Kyogre-Primal",
        baseSpecies: "Kyogre",
        forme: "Primal",
        formeLetter: "P",
        types: ["Water"],
        gender: "N",
        baseStats: {
            hp: 100,
            atk: 150,
            def: 90,
            spa: 180,
            spd: 160,
            spe: 90
        },
        abilities: {
            "0": "Primordial Sea"
        },
        heightm: 9.8,
        weightkg: 430,
        color: "Blue",
        eggGroups: ["Undiscovered"],
        requiredItem: "Blue Orb"
    },
    groudon: {
        num: 383,
        species: "Groudon",
        types: ["Ground"],
        gender: "N",
        baseStats: {
            hp: 100,
            atk: 150,
            def: 140,
            spa: 100,
            spd: 90,
            spe: 90
        },
        abilities: {
            "0": "Drought"
        },
        heightm: 3.5,
        weightkg: 950,
        color: "Red",
        eggGroups: ["Undiscovered"],
        otherFormes: ["groudonprimal"],
        tier: "Bank-Uber"
    },
    groudonprimal: {
        num: 383,
        species: "Groudon-Primal",
        baseSpecies: "Groudon",
        forme: "Primal",
        formeLetter: "P",
        types: ["Ground", "Fire"],
        gender: "N",
        baseStats: {
            hp: 100,
            atk: 180,
            def: 160,
            spa: 150,
            spd: 90,
            spe: 90
        },
        abilities: {
            "0": "Desolate Land"
        },
        heightm: 5,
        weightkg: 999.7,
        color: "Red",
        eggGroups: ["Undiscovered"],
        requiredItem: "Red Orb"
    },
    rayquaza: {
        num: 384,
        species: "Rayquaza",
        types: ["Dragon", "Flying"],
        gender: "N",
        baseStats: {
            hp: 105,
            atk: 150,
            def: 90,
            spa: 150,
            spd: 90,
            spe: 95
        },
        abilities: {
            "0": "Air Lock"
        },
        heightm: 7,
        weightkg: 206.5,
        color: "Green",
        eggGroups: ["Undiscovered"],
        otherFormes: ["rayquazamega"],
        tier: "Bank-Uber"
    },
    rayquazamega: {
        num: 384,
        species: "Rayquaza-Mega",
        baseSpecies: "Rayquaza",
        forme: "Mega",
        formeLetter: "M",
        types: ["Dragon", "Flying"],
        gender: "N",
        baseStats: {
            hp: 105,
            atk: 180,
            def: 100,
            spa: 180,
            spd: 100,
            spe: 115
        },
        abilities: {
            "0": "Delta Stream"
        },
        heightm: 10.8,
        weightkg: 392,
        color: "Green",
        eggGroups: ["Undiscovered"],
        tier: "AG"
    },
    jirachi: {
        num: 385,
        species: "Jirachi",
        types: ["Steel", "Psychic"],
        gender: "N",
        baseStats: {
            hp: 100,
            atk: 100,
            def: 100,
            spa: 100,
            spd: 100,
            spe: 100
        },
        abilities: {
            "0": "Serene Grace"
        },
        heightm: 0.3,
        weightkg: 1.1,
        color: "Yellow",
        eggGroups: ["Undiscovered"],
        tier: "Bank"
    },
    deoxys: {
        num: 386,
        species: "Deoxys",
        baseForme: "Normal",
        types: ["Psychic"],
        gender: "N",
        baseStats: {
            hp: 50,
            atk: 150,
            def: 50,
            spa: 150,
            spd: 50,
            spe: 150
        },
        abilities: {
            "0": "Pressure"
        },
        heightm: 1.7,
        weightkg: 60.8,
        color: "Red",
        eggGroups: ["Undiscovered"],
        otherFormes: ["deoxysattack", "deoxysdefense", "deoxysspeed"],
        tier: "Bank-Uber"
    },
    deoxysattack: {
        num: 386,
        species: "Deoxys-Attack",
        baseSpecies: "Deoxys",
        forme: "Attack",
        formeLetter: "A",
        types: ["Psychic"],
        gender: "N",
        baseStats: {
            hp: 50,
            atk: 180,
            def: 20,
            spa: 180,
            spd: 20,
            spe: 150
        },
        abilities: {
            "0": "Pressure"
        },
        heightm: 1.7,
        weightkg: 60.8,
        color: "Red",
        eggGroups: ["Undiscovered"],
        tier: "Bank-Uber"
    },
    deoxysdefense: {
        num: 386,
        species: "Deoxys-Defense",
        baseSpecies: "Deoxys",
        forme: "Defense",
        formeLetter: "D",
        types: ["Psychic"],
        gender: "N",
        baseStats: {
            hp: 50,
            atk: 70,
            def: 160,
            spa: 70,
            spd: 160,
            spe: 90
        },
        abilities: {
            "0": "Pressure"
        },
        heightm: 1.7,
        weightkg: 60.8,
        color: "Red",
        eggGroups: ["Undiscovered"],
        tier: "Bank-Uber"
    },
    deoxysspeed: {
        num: 386,
        species: "Deoxys-Speed",
        baseSpecies: "Deoxys",
        forme: "Speed",
        formeLetter: "S",
        types: ["Psychic"],
        gender: "N",
        baseStats: {
            hp: 50,
            atk: 95,
            def: 90,
            spa: 95,
            spd: 90,
            spe: 180
        },
        abilities: {
            "0": "Pressure"
        },
        heightm: 1.7,
        weightkg: 60.8,
        color: "Red",
        eggGroups: ["Undiscovered"],
        tier: "Bank-Uber"
    },
    turtwig: {
        num: 387,
        species: "Turtwig",
        types: ["Grass"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 55,
            atk: 68,
            def: 64,
            spa: 45,
            spd: 55,
            spe: 31
        },
        abilities: {
            "0": "Overgrow",
            H: "Shell Armor"
        },
        heightm: 0.4,
        weightkg: 10.2,
        color: "Green",
        evos: ["grotle"],
        eggGroups: ["Monster", "Grass"],
        tier: "Bank-LC"
    },
    grotle: {
        num: 388,
        species: "Grotle",
        types: ["Grass"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 75,
            atk: 89,
            def: 85,
            spa: 55,
            spd: 65,
            spe: 36
        },
        abilities: {
            "0": "Overgrow",
            H: "Shell Armor"
        },
        heightm: 1.1,
        weightkg: 97,
        color: "Green",
        prevo: "turtwig",
        evos: ["torterra"],
        evoLevel: 18,
        eggGroups: ["Monster", "Grass"],
        tier: "Bank-NFE"
    },
    torterra: {
        num: 389,
        species: "Torterra",
        types: ["Grass", "Ground"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 95,
            atk: 109,
            def: 105,
            spa: 75,
            spd: 85,
            spe: 56
        },
        abilities: {
            "0": "Overgrow",
            H: "Shell Armor"
        },
        heightm: 2.2,
        weightkg: 310,
        color: "Green",
        prevo: "grotle",
        evoLevel: 32,
        eggGroups: ["Monster", "Grass"],
        tier: "Bank"
    },
    chimchar: {
        num: 390,
        species: "Chimchar",
        types: ["Fire"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 44,
            atk: 58,
            def: 44,
            spa: 58,
            spd: 44,
            spe: 61
        },
        abilities: {
            "0": "Blaze",
            H: "Iron Fist"
        },
        heightm: 0.5,
        weightkg: 6.2,
        color: "Brown",
        evos: ["monferno"],
        eggGroups: ["Field", "Human-Like"],
        tier: "Bank-LC"
    },
    monferno: {
        num: 391,
        species: "Monferno",
        types: ["Fire", "Fighting"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 64,
            atk: 78,
            def: 52,
            spa: 78,
            spd: 52,
            spe: 81
        },
        abilities: {
            "0": "Blaze",
            H: "Iron Fist"
        },
        heightm: 0.9,
        weightkg: 22,
        color: "Brown",
        prevo: "chimchar",
        evos: ["infernape"],
        evoLevel: 14,
        eggGroups: ["Field", "Human-Like"],
        tier: "Bank"
    },
    infernape: {
        num: 392,
        species: "Infernape",
        types: ["Fire", "Fighting"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 76,
            atk: 104,
            def: 71,
            spa: 104,
            spd: 71,
            spe: 108
        },
        abilities: {
            "0": "Blaze",
            H: "Iron Fist"
        },
        heightm: 1.2,
        weightkg: 55,
        color: "Brown",
        prevo: "monferno",
        evoLevel: 36,
        eggGroups: ["Field", "Human-Like"],
        tier: "Bank"
    },
    piplup: {
        num: 393,
        species: "Piplup",
        types: ["Water"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 53,
            atk: 51,
            def: 53,
            spa: 61,
            spd: 56,
            spe: 40
        },
        abilities: {
            "0": "Torrent",
            H: "Defiant"
        },
        heightm: 0.4,
        weightkg: 5.2,
        color: "Blue",
        evos: ["prinplup"],
        eggGroups: ["Water 1", "Field"],
        tier: "Bank-LC"
    },
    prinplup: {
        num: 394,
        species: "Prinplup",
        types: ["Water"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 64,
            atk: 66,
            def: 68,
            spa: 81,
            spd: 76,
            spe: 50
        },
        abilities: {
            "0": "Torrent",
            H: "Defiant"
        },
        heightm: 0.8,
        weightkg: 23,
        color: "Blue",
        prevo: "piplup",
        evos: ["empoleon"],
        evoLevel: 16,
        eggGroups: ["Water 1", "Field"],
        tier: "Bank"
    },
    empoleon: {
        num: 395,
        species: "Empoleon",
        types: ["Water", "Steel"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 84,
            atk: 86,
            def: 88,
            spa: 111,
            spd: 101,
            spe: 60
        },
        abilities: {
            "0": "Torrent",
            H: "Defiant"
        },
        heightm: 1.7,
        weightkg: 84.5,
        color: "Blue",
        prevo: "prinplup",
        evoLevel: 36,
        eggGroups: ["Water 1", "Field"],
        tier: "Bank"
    },
    starly: {
        num: 396,
        species: "Starly",
        types: ["Normal", "Flying"],
        baseStats: {
            hp: 40,
            atk: 55,
            def: 30,
            spa: 30,
            spd: 30,
            spe: 60
        },
        abilities: {
            "0": "Keen Eye",
            H: "Reckless"
        },
        heightm: 0.3,
        weightkg: 2,
        color: "Brown",
        evos: ["staravia"],
        eggGroups: ["Flying"],
        tier: "LC"
    },
    staravia: {
        num: 397,
        species: "Staravia",
        types: ["Normal", "Flying"],
        baseStats: {
            hp: 55,
            atk: 75,
            def: 50,
            spa: 40,
            spd: 40,
            spe: 80
        },
        abilities: {
            "0": "Intimidate",
            H: "Reckless"
        },
        heightm: 0.6,
        weightkg: 15.5,
        color: "Brown",
        prevo: "starly",
        evos: ["staraptor"],
        evoLevel: 14,
        eggGroups: ["Flying"],
        tier: "NFE"
    },
    staraptor: {
        num: 398,
        species: "Staraptor",
        types: ["Normal", "Flying"],
        baseStats: {
            hp: 85,
            atk: 120,
            def: 70,
            spa: 50,
            spd: 60,
            spe: 100
        },
        abilities: {
            "0": "Intimidate",
            H: "Reckless"
        },
        heightm: 1.2,
        weightkg: 24.9,
        color: "Brown",
        prevo: "staravia",
        evoLevel: 34,
        eggGroups: ["Flying"],
        tier: "New"
    },
    bidoof: {
        num: 399,
        species: "Bidoof",
        types: ["Normal"],
        baseStats: {
            hp: 59,
            atk: 45,
            def: 40,
            spa: 35,
            spd: 40,
            spe: 31
        },
        abilities: {
            "0": "Simple",
            "1": "Unaware",
            H: "Moody"
        },
        heightm: 0.5,
        weightkg: 20,
        color: "Brown",
        evos: ["bibarel"],
        eggGroups: ["Water 1", "Field"],
        tier: "Bank-LC"
    },
    bibarel: {
        num: 400,
        species: "Bibarel",
        types: ["Normal", "Water"],
        baseStats: {
            hp: 79,
            atk: 85,
            def: 60,
            spa: 55,
            spd: 60,
            spe: 71
        },
        abilities: {
            "0": "Simple",
            "1": "Unaware",
            H: "Moody"
        },
        heightm: 1,
        weightkg: 31.5,
        color: "Brown",
        prevo: "bidoof",
        evoLevel: 15,
        eggGroups: ["Water 1", "Field"],
        tier: "Bank"
    },
    kricketot: {
        num: 401,
        species: "Kricketot",
        types: ["Bug"],
        baseStats: {
            hp: 37,
            atk: 25,
            def: 41,
            spa: 25,
            spd: 41,
            spe: 25
        },
        abilities: {
            "0": "Shed Skin",
            H: "Run Away"
        },
        heightm: 0.3,
        weightkg: 2.2,
        color: "Red",
        evos: ["kricketune"],
        eggGroups: ["Bug"],
        tier: "Bank-LC"
    },
    kricketune: {
        num: 402,
        species: "Kricketune",
        types: ["Bug"],
        baseStats: {
            hp: 77,
            atk: 85,
            def: 51,
            spa: 55,
            spd: 51,
            spe: 65
        },
        abilities: {
            "0": "Swarm",
            H: "Technician"
        },
        heightm: 1,
        weightkg: 25.5,
        color: "Red",
        prevo: "kricketot",
        evoLevel: 10,
        eggGroups: ["Bug"],
        tier: "Bank"
    },
    shinx: {
        num: 403,
        species: "Shinx",
        types: ["Electric"],
        baseStats: {
            hp: 45,
            atk: 65,
            def: 34,
            spa: 40,
            spd: 34,
            spe: 45
        },
        abilities: {
            "0": "Rivalry",
            "1": "Intimidate",
            H: "Guts"
        },
        heightm: 0.5,
        weightkg: 9.5,
        color: "Blue",
        evos: ["luxio"],
        eggGroups: ["Field"],
        tier: "LC"
    },
    luxio: {
        num: 404,
        species: "Luxio",
        types: ["Electric"],
        baseStats: {
            hp: 60,
            atk: 85,
            def: 49,
            spa: 60,
            spd: 49,
            spe: 60
        },
        abilities: {
            "0": "Rivalry",
            "1": "Intimidate",
            H: "Guts"
        },
        heightm: 0.9,
        weightkg: 30.5,
        color: "Blue",
        prevo: "shinx",
        evos: ["luxray"],
        evoLevel: 15,
        eggGroups: ["Field"],
        tier: "NFE"
    },
    luxray: {
        num: 405,
        species: "Luxray",
        types: ["Electric"],
        baseStats: {
            hp: 80,
            atk: 120,
            def: 79,
            spa: 95,
            spd: 79,
            spe: 70
        },
        abilities: {
            "0": "Rivalry",
            "1": "Intimidate",
            H: "Guts"
        },
        heightm: 1.4,
        weightkg: 42,
        color: "Blue",
        prevo: "luxio",
        evoLevel: 30,
        eggGroups: ["Field"],
        tier: "New"
    },
    budew: {
        num: 406,
        species: "Budew",
        types: ["Grass", "Poison"],
        baseStats: {
            hp: 40,
            atk: 30,
            def: 35,
            spa: 50,
            spd: 70,
            spe: 55
        },
        abilities: {
            "0": "Natural Cure",
            "1": "Poison Point",
            H: "Leaf Guard"
        },
        heightm: 0.2,
        weightkg: 1.2,
        color: "Green",
        evos: ["roselia"],
        eggGroups: ["Undiscovered"],
        tier: "LC"
    },
    roserade: {
        num: 407,
        species: "Roserade",
        types: ["Grass", "Poison"],
        baseStats: {
            hp: 60,
            atk: 70,
            def: 65,
            spa: 125,
            spd: 105,
            spe: 90
        },
        abilities: {
            "0": "Natural Cure",
            "1": "Poison Point",
            H: "Technician"
        },
        heightm: 0.9,
        weightkg: 14.5,
        color: "Green",
        prevo: "roselia",
        evoLevel: 1,
        eggGroups: ["Fairy", "Grass"],
        tier: "New"
    },
    cranidos: {
        num: 408,
        species: "Cranidos",
        types: ["Rock"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 67,
            atk: 125,
            def: 40,
            spa: 30,
            spd: 30,
            spe: 58
        },
        abilities: {
            "0": "Mold Breaker",
            H: "Sheer Force"
        },
        heightm: 0.9,
        weightkg: 31.5,
        color: "Blue",
        evos: ["rampardos"],
        eggGroups: ["Monster"],
        tier: "LC"
    },
    rampardos: {
        num: 409,
        species: "Rampardos",
        types: ["Rock"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 97,
            atk: 165,
            def: 60,
            spa: 65,
            spd: 50,
            spe: 58
        },
        abilities: {
            "0": "Mold Breaker",
            H: "Sheer Force"
        },
        heightm: 1.6,
        weightkg: 102.5,
        color: "Blue",
        prevo: "cranidos",
        evoLevel: 30,
        eggGroups: ["Monster"],
        tier: "New"
    },
    shieldon: {
        num: 410,
        species: "Shieldon",
        types: ["Rock", "Steel"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 30,
            atk: 42,
            def: 118,
            spa: 42,
            spd: 88,
            spe: 30
        },
        abilities: {
            "0": "Sturdy",
            H: "Soundproof"
        },
        heightm: 0.5,
        weightkg: 57,
        color: "Gray",
        evos: ["bastiodon"],
        eggGroups: ["Monster"],
        tier: "LC"
    },
    bastiodon: {
        num: 411,
        species: "Bastiodon",
        types: ["Rock", "Steel"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 60,
            atk: 52,
            def: 168,
            spa: 47,
            spd: 138,
            spe: 30
        },
        abilities: {
            "0": "Sturdy",
            H: "Soundproof"
        },
        heightm: 1.3,
        weightkg: 149.5,
        color: "Gray",
        prevo: "shieldon",
        evoLevel: 30,
        eggGroups: ["Monster"],
        tier: "New"
    },
    burmy: {
        num: 412,
        species: "Burmy",
        baseForme: "Grass",
        types: ["Bug"],
        baseStats: {
            hp: 40,
            atk: 29,
            def: 45,
            spa: 29,
            spd: 45,
            spe: 36
        },
        abilities: {
            "0": "Shed Skin",
            H: "Overcoat"
        },
        heightm: 0.2,
        weightkg: 3.4,
        color: "Gray",
        evos: ["wormadam", "wormadamsandy", "wormadamtrash", "mothim"],
        eggGroups: ["Bug"],
        otherForms: ["burmysandy", "burmytrash"],
        tier: "Bank-LC"
    },
    wormadam: {
        num: 413,
        species: "Wormadam",
        baseForme: "Grass",
        types: ["Bug", "Grass"],
        gender: "F",
        baseStats: {
            hp: 60,
            atk: 59,
            def: 85,
            spa: 79,
            spd: 105,
            spe: 36
        },
        abilities: {
            "0": "Anticipation",
            H: "Overcoat"
        },
        heightm: 0.5,
        weightkg: 6.5,
        color: "Gray",
        prevo: "burmy",
        evoLevel: 20,
        eggGroups: ["Bug"],
        otherFormes: ["wormadamsandy", "wormadamtrash"],
        tier: "Bank"
    },
    wormadamsandy: {
        num: 413,
        species: "Wormadam-Sandy",
        baseSpecies: "Wormadam",
        forme: "Sandy",
        formeLetter: "G",
        types: ["Bug", "Ground"],
        gender: "F",
        baseStats: {
            hp: 60,
            atk: 79,
            def: 105,
            spa: 59,
            spd: 85,
            spe: 36
        },
        abilities: {
            "0": "Anticipation",
            H: "Overcoat"
        },
        heightm: 0.5,
        weightkg: 6.5,
        color: "Gray",
        prevo: "burmy",
        evoLevel: 20,
        eggGroups: ["Bug"],
        tier: "Bank"
    },
    wormadamtrash: {
        num: 413,
        species: "Wormadam-Trash",
        baseSpecies: "Wormadam",
        forme: "Trash",
        formeLetter: "S",
        types: ["Bug", "Steel"],
        gender: "F",
        baseStats: {
            hp: 60,
            atk: 69,
            def: 95,
            spa: 69,
            spd: 95,
            spe: 36
        },
        abilities: {
            "0": "Anticipation",
            H: "Overcoat"
        },
        heightm: 0.5,
        weightkg: 6.5,
        color: "Gray",
        prevo: "burmy",
        evoLevel: 20,
        eggGroups: ["Bug"],
        tier: "Bank"
    },
    mothim: {
        num: 414,
        species: "Mothim",
        types: ["Bug", "Flying"],
        gender: "M",
        baseStats: {
            hp: 70,
            atk: 94,
            def: 50,
            spa: 94,
            spd: 50,
            spe: 66
        },
        abilities: {
            "0": "Swarm",
            H: "Tinted Lens"
        },
        heightm: 0.9,
        weightkg: 23.3,
        color: "Yellow",
        prevo: "burmy",
        evoLevel: 20,
        eggGroups: ["Bug"],
        tier: "Bank"
    },
    combee: {
        num: 415,
        species: "Combee",
        types: ["Bug", "Flying"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 30,
            atk: 30,
            def: 42,
            spa: 30,
            spd: 42,
            spe: 70
        },
        abilities: {
            "0": "Honey Gather",
            H: "Hustle"
        },
        heightm: 0.3,
        weightkg: 5.5,
        color: "Yellow",
        evos: ["vespiquen"],
        eggGroups: ["Bug"],
        tier: "Bank-LC"
    },
    vespiquen: {
        num: 416,
        species: "Vespiquen",
        types: ["Bug", "Flying"],
        gender: "F",
        baseStats: {
            hp: 70,
            atk: 80,
            def: 102,
            spa: 80,
            spd: 102,
            spe: 40
        },
        abilities: {
            "0": "Pressure",
            H: "Unnerve"
        },
        heightm: 1.2,
        weightkg: 38.5,
        color: "Yellow",
        prevo: "combee",
        evoLevel: 21,
        eggGroups: ["Bug"],
        tier: "Bank"
    },
    pachirisu: {
        num: 417,
        species: "Pachirisu",
        types: ["Electric"],
        baseStats: {
            hp: 60,
            atk: 45,
            def: 70,
            spa: 45,
            spd: 90,
            spe: 95
        },
        abilities: {
            "0": "Run Away",
            "1": "Pickup",
            H: "Volt Absorb"
        },
        heightm: 0.4,
        weightkg: 3.9,
        color: "White",
        eggGroups: ["Field", "Fairy"],
        tier: "Bank"
    },
    buizel: {
        num: 418,
        species: "Buizel",
        types: ["Water"],
        baseStats: {
            hp: 55,
            atk: 65,
            def: 35,
            spa: 60,
            spd: 30,
            spe: 85
        },
        abilities: {
            "0": "Swift Swim",
            H: "Water Veil"
        },
        heightm: 0.7,
        weightkg: 29.5,
        color: "Brown",
        evos: ["floatzel"],
        eggGroups: ["Water 1", "Field"],
        tier: "Bank-LC"
    },
    floatzel: {
        num: 419,
        species: "Floatzel",
        types: ["Water"],
        baseStats: {
            hp: 85,
            atk: 105,
            def: 55,
            spa: 85,
            spd: 50,
            spe: 115
        },
        abilities: {
            "0": "Swift Swim",
            H: "Water Veil"
        },
        heightm: 1.1,
        weightkg: 33.5,
        color: "Brown",
        prevo: "buizel",
        evoLevel: 26,
        eggGroups: ["Water 1", "Field"],
        tier: "Bank"
    },
    cherubi: {
        num: 420,
        species: "Cherubi",
        types: ["Grass"],
        baseStats: {
            hp: 45,
            atk: 35,
            def: 45,
            spa: 62,
            spd: 53,
            spe: 35
        },
        abilities: {
            "0": "Chlorophyll"
        },
        heightm: 0.4,
        weightkg: 3.3,
        color: "Pink",
        evos: ["cherrim"],
        eggGroups: ["Fairy", "Grass"],
        tier: "Bank-LC"
    },
    cherrim: {
        num: 421,
        species: "Cherrim",
        baseForme: "Overcast",
        types: ["Grass"],
        baseStats: {
            hp: 70,
            atk: 60,
            def: 70,
            spa: 87,
            spd: 78,
            spe: 85
        },
        abilities: {
            "0": "Flower Gift"
        },
        heightm: 0.5,
        weightkg: 9.3,
        color: "Pink",
        prevo: "cherubi",
        evoLevel: 25,
        eggGroups: ["Fairy", "Grass"],
        otherFormes: ["cherrimsunshine"],
        tier: "Bank"
    },
    cherrimsunshine: {
        num: 421,
        species: "Cherrim-Sunshine",
        baseSpecies: "Cherrim",
        forme: "Sunshine",
        formeLetter: "S",
        types: ["Grass"],
        baseStats: {
            hp: 70,
            atk: 60,
            def: 70,
            spa: 87,
            spd: 78,
            spe: 85
        },
        abilities: {
            "0": "Flower Gift"
        },
        heightm: 0.5,
        weightkg: 9.3,
        color: "Pink",
        prevo: "cherubi",
        evoLevel: 25,
        eggGroups: ["Fairy", "Grass"]
    },
    shellos: {
        num: 422,
        species: "Shellos",
        baseForme: "West",
        types: ["Water"],
        baseStats: {
            hp: 76,
            atk: 48,
            def: 48,
            spa: 57,
            spd: 62,
            spe: 34
        },
        abilities: {
            "0": "Sticky Hold",
            "1": "Storm Drain",
            H: "Sand Force"
        },
        heightm: 0.3,
        weightkg: 6.3,
        color: "Purple",
        evos: ["gastrodon"],
        eggGroups: ["Water 1", "Amorphous"],
        otherForms: ["shelloseast"],
        tier: "LC"
    },
    gastrodon: {
        num: 423,
        species: "Gastrodon",
        baseForme: "West",
        types: ["Water", "Ground"],
        baseStats: {
            hp: 111,
            atk: 83,
            def: 68,
            spa: 92,
            spd: 82,
            spe: 39
        },
        abilities: {
            "0": "Sticky Hold",
            "1": "Storm Drain",
            H: "Sand Force"
        },
        heightm: 0.9,
        weightkg: 29.9,
        color: "Purple",
        prevo: "shellos",
        evoLevel: 30,
        eggGroups: ["Water 1", "Amorphous"],
        otherForms: ["gastrodoneast"],
        tier: "New"
    },
    ambipom: {
        num: 424,
        species: "Ambipom",
        types: ["Normal"],
        baseStats: {
            hp: 75,
            atk: 100,
            def: 66,
            spa: 60,
            spd: 66,
            spe: 115
        },
        abilities: {
            "0": "Technician",
            "1": "Pickup",
            H: "Skill Link"
        },
        heightm: 1.2,
        weightkg: 20.3,
        color: "Purple",
        prevo: "aipom",
        evoLevel: 2,
        evoMove: "Double Hit",
        eggGroups: ["Field"],
        tier: "Bank"
    },
    drifloon: {
        num: 425,
        species: "Drifloon",
        types: ["Ghost", "Flying"],
        baseStats: {
            hp: 90,
            atk: 50,
            def: 34,
            spa: 60,
            spd: 44,
            spe: 70
        },
        abilities: {
            "0": "Aftermath",
            "1": "Unburden",
            H: "Flare Boost"
        },
        heightm: 0.4,
        weightkg: 1.2,
        color: "Purple",
        evos: ["drifblim"],
        eggGroups: ["Amorphous"],
        tier: "LC Uber"
    },
    drifblim: {
        num: 426,
        species: "Drifblim",
        types: ["Ghost", "Flying"],
        baseStats: {
            hp: 150,
            atk: 80,
            def: 44,
            spa: 90,
            spd: 54,
            spe: 80
        },
        abilities: {
            "0": "Aftermath",
            "1": "Unburden",
            H: "Flare Boost"
        },
        heightm: 1.2,
        weightkg: 15,
        color: "Purple",
        prevo: "drifloon",
        evoLevel: 28,
        eggGroups: ["Amorphous"],
        tier: "New"
    },
    buneary: {
        num: 427,
        species: "Buneary",
        types: ["Normal"],
        baseStats: {
            hp: 55,
            atk: 66,
            def: 44,
            spa: 44,
            spd: 56,
            spe: 85
        },
        abilities: {
            "0": "Run Away",
            "1": "Klutz",
            H: "Limber"
        },
        heightm: 0.4,
        weightkg: 5.5,
        color: "Brown",
        evos: ["lopunny"],
        eggGroups: ["Field", "Human-Like"],
        tier: "Bank-LC"
    },
    lopunny: {
        num: 428,
        species: "Lopunny",
        types: ["Normal"],
        baseStats: {
            hp: 65,
            atk: 76,
            def: 84,
            spa: 54,
            spd: 96,
            spe: 105
        },
        abilities: {
            "0": "Cute Charm",
            "1": "Klutz",
            H: "Limber"
        },
        heightm: 1.2,
        weightkg: 33.3,
        color: "Brown",
        prevo: "buneary",
        evoLevel: 2,
        eggGroups: ["Field", "Human-Like"],
        otherFormes: ["lopunnymega"],
        tier: "Bank"
    },
    lopunnymega: {
        num: 428,
        species: "Lopunny-Mega",
        baseSpecies: "Lopunny",
        forme: "Mega",
        formeLetter: "M",
        types: ["Normal", "Fighting"],
        baseStats: {
            hp: 65,
            atk: 136,
            def: 94,
            spa: 54,
            spd: 96,
            spe: 135
        },
        abilities: {
            "0": "Scrappy"
        },
        heightm: 1.3,
        weightkg: 28.3,
        color: "Brown",
        eggGroups: ["Field", "Human-Like"],
        tier: "Unreleased",
        requiredItem: "Lopunnite"
    },
    mismagius: {
        num: 429,
        species: "Mismagius",
        types: ["Ghost"],
        baseStats: {
            hp: 60,
            atk: 60,
            def: 60,
            spa: 105,
            spd: 105,
            spe: 105
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 0.9,
        weightkg: 4.4,
        color: "Purple",
        prevo: "misdreavus",
        evoLevel: 1,
        eggGroups: ["Amorphous"],
        tier: "New"
    },
    honchkrow: {
        num: 430,
        species: "Honchkrow",
        types: ["Dark", "Flying"],
        baseStats: {
            hp: 100,
            atk: 125,
            def: 52,
            spa: 105,
            spd: 52,
            spe: 71
        },
        abilities: {
            "0": "Insomnia",
            "1": "Super Luck",
            H: "Moxie"
        },
        heightm: 0.9,
        weightkg: 27.3,
        color: "Black",
        prevo: "murkrow",
        evoLevel: 1,
        eggGroups: ["Flying"],
        tier: "New"
    },
    glameow: {
        num: 431,
        species: "Glameow",
        types: ["Normal"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 49,
            atk: 55,
            def: 42,
            spa: 42,
            spd: 37,
            spe: 85
        },
        abilities: {
            "0": "Limber",
            "1": "Own Tempo",
            H: "Keen Eye"
        },
        heightm: 0.5,
        weightkg: 3.9,
        color: "Gray",
        evos: ["purugly"],
        eggGroups: ["Field"],
        tier: "Bank-LC"
    },
    purugly: {
        num: 432,
        species: "Purugly",
        types: ["Normal"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 71,
            atk: 82,
            def: 64,
            spa: 64,
            spd: 59,
            spe: 112
        },
        abilities: {
            "0": "Thick Fat",
            "1": "Own Tempo",
            H: "Defiant"
        },
        heightm: 1,
        weightkg: 43.8,
        color: "Gray",
        prevo: "glameow",
        evoLevel: 38,
        eggGroups: ["Field"],
        tier: "Bank"
    },
    chingling: {
        num: 433,
        species: "Chingling",
        types: ["Psychic"],
        baseStats: {
            hp: 45,
            atk: 30,
            def: 50,
            spa: 65,
            spd: 50,
            spe: 45
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 0.2,
        weightkg: 0.6,
        color: "Yellow",
        evos: ["chimecho"],
        eggGroups: ["Undiscovered"],
        tier: "Bank-LC"
    },
    stunky: {
        num: 434,
        species: "Stunky",
        types: ["Poison", "Dark"],
        baseStats: {
            hp: 63,
            atk: 63,
            def: 47,
            spa: 41,
            spd: 41,
            spe: 74
        },
        abilities: {
            "0": "Stench",
            "1": "Aftermath",
            H: "Keen Eye"
        },
        heightm: 0.4,
        weightkg: 19.2,
        color: "Purple",
        evos: ["skuntank"],
        eggGroups: ["Field"],
        tier: "Bank-LC"
    },
    skuntank: {
        num: 435,
        species: "Skuntank",
        types: ["Poison", "Dark"],
        baseStats: {
            hp: 103,
            atk: 93,
            def: 67,
            spa: 71,
            spd: 61,
            spe: 84
        },
        abilities: {
            "0": "Stench",
            "1": "Aftermath",
            H: "Keen Eye"
        },
        heightm: 1,
        weightkg: 38,
        color: "Purple",
        prevo: "stunky",
        evoLevel: 34,
        eggGroups: ["Field"],
        tier: "Bank"
    },
    bronzor: {
        num: 436,
        species: "Bronzor",
        types: ["Steel", "Psychic"],
        gender: "N",
        baseStats: {
            hp: 57,
            atk: 24,
            def: 86,
            spa: 24,
            spd: 86,
            spe: 23
        },
        abilities: {
            "0": "Levitate",
            "1": "Heatproof",
            H: "Heavy Metal"
        },
        heightm: 0.5,
        weightkg: 60.5,
        color: "Green",
        evos: ["bronzong"],
        eggGroups: ["Mineral"],
        tier: "Bank-LC"
    },
    bronzong: {
        num: 437,
        species: "Bronzong",
        types: ["Steel", "Psychic"],
        gender: "N",
        baseStats: {
            hp: 67,
            atk: 89,
            def: 116,
            spa: 79,
            spd: 116,
            spe: 33
        },
        abilities: {
            "0": "Levitate",
            "1": "Heatproof",
            H: "Heavy Metal"
        },
        heightm: 1.3,
        weightkg: 187,
        color: "Green",
        prevo: "bronzor",
        evoLevel: 33,
        eggGroups: ["Mineral"],
        tier: "Bank"
    },
    bonsly: {
        num: 438,
        species: "Bonsly",
        types: ["Rock"],
        baseStats: {
            hp: 50,
            atk: 80,
            def: 95,
            spa: 10,
            spd: 45,
            spe: 10
        },
        abilities: {
            "0": "Sturdy",
            "1": "Rock Head",
            H: "Rattled"
        },
        heightm: 0.5,
        weightkg: 15,
        color: "Brown",
        evos: ["sudowoodo"],
        eggGroups: ["Undiscovered"],
        tier: "LC"
    },
    mimejr: {
        num: 439,
        species: "Mime Jr.",
        types: ["Psychic", "Fairy"],
        baseStats: {
            hp: 20,
            atk: 25,
            def: 45,
            spa: 70,
            spd: 90,
            spe: 60
        },
        abilities: {
            "0": "Soundproof",
            "1": "Filter",
            H: "Technician"
        },
        heightm: 0.6,
        weightkg: 13,
        color: "Pink",
        evos: ["mrmime"],
        eggGroups: ["Undiscovered"],
        tier: "Bank-LC"
    },
    happiny: {
        num: 440,
        species: "Happiny",
        types: ["Normal"],
        gender: "F",
        baseStats: {
            hp: 100,
            atk: 5,
            def: 5,
            spa: 15,
            spd: 65,
            spe: 30
        },
        abilities: {
            "0": "Natural Cure",
            "1": "Serene Grace",
            H: "Friend Guard"
        },
        heightm: 0.6,
        weightkg: 24.4,
        color: "Pink",
        evos: ["chansey"],
        eggGroups: ["Undiscovered"],
        tier: "LC"
    },
    chatot: {
        num: 441,
        species: "Chatot",
        types: ["Normal", "Flying"],
        baseStats: {
            hp: 76,
            atk: 65,
            def: 45,
            spa: 92,
            spd: 42,
            spe: 91
        },
        abilities: {
            "0": "Keen Eye",
            "1": "Tangled Feet",
            H: "Big Pecks"
        },
        heightm: 0.5,
        weightkg: 1.9,
        color: "Black",
        eggGroups: ["Flying"],
        tier: "Bank"
    },
    spiritomb: {
        num: 442,
        species: "Spiritomb",
        types: ["Ghost", "Dark"],
        baseStats: {
            hp: 50,
            atk: 92,
            def: 108,
            spa: 92,
            spd: 108,
            spe: 35
        },
        abilities: {
            "0": "Pressure",
            H: "Infiltrator"
        },
        heightm: 1,
        weightkg: 108,
        color: "Purple",
        eggGroups: ["Amorphous"],
        tier: "Bank"
    },
    gible: {
        num: 443,
        species: "Gible",
        types: ["Dragon", "Ground"],
        baseStats: {
            hp: 58,
            atk: 70,
            def: 45,
            spa: 40,
            spd: 45,
            spe: 42
        },
        abilities: {
            "0": "Sand Veil",
            H: "Rough Skin"
        },
        heightm: 0.7,
        weightkg: 20.5,
        color: "Blue",
        evos: ["gabite"],
        eggGroups: ["Monster", "Dragon"],
        tier: "LC"
    },
    gabite: {
        num: 444,
        species: "Gabite",
        types: ["Dragon", "Ground"],
        baseStats: {
            hp: 68,
            atk: 90,
            def: 65,
            spa: 50,
            spd: 55,
            spe: 82
        },
        abilities: {
            "0": "Sand Veil",
            H: "Rough Skin"
        },
        heightm: 1.4,
        weightkg: 56,
        color: "Blue",
        prevo: "gible",
        evos: ["garchomp"],
        evoLevel: 24,
        eggGroups: ["Monster", "Dragon"],
        tier: "New"
    },
    garchomp: {
        num: 445,
        species: "Garchomp",
        types: ["Dragon", "Ground"],
        baseStats: {
            hp: 108,
            atk: 130,
            def: 95,
            spa: 80,
            spd: 85,
            spe: 102
        },
        abilities: {
            "0": "Sand Veil",
            H: "Rough Skin"
        },
        heightm: 1.9,
        weightkg: 95,
        color: "Blue",
        prevo: "gabite",
        evoLevel: 48,
        eggGroups: ["Monster", "Dragon"],
        otherFormes: ["garchompmega"],
        tier: "New"
    },
    garchompmega: {
        num: 445,
        species: "Garchomp-Mega",
        baseSpecies: "Garchomp",
        forme: "Mega",
        formeLetter: "M",
        types: ["Dragon", "Ground"],
        baseStats: {
            hp: 108,
            atk: 170,
            def: 115,
            spa: 120,
            spd: 95,
            spe: 92
        },
        abilities: {
            "0": "Sand Force"
        },
        heightm: 1.9,
        weightkg: 95,
        color: "Blue",
        eggGroups: ["Monster", "Dragon"],
        tier: "(OU)",
        requiredItem: "Garchompite"
    },
    munchlax: {
        num: 446,
        species: "Munchlax",
        types: ["Normal"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 135,
            atk: 85,
            def: 40,
            spa: 40,
            spd: 85,
            spe: 5
        },
        abilities: {
            "0": "Pickup",
            "1": "Thick Fat",
            H: "Gluttony"
        },
        heightm: 0.6,
        weightkg: 105,
        color: "Black",
        evos: ["snorlax"],
        eggGroups: ["Undiscovered"],
        tier: "LC"
    },
    riolu: {
        num: 447,
        species: "Riolu",
        types: ["Fighting"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 40,
            atk: 70,
            def: 40,
            spa: 35,
            spd: 40,
            spe: 60
        },
        abilities: {
            "0": "Steadfast",
            "1": "Inner Focus",
            H: "Prankster"
        },
        heightm: 0.7,
        weightkg: 20.2,
        color: "Blue",
        evos: ["lucario"],
        eggGroups: ["Undiscovered"],
        tier: "LC"
    },
    lucario: {
        num: 448,
        species: "Lucario",
        types: ["Fighting", "Steel"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 70,
            atk: 110,
            def: 70,
            spa: 115,
            spd: 70,
            spe: 90
        },
        abilities: {
            "0": "Steadfast",
            "1": "Inner Focus",
            H: "Justified"
        },
        heightm: 1.2,
        weightkg: 54,
        color: "Blue",
        prevo: "riolu",
        evoLevel: 2,
        eggGroups: ["Field", "Human-Like"],
        otherFormes: ["lucariomega"],
        tier: "New"
    },
    lucariomega: {
        num: 448,
        species: "Lucario-Mega",
        baseSpecies: "Lucario",
        forme: "Mega",
        formeLetter: "M",
        types: ["Fighting", "Steel"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 70,
            atk: 145,
            def: 88,
            spa: 140,
            spd: 70,
            spe: 112
        },
        abilities: {
            "0": "Adaptability"
        },
        heightm: 1.3,
        weightkg: 57.5,
        color: "Blue",
        eggGroups: ["Field", "Human-Like"],
        tier: "Uber",
        requiredItem: "Lucarionite"
    },
    hippopotas: {
        num: 449,
        species: "Hippopotas",
        types: ["Ground"],
        baseStats: {
            hp: 68,
            atk: 72,
            def: 78,
            spa: 38,
            spd: 42,
            spe: 32
        },
        abilities: {
            "0": "Sand Stream",
            H: "Sand Force"
        },
        heightm: 0.8,
        weightkg: 49.5,
        color: "Brown",
        evos: ["hippowdon"],
        eggGroups: ["Field"],
        tier: "Bank-LC"
    },
    hippowdon: {
        num: 450,
        species: "Hippowdon",
        types: ["Ground"],
        baseStats: {
            hp: 108,
            atk: 112,
            def: 118,
            spa: 68,
            spd: 72,
            spe: 47
        },
        abilities: {
            "0": "Sand Stream",
            H: "Sand Force"
        },
        heightm: 2,
        weightkg: 300,
        color: "Brown",
        prevo: "hippopotas",
        evoLevel: 34,
        eggGroups: ["Field"],
        tier: "Bank"
    },
    skorupi: {
        num: 451,
        species: "Skorupi",
        types: ["Poison", "Bug"],
        baseStats: {
            hp: 40,
            atk: 50,
            def: 90,
            spa: 30,
            spd: 55,
            spe: 65
        },
        abilities: {
            "0": "Battle Armor",
            "1": "Sniper",
            H: "Keen Eye"
        },
        heightm: 0.8,
        weightkg: 12,
        color: "Purple",
        evos: ["drapion"],
        eggGroups: ["Bug", "Water 3"],
        tier: "Bank-LC"
    },
    drapion: {
        num: 452,
        species: "Drapion",
        types: ["Poison", "Dark"],
        baseStats: {
            hp: 70,
            atk: 90,
            def: 110,
            spa: 60,
            spd: 75,
            spe: 95
        },
        abilities: {
            "0": "Battle Armor",
            "1": "Sniper",
            H: "Keen Eye"
        },
        heightm: 1.3,
        weightkg: 61.5,
        color: "Purple",
        prevo: "skorupi",
        evoLevel: 40,
        eggGroups: ["Bug", "Water 3"],
        tier: "Bank"
    },
    croagunk: {
        num: 453,
        species: "Croagunk",
        types: ["Poison", "Fighting"],
        baseStats: {
            hp: 48,
            atk: 61,
            def: 40,
            spa: 61,
            spd: 40,
            spe: 50
        },
        abilities: {
            "0": "Anticipation",
            "1": "Dry Skin",
            H: "Poison Touch"
        },
        heightm: 0.7,
        weightkg: 23,
        color: "Blue",
        evos: ["toxicroak"],
        eggGroups: ["Human-Like"],
        tier: "Bank-LC"
    },
    toxicroak: {
        num: 454,
        species: "Toxicroak",
        types: ["Poison", "Fighting"],
        baseStats: {
            hp: 83,
            atk: 106,
            def: 65,
            spa: 86,
            spd: 65,
            spe: 85
        },
        abilities: {
            "0": "Anticipation",
            "1": "Dry Skin",
            H: "Poison Touch"
        },
        heightm: 1.3,
        weightkg: 44.4,
        color: "Blue",
        prevo: "croagunk",
        evoLevel: 37,
        eggGroups: ["Human-Like"],
        tier: "Bank"
    },
    carnivine: {
        num: 455,
        species: "Carnivine",
        types: ["Grass"],
        baseStats: {
            hp: 74,
            atk: 100,
            def: 72,
            spa: 90,
            spd: 72,
            spe: 46
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 1.4,
        weightkg: 27,
        color: "Green",
        eggGroups: ["Grass"],
        tier: "Bank"
    },
    finneon: {
        num: 456,
        species: "Finneon",
        types: ["Water"],
        baseStats: {
            hp: 49,
            atk: 49,
            def: 56,
            spa: 49,
            spd: 61,
            spe: 66
        },
        abilities: {
            "0": "Swift Swim",
            "1": "Storm Drain",
            H: "Water Veil"
        },
        heightm: 0.4,
        weightkg: 7,
        color: "Blue",
        evos: ["lumineon"],
        eggGroups: ["Water 2"],
        tier: "LC"
    },
    lumineon: {
        num: 457,
        species: "Lumineon",
        types: ["Water"],
        baseStats: {
            hp: 69,
            atk: 69,
            def: 76,
            spa: 69,
            spd: 86,
            spe: 91
        },
        abilities: {
            "0": "Swift Swim",
            "1": "Storm Drain",
            H: "Water Veil"
        },
        heightm: 1.2,
        weightkg: 24,
        color: "Blue",
        prevo: "finneon",
        evoLevel: 31,
        eggGroups: ["Water 2"],
        tier: "New"
    },
    mantyke: {
        num: 458,
        species: "Mantyke",
        types: ["Water", "Flying"],
        baseStats: {
            hp: 45,
            atk: 20,
            def: 50,
            spa: 60,
            spd: 120,
            spe: 50
        },
        abilities: {
            "0": "Swift Swim",
            "1": "Water Absorb",
            H: "Water Veil"
        },
        heightm: 1,
        weightkg: 65,
        color: "Blue",
        evos: ["mantine"],
        eggGroups: ["Undiscovered"],
        tier: "Bank-LC"
    },
    snover: {
        num: 459,
        species: "Snover",
        types: ["Grass", "Ice"],
        baseStats: {
            hp: 60,
            atk: 62,
            def: 50,
            spa: 62,
            spd: 60,
            spe: 40
        },
        abilities: {
            "0": "Snow Warning",
            H: "Soundproof"
        },
        heightm: 1,
        weightkg: 50.5,
        color: "White",
        evos: ["abomasnow"],
        eggGroups: ["Monster", "Grass"],
        tier: "Bank-LC"
    },
    abomasnow: {
        num: 460,
        species: "Abomasnow",
        types: ["Grass", "Ice"],
        baseStats: {
            hp: 90,
            atk: 92,
            def: 75,
            spa: 92,
            spd: 85,
            spe: 60
        },
        abilities: {
            "0": "Snow Warning",
            H: "Soundproof"
        },
        heightm: 2.2,
        weightkg: 135.5,
        color: "White",
        prevo: "snover",
        evoLevel: 40,
        eggGroups: ["Monster", "Grass"],
        otherFormes: ["abomasnowmega"],
        tier: "Bank"
    },
    abomasnowmega: {
        num: 460,
        species: "Abomasnow-Mega",
        baseSpecies: "Abomasnow",
        forme: "Mega",
        formeLetter: "M",
        types: ["Grass", "Ice"],
        baseStats: {
            hp: 90,
            atk: 132,
            def: 105,
            spa: 132,
            spd: 105,
            spe: 30
        },
        abilities: {
            "0": "Snow Warning"
        },
        heightm: 2.7,
        weightkg: 185,
        color: "White",
        eggGroups: ["Monster", "Grass"],
        tier: "Unreleased",
        requiredItem: "Abomasite"
    },
    weavile: {
        num: 461,
        species: "Weavile",
        types: ["Dark", "Ice"],
        baseStats: {
            hp: 70,
            atk: 120,
            def: 65,
            spa: 45,
            spd: 85,
            spe: 125
        },
        abilities: {
            "0": "Pressure",
            H: "Pickpocket"
        },
        heightm: 1.1,
        weightkg: 34,
        color: "Black",
        prevo: "sneasel",
        evoLevel: 2,
        eggGroups: ["Field"],
        tier: "New"
    },
    magnezone: {
        num: 462,
        species: "Magnezone",
        types: ["Electric", "Steel"],
        gender: "N",
        baseStats: {
            hp: 70,
            atk: 70,
            def: 115,
            spa: 130,
            spd: 90,
            spe: 60
        },
        abilities: {
            "0": "Magnet Pull",
            "1": "Sturdy",
            H: "Analytic"
        },
        heightm: 1.2,
        weightkg: 180,
        color: "Gray",
        prevo: "magneton",
        evoLevel: 31,
        eggGroups: ["Mineral"],
        tier: "New"
    },
    lickilicky: {
        num: 463,
        species: "Lickilicky",
        types: ["Normal"],
        baseStats: {
            hp: 110,
            atk: 85,
            def: 95,
            spa: 80,
            spd: 95,
            spe: 50
        },
        abilities: {
            "0": "Own Tempo",
            "1": "Oblivious",
            H: "Cloud Nine"
        },
        heightm: 1.7,
        weightkg: 140,
        color: "Pink",
        prevo: "lickitung",
        evoLevel: 2,
        evoMove: "Rollout",
        eggGroups: ["Monster"],
        tier: "Bank"
    },
    rhyperior: {
        num: 464,
        species: "Rhyperior",
        types: ["Ground", "Rock"],
        baseStats: {
            hp: 115,
            atk: 140,
            def: 130,
            spa: 55,
            spd: 55,
            spe: 40
        },
        abilities: {
            "0": "Lightning Rod",
            "1": "Solid Rock",
            H: "Reckless"
        },
        heightm: 2.4,
        weightkg: 282.8,
        color: "Gray",
        prevo: "rhydon",
        evoLevel: 42,
        eggGroups: ["Monster", "Field"],
        tier: "New"
    },
    tangrowth: {
        num: 465,
        species: "Tangrowth",
        types: ["Grass"],
        baseStats: {
            hp: 100,
            atk: 100,
            def: 125,
            spa: 110,
            spd: 50,
            spe: 50
        },
        abilities: {
            "0": "Chlorophyll",
            "1": "Leaf Guard",
            H: "Regenerator"
        },
        heightm: 2,
        weightkg: 128.6,
        color: "Blue",
        prevo: "tangela",
        evoLevel: 2,
        evoMove: "AncientPower",
        eggGroups: ["Grass"],
        tier: "Bank"
    },
    electivire: {
        num: 466,
        species: "Electivire",
        types: ["Electric"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 75,
            atk: 123,
            def: 67,
            spa: 95,
            spd: 85,
            spe: 95
        },
        abilities: {
            "0": "Motor Drive",
            H: "Vital Spirit"
        },
        heightm: 1.8,
        weightkg: 138.6,
        color: "Yellow",
        prevo: "electabuzz",
        evoLevel: 30,
        eggGroups: ["Human-Like"],
        tier: "New"
    },
    magmortar: {
        num: 467,
        species: "Magmortar",
        types: ["Fire"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 75,
            atk: 95,
            def: 67,
            spa: 125,
            spd: 95,
            spe: 83
        },
        abilities: {
            "0": "Flame Body",
            H: "Vital Spirit"
        },
        heightm: 1.6,
        weightkg: 68,
        color: "Red",
        prevo: "magmar",
        evoLevel: 30,
        eggGroups: ["Human-Like"],
        tier: "New"
    },
    togekiss: {
        num: 468,
        species: "Togekiss",
        types: ["Fairy", "Flying"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 85,
            atk: 50,
            def: 95,
            spa: 120,
            spd: 115,
            spe: 80
        },
        abilities: {
            "0": "Hustle",
            "1": "Serene Grace",
            H: "Super Luck"
        },
        heightm: 1.5,
        weightkg: 38,
        color: "White",
        prevo: "togetic",
        evoLevel: 2,
        eggGroups: ["Flying", "Fairy"],
        tier: "New"
    },
    yanmega: {
        num: 469,
        species: "Yanmega",
        types: ["Bug", "Flying"],
        baseStats: {
            hp: 86,
            atk: 76,
            def: 86,
            spa: 116,
            spd: 56,
            spe: 95
        },
        abilities: {
            "0": "Speed Boost",
            "1": "Tinted Lens",
            H: "Frisk"
        },
        heightm: 1.9,
        weightkg: 51.5,
        color: "Green",
        prevo: "yanma",
        evoLevel: 2,
        evoMove: "AncientPower",
        eggGroups: ["Bug"],
        tier: "Bank"
    },
    leafeon: {
        num: 470,
        species: "Leafeon",
        types: ["Grass"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 65,
            atk: 110,
            def: 130,
            spa: 60,
            spd: 65,
            spe: 95
        },
        abilities: {
            "0": "Leaf Guard",
            H: "Chlorophyll"
        },
        heightm: 1,
        weightkg: 25.5,
        color: "Green",
        prevo: "eevee",
        evoLevel: 2,
        eggGroups: ["Field"],
        tier: "New"
    },
    glaceon: {
        num: 471,
        species: "Glaceon",
        types: ["Ice"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 65,
            atk: 60,
            def: 110,
            spa: 130,
            spd: 95,
            spe: 65
        },
        abilities: {
            "0": "Snow Cloak",
            H: "Ice Body"
        },
        heightm: 0.8,
        weightkg: 25.9,
        color: "Blue",
        prevo: "eevee",
        evoLevel: 2,
        eggGroups: ["Field"],
        tier: "New"
    },
    gliscor: {
        num: 472,
        species: "Gliscor",
        types: ["Ground", "Flying"],
        baseStats: {
            hp: 75,
            atk: 95,
            def: 125,
            spa: 45,
            spd: 75,
            spe: 95
        },
        abilities: {
            "0": "Hyper Cutter",
            "1": "Sand Veil",
            H: "Poison Heal"
        },
        heightm: 2,
        weightkg: 42.5,
        color: "Purple",
        prevo: "gligar",
        evoLevel: 2,
        eggGroups: ["Bug"],
        tier: "Bank"
    },
    mamoswine: {
        num: 473,
        species: "Mamoswine",
        types: ["Ice", "Ground"],
        baseStats: {
            hp: 110,
            atk: 130,
            def: 80,
            spa: 70,
            spd: 60,
            spe: 80
        },
        abilities: {
            "0": "Oblivious",
            "1": "Snow Cloak",
            H: "Thick Fat"
        },
        heightm: 2.5,
        weightkg: 291,
        color: "Brown",
        prevo: "piloswine",
        evoLevel: 34,
        evoMove: "AncientPower",
        eggGroups: ["Field"],
        tier: "New"
    },
    porygonz: {
        num: 474,
        species: "Porygon-Z",
        types: ["Normal"],
        gender: "N",
        baseStats: {
            hp: 85,
            atk: 80,
            def: 70,
            spa: 135,
            spd: 75,
            spe: 90
        },
        abilities: {
            "0": "Adaptability",
            "1": "Download",
            H: "Analytic"
        },
        heightm: 0.9,
        weightkg: 34,
        color: "Red",
        prevo: "porygon2",
        evoLevel: 1,
        eggGroups: ["Mineral"],
        tier: "New"
    },
    gallade: {
        num: 475,
        species: "Gallade",
        types: ["Psychic", "Fighting"],
        gender: "M",
        baseStats: {
            hp: 68,
            atk: 125,
            def: 65,
            spa: 65,
            spd: 115,
            spe: 80
        },
        abilities: {
            "0": "Steadfast",
            H: "Justified"
        },
        heightm: 1.6,
        weightkg: 52,
        color: "White",
        prevo: "kirlia",
        evoLevel: 20,
        eggGroups: ["Amorphous"],
        otherFormes: ["gallademega"],
        tier: "Bank"
    },
    gallademega: {
        num: 475,
        species: "Gallade-Mega",
        baseSpecies: "Gallade",
        forme: "Mega",
        formeLetter: "M",
        types: ["Psychic", "Fighting"],
        gender: "M",
        baseStats: {
            hp: 68,
            atk: 165,
            def: 95,
            spa: 65,
            spd: 115,
            spe: 110
        },
        abilities: {
            "0": "Inner Focus"
        },
        heightm: 1.6,
        weightkg: 56.4,
        color: "White",
        eggGroups: ["Amorphous"],
        tier: "Unreleased",
        requiredItem: "Galladite"
    },
    probopass: {
        num: 476,
        species: "Probopass",
        types: ["Rock", "Steel"],
        baseStats: {
            hp: 60,
            atk: 55,
            def: 145,
            spa: 75,
            spd: 150,
            spe: 40
        },
        abilities: {
            "0": "Sturdy",
            "1": "Magnet Pull",
            H: "Sand Force"
        },
        heightm: 1.4,
        weightkg: 340,
        color: "Gray",
        prevo: "nosepass",
        evoLevel: 2,
        eggGroups: ["Mineral"],
        tier: "New"
    },
    dusknoir: {
        num: 477,
        species: "Dusknoir",
        types: ["Ghost"],
        baseStats: {
            hp: 45,
            atk: 100,
            def: 135,
            spa: 65,
            spd: 135,
            spe: 45
        },
        abilities: {
            "0": "Pressure",
            H: "Frisk"
        },
        heightm: 2.2,
        weightkg: 106.6,
        color: "Black",
        prevo: "dusclops",
        evoLevel: 37,
        eggGroups: ["Amorphous"],
        tier: "Bank"
    },
    froslass: {
        num: 478,
        species: "Froslass",
        types: ["Ice", "Ghost"],
        gender: "F",
        baseStats: {
            hp: 70,
            atk: 80,
            def: 70,
            spa: 80,
            spd: 70,
            spe: 110
        },
        abilities: {
            "0": "Snow Cloak",
            H: "Cursed Body"
        },
        heightm: 1.3,
        weightkg: 26.6,
        color: "White",
        prevo: "snorunt",
        evoLevel: 1,
        eggGroups: ["Fairy", "Mineral"],
        tier: "New"
    },
    rotom: {
        num: 479,
        species: "Rotom",
        types: ["Electric", "Ghost"],
        gender: "N",
        baseStats: {
            hp: 50,
            atk: 50,
            def: 77,
            spa: 95,
            spd: 77,
            spe: 91
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 0.3,
        weightkg: 0.3,
        color: "Red",
        eggGroups: ["Amorphous"],
        otherFormes: ["rotomheat", "rotomwash", "rotomfrost", "rotomfan", "rotommow"],
        tier: "Bank"
    },
    rotomheat: {
        num: 479,
        species: "Rotom-Heat",
        baseSpecies: "Rotom",
        forme: "Heat",
        formeLetter: "H",
        types: ["Electric", "Fire"],
        gender: "N",
        baseStats: {
            hp: 50,
            atk: 65,
            def: 107,
            spa: 105,
            spd: 107,
            spe: 86
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 0.3,
        weightkg: 0.3,
        color: "Red",
        eggGroups: ["Amorphous"],
        tier: "Bank"
    },
    rotomwash: {
        num: 479,
        species: "Rotom-Wash",
        baseSpecies: "Rotom",
        forme: "Wash",
        formeLetter: "W",
        types: ["Electric", "Water"],
        gender: "N",
        baseStats: {
            hp: 50,
            atk: 65,
            def: 107,
            spa: 105,
            spd: 107,
            spe: 86
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 0.3,
        weightkg: 0.3,
        color: "Red",
        eggGroups: ["Amorphous"],
        tier: "Bank"
    },
    rotomfrost: {
        num: 479,
        species: "Rotom-Frost",
        baseSpecies: "Rotom",
        forme: "Frost",
        formeLetter: "F",
        types: ["Electric", "Ice"],
        gender: "N",
        baseStats: {
            hp: 50,
            atk: 65,
            def: 107,
            spa: 105,
            spd: 107,
            spe: 86
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 0.3,
        weightkg: 0.3,
        color: "Red",
        eggGroups: ["Amorphous"],
        tier: "Bank"
    },
    rotomfan: {
        num: 479,
        species: "Rotom-Fan",
        baseSpecies: "Rotom",
        forme: "Fan",
        formeLetter: "S",
        types: ["Electric", "Flying"],
        gender: "N",
        baseStats: {
            hp: 50,
            atk: 65,
            def: 107,
            spa: 105,
            spd: 107,
            spe: 86
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 0.3,
        weightkg: 0.3,
        color: "Red",
        eggGroups: ["Amorphous"],
        tier: "Bank"
    },
    rotommow: {
        num: 479,
        species: "Rotom-Mow",
        baseSpecies: "Rotom",
        forme: "Mow",
        formeLetter: "C",
        types: ["Electric", "Grass"],
        gender: "N",
        baseStats: {
            hp: 50,
            atk: 65,
            def: 107,
            spa: 105,
            spd: 107,
            spe: 86
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 0.3,
        weightkg: 0.3,
        color: "Red",
        eggGroups: ["Amorphous"],
        tier: "Bank"
    },
    uxie: {
        num: 480,
        species: "Uxie",
        types: ["Psychic"],
        gender: "N",
        baseStats: {
            hp: 75,
            atk: 75,
            def: 130,
            spa: 75,
            spd: 130,
            spe: 95
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 0.3,
        weightkg: 0.3,
        color: "Yellow",
        eggGroups: ["Undiscovered"],
        tier: "Bank"
    },
    mesprit: {
        num: 481,
        species: "Mesprit",
        types: ["Psychic"],
        gender: "N",
        baseStats: {
            hp: 80,
            atk: 105,
            def: 105,
            spa: 105,
            spd: 105,
            spe: 80
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 0.3,
        weightkg: 0.3,
        color: "Pink",
        eggGroups: ["Undiscovered"],
        tier: "Bank"
    },
    azelf: {
        num: 482,
        species: "Azelf",
        types: ["Psychic"],
        gender: "N",
        baseStats: {
            hp: 75,
            atk: 125,
            def: 70,
            spa: 125,
            spd: 70,
            spe: 115
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 0.3,
        weightkg: 0.3,
        color: "Blue",
        eggGroups: ["Undiscovered"],
        tier: "Bank"
    },
    dialga: {
        num: 483,
        species: "Dialga",
        types: ["Steel", "Dragon"],
        gender: "N",
        baseStats: {
            hp: 100,
            atk: 120,
            def: 120,
            spa: 150,
            spd: 100,
            spe: 90
        },
        abilities: {
            "0": "Pressure",
            H: "Telepathy"
        },
        heightm: 5.4,
        weightkg: 683,
        color: "White",
        eggGroups: ["Undiscovered"],
        tier: "Bank-Uber"
    },
    palkia: {
        num: 484,
        species: "Palkia",
        types: ["Water", "Dragon"],
        gender: "N",
        baseStats: {
            hp: 90,
            atk: 120,
            def: 100,
            spa: 150,
            spd: 120,
            spe: 100
        },
        abilities: {
            "0": "Pressure",
            H: "Telepathy"
        },
        heightm: 4.2,
        weightkg: 336,
        color: "Purple",
        eggGroups: ["Undiscovered"],
        tier: "Bank-Uber"
    },
    heatran: {
        num: 485,
        species: "Heatran",
        types: ["Fire", "Steel"],
        baseStats: {
            hp: 91,
            atk: 90,
            def: 106,
            spa: 130,
            spd: 106,
            spe: 77
        },
        abilities: {
            "0": "Flash Fire",
            H: "Flame Body"
        },
        heightm: 1.7,
        weightkg: 430,
        color: "Brown",
        eggGroups: ["Undiscovered"],
        tier: "Bank",
        unreleasedHidden: true
    },
    regigigas: {
        num: 486,
        species: "Regigigas",
        types: ["Normal"],
        gender: "N",
        baseStats: {
            hp: 110,
            atk: 160,
            def: 110,
            spa: 80,
            spd: 110,
            spe: 100
        },
        abilities: {
            "0": "Slow Start"
        },
        heightm: 3.7,
        weightkg: 420,
        color: "White",
        eggGroups: ["Undiscovered"],
        tier: "Bank"
    },
    giratina: {
        num: 487,
        species: "Giratina",
        baseForme: "Altered",
        types: ["Ghost", "Dragon"],
        gender: "N",
        baseStats: {
            hp: 150,
            atk: 100,
            def: 120,
            spa: 100,
            spd: 120,
            spe: 90
        },
        abilities: {
            "0": "Pressure",
            H: "Telepathy"
        },
        heightm: 4.5,
        weightkg: 750,
        color: "Black",
        eggGroups: ["Undiscovered"],
        otherFormes: ["giratinaorigin"],
        tier: "Bank-Uber"
    },
    giratinaorigin: {
        num: 487,
        species: "Giratina-Origin",
        baseSpecies: "Giratina",
        forme: "Origin",
        formeLetter: "O",
        types: ["Ghost", "Dragon"],
        gender: "N",
        baseStats: {
            hp: 150,
            atk: 120,
            def: 100,
            spa: 120,
            spd: 100,
            spe: 90
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 6.9,
        weightkg: 650,
        color: "Black",
        eggGroups: ["Undiscovered"],
        tier: "Bank-Uber",
        requiredItem: "Griseous Orb"
    },
    cresselia: {
        num: 488,
        species: "Cresselia",
        types: ["Psychic"],
        gender: "F",
        baseStats: {
            hp: 120,
            atk: 70,
            def: 120,
            spa: 75,
            spd: 130,
            spe: 85
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 1.5,
        weightkg: 85.6,
        color: "Yellow",
        eggGroups: ["Undiscovered"],
        tier: "Bank"
    },
    phione: {
        num: 489,
        species: "Phione",
        types: ["Water"],
        gender: "N",
        baseStats: {
            hp: 80,
            atk: 80,
            def: 80,
            spa: 80,
            spd: 80,
            spe: 80
        },
        abilities: {
            "0": "Hydration"
        },
        heightm: 0.4,
        weightkg: 3.1,
        color: "Blue",
        eggGroups: ["Water 1", "Fairy"],
        tier: "Bank"
    },
    manaphy: {
        num: 490,
        species: "Manaphy",
        types: ["Water"],
        gender: "N",
        baseStats: {
            hp: 100,
            atk: 100,
            def: 100,
            spa: 100,
            spd: 100,
            spe: 100
        },
        abilities: {
            "0": "Hydration"
        },
        heightm: 0.3,
        weightkg: 1.4,
        color: "Blue",
        eggGroups: ["Water 1", "Fairy"],
        tier: "Bank"
    },
    darkrai: {
        num: 491,
        species: "Darkrai",
        types: ["Dark"],
        gender: "N",
        baseStats: {
            hp: 70,
            atk: 90,
            def: 90,
            spa: 135,
            spd: 90,
            spe: 125
        },
        abilities: {
            "0": "Bad Dreams"
        },
        heightm: 1.5,
        weightkg: 50.5,
        color: "Black",
        eggGroups: ["Undiscovered"],
        tier: "Bank-Uber"
    },
    shaymin: {
        num: 492,
        species: "Shaymin",
        baseForme: "Land",
        types: ["Grass"],
        gender: "N",
        baseStats: {
            hp: 100,
            atk: 100,
            def: 100,
            spa: 100,
            spd: 100,
            spe: 100
        },
        abilities: {
            "0": "Natural Cure"
        },
        heightm: 0.2,
        weightkg: 2.1,
        color: "Green",
        eggGroups: ["Undiscovered"],
        otherFormes: ["shayminsky"],
        tier: "Bank"
    },
    shayminsky: {
        num: 492,
        species: "Shaymin-Sky",
        baseSpecies: "Shaymin",
        forme: "Sky",
        formeLetter: "S",
        types: ["Grass", "Flying"],
        gender: "N",
        baseStats: {
            hp: 100,
            atk: 103,
            def: 75,
            spa: 120,
            spd: 75,
            spe: 127
        },
        abilities: {
            "0": "Serene Grace"
        },
        heightm: 0.4,
        weightkg: 5.2,
        color: "Green",
        eggGroups: ["Undiscovered"],
        tier: "Bank-Uber"
    },
    arceus: {
        num: 493,
        species: "Arceus",
        baseForme: "Normal",
        types: ["Normal"],
        gender: "N",
        baseStats: {
            hp: 120,
            atk: 120,
            def: 120,
            spa: 120,
            spd: 120,
            spe: 120
        },
        abilities: {
            "0": "Multitype"
        },
        heightm: 3.2,
        weightkg: 320,
        color: "Gray",
        eggGroups: ["Undiscovered"],
        otherFormes: ["arceusbug", "arceusdark", "arceusdragon", "arceuselectric", "arceusfairy", "arceusfighting", "arceusfire", "arceusflying", "arceusghost", "arceusgrass", "arceusground", "arceusice", "arceuspoison", "arceuspsychic", "arceusrock", "arceussteel", "arceuswater"],
        tier: "Bank-Uber"
    },
    arceusbug: {
        num: 493,
        species: "Arceus-Bug",
        baseSpecies: "Arceus",
        forme: "Bug",
        formeLetter: "B",
        types: ["Bug"],
        gender: "N",
        baseStats: {
            hp: 120,
            atk: 120,
            def: 120,
            spa: 120,
            spd: 120,
            spe: 120
        },
        abilities: {
            "0": "Multitype"
        },
        heightm: 3.2,
        weightkg: 320,
        color: "Gray",
        eggGroups: ["Undiscovered"]
    },
    arceusdark: {
        num: 493,
        species: "Arceus-Dark",
        baseSpecies: "Arceus",
        forme: "Dark",
        formeLetter: "D",
        types: ["Dark"],
        gender: "N",
        baseStats: {
            hp: 120,
            atk: 120,
            def: 120,
            spa: 120,
            spd: 120,
            spe: 120
        },
        abilities: {
            "0": "Multitype"
        },
        heightm: 3.2,
        weightkg: 320,
        color: "Gray",
        eggGroups: ["Undiscovered"]
    },
    arceusdragon: {
        num: 493,
        species: "Arceus-Dragon",
        baseSpecies: "Arceus",
        forme: "Dragon",
        formeLetter: "D",
        types: ["Dragon"],
        gender: "N",
        baseStats: {
            hp: 120,
            atk: 120,
            def: 120,
            spa: 120,
            spd: 120,
            spe: 120
        },
        abilities: {
            "0": "Multitype"
        },
        heightm: 3.2,
        weightkg: 320,
        color: "Gray",
        eggGroups: ["Undiscovered"]
    },
    arceuselectric: {
        num: 493,
        species: "Arceus-Electric",
        baseSpecies: "Arceus",
        forme: "Electric",
        formeLetter: "E",
        types: ["Electric"],
        gender: "N",
        baseStats: {
            hp: 120,
            atk: 120,
            def: 120,
            spa: 120,
            spd: 120,
            spe: 120
        },
        abilities: {
            "0": "Multitype"
        },
        heightm: 3.2,
        weightkg: 320,
        color: "Gray",
        eggGroups: ["Undiscovered"]
    },
    arceusfairy: {
        num: 493,
        species: "Arceus-Fairy",
        baseSpecies: "Arceus",
        forme: "Fairy",
        formeLetter: "F",
        types: ["Fairy"],
        gender: "N",
        baseStats: {
            hp: 120,
            atk: 120,
            def: 120,
            spa: 120,
            spd: 120,
            spe: 120
        },
        abilities: {
            "0": "Multitype"
        },
        heightm: 3.2,
        weightkg: 320,
        color: "Gray",
        eggGroups: ["Undiscovered"]
    },
    arceusfighting: {
        num: 493,
        species: "Arceus-Fighting",
        baseSpecies: "Arceus",
        forme: "Fighting",
        formeLetter: "F",
        types: ["Fighting"],
        gender: "N",
        baseStats: {
            hp: 120,
            atk: 120,
            def: 120,
            spa: 120,
            spd: 120,
            spe: 120
        },
        abilities: {
            "0": "Multitype"
        },
        heightm: 3.2,
        weightkg: 320,
        color: "Gray",
        eggGroups: ["Undiscovered"]
    },
    arceusfire: {
        num: 493,
        species: "Arceus-Fire",
        baseSpecies: "Arceus",
        forme: "Fire",
        formeLetter: "F",
        types: ["Fire"],
        gender: "N",
        baseStats: {
            hp: 120,
            atk: 120,
            def: 120,
            spa: 120,
            spd: 120,
            spe: 120
        },
        abilities: {
            "0": "Multitype"
        },
        heightm: 3.2,
        weightkg: 320,
        color: "Gray",
        eggGroups: ["Undiscovered"]
    },
    arceusflying: {
        num: 493,
        species: "Arceus-Flying",
        baseSpecies: "Arceus",
        forme: "Flying",
        formeLetter: "F",
        types: ["Flying"],
        gender: "N",
        baseStats: {
            hp: 120,
            atk: 120,
            def: 120,
            spa: 120,
            spd: 120,
            spe: 120
        },
        abilities: {
            "0": "Multitype"
        },
        heightm: 3.2,
        weightkg: 320,
        color: "Gray",
        eggGroups: ["Undiscovered"]
    },
    arceusghost: {
        num: 493,
        species: "Arceus-Ghost",
        baseSpecies: "Arceus",
        forme: "Ghost",
        formeLetter: "G",
        types: ["Ghost"],
        gender: "N",
        baseStats: {
            hp: 120,
            atk: 120,
            def: 120,
            spa: 120,
            spd: 120,
            spe: 120
        },
        abilities: {
            "0": "Multitype"
        },
        heightm: 3.2,
        weightkg: 320,
        color: "Gray",
        eggGroups: ["Undiscovered"]
    },
    arceusgrass: {
        num: 493,
        species: "Arceus-Grass",
        baseSpecies: "Arceus",
        forme: "Grass",
        formeLetter: "G",
        types: ["Grass"],
        gender: "N",
        baseStats: {
            hp: 120,
            atk: 120,
            def: 120,
            spa: 120,
            spd: 120,
            spe: 120
        },
        abilities: {
            "0": "Multitype"
        },
        heightm: 3.2,
        weightkg: 320,
        color: "Gray",
        eggGroups: ["Undiscovered"]
    },
    arceusground: {
        num: 493,
        species: "Arceus-Ground",
        baseSpecies: "Arceus",
        forme: "Ground",
        formeLetter: "G",
        types: ["Ground"],
        gender: "N",
        baseStats: {
            hp: 120,
            atk: 120,
            def: 120,
            spa: 120,
            spd: 120,
            spe: 120
        },
        abilities: {
            "0": "Multitype"
        },
        heightm: 3.2,
        weightkg: 320,
        color: "Gray",
        eggGroups: ["Undiscovered"]
    },
    arceusice: {
        num: 493,
        species: "Arceus-Ice",
        baseSpecies: "Arceus",
        forme: "Ice",
        formeLetter: "I",
        types: ["Ice"],
        gender: "N",
        baseStats: {
            hp: 120,
            atk: 120,
            def: 120,
            spa: 120,
            spd: 120,
            spe: 120
        },
        abilities: {
            "0": "Multitype"
        },
        heightm: 3.2,
        weightkg: 320,
        color: "Gray",
        eggGroups: ["Undiscovered"]
    },
    arceuspoison: {
        num: 493,
        species: "Arceus-Poison",
        baseSpecies: "Arceus",
        forme: "Poison",
        formeLetter: "P",
        types: ["Poison"],
        gender: "N",
        baseStats: {
            hp: 120,
            atk: 120,
            def: 120,
            spa: 120,
            spd: 120,
            spe: 120
        },
        abilities: {
            "0": "Multitype"
        },
        heightm: 3.2,
        weightkg: 320,
        color: "Gray",
        eggGroups: ["Undiscovered"]
    },
    arceuspsychic: {
        num: 493,
        species: "Arceus-Psychic",
        baseSpecies: "Arceus",
        forme: "Psychic",
        formeLetter: "P",
        types: ["Psychic"],
        gender: "N",
        baseStats: {
            hp: 120,
            atk: 120,
            def: 120,
            spa: 120,
            spd: 120,
            spe: 120
        },
        abilities: {
            "0": "Multitype"
        },
        heightm: 3.2,
        weightkg: 320,
        color: "Gray",
        eggGroups: ["Undiscovered"]
    },
    arceusrock: {
        num: 493,
        species: "Arceus-Rock",
        baseSpecies: "Arceus",
        forme: "Rock",
        formeLetter: "R",
        types: ["Rock"],
        gender: "N",
        baseStats: {
            hp: 120,
            atk: 120,
            def: 120,
            spa: 120,
            spd: 120,
            spe: 120
        },
        abilities: {
            "0": "Multitype"
        },
        heightm: 3.2,
        weightkg: 320,
        color: "Gray",
        eggGroups: ["Undiscovered"]
    },
    arceussteel: {
        num: 493,
        species: "Arceus-Steel",
        baseSpecies: "Arceus",
        forme: "Steel",
        formeLetter: "S",
        types: ["Steel"],
        gender: "N",
        baseStats: {
            hp: 120,
            atk: 120,
            def: 120,
            spa: 120,
            spd: 120,
            spe: 120
        },
        abilities: {
            "0": "Multitype"
        },
        heightm: 3.2,
        weightkg: 320,
        color: "Gray",
        eggGroups: ["Undiscovered"]
    },
    arceuswater: {
        num: 493,
        species: "Arceus-Water",
        baseSpecies: "Arceus",
        forme: "Water",
        formeLetter: "W",
        types: ["Water"],
        gender: "N",
        baseStats: {
            hp: 120,
            atk: 120,
            def: 120,
            spa: 120,
            spd: 120,
            spe: 120
        },
        abilities: {
            "0": "Multitype"
        },
        heightm: 3.2,
        weightkg: 320,
        color: "Gray",
        eggGroups: ["Undiscovered"]
    },
    victini: {
        num: 494,
        species: "Victini",
        types: ["Psychic", "Fire"],
        gender: "N",
        baseStats: {
            hp: 100,
            atk: 100,
            def: 100,
            spa: 100,
            spd: 100,
            spe: 100
        },
        abilities: {
            "0": "Victory Star"
        },
        heightm: 0.4,
        weightkg: 4,
        color: "Yellow",
        eggGroups: ["Undiscovered"],
        tier: "Bank"
    },
    snivy: {
        num: 495,
        species: "Snivy",
        types: ["Grass"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 45,
            atk: 45,
            def: 55,
            spa: 45,
            spd: 55,
            spe: 63
        },
        abilities: {
            "0": "Overgrow",
            H: "Contrary"
        },
        heightm: 0.6,
        weightkg: 8.1,
        color: "Green",
        evos: ["servine"],
        eggGroups: ["Field", "Grass"],
        tier: "LC"
    },
    servine: {
        num: 496,
        species: "Servine",
        types: ["Grass"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 60,
            atk: 60,
            def: 75,
            spa: 60,
            spd: 75,
            spe: 83
        },
        abilities: {
            "0": "Overgrow",
            H: "Contrary"
        },
        heightm: 0.8,
        weightkg: 16,
        color: "Green",
        prevo: "snivy",
        evos: ["serperior"],
        evoLevel: 17,
        eggGroups: ["Field", "Grass"],
        tier: "NFE"
    },
    serperior: {
        num: 497,
        species: "Serperior",
        types: ["Grass"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 75,
            atk: 75,
            def: 95,
            spa: 75,
            spd: 95,
            spe: 113
        },
        abilities: {
            "0": "Overgrow",
            H: "Contrary"
        },
        heightm: 3.3,
        weightkg: 63,
        color: "Green",
        prevo: "servine",
        evoLevel: 36,
        eggGroups: ["Field", "Grass"],
        tier: "New"
    },
    tepig: {
        num: 498,
        species: "Tepig",
        types: ["Fire"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 65,
            atk: 63,
            def: 45,
            spa: 45,
            spd: 45,
            spe: 45
        },
        abilities: {
            "0": "Blaze",
            H: "Thick Fat"
        },
        heightm: 0.5,
        weightkg: 9.9,
        color: "Red",
        evos: ["pignite"],
        eggGroups: ["Field"],
        tier: "LC"
    },
    pignite: {
        num: 499,
        species: "Pignite",
        types: ["Fire", "Fighting"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 90,
            atk: 93,
            def: 55,
            spa: 70,
            spd: 55,
            spe: 55
        },
        abilities: {
            "0": "Blaze",
            H: "Thick Fat"
        },
        heightm: 1,
        weightkg: 55.5,
        color: "Red",
        prevo: "tepig",
        evos: ["emboar"],
        evoLevel: 17,
        eggGroups: ["Field"],
        tier: "NFE"
    },
    emboar: {
        num: 500,
        species: "Emboar",
        types: ["Fire", "Fighting"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 110,
            atk: 123,
            def: 65,
            spa: 100,
            spd: 65,
            spe: 65
        },
        abilities: {
            "0": "Blaze",
            H: "Reckless"
        },
        heightm: 1.6,
        weightkg: 150,
        color: "Red",
        prevo: "pignite",
        evoLevel: 36,
        eggGroups: ["Field"],
        tier: "New"
    },
    oshawott: {
        num: 501,
        species: "Oshawott",
        types: ["Water"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 55,
            atk: 55,
            def: 45,
            spa: 63,
            spd: 45,
            spe: 45
        },
        abilities: {
            "0": "Torrent",
            H: "Shell Armor"
        },
        heightm: 0.5,
        weightkg: 5.9,
        color: "Blue",
        evos: ["dewott"],
        eggGroups: ["Field"],
        tier: "LC"
    },
    dewott: {
        num: 502,
        species: "Dewott",
        types: ["Water"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 75,
            atk: 75,
            def: 60,
            spa: 83,
            spd: 60,
            spe: 60
        },
        abilities: {
            "0": "Torrent",
            H: "Shell Armor"
        },
        heightm: 0.8,
        weightkg: 24.5,
        color: "Blue",
        prevo: "oshawott",
        evos: ["samurott"],
        evoLevel: 17,
        eggGroups: ["Field"],
        tier: "NFE"
    },
    samurott: {
        num: 503,
        species: "Samurott",
        types: ["Water"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 95,
            atk: 100,
            def: 85,
            spa: 108,
            spd: 70,
            spe: 70
        },
        abilities: {
            "0": "Torrent",
            H: "Shell Armor"
        },
        heightm: 1.5,
        weightkg: 94.6,
        color: "Blue",
        prevo: "dewott",
        evoLevel: 36,
        eggGroups: ["Field"],
        tier: "New"
    },
    patrat: {
        num: 504,
        species: "Patrat",
        types: ["Normal"],
        baseStats: {
            hp: 45,
            atk: 55,
            def: 39,
            spa: 35,
            spd: 39,
            spe: 42
        },
        abilities: {
            "0": "Run Away",
            "1": "Keen Eye",
            H: "Analytic"
        },
        heightm: 0.5,
        weightkg: 11.6,
        color: "Brown",
        evos: ["watchog"],
        eggGroups: ["Field"],
        tier: "Bank-LC"
    },
    watchog: {
        num: 505,
        species: "Watchog",
        types: ["Normal"],
        baseStats: {
            hp: 60,
            atk: 85,
            def: 69,
            spa: 60,
            spd: 69,
            spe: 77
        },
        abilities: {
            "0": "Illuminate",
            "1": "Keen Eye",
            H: "Analytic"
        },
        heightm: 1.1,
        weightkg: 27,
        color: "Brown",
        prevo: "patrat",
        evoLevel: 20,
        eggGroups: ["Field"],
        tier: "Bank"
    },
    lillipup: {
        num: 506,
        species: "Lillipup",
        types: ["Normal"],
        baseStats: {
            hp: 45,
            atk: 60,
            def: 45,
            spa: 25,
            spd: 45,
            spe: 55
        },
        abilities: {
            "0": "Vital Spirit",
            "1": "Pickup",
            H: "Run Away"
        },
        heightm: 0.4,
        weightkg: 4.1,
        color: "Brown",
        evos: ["herdier"],
        eggGroups: ["Field"],
        tier: "LC"
    },
    herdier: {
        num: 507,
        species: "Herdier",
        types: ["Normal"],
        baseStats: {
            hp: 65,
            atk: 80,
            def: 65,
            spa: 35,
            spd: 65,
            spe: 60
        },
        abilities: {
            "0": "Intimidate",
            "1": "Sand Rush",
            H: "Scrappy"
        },
        heightm: 0.9,
        weightkg: 14.7,
        color: "Gray",
        prevo: "lillipup",
        evos: ["stoutland"],
        evoLevel: 16,
        eggGroups: ["Field"],
        tier: "NFE"
    },
    stoutland: {
        num: 508,
        species: "Stoutland",
        types: ["Normal"],
        baseStats: {
            hp: 85,
            atk: 110,
            def: 90,
            spa: 45,
            spd: 90,
            spe: 80
        },
        abilities: {
            "0": "Intimidate",
            "1": "Sand Rush",
            H: "Scrappy"
        },
        heightm: 1.2,
        weightkg: 61,
        color: "Gray",
        prevo: "herdier",
        evoLevel: 32,
        eggGroups: ["Field"],
        tier: "New"
    },
    purrloin: {
        num: 509,
        species: "Purrloin",
        types: ["Dark"],
        baseStats: {
            hp: 41,
            atk: 50,
            def: 37,
            spa: 50,
            spd: 37,
            spe: 66
        },
        abilities: {
            "0": "Limber",
            "1": "Unburden",
            H: "Prankster"
        },
        heightm: 0.4,
        weightkg: 10.1,
        color: "Purple",
        evos: ["liepard"],
        eggGroups: ["Field"],
        tier: "Bank-LC"
    },
    liepard: {
        num: 510,
        species: "Liepard",
        types: ["Dark"],
        baseStats: {
            hp: 64,
            atk: 88,
            def: 50,
            spa: 88,
            spd: 50,
            spe: 106
        },
        abilities: {
            "0": "Limber",
            "1": "Unburden",
            H: "Prankster"
        },
        heightm: 1.1,
        weightkg: 37.5,
        color: "Purple",
        prevo: "purrloin",
        evoLevel: 20,
        eggGroups: ["Field"],
        tier: "Bank"
    },
    pansage: {
        num: 511,
        species: "Pansage",
        types: ["Grass"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 50,
            atk: 53,
            def: 48,
            spa: 53,
            spd: 48,
            spe: 64
        },
        abilities: {
            "0": "Gluttony",
            H: "Overgrow"
        },
        heightm: 0.6,
        weightkg: 10.5,
        color: "Green",
        evos: ["simisage"],
        eggGroups: ["Field"],
        tier: "Bank-LC"
    },
    simisage: {
        num: 512,
        species: "Simisage",
        types: ["Grass"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 75,
            atk: 98,
            def: 63,
            spa: 98,
            spd: 63,
            spe: 101
        },
        abilities: {
            "0": "Gluttony",
            H: "Overgrow"
        },
        heightm: 1.1,
        weightkg: 30.5,
        color: "Green",
        prevo: "pansage",
        evoLevel: 1,
        eggGroups: ["Field"],
        tier: "Bank"
    },
    pansear: {
        num: 513,
        species: "Pansear",
        types: ["Fire"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 50,
            atk: 53,
            def: 48,
            spa: 53,
            spd: 48,
            spe: 64
        },
        abilities: {
            "0": "Gluttony",
            H: "Blaze"
        },
        heightm: 0.6,
        weightkg: 11,
        color: "Red",
        evos: ["simisear"],
        eggGroups: ["Field"],
        tier: "Bank-LC"
    },
    simisear: {
        num: 514,
        species: "Simisear",
        types: ["Fire"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 75,
            atk: 98,
            def: 63,
            spa: 98,
            spd: 63,
            spe: 101
        },
        abilities: {
            "0": "Gluttony",
            H: "Blaze"
        },
        heightm: 1,
        weightkg: 28,
        color: "Red",
        prevo: "pansear",
        evoLevel: 1,
        eggGroups: ["Field"],
        tier: "Bank"
    },
    panpour: {
        num: 515,
        species: "Panpour",
        types: ["Water"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 50,
            atk: 53,
            def: 48,
            spa: 53,
            spd: 48,
            spe: 64
        },
        abilities: {
            "0": "Gluttony",
            H: "Torrent"
        },
        heightm: 0.6,
        weightkg: 13.5,
        color: "Blue",
        evos: ["simipour"],
        eggGroups: ["Field"],
        tier: "Bank-LC"
    },
    simipour: {
        num: 516,
        species: "Simipour",
        types: ["Water"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 75,
            atk: 98,
            def: 63,
            spa: 98,
            spd: 63,
            spe: 101
        },
        abilities: {
            "0": "Gluttony",
            H: "Torrent"
        },
        heightm: 1,
        weightkg: 29,
        color: "Blue",
        prevo: "panpour",
        evoLevel: 1,
        eggGroups: ["Field"],
        tier: "Bank"
    },
    munna: {
        num: 517,
        species: "Munna",
        types: ["Psychic"],
        baseStats: {
            hp: 76,
            atk: 25,
            def: 45,
            spa: 67,
            spd: 55,
            spe: 24
        },
        abilities: {
            "0": "Forewarn",
            "1": "Synchronize",
            H: "Telepathy"
        },
        heightm: 0.6,
        weightkg: 23.3,
        color: "Pink",
        evos: ["musharna"],
        eggGroups: ["Field"],
        tier: "Bank-LC"
    },
    musharna: {
        num: 518,
        species: "Musharna",
        types: ["Psychic"],
        baseStats: {
            hp: 116,
            atk: 55,
            def: 85,
            spa: 107,
            spd: 95,
            spe: 29
        },
        abilities: {
            "0": "Forewarn",
            "1": "Synchronize",
            H: "Telepathy"
        },
        heightm: 1.1,
        weightkg: 60.5,
        color: "Pink",
        prevo: "munna",
        evoLevel: 1,
        eggGroups: ["Field"],
        tier: "Bank"
    },
    pidove: {
        num: 519,
        species: "Pidove",
        types: ["Normal", "Flying"],
        baseStats: {
            hp: 50,
            atk: 55,
            def: 50,
            spa: 36,
            spd: 30,
            spe: 43
        },
        abilities: {
            "0": "Big Pecks",
            "1": "Super Luck",
            H: "Rivalry"
        },
        heightm: 0.3,
        weightkg: 2.1,
        color: "Gray",
        evos: ["tranquill"],
        eggGroups: ["Flying"],
        tier: "Bank-LC"
    },
    tranquill: {
        num: 520,
        species: "Tranquill",
        types: ["Normal", "Flying"],
        baseStats: {
            hp: 62,
            atk: 77,
            def: 62,
            spa: 50,
            spd: 42,
            spe: 65
        },
        abilities: {
            "0": "Big Pecks",
            "1": "Super Luck",
            H: "Rivalry"
        },
        heightm: 0.6,
        weightkg: 15,
        color: "Gray",
        prevo: "pidove",
        evos: ["unfezant"],
        evoLevel: 21,
        eggGroups: ["Flying"],
        tier: "Bank-NFE"
    },
    unfezant: {
        num: 521,
        species: "Unfezant",
        types: ["Normal", "Flying"],
        baseStats: {
            hp: 80,
            atk: 115,
            def: 80,
            spa: 65,
            spd: 55,
            spe: 93
        },
        abilities: {
            "0": "Big Pecks",
            "1": "Super Luck",
            H: "Rivalry"
        },
        heightm: 1.2,
        weightkg: 29,
        color: "Gray",
        prevo: "tranquill",
        evoLevel: 32,
        eggGroups: ["Flying"],
        tier: "Bank"
    },
    blitzle: {
        num: 522,
        species: "Blitzle",
        types: ["Electric"],
        baseStats: {
            hp: 45,
            atk: 60,
            def: 32,
            spa: 50,
            spd: 32,
            spe: 76
        },
        abilities: {
            "0": "Lightning Rod",
            "1": "Motor Drive",
            H: "Sap Sipper"
        },
        heightm: 0.8,
        weightkg: 29.8,
        color: "Black",
        evos: ["zebstrika"],
        eggGroups: ["Field"],
        tier: "Bank-LC"
    },
    zebstrika: {
        num: 523,
        species: "Zebstrika",
        types: ["Electric"],
        baseStats: {
            hp: 75,
            atk: 100,
            def: 63,
            spa: 80,
            spd: 63,
            spe: 116
        },
        abilities: {
            "0": "Lightning Rod",
            "1": "Motor Drive",
            H: "Sap Sipper"
        },
        heightm: 1.6,
        weightkg: 79.5,
        color: "Black",
        prevo: "blitzle",
        evoLevel: 27,
        eggGroups: ["Field"],
        tier: "Bank"
    },
    roggenrola: {
        num: 524,
        species: "Roggenrola",
        types: ["Rock"],
        baseStats: {
            hp: 55,
            atk: 75,
            def: 85,
            spa: 25,
            spd: 25,
            spe: 15
        },
        abilities: {
            "0": "Sturdy",
            "1": "Weak Armor",
            H: "Sand Force"
        },
        heightm: 0.4,
        weightkg: 18,
        color: "Blue",
        evos: ["boldore"],
        eggGroups: ["Mineral"],
        tier: "LC"
    },
    boldore: {
        num: 525,
        species: "Boldore",
        types: ["Rock"],
        baseStats: {
            hp: 70,
            atk: 105,
            def: 105,
            spa: 50,
            spd: 40,
            spe: 20
        },
        abilities: {
            "0": "Sturdy",
            "1": "Weak Armor",
            H: "Sand Force"
        },
        heightm: 0.9,
        weightkg: 102,
        color: "Blue",
        prevo: "roggenrola",
        evos: ["gigalith"],
        evoLevel: 25,
        eggGroups: ["Mineral"],
        tier: "NFE"
    },
    gigalith: {
        num: 526,
        species: "Gigalith",
        types: ["Rock"],
        baseStats: {
            hp: 85,
            atk: 135,
            def: 130,
            spa: 60,
            spd: 80,
            spe: 25
        },
        abilities: {
            "0": "Sturdy",
            "1": "Sand Stream",
            H: "Sand Force"
        },
        heightm: 1.7,
        weightkg: 260,
        color: "Blue",
        prevo: "boldore",
        evoLevel: 25,
        eggGroups: ["Mineral"],
        tier: "New"
    },
    woobat: {
        num: 527,
        species: "Woobat",
        types: ["Psychic", "Flying"],
        baseStats: {
            hp: 65,
            atk: 45,
            def: 43,
            spa: 55,
            spd: 43,
            spe: 72
        },
        abilities: {
            "0": "Unaware",
            "1": "Klutz",
            H: "Simple"
        },
        heightm: 0.4,
        weightkg: 2.1,
        color: "Blue",
        evos: ["swoobat"],
        eggGroups: ["Flying", "Field"],
        tier: "Bank-LC"
    },
    swoobat: {
        num: 528,
        species: "Swoobat",
        types: ["Psychic", "Flying"],
        baseStats: {
            hp: 67,
            atk: 57,
            def: 55,
            spa: 77,
            spd: 55,
            spe: 114
        },
        abilities: {
            "0": "Unaware",
            "1": "Klutz",
            H: "Simple"
        },
        heightm: 0.9,
        weightkg: 10.5,
        color: "Blue",
        prevo: "woobat",
        evoLevel: 2,
        eggGroups: ["Flying", "Field"],
        tier: "Bank"
    },
    drilbur: {
        num: 529,
        species: "Drilbur",
        types: ["Ground"],
        baseStats: {
            hp: 60,
            atk: 85,
            def: 40,
            spa: 30,
            spd: 45,
            spe: 68
        },
        abilities: {
            "0": "Sand Rush",
            "1": "Sand Force",
            H: "Mold Breaker"
        },
        heightm: 0.3,
        weightkg: 8.5,
        color: "Gray",
        evos: ["excadrill"],
        eggGroups: ["Field"],
        tier: "Bank-LC"
    },
    excadrill: {
        num: 530,
        species: "Excadrill",
        types: ["Ground", "Steel"],
        baseStats: {
            hp: 110,
            atk: 135,
            def: 60,
            spa: 50,
            spd: 65,
            spe: 88
        },
        abilities: {
            "0": "Sand Rush",
            "1": "Sand Force",
            H: "Mold Breaker"
        },
        heightm: 0.7,
        weightkg: 40.4,
        color: "Gray",
        prevo: "drilbur",
        evoLevel: 31,
        eggGroups: ["Field"],
        tier: "Bank"
    },
    audino: {
        num: 531,
        species: "Audino",
        types: ["Normal"],
        baseStats: {
            hp: 103,
            atk: 60,
            def: 86,
            spa: 60,
            spd: 86,
            spe: 50
        },
        abilities: {
            "0": "Healer",
            "1": "Regenerator",
            H: "Klutz"
        },
        heightm: 1.1,
        weightkg: 31,
        color: "Pink",
        eggGroups: ["Fairy"],
        otherFormes: ["audinomega"],
        tier: "Bank"
    },
    audinomega: {
        num: 531,
        species: "Audino-Mega",
        baseSpecies: "Audino",
        forme: "Mega",
        formeLetter: "M",
        types: ["Normal", "Fairy"],
        baseStats: {
            hp: 103,
            atk: 60,
            def: 126,
            spa: 80,
            spd: 126,
            spe: 50
        },
        abilities: {
            "0": "Healer"
        },
        heightm: 1.5,
        weightkg: 32,
        color: "Pink",
        eggGroups: ["Fairy"],
        tier: "Unreleased",
        requiredItem: "Audinite"
    },
    timburr: {
        num: 532,
        species: "Timburr",
        types: ["Fighting"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 75,
            atk: 80,
            def: 55,
            spa: 25,
            spd: 35,
            spe: 35
        },
        abilities: {
            "0": "Guts",
            "1": "Sheer Force",
            H: "Iron Fist"
        },
        heightm: 0.6,
        weightkg: 12.5,
        color: "Gray",
        evos: ["gurdurr"],
        eggGroups: ["Human-Like"],
        tier: "LC"
    },
    gurdurr: {
        num: 533,
        species: "Gurdurr",
        types: ["Fighting"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 85,
            atk: 105,
            def: 85,
            spa: 40,
            spd: 50,
            spe: 40
        },
        abilities: {
            "0": "Guts",
            "1": "Sheer Force",
            H: "Iron Fist"
        },
        heightm: 1.2,
        weightkg: 40,
        color: "Gray",
        prevo: "timburr",
        evos: ["conkeldurr"],
        evoLevel: 25,
        eggGroups: ["Human-Like"],
        tier: "New"
    },
    conkeldurr: {
        num: 534,
        species: "Conkeldurr",
        types: ["Fighting"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 105,
            atk: 140,
            def: 95,
            spa: 55,
            spd: 65,
            spe: 45
        },
        abilities: {
            "0": "Guts",
            "1": "Sheer Force",
            H: "Iron Fist"
        },
        heightm: 1.4,
        weightkg: 87,
        color: "Brown",
        prevo: "gurdurr",
        evoLevel: 25,
        eggGroups: ["Human-Like"],
        tier: "New"
    },
    tympole: {
        num: 535,
        species: "Tympole",
        types: ["Water"],
        baseStats: {
            hp: 50,
            atk: 50,
            def: 40,
            spa: 50,
            spd: 40,
            spe: 64
        },
        abilities: {
            "0": "Swift Swim",
            "1": "Hydration",
            H: "Water Absorb"
        },
        heightm: 0.5,
        weightkg: 4.5,
        color: "Blue",
        evos: ["palpitoad"],
        eggGroups: ["Water 1"],
        tier: "Bank-LC"
    },
    palpitoad: {
        num: 536,
        species: "Palpitoad",
        types: ["Water", "Ground"],
        baseStats: {
            hp: 75,
            atk: 65,
            def: 55,
            spa: 65,
            spd: 55,
            spe: 69
        },
        abilities: {
            "0": "Swift Swim",
            "1": "Hydration",
            H: "Water Absorb"
        },
        heightm: 0.8,
        weightkg: 17,
        color: "Blue",
        prevo: "tympole",
        evos: ["seismitoad"],
        evoLevel: 25,
        eggGroups: ["Water 1"],
        tier: "Bank-NFE"
    },
    seismitoad: {
        num: 537,
        species: "Seismitoad",
        types: ["Water", "Ground"],
        baseStats: {
            hp: 105,
            atk: 95,
            def: 75,
            spa: 85,
            spd: 75,
            spe: 74
        },
        abilities: {
            "0": "Swift Swim",
            "1": "Poison Touch",
            H: "Water Absorb"
        },
        heightm: 1.5,
        weightkg: 62,
        color: "Blue",
        prevo: "palpitoad",
        evoLevel: 36,
        eggGroups: ["Water 1"],
        tier: "Bank"
    },
    throh: {
        num: 538,
        species: "Throh",
        types: ["Fighting"],
        gender: "M",
        baseStats: {
            hp: 120,
            atk: 100,
            def: 85,
            spa: 30,
            spd: 85,
            spe: 45
        },
        abilities: {
            "0": "Guts",
            "1": "Inner Focus",
            H: "Mold Breaker"
        },
        heightm: 1.3,
        weightkg: 55.5,
        color: "Red",
        eggGroups: ["Human-Like"],
        tier: "Bank"
    },
    sawk: {
        num: 539,
        species: "Sawk",
        types: ["Fighting"],
        gender: "M",
        baseStats: {
            hp: 75,
            atk: 125,
            def: 75,
            spa: 30,
            spd: 75,
            spe: 85
        },
        abilities: {
            "0": "Sturdy",
            "1": "Inner Focus",
            H: "Mold Breaker"
        },
        heightm: 1.4,
        weightkg: 51,
        color: "Blue",
        eggGroups: ["Human-Like"],
        tier: "Bank"
    },
    sewaddle: {
        num: 540,
        species: "Sewaddle",
        types: ["Bug", "Grass"],
        baseStats: {
            hp: 45,
            atk: 53,
            def: 70,
            spa: 40,
            spd: 60,
            spe: 42
        },
        abilities: {
            "0": "Swarm",
            "1": "Chlorophyll",
            H: "Overcoat"
        },
        heightm: 0.3,
        weightkg: 2.5,
        color: "Yellow",
        evos: ["swadloon"],
        eggGroups: ["Bug"],
        tier: "LC"
    },
    swadloon: {
        num: 541,
        species: "Swadloon",
        types: ["Bug", "Grass"],
        baseStats: {
            hp: 55,
            atk: 63,
            def: 90,
            spa: 50,
            spd: 80,
            spe: 42
        },
        abilities: {
            "0": "Leaf Guard",
            "1": "Chlorophyll",
            H: "Overcoat"
        },
        heightm: 0.5,
        weightkg: 7.3,
        color: "Green",
        prevo: "sewaddle",
        evos: ["leavanny"],
        evoLevel: 20,
        eggGroups: ["Bug"],
        tier: "NFE"
    },
    leavanny: {
        num: 542,
        species: "Leavanny",
        types: ["Bug", "Grass"],
        baseStats: {
            hp: 75,
            atk: 103,
            def: 80,
            spa: 70,
            spd: 80,
            spe: 92
        },
        abilities: {
            "0": "Swarm",
            "1": "Chlorophyll",
            H: "Overcoat"
        },
        heightm: 1.2,
        weightkg: 20.5,
        color: "Yellow",
        prevo: "swadloon",
        evoLevel: 21,
        eggGroups: ["Bug"],
        tier: "New"
    },
    venipede: {
        num: 543,
        species: "Venipede",
        types: ["Bug", "Poison"],
        baseStats: {
            hp: 30,
            atk: 45,
            def: 59,
            spa: 30,
            spd: 39,
            spe: 57
        },
        abilities: {
            "0": "Poison Point",
            "1": "Swarm",
            H: "Speed Boost"
        },
        heightm: 0.4,
        weightkg: 5.3,
        color: "Red",
        evos: ["whirlipede"],
        eggGroups: ["Bug"],
        tier: "LC"
    },
    whirlipede: {
        num: 544,
        species: "Whirlipede",
        types: ["Bug", "Poison"],
        baseStats: {
            hp: 40,
            atk: 55,
            def: 99,
            spa: 40,
            spd: 79,
            spe: 47
        },
        abilities: {
            "0": "Poison Point",
            "1": "Swarm",
            H: "Speed Boost"
        },
        heightm: 1.2,
        weightkg: 58.5,
        color: "Gray",
        prevo: "venipede",
        evos: ["scolipede"],
        evoLevel: 22,
        eggGroups: ["Bug"],
        tier: "NFE"
    },
    scolipede: {
        num: 545,
        species: "Scolipede",
        types: ["Bug", "Poison"],
        baseStats: {
            hp: 60,
            atk: 100,
            def: 89,
            spa: 55,
            spd: 69,
            spe: 112
        },
        abilities: {
            "0": "Poison Point",
            "1": "Swarm",
            H: "Speed Boost"
        },
        heightm: 2.5,
        weightkg: 200.5,
        color: "Red",
        prevo: "whirlipede",
        evoLevel: 30,
        eggGroups: ["Bug"],
        tier: "New"
    },
    cottonee: {
        num: 546,
        species: "Cottonee",
        types: ["Grass", "Fairy"],
        baseStats: {
            hp: 40,
            atk: 27,
            def: 60,
            spa: 37,
            spd: 50,
            spe: 66
        },
        abilities: {
            "0": "Prankster",
            "1": "Infiltrator",
            H: "Chlorophyll"
        },
        heightm: 0.3,
        weightkg: 0.6,
        color: "Green",
        evos: ["whimsicott"],
        eggGroups: ["Fairy", "Grass"],
        tier: "LC"
    },
    whimsicott: {
        num: 547,
        species: "Whimsicott",
        types: ["Grass", "Fairy"],
        baseStats: {
            hp: 60,
            atk: 67,
            def: 85,
            spa: 77,
            spd: 75,
            spe: 116
        },
        abilities: {
            "0": "Prankster",
            "1": "Infiltrator",
            H: "Chlorophyll"
        },
        heightm: 0.7,
        weightkg: 6.6,
        color: "Green",
        prevo: "cottonee",
        evoLevel: 1,
        eggGroups: ["Fairy", "Grass"],
        tier: "New"
    },
    petilil: {
        num: 548,
        species: "Petilil",
        types: ["Grass"],
        gender: "F",
        baseStats: {
            hp: 45,
            atk: 35,
            def: 50,
            spa: 70,
            spd: 50,
            spe: 30
        },
        abilities: {
            "0": "Chlorophyll",
            "1": "Own Tempo",
            H: "Leaf Guard"
        },
        heightm: 0.5,
        weightkg: 6.6,
        color: "Green",
        evos: ["lilligant"],
        eggGroups: ["Grass"],
        tier: "LC"
    },
    lilligant: {
        num: 549,
        species: "Lilligant",
        types: ["Grass"],
        gender: "F",
        baseStats: {
            hp: 70,
            atk: 60,
            def: 75,
            spa: 110,
            spd: 75,
            spe: 90
        },
        abilities: {
            "0": "Chlorophyll",
            "1": "Own Tempo",
            H: "Leaf Guard"
        },
        heightm: 1.1,
        weightkg: 16.3,
        color: "Green",
        prevo: "petilil",
        evoLevel: 1,
        eggGroups: ["Grass"],
        tier: "New"
    },
    basculin: {
        num: 550,
        species: "Basculin",
        baseForme: "Red-Striped",
        types: ["Water"],
        baseStats: {
            hp: 70,
            atk: 92,
            def: 65,
            spa: 80,
            spd: 55,
            spe: 98
        },
        abilities: {
            "0": "Reckless",
            "1": "Adaptability",
            H: "Mold Breaker"
        },
        heightm: 1,
        weightkg: 18,
        color: "Green",
        eggGroups: ["Water 2"],
        otherFormes: ["basculinbluestriped"],
        tier: "Bank"
    },
    basculinbluestriped: {
        num: 550,
        species: "Basculin-Blue-Striped",
        baseSpecies: "Basculin",
        forme: "Blue-Striped",
        formeLetter: "B",
        types: ["Water"],
        baseStats: {
            hp: 70,
            atk: 92,
            def: 65,
            spa: 80,
            spd: 55,
            spe: 98
        },
        abilities: {
            "0": "Rock Head",
            "1": "Adaptability",
            H: "Mold Breaker"
        },
        heightm: 1,
        weightkg: 18,
        color: "Green",
        eggGroups: ["Water 2"],
        tier: "Bank"
    },
    sandile: {
        num: 551,
        species: "Sandile",
        types: ["Ground", "Dark"],
        baseStats: {
            hp: 50,
            atk: 72,
            def: 35,
            spa: 35,
            spd: 35,
            spe: 65
        },
        abilities: {
            "0": "Intimidate",
            "1": "Moxie",
            H: "Anger Point"
        },
        heightm: 0.7,
        weightkg: 15.2,
        color: "Brown",
        evos: ["krokorok"],
        eggGroups: ["Field"],
        tier: "LC"
    },
    krokorok: {
        num: 552,
        species: "Krokorok",
        types: ["Ground", "Dark"],
        baseStats: {
            hp: 60,
            atk: 82,
            def: 45,
            spa: 45,
            spd: 45,
            spe: 74
        },
        abilities: {
            "0": "Intimidate",
            "1": "Moxie",
            H: "Anger Point"
        },
        heightm: 1,
        weightkg: 33.4,
        color: "Brown",
        prevo: "sandile",
        evos: ["krookodile"],
        evoLevel: 29,
        eggGroups: ["Field"],
        tier: "NFE"
    },
    krookodile: {
        num: 553,
        species: "Krookodile",
        types: ["Ground", "Dark"],
        baseStats: {
            hp: 95,
            atk: 117,
            def: 80,
            spa: 65,
            spd: 70,
            spe: 92
        },
        abilities: {
            "0": "Intimidate",
            "1": "Moxie",
            H: "Anger Point"
        },
        heightm: 1.5,
        weightkg: 96.3,
        color: "Red",
        prevo: "krokorok",
        evoLevel: 40,
        eggGroups: ["Field"],
        tier: "New"
    },
    darumaka: {
        num: 554,
        species: "Darumaka",
        types: ["Fire"],
        baseStats: {
            hp: 70,
            atk: 90,
            def: 45,
            spa: 15,
            spd: 45,
            spe: 50
        },
        abilities: {
            "0": "Hustle",
            H: "Inner Focus"
        },
        heightm: 0.6,
        weightkg: 37.5,
        color: "Red",
        evos: ["darmanitan"],
        eggGroups: ["Field"],
        tier: "Bank-LC"
    },
    darmanitan: {
        num: 555,
        species: "Darmanitan",
        baseForme: "Standard",
        types: ["Fire"],
        baseStats: {
            hp: 105,
            atk: 140,
            def: 55,
            spa: 30,
            spd: 55,
            spe: 95
        },
        abilities: {
            "0": "Sheer Force",
            H: "Zen Mode"
        },
        heightm: 1.3,
        weightkg: 92.9,
        color: "Red",
        prevo: "darumaka",
        evoLevel: 35,
        eggGroups: ["Field"],
        otherFormes: ["darmanitanzen"],
        tier: "Bank"
    },
    darmanitanzen: {
        num: 555,
        species: "Darmanitan-Zen",
        baseSpecies: "Darmanitan",
        forme: "Zen",
        formeLetter: "Z",
        types: ["Fire", "Psychic"],
        baseStats: {
            hp: 105,
            atk: 30,
            def: 105,
            spa: 140,
            spd: 105,
            spe: 55
        },
        abilities: {
            "0": "Zen Mode"
        },
        heightm: 1.3,
        weightkg: 92.9,
        color: "Red",
        prevo: "darumaka",
        evoLevel: 35,
        eggGroups: ["Field"]
    },
    maractus: {
        num: 556,
        species: "Maractus",
        types: ["Grass"],
        baseStats: {
            hp: 75,
            atk: 86,
            def: 67,
            spa: 106,
            spd: 67,
            spe: 60
        },
        abilities: {
            "0": "Water Absorb",
            "1": "Chlorophyll",
            H: "Storm Drain"
        },
        heightm: 1,
        weightkg: 28,
        color: "Green",
        eggGroups: ["Grass"],
        tier: "Bank"
    },
    dwebble: {
        num: 557,
        species: "Dwebble",
        types: ["Bug", "Rock"],
        baseStats: {
            hp: 50,
            atk: 65,
            def: 85,
            spa: 35,
            spd: 35,
            spe: 55
        },
        abilities: {
            "0": "Sturdy",
            "1": "Shell Armor",
            H: "Weak Armor"
        },
        heightm: 0.3,
        weightkg: 14.5,
        color: "Red",
        evos: ["crustle"],
        eggGroups: ["Bug", "Mineral"],
        tier: "Bank-LC"
    },
    crustle: {
        num: 558,
        species: "Crustle",
        types: ["Bug", "Rock"],
        baseStats: {
            hp: 70,
            atk: 105,
            def: 125,
            spa: 65,
            spd: 75,
            spe: 45
        },
        abilities: {
            "0": "Sturdy",
            "1": "Shell Armor",
            H: "Weak Armor"
        },
        heightm: 1.4,
        weightkg: 200,
        color: "Red",
        prevo: "dwebble",
        evoLevel: 34,
        eggGroups: ["Bug", "Mineral"],
        tier: "Bank"
    },
    scraggy: {
        num: 559,
        species: "Scraggy",
        types: ["Dark", "Fighting"],
        baseStats: {
            hp: 50,
            atk: 75,
            def: 70,
            spa: 35,
            spd: 70,
            spe: 48
        },
        abilities: {
            "0": "Shed Skin",
            "1": "Moxie",
            H: "Intimidate"
        },
        heightm: 0.6,
        weightkg: 11.8,
        color: "Yellow",
        evos: ["scrafty"],
        eggGroups: ["Field", "Dragon"],
        tier: "Bank-LC"
    },
    scrafty: {
        num: 560,
        species: "Scrafty",
        types: ["Dark", "Fighting"],
        baseStats: {
            hp: 65,
            atk: 90,
            def: 115,
            spa: 45,
            spd: 115,
            spe: 58
        },
        abilities: {
            "0": "Shed Skin",
            "1": "Moxie",
            H: "Intimidate"
        },
        heightm: 1.1,
        weightkg: 30,
        color: "Red",
        prevo: "scraggy",
        evoLevel: 39,
        eggGroups: ["Field", "Dragon"],
        tier: "Bank"
    },
    sigilyph: {
        num: 561,
        species: "Sigilyph",
        types: ["Psychic", "Flying"],
        baseStats: {
            hp: 72,
            atk: 58,
            def: 80,
            spa: 103,
            spd: 80,
            spe: 97
        },
        abilities: {
            "0": "Wonder Skin",
            "1": "Magic Guard",
            H: "Tinted Lens"
        },
        heightm: 1.4,
        weightkg: 14,
        color: "Black",
        eggGroups: ["Flying"],
        tier: "Bank"
    },
    yamask: {
        num: 562,
        species: "Yamask",
        types: ["Ghost"],
        baseStats: {
            hp: 38,
            atk: 30,
            def: 85,
            spa: 55,
            spd: 65,
            spe: 30
        },
        abilities: {
            "0": "Mummy"
        },
        heightm: 0.5,
        weightkg: 1.5,
        color: "Black",
        evos: ["cofagrigus"],
        eggGroups: ["Mineral", "Amorphous"],
        tier: "Bank-LC"
    },
    cofagrigus: {
        num: 563,
        species: "Cofagrigus",
        types: ["Ghost"],
        baseStats: {
            hp: 58,
            atk: 50,
            def: 145,
            spa: 95,
            spd: 105,
            spe: 30
        },
        abilities: {
            "0": "Mummy"
        },
        heightm: 1.7,
        weightkg: 76.5,
        color: "Yellow",
        prevo: "yamask",
        evoLevel: 34,
        eggGroups: ["Mineral", "Amorphous"],
        tier: "Bank"
    },
    tirtouga: {
        num: 564,
        species: "Tirtouga",
        types: ["Water", "Rock"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 54,
            atk: 78,
            def: 103,
            spa: 53,
            spd: 45,
            spe: 22
        },
        abilities: {
            "0": "Solid Rock",
            "1": "Sturdy",
            H: "Swift Swim"
        },
        heightm: 0.7,
        weightkg: 16.5,
        color: "Blue",
        evos: ["carracosta"],
        eggGroups: ["Water 1", "Water 3"],
        tier: "LC"
    },
    carracosta: {
        num: 565,
        species: "Carracosta",
        types: ["Water", "Rock"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 74,
            atk: 108,
            def: 133,
            spa: 83,
            spd: 65,
            spe: 32
        },
        abilities: {
            "0": "Solid Rock",
            "1": "Sturdy",
            H: "Swift Swim"
        },
        heightm: 1.2,
        weightkg: 81,
        color: "Blue",
        prevo: "tirtouga",
        evoLevel: 37,
        eggGroups: ["Water 1", "Water 3"],
        tier: "New"
    },
    archen: {
        num: 566,
        species: "Archen",
        types: ["Rock", "Flying"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 55,
            atk: 112,
            def: 45,
            spa: 74,
            spd: 45,
            spe: 70
        },
        abilities: {
            "0": "Defeatist"
        },
        heightm: 0.5,
        weightkg: 9.5,
        color: "Yellow",
        evos: ["archeops"],
        eggGroups: ["Flying", "Water 3"],
        tier: "LC"
    },
    archeops: {
        num: 567,
        species: "Archeops",
        types: ["Rock", "Flying"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 75,
            atk: 140,
            def: 65,
            spa: 112,
            spd: 65,
            spe: 110
        },
        abilities: {
            "0": "Defeatist"
        },
        heightm: 1.4,
        weightkg: 32,
        color: "Yellow",
        prevo: "archen",
        evoLevel: 37,
        eggGroups: ["Flying", "Water 3"],
        tier: "New"
    },
    trubbish: {
        num: 568,
        species: "Trubbish",
        types: ["Poison"],
        baseStats: {
            hp: 50,
            atk: 50,
            def: 62,
            spa: 40,
            spd: 62,
            spe: 65
        },
        abilities: {
            "0": "Stench",
            "1": "Sticky Hold",
            H: "Aftermath"
        },
        heightm: 0.6,
        weightkg: 31,
        color: "Green",
        evos: ["garbodor"],
        eggGroups: ["Mineral"],
        tier: "LC"
    },
    garbodor: {
        num: 569,
        species: "Garbodor",
        types: ["Poison"],
        baseStats: {
            hp: 80,
            atk: 95,
            def: 82,
            spa: 60,
            spd: 82,
            spe: 75
        },
        abilities: {
            "0": "Stench",
            "1": "Weak Armor",
            H: "Aftermath"
        },
        heightm: 1.9,
        weightkg: 107.3,
        color: "Green",
        prevo: "trubbish",
        evoLevel: 36,
        eggGroups: ["Mineral"],
        tier: "New"
    },
    zorua: {
        num: 570,
        species: "Zorua",
        types: ["Dark"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 40,
            atk: 65,
            def: 40,
            spa: 80,
            spd: 40,
            spe: 65
        },
        abilities: {
            "0": "Illusion"
        },
        heightm: 0.7,
        weightkg: 12.5,
        color: "Gray",
        evos: ["zoroark"],
        eggGroups: ["Field"],
        tier: "Bank-LC"
    },
    zoroark: {
        num: 571,
        species: "Zoroark",
        types: ["Dark"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 60,
            atk: 105,
            def: 60,
            spa: 120,
            spd: 60,
            spe: 105
        },
        abilities: {
            "0": "Illusion"
        },
        heightm: 1.6,
        weightkg: 81.1,
        color: "Gray",
        prevo: "zorua",
        evoLevel: 30,
        eggGroups: ["Field"],
        tier: "Bank"
    },
    minccino: {
        num: 572,
        species: "Minccino",
        types: ["Normal"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 55,
            atk: 50,
            def: 40,
            spa: 40,
            spd: 40,
            spe: 75
        },
        abilities: {
            "0": "Cute Charm",
            "1": "Technician",
            H: "Skill Link"
        },
        heightm: 0.4,
        weightkg: 5.8,
        color: "Gray",
        evos: ["cinccino"],
        eggGroups: ["Field"],
        tier: "Bank-LC"
    },
    cinccino: {
        num: 573,
        species: "Cinccino",
        types: ["Normal"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 75,
            atk: 95,
            def: 60,
            spa: 65,
            spd: 60,
            spe: 115
        },
        abilities: {
            "0": "Cute Charm",
            "1": "Technician",
            H: "Skill Link"
        },
        heightm: 0.5,
        weightkg: 7.5,
        color: "Gray",
        prevo: "minccino",
        evoLevel: 1,
        eggGroups: ["Field"],
        tier: "Bank"
    },
    gothita: {
        num: 574,
        species: "Gothita",
        types: ["Psychic"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 45,
            atk: 30,
            def: 50,
            spa: 55,
            spd: 65,
            spe: 45
        },
        abilities: {
            "0": "Frisk",
            "1": "Competitive",
            H: "Shadow Tag"
        },
        heightm: 0.4,
        weightkg: 5.8,
        color: "Purple",
        evos: ["gothorita"],
        eggGroups: ["Human-Like"],
        tier: "LC"
    },
    gothorita: {
        num: 575,
        species: "Gothorita",
        types: ["Psychic"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 60,
            atk: 45,
            def: 70,
            spa: 75,
            spd: 85,
            spe: 55
        },
        abilities: {
            "0": "Frisk",
            "1": "Competitive",
            H: "Shadow Tag"
        },
        heightm: 0.7,
        weightkg: 18,
        color: "Purple",
        prevo: "gothita",
        evos: ["gothitelle"],
        evoLevel: 32,
        eggGroups: ["Human-Like"],
        tier: "NFE"
    },
    gothitelle: {
        num: 576,
        species: "Gothitelle",
        types: ["Psychic"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 70,
            atk: 55,
            def: 95,
            spa: 95,
            spd: 110,
            spe: 65
        },
        abilities: {
            "0": "Frisk",
            "1": "Competitive",
            H: "Shadow Tag"
        },
        heightm: 1.5,
        weightkg: 44,
        color: "Purple",
        prevo: "gothorita",
        evoLevel: 41,
        eggGroups: ["Human-Like"],
        tier: "New"
    },
    solosis: {
        num: 577,
        species: "Solosis",
        types: ["Psychic"],
        baseStats: {
            hp: 45,
            atk: 30,
            def: 40,
            spa: 105,
            spd: 50,
            spe: 20
        },
        abilities: {
            "0": "Overcoat",
            "1": "Magic Guard",
            H: "Regenerator"
        },
        heightm: 0.3,
        weightkg: 1,
        color: "Green",
        evos: ["duosion"],
        eggGroups: ["Amorphous"],
        tier: "LC"
    },
    duosion: {
        num: 578,
        species: "Duosion",
        types: ["Psychic"],
        baseStats: {
            hp: 65,
            atk: 40,
            def: 50,
            spa: 125,
            spd: 60,
            spe: 30
        },
        abilities: {
            "0": "Overcoat",
            "1": "Magic Guard",
            H: "Regenerator"
        },
        heightm: 0.6,
        weightkg: 8,
        color: "Green",
        prevo: "solosis",
        evos: ["reuniclus"],
        evoLevel: 32,
        eggGroups: ["Amorphous"],
        tier: "NFE"
    },
    reuniclus: {
        num: 579,
        species: "Reuniclus",
        types: ["Psychic"],
        baseStats: {
            hp: 110,
            atk: 65,
            def: 75,
            spa: 125,
            spd: 85,
            spe: 30
        },
        abilities: {
            "0": "Overcoat",
            "1": "Magic Guard",
            H: "Regenerator"
        },
        heightm: 1,
        weightkg: 20.1,
        color: "Green",
        prevo: "duosion",
        evoLevel: 41,
        eggGroups: ["Amorphous"],
        tier: "New"
    },
    ducklett: {
        num: 580,
        species: "Ducklett",
        types: ["Water", "Flying"],
        baseStats: {
            hp: 62,
            atk: 44,
            def: 50,
            spa: 44,
            spd: 50,
            spe: 55
        },
        abilities: {
            "0": "Keen Eye",
            "1": "Big Pecks",
            H: "Hydration"
        },
        heightm: 0.5,
        weightkg: 5.5,
        color: "Blue",
        evos: ["swanna"],
        eggGroups: ["Water 1", "Flying"],
        tier: "Bank-LC"
    },
    swanna: {
        num: 581,
        species: "Swanna",
        types: ["Water", "Flying"],
        baseStats: {
            hp: 75,
            atk: 87,
            def: 63,
            spa: 87,
            spd: 63,
            spe: 98
        },
        abilities: {
            "0": "Keen Eye",
            "1": "Big Pecks",
            H: "Hydration"
        },
        heightm: 1.3,
        weightkg: 24.2,
        color: "White",
        prevo: "ducklett",
        evoLevel: 35,
        eggGroups: ["Water 1", "Flying"],
        tier: "Bank"
    },
    vanillite: {
        num: 582,
        species: "Vanillite",
        types: ["Ice"],
        baseStats: {
            hp: 36,
            atk: 50,
            def: 50,
            spa: 65,
            spd: 60,
            spe: 44
        },
        abilities: {
            "0": "Ice Body",
            "1": "Snow Cloak",
            H: "Weak Armor"
        },
        heightm: 0.4,
        weightkg: 5.7,
        color: "White",
        evos: ["vanillish"],
        eggGroups: ["Mineral"],
        tier: "LC"
    },
    vanillish: {
        num: 583,
        species: "Vanillish",
        types: ["Ice"],
        baseStats: {
            hp: 51,
            atk: 65,
            def: 65,
            spa: 80,
            spd: 75,
            spe: 59
        },
        abilities: {
            "0": "Ice Body",
            "1": "Snow Cloak",
            H: "Weak Armor"
        },
        heightm: 1.1,
        weightkg: 41,
        color: "White",
        prevo: "vanillite",
        evos: ["vanilluxe"],
        evoLevel: 35,
        eggGroups: ["Mineral"],
        tier: "NFE"
    },
    vanilluxe: {
        num: 584,
        species: "Vanilluxe",
        types: ["Ice"],
        baseStats: {
            hp: 71,
            atk: 95,
            def: 85,
            spa: 110,
            spd: 95,
            spe: 79
        },
        abilities: {
            "0": "Ice Body",
            "1": "Snow Warning",
            H: "Weak Armor"
        },
        heightm: 1.3,
        weightkg: 57.5,
        color: "White",
        prevo: "vanillish",
        evoLevel: 47,
        eggGroups: ["Mineral"],
        tier: "New"
    },
    deerling: {
        num: 585,
        species: "Deerling",
        baseForme: "Spring",
        types: ["Normal", "Grass"],
        baseStats: {
            hp: 60,
            atk: 60,
            def: 50,
            spa: 40,
            spd: 50,
            spe: 75
        },
        abilities: {
            "0": "Chlorophyll",
            "1": "Sap Sipper",
            H: "Serene Grace"
        },
        heightm: 0.6,
        weightkg: 19.5,
        color: "Yellow",
        evos: ["sawsbuck"],
        eggGroups: ["Field"],
        otherForms: ["deerlingsummer", "deerlingautumn", "deerlingwinter"],
        tier: "Bank-LC"
    },
    sawsbuck: {
        num: 586,
        species: "Sawsbuck",
        baseForme: "Spring",
        types: ["Normal", "Grass"],
        baseStats: {
            hp: 80,
            atk: 100,
            def: 70,
            spa: 60,
            spd: 70,
            spe: 95
        },
        abilities: {
            "0": "Chlorophyll",
            "1": "Sap Sipper",
            H: "Serene Grace"
        },
        heightm: 1.9,
        weightkg: 92.5,
        color: "Brown",
        prevo: "deerling",
        evoLevel: 34,
        eggGroups: ["Field"],
        otherForms: ["sawsbucksummer", "sawsbuckautumn", "sawsbuckwinter"],
        tier: "Bank"
    },
    emolga: {
        num: 587,
        species: "Emolga",
        types: ["Electric", "Flying"],
        baseStats: {
            hp: 55,
            atk: 75,
            def: 60,
            spa: 75,
            spd: 60,
            spe: 103
        },
        abilities: {
            "0": "Static",
            H: "Motor Drive"
        },
        heightm: 0.4,
        weightkg: 5,
        color: "White",
        eggGroups: ["Field"],
        tier: "New"
    },
    karrablast: {
        num: 588,
        species: "Karrablast",
        types: ["Bug"],
        baseStats: {
            hp: 50,
            atk: 75,
            def: 45,
            spa: 40,
            spd: 45,
            spe: 60
        },
        abilities: {
            "0": "Swarm",
            "1": "Shed Skin",
            H: "No Guard"
        },
        heightm: 0.5,
        weightkg: 5.9,
        color: "Blue",
        evos: ["escavalier"],
        eggGroups: ["Bug"],
        tier: "Bank-LC"
    },
    escavalier: {
        num: 589,
        species: "Escavalier",
        types: ["Bug", "Steel"],
        baseStats: {
            hp: 70,
            atk: 135,
            def: 105,
            spa: 60,
            spd: 105,
            spe: 20
        },
        abilities: {
            "0": "Swarm",
            "1": "Shell Armor",
            H: "Overcoat"
        },
        heightm: 1,
        weightkg: 33,
        color: "Gray",
        prevo: "karrablast",
        evoLevel: 1,
        eggGroups: ["Bug"],
        tier: "Bank"
    },
    foongus: {
        num: 590,
        species: "Foongus",
        types: ["Grass", "Poison"],
        baseStats: {
            hp: 69,
            atk: 55,
            def: 45,
            spa: 55,
            spd: 55,
            spe: 15
        },
        abilities: {
            "0": "Effect Spore",
            H: "Regenerator"
        },
        heightm: 0.2,
        weightkg: 1,
        color: "White",
        evos: ["amoonguss"],
        eggGroups: ["Grass"],
        tier: "Bank-LC"
    },
    amoonguss: {
        num: 591,
        species: "Amoonguss",
        types: ["Grass", "Poison"],
        baseStats: {
            hp: 114,
            atk: 85,
            def: 70,
            spa: 85,
            spd: 80,
            spe: 30
        },
        abilities: {
            "0": "Effect Spore",
            H: "Regenerator"
        },
        heightm: 0.6,
        weightkg: 10.5,
        color: "White",
        prevo: "foongus",
        evoLevel: 39,
        eggGroups: ["Grass"],
        tier: "Bank"
    },
    frillish: {
        num: 592,
        species: "Frillish",
        types: ["Water", "Ghost"],
        baseStats: {
            hp: 55,
            atk: 40,
            def: 50,
            spa: 65,
            spd: 85,
            spe: 40
        },
        abilities: {
            "0": "Water Absorb",
            "1": "Cursed Body",
            H: "Damp"
        },
        heightm: 1.2,
        weightkg: 33,
        color: "White",
        evos: ["jellicent"],
        eggGroups: ["Amorphous"],
        tier: "Bank-LC"
    },
    jellicent: {
        num: 593,
        species: "Jellicent",
        types: ["Water", "Ghost"],
        baseStats: {
            hp: 100,
            atk: 60,
            def: 70,
            spa: 85,
            spd: 105,
            spe: 60
        },
        abilities: {
            "0": "Water Absorb",
            "1": "Cursed Body",
            H: "Damp"
        },
        heightm: 2.2,
        weightkg: 135,
        color: "White",
        prevo: "frillish",
        evoLevel: 40,
        eggGroups: ["Amorphous"],
        tier: "Bank"
    },
    alomomola: {
        num: 594,
        species: "Alomomola",
        types: ["Water"],
        baseStats: {
            hp: 165,
            atk: 75,
            def: 80,
            spa: 40,
            spd: 45,
            spe: 65
        },
        abilities: {
            "0": "Healer",
            "1": "Hydration",
            H: "Regenerator"
        },
        heightm: 1.2,
        weightkg: 31.6,
        color: "Pink",
        eggGroups: ["Water 1", "Water 2"],
        tier: "New"
    },
    joltik: {
        num: 595,
        species: "Joltik",
        types: ["Bug", "Electric"],
        baseStats: {
            hp: 50,
            atk: 47,
            def: 50,
            spa: 57,
            spd: 50,
            spe: 65
        },
        abilities: {
            "0": "Compound Eyes",
            "1": "Unnerve",
            H: "Swarm"
        },
        heightm: 0.1,
        weightkg: 0.6,
        color: "Yellow",
        evos: ["galvantula"],
        eggGroups: ["Bug"],
        tier: "Bank-LC"
    },
    galvantula: {
        num: 596,
        species: "Galvantula",
        types: ["Bug", "Electric"],
        baseStats: {
            hp: 70,
            atk: 77,
            def: 60,
            spa: 97,
            spd: 60,
            spe: 108
        },
        abilities: {
            "0": "Compound Eyes",
            "1": "Unnerve",
            H: "Swarm"
        },
        heightm: 0.8,
        weightkg: 14.3,
        color: "Yellow",
        prevo: "joltik",
        evoLevel: 36,
        eggGroups: ["Bug"],
        tier: "Bank"
    },
    ferroseed: {
        num: 597,
        species: "Ferroseed",
        types: ["Grass", "Steel"],
        baseStats: {
            hp: 44,
            atk: 50,
            def: 91,
            spa: 24,
            spd: 86,
            spe: 10
        },
        abilities: {
            "0": "Iron Barbs"
        },
        heightm: 0.6,
        weightkg: 18.8,
        color: "Gray",
        evos: ["ferrothorn"],
        eggGroups: ["Grass", "Mineral"],
        tier: "Bank"
    },
    ferrothorn: {
        num: 598,
        species: "Ferrothorn",
        types: ["Grass", "Steel"],
        baseStats: {
            hp: 74,
            atk: 94,
            def: 131,
            spa: 54,
            spd: 116,
            spe: 20
        },
        abilities: {
            "0": "Iron Barbs",
            H: "Anticipation"
        },
        heightm: 1,
        weightkg: 110,
        color: "Gray",
        prevo: "ferroseed",
        evoLevel: 40,
        eggGroups: ["Grass", "Mineral"],
        tier: "Bank"
    },
    klink: {
        num: 599,
        species: "Klink",
        types: ["Steel"],
        gender: "N",
        baseStats: {
            hp: 40,
            atk: 55,
            def: 70,
            spa: 45,
            spd: 60,
            spe: 30
        },
        abilities: {
            "0": "Plus",
            "1": "Minus",
            H: "Clear Body"
        },
        heightm: 0.3,
        weightkg: 21,
        color: "Gray",
        evos: ["klang"],
        eggGroups: ["Mineral"],
        tier: "LC"
    },
    klang: {
        num: 600,
        species: "Klang",
        types: ["Steel"],
        gender: "N",
        baseStats: {
            hp: 60,
            atk: 80,
            def: 95,
            spa: 70,
            spd: 85,
            spe: 50
        },
        abilities: {
            "0": "Plus",
            "1": "Minus",
            H: "Clear Body"
        },
        heightm: 0.6,
        weightkg: 51,
        color: "Gray",
        prevo: "klink",
        evos: ["klinklang"],
        evoLevel: 38,
        eggGroups: ["Mineral"],
        tier: "NFE"
    },
    klinklang: {
        num: 601,
        species: "Klinklang",
        types: ["Steel"],
        gender: "N",
        baseStats: {
            hp: 60,
            atk: 100,
            def: 115,
            spa: 70,
            spd: 85,
            spe: 90
        },
        abilities: {
            "0": "Plus",
            "1": "Minus",
            H: "Clear Body"
        },
        heightm: 0.6,
        weightkg: 81,
        color: "Gray",
        prevo: "klang",
        evoLevel: 49,
        eggGroups: ["Mineral"],
        tier: "New"
    },
    tynamo: {
        num: 602,
        species: "Tynamo",
        types: ["Electric"],
        baseStats: {
            hp: 35,
            atk: 55,
            def: 40,
            spa: 45,
            spd: 40,
            spe: 60
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 0.2,
        weightkg: 0.3,
        color: "White",
        evos: ["eelektrik"],
        eggGroups: ["Amorphous"],
        tier: "LC"
    },
    eelektrik: {
        num: 603,
        species: "Eelektrik",
        types: ["Electric"],
        baseStats: {
            hp: 65,
            atk: 85,
            def: 70,
            spa: 75,
            spd: 70,
            spe: 40
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 1.2,
        weightkg: 22,
        color: "Blue",
        prevo: "tynamo",
        evos: ["eelektross"],
        evoLevel: 39,
        eggGroups: ["Amorphous"],
        tier: "NFE"
    },
    eelektross: {
        num: 604,
        species: "Eelektross",
        types: ["Electric"],
        baseStats: {
            hp: 85,
            atk: 115,
            def: 80,
            spa: 105,
            spd: 80,
            spe: 50
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 2.1,
        weightkg: 80.5,
        color: "Blue",
        prevo: "eelektrik",
        evoLevel: 39,
        eggGroups: ["Amorphous"],
        tier: "New"
    },
    elgyem: {
        num: 605,
        species: "Elgyem",
        types: ["Psychic"],
        baseStats: {
            hp: 55,
            atk: 55,
            def: 55,
            spa: 85,
            spd: 55,
            spe: 30
        },
        abilities: {
            "0": "Telepathy",
            "1": "Synchronize",
            H: "Analytic"
        },
        heightm: 0.5,
        weightkg: 9,
        color: "Blue",
        evos: ["beheeyem"],
        eggGroups: ["Human-Like"],
        tier: "Bank-LC"
    },
    beheeyem: {
        num: 606,
        species: "Beheeyem",
        types: ["Psychic"],
        baseStats: {
            hp: 75,
            atk: 75,
            def: 75,
            spa: 125,
            spd: 95,
            spe: 40
        },
        abilities: {
            "0": "Telepathy",
            "1": "Synchronize",
            H: "Analytic"
        },
        heightm: 1,
        weightkg: 34.5,
        color: "Brown",
        prevo: "elgyem",
        evoLevel: 42,
        eggGroups: ["Human-Like"],
        tier: "Bank"
    },
    litwick: {
        num: 607,
        species: "Litwick",
        types: ["Ghost", "Fire"],
        baseStats: {
            hp: 50,
            atk: 30,
            def: 55,
            spa: 65,
            spd: 55,
            spe: 20
        },
        abilities: {
            "0": "Flash Fire",
            "1": "Flame Body",
            H: "Infiltrator"
        },
        heightm: 0.3,
        weightkg: 3.1,
        color: "White",
        evos: ["lampent"],
        eggGroups: ["Amorphous"],
        tier: "LC"
    },
    lampent: {
        num: 608,
        species: "Lampent",
        types: ["Ghost", "Fire"],
        baseStats: {
            hp: 60,
            atk: 40,
            def: 60,
            spa: 95,
            spd: 60,
            spe: 55
        },
        abilities: {
            "0": "Flash Fire",
            "1": "Flame Body",
            H: "Infiltrator"
        },
        heightm: 0.6,
        weightkg: 13,
        color: "Black",
        prevo: "litwick",
        evos: ["chandelure"],
        evoLevel: 41,
        eggGroups: ["Amorphous"],
        tier: "NFE"
    },
    chandelure: {
        num: 609,
        species: "Chandelure",
        types: ["Ghost", "Fire"],
        baseStats: {
            hp: 60,
            atk: 55,
            def: 90,
            spa: 145,
            spd: 90,
            spe: 80
        },
        abilities: {
            "0": "Flash Fire",
            "1": "Flame Body",
            H: "Infiltrator"
        },
        heightm: 1,
        weightkg: 34.3,
        color: "Black",
        prevo: "lampent",
        evoLevel: 41,
        eggGroups: ["Amorphous"],
        tier: "New"
    },
    axew: {
        num: 610,
        species: "Axew",
        types: ["Dragon"],
        baseStats: {
            hp: 46,
            atk: 87,
            def: 60,
            spa: 30,
            spd: 40,
            spe: 57
        },
        abilities: {
            "0": "Rivalry",
            "1": "Mold Breaker",
            H: "Unnerve"
        },
        heightm: 0.6,
        weightkg: 18,
        color: "Green",
        evos: ["fraxure"],
        eggGroups: ["Monster", "Dragon"],
        tier: "LC"
    },
    fraxure: {
        num: 611,
        species: "Fraxure",
        types: ["Dragon"],
        baseStats: {
            hp: 66,
            atk: 117,
            def: 70,
            spa: 40,
            spd: 50,
            spe: 67
        },
        abilities: {
            "0": "Rivalry",
            "1": "Mold Breaker",
            H: "Unnerve"
        },
        heightm: 1,
        weightkg: 36,
        color: "Green",
        prevo: "axew",
        evos: ["haxorus"],
        evoLevel: 38,
        eggGroups: ["Monster", "Dragon"],
        tier: "NFE"
    },
    haxorus: {
        num: 612,
        species: "Haxorus",
        types: ["Dragon"],
        baseStats: {
            hp: 76,
            atk: 147,
            def: 90,
            spa: 60,
            spd: 70,
            spe: 97
        },
        abilities: {
            "0": "Rivalry",
            "1": "Mold Breaker",
            H: "Unnerve"
        },
        heightm: 1.8,
        weightkg: 105.5,
        color: "Yellow",
        prevo: "fraxure",
        evoLevel: 48,
        eggGroups: ["Monster", "Dragon"],
        tier: "New"
    },
    cubchoo: {
        num: 613,
        species: "Cubchoo",
        types: ["Ice"],
        baseStats: {
            hp: 55,
            atk: 70,
            def: 40,
            spa: 60,
            spd: 40,
            spe: 40
        },
        abilities: {
            "0": "Snow Cloak",
            "1": "Slush Rush",
            H: "Rattled"
        },
        heightm: 0.5,
        weightkg: 8.5,
        color: "White",
        evos: ["beartic"],
        eggGroups: ["Field"],
        tier: "Bank-LC"
    },
    beartic: {
        num: 614,
        species: "Beartic",
        types: ["Ice"],
        baseStats: {
            hp: 95,
            atk: 130,
            def: 80,
            spa: 70,
            spd: 80,
            spe: 50
        },
        abilities: {
            "0": "Snow Cloak",
            "1": "Slush Rush",
            H: "Swift Swim"
        },
        heightm: 2.6,
        weightkg: 260,
        color: "White",
        prevo: "cubchoo",
        evoLevel: 37,
        eggGroups: ["Field"],
        tier: "Bank"
    },
    cryogonal: {
        num: 615,
        species: "Cryogonal",
        types: ["Ice"],
        gender: "N",
        baseStats: {
            hp: 80,
            atk: 50,
            def: 50,
            spa: 95,
            spd: 135,
            spe: 105
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 1.1,
        weightkg: 148,
        color: "Blue",
        eggGroups: ["Mineral"],
        tier: "Bank"
    },
    shelmet: {
        num: 616,
        species: "Shelmet",
        types: ["Bug"],
        baseStats: {
            hp: 50,
            atk: 40,
            def: 85,
            spa: 40,
            spd: 65,
            spe: 25
        },
        abilities: {
            "0": "Hydration",
            "1": "Shell Armor",
            H: "Overcoat"
        },
        heightm: 0.4,
        weightkg: 7.7,
        color: "Red",
        evos: ["accelgor"],
        eggGroups: ["Bug"],
        tier: "Bank-LC"
    },
    accelgor: {
        num: 617,
        species: "Accelgor",
        types: ["Bug"],
        baseStats: {
            hp: 80,
            atk: 70,
            def: 40,
            spa: 100,
            spd: 60,
            spe: 145
        },
        abilities: {
            "0": "Hydration",
            "1": "Sticky Hold",
            H: "Unburden"
        },
        heightm: 0.8,
        weightkg: 25.3,
        color: "Red",
        prevo: "shelmet",
        evoLevel: 1,
        eggGroups: ["Bug"],
        tier: "Bank"
    },
    stunfisk: {
        num: 618,
        species: "Stunfisk",
        types: ["Ground", "Electric"],
        baseStats: {
            hp: 109,
            atk: 66,
            def: 84,
            spa: 81,
            spd: 99,
            spe: 32
        },
        abilities: {
            "0": "Static",
            "1": "Limber",
            H: "Sand Veil"
        },
        heightm: 0.7,
        weightkg: 11,
        color: "Brown",
        eggGroups: ["Water 1", "Amorphous"],
        tier: "Bank"
    },
    mienfoo: {
        num: 619,
        species: "Mienfoo",
        types: ["Fighting"],
        baseStats: {
            hp: 45,
            atk: 85,
            def: 50,
            spa: 55,
            spd: 50,
            spe: 65
        },
        abilities: {
            "0": "Inner Focus",
            "1": "Regenerator",
            H: "Reckless"
        },
        heightm: 0.9,
        weightkg: 20,
        color: "Yellow",
        evos: ["mienshao"],
        eggGroups: ["Field", "Human-Like"],
        tier: "Bank-LC"
    },
    mienshao: {
        num: 620,
        species: "Mienshao",
        types: ["Fighting"],
        baseStats: {
            hp: 65,
            atk: 125,
            def: 60,
            spa: 95,
            spd: 60,
            spe: 105
        },
        abilities: {
            "0": "Inner Focus",
            "1": "Regenerator",
            H: "Reckless"
        },
        heightm: 1.4,
        weightkg: 35.5,
        color: "Purple",
        prevo: "mienfoo",
        evoLevel: 50,
        eggGroups: ["Field", "Human-Like"],
        tier: "Bank"
    },
    druddigon: {
        num: 621,
        species: "Druddigon",
        types: ["Dragon"],
        baseStats: {
            hp: 77,
            atk: 120,
            def: 90,
            spa: 60,
            spd: 90,
            spe: 48
        },
        abilities: {
            "0": "Rough Skin",
            "1": "Sheer Force",
            H: "Mold Breaker"
        },
        heightm: 1.6,
        weightkg: 139,
        color: "Red",
        eggGroups: ["Monster", "Dragon"],
        tier: "Bank"
    },
    golett: {
        num: 622,
        species: "Golett",
        types: ["Ground", "Ghost"],
        gender: "N",
        baseStats: {
            hp: 59,
            atk: 74,
            def: 50,
            spa: 35,
            spd: 50,
            spe: 35
        },
        abilities: {
            "0": "Iron Fist",
            "1": "Klutz",
            H: "No Guard"
        },
        heightm: 1,
        weightkg: 92,
        color: "Green",
        evos: ["golurk"],
        eggGroups: ["Mineral"],
        tier: "Bank-LC"
    },
    golurk: {
        num: 623,
        species: "Golurk",
        types: ["Ground", "Ghost"],
        gender: "N",
        baseStats: {
            hp: 89,
            atk: 124,
            def: 80,
            spa: 55,
            spd: 80,
            spe: 55
        },
        abilities: {
            "0": "Iron Fist",
            "1": "Klutz",
            H: "No Guard"
        },
        heightm: 2.8,
        weightkg: 330,
        color: "Green",
        prevo: "golett",
        evoLevel: 43,
        eggGroups: ["Mineral"],
        tier: "Bank"
    },
    pawniard: {
        num: 624,
        species: "Pawniard",
        types: ["Dark", "Steel"],
        baseStats: {
            hp: 45,
            atk: 85,
            def: 70,
            spa: 40,
            spd: 40,
            spe: 60
        },
        abilities: {
            "0": "Defiant",
            "1": "Inner Focus",
            H: "Pressure"
        },
        heightm: 0.5,
        weightkg: 10.2,
        color: "Red",
        evos: ["bisharp"],
        eggGroups: ["Human-Like"],
        tier: "Bank"
    },
    bisharp: {
        num: 625,
        species: "Bisharp",
        types: ["Dark", "Steel"],
        baseStats: {
            hp: 65,
            atk: 125,
            def: 100,
            spa: 60,
            spd: 70,
            spe: 70
        },
        abilities: {
            "0": "Defiant",
            "1": "Inner Focus",
            H: "Pressure"
        },
        heightm: 1.6,
        weightkg: 70,
        color: "Red",
        prevo: "pawniard",
        evoLevel: 52,
        eggGroups: ["Human-Like"],
        tier: "Bank"
    },
    bouffalant: {
        num: 626,
        species: "Bouffalant",
        types: ["Normal"],
        baseStats: {
            hp: 95,
            atk: 110,
            def: 95,
            spa: 40,
            spd: 95,
            spe: 55
        },
        abilities: {
            "0": "Reckless",
            "1": "Sap Sipper",
            H: "Soundproof"
        },
        heightm: 1.6,
        weightkg: 94.6,
        color: "Brown",
        eggGroups: ["Field"],
        tier: "Bank"
    },
    rufflet: {
        num: 627,
        species: "Rufflet",
        types: ["Normal", "Flying"],
        gender: "M",
        baseStats: {
            hp: 70,
            atk: 83,
            def: 50,
            spa: 37,
            spd: 50,
            spe: 60
        },
        abilities: {
            "0": "Keen Eye",
            "1": "Sheer Force",
            H: "Hustle"
        },
        heightm: 0.5,
        weightkg: 10.5,
        color: "White",
        evos: ["braviary"],
        eggGroups: ["Flying"],
        tier: "LC"
    },
    braviary: {
        num: 628,
        species: "Braviary",
        types: ["Normal", "Flying"],
        gender: "M",
        baseStats: {
            hp: 100,
            atk: 123,
            def: 75,
            spa: 57,
            spd: 75,
            spe: 80
        },
        abilities: {
            "0": "Keen Eye",
            "1": "Sheer Force",
            H: "Defiant"
        },
        heightm: 1.5,
        weightkg: 41,
        color: "Red",
        prevo: "rufflet",
        evoLevel: 54,
        eggGroups: ["Flying"],
        tier: "New"
    },
    vullaby: {
        num: 629,
        species: "Vullaby",
        types: ["Dark", "Flying"],
        gender: "F",
        baseStats: {
            hp: 70,
            atk: 55,
            def: 75,
            spa: 45,
            spd: 65,
            spe: 60
        },
        abilities: {
            "0": "Big Pecks",
            "1": "Overcoat",
            H: "Weak Armor"
        },
        heightm: 0.5,
        weightkg: 9,
        color: "Brown",
        evos: ["mandibuzz"],
        eggGroups: ["Flying"],
        tier: "New"
    },
    mandibuzz: {
        num: 630,
        species: "Mandibuzz",
        types: ["Dark", "Flying"],
        gender: "F",
        baseStats: {
            hp: 110,
            atk: 65,
            def: 105,
            spa: 55,
            spd: 95,
            spe: 80
        },
        abilities: {
            "0": "Big Pecks",
            "1": "Overcoat",
            H: "Weak Armor"
        },
        heightm: 1.2,
        weightkg: 39.5,
        color: "Brown",
        prevo: "vullaby",
        evoLevel: 54,
        eggGroups: ["Flying"],
        tier: "New"
    },
    heatmor: {
        num: 631,
        species: "Heatmor",
        types: ["Fire"],
        baseStats: {
            hp: 85,
            atk: 97,
            def: 66,
            spa: 105,
            spd: 66,
            spe: 65
        },
        abilities: {
            "0": "Gluttony",
            "1": "Flash Fire",
            H: "White Smoke"
        },
        heightm: 1.4,
        weightkg: 58,
        color: "Red",
        eggGroups: ["Field"],
        tier: "Bank"
    },
    durant: {
        num: 632,
        species: "Durant",
        types: ["Bug", "Steel"],
        baseStats: {
            hp: 58,
            atk: 109,
            def: 112,
            spa: 48,
            spd: 48,
            spe: 109
        },
        abilities: {
            "0": "Swarm",
            "1": "Hustle",
            H: "Truant"
        },
        heightm: 0.3,
        weightkg: 33,
        color: "Gray",
        eggGroups: ["Bug"],
        tier: "Bank"
    },
    deino: {
        num: 633,
        species: "Deino",
        types: ["Dark", "Dragon"],
        baseStats: {
            hp: 52,
            atk: 65,
            def: 50,
            spa: 45,
            spd: 50,
            spe: 38
        },
        abilities: {
            "0": "Hustle"
        },
        heightm: 0.8,
        weightkg: 17.3,
        color: "Blue",
        evos: ["zweilous"],
        eggGroups: ["Dragon"],
        tier: "LC"
    },
    zweilous: {
        num: 634,
        species: "Zweilous",
        types: ["Dark", "Dragon"],
        baseStats: {
            hp: 72,
            atk: 85,
            def: 70,
            spa: 65,
            spd: 70,
            spe: 58
        },
        abilities: {
            "0": "Hustle"
        },
        heightm: 1.4,
        weightkg: 50,
        color: "Blue",
        prevo: "deino",
        evos: ["hydreigon"],
        evoLevel: 50,
        eggGroups: ["Dragon"],
        tier: "NFE"
    },
    hydreigon: {
        num: 635,
        species: "Hydreigon",
        types: ["Dark", "Dragon"],
        baseStats: {
            hp: 92,
            atk: 105,
            def: 90,
            spa: 125,
            spd: 90,
            spe: 98
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 1.8,
        weightkg: 160,
        color: "Blue",
        prevo: "zweilous",
        evoLevel: 64,
        eggGroups: ["Dragon"],
        tier: "New"
    },
    larvesta: {
        num: 636,
        species: "Larvesta",
        types: ["Bug", "Fire"],
        baseStats: {
            hp: 55,
            atk: 85,
            def: 55,
            spa: 50,
            spd: 55,
            spe: 60
        },
        abilities: {
            "0": "Flame Body",
            H: "Swarm"
        },
        heightm: 1.1,
        weightkg: 28.8,
        color: "White",
        evos: ["volcarona"],
        eggGroups: ["Bug"],
        tier: "Bank-LC"
    },
    volcarona: {
        num: 637,
        species: "Volcarona",
        types: ["Bug", "Fire"],
        baseStats: {
            hp: 85,
            atk: 60,
            def: 65,
            spa: 135,
            spd: 105,
            spe: 100
        },
        abilities: {
            "0": "Flame Body",
            H: "Swarm"
        },
        heightm: 1.6,
        weightkg: 46,
        color: "White",
        prevo: "larvesta",
        evoLevel: 59,
        eggGroups: ["Bug"],
        tier: "Bank"
    },
    cobalion: {
        num: 638,
        species: "Cobalion",
        types: ["Steel", "Fighting"],
        gender: "N",
        baseStats: {
            hp: 91,
            atk: 90,
            def: 129,
            spa: 90,
            spd: 72,
            spe: 108
        },
        abilities: {
            "0": "Justified"
        },
        heightm: 2.1,
        weightkg: 250,
        color: "Blue",
        eggGroups: ["Undiscovered"],
        tier: "Bank"
    },
    terrakion: {
        num: 639,
        species: "Terrakion",
        types: ["Rock", "Fighting"],
        gender: "N",
        baseStats: {
            hp: 91,
            atk: 129,
            def: 90,
            spa: 72,
            spd: 90,
            spe: 108
        },
        abilities: {
            "0": "Justified"
        },
        heightm: 1.9,
        weightkg: 260,
        color: "Gray",
        eggGroups: ["Undiscovered"],
        tier: "Bank"
    },
    virizion: {
        num: 640,
        species: "Virizion",
        types: ["Grass", "Fighting"],
        gender: "N",
        baseStats: {
            hp: 91,
            atk: 90,
            def: 72,
            spa: 90,
            spd: 129,
            spe: 108
        },
        abilities: {
            "0": "Justified"
        },
        heightm: 2,
        weightkg: 200,
        color: "Green",
        eggGroups: ["Undiscovered"],
        tier: "Bank"
    },
    tornadus: {
        num: 641,
        species: "Tornadus",
        baseForme: "Incarnate",
        types: ["Flying"],
        gender: "M",
        baseStats: {
            hp: 79,
            atk: 115,
            def: 70,
            spa: 125,
            spd: 80,
            spe: 111
        },
        abilities: {
            "0": "Prankster",
            H: "Defiant"
        },
        heightm: 1.5,
        weightkg: 63,
        color: "Green",
        eggGroups: ["Undiscovered"],
        otherFormes: ["tornadustherian"],
        tier: "Bank"
    },
    tornadustherian: {
        num: 641,
        species: "Tornadus-Therian",
        baseSpecies: "Tornadus",
        forme: "Therian",
        formeLetter: "T",
        types: ["Flying"],
        gender: "M",
        baseStats: {
            hp: 79,
            atk: 100,
            def: 80,
            spa: 110,
            spd: 90,
            spe: 121
        },
        abilities: {
            "0": "Regenerator"
        },
        heightm: 1.4,
        weightkg: 63,
        color: "Green",
        eggGroups: ["Undiscovered"],
        tier: "Bank"
    },
    thundurus: {
        num: 642,
        species: "Thundurus",
        baseForme: "Incarnate",
        types: ["Electric", "Flying"],
        gender: "M",
        baseStats: {
            hp: 79,
            atk: 115,
            def: 70,
            spa: 125,
            spd: 80,
            spe: 111
        },
        abilities: {
            "0": "Prankster",
            H: "Defiant"
        },
        heightm: 1.5,
        weightkg: 61,
        color: "Blue",
        eggGroups: ["Undiscovered"],
        otherFormes: ["thundurustherian"],
        tier: "Bank"
    },
    thundurustherian: {
        num: 642,
        species: "Thundurus-Therian",
        baseSpecies: "Thundurus",
        forme: "Therian",
        formeLetter: "T",
        types: ["Electric", "Flying"],
        gender: "M",
        baseStats: {
            hp: 79,
            atk: 105,
            def: 70,
            spa: 145,
            spd: 80,
            spe: 101
        },
        abilities: {
            "0": "Volt Absorb"
        },
        heightm: 3,
        weightkg: 61,
        color: "Blue",
        eggGroups: ["Undiscovered"],
        tier: "Bank"
    },
    reshiram: {
        num: 643,
        species: "Reshiram",
        types: ["Dragon", "Fire"],
        gender: "N",
        baseStats: {
            hp: 100,
            atk: 120,
            def: 100,
            spa: 150,
            spd: 120,
            spe: 90
        },
        abilities: {
            "0": "Turboblaze"
        },
        heightm: 3.2,
        weightkg: 330,
        color: "White",
        eggGroups: ["Undiscovered"],
        tier: "Bank-Uber"
    },
    zekrom: {
        num: 644,
        species: "Zekrom",
        types: ["Dragon", "Electric"],
        gender: "N",
        baseStats: {
            hp: 100,
            atk: 150,
            def: 120,
            spa: 120,
            spd: 100,
            spe: 90
        },
        abilities: {
            "0": "Teravolt"
        },
        heightm: 2.9,
        weightkg: 345,
        color: "Black",
        eggGroups: ["Undiscovered"],
        tier: "Bank-Uber"
    },
    landorus: {
        num: 645,
        species: "Landorus",
        baseForme: "Incarnate",
        types: ["Ground", "Flying"],
        gender: "M",
        baseStats: {
            hp: 89,
            atk: 125,
            def: 90,
            spa: 115,
            spd: 80,
            spe: 101
        },
        abilities: {
            "0": "Sand Force",
            H: "Sheer Force"
        },
        heightm: 1.5,
        weightkg: 68,
        color: "Brown",
        eggGroups: ["Undiscovered"],
        otherFormes: ["landorustherian"],
        tier: "Bank"
    },
    landorustherian: {
        num: 645,
        species: "Landorus-Therian",
        baseSpecies: "Landorus",
        forme: "Therian",
        formeLetter: "T",
        types: ["Ground", "Flying"],
        gender: "M",
        baseStats: {
            hp: 89,
            atk: 145,
            def: 90,
            spa: 105,
            spd: 80,
            spe: 91
        },
        abilities: {
            "0": "Intimidate"
        },
        heightm: 1.3,
        weightkg: 68,
        color: "Brown",
        eggGroups: ["Undiscovered"],
        tier: "Bank"
    },
    kyurem: {
        num: 646,
        species: "Kyurem",
        types: ["Dragon", "Ice"],
        gender: "N",
        baseStats: {
            hp: 125,
            atk: 130,
            def: 90,
            spa: 130,
            spd: 90,
            spe: 95
        },
        abilities: {
            "0": "Pressure"
        },
        heightm: 3,
        weightkg: 325,
        color: "Gray",
        eggGroups: ["Undiscovered"],
        otherFormes: ["kyuremblack", "kyuremwhite"],
        tier: "Bank"
    },
    kyuremblack: {
        num: 646,
        species: "Kyurem-Black",
        baseSpecies: "Kyurem",
        forme: "Black",
        formeLetter: "B",
        types: ["Dragon", "Ice"],
        gender: "N",
        baseStats: {
            hp: 125,
            atk: 170,
            def: 100,
            spa: 120,
            spd: 90,
            spe: 95
        },
        abilities: {
            "0": "Teravolt"
        },
        heightm: 3.3,
        weightkg: 325,
        color: "Gray",
        eggGroups: ["Undiscovered"],
        tier: "Bank"
    },
    kyuremwhite: {
        num: 646,
        species: "Kyurem-White",
        baseSpecies: "Kyurem",
        forme: "White",
        formeLetter: "W",
        types: ["Dragon", "Ice"],
        gender: "N",
        baseStats: {
            hp: 125,
            atk: 120,
            def: 90,
            spa: 170,
            spd: 100,
            spe: 95
        },
        abilities: {
            "0": "Turboblaze"
        },
        heightm: 3.6,
        weightkg: 325,
        color: "Gray",
        eggGroups: ["Undiscovered"],
        tier: "Bank-Uber"
    },
    keldeo: {
        num: 647,
        species: "Keldeo",
        baseForme: "Ordinary",
        types: ["Water", "Fighting"],
        gender: "N",
        baseStats: {
            hp: 91,
            atk: 72,
            def: 90,
            spa: 129,
            spd: 90,
            spe: 108
        },
        abilities: {
            "0": "Justified"
        },
        heightm: 1.4,
        weightkg: 48.5,
        color: "Yellow",
        eggGroups: ["Undiscovered"],
        otherFormes: ["keldeoresolute"],
        tier: "Bank"
    },
    keldeoresolute: {
        num: 647,
        species: "Keldeo-Resolute",
        baseSpecies: "Keldeo",
        forme: "Resolute",
        formeLetter: "R",
        types: ["Water", "Fighting"],
        gender: "N",
        baseStats: {
            hp: 91,
            atk: 72,
            def: 90,
            spa: 129,
            spd: 90,
            spe: 108
        },
        abilities: {
            "0": "Justified"
        },
        heightm: 1.4,
        weightkg: 48.5,
        color: "Yellow",
        eggGroups: ["Undiscovered"]
    },
    meloetta: {
        num: 648,
        species: "Meloetta",
        baseForme: "Aria",
        types: ["Normal", "Psychic"],
        gender: "N",
        baseStats: {
            hp: 100,
            atk: 77,
            def: 77,
            spa: 128,
            spd: 128,
            spe: 90
        },
        abilities: {
            "0": "Serene Grace"
        },
        heightm: 0.6,
        weightkg: 6.5,
        color: "White",
        eggGroups: ["Undiscovered"],
        otherFormes: ["meloettapirouette"],
        tier: "Bank"
    },
    meloettapirouette: {
        num: 648,
        species: "Meloetta-Pirouette",
        baseSpecies: "Meloetta",
        forme: "Pirouette",
        formeLetter: "P",
        types: ["Normal", "Fighting"],
        gender: "N",
        baseStats: {
            hp: 100,
            atk: 128,
            def: 90,
            spa: 77,
            spd: 77,
            spe: 128
        },
        abilities: {
            "0": "Serene Grace"
        },
        heightm: 0.6,
        weightkg: 6.5,
        color: "White",
        eggGroups: ["Undiscovered"]
    },
    genesect: {
        num: 649,
        species: "Genesect",
        types: ["Bug", "Steel"],
        gender: "N",
        baseStats: {
            hp: 71,
            atk: 120,
            def: 95,
            spa: 120,
            spd: 95,
            spe: 99
        },
        abilities: {
            "0": "Download"
        },
        heightm: 1.5,
        weightkg: 82.5,
        color: "Purple",
        eggGroups: ["Undiscovered"],
        otherFormes: ["genesectdouse", "genesectshock", "genesectburn", "genesectchill"],
        tier: "Bank"
    },
    genesectdouse: {
        num: 649,
        species: "Genesect-Douse",
        baseSpecies: "Genesect",
        forme: "Douse",
        formeLetter: "D",
        types: ["Bug", "Steel"],
        gender: "N",
        baseStats: {
            hp: 71,
            atk: 120,
            def: 95,
            spa: 120,
            spd: 95,
            spe: 99
        },
        abilities: {
            "0": "Download"
        },
        heightm: 1.5,
        weightkg: 82.5,
        color: "Purple",
        eggGroups: ["Undiscovered"],
        requiredItem: "Douse Drive"
    },
    genesectshock: {
        num: 649,
        species: "Genesect-Shock",
        baseSpecies: "Genesect",
        forme: "Shock",
        formeLetter: "S",
        types: ["Bug", "Steel"],
        gender: "N",
        baseStats: {
            hp: 71,
            atk: 120,
            def: 95,
            spa: 120,
            spd: 95,
            spe: 99
        },
        abilities: {
            "0": "Download"
        },
        heightm: 1.5,
        weightkg: 82.5,
        color: "Purple",
        eggGroups: ["Undiscovered"],
        requiredItem: "Shock Drive"
    },
    genesectburn: {
        num: 649,
        species: "Genesect-Burn",
        baseSpecies: "Genesect",
        forme: "Burn",
        formeLetter: "B",
        types: ["Bug", "Steel"],
        gender: "N",
        baseStats: {
            hp: 71,
            atk: 120,
            def: 95,
            spa: 120,
            spd: 95,
            spe: 99
        },
        abilities: {
            "0": "Download"
        },
        heightm: 1.5,
        weightkg: 82.5,
        color: "Purple",
        eggGroups: ["Undiscovered"],
        requiredItem: "Burn Drive"
    },
    genesectchill: {
        num: 649,
        species: "Genesect-Chill",
        baseSpecies: "Genesect",
        forme: "Chill",
        formeLetter: "C",
        types: ["Bug", "Steel"],
        gender: "N",
        baseStats: {
            hp: 71,
            atk: 120,
            def: 95,
            spa: 120,
            spd: 95,
            spe: 99
        },
        abilities: {
            "0": "Download"
        },
        heightm: 1.5,
        weightkg: 82.5,
        color: "Purple",
        eggGroups: ["Undiscovered"],
        requiredItem: "Chill Drive"
    },
    chespin: {
        num: 650,
        species: "Chespin",
        types: ["Grass"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 56,
            atk: 61,
            def: 65,
            spa: 48,
            spd: 45,
            spe: 38
        },
        abilities: {
            "0": "Overgrow",
            H: "Bulletproof"
        },
        heightm: 0.4,
        weightkg: 9,
        color: "Green",
        evos: ["quilladin"],
        eggGroups: ["Field"],
        tier: "Bank-LC"
    },
    quilladin: {
        num: 651,
        species: "Quilladin",
        types: ["Grass"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 61,
            atk: 78,
            def: 95,
            spa: 56,
            spd: 58,
            spe: 57
        },
        abilities: {
            "0": "Overgrow",
            H: "Bulletproof"
        },
        heightm: 0.7,
        weightkg: 29,
        color: "Green",
        prevo: "chespin",
        evos: ["chesnaught"],
        evoLevel: 16,
        eggGroups: ["Field"],
        tier: "Bank-NFE"
    },
    chesnaught: {
        num: 652,
        species: "Chesnaught",
        types: ["Grass", "Fighting"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 88,
            atk: 107,
            def: 122,
            spa: 74,
            spd: 75,
            spe: 64
        },
        abilities: {
            "0": "Overgrow",
            H: "Bulletproof"
        },
        heightm: 1.6,
        weightkg: 90,
        color: "Green",
        prevo: "quilladin",
        evoLevel: 36,
        eggGroups: ["Field"],
        tier: "Bank"
    },
    fennekin: {
        num: 653,
        species: "Fennekin",
        types: ["Fire"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 40,
            atk: 45,
            def: 40,
            spa: 62,
            spd: 60,
            spe: 60
        },
        abilities: {
            "0": "Blaze",
            H: "Magician"
        },
        heightm: 0.4,
        weightkg: 9.4,
        color: "Red",
        evos: ["braixen"],
        eggGroups: ["Field"],
        tier: "Bank-LC"
    },
    braixen: {
        num: 654,
        species: "Braixen",
        types: ["Fire"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 59,
            atk: 59,
            def: 58,
            spa: 90,
            spd: 70,
            spe: 73
        },
        abilities: {
            "0": "Blaze",
            H: "Magician"
        },
        heightm: 1,
        weightkg: 14.5,
        color: "Red",
        prevo: "fennekin",
        evos: ["delphox"],
        evoLevel: 16,
        eggGroups: ["Field"],
        tier: "Bank-NFE"
    },
    delphox: {
        num: 655,
        species: "Delphox",
        types: ["Fire", "Psychic"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 75,
            atk: 69,
            def: 72,
            spa: 114,
            spd: 100,
            spe: 104
        },
        abilities: {
            "0": "Blaze",
            H: "Magician"
        },
        heightm: 1.5,
        weightkg: 39,
        color: "Red",
        prevo: "braixen",
        evoLevel: 36,
        eggGroups: ["Field"],
        tier: "Bank"
    },
    froakie: {
        num: 656,
        species: "Froakie",
        types: ["Water"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 41,
            atk: 56,
            def: 40,
            spa: 62,
            spd: 44,
            spe: 71
        },
        abilities: {
            "0": "Torrent",
            H: "Protean"
        },
        heightm: 0.3,
        weightkg: 7,
        color: "Blue",
        evos: ["frogadier"],
        eggGroups: ["Water 1"],
        tier: "LC"
    },
    frogadier: {
        num: 657,
        species: "Frogadier",
        types: ["Water"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 54,
            atk: 63,
            def: 52,
            spa: 83,
            spd: 56,
            spe: 97
        },
        abilities: {
            "0": "Torrent",
            H: "Protean"
        },
        heightm: 0.6,
        weightkg: 10.9,
        color: "Blue",
        prevo: "froakie",
        evos: ["greninja"],
        evoLevel: 16,
        eggGroups: ["Water 1"],
        tier: "NFE"
    },
    greninja: {
        num: 658,
        species: "Greninja",
        types: ["Water", "Dark"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 72,
            atk: 95,
            def: 67,
            spa: 103,
            spd: 71,
            spe: 122
        },
        abilities: {
            "0": "Torrent",
            H: "Protean",
            S: "Battle Bond"
        },
        heightm: 1.5,
        weightkg: 40,
        color: "Blue",
        prevo: "frogadier",
        evoLevel: 36,
        eggGroups: ["Water 1"],
        otherFormes: ["greninjaash"],
        tier: "New"
    },
    greninjaash: {
        num: 658,
        species: "Greninja-Ash",
        baseSpecies: "Greninja",
        forme: "Ash",
        formeLetter: "A",
        types: ["Water", "Dark"],
        gender: "M",
        baseStats: {
            hp: 72,
            atk: 145,
            def: 67,
            spa: 153,
            spd: 71,
            spe: 132
        },
        abilities: {
            "0": "Battle Bond"
        },
        heightm: 1.5,
        weightkg: 40,
        color: "Blue",
        eggGroups: ["Undiscovered"],
        tier: "New"
    },
    bunnelby: {
        num: 659,
        species: "Bunnelby",
        types: ["Normal"],
        baseStats: {
            hp: 38,
            atk: 36,
            def: 38,
            spa: 32,
            spd: 36,
            spe: 57
        },
        abilities: {
            "0": "Pickup",
            "1": "Cheek Pouch",
            H: "Huge Power"
        },
        heightm: 0.4,
        weightkg: 5,
        color: "Brown",
        evos: ["diggersby"],
        eggGroups: ["Field"],
        tier: "Bank-LC"
    },
    diggersby: {
        num: 660,
        species: "Diggersby",
        types: ["Normal", "Ground"],
        baseStats: {
            hp: 85,
            atk: 56,
            def: 77,
            spa: 50,
            spd: 77,
            spe: 78
        },
        abilities: {
            "0": "Pickup",
            "1": "Cheek Pouch",
            H: "Huge Power"
        },
        heightm: 1,
        weightkg: 42.4,
        color: "Brown",
        prevo: "bunnelby",
        evoLevel: 20,
        eggGroups: ["Field"],
        tier: "Bank"
    },
    fletchling: {
        num: 661,
        species: "Fletchling",
        types: ["Normal", "Flying"],
        baseStats: {
            hp: 45,
            atk: 50,
            def: 43,
            spa: 40,
            spd: 38,
            spe: 62
        },
        abilities: {
            "0": "Big Pecks",
            H: "Gale Wings"
        },
        heightm: 0.3,
        weightkg: 1.7,
        color: "Red",
        evos: ["fletchinder"],
        eggGroups: ["Flying"],
        tier: "LC"
    },
    fletchinder: {
        num: 662,
        species: "Fletchinder",
        types: ["Fire", "Flying"],
        baseStats: {
            hp: 62,
            atk: 73,
            def: 55,
            spa: 56,
            spd: 52,
            spe: 84
        },
        abilities: {
            "0": "Flame Body",
            H: "Gale Wings"
        },
        heightm: 0.7,
        weightkg: 16,
        color: "Red",
        prevo: "fletchling",
        evos: ["talonflame"],
        evoLevel: 17,
        eggGroups: ["Flying"],
        tier: "New"
    },
    talonflame: {
        num: 663,
        species: "Talonflame",
        types: ["Fire", "Flying"],
        baseStats: {
            hp: 78,
            atk: 81,
            def: 71,
            spa: 74,
            spd: 69,
            spe: 126
        },
        abilities: {
            "0": "Flame Body",
            H: "Gale Wings"
        },
        heightm: 1.2,
        weightkg: 24.5,
        color: "Red",
        prevo: "fletchinder",
        evoLevel: 35,
        eggGroups: ["Flying"],
        tier: "New"
    },
    scatterbug: {
        num: 664,
        species: "Scatterbug",
        types: ["Bug"],
        baseStats: {
            hp: 38,
            atk: 35,
            def: 40,
            spa: 27,
            spd: 25,
            spe: 35
        },
        abilities: {
            "0": "Shield Dust",
            "1": "Compound Eyes",
            H: "Friend Guard"
        },
        heightm: 0.3,
        weightkg: 2.5,
        color: "Black",
        evos: ["spewpa"],
        eggGroups: ["Bug"],
        tier: "Bank-LC"
    },
    spewpa: {
        num: 665,
        species: "Spewpa",
        types: ["Bug"],
        baseStats: {
            hp: 45,
            atk: 22,
            def: 60,
            spa: 27,
            spd: 30,
            spe: 29
        },
        abilities: {
            "0": "Shed Skin",
            H: "Friend Guard"
        },
        heightm: 0.3,
        weightkg: 8.4,
        color: "Black",
        prevo: "scatterbug",
        evos: ["vivillon"],
        evoLevel: 9,
        eggGroups: ["Bug"],
        tier: "Bank-NFE"
    },
    vivillon: {
        num: 666,
        species: "Vivillon",
        types: ["Bug", "Flying"],
        baseStats: {
            hp: 80,
            atk: 52,
            def: 50,
            spa: 90,
            spd: 50,
            spe: 89
        },
        abilities: {
            "0": "Shield Dust",
            "1": "Compound Eyes",
            H: "Friend Guard"
        },
        heightm: 1.2,
        weightkg: 17,
        color: "Black",
        prevo: "spewpa",
        evoLevel: 12,
        eggGroups: ["Bug"],
        otherForms: ["vivillonarchipelago", "vivilloncontinental", "vivillonelegant", "vivillongarden", "vivillonhighplains", "vivillonicysnow", "vivillonjungle", "vivillonmarine", "vivillonmodern", "vivillonmonsoon", "vivillonocean", "vivillonpolar", "vivillonriver", "vivillonsandstorm", "vivillonsavanna", "vivillonsun", "vivillontundra"],
        otherFormes: ["vivillonfancy", "vivillonpokeball"],
        tier: "Bank"
    },
    vivillonfancy: {
        num: 666,
        species: "Vivillon-Fancy",
        baseSpecies: "Vivillon",
        forme: "Fancy",
        formeLetter: "F",
        types: ["Bug", "Flying"],
        baseStats: {
            hp: 80,
            atk: 52,
            def: 50,
            spa: 90,
            spd: 50,
            spe: 89
        },
        abilities: {
            "0": "Shield Dust",
            "1": "Compound Eyes"
        },
        heightm: 1.2,
        weightkg: 17,
        color: "Black",
        eggGroups: ["Bug"]
    },
    vivillonpokeball: {
        num: 666,
        species: "Vivillon-Pokeball",
        baseSpecies: "Vivillon",
        forme: "Pokeball",
        formeLetter: "P",
        types: ["Bug", "Flying"],
        baseStats: {
            hp: 80,
            atk: 52,
            def: 50,
            spa: 90,
            spd: 50,
            spe: 89
        },
        abilities: {
            "0": "Shield Dust",
            "1": "Compound Eyes"
        },
        heightm: 1.2,
        weightkg: 17,
        color: "Black",
        eggGroups: ["Bug"]
    },
    litleo: {
        num: 667,
        species: "Litleo",
        types: ["Fire", "Normal"],
        genderRatio: {
            M: 0.125,
            F: 0.875
        },
        baseStats: {
            hp: 62,
            atk: 50,
            def: 58,
            spa: 73,
            spd: 54,
            spe: 72
        },
        abilities: {
            "0": "Rivalry",
            "1": "Unnerve",
            H: "Moxie"
        },
        heightm: 0.6,
        weightkg: 13.5,
        color: "Brown",
        evos: ["pyroar"],
        eggGroups: ["Field"],
        tier: "Bank-LC"
    },
    pyroar: {
        num: 668,
        species: "Pyroar",
        types: ["Fire", "Normal"],
        genderRatio: {
            M: 0.125,
            F: 0.875
        },
        baseStats: {
            hp: 86,
            atk: 68,
            def: 72,
            spa: 109,
            spd: 66,
            spe: 106
        },
        abilities: {
            "0": "Rivalry",
            "1": "Unnerve",
            H: "Moxie"
        },
        heightm: 1.5,
        weightkg: 81.5,
        color: "Brown",
        prevo: "litleo",
        evoLevel: 35,
        eggGroups: ["Field"],
        tier: "Bank"
    },
    flabebe: {
        num: 669,
        species: "Flabebe",
        types: ["Fairy"],
        gender: "F",
        baseStats: {
            hp: 44,
            atk: 38,
            def: 39,
            spa: 61,
            spd: 79,
            spe: 42
        },
        abilities: {
            "0": "Flower Veil",
            H: "Symbiosis"
        },
        heightm: 0.1,
        weightkg: 0.1,
        color: "White",
        evos: ["floette"],
        eggGroups: ["Fairy"],
        otherForms: ["flabebeblue", "flabebeorange", "flabebewhite", "flabebeyellow"],
        tier: "Bank-LC"
    },
    floette: {
        num: 670,
        species: "Floette",
        baseForme: "Red-Flower",
        types: ["Fairy"],
        gender: "F",
        baseStats: {
            hp: 54,
            atk: 45,
            def: 47,
            spa: 75,
            spd: 98,
            spe: 52
        },
        abilities: {
            "0": "Flower Veil",
            H: "Symbiosis"
        },
        heightm: 0.2,
        weightkg: 0.9,
        color: "White",
        prevo: "flabebe",
        evos: ["florges"],
        evoLevel: 19,
        eggGroups: ["Fairy"],
        otherForms: ["floetteblue", "floetteorange", "floettewhite", "floetteyellow"],
        otherFormes: ["floetteeternal"],
        tier: "Bank-NFE"
    },
    floetteeternal: {
        num: 670,
        species: "Floette-Eternal",
        baseSpecies: "Floette",
        forme: "Eternal",
        formeLetter: "E",
        types: ["Fairy"],
        gender: "F",
        baseStats: {
            hp: 74,
            atk: 65,
            def: 67,
            spa: 125,
            spd: 128,
            spe: 92
        },
        abilities: {
            "0": "Flower Veil"
        },
        heightm: 0.2,
        weightkg: 0.9,
        color: "White",
        eggGroups: ["Undiscovered"],
        tier: "Unreleased"
    },
    florges: {
        num: 671,
        species: "Florges",
        types: ["Fairy"],
        gender: "F",
        baseStats: {
            hp: 78,
            atk: 65,
            def: 68,
            spa: 112,
            spd: 154,
            spe: 75
        },
        abilities: {
            "0": "Flower Veil",
            H: "Symbiosis"
        },
        heightm: 1.1,
        weightkg: 10,
        color: "White",
        prevo: "floette",
        evoLevel: 19,
        eggGroups: ["Fairy"],
        otherForms: ["florgesblue", "florgesorange", "florgeswhite", "florgesyellow"],
        tier: "Bank"
    },
    skiddo: {
        num: 672,
        species: "Skiddo",
        types: ["Grass"],
        baseStats: {
            hp: 66,
            atk: 65,
            def: 48,
            spa: 62,
            spd: 57,
            spe: 52
        },
        abilities: {
            "0": "Sap Sipper",
            H: "Grass Pelt"
        },
        heightm: 0.9,
        weightkg: 31,
        color: "Brown",
        evos: ["gogoat"],
        eggGroups: ["Field"],
        tier: "Bank-LC"
    },
    gogoat: {
        num: 673,
        species: "Gogoat",
        types: ["Grass"],
        baseStats: {
            hp: 123,
            atk: 100,
            def: 62,
            spa: 97,
            spd: 81,
            spe: 68
        },
        abilities: {
            "0": "Sap Sipper",
            H: "Grass Pelt"
        },
        heightm: 1.7,
        weightkg: 91,
        color: "Brown",
        prevo: "skiddo",
        evoLevel: 32,
        eggGroups: ["Field"],
        tier: "Bank"
    },
    pancham: {
        num: 674,
        species: "Pancham",
        types: ["Fighting"],
        baseStats: {
            hp: 67,
            atk: 82,
            def: 62,
            spa: 46,
            spd: 48,
            spe: 43
        },
        abilities: {
            "0": "Iron Fist",
            "1": "Mold Breaker",
            H: "Scrappy"
        },
        heightm: 0.6,
        weightkg: 8,
        color: "White",
        evos: ["pangoro"],
        eggGroups: ["Field", "Human-Like"],
        tier: "LC"
    },
    pangoro: {
        num: 675,
        species: "Pangoro",
        types: ["Fighting", "Dark"],
        baseStats: {
            hp: 95,
            atk: 124,
            def: 78,
            spa: 69,
            spd: 71,
            spe: 58
        },
        abilities: {
            "0": "Iron Fist",
            "1": "Mold Breaker",
            H: "Scrappy"
        },
        heightm: 2.1,
        weightkg: 136,
        color: "White",
        prevo: "pancham",
        evoLevel: 32,
        eggGroups: ["Field", "Human-Like"],
        tier: "New"
    },
    furfrou: {
        num: 676,
        species: "Furfrou",
        types: ["Normal"],
        baseStats: {
            hp: 75,
            atk: 80,
            def: 60,
            spa: 65,
            spd: 90,
            spe: 102
        },
        abilities: {
            "0": "Fur Coat"
        },
        heightm: 1.2,
        weightkg: 28,
        color: "White",
        eggGroups: ["Field"],
        tier: "Bank"
    },
    espurr: {
        num: 677,
        species: "Espurr",
        types: ["Psychic"],
        baseStats: {
            hp: 62,
            atk: 48,
            def: 54,
            spa: 63,
            spd: 60,
            spe: 68
        },
        abilities: {
            "0": "Keen Eye",
            "1": "Infiltrator",
            H: "Own Tempo"
        },
        heightm: 0.3,
        weightkg: 3.5,
        color: "Gray",
        evos: ["meowstic"],
        eggGroups: ["Field"],
        tier: "Bank-LC"
    },
    meowstic: {
        num: 678,
        species: "Meowstic",
        baseForme: "M",
        types: ["Psychic"],
        gender: "M",
        baseStats: {
            hp: 74,
            atk: 48,
            def: 76,
            spa: 83,
            spd: 81,
            spe: 104
        },
        abilities: {
            "0": "Keen Eye",
            "1": "Infiltrator",
            H: "Prankster"
        },
        heightm: 0.6,
        weightkg: 8.5,
        color: "White",
        prevo: "espurr",
        evoLevel: 25,
        eggGroups: ["Field"],
        otherFormes: ["meowsticf"],
        tier: "Bank"
    },
    meowsticf: {
        num: 678,
        species: "Meowstic-F",
        baseSpecies: "Meowstic",
        forme: "F",
        formeLetter: "F",
        types: ["Psychic"],
        gender: "F",
        baseStats: {
            hp: 74,
            atk: 48,
            def: 76,
            spa: 83,
            spd: 81,
            spe: 104
        },
        abilities: {
            "0": "Keen Eye",
            "1": "Infiltrator",
            H: "Competitive"
        },
        heightm: 0.6,
        weightkg: 8.5,
        color: "White",
        prevo: "espurr",
        evoLevel: 25,
        eggGroups: ["Field"],
        tier: "Bank"
    },
    honedge: {
        num: 679,
        species: "Honedge",
        types: ["Steel", "Ghost"],
        baseStats: {
            hp: 45,
            atk: 80,
            def: 100,
            spa: 35,
            spd: 37,
            spe: 28
        },
        abilities: {
            "0": "No Guard"
        },
        heightm: 0.8,
        weightkg: 2,
        color: "Brown",
        evos: ["doublade"],
        eggGroups: ["Mineral"],
        tier: "LC"
    },
    doublade: {
        num: 680,
        species: "Doublade",
        types: ["Steel", "Ghost"],
        baseStats: {
            hp: 59,
            atk: 110,
            def: 150,
            spa: 45,
            spd: 49,
            spe: 35
        },
        abilities: {
            "0": "No Guard"
        },
        heightm: 0.8,
        weightkg: 4.5,
        color: "Brown",
        prevo: "honedge",
        evos: ["aegislash"],
        evoLevel: 35,
        eggGroups: ["Mineral"],
        tier: "New"
    },
    aegislash: {
        num: 681,
        species: "Aegislash",
        baseForme: "Shield",
        types: ["Steel", "Ghost"],
        baseStats: {
            hp: 60,
            atk: 50,
            def: 150,
            spa: 50,
            spd: 150,
            spe: 60
        },
        abilities: {
            "0": "Stance Change"
        },
        heightm: 1.7,
        weightkg: 53,
        color: "Brown",
        prevo: "doublade",
        evoLevel: 35,
        eggGroups: ["Mineral"],
        otherFormes: ["aegislashblade"],
        tier: "Uber"
    },
    aegislashblade: {
        num: 681,
        species: "Aegislash-Blade",
        baseSpecies: "Aegislash",
        forme: "Blade",
        formeLetter: "B",
        types: ["Steel", "Ghost"],
        baseStats: {
            hp: 60,
            atk: 150,
            def: 50,
            spa: 150,
            spd: 50,
            spe: 60
        },
        abilities: {
            "0": "Stance Change"
        },
        heightm: 1.7,
        weightkg: 53,
        color: "Brown",
        prevo: "doublade",
        evoLevel: 35,
        eggGroups: ["Mineral"]
    },
    spritzee: {
        num: 682,
        species: "Spritzee",
        types: ["Fairy"],
        baseStats: {
            hp: 78,
            atk: 52,
            def: 60,
            spa: 63,
            spd: 65,
            spe: 23
        },
        abilities: {
            "0": "Healer",
            H: "Aroma Veil"
        },
        heightm: 0.2,
        weightkg: 0.5,
        color: "Pink",
        evos: ["aromatisse"],
        eggGroups: ["Fairy"],
        tier: "Bank-LC"
    },
    aromatisse: {
        num: 683,
        species: "Aromatisse",
        types: ["Fairy"],
        baseStats: {
            hp: 101,
            atk: 72,
            def: 72,
            spa: 99,
            spd: 89,
            spe: 29
        },
        abilities: {
            "0": "Healer",
            H: "Aroma Veil"
        },
        heightm: 0.8,
        weightkg: 15.5,
        color: "Pink",
        prevo: "spritzee",
        evoLevel: 1,
        eggGroups: ["Fairy"],
        tier: "Bank"
    },
    swirlix: {
        num: 684,
        species: "Swirlix",
        types: ["Fairy"],
        baseStats: {
            hp: 62,
            atk: 48,
            def: 66,
            spa: 59,
            spd: 57,
            spe: 49
        },
        abilities: {
            "0": "Sweet Veil",
            H: "Unburden"
        },
        heightm: 0.4,
        weightkg: 3.5,
        color: "White",
        evos: ["slurpuff"],
        eggGroups: ["Fairy"],
        tier: "Bank"
    },
    slurpuff: {
        num: 685,
        species: "Slurpuff",
        types: ["Fairy"],
        baseStats: {
            hp: 82,
            atk: 80,
            def: 86,
            spa: 85,
            spd: 75,
            spe: 72
        },
        abilities: {
            "0": "Sweet Veil",
            H: "Unburden"
        },
        heightm: 0.8,
        weightkg: 5,
        color: "White",
        prevo: "swirlix",
        evoLevel: 1,
        eggGroups: ["Fairy"],
        tier: "Bank"
    },
    inkay: {
        num: 686,
        species: "Inkay",
        types: ["Dark", "Psychic"],
        baseStats: {
            hp: 53,
            atk: 54,
            def: 53,
            spa: 37,
            spd: 46,
            spe: 45
        },
        abilities: {
            "0": "Contrary",
            "1": "Suction Cups",
            H: "Infiltrator"
        },
        heightm: 0.4,
        weightkg: 3.5,
        color: "Blue",
        evos: ["malamar"],
        eggGroups: ["Water 1", "Water 2"],
        tier: "Bank-LC"
    },
    malamar: {
        num: 687,
        species: "Malamar",
        types: ["Dark", "Psychic"],
        baseStats: {
            hp: 86,
            atk: 92,
            def: 88,
            spa: 68,
            spd: 75,
            spe: 73
        },
        abilities: {
            "0": "Contrary",
            "1": "Suction Cups",
            H: "Infiltrator"
        },
        heightm: 1.5,
        weightkg: 47,
        color: "Blue",
        prevo: "inkay",
        evoLevel: 30,
        eggGroups: ["Water 1", "Water 2"],
        tier: "Bank"
    },
    binacle: {
        num: 688,
        species: "Binacle",
        types: ["Rock", "Water"],
        baseStats: {
            hp: 42,
            atk: 52,
            def: 67,
            spa: 39,
            spd: 56,
            spe: 50
        },
        abilities: {
            "0": "Tough Claws",
            "1": "Sniper",
            H: "Pickpocket"
        },
        heightm: 0.5,
        weightkg: 31,
        color: "Brown",
        evos: ["barbaracle"],
        eggGroups: ["Water 3"],
        tier: "Bank-LC"
    },
    barbaracle: {
        num: 689,
        species: "Barbaracle",
        types: ["Rock", "Water"],
        baseStats: {
            hp: 72,
            atk: 105,
            def: 115,
            spa: 54,
            spd: 86,
            spe: 68
        },
        abilities: {
            "0": "Tough Claws",
            "1": "Sniper",
            H: "Pickpocket"
        },
        heightm: 1.3,
        weightkg: 96,
        color: "Brown",
        prevo: "binacle",
        evoLevel: 39,
        eggGroups: ["Water 3"],
        tier: "Bank"
    },
    skrelp: {
        num: 690,
        species: "Skrelp",
        types: ["Poison", "Water"],
        baseStats: {
            hp: 50,
            atk: 60,
            def: 60,
            spa: 60,
            spd: 60,
            spe: 30
        },
        abilities: {
            "0": "Poison Point",
            "1": "Poison Touch",
            H: "Adaptability"
        },
        heightm: 0.5,
        weightkg: 7.3,
        color: "Brown",
        evos: ["dragalge"],
        eggGroups: ["Water 1", "Dragon"],
        tier: "Bank-LC"
    },
    dragalge: {
        num: 691,
        species: "Dragalge",
        types: ["Poison", "Dragon"],
        baseStats: {
            hp: 65,
            atk: 75,
            def: 90,
            spa: 97,
            spd: 123,
            spe: 44
        },
        abilities: {
            "0": "Poison Point",
            "1": "Poison Touch",
            H: "Adaptability"
        },
        heightm: 1.8,
        weightkg: 81.5,
        color: "Brown",
        prevo: "skrelp",
        evoLevel: 48,
        eggGroups: ["Water 1", "Dragon"],
        tier: "Bank"
    },
    clauncher: {
        num: 692,
        species: "Clauncher",
        types: ["Water"],
        baseStats: {
            hp: 50,
            atk: 53,
            def: 62,
            spa: 58,
            spd: 63,
            spe: 44
        },
        abilities: {
            "0": "Mega Launcher"
        },
        heightm: 0.5,
        weightkg: 8.3,
        color: "Blue",
        evos: ["clawitzer"],
        eggGroups: ["Water 1", "Water 3"],
        tier: "Bank-LC"
    },
    clawitzer: {
        num: 693,
        species: "Clawitzer",
        types: ["Water"],
        baseStats: {
            hp: 71,
            atk: 73,
            def: 88,
            spa: 120,
            spd: 89,
            spe: 59
        },
        abilities: {
            "0": "Mega Launcher"
        },
        heightm: 1.3,
        weightkg: 35.3,
        color: "Blue",
        prevo: "clauncher",
        evoLevel: 37,
        eggGroups: ["Water 1", "Water 3"],
        tier: "Bank"
    },
    helioptile: {
        num: 694,
        species: "Helioptile",
        types: ["Electric", "Normal"],
        baseStats: {
            hp: 44,
            atk: 38,
            def: 33,
            spa: 61,
            spd: 43,
            spe: 70
        },
        abilities: {
            "0": "Dry Skin",
            "1": "Sand Veil",
            H: "Solar Power"
        },
        heightm: 0.5,
        weightkg: 6,
        color: "Yellow",
        evos: ["heliolisk"],
        eggGroups: ["Monster", "Dragon"],
        tier: "Bank-LC"
    },
    heliolisk: {
        num: 695,
        species: "Heliolisk",
        types: ["Electric", "Normal"],
        baseStats: {
            hp: 62,
            atk: 55,
            def: 52,
            spa: 109,
            spd: 94,
            spe: 109
        },
        abilities: {
            "0": "Dry Skin",
            "1": "Sand Veil",
            H: "Solar Power"
        },
        heightm: 1,
        weightkg: 21,
        color: "Yellow",
        prevo: "helioptile",
        evoLevel: 1,
        eggGroups: ["Monster", "Dragon"],
        tier: "Bank"
    },
    tyrunt: {
        num: 696,
        species: "Tyrunt",
        types: ["Rock", "Dragon"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 58,
            atk: 89,
            def: 77,
            spa: 45,
            spd: 45,
            spe: 48
        },
        abilities: {
            "0": "Strong Jaw",
            H: "Sturdy"
        },
        heightm: 0.8,
        weightkg: 26,
        color: "Brown",
        evos: ["tyrantrum"],
        eggGroups: ["Monster", "Dragon"],
        tier: "Bank-LC"
    },
    tyrantrum: {
        num: 697,
        species: "Tyrantrum",
        types: ["Rock", "Dragon"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 82,
            atk: 121,
            def: 119,
            spa: 69,
            spd: 59,
            spe: 71
        },
        abilities: {
            "0": "Strong Jaw",
            H: "Rock Head"
        },
        heightm: 2.5,
        weightkg: 270,
        color: "Red",
        prevo: "tyrunt",
        evoLevel: 39,
        eggGroups: ["Monster", "Dragon"],
        tier: "Bank"
    },
    amaura: {
        num: 698,
        species: "Amaura",
        types: ["Rock", "Ice"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 77,
            atk: 59,
            def: 50,
            spa: 67,
            spd: 63,
            spe: 46
        },
        abilities: {
            "0": "Refrigerate",
            H: "Snow Warning"
        },
        heightm: 1.3,
        weightkg: 25.2,
        color: "Blue",
        evos: ["aurorus"],
        eggGroups: ["Monster"],
        tier: "Bank-LC"
    },
    aurorus: {
        num: 699,
        species: "Aurorus",
        types: ["Rock", "Ice"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 123,
            atk: 77,
            def: 72,
            spa: 99,
            spd: 92,
            spe: 58
        },
        abilities: {
            "0": "Refrigerate",
            H: "Snow Warning"
        },
        heightm: 2.7,
        weightkg: 225,
        color: "Blue",
        prevo: "amaura",
        evoLevel: 39,
        eggGroups: ["Monster"],
        tier: "Bank"
    },
    sylveon: {
        num: 700,
        species: "Sylveon",
        types: ["Fairy"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 95,
            atk: 65,
            def: 65,
            spa: 110,
            spd: 130,
            spe: 60
        },
        abilities: {
            "0": "Cute Charm",
            H: "Pixilate"
        },
        heightm: 1,
        weightkg: 23.5,
        color: "Pink",
        prevo: "eevee",
        evoLevel: 2,
        eggGroups: ["Field"],
        tier: "New"
    },
    hawlucha: {
        num: 701,
        species: "Hawlucha",
        types: ["Fighting", "Flying"],
        baseStats: {
            hp: 78,
            atk: 92,
            def: 75,
            spa: 74,
            spd: 63,
            spe: 118
        },
        abilities: {
            "0": "Limber",
            "1": "Unburden",
            H: "Mold Breaker"
        },
        heightm: 0.8,
        weightkg: 21.5,
        color: "Green",
        eggGroups: ["Human-Like"],
        tier: "Bank"
    },
    dedenne: {
        num: 702,
        species: "Dedenne",
        types: ["Electric", "Fairy"],
        baseStats: {
            hp: 67,
            atk: 58,
            def: 57,
            spa: 81,
            spd: 67,
            spe: 101
        },
        abilities: {
            "0": "Cheek Pouch",
            "1": "Pickup",
            H: "Plus"
        },
        heightm: 0.2,
        weightkg: 2.2,
        color: "Yellow",
        eggGroups: ["Field", "Fairy"],
        tier: "Bank"
    },
    carbink: {
        num: 703,
        species: "Carbink",
        types: ["Rock", "Fairy"],
        gender: "N",
        baseStats: {
            hp: 50,
            atk: 50,
            def: 150,
            spa: 50,
            spd: 150,
            spe: 50
        },
        abilities: {
            "0": "Clear Body",
            H: "Sturdy"
        },
        heightm: 0.3,
        weightkg: 5.7,
        color: "Gray",
        eggGroups: ["Fairy", "Mineral"],
        tier: "New"
    },
    goomy: {
        num: 704,
        species: "Goomy",
        types: ["Dragon"],
        baseStats: {
            hp: 45,
            atk: 50,
            def: 35,
            spa: 55,
            spd: 75,
            spe: 40
        },
        abilities: {
            "0": "Sap Sipper",
            "1": "Hydration",
            H: "Gooey"
        },
        heightm: 0.3,
        weightkg: 2.8,
        color: "Purple",
        evos: ["sliggoo"],
        eggGroups: ["Dragon"],
        tier: "LC"
    },
    sliggoo: {
        num: 705,
        species: "Sliggoo",
        types: ["Dragon"],
        baseStats: {
            hp: 68,
            atk: 75,
            def: 53,
            spa: 83,
            spd: 113,
            spe: 60
        },
        abilities: {
            "0": "Sap Sipper",
            "1": "Hydration",
            H: "Gooey"
        },
        heightm: 0.8,
        weightkg: 17.5,
        color: "Purple",
        prevo: "goomy",
        evos: ["goodra"],
        evoLevel: 40,
        eggGroups: ["Dragon"],
        tier: "NFE"
    },
    goodra: {
        num: 706,
        species: "Goodra",
        types: ["Dragon"],
        baseStats: {
            hp: 90,
            atk: 100,
            def: 70,
            spa: 110,
            spd: 150,
            spe: 80
        },
        abilities: {
            "0": "Sap Sipper",
            "1": "Hydration",
            H: "Gooey"
        },
        heightm: 2,
        weightkg: 150.5,
        color: "Purple",
        prevo: "sliggoo",
        evoLevel: 50,
        eggGroups: ["Dragon"],
        tier: "New"
    },
    klefki: {
        num: 707,
        species: "Klefki",
        types: ["Steel", "Fairy"],
        baseStats: {
            hp: 57,
            atk: 80,
            def: 91,
            spa: 80,
            spd: 87,
            spe: 75
        },
        abilities: {
            "0": "Prankster",
            H: "Magician"
        },
        heightm: 0.2,
        weightkg: 3,
        color: "Gray",
        eggGroups: ["Mineral"],
        tier: "New"
    },
    phantump: {
        num: 708,
        species: "Phantump",
        types: ["Ghost", "Grass"],
        baseStats: {
            hp: 43,
            atk: 70,
            def: 48,
            spa: 50,
            spd: 60,
            spe: 38
        },
        abilities: {
            "0": "Natural Cure",
            "1": "Frisk",
            H: "Harvest"
        },
        heightm: 0.4,
        weightkg: 7,
        color: "Brown",
        evos: ["trevenant"],
        eggGroups: ["Grass", "Amorphous"],
        tier: "LC"
    },
    trevenant: {
        num: 709,
        species: "Trevenant",
        types: ["Ghost", "Grass"],
        baseStats: {
            hp: 85,
            atk: 110,
            def: 76,
            spa: 65,
            spd: 82,
            spe: 56
        },
        abilities: {
            "0": "Natural Cure",
            "1": "Frisk",
            H: "Harvest"
        },
        heightm: 1.5,
        weightkg: 71,
        color: "Brown",
        prevo: "phantump",
        evoLevel: 1,
        eggGroups: ["Grass", "Amorphous"],
        tier: "New"
    },
    pumpkaboo: {
        num: 710,
        species: "Pumpkaboo",
        baseForme: "Average",
        types: ["Ghost", "Grass"],
        baseStats: {
            hp: 49,
            atk: 66,
            def: 70,
            spa: 44,
            spd: 55,
            spe: 51
        },
        abilities: {
            "0": "Pickup",
            "1": "Frisk",
            H: "Insomnia"
        },
        heightm: 0.4,
        weightkg: 5,
        color: "Brown",
        evos: ["gourgeist"],
        eggGroups: ["Amorphous"],
        otherFormes: ["pumpkaboosmall", "pumpkaboolarge", "pumpkaboosuper"],
        tier: "Bank-LC"
    },
    pumpkaboosmall: {
        num: 710,
        species: "Pumpkaboo-Small",
        baseSpecies: "Pumpkaboo",
        forme: "Small",
        formeLetter: "S",
        types: ["Ghost", "Grass"],
        baseStats: {
            hp: 44,
            atk: 66,
            def: 70,
            spa: 44,
            spd: 55,
            spe: 56
        },
        abilities: {
            "0": "Pickup",
            "1": "Frisk",
            H: "Insomnia"
        },
        heightm: 0.3,
        weightkg: 3.5,
        color: "Brown",
        evos: ["gourgeistsmall"],
        eggGroups: ["Amorphous"],
        tier: "Bank-LC",
        unreleasedHidden: true
    },
    pumpkaboolarge: {
        num: 710,
        species: "Pumpkaboo-Large",
        baseSpecies: "Pumpkaboo",
        forme: "Large",
        formeLetter: "L",
        types: ["Ghost", "Grass"],
        baseStats: {
            hp: 54,
            atk: 66,
            def: 70,
            spa: 44,
            spd: 55,
            spe: 46
        },
        abilities: {
            "0": "Pickup",
            "1": "Frisk",
            H: "Insomnia"
        },
        heightm: 0.5,
        weightkg: 7.5,
        color: "Brown",
        evos: ["gourgeistlarge"],
        eggGroups: ["Amorphous"],
        tier: "Bank-LC",
        unreleasedHidden: true
    },
    pumpkaboosuper: {
        num: 710,
        species: "Pumpkaboo-Super",
        baseSpecies: "Pumpkaboo",
        forme: "Super",
        formeLetter: "S",
        types: ["Ghost", "Grass"],
        baseStats: {
            hp: 59,
            atk: 66,
            def: 70,
            spa: 44,
            spd: 55,
            spe: 41
        },
        abilities: {
            "0": "Pickup",
            "1": "Frisk",
            H: "Insomnia"
        },
        heightm: 0.8,
        weightkg: 15,
        color: "Brown",
        evos: ["gourgeistsuper"],
        eggGroups: ["Amorphous"],
        tier: "Bank-LC"
    },
    gourgeist: {
        num: 711,
        species: "Gourgeist",
        baseForme: "Average",
        types: ["Ghost", "Grass"],
        baseStats: {
            hp: 65,
            atk: 90,
            def: 122,
            spa: 58,
            spd: 75,
            spe: 84
        },
        abilities: {
            "0": "Pickup",
            "1": "Frisk",
            H: "Insomnia"
        },
        heightm: 0.9,
        weightkg: 12.5,
        color: "Brown",
        prevo: "pumpkaboo",
        evoLevel: 1,
        eggGroups: ["Amorphous"],
        otherFormes: ["gourgeistsmall", "gourgeistlarge", "gourgeistsuper"],
        tier: "Bank"
    },
    gourgeistsmall: {
        num: 711,
        species: "Gourgeist-Small",
        baseSpecies: "Gourgeist",
        forme: "Small",
        formeLetter: "S",
        types: ["Ghost", "Grass"],
        baseStats: {
            hp: 55,
            atk: 85,
            def: 122,
            spa: 58,
            spd: 75,
            spe: 99
        },
        abilities: {
            "0": "Pickup",
            "1": "Frisk",
            H: "Insomnia"
        },
        heightm: 0.7,
        weightkg: 9.5,
        color: "Brown",
        prevo: "pumpkaboosmall",
        evoLevel: 1,
        eggGroups: ["Amorphous"],
        tier: "Bank",
        unreleasedHidden: true
    },
    gourgeistlarge: {
        num: 711,
        species: "Gourgeist-Large",
        baseSpecies: "Gourgeist",
        forme: "Large",
        formeLetter: "L",
        types: ["Ghost", "Grass"],
        baseStats: {
            hp: 75,
            atk: 95,
            def: 122,
            spa: 58,
            spd: 75,
            spe: 69
        },
        abilities: {
            "0": "Pickup",
            "1": "Frisk",
            H: "Insomnia"
        },
        heightm: 1.1,
        weightkg: 14,
        color: "Brown",
        prevo: "pumpkaboolarge",
        evoLevel: 1,
        eggGroups: ["Amorphous"],
        tier: "Bank",
        unreleasedHidden: true
    },
    gourgeistsuper: {
        num: 711,
        species: "Gourgeist-Super",
        baseSpecies: "Gourgeist",
        forme: "Super",
        formeLetter: "S",
        types: ["Ghost", "Grass"],
        baseStats: {
            hp: 85,
            atk: 100,
            def: 122,
            spa: 58,
            spd: 75,
            spe: 54
        },
        abilities: {
            "0": "Pickup",
            "1": "Frisk",
            H: "Insomnia"
        },
        heightm: 1.7,
        weightkg: 39,
        color: "Brown",
        prevo: "pumpkaboosuper",
        evoLevel: 1,
        eggGroups: ["Amorphous"],
        tier: "Bank"
    },
    bergmite: {
        num: 712,
        species: "Bergmite",
        types: ["Ice"],
        baseStats: {
            hp: 55,
            atk: 69,
            def: 85,
            spa: 32,
            spd: 35,
            spe: 28
        },
        abilities: {
            "0": "Own Tempo",
            "1": "Ice Body",
            H: "Sturdy"
        },
        heightm: 1,
        weightkg: 99.5,
        color: "Blue",
        evos: ["avalugg"],
        eggGroups: ["Monster"],
        tier: "Bank-LC"
    },
    avalugg: {
        num: 713,
        species: "Avalugg",
        types: ["Ice"],
        baseStats: {
            hp: 95,
            atk: 117,
            def: 184,
            spa: 44,
            spd: 46,
            spe: 28
        },
        abilities: {
            "0": "Own Tempo",
            "1": "Ice Body",
            H: "Sturdy"
        },
        heightm: 2,
        weightkg: 505,
        color: "Blue",
        prevo: "bergmite",
        evoLevel: 37,
        eggGroups: ["Monster"],
        tier: "Bank"
    },
    noibat: {
        num: 714,
        species: "Noibat",
        types: ["Flying", "Dragon"],
        baseStats: {
            hp: 40,
            atk: 30,
            def: 35,
            spa: 45,
            spd: 40,
            spe: 55
        },
        abilities: {
            "0": "Frisk",
            "1": "Infiltrator",
            H: "Telepathy"
        },
        heightm: 0.5,
        weightkg: 8,
        color: "Purple",
        evos: ["noivern"],
        eggGroups: ["Flying"],
        tier: "Bank-LC"
    },
    noivern: {
        num: 715,
        species: "Noivern",
        types: ["Flying", "Dragon"],
        baseStats: {
            hp: 85,
            atk: 70,
            def: 80,
            spa: 97,
            spd: 80,
            spe: 123
        },
        abilities: {
            "0": "Frisk",
            "1": "Infiltrator",
            H: "Telepathy"
        },
        heightm: 1.5,
        weightkg: 85,
        color: "Purple",
        prevo: "noibat",
        evoLevel: 48,
        eggGroups: ["Flying"],
        tier: "Bank"
    },
    xerneas: {
        num: 716,
        species: "Xerneas",
        types: ["Fairy"],
        gender: "N",
        baseStats: {
            hp: 126,
            atk: 131,
            def: 95,
            spa: 131,
            spd: 98,
            spe: 99
        },
        abilities: {
            "0": "Fairy Aura"
        },
        heightm: 3,
        weightkg: 215,
        color: "Blue",
        eggGroups: ["Undiscovered"],
        tier: "Bank-Uber"
    },
    yveltal: {
        num: 717,
        species: "Yveltal",
        types: ["Dark", "Flying"],
        gender: "N",
        baseStats: {
            hp: 126,
            atk: 131,
            def: 95,
            spa: 131,
            spd: 98,
            spe: 99
        },
        abilities: {
            "0": "Dark Aura"
        },
        heightm: 5.8,
        weightkg: 203,
        color: "Red",
        eggGroups: ["Undiscovered"],
        tier: "Bank-Uber"
    },
    zygarde: {
        num: 718,
        species: "Zygarde",
        baseForme: "50%",
        types: ["Dragon", "Ground"],
        gender: "N",
        baseStats: {
            hp: 108,
            atk: 100,
            def: 121,
            spa: 81,
            spd: 95,
            spe: 95
        },
        abilities: {
            "0": "Aura Break",
            H: "Power Construct"
        },
        heightm: 5,
        weightkg: 305,
        color: "Green",
        eggGroups: ["Undiscovered"],
        otherFormes: ["zygarde10", "zygardecomplete"],
        tier: "New"
    },
    zygarde10: {
        num: 718,
        species: "Zygarde-10%",
        baseSpecies: "Zygarde",
        forme: "10%",
        formeLetter: "T",
        types: ["Dragon", "Ground"],
        gender: "N",
        baseStats: {
            hp: 54,
            atk: 100,
            def: 71,
            spa: 61,
            spd: 85,
            spe: 115
        },
        abilities: {
            "0": "Aura Break",
            H: "Power Construct"
        },
        heightm: 1.2,
        weightkg: 33.5,
        color: "Green",
        eggGroups: ["Undiscovered"],
        tier: "New"
    },
    zygardecomplete: {
        num: 718,
        species: "Zygarde-Complete",
        baseSpecies: "Zygarde",
        forme: "Complete",
        formeLetter: "C",
        types: ["Dragon", "Ground"],
        gender: "N",
        baseStats: {
            hp: 216,
            atk: 100,
            def: 121,
            spa: 91,
            spd: 95,
            spe: 85
        },
        abilities: {
            "0": "Power Construct"
        },
        heightm: 4.5,
        weightkg: 610,
        color: "Green",
        eggGroups: ["Undiscovered"]
    },
    diancie: {
        num: 719,
        species: "Diancie",
        types: ["Rock", "Fairy"],
        gender: "N",
        baseStats: {
            hp: 50,
            atk: 100,
            def: 150,
            spa: 100,
            spd: 150,
            spe: 50
        },
        abilities: {
            "0": "Clear Body"
        },
        heightm: 0.7,
        weightkg: 8.8,
        color: "Pink",
        eggGroups: ["Undiscovered"],
        otherFormes: ["dianciemega"],
        tier: "Bank"
    },
    dianciemega: {
        num: 719,
        species: "Diancie-Mega",
        baseSpecies: "Diancie",
        forme: "Mega",
        formeLetter: "M",
        types: ["Rock", "Fairy"],
        gender: "N",
        baseStats: {
            hp: 50,
            atk: 160,
            def: 110,
            spa: 160,
            spd: 110,
            spe: 110
        },
        abilities: {
            "0": "Magic Bounce"
        },
        heightm: 1.1,
        weightkg: 27.8,
        color: "Pink",
        eggGroups: ["Undiscovered"],
        tier: "Unreleased",
        requiredItem: "Diancite"
    },
    hoopa: {
        num: 720,
        species: "Hoopa",
        baseForme: "Confined",
        types: ["Psychic", "Ghost"],
        gender: "N",
        baseStats: {
            hp: 80,
            atk: 110,
            def: 60,
            spa: 150,
            spd: 130,
            spe: 70
        },
        abilities: {
            "0": "Magician"
        },
        heightm: 0.5,
        weightkg: 9,
        color: "Purple",
        eggGroups: ["Undiscovered"],
        otherFormes: ["hoopaunbound"],
        tier: "Bank"
    },
    hoopaunbound: {
        num: 720,
        species: "Hoopa-Unbound",
        baseSpecies: "Hoopa",
        forme: "Unbound",
        formeLetter: "U",
        types: ["Psychic", "Dark"],
        gender: "N",
        baseStats: {
            hp: 80,
            atk: 160,
            def: 60,
            spa: 170,
            spd: 130,
            spe: 80
        },
        abilities: {
            "0": "Magician"
        },
        heightm: 6.5,
        weightkg: 490,
        color: "Purple",
        eggGroups: ["Undiscovered"],
        tier: "Bank"
    },
    volcanion: {
        num: 721,
        species: "Volcanion",
        types: ["Fire", "Water"],
        gender: "N",
        baseStats: {
            hp: 80,
            atk: 110,
            def: 120,
            spa: 130,
            spd: 90,
            spe: 70
        },
        abilities: {
            "0": "Water Absorb"
        },
        heightm: 1.7,
        weightkg: 195,
        color: "Brown",
        eggGroups: ["Undiscovered"],
        tier: "Bank"
    },
    rowlet: {
        num: 722,
        species: "Rowlet",
        types: ["Grass", "Flying"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 68,
            atk: 55,
            def: 55,
            spa: 50,
            spd: 50,
            spe: 42
        },
        abilities: {
            "0": "Overgrow",
            H: "Long Reach"
        },
        heightm: 0.3,
        weightkg: 1.5,
        color: "Brown",
        evos: ["dartrix"],
        eggGroups: ["Flying"],
        tier: "LC",
        unreleasedHidden: true
    },
    dartrix: {
        num: 723,
        species: "Dartrix",
        types: ["Grass", "Flying"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 78,
            atk: 75,
            def: 75,
            spa: 70,
            spd: 70,
            spe: 52
        },
        abilities: {
            "0": "Overgrow",
            H: "Long Reach"
        },
        heightm: 0.7,
        weightkg: 16,
        color: "Brown",
        prevo: "rowlet",
        evos: ["decidueye"],
        evoLevel: 17,
        eggGroups: ["Flying"],
        tier: "NFE",
        unreleasedHidden: true
    },
    decidueye: {
        num: 724,
        species: "Decidueye",
        types: ["Grass", "Ghost"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 78,
            atk: 107,
            def: 75,
            spa: 100,
            spd: 100,
            spe: 70
        },
        abilities: {
            "0": "Overgrow",
            H: "Long Reach"
        },
        heightm: 1.6,
        weightkg: 36.6,
        color: "Brown",
        prevo: "dartrix",
        evoLevel: 34,
        eggGroups: ["Flying"],
        tier: "New",
        unreleasedHidden: true
    },
    litten: {
        num: 725,
        species: "Litten",
        types: ["Fire"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 45,
            atk: 65,
            def: 40,
            spa: 60,
            spd: 40,
            spe: 70
        },
        abilities: {
            "0": "Blaze",
            H: "Intimidate"
        },
        heightm: 0.4,
        weightkg: 4.3,
        color: "Red",
        evos: ["torracat"],
        eggGroups: ["Field"],
        tier: "LC",
        unreleasedHidden: true
    },
    torracat: {
        num: 726,
        species: "Torracat",
        types: ["Fire"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 65,
            atk: 85,
            def: 50,
            spa: 80,
            spd: 50,
            spe: 90
        },
        abilities: {
            "0": "Blaze",
            H: "Intimidate"
        },
        heightm: 0.7,
        weightkg: 25,
        color: "Red",
        prevo: "litten",
        evos: ["incineroar"],
        evoLevel: 17,
        eggGroups: ["Field"],
        tier: "NFE",
        unreleasedHidden: true
    },
    incineroar: {
        num: 727,
        species: "Incineroar",
        types: ["Fire", "Dark"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 95,
            atk: 115,
            def: 90,
            spa: 80,
            spd: 90,
            spe: 60
        },
        abilities: {
            "0": "Blaze",
            H: "Intimidate"
        },
        heightm: 1.8,
        weightkg: 83,
        color: "Red",
        prevo: "torracat",
        evoLevel: 34,
        eggGroups: ["Field"],
        tier: "New",
        unreleasedHidden: true
    },
    popplio: {
        num: 728,
        species: "Popplio",
        types: ["Water"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 50,
            atk: 54,
            def: 54,
            spa: 66,
            spd: 56,
            spe: 40
        },
        abilities: {
            "0": "Torrent",
            H: "Liquid Voice"
        },
        heightm: 0.4,
        weightkg: 7.5,
        color: "Blue",
        evos: ["brionne"],
        eggGroups: ["Water 1", "Field"],
        tier: "LC",
        unreleasedHidden: true
    },
    brionne: {
        num: 729,
        species: "Brionne",
        types: ["Water"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 60,
            atk: 69,
            def: 69,
            spa: 91,
            spd: 81,
            spe: 50
        },
        abilities: {
            "0": "Torrent",
            H: "Liquid Voice"
        },
        heightm: 0.6,
        weightkg: 17.5,
        color: "Blue",
        prevo: "popplio",
        evos: ["primarina"],
        evoLevel: 17,
        eggGroups: ["Water 1", "Field"],
        tier: "NFE",
        unreleasedHidden: true
    },
    primarina: {
        num: 730,
        species: "Primarina",
        types: ["Water", "Fairy"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 80,
            atk: 74,
            def: 74,
            spa: 126,
            spd: 116,
            spe: 60
        },
        abilities: {
            "0": "Torrent",
            H: "Liquid Voice"
        },
        heightm: 1.8,
        weightkg: 44,
        color: "Blue",
        prevo: "brionne",
        evoLevel: 34,
        eggGroups: ["Water 1", "Field"],
        tier: "New",
        unreleasedHidden: true
    },
    pikipek: {
        num: 731,
        species: "Pikipek",
        types: ["Normal", "Flying"],
        baseStats: {
            hp: 35,
            atk: 75,
            def: 30,
            spa: 30,
            spd: 30,
            spe: 65
        },
        abilities: {
            "0": "Keen Eye",
            "1": "Skill Link",
            H: "Pickup"
        },
        heightm: 0.3,
        weightkg: 1.2,
        color: "Black",
        evos: ["trumbeak"],
        eggGroups: ["Flying"],
        tier: "LC"
    },
    trumbeak: {
        num: 732,
        species: "Trumbeak",
        types: ["Normal", "Flying"],
        baseStats: {
            hp: 55,
            atk: 85,
            def: 50,
            spa: 40,
            spd: 50,
            spe: 75
        },
        abilities: {
            "0": "Keen Eye",
            "1": "Skill Link",
            H: "Pickup"
        },
        heightm: 0.6,
        weightkg: 14.8,
        color: "Black",
        prevo: "pikipek",
        evos: ["toucannon"],
        evoLevel: 14,
        eggGroups: ["Flying"],
        tier: "NFE"
    },
    toucannon: {
        num: 733,
        species: "Toucannon",
        types: ["Normal", "Flying"],
        baseStats: {
            hp: 80,
            atk: 120,
            def: 75,
            spa: 75,
            spd: 75,
            spe: 60
        },
        abilities: {
            "0": "Keen Eye",
            "1": "Skill Link",
            H: "Sheer Force"
        },
        heightm: 1.1,
        weightkg: 26,
        color: "Black",
        prevo: "trumbeak",
        evoLevel: 28,
        eggGroups: ["Flying"],
        tier: "New"
    },
    yungoos: {
        num: 734,
        species: "Yungoos",
        types: ["Normal"],
        baseStats: {
            hp: 48,
            atk: 70,
            def: 30,
            spa: 30,
            spd: 30,
            spe: 45
        },
        abilities: {
            "0": "Stakeout",
            "1": "Strong Jaw",
            H: "Adaptability"
        },
        heightm: 0.4,
        weightkg: 6,
        color: "Brown",
        evos: ["gumshoos"],
        eggGroups: ["Field"],
        tier: "LC"
    },
    gumshoos: {
        num: 735,
        species: "Gumshoos",
        types: ["Normal"],
        baseStats: {
            hp: 88,
            atk: 110,
            def: 60,
            spa: 55,
            spd: 60,
            spe: 45
        },
        abilities: {
            "0": "Stakeout",
            "1": "Strong Jaw",
            H: "Adaptability"
        },
        heightm: 0.7,
        weightkg: 14.2,
        color: "Brown",
        prevo: "yungoos",
        evoLevel: 20,
        eggGroups: ["Field"],
        tier: "New"
    },
    grubbin: {
        num: 736,
        species: "Grubbin",
        types: ["Bug"],
        baseStats: {
            hp: 47,
            atk: 62,
            def: 45,
            spa: 55,
            spd: 45,
            spe: 46
        },
        abilities: {
            "0": "Swarm"
        },
        heightm: 0.4,
        weightkg: 4.4,
        color: "Gray",
        evos: ["charjabug"],
        eggGroups: ["Bug"],
        tier: "LC"
    },
    charjabug: {
        num: 737,
        species: "Charjabug",
        types: ["Bug", "Electric"],
        baseStats: {
            hp: 57,
            atk: 82,
            def: 95,
            spa: 55,
            spd: 75,
            spe: 36
        },
        abilities: {
            "0": "Battery"
        },
        heightm: 0.5,
        weightkg: 10.5,
        color: "Green",
        prevo: "grubbin",
        evos: ["vikavolt"],
        evoLevel: 20,
        eggGroups: ["Bug"],
        tier: "NFE"
    },
    vikavolt: {
        num: 738,
        species: "Vikavolt",
        types: ["Bug", "Electric"],
        baseStats: {
            hp: 77,
            atk: 70,
            def: 90,
            spa: 145,
            spd: 75,
            spe: 43
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 1.5,
        weightkg: 45,
        color: "Blue",
        prevo: "charjabug",
        evoLevel: 21,
        eggGroups: ["Bug"],
        tier: "New"
    },
    crabrawler: {
        num: 739,
        species: "Crabrawler",
        types: ["Fighting"],
        baseStats: {
            hp: 47,
            atk: 82,
            def: 57,
            spa: 42,
            spd: 47,
            spe: 63
        },
        abilities: {
            "0": "Hyper Cutter",
            "1": "Iron Fist",
            H: "Anger Point"
        },
        heightm: 0.6,
        weightkg: 7,
        color: "Purple",
        evos: ["crabominable"],
        eggGroups: ["Water 3"],
        tier: "LC"
    },
    crabominable: {
        num: 740,
        species: "Crabominable",
        types: ["Fighting", "Ice"],
        baseStats: {
            hp: 97,
            atk: 132,
            def: 77,
            spa: 62,
            spd: 67,
            spe: 43
        },
        abilities: {
            "0": "Hyper Cutter",
            "1": "Iron Fist",
            H: "Anger Point"
        },
        heightm: 1.7,
        weightkg: 180,
        color: "White",
        prevo: "crabrawler",
        evoLevel: 2,
        eggGroups: ["Water 3"],
        tier: "New"
    },
    oricorio: {
        num: 741,
        species: "Oricorio",
        baseForme: "Baile",
        types: ["Fire", "Flying"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 75,
            atk: 70,
            def: 70,
            spa: 98,
            spd: 70,
            spe: 93
        },
        abilities: {
            "0": "Dancer"
        },
        heightm: 0.6,
        weightkg: 3.4,
        color: "Red",
        eggGroups: ["Flying"],
        otherFormes: ["oricoriopompom", "oricoriopau", "oricoriosensu"],
        tier: "New"
    },
    oricoriopompom: {
        num: 741,
        species: "Oricorio-Pom-Pom",
        baseSpecies: "Oricorio",
        forme: "Pom-Pom",
        formeLetter: "P",
        types: ["Electric", "Flying"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 75,
            atk: 70,
            def: 70,
            spa: 98,
            spd: 70,
            spe: 93
        },
        abilities: {
            "0": "Dancer"
        },
        heightm: 0.6,
        weightkg: 3.4,
        color: "Yellow",
        eggGroups: ["Flying"],
        tier: "New"
    },
    oricoriopau: {
        num: 741,
        species: "Oricorio-Pa'u",
        baseSpecies: "Oricorio",
        forme: "Pa'u",
        formeLetter: "P",
        types: ["Psychic", "Flying"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 75,
            atk: 70,
            def: 70,
            spa: 98,
            spd: 70,
            spe: 93
        },
        abilities: {
            "0": "Dancer"
        },
        heightm: 0.6,
        weightkg: 3.4,
        color: "Pink",
        eggGroups: ["Flying"],
        tier: "New"
    },
    oricoriosensu: {
        num: 741,
        species: "Oricorio-Sensu",
        baseSpecies: "Oricorio",
        forme: "Sensu",
        formeLetter: "S",
        types: ["Ghost", "Flying"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 75,
            atk: 70,
            def: 70,
            spa: 98,
            spd: 70,
            spe: 93
        },
        abilities: {
            "0": "Dancer"
        },
        heightm: 0.6,
        weightkg: 3.4,
        color: "Purple",
        eggGroups: ["Flying"],
        tier: "New"
    },
    cutiefly: {
        num: 742,
        species: "Cutiefly",
        types: ["Bug", "Fairy"],
        baseStats: {
            hp: 40,
            atk: 45,
            def: 40,
            spa: 55,
            spd: 40,
            spe: 84
        },
        abilities: {
            "0": "Honey Gather",
            "1": "Shield Dust",
            H: "Sweet Veil"
        },
        heightm: 0.1,
        weightkg: 0.2,
        color: "Yellow",
        evos: ["ribombee"],
        eggGroups: ["Bug", "Fairy"],
        tier: "LC"
    },
    ribombee: {
        num: 743,
        species: "Ribombee",
        types: ["Bug", "Fairy"],
        baseStats: {
            hp: 60,
            atk: 55,
            def: 60,
            spa: 95,
            spd: 70,
            spe: 124
        },
        abilities: {
            "0": "Honey Gather",
            "1": "Shield Dust",
            H: "Sweet Veil"
        },
        heightm: 0.2,
        weightkg: 0.5,
        color: "Yellow",
        prevo: "cutiefly",
        evoLevel: 25,
        eggGroups: ["Bug", "Fairy"],
        tier: "New"
    },
    rockruff: {
        num: 744,
        species: "Rockruff",
        types: ["Rock"],
        baseStats: {
            hp: 45,
            atk: 65,
            def: 40,
            spa: 30,
            spd: 40,
            spe: 60
        },
        abilities: {
            "0": "Keen Eye",
            "1": "Vital Spirit",
            H: "Steadfast"
        },
        heightm: 0.5,
        weightkg: 9.2,
        color: "Brown",
        evos: ["lycanroc", "lycanrocmidnight"],
        eggGroups: ["Field"],
        tier: "LC"
    },
    lycanroc: {
        num: 745,
        species: "Lycanroc",
        baseForme: "Midday",
        types: ["Rock"],
        baseStats: {
            hp: 75,
            atk: 115,
            def: 65,
            spa: 55,
            spd: 65,
            spe: 112
        },
        abilities: {
            "0": "Keen Eye",
            "1": "Sand Rush",
            H: "Steadfast"
        },
        heightm: 0.8,
        weightkg: 25,
        color: "Brown",
        prevo: "rockruff",
        evoLevel: 25,
        eggGroups: ["Field"],
        otherFormes: ["lycanrocmidnight"],
        tier: "New"
    },
    lycanrocmidnight: {
        num: 745,
        species: "Lycanroc-Midnight",
        baseSpecies: "Lycanroc",
        forme: "Midnight",
        formeLetter: "M",
        types: ["Rock"],
        baseStats: {
            hp: 85,
            atk: 115,
            def: 75,
            spa: 55,
            spd: 75,
            spe: 82
        },
        abilities: {
            "0": "Keen Eye",
            "1": "Vital Spirit",
            H: "No Guard"
        },
        heightm: 1.1,
        weightkg: 25,
        color: "Red",
        prevo: "rockruff",
        evoLevel: 25,
        eggGroups: ["Field"],
        tier: "New"
    },
    wishiwashi: {
        num: 746,
        species: "Wishiwashi",
        baseForme: "Solo",
        types: ["Water"],
        baseStats: {
            hp: 45,
            atk: 20,
            def: 20,
            spa: 25,
            spd: 25,
            spe: 40
        },
        abilities: {
            "0": "Schooling"
        },
        heightm: 0.2,
        weightkg: 0.3,
        color: "Blue",
        eggGroups: ["Water 2"],
        otherFormes: ["wishiwashischool"],
        tier: "New"
    },
    wishiwashischool: {
        num: 746,
        species: "Wishiwashi-School",
        baseSpecies: "Wishiwashi",
        forme: "School",
        formeLetter: "S",
        types: ["Water"],
        baseStats: {
            hp: 45,
            atk: 140,
            def: 130,
            spa: 140,
            spd: 135,
            spe: 30
        },
        abilities: {
            "0": "Schooling"
        },
        heightm: 8.2,
        weightkg: 78.6,
        color: "Blue",
        eggGroups: ["Water 2"]
    },
    mareanie: {
        num: 747,
        species: "Mareanie",
        types: ["Poison", "Water"],
        baseStats: {
            hp: 50,
            atk: 53,
            def: 62,
            spa: 43,
            spd: 52,
            spe: 45
        },
        abilities: {
            "0": "Merciless",
            "1": "Limber",
            H: "Regenerator"
        },
        heightm: 0.4,
        weightkg: 8,
        color: "Blue",
        evos: ["toxapex"],
        eggGroups: ["Water 1"],
        tier: "LC"
    },
    toxapex: {
        num: 748,
        species: "Toxapex",
        types: ["Poison", "Water"],
        baseStats: {
            hp: 50,
            atk: 63,
            def: 152,
            spa: 53,
            spd: 142,
            spe: 35
        },
        abilities: {
            "0": "Merciless",
            "1": "Limber",
            H: "Regenerator"
        },
        heightm: 0.7,
        weightkg: 14.5,
        color: "Blue",
        prevo: "mareanie",
        evoLevel: 38,
        eggGroups: ["Water 1"],
        tier: "New"
    },
    mudbray: {
        num: 749,
        species: "Mudbray",
        types: ["Ground"],
        baseStats: {
            hp: 70,
            atk: 100,
            def: 70,
            spa: 45,
            spd: 55,
            spe: 45
        },
        abilities: {
            "0": "Own Tempo",
            "1": "Stamina",
            H: "Inner Focus"
        },
        heightm: 1,
        weightkg: 110,
        color: "Brown",
        evos: ["mudsdale"],
        eggGroups: ["Field"],
        tier: "LC"
    },
    mudsdale: {
        num: 750,
        species: "Mudsdale",
        types: ["Ground"],
        baseStats: {
            hp: 100,
            atk: 125,
            def: 100,
            spa: 55,
            spd: 85,
            spe: 35
        },
        abilities: {
            "0": "Own Tempo",
            "1": "Stamina",
            H: "Inner Focus"
        },
        heightm: 2.5,
        weightkg: 920,
        color: "Brown",
        prevo: "mudbray",
        evoLevel: 30,
        eggGroups: ["Field"],
        tier: "New"
    },
    dewpider: {
        num: 751,
        species: "Dewpider",
        types: ["Water", "Bug"],
        baseStats: {
            hp: 38,
            atk: 40,
            def: 52,
            spa: 40,
            spd: 72,
            spe: 27
        },
        abilities: {
            "0": "Water Bubble",
            H: "Water Absorb"
        },
        heightm: 0.3,
        weightkg: 4,
        color: "Green",
        evos: ["araquanid"],
        eggGroups: ["Water 1", "Bug"],
        tier: "LC"
    },
    araquanid: {
        num: 752,
        species: "Araquanid",
        types: ["Water", "Bug"],
        baseStats: {
            hp: 68,
            atk: 70,
            def: 92,
            spa: 50,
            spd: 132,
            spe: 42
        },
        abilities: {
            "0": "Water Bubble",
            H: "Water Absorb"
        },
        heightm: 1.8,
        weightkg: 82,
        color: "Green",
        prevo: "dewpider",
        evoLevel: 22,
        eggGroups: ["Water 1", "Bug"],
        tier: "New"
    },
    fomantis: {
        num: 753,
        species: "Fomantis",
        types: ["Grass"],
        baseStats: {
            hp: 40,
            atk: 55,
            def: 35,
            spa: 50,
            spd: 35,
            spe: 35
        },
        abilities: {
            "0": "Leaf Guard",
            H: "Contrary"
        },
        heightm: 0.3,
        weightkg: 1.5,
        color: "Pink",
        evos: ["lurantis"],
        eggGroups: ["Grass"],
        tier: "LC"
    },
    lurantis: {
        num: 754,
        species: "Lurantis",
        types: ["Grass"],
        baseStats: {
            hp: 70,
            atk: 105,
            def: 90,
            spa: 80,
            spd: 90,
            spe: 45
        },
        abilities: {
            "0": "Leaf Guard",
            H: "Contrary"
        },
        heightm: 0.9,
        weightkg: 18.5,
        color: "Green",
        prevo: "fomantis",
        evoLevel: 34,
        eggGroups: ["Grass"],
        tier: "New"
    },
    morelull: {
        num: 755,
        species: "Morelull",
        types: ["Grass", "Fairy"],
        baseStats: {
            hp: 40,
            atk: 35,
            def: 55,
            spa: 65,
            spd: 75,
            spe: 15
        },
        abilities: {
            "0": "Illuminate",
            "1": "Effect Spore",
            H: "Rain Dish"
        },
        heightm: 0.2,
        weightkg: 1.5,
        color: "Purple",
        evos: ["shiinotic"],
        eggGroups: ["Grass"],
        tier: "LC"
    },
    shiinotic: {
        num: 756,
        species: "Shiinotic",
        types: ["Grass", "Fairy"],
        baseStats: {
            hp: 60,
            atk: 45,
            def: 80,
            spa: 90,
            spd: 100,
            spe: 30
        },
        abilities: {
            "0": "Illuminate",
            "1": "Effect Spore",
            H: "Rain Dish"
        },
        heightm: 1,
        weightkg: 11.5,
        color: "Purple",
        prevo: "morelull",
        evoLevel: 24,
        eggGroups: ["Grass"],
        tier: "New"
    },
    salandit: {
        num: 757,
        species: "Salandit",
        types: ["Poison", "Fire"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 48,
            atk: 44,
            def: 40,
            spa: 71,
            spd: 40,
            spe: 77
        },
        abilities: {
            "0": "Corrosion",
            H: "Oblivious"
        },
        heightm: 0.6,
        weightkg: 4.8,
        color: "Black",
        evos: ["salazzle"],
        eggGroups: ["Monster", "Dragon"],
        tier: "LC"
    },
    salazzle: {
        num: 758,
        species: "Salazzle",
        types: ["Poison", "Fire"],
        gender: "F",
        baseStats: {
            hp: 68,
            atk: 64,
            def: 60,
            spa: 111,
            spd: 60,
            spe: 117
        },
        abilities: {
            "0": "Corrosion",
            H: "Oblivious"
        },
        heightm: 1.2,
        weightkg: 22.2,
        color: "Black",
        prevo: "salandit",
        evoLevel: 33,
        eggGroups: ["Monster", "Dragon"],
        tier: "New"
    },
    stufful: {
        num: 759,
        species: "Stufful",
        types: ["Normal", "Fighting"],
        baseStats: {
            hp: 70,
            atk: 75,
            def: 50,
            spa: 45,
            spd: 50,
            spe: 50
        },
        abilities: {
            "0": "Fluffy",
            "1": "Klutz",
            H: "Cute Charm"
        },
        heightm: 0.5,
        weightkg: 6.8,
        color: "Pink",
        evos: ["bewear"],
        eggGroups: ["Field"],
        tier: "LC"
    },
    bewear: {
        num: 760,
        species: "Bewear",
        types: ["Normal", "Fighting"],
        baseStats: {
            hp: 120,
            atk: 125,
            def: 80,
            spa: 55,
            spd: 60,
            spe: 60
        },
        abilities: {
            "0": "Fluffy",
            "1": "Klutz",
            H: "Unnerve"
        },
        heightm: 2.1,
        weightkg: 135,
        color: "Pink",
        prevo: "stufful",
        evoLevel: 27,
        eggGroups: ["Field"],
        tier: "New"
    },
    bounsweet: {
        num: 761,
        species: "Bounsweet",
        types: ["Grass"],
        gender: "F",
        baseStats: {
            hp: 42,
            atk: 30,
            def: 38,
            spa: 30,
            spd: 38,
            spe: 32
        },
        abilities: {
            "0": "Leaf Guard",
            "1": "Oblivious",
            H: "Sweet Veil"
        },
        heightm: 0.3,
        weightkg: 3.2,
        color: "Purple",
        evos: ["steenee"],
        eggGroups: ["Grass"],
        tier: "LC"
    },
    steenee: {
        num: 762,
        species: "Steenee",
        types: ["Grass"],
        gender: "F",
        baseStats: {
            hp: 52,
            atk: 40,
            def: 48,
            spa: 40,
            spd: 48,
            spe: 62
        },
        abilities: {
            "0": "Leaf Guard",
            "1": "Oblivious",
            H: "Sweet Veil"
        },
        heightm: 0.7,
        weightkg: 8.2,
        color: "Purple",
        prevo: "bounsweet",
        evos: ["tsareena"],
        evoLevel: 18,
        eggGroups: ["Grass"],
        tier: "NFE"
    },
    tsareena: {
        num: 763,
        species: "Tsareena",
        types: ["Grass"],
        gender: "F",
        baseStats: {
            hp: 72,
            atk: 120,
            def: 98,
            spa: 50,
            spd: 98,
            spe: 72
        },
        abilities: {
            "0": "Leaf Guard",
            "1": "Queenly Majesty",
            H: "Sweet Veil"
        },
        heightm: 1.2,
        weightkg: 21.4,
        color: "Purple",
        prevo: "steenee",
        evoLevel: 29,
        eggGroups: ["Grass"],
        tier: "New"
    },
    comfey: {
        num: 764,
        species: "Comfey",
        types: ["Fairy"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 51,
            atk: 52,
            def: 90,
            spa: 82,
            spd: 110,
            spe: 100
        },
        abilities: {
            "0": "Flower Veil",
            "1": "Triage",
            H: "Natural Cure"
        },
        heightm: 0.1,
        weightkg: 0.3,
        color: "Green",
        eggGroups: ["Grass"],
        tier: "New"
    },
    oranguru: {
        num: 765,
        species: "Oranguru",
        types: ["Normal", "Psychic"],
        baseStats: {
            hp: 90,
            atk: 60,
            def: 80,
            spa: 90,
            spd: 110,
            spe: 60
        },
        abilities: {
            "0": "Inner Focus",
            "1": "Telepathy",
            H: "Symbiosis"
        },
        heightm: 1.5,
        weightkg: 76,
        color: "White",
        eggGroups: ["Field"],
        tier: "New",
        unreleasedHidden: true
    },
    passimian: {
        num: 766,
        species: "Passimian",
        types: ["Fighting"],
        baseStats: {
            hp: 100,
            atk: 120,
            def: 90,
            spa: 40,
            spd: 60,
            spe: 80
        },
        abilities: {
            "0": "Receiver",
            H: "Defiant"
        },
        heightm: 2,
        weightkg: 82.8,
        color: "White",
        eggGroups: ["Field"],
        tier: "New",
        unreleasedHidden: true
    },
    wimpod: {
        num: 767,
        species: "Wimpod",
        types: ["Bug", "Water"],
        baseStats: {
            hp: 25,
            atk: 35,
            def: 40,
            spa: 20,
            spd: 30,
            spe: 80
        },
        abilities: {
            "0": "Wimp Out"
        },
        heightm: 0.5,
        weightkg: 12,
        color: "Gray",
        evos: ["golisopod"],
        eggGroups: ["Bug", "Water 3"],
        tier: "LC"
    },
    golisopod: {
        num: 768,
        species: "Golisopod",
        types: ["Bug", "Water"],
        baseStats: {
            hp: 75,
            atk: 125,
            def: 140,
            spa: 60,
            spd: 90,
            spe: 40
        },
        abilities: {
            "0": "Emergency Exit"
        },
        heightm: 2,
        weightkg: 108,
        color: "Gray",
        prevo: "wimpod",
        evoLevel: 30,
        eggGroups: ["Bug", "Water 3"],
        tier: "New"
    },
    sandygast: {
        num: 769,
        species: "Sandygast",
        types: ["Ghost", "Ground"],
        baseStats: {
            hp: 55,
            atk: 55,
            def: 80,
            spa: 70,
            spd: 45,
            spe: 15
        },
        abilities: {
            "0": "Water Compaction",
            H: "Sand Veil"
        },
        heightm: 0.5,
        weightkg: 70,
        color: "Brown",
        evos: ["palossand"],
        eggGroups: ["Amorphous"],
        tier: "LC"
    },
    palossand: {
        num: 770,
        species: "Palossand",
        types: ["Ghost", "Ground"],
        baseStats: {
            hp: 85,
            atk: 75,
            def: 110,
            spa: 100,
            spd: 75,
            spe: 35
        },
        abilities: {
            "0": "Water Compaction",
            H: "Sand Veil"
        },
        heightm: 1.3,
        weightkg: 250,
        color: "Brown",
        prevo: "sandygast",
        evoLevel: 42,
        eggGroups: ["Amorphous"],
        tier: "New"
    },
    pyukumuku: {
        num: 771,
        species: "Pyukumuku",
        types: ["Water"],
        baseStats: {
            hp: 55,
            atk: 60,
            def: 130,
            spa: 30,
            spd: 130,
            spe: 5
        },
        abilities: {
            "0": "Innards Out",
            H: "Unaware"
        },
        heightm: 0.3,
        weightkg: 1.2,
        color: "Black",
        eggGroups: ["Water 1"],
        tier: "New"
    },
    typenull: {
        num: 772,
        species: "Type: Null",
        types: ["Normal"],
        gender: "N",
        baseStats: {
            hp: 95,
            atk: 95,
            def: 95,
            spa: 95,
            spd: 95,
            spe: 59
        },
        abilities: {
            "0": "Battle Armor"
        },
        heightm: 1.9,
        weightkg: 120.5,
        color: "Gray",
        evos: ["silvally"],
        eggGroups: ["Undiscovered"],
        tier: "NFE"
    },
    silvally: {
        num: 773,
        species: "Silvally",
        types: ["Normal"],
        gender: "N",
        baseStats: {
            hp: 95,
            atk: 95,
            def: 95,
            spa: 95,
            spd: 95,
            spe: 95
        },
        abilities: {
            "0": "RKS System"
        },
        heightm: 2.3,
        weightkg: 100.5,
        color: "Gray",
        prevo: "typenull",
        evoLevel: 41,
        eggGroups: ["Undiscovered"],
        otherFormes: ["silvallybug", "silvallydark", "silvallydragon", "silvallyelectric", "silvallyfairy", "silvallyfighting", "silvallyfire", "silvallyflying", "silvallyghost", "silvallygrass", "silvallyground", "silvallyice", "silvallypoison", "silvallypsychic", "silvallyrock", "silvallysteel", "silvallywater"],
        tier: "New"
    },
    silvallybug: {
        num: 773,
        species: "Silvally-Bug",
        baseSpecies: "Silvally",
        forme: "Bug",
        formeLetter: "B",
        types: ["Bug"],
        gender: "N",
        baseStats: {
            hp: 95,
            atk: 95,
            def: 95,
            spa: 95,
            spd: 95,
            spe: 95
        },
        abilities: {
            "0": "RKS System"
        },
        heightm: 2.3,
        weightkg: 100.5,
        color: "Gray",
        prevo: "typenull",
        evoLevel: 2,
        eggGroups: ["Undiscovered"],
        tier: "New",
        requiredItem: "Bug Memory"
    },
    silvallydark: {
        num: 773,
        species: "Silvally-Dark",
        baseSpecies: "Silvally",
        forme: "Dark",
        formeLetter: "D",
        types: ["Dark"],
        gender: "N",
        baseStats: {
            hp: 95,
            atk: 95,
            def: 95,
            spa: 95,
            spd: 95,
            spe: 95
        },
        abilities: {
            "0": "RKS System"
        },
        heightm: 2.3,
        weightkg: 100.5,
        color: "Gray",
        prevo: "typenull",
        evoLevel: 2,
        eggGroups: ["Undiscovered"],
        tier: "New",
        requiredItem: "Dark Memory"
    },
    silvallydragon: {
        num: 773,
        species: "Silvally-Dragon",
        baseSpecies: "Silvally",
        forme: "Dragon",
        formeLetter: "D",
        types: ["Dragon"],
        gender: "N",
        baseStats: {
            hp: 95,
            atk: 95,
            def: 95,
            spa: 95,
            spd: 95,
            spe: 95
        },
        abilities: {
            "0": "RKS System"
        },
        heightm: 2.3,
        weightkg: 100.5,
        color: "Gray",
        prevo: "typenull",
        evoLevel: 2,
        eggGroups: ["Undiscovered"],
        tier: "New",
        requiredItem: "Dragon Memory"
    },
    silvallyelectric: {
        num: 773,
        species: "Silvally-Electric",
        baseSpecies: "Silvally",
        forme: "Electric",
        formeLetter: "E",
        types: ["Electric"],
        gender: "N",
        baseStats: {
            hp: 95,
            atk: 95,
            def: 95,
            spa: 95,
            spd: 95,
            spe: 95
        },
        abilities: {
            "0": "RKS System"
        },
        heightm: 2.3,
        weightkg: 100.5,
        color: "Gray",
        prevo: "typenull",
        evoLevel: 2,
        eggGroups: ["Undiscovered"],
        tier: "New",
        requiredItem: "Electric Memory"
    },
    silvallyfairy: {
        num: 773,
        species: "Silvally-Fairy",
        baseSpecies: "Silvally",
        forme: "Fairy",
        formeLetter: "F",
        types: ["Fairy"],
        gender: "N",
        baseStats: {
            hp: 95,
            atk: 95,
            def: 95,
            spa: 95,
            spd: 95,
            spe: 95
        },
        abilities: {
            "0": "RKS System"
        },
        heightm: 2.3,
        weightkg: 100.5,
        color: "Gray",
        prevo: "typenull",
        evoLevel: 2,
        eggGroups: ["Undiscovered"],
        tier: "New",
        requiredItem: "Fairy Memory"
    },
    silvallyfighting: {
        num: 773,
        species: "Silvally-Fighting",
        baseSpecies: "Silvally",
        forme: "Fighting",
        formeLetter: "F",
        types: ["Fighting"],
        gender: "N",
        baseStats: {
            hp: 95,
            atk: 95,
            def: 95,
            spa: 95,
            spd: 95,
            spe: 95
        },
        abilities: {
            "0": "RKS System"
        },
        heightm: 2.3,
        weightkg: 100.5,
        color: "Gray",
        prevo: "typenull",
        evoLevel: 2,
        eggGroups: ["Undiscovered"],
        tier: "New",
        requiredItem: "Fighting Memory"
    },
    silvallyfire: {
        num: 773,
        species: "Silvally-Fire",
        baseSpecies: "Silvally",
        forme: "Fire",
        formeLetter: "F",
        types: ["Fire"],
        gender: "N",
        baseStats: {
            hp: 95,
            atk: 95,
            def: 95,
            spa: 95,
            spd: 95,
            spe: 95
        },
        abilities: {
            "0": "RKS System"
        },
        heightm: 2.3,
        weightkg: 100.5,
        color: "Gray",
        prevo: "typenull",
        evoLevel: 2,
        eggGroups: ["Undiscovered"],
        tier: "New",
        requiredItem: "Fire Memory"
    },
    silvallyflying: {
        num: 773,
        species: "Silvally-Flying",
        baseSpecies: "Silvally",
        forme: "Flying",
        formeLetter: "F",
        types: ["Flying"],
        gender: "N",
        baseStats: {
            hp: 95,
            atk: 95,
            def: 95,
            spa: 95,
            spd: 95,
            spe: 95
        },
        abilities: {
            "0": "RKS System"
        },
        heightm: 2.3,
        weightkg: 100.5,
        color: "Gray",
        prevo: "typenull",
        evoLevel: 2,
        eggGroups: ["Undiscovered"],
        tier: "New",
        requiredItem: "Flying Memory"
    },
    silvallyghost: {
        num: 773,
        species: "Silvally-Ghost",
        baseSpecies: "Silvally",
        forme: "Ghost",
        formeLetter: "G",
        types: ["Ghost"],
        gender: "N",
        baseStats: {
            hp: 95,
            atk: 95,
            def: 95,
            spa: 95,
            spd: 95,
            spe: 95
        },
        abilities: {
            "0": "RKS System"
        },
        heightm: 2.3,
        weightkg: 100.5,
        color: "Gray",
        prevo: "typenull",
        evoLevel: 2,
        eggGroups: ["Undiscovered"],
        tier: "New",
        requiredItem: "Ghost Memory"
    },
    silvallygrass: {
        num: 773,
        species: "Silvally-Grass",
        baseSpecies: "Silvally",
        forme: "Grass",
        formeLetter: "G",
        types: ["Grass"],
        gender: "N",
        baseStats: {
            hp: 95,
            atk: 95,
            def: 95,
            spa: 95,
            spd: 95,
            spe: 95
        },
        abilities: {
            "0": "RKS System"
        },
        heightm: 2.3,
        weightkg: 100.5,
        color: "Gray",
        prevo: "typenull",
        evoLevel: 2,
        eggGroups: ["Undiscovered"],
        tier: "New",
        requiredItem: "Grass Memory"
    },
    silvallyground: {
        num: 773,
        species: "Silvally-Ground",
        baseSpecies: "Silvally",
        forme: "Ground",
        formeLetter: "G",
        types: ["Ground"],
        gender: "N",
        baseStats: {
            hp: 95,
            atk: 95,
            def: 95,
            spa: 95,
            spd: 95,
            spe: 95
        },
        abilities: {
            "0": "RKS System"
        },
        heightm: 2.3,
        weightkg: 100.5,
        color: "Gray",
        prevo: "typenull",
        evoLevel: 2,
        eggGroups: ["Undiscovered"],
        tier: "New",
        requiredItem: "Ground Memory"
    },
    silvallyice: {
        num: 773,
        species: "Silvally-Ice",
        baseSpecies: "Silvally",
        forme: "Ice",
        formeLetter: "I",
        types: ["Ice"],
        gender: "N",
        baseStats: {
            hp: 95,
            atk: 95,
            def: 95,
            spa: 95,
            spd: 95,
            spe: 95
        },
        abilities: {
            "0": "RKS System"
        },
        heightm: 2.3,
        weightkg: 100.5,
        color: "Gray",
        prevo: "typenull",
        evoLevel: 2,
        eggGroups: ["Undiscovered"],
        tier: "New",
        requiredItem: "Ice Memory"
    },
    silvallypoison: {
        num: 773,
        species: "Silvally-Poison",
        baseSpecies: "Silvally",
        forme: "Poison",
        formeLetter: "P",
        types: ["Poison"],
        gender: "N",
        baseStats: {
            hp: 95,
            atk: 95,
            def: 95,
            spa: 95,
            spd: 95,
            spe: 95
        },
        abilities: {
            "0": "RKS System"
        },
        heightm: 2.3,
        weightkg: 100.5,
        color: "Gray",
        prevo: "typenull",
        evoLevel: 2,
        eggGroups: ["Undiscovered"],
        tier: "New",
        requiredItem: "Poison Memory"
    },
    silvallypsychic: {
        num: 773,
        species: "Silvally-Psychic",
        baseSpecies: "Silvally",
        forme: "Psychic",
        formeLetter: "P",
        types: ["Psychic"],
        gender: "N",
        baseStats: {
            hp: 95,
            atk: 95,
            def: 95,
            spa: 95,
            spd: 95,
            spe: 95
        },
        abilities: {
            "0": "RKS System"
        },
        heightm: 2.3,
        weightkg: 100.5,
        color: "Gray",
        prevo: "typenull",
        evoLevel: 2,
        eggGroups: ["Undiscovered"],
        tier: "New",
        requiredItem: "Psychic Memory"
    },
    silvallyrock: {
        num: 773,
        species: "Silvally-Rock",
        baseSpecies: "Silvally",
        forme: "Rock",
        formeLetter: "R",
        types: ["Rock"],
        gender: "N",
        baseStats: {
            hp: 95,
            atk: 95,
            def: 95,
            spa: 95,
            spd: 95,
            spe: 95
        },
        abilities: {
            "0": "RKS System"
        },
        heightm: 2.3,
        weightkg: 100.5,
        color: "Gray",
        prevo: "typenull",
        evoLevel: 2,
        eggGroups: ["Undiscovered"],
        tier: "New",
        requiredItem: "Rock Memory"
    },
    silvallysteel: {
        num: 773,
        species: "Silvally-Steel",
        baseSpecies: "Silvally",
        forme: "Steel",
        formeLetter: "S",
        types: ["Steel"],
        gender: "N",
        baseStats: {
            hp: 95,
            atk: 95,
            def: 95,
            spa: 95,
            spd: 95,
            spe: 95
        },
        abilities: {
            "0": "RKS System"
        },
        heightm: 2.3,
        weightkg: 100.5,
        color: "Gray",
        prevo: "typenull",
        evoLevel: 2,
        eggGroups: ["Undiscovered"],
        tier: "New",
        requiredItem: "Steel Memory"
    },
    silvallywater: {
        num: 773,
        species: "Silvally-Water",
        baseSpecies: "Silvally",
        forme: "Water",
        formeLetter: "W",
        types: ["Water"],
        gender: "N",
        baseStats: {
            hp: 95,
            atk: 95,
            def: 95,
            spa: 95,
            spd: 95,
            spe: 95
        },
        abilities: {
            "0": "RKS System"
        },
        heightm: 2.3,
        weightkg: 100.5,
        color: "Gray",
        prevo: "typenull",
        evoLevel: 2,
        eggGroups: ["Undiscovered"],
        tier: "New",
        requiredItem: "Water Memory"
    },
    minior: {
        num: 774,
        species: "Minior",
        baseForme: "Red",
        types: ["Rock", "Flying"],
        gender: "N",
        baseStats: {
            hp: 60,
            atk: 100,
            def: 60,
            spa: 100,
            spd: 60,
            spe: 120
        },
        abilities: {
            "0": "Shields Down"
        },
        heightm: 0.3,
        weightkg: 0.3,
        color: "Red",
        eggGroups: ["Mineral"],
        otherFormes: ["miniormeteor"],
        otherForms: ["miniororange", "minioryellow", "miniorgreen", "miniorblue", "miniorindigo", "miniorviolet"],
        tier: "New"
    },
    miniormeteor: {
        num: 774,
        species: "Minior-Meteor",
        baseSpecies: "Minior",
        forme: "Meteor",
        formeLetter: "M",
        types: ["Rock", "Flying"],
        gender: "N",
        baseStats: {
            hp: 60,
            atk: 60,
            def: 100,
            spa: 60,
            spd: 100,
            spe: 60
        },
        abilities: {
            "0": "Shields Down"
        },
        heightm: 0.3,
        weightkg: 40,
        color: "Brown",
        eggGroups: ["Mineral"]
    },
    komala: {
        num: 775,
        species: "Komala",
        types: ["Normal"],
        baseStats: {
            hp: 65,
            atk: 115,
            def: 65,
            spa: 75,
            spd: 95,
            spe: 65
        },
        abilities: {
            "0": "Comatose"
        },
        heightm: 0.4,
        weightkg: 19.9,
        color: "Blue",
        eggGroups: ["Field"],
        tier: "New"
    },
    turtonator: {
        num: 776,
        species: "Turtonator",
        types: ["Fire", "Dragon"],
        baseStats: {
            hp: 60,
            atk: 78,
            def: 135,
            spa: 91,
            spd: 85,
            spe: 36
        },
        abilities: {
            "0": "Shell Armor"
        },
        heightm: 2,
        weightkg: 212,
        color: "Red",
        eggGroups: ["Monster", "Dragon"],
        tier: "New"
    },
    togedemaru: {
        num: 777,
        species: "Togedemaru",
        types: ["Electric", "Steel"],
        baseStats: {
            hp: 65,
            atk: 98,
            def: 63,
            spa: 40,
            spd: 73,
            spe: 96
        },
        abilities: {
            "0": "Iron Barbs",
            "1": "Lightning Rod",
            H: "Sturdy"
        },
        heightm: 0.3,
        weightkg: 3.3,
        color: "Gray",
        eggGroups: ["Field", "Fairy"],
        tier: "New"
    },
    mimikyu: {
        num: 778,
        species: "Mimikyu",
        types: ["Ghost", "Fairy"],
        baseStats: {
            hp: 55,
            atk: 90,
            def: 80,
            spa: 50,
            spd: 105,
            spe: 96
        },
        abilities: {
            "0": "Disguise"
        },
        heightm: 0.2,
        weightkg: 0.7,
        color: "Yellow",
        eggGroups: ["Amorphous"],
        otherFormes: ["mimikyubusted"],
        tier: "New"
    },
    mimikyubusted: {
        num: 778,
        species: "Mimikyu-Busted",
        baseSpecies: "Mimikyu",
        forme: "Busted",
        formeLetter: "B",
        types: ["Ghost", "Fairy"],
        baseStats: {
            hp: 55,
            atk: 90,
            def: 80,
            spa: 50,
            spd: 105,
            spe: 96
        },
        abilities: {
            "0": "Disguise"
        },
        heightm: 0.2,
        weightkg: 0.7,
        color: "Yellow",
        eggGroups: ["Amorphous"]
    },
    bruxish: {
        num: 779,
        species: "Bruxish",
        types: ["Water", "Psychic"],
        baseStats: {
            hp: 68,
            atk: 105,
            def: 70,
            spa: 70,
            spd: 70,
            spe: 92
        },
        abilities: {
            "0": "Dazzling",
            "1": "Strong Jaw",
            H: "Wonder Skin"
        },
        heightm: 0.9,
        weightkg: 19,
        color: "Pink",
        eggGroups: ["Water 2"],
        tier: "New"
    },
    drampa: {
        num: 780,
        species: "Drampa",
        types: ["Normal", "Dragon"],
        baseStats: {
            hp: 78,
            atk: 60,
            def: 85,
            spa: 135,
            spd: 91,
            spe: 36
        },
        abilities: {
            "0": "Berserk",
            "1": "Sap Sipper",
            H: "Cloud Nine"
        },
        heightm: 3,
        weightkg: 185,
        color: "White",
        eggGroups: ["Monster", "Dragon"],
        tier: "New"
    },
    dhelmise: {
        num: 781,
        species: "Dhelmise",
        types: ["Ghost", "Grass"],
        gender: "N",
        baseStats: {
            hp: 70,
            atk: 131,
            def: 100,
            spa: 86,
            spd: 90,
            spe: 40
        },
        abilities: {
            "0": "Steelworker"
        },
        heightm: 3.9,
        weightkg: 210,
        color: "Green",
        eggGroups: ["Mineral"],
        tier: "New"
    },
    jangmoo: {
        num: 782,
        species: "Jangmo-o",
        types: ["Dragon"],
        baseStats: {
            hp: 45,
            atk: 55,
            def: 65,
            spa: 45,
            spd: 45,
            spe: 45
        },
        abilities: {
            "0": "Bulletproof",
            "1": "Soundproof",
            H: "Overcoat"
        },
        heightm: 0.6,
        weightkg: 29.7,
        color: "Gray",
        evos: ["hakamoo"],
        eggGroups: ["Dragon"],
        tier: "LC"
    },
    hakamoo: {
        num: 783,
        species: "Hakamo-o",
        types: ["Dragon", "Fighting"],
        baseStats: {
            hp: 55,
            atk: 75,
            def: 90,
            spa: 65,
            spd: 70,
            spe: 65
        },
        abilities: {
            "0": "Bulletproof",
            "1": "Soundproof",
            H: "Overcoat"
        },
        heightm: 1.2,
        weightkg: 47,
        color: "Gray",
        prevo: "jangmoo",
        evos: ["kommoo"],
        evoLevel: 35,
        eggGroups: ["Dragon"],
        tier: "NFE"
    },
    kommoo: {
        num: 784,
        species: "Kommo-o",
        types: ["Dragon", "Fighting"],
        baseStats: {
            hp: 75,
            atk: 110,
            def: 125,
            spa: 100,
            spd: 105,
            spe: 85
        },
        abilities: {
            "0": "Bulletproof",
            "1": "Soundproof",
            H: "Overcoat"
        },
        heightm: 1.6,
        weightkg: 78.2,
        color: "Gray",
        prevo: "hakamoo",
        evoLevel: 45,
        eggGroups: ["Dragon"],
        tier: "New"
    },
    tapukoko: {
        num: 785,
        species: "Tapu Koko",
        types: ["Electric", "Fairy"],
        gender: "N",
        baseStats: {
            hp: 70,
            atk: 115,
            def: 85,
            spa: 95,
            spd: 75,
            spe: 130
        },
        abilities: {
            "0": "Electric Surge",
            H: "Telepathy"
        },
        heightm: 1.8,
        weightkg: 20.5,
        color: "Yellow",
        eggGroups: ["Undiscovered"],
        tier: "New",
        unreleasedHidden: true
    },
    tapulele: {
        num: 786,
        species: "Tapu Lele",
        types: ["Psychic", "Fairy"],
        gender: "N",
        baseStats: {
            hp: 70,
            atk: 85,
            def: 75,
            spa: 130,
            spd: 115,
            spe: 95
        },
        abilities: {
            "0": "Psychic Surge",
            H: "Telepathy"
        },
        heightm: 1.2,
        weightkg: 18.6,
        color: "Pink",
        eggGroups: ["Undiscovered"],
        tier: "New",
        unreleasedHidden: true
    },
    tapubulu: {
        num: 787,
        species: "Tapu Bulu",
        types: ["Grass", "Fairy"],
        gender: "N",
        baseStats: {
            hp: 70,
            atk: 130,
            def: 115,
            spa: 85,
            spd: 95,
            spe: 75
        },
        abilities: {
            "0": "Grassy Surge",
            H: "Telepathy"
        },
        heightm: 1.9,
        weightkg: 45.5,
        color: "Red",
        eggGroups: ["Undiscovered"],
        tier: "New",
        unreleasedHidden: true
    },
    tapufini: {
        num: 788,
        species: "Tapu Fini",
        types: ["Water", "Fairy"],
        gender: "N",
        baseStats: {
            hp: 70,
            atk: 75,
            def: 115,
            spa: 95,
            spd: 130,
            spe: 85
        },
        abilities: {
            "0": "Misty Surge",
            H: "Telepathy"
        },
        heightm: 1.3,
        weightkg: 21.2,
        color: "Purple",
        eggGroups: ["Undiscovered"],
        tier: "New",
        unreleasedHidden: true
    },
    cosmog: {
        num: 789,
        species: "Cosmog",
        types: ["Psychic"],
        gender: "N",
        baseStats: {
            hp: 43,
            atk: 29,
            def: 31,
            spa: 29,
            spd: 31,
            spe: 37
        },
        abilities: {
            "0": "Unaware"
        },
        heightm: 0.2,
        weightkg: 0.1,
        color: "Blue",
        evos: ["cosmoem"],
        eggGroups: ["Undiscovered"],
        tier: "LC"
    },
    cosmoem: {
        num: 790,
        species: "Cosmoem",
        types: ["Psychic"],
        gender: "N",
        baseStats: {
            hp: 43,
            atk: 29,
            def: 131,
            spa: 29,
            spd: 131,
            spe: 37
        },
        abilities: {
            "0": "Sturdy"
        },
        heightm: 0.1,
        weightkg: 999.9,
        color: "Blue",
        prevo: "cosmog",
        evos: ["solgaleo", "lunala"],
        evoLevel: 43,
        eggGroups: ["Undiscovered"],
        tier: "NFE"
    },
    solgaleo: {
        num: 791,
        species: "Solgaleo",
        types: ["Psychic", "Steel"],
        gender: "N",
        baseStats: {
            hp: 137,
            atk: 137,
            def: 107,
            spa: 113,
            spd: 89,
            spe: 97
        },
        abilities: {
            "0": "Full Metal Body"
        },
        heightm: 3.4,
        weightkg: 230,
        color: "White",
        prevo: "cosmoem",
        evoLevel: 53,
        eggGroups: ["Undiscovered"],
        tier: "Uber"
    },
    lunala: {
        num: 792,
        species: "Lunala",
        types: ["Psychic", "Ghost"],
        gender: "N",
        baseStats: {
            hp: 137,
            atk: 113,
            def: 89,
            spa: 137,
            spd: 107,
            spe: 97
        },
        abilities: {
            "0": "Shadow Shield"
        },
        heightm: 4,
        weightkg: 120,
        color: "Purple",
        prevo: "cosmoem",
        evoLevel: 53,
        eggGroups: ["Undiscovered"],
        tier: "Uber"
    },
    nihilego: {
        num: 793,
        species: "Nihilego",
        types: ["Rock", "Poison"],
        gender: "N",
        baseStats: {
            hp: 109,
            atk: 53,
            def: 47,
            spa: 127,
            spd: 131,
            spe: 103
        },
        abilities: {
            "0": "Beast Boost"
        },
        heightm: 1.2,
        weightkg: 55.5,
        color: "White",
        eggGroups: ["Undiscovered"],
        tier: "New"
    },
    buzzwole: {
        num: 794,
        species: "Buzzwole",
        types: ["Bug", "Fighting"],
        gender: "N",
        baseStats: {
            hp: 107,
            atk: 139,
            def: 139,
            spa: 53,
            spd: 53,
            spe: 79
        },
        abilities: {
            "0": "Beast Boost"
        },
        heightm: 2.4,
        weightkg: 333.6,
        color: "Red",
        eggGroups: ["Undiscovered"],
        tier: "New"
    },
    pheromosa: {
        num: 795,
        species: "Pheromosa",
        types: ["Bug", "Fighting"],
        gender: "N",
        baseStats: {
            hp: 71,
            atk: 137,
            def: 37,
            spa: 137,
            spd: 37,
            spe: 151
        },
        abilities: {
            "0": "Beast Boost"
        },
        heightm: 1.8,
        weightkg: 25,
        color: "White",
        eggGroups: ["Undiscovered"],
        tier: "New"
    },
    xurkitree: {
        num: 796,
        species: "Xurkitree",
        types: ["Electric"],
        gender: "N",
        baseStats: {
            hp: 83,
            atk: 89,
            def: 71,
            spa: 173,
            spd: 71,
            spe: 83
        },
        abilities: {
            "0": "Beast Boost"
        },
        heightm: 3.8,
        weightkg: 100,
        color: "Black",
        eggGroups: ["Undiscovered"],
        tier: "New"
    },
    celesteela: {
        num: 797,
        species: "Celesteela",
        types: ["Steel", "Flying"],
        gender: "N",
        baseStats: {
            hp: 97,
            atk: 101,
            def: 103,
            spa: 107,
            spd: 101,
            spe: 61
        },
        abilities: {
            "0": "Beast Boost"
        },
        heightm: 9.2,
        weightkg: 999.9,
        color: "Green",
        eggGroups: ["Undiscovered"],
        tier: "New"
    },
    kartana: {
        num: 798,
        species: "Kartana",
        types: ["Grass", "Steel"],
        gender: "N",
        baseStats: {
            hp: 59,
            atk: 181,
            def: 131,
            spa: 59,
            spd: 31,
            spe: 109
        },
        abilities: {
            "0": "Beast Boost"
        },
        heightm: 0.3,
        weightkg: 0.1,
        color: "White",
        eggGroups: ["Undiscovered"],
        tier: "New"
    },
    guzzlord: {
        num: 799,
        species: "Guzzlord",
        types: ["Dark", "Dragon"],
        gender: "N",
        baseStats: {
            hp: 223,
            atk: 101,
            def: 53,
            spa: 97,
            spd: 53,
            spe: 43
        },
        abilities: {
            "0": "Beast Boost"
        },
        heightm: 5.5,
        weightkg: 888,
        color: "Black",
        eggGroups: ["Undiscovered"],
        tier: "New"
    },
    necrozma: {
        num: 800,
        species: "Necrozma",
        types: ["Psychic"],
        gender: "N",
        baseStats: {
            hp: 97,
            atk: 107,
            def: 101,
            spa: 127,
            spd: 89,
            spe: 79
        },
        abilities: {
            "0": "Prism Armor"
        },
        heightm: 2.4,
        weightkg: 230,
        color: "Black",
        eggGroups: ["Undiscovered"],
        tier: "New"
    },
    magearna: {
        num: 801,
        species: "Magearna",
        types: ["Steel", "Fairy"],
        gender: "N",
        baseStats: {
            hp: 80,
            atk: 95,
            def: 115,
            spa: 130,
            spd: 115,
            spe: 65
        },
        abilities: {
            "0": "Soul-Heart"
        },
        heightm: 1,
        weightkg: 80.5,
        color: "Gray",
        eggGroups: ["Undiscovered"],
        otherForms: ["magearnaoriginal"],
        tier: "New"
    },
    marshadow: {
        num: 802,
        species: "Marshadow",
        types: ["Fighting", "Ghost"],
        gender: "N",
        baseStats: {
            hp: 90,
            atk: 125,
            def: 80,
            spa: 90,
            spd: 90,
            spe: 125
        },
        abilities: {
            "0": "Technician"
        },
        heightm: 0.7,
        weightkg: 22.2,
        color: "Gray",
        eggGroups: ["Undiscovered"],
        tier: "Unreleased"
    },
    missingno: {
        num: 0,
        species: "Missingno.",
        types: ["Bird", "Normal"],
        baseStats: {
            hp: 33,
            atk: 136,
            def: 0,
            spa: 6,
            spd: 6,
            spe: 29
        },
        abilities: {
            "0": ""
        },
        heightm: 3,
        weightkg: 1590.8,
        color: "Gray",
        eggGroups: ["Undiscovered"],
        tier: "Illegal",
        isNonstandard: true
    },
    tomohawk: {
        num: -1,
        species: "Tomohawk",
        types: ["Flying", "Fighting"],
        baseStats: {
            hp: 105,
            atk: 60,
            def: 90,
            spa: 115,
            spd: 80,
            spe: 85
        },
        abilities: {
            "0": "Intimidate",
            "1": "Prankster",
            H: "Justified"
        },
        heightm: 1.27,
        weightkg: 37.2,
        color: "Red",
        eggGroups: ["Field", "Flying"],
        tier: "CAP",
        isNonstandard: true
    },
    necturna: {
        num: -2,
        species: "Necturna",
        types: ["Grass", "Ghost"],
        gender: "F",
        baseStats: {
            hp: 64,
            atk: 120,
            def: 100,
            spa: 85,
            spd: 120,
            spe: 81
        },
        abilities: {
            "0": "Forewarn",
            H: "Telepathy"
        },
        heightm: 1.65,
        weightkg: 49.6,
        color: "Black",
        eggGroups: ["Grass", "Field"],
        tier: "CAP",
        isNonstandard: true
    },
    mollux: {
        num: -3,
        species: "Mollux",
        types: ["Fire", "Poison"],
        baseStats: {
            hp: 95,
            atk: 45,
            def: 83,
            spa: 131,
            spd: 105,
            spe: 76
        },
        abilities: {
            "0": "Dry Skin",
            H: "Illuminate"
        },
        heightm: 1.2,
        weightkg: 41,
        color: "Pink",
        eggGroups: ["Fairy", "Field"],
        tier: "CAP",
        isNonstandard: true
    },
    aurumoth: {
        num: -4,
        species: "Aurumoth",
        types: ["Bug", "Psychic"],
        baseStats: {
            hp: 110,
            atk: 120,
            def: 99,
            spa: 117,
            spd: 60,
            spe: 94
        },
        abilities: {
            "0": "Weak Armor",
            "1": "No Guard",
            H: "Illusion"
        },
        heightm: 2.1,
        weightkg: 193,
        color: "Purple",
        eggGroups: ["Bug"],
        tier: "CAP",
        isNonstandard: true
    },
    malaconda: {
        num: -5,
        species: "Malaconda",
        types: ["Dark", "Grass"],
        baseStats: {
            hp: 115,
            atk: 100,
            def: 60,
            spa: 40,
            spd: 130,
            spe: 55
        },
        abilities: {
            "0": "Harvest",
            "1": "Infiltrator"
        },
        heightm: 5.5,
        weightkg: 108.8,
        color: "Brown",
        eggGroups: ["Grass", "Dragon"],
        tier: "CAP",
        isNonstandard: true
    },
    cawmodore: {
        num: -6,
        species: "Cawmodore",
        types: ["Steel", "Flying"],
        baseStats: {
            hp: 50,
            atk: 92,
            def: 130,
            spa: 65,
            spd: 75,
            spe: 118
        },
        abilities: {
            "0": "Intimidate",
            "1": "Volt Absorb",
            H: "Big Pecks"
        },
        heightm: 1.7,
        weightkg: 37,
        color: "Black",
        eggGroups: ["Flying"],
        tier: "CAP",
        isNonstandard: true
    },
    volkraken: {
        num: -7,
        species: "Volkraken",
        types: ["Water", "Fire"],
        baseStats: {
            hp: 100,
            atk: 45,
            def: 80,
            spa: 135,
            spd: 100,
            spe: 95
        },
        abilities: {
            "0": "Analytic",
            "1": "Infiltrator",
            H: "Pressure"
        },
        heightm: 1.3,
        weightkg: 44.5,
        color: "Red",
        eggGroups: ["Water 1", "Water 2"],
        tier: "CAP",
        isNonstandard: true
    },
    plasmanta: {
        num: -8,
        species: "Plasmanta",
        types: ["Electric", "Poison"],
        baseStats: {
            hp: 60,
            atk: 57,
            def: 119,
            spa: 131,
            spd: 98,
            spe: 100
        },
        abilities: {
            "0": "Storm Drain",
            "1": "Vital Spirit",
            H: "Telepathy"
        },
        heightm: 7,
        weightkg: 460,
        color: "Purple",
        eggGroups: ["Water 1", "Water 2"],
        tier: "CAP",
        isNonstandard: true
    },
    naviathan: {
        num: -9,
        species: "Naviathan",
        types: ["Water", "Steel"],
        baseStats: {
            hp: 103,
            atk: 110,
            def: 90,
            spa: 95,
            spd: 65,
            spe: 97
        },
        abilities: {
            "0": "Water Veil",
            "1": "Heatproof",
            H: "Light Metal"
        },
        heightm: 3,
        weightkg: 510,
        color: "Gray",
        eggGroups: ["Water 1", "Field"],
        tier: "CAP",
        isNonstandard: true
    },
    crucibelle: {
        num: -10,
        species: "Crucibelle",
        types: ["Rock", "Poison"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 106,
            atk: 105,
            def: 65,
            spa: 75,
            spd: 85,
            spe: 104
        },
        abilities: {
            "0": "Regenerator",
            "1": "Mold Breaker",
            H: "Liquid Ooze"
        },
        heightm: 1.3,
        weightkg: 23.6,
        color: "Purple",
        eggGroups: ["Amorphous", "Mineral"],
        otherFormes: ["crucibellemega"],
        tier: "CAP",
        isNonstandard: true
    },
    crucibellemega: {
        num: -10,
        species: "Crucibelle-Mega",
        baseSpecies: "Crucibelle",
        forme: "Mega",
        formeLetter: "M",
        types: ["Rock", "Poison"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 106,
            atk: 135,
            def: 75,
            spa: 85,
            spd: 125,
            spe: 114
        },
        abilities: {
            "0": "Magic Guard"
        },
        heightm: 1.4,
        weightkg: 22.5,
        color: "Purple",
        eggGroups: ["Amorphous", "Mineral"],
        tier: "CAP",
        requiredItem: "Crucibellite",
        isNonstandard: true
    },
    kerfluffle: {
        num: -11,
        species: "Kerfluffle",
        types: ["Fairy", "Fighting"],
        baseStats: {
            hp: 84,
            atk: 78,
            def: 86,
            spa: 115,
            spd: 88,
            spe: 119
        },
        abilities: {
            "0": "Natural Cure",
            "1": "Aroma Veil",
            H: "Friend Guard"
        },
        heightm: 2.1,
        weightkg: 24.2,
        color: "Pink",
        eggGroups: ["Fairy", "Human-Like"],
        tier: "CAP",
        isNonstandard: true
    },
    syclant: {
        num: -51,
        species: "Syclant",
        types: ["Ice", "Bug"],
        baseStats: {
            hp: 70,
            atk: 116,
            def: 70,
            spa: 114,
            spd: 64,
            spe: 121
        },
        abilities: {
            "0": "Compound Eyes",
            "1": "Mountaineer"
        },
        heightm: 1.7,
        weightkg: 52,
        color: "Blue",
        eggGroups: ["Bug"],
        tier: "CAP",
        isNonstandard: true
    },
    revenankh: {
        num: -52,
        species: "Revenankh",
        types: ["Ghost", "Fighting"],
        baseStats: {
            hp: 90,
            atk: 105,
            def: 90,
            spa: 65,
            spd: 110,
            spe: 65
        },
        abilities: {
            "0": "Shed Skin",
            "1": "Air Lock"
        },
        heightm: 1.8,
        weightkg: 44,
        color: "White",
        eggGroups: ["Amorphous", "Human-Like"],
        tier: "CAP",
        isNonstandard: true
    },
    pyroak: {
        num: -53,
        species: "Pyroak",
        types: ["Fire", "Grass"],
        baseStats: {
            hp: 120,
            atk: 70,
            def: 105,
            spa: 95,
            spd: 90,
            spe: 60
        },
        abilities: {
            "0": "Rock Head",
            "1": "Battle Armor"
        },
        heightm: 2.1,
        weightkg: 168,
        color: "Brown",
        eggGroups: ["Monster", "Dragon"],
        tier: "CAP",
        isNonstandard: true
    },
    fidgit: {
        num: -54,
        species: "Fidgit",
        types: ["Poison", "Ground"],
        baseStats: {
            hp: 95,
            atk: 76,
            def: 109,
            spa: 90,
            spd: 80,
            spe: 105
        },
        abilities: {
            "0": "Persistent",
            "1": "Vital Spirit"
        },
        heightm: 0.9,
        weightkg: 53,
        color: "Purple",
        eggGroups: ["Field"],
        tier: "CAP",
        isNonstandard: true
    },
    stratagem: {
        num: -55,
        species: "Stratagem",
        types: ["Rock"],
        gender: "N",
        baseStats: {
            hp: 90,
            atk: 60,
            def: 65,
            spa: 120,
            spd: 70,
            spe: 130
        },
        abilities: {
            "0": "Levitate",
            "1": "Technician"
        },
        heightm: 0.9,
        weightkg: 45,
        color: "Gray",
        eggGroups: ["Undiscovered"],
        tier: "CAP",
        isNonstandard: true
    },
    arghonaut: {
        num: -56,
        species: "Arghonaut",
        types: ["Water", "Fighting"],
        baseStats: {
            hp: 105,
            atk: 110,
            def: 95,
            spa: 70,
            spd: 100,
            spe: 75
        },
        abilities: {
            "0": "Unaware"
        },
        heightm: 1.7,
        weightkg: 151,
        color: "Green",
        eggGroups: ["Water 1", "Water 3"],
        tier: "CAP",
        isNonstandard: true
    },
    kitsunoh: {
        num: -57,
        species: "Kitsunoh",
        types: ["Steel", "Ghost"],
        baseStats: {
            hp: 80,
            atk: 103,
            def: 85,
            spa: 55,
            spd: 80,
            spe: 110
        },
        abilities: {
            "0": "Frisk",
            "1": "Limber"
        },
        heightm: 1.1,
        weightkg: 51,
        color: "Gray",
        eggGroups: ["Field"],
        tier: "CAP",
        isNonstandard: true
    },
    cyclohm: {
        num: -58,
        species: "Cyclohm",
        types: ["Electric", "Dragon"],
        baseStats: {
            hp: 108,
            atk: 60,
            def: 118,
            spa: 112,
            spd: 70,
            spe: 80
        },
        abilities: {
            "0": "Shield Dust",
            "1": "Static"
        },
        heightm: 1.6,
        weightkg: 59,
        color: "Yellow",
        eggGroups: ["Dragon", "Monster"],
        tier: "CAP",
        isNonstandard: true
    },
    colossoil: {
        num: -59,
        species: "Colossoil",
        types: ["Dark", "Ground"],
        baseStats: {
            hp: 133,
            atk: 122,
            def: 72,
            spa: 71,
            spd: 72,
            spe: 95
        },
        abilities: {
            "0": "Rebound",
            "1": "Guts"
        },
        heightm: 2.6,
        weightkg: 683.6,
        color: "Brown",
        eggGroups: ["Water 2", "Field"],
        tier: "CAP",
        isNonstandard: true
    },
    krilowatt: {
        num: -60,
        species: "Krilowatt",
        types: ["Electric", "Water"],
        baseStats: {
            hp: 151,
            atk: 84,
            def: 73,
            spa: 83,
            spd: 74,
            spe: 105
        },
        abilities: {
            "0": "Trace",
            "1": "Magic Guard"
        },
        heightm: 0.7,
        weightkg: 10.6,
        color: "Red",
        eggGroups: ["Water 1", "Fairy"],
        tier: "CAP",
        isNonstandard: true
    },
    voodoom: {
        num: -61,
        species: "Voodoom",
        types: ["Fighting", "Dark"],
        baseStats: {
            hp: 90,
            atk: 85,
            def: 80,
            spa: 105,
            spd: 80,
            spe: 110
        },
        abilities: {
            "0": "Volt Absorb",
            "1": "Lightning Rod"
        },
        heightm: 2,
        weightkg: 75.5,
        color: "Brown",
        eggGroups: ["Human-Like", "Ground"],
        tier: "CAP",
        isNonstandard: true
    }
};
