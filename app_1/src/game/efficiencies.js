import { Efficiency } from "./Efficiency";

const fire = "FIRE";
const water = "WATER";
const grass = "GRASS";
const electric = "ELECTRIC";

const FIRE = new Efficiency(fire, [grass], [electric], [fire, water]);
const WATER = new Efficiency(water, [fire], [], [grass, water, electric]);
const GRASS = new Efficiency(grass, [water], [electric], [grass, fire]);
const ELECTRIC = new Efficiency(electric, [water], [fire, grass], [electric]);

export { FIRE, WATER, GRASS, ELECTRIC }