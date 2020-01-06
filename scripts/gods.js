const gods = [
	{
		name: "Achilles",
		id: "achilles",
		class: "Warrior",
		pantheon: "Greek",
		damage_type: "Physical",
		attack_type: ["Melee"],
		roles: ["Solo", "Jungle"],
		features: ["Execute", "Escape-Engage"]
	},
	{
		name: "Agni",
		id: "agni",
		class: "Mage",
		pantheon: "Hindu",
		damage_type: "Magical",
		attack_type: ["Ranged"],
		roles: ["Mid"],
		features: ["Escape-Engage"]
	},
	{
		name: "Ah Muzen Cab",
		id: "amc",
		class: "Hunter",
		pantheon: "Mayan",
		damage_type: "Physical",
		attack_type: ["Ranged"],
		roles: ["ADC"],
		features: [""]
	},
	{	
		name: "Amaterasu",
		id: "amaterasu",
		class: "Warrior",
		pantheon: "Japanese",
		damage_type: "Physical",
		attack_type: ["Melee"],
		roles: ["Solo"],
		features: ["Escape-Engage"]
	},
	{
		name: "Ah Puch",
		id: "ahpuch",
		class:"Mage",
		pantheon:"Mayan",
		damage_type: "Magical",
		attack_type: ["Ranged"],
		roles: ["Mid"],
		features: [""]
	},
	{
		name: "Anhur",
		id: "anhur",
		class: "Hunter",
		pantheon: "Egyptian",
		damage_type: "Physical",
		attack_type:["Ranged"],
		roles: ["ADC"],
		features: ["Escape-Engage"]
	},
	{
		name: "Anubis",
		id: "anubis",
		class: "Mage",
		pantheon: "Egyptian",
		damage_type: "Magical",
		attack_type: ["Ranged"],
		roles: ["Mid"],
		features: [""]
	},
	{
		name: "Ao Kuang",
		id: "aokuang",
		class: "Mage",
		pantheon: "Chinese",
		damage_type: "Magical",
		attack_type: ["Melee"],
		roles: ["Jungle"],
		features: ["Execute", "Invisible", "Escape-Engage"]
	},
	{
		name: "Aphrodite",
		id: "aphrodite",
		class: "Mage",
		pantheon: "Greek",
		damage_type: "Magical",
		attack_type: ["Ranged"],
		roles: ["Support", "Mid", "Solo"],
		features: ["Healer"]
	},
	{
		name: "Apollo",
		id: "apollo",
		class: "Hunter",
		pantheon: "Greek",
		damage_type: "Physical",
		attack_type: ["Ranged"],
		roles: ["ADC"],
		features: ["Global-Ult", "Escape-Engage"]
	},
	{
		name: "Arachne",
		id: "arachne",
		class: "Assassin",
		pantheon: "Greek",
		damage_type: "Physical",
		attack_type: ["Melee"],
		roles: ["Jungle"],
		features: ["Escape-Engage"]
	},
	{
		name: "Ares",
		id: "ares",
		class: "Guardian",
		pantheon: "Greek",
		damage_type: "Magical",
		attack_type: ["Melee"],
		roles: ["Support"],
		features: [""]
	},
	{
		name: "Artemis",
		id: "artemis",
		class: "Hunter",
		pantheon: "Greek",
		damage_type: "Physical",
		attack_type: ["Ranged"],
		roles: ["ADC"],
		features: [""]
	},
	{
		name: "Artio",
		id: "artio",
		class: "Guardian",
		pantheon: "Celtic",
		damage_type: "Magical",
		attack_type: ["Melee"],
		roles: ["Support", "Solo"],
		features: ["Healer", "Stance-Switching", "Escape-Engage"]
	},
	{
		name: "Athena",
		id: "athena",
		class: "Guardian",
		pantheon: "Greek",
		damage_type: "Magical",
		attack_type: ["Melee"],
		roles: ["Support"],
		features: ["Global-Ult", "Escape-Engage"]
	},
	{
		name: "Awilix",
		id: "awilix",
		class: "Assassin",
		pantheon: "Mayan",
		damage_type: "Physical",
		attack_type: ["Melee"],
		roles: ["Jungle"],
		features: ["Escape-Engage"]
	},
	{
		name: "Bacchus",
		id: "bacchus",
		class: "Guardian",
		pantheon: "Roman",
		damage_type: "Magical",
		attack_type: ["Melee"],
		roles: ["Support"],
		features: ["Escape-Engage"]
	},
	{
		name: "Bakasura",
		id: "bakasura",
		class: "Assassin",
		pantheon: "Hindu",
		damage_type: "Physical",
		attack_type: ["Melee"],
		roles: ["Jungle"],
		features: ["Escape-Engage"]
	},
    {
        name: "Baron Samedi",
        id: "baronsamedi",
        class: "Mage",
        pantheon: "Voodoo",
        damage_type: "Magical",
        attack_type: ["Ranged"],
        roles: ["Support", "Mid", "Jungle"],
        features: ["Healer"]
    },
	{
		name: "Bastet",
		id: "bastet",
		class: "Assassin",
		pantheon: "Egyptian",
		damage_type: "Physical",
		attack_type: ["Melee"],
		roles: ["Assassin"],
		features: ["Escape-Engage"]
	},
	{
		name: "Bellona",
		id: "bellona",
		class: "Warrior",
		pantheon: "Roman",
		damage_type: "Physical",
		attack_type: ["Melee"],
		roles: ["Warrior"],
		features: ["Escape-Engage"]
	},
	{
		name: "Cabrakan",
		id: "cabrakan",
		class: "Guardian",
		pantheon: "Mayan",
		damage_type: "Magical",
		attack_type: ["Melee"],
		roles: ["Support", "Jungle", "Solo"],
		features: [""]
	},
	{
		name: "Camazotz",
		id: "camazotz",
		class: "Assassin",
		pantheon: "Mayan",
		damage_type: "Physical",
		attack_type: ["Melee"],
		roles: ["Jungle"],
		features: ["Escape-Engage"]
	},
	{
		name: "Cerberus",
		id: "cerberus",
		class: "Guardian",
		pantheon: "Greek",
		damage_type: "Magical",
		attack_type: ["Melee"],
		roles: ["Support", "Solo"],
		features: ["Escape-Engage"]
	},
	{
		name: "Cernunnos",
		id: "cernunnos",
		class: "Hunter",
		pantheon: "Celtic",
		damage_type: "Physical",
		attack_type: ["Ranged"],
		roles: ["ADC"],
		features: ["Escape-Engage"]
	},
	{
		name: "Chaac",
		id: "chaac",
		class: "Warrior",
		pantheon: "Mayan",
		damage_type: "Physical",
		attack_type: ["Melee"],
		roles: ["Solo"],
		features: ["Escape-Engage"]
	},
	{
		name: "Chang'e",
		id: "change",
		class: "Mage",
		pantheon: "Chinese",
		damage_type: "Magical",
		attack_type: ["Ranged"],
		roles: ["Mid", "Solo"],
		features: ["Healer"]
	},
	{
		name: "Chernobog",
		id: "chernobog",
		class: "Hunter",
		pantheon: "Slavic",
		damage_type: "Physical",
		attack_type: ["Ranged"],
		roles: ["ADC","Mid"],
		features: ["Global-Ult", "Escape-Engage"]
	},
	{
		name: "Chiron",
		id: "chiron",
		class: "Hunter",
		pantheon: "Greek",
		damage_type: "Physical",
		attack_type: ["Ranged"],
		roles: ["ADC"],
		features: ["Healer", "Escape-Engage"]
	},
	{
		name: "Chronos",
		id: "chronos",
		class: "Mage",
		pantheon: "Greek",
		damage_type: "Magical",
		attack_type: ["Ranged"],
		roles: ["ADC","Mid"],
		features: ["Escape-Engage"]
	},
	{
		name: "Cu Chulainn",
		id: "cuchulainn",
		class: "Warrior",
		pantheon: "Celtic",
		damage_type: "Physical",
		attack_type: ["Melee"],
		roles: ["Jungle", "Solo"],
		features: ["Escape-Engage"]
	},
	{
		name: "Cupid",
		id: "cupid",
		class: "Hunter",
		pantheon: "Roman",
		damage_type: "Physical",
		attack_type: ["Ranged"],
		roles: ["ADC"],
		features: ["Healer", "Escape-Engage"]
	},
	{
		name: "Da Ji",
		id: "daji",
		class: "Assassin",
		pantheon: "Chinese",
		damage_type: "Physical",
		attack_type: ["Melee"],
		roles: ["Assassin"],
		features: ["Escape-Engage"]
	},
	{
		name: "Discordia",
		id: "discordia",
		class: "Mage",
		pantheon: "Roman",
		damage_type: "Magical",
		attack_type: ["Ranged"],
		roles: ["Mid"],
		features: ["Invisible", "Escape-Engage"]
	},
	{
		name: "Erlang Shen",
		id: "erlangshen",
		class: "Warrior",
		pantheon: "Chinese",
		damage_type: "Physical",
		attack_type: ["Melee"],
		roles: ["Jungle", "Solo"],
		features: ["Escape-Engage"]
	},
	{
		name: "Fafnir",
		id: "fafnir",
		class: "Guardian",
		pantheon: "Norse",
		damage_type: "Magical",
		attack_type: ["Melee"],
		roles: ["Support"],
		features: ["Escape-Engage"]
	},
	{
		name: "Fenrir",
		id: "fenrir",
		class: "Assassin",
		pantheon: "Norse",
		damage_type: "Physical",
		attack_type: ["Melee"],
		roles: ["Jungle"],
		features: ["Escape-Engage"]
	},
	{
		name: "Freya",
		id: "freya",
		class: "Mage",
		pantheon: "Norse",
		damage_type: "Magical",
		attack_type: ["Melee","Ranged"],
		roles: ["ADC", "Mid", "Jungle"],
		features: [""]
	},
	{
		name: "Ganesha",
		id: "ganesha",
		class: "Guardian",
		pantheon: "Hindu",
		damage_type: "Magical",
		attack_type: ["Melee"],
		roles: ["Support"],
		features: ["Escape-Engage"]
	},
	{
		name: "Geb",
		id: "geb",
		class: "Guardian",
		pantheon: "Egyptian",
		damage_type: "Magical",
		attack_type: ["Melee"],
		roles: ["Support"],
		features: ["Escape-Engage"]
	},
	{
		name: "Guan Yu",
		id: "guanyu",
		class: "Warrior",
		pantheon: "Chinese",
		damage_type: "Physical",
		attack_type: ["Melee"],
		roles: ["Solo", "Support"],
		features: ["Healer", "Escape-Engage"]
	},
	{
		name: "Hachiman",
		id: "hachiman",
		class: "Hunter",
		pantheon: "Japanese",
		damage_type: "Physical",
		attack_type: ["Ranged"],
		roles: ["ADC"],
		features: ["Escape-Engage"]
	},
	{
		name: "Hades",
		id: "hades",
		class: "Mage",
		pantheon: "Greek",
		damage_type: "Magical",
		attack_type: ["Ranged"],
		roles: ["Mid", "Solo"],
		features: ["Escape-Engage"]
	},
	{
		name: "He Bo",
		id: "hebo",
		class: "Mage",
		pantheon: "Chinese",
		damage_type: "Magical",
		attack_type: ["Ranged"],
		roles: ["Mid", "Jungle"],
		features: [""]
	},
	{
		name: "Hel",
		id: "hel",
		class: "Mage",
		pantheon: "Norse",
		damage_type: "Magical",
		attack_type: ["Ranged"],
		roles: ["Mid", "Solo"],
		features: ["Healer", "Stance-Switching"]
	},
	{
		name: "Hercules",
		id: "hercules",
		class: "Warrior",
		pantheon: "Roman",
		damage_type: "Physical",
		attack_type: ["Melee"],
		roles: ["Solo", "Support", "Jungle"],
		features: ["Escape-Engage"]
	},
	{
		name: "Hou Yi",
		id: "houyi",
		class: "Hunter",
		pantheon: "Chinese",
		damage_type: "Physical",
		attack_type: ["Ranged"],
		roles: ["ADC"],
		features: ["Escape-Engage"]
	},
	{
		name: "Hun Batz",
		id: "hunbatz",
		class: "Assassin",
		pantheon: "Mayan",
		damage_type: "Physical",
		attack_type: ["Melee"],
		roles: ["Jungle"],
		features: ["Escape-Engage"]
	},
	{
		name: "Isis",
		id: "isis",
		class: "Mage",
		pantheon: "Egyptian",
		damage_type: "Magical",
		attack_type: ["Ranged"],
		roles: ["Mid"],
		features: [""]
	},
	{
		name: "Izanami",
		id: "izanami",
		class: "Hunter",
		pantheon: "Japanese",
		damage_type: "Physical",
		attack_type: ["Ranged"],
		roles: ["ADC"],
		features: ["Invisible", "Escape-Engage"]
	},
	{
		name: "Janus",
		id: "janus",
		class: "Mage",
		pantheon: "Roman",
		damage_type: "Magical",
		attack_type: ["Ranged"],
		roles: ["Mid"],
		features: ["Global-Ult", "Escape-Engage"]
	},
	{
		name: "Jing Wei",
		id: "jingwei",
		class: "Hunter",
		pantheon: "Chinese",
		damage_type: "Physical",
		attack_type: ["Ranged"],
		roles: ["ADC"],
		features: ["Escape-Engage"]
	},
	{
		name: "Kali",
		id: "kali",
		class: "Assassin",
		pantheon: "Hindu",
		damage_type: "Physical",
		attack_type: ["Melee"],
		roles: ["Jungle"],
		features: ["Escape-Engage"]
	},
	{
		name: "Khepri",
		id: "khepri",
		class: "Guardian",
		pantheon: "Egyptian",
		damage_type: "Magical",
		attack_type: ["Melee"],
		roles: ["Support"],
		features: ["Escape-Engage"]
	},
	{
		name: "Kukulkan",
		id: "kukulkan",
		class: "Mage",
		pantheon: "Mayan",
		damage_type: "Magical",
		attack_type: ["Ranged"],
		roles: ["Mid"],
		features: [""]
	},
	{
		name: "Kumbhakarna",
		id: "kumbhakarna",
		class: "Guardian",
		pantheon: "Hindu",
		damage_type: "Magical",
		attack_type: ["Melee"],
		roles: ["Support"],
		features: ["Escape-Engage"]
	},
	{
		name: "Kuzenbo",
		id: "kuzenbo",
		class: "Guardian",
		pantheon: "Japanese",
		damage_type: "Magical",
		attack_type: ["Melee"],
		roles: ["Support", "Solo"],
		features: ["Escape-Engage"]
	},
	{
		name: "Loki",
		id: "loki",
		class: "Assassin",
		pantheon: "Norse",
		damage_type: "Physical",
		attack_type: ["Melee"],
		roles: ["Jungle", "Solo"],
		features: ["Invisible", "Escape-Engage"]
	},
	{
		name: "Medusa",
		id: "medusa",
		class: "Hunter",
		pantheon: "Greek",
		damage_type: "Physical",
		attack_type: ["Ranged"],
		roles: ["ADC", "Mid"],
		features: ["Escape-Engage"]
	},
	{
		name: "Mercury",
		id: "mercury",
		class: "Assassin",
		pantheon: "Roman",
		damage_type: "Physical",
		attack_type: ["Melee"],
		roles: ["Jungle"],
		features: ["Escape-Engage"]
	},
	{
		name: "Ne Zha",
		id: "nezha",
		class: "Assassin",
		pantheon: "Chinese",
		damage_type: "Physical",
		attack_type: ["Melee"],
		roles: ["Jungle"],
		features: ["Escape-Engage"]
	},
	{
		name: "Neith",
		id: "neith",
		class: "Hunter",
		pantheon: "Egyptian",
		damage_type: "Physical",
		attack_type: ["Ranged"],
		roles: ["ADC", "Mid"],
		features: ["Global-Ult", "Escape-Engage"]
	},
	{
		name: "Nemesis",
		id: "nemesis",
		class: "Assassin",
		pantheon: "Greek",
		damage_type: "Physical",
		attack_type: ["Melee"],
		roles: ["Jungle"],
		features: ["Escape-Engage"]
	},
	{
		name: "Nike",
		id: "nike",
		class: "Warrior",
		pantheon: "Greek",
		damage_type: "Physical",
		attack_type: ["Melee"],
		roles: ["Solo"],
		features: ["Escape-Engage"]
	},
	{
		name: "Nox",
		id: "nox",
		class: "Mage",
		pantheon: "Roman",
		damage_type: "Magical",
		attack_type: ["Ranged"],
		roles: ["Mid", "Support"],
		features: ["Escape-Engage"]
	},
	{
		name: "Nu Wa",
		id: "nuwa",
		class: "Mage",
		pantheon: "Chinese",
		damage_type: "Magical",
		attack_type: ["Ranged"],
		roles: ["Mid"],
		features: ["Global-Ult", "Invisible"]
	},
	{
		name: "Odin",
		id: "odin",
		class: "Warrior",
		pantheon: "Norse",
		damage_type: "Physical",
		attack_type: ["Melee"],
		roles: ["Solo", "Jungle"],
		features: ["Escape-Engage"]
	},
	{
		name: "Osiris",
		id: "osiris",
		class: "Warrior",
		pantheon: "Egyptian",
		damage_type: "Physical",
		attack_type: ["Melee"],
		roles: ["Solo", "Jungle"],
		features: ["Escape-Engage"]
	},
	{
		name: "Poseidon",
		id: "poseidon",
		class: "Mage",
		pantheon: "Greek",
		damage_type: "Magical",
		attack_type: ["Ranged"],
		roles: ["Mid"],
		features: [""]
	},
	{
		name: "Ra",
		id: "ra",
		class: "Mage",
		pantheon: "Egyptian",
		damage_type: "Magical",
		attack_type: ["Ranged"],
		roles: ["Mid"],
		features: ["Healer"]
	},
	{
		name: "Raijin",
		id: "raijin",
		class: "Mage",
		pantheon: "Japanese",
		damage_type: "Magical",
		attack_type: ["Ranged"],
		roles: ["Mid"],
		features: ["Escape-Engage"]
	},
	{
		name: "Rama",
		id: "rama",
		class: "Hunter",
		pantheon: "Hindu",
		damage_type: "Physical",
		attack_type: ["Ranged"],
		roles: ["ADC"],
		features: ["Escape-Engage"]
	},
	{
		name: "Ratatoskr",
		id: "ratatoskr",
		class: "Assassin",
		pantheon: "Norse",
		damage_type: "Physical",
		attack_type: ["Melee"],
		roles: ["Jungle"],
		features: ["Escape-Engage"]
	},
	{
		name: "Ravana",
		id: "ravana",
		class: "Warrior",
		pantheon: "Hindu",
		damage_type: "Physical",
		attack_type: ["Melee"],
		roles: ["Solo"],
		features: ["Escape-Engage"]
	},
	{
		name: "Scylla",
		id: "scylla",
		class: "Mage",
		pantheon: "Greek",
		damage_type: "Magical",
		attack_type: ["Ranged"],
		roles: ["Mid"],
		features: ["Escape-Engage"]
	},
	{
		name: "Serqet",
		id: "serqet",
		class: "Assassin",
		pantheon: "Egyptian",
		damage_type: "Physical",
		attack_type: ["Melee"],
		roles: ["Jungle"],
		features: ["Invisible", "Escape-Engage"]
	},
	{
		name: "Skadi",
		id: "skadi",
		class: "Hunter",
		pantheon: "Norse",
		damage_type: "Physical",
		attack_type: ["Ranged"],
		roles: ["ADC", "Mid"],
		features: [""]
	},
	{
		name: "Sobek",
		id: "sobek",
		class: "Guardian",
		pantheon: "Egyptian",
		damage_type: "Magical",
		attack_type: ["Melee"],
		roles: ["Support", "Solo"],
		features: ["Escape-Engage"]
	},
	{
		name: "Sol",
		id: "sol",
		class: "Mage",
		pantheon: "Norse",
		damage_type: "Magical",
		attack_type: ["Ranged"],
		roles: ["ADC", "Mid", "Solo"],
		features: ["Escape-Engage"]
	},
	{
		name: "Sun Wukong",
		id: "sunwukong",
		class: "Warrior",
		pantheon: "Chinese",
		damage_type: "Physical",
		attack_type: ["Melee"],
		roles: ["Solo"],
		features: ["Escape-Engage"]
	},
	{
		name: "Susano",
		id: "susano",
		class: "Assassin",
		pantheon: "Japanese",
		damage_type: "Physical",
		attack_type: ["Melee"],
		roles: ["Jungle", "Solo"],
		features: ["Escape-Engage"]
	},
	{
		name: "Sylvanus",
		id: "sylvanus",
		class: "Guardian",
		pantheon: "Roman",
		damage_type: "Magical",
		attack_type: ["Ranged"],
		roles: ["Support"],
		features: ["Healer"]
	},
	{
		name: "Terra",
		id: "terra",
		class: "Guardian",
		pantheon: "Roman",
		damage_type: "Magical",
		attack_type: ["Melee"],
		roles: ["Support"],
		features: ["Healer", "Escape-Engage"]
	},
	{
		name: "Thanatos",
		id: "thanatos",
		class: "Assassin",
		pantheon: "Greek",
		damage_type: "Physical",
		attack_type: ["Melee"],
		roles: ["Jungle"],
		features: ["Execute", "Escape-Engage"]
	},
	{
		name: "The Morrigan",
		id: "themorrigan",
		class: "Mage",
		pantheon: "Celtic",
		damage_type: "Magical",
		attack_type: ["Ranged"],
		roles: ["Jungle", "Mid"],
		features: ["Invisible"]
	},
	{
		name: "Thor",
		id: "thor",
		class: "Assassin",
		pantheon: "Norse",
		damage_type: "Physical",
		attack_type: ["Melee"],
		roles: ["Jungle"],
		features: ["Escape-Engage"]
	},
	{
		name: "Thoth",
		id: "thoth",
		class: "Mage",
		pantheon: "Egyptian",
		damage_type: "Magical",
		attack_type: ["Ranged"],
		roles: ["Mid"],
		features: ["Escape-Engage"]
	},
	{
		name: "Tyr",
		id: "tyr",
		class: "Warrior",
		pantheon: "Norse",
		damage_type: "Physical",
		attack_type: ["Melee"],
		roles: ["Solo"],
		features: ["Escape-Engage", "Stance-Switching"]
	},
	{
		name: "Ullr",
		id: "ullr",
		class: "Hunter",
		pantheon: "Norse",
		damage_type: "Physical",
		attack_type: ["Ranged", "Melee"],
		roles: ["ADC"],
		features: ["Escape-Engage", "Stance-Switching"]
	},
	{
		name: "Vamana",
		id: "vamana",
		class: "Warrior",
		pantheon: "Hindu",
		damage_type: "Physical",
		attack_type: ["Melee"],
		roles: ["Solo"],
		features: ["Escape-Engage"]
	},
	{
		name: "Vulcan",
		id: "vulcan",
		class: "Mage",
		pantheon: "Roman",
		damage_type: "Magical",
		attack_type: ["Ranged"],
		roles: ["Mid"],
		features: [""]
	},
	{
		name: "Xbalanque",
		id: "xbalanque",
		class: "Hunter",
		pantheon: "Mayan",
		damage_type: "Physical",
		attack_type: ["Ranged"],
		roles: ["ADC"],
		features: ["Global-Ult", "Escape-Engage"]
	},
	{
		name: "Xing Tian",
		id: "xingtian",
		class: "Guardian",
		pantheon: "Chinese",
		damage_type: "Magical",
		attack_type: ["Melee"],
		roles: ["Support", "Solo"],
		features: ["Escape-Engage"]
	},
	{
		name: "Ymir",
		id: "ymir",
		class: "Guardian",
		pantheon: "Norse",
		damage_type: "Magical",
		attack_type: ["Melee"],
		roles: ["Support", "Jungle"],
		features: [""]
	},
	{
		name: "Zeus",
		id: "zeus",
		class: "Mage",
		pantheon: "Greek",
		damage_type: "Magical",
		attack_type: ["Ranged"],
		roles: ["Mid"],
		features: [""]
	},
	{
		name: "Zhong Kui",
		id: "zhongkui",
		class: "Mage",
		pantheon: "Chinese",
		damage_type: "Magical",
		attack_type: ["Ranged"],
		roles: ["Mid", "Solo"],
		features: [""]
	}
];
