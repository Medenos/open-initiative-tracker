import { writable } from "svelte/store";

export class Encounter {
	title;
	summary;
	currentInitiative;
	entries;

	constructor(title = "", summary = "", currentInitiative = 0, entries = [new Entry()]) {
		this.title = title;
		this.summary = summary;
		this.currentInitiative = currentInitiative;
		this.entries = [...entries];
	}
}

export const EntryType = {
	playerCharacter: "playerCharacter",
	enemy: "enemy",
	neutral: "neutral",
	allied: "allied",
};

export class Entry {
	name;
	playedBy;
	entryType;
	initiative;
	initiativeModifier;
	level;
	hp;
	maxHp;
	tempHp;
	ac;
	notes;

	constructor(name = "", entryType = EntryType.neutral, initiative = 0, initiativeModifier = 0, level = 0, hp = 0, maxHp = 0, tempHp = 0, ac = 0, playedBy = "", notes = "") {
		this.name = name;
		this.entryType = entryType;
		this.initiative = initiative;
		this.initiativeModifier = initiativeModifier;
		this.level = level;
		this.hp = hp;
		this.maxHp = maxHp;
		this.tempHp = tempHp;
		this.ac = ac;
		this.playedBy = playedBy;
		this.notes = notes;
	}

	// TODO: Add spellbook system/spellslot count
}

class EncounterStore {
	encounters;

	constructor(encounters = [new Encounter()]) {
		this.encounters = writable(encounters);

		this.loadEncounters();
	}

	loadEncounters() {
		// TODO: Load encounters from browser local storage

		this.#seed();
	}

	#seed() {
		const seedData = [
			new Encounter(
				"Test Encounter #1 Title",
				"Test encounter #1 summary Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu non diam phasellus vestibulum. Eu ultrices vitae auctor eu. Velit egestas dui id ornare arcu. Nulla facilisi morbi tempus iaculis.",
				12,
				[
					new Entry("Grimr", EntryType.playerCharacter, 8, 2, 3, 32, 35, 10, 18, "Julien"),
					new Entry("Lorelei", EntryType.playerCharacter, 4, 2, 3, 28, 30, 0, 17, "Nathalie"),
					new Entry("Fwog", EntryType.playerCharacter, 18, 3, 3, 35, 38, 0, 16, "Yam"),
					new Entry("Sorina", EntryType.playerCharacter, 18, 3, 3, 35, 38, 0, 16, "Emile"),
					new Entry("Kemik Mage", EntryType.enemy, 21, 2, 0.5, 12, 12, 0, 15, "", "Stat: Gnoll + Chill Touch + 1 cast of Inflict Wounds"),
					new Entry("Undead Abomination", EntryType.enemy, 2, -2, 2, 75, 75, 0, 13, "", "Stat: Minotaur"),
					new Entry("Kemik Hunter", EntryType.enemy, 21, 4, 0.5, 11, 11, 0, 16, "", "Stat: Gnoll Hunter"),
				]
			),
			new Encounter(
				"Test Encounter #2 Title",
				"Test encounter #2 summary Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu non diam phasellus vestibulum. Eu ultrices vitae auctor eu. Velit egestas dui id ornare arcu. Nulla facilisi morbi tempus iaculis.",
				0,
				[
					new Entry("Grimr", EntryType.playerCharacter, 8, 2, 3, 32, 35, 10, 18, "Julien"),
					new Entry("Lorelei", EntryType.playerCharacter, 4, 2, 3, 28, 30, 0, 17, "Nathalie"),
					new Entry("Fwog", EntryType.playerCharacter, 18, 3, 3, 35, 38, 0, 16, "Yam"),
					new Entry("Sorina", EntryType.playerCharacter, 18, 3, 3, 35, 38, 0, 16, "Emile"),
					new Entry("Kemik Mage", EntryType.enemy, 21, 2, 0.5, 12, 12, 0, 15, "", "Stat: Gnoll + Chill Touch + 1 cast of Inflict Wounds"),
					new Entry("Undead Abomination", EntryType.enemy, 2, -2, 2, 75, 75, 0, 13, "", "Stat: Minotaur"),
					new Entry("Kemik Hunter", EntryType.enemy, 21, 4, 0.5, 11, 11, 0, 16, "", "Stat: Gnoll Hunter"),
				]
			),
		];

		this.encounters.set(seedData);
	}

	subscribe(run) {
		return this.encounters.subscribe(run);
	}
}

export const encounterStore = new EncounterStore();
