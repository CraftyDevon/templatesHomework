function Warcraft(name, race, type, specialization, raider){
	this.name = name;
	this.race = race;
	this.type = type;
	this.specialization = specialization;
	this.raider = false;
	this.raider = function(){
		this.raider = true;
	}

}

var treescrooge = new Warcraft("treescrooge", "Night Elf", "Druid", "Restoration", false);

