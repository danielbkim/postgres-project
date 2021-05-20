const artists = [
	{ artist_name: "Nea" },
	{ artist_name: "Felix Jaehn" },
	{ artist_name: "Gorgon City" },
	{ artist_name: "DRAMA" },
	{ artist_name: "SNBRN" },
	{ artist_name: "Autograf" },
	{ artist_name: "KOLE" },
	{ artist_name: "The Magician" },
	{ artist_name: "TYMEN" },
	{ artist_name: "MYXE" },
	{ artist_name: "The Blaze" },
	{ artist_name: "Jarami" },
	{ artist_name: "Flight Facilities" },
	{ artist_name: "Emma Louise" },
	{ artist_name: "T. Matthias" },
	{ artist_name: "Loud Luxury" },
	{ artist_name: "Ryan Shepherd" },
	{ artist_name: "Danny Howard" },
	{ artist_name: "Cityzen" },
	{ artist_name: "Kyle Watson" },
	{ artist_name: "BYOR, Armodine" },
	{ artist_name: "Wax Motif" },
	{ artist_name: "Taiki Nulight" },
	{ artist_name: "Moksi" },
	{ artist_name: "KUDA" },
	{ artist_name: "Vigiland" },
	{ artist_name: "M24" },
	{ artist_name: "LO'99" },
	{ artist_name: "HUGEL" },
	{ artist_name: "VINNE" },
	{ artist_name: "illusionize" },
	{ artist_name: "Frost" },
	{ artist_name: "Roger Sanchez" },
	{ artist_name: "Park & Sons" },
	{ artist_name: "Julie McKnight" },
	{ artist_name: "Low Steppa" },
	{ artist_name: "Jack Beats" },
	{ artist_name: "Disclosure" },
	{ artist_name: "Fatoumata Diawara" },
	{ artist_name: "Selace" },
	{ artist_name: "Diplo" },
];
exports.seed = function (knex) {
	return knex("artists").insert(artists);
};