import { FootballPlayer } from "./FootballPlayer";
import { MassageTherapist} from "./MassageTherapist"


let argentinianPlayer21:FootballPlayer = new FootballPlayer ("Paulo", "Dybala", 3874590,"15 November 1993", 177, 28, "Roma", "Number 21 playing forward, attacking midfielder")
let argentinianPlayer10:FootballPlayer = new FootballPlayer ("Lionel", "messi", 123,"24 June 1987" ,170, 30, "Paris Saint-Germain or PSG", "Number 10 playing forward")
let sportTherapist01:MassageTherapist = new MassageTherapist("Kevin", "Burns", 19827304, "5 May 1984", "Excercise Physiology from University of Utah in Salt Lake", "25 years active")
console.log(argentinianPlayer21.getName())
console.log(argentinianPlayer10.getBirthDate());
console.log(sportTherapist01.getCollegeAndDegree());