import { SoccerPlayer } from "./SoccerPlayer";
import { MassageTherapist} from "./MassageTherapist";
import { SoccerCoach } from "./SoccerCoach";


let argentinianPlayer21 = new SoccerPlayer ("Paulo", "Dybala", 3874590,"15 November 1993", 177, 28, "Roma", "Number 21 playing forward, attacking midfielder");
let argentinianPlayer10 = new SoccerPlayer ("Lionel", "Messi", 48210921,"24 June 1987" ,170, 30, "Paris Saint-Germain or PSG", "Number 10 playing forward");
let sportTherapist01 = new MassageTherapist("Kevin", "Burns", 19827304, "5 May 1984", "Excercise Physiology from University of Utah in Salt Lake", "25 years active");
let coach01 = new SoccerCoach ("Lionel ", "Scaloni", 1982848,"16 May, 1978" ,"Argentina since 2018");
// console.log(argentinianPlayer21.getName())
// console.log(argentinianPlayer10.getBirthDate());
// console.log(sportTherapist01.getCollegeAndDegree());
// console.log(coach01.getTeamManaged());

console.log(argentinianPlayer10.toString());
console.log(sportTherapist01.toString());
console.log(coach01.toString());
