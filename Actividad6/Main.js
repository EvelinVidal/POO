"use strict";
exports.__esModule = true;
var SoccerPlayer_1 = require("./SoccerPlayer");
var MassageTherapist_1 = require("./MassageTherapist");
var SoccerCoach_1 = require("./SoccerCoach");
var argentinianPlayer21 = new SoccerPlayer_1.SoccerPlayer("Paulo", "Dybala", 3874590, "15 November 1993", 177, 28, "Roma", "Number 21 playing forward, attacking midfielder");
var argentinianPlayer10 = new SoccerPlayer_1.SoccerPlayer("Lionel", "Messi", 48210921, "24 June 1987", 170, 30, "Paris Saint-Germain or PSG", "Number 10 playing forward");
var sportTherapist01 = new MassageTherapist_1.MassageTherapist("Kevin", "Burns", 19827304, "5 May 1984", "Excercise Physiology from University of Utah in Salt Lake", "25 years active");
var coach01 = new SoccerCoach_1.SoccerCoach("Lionel ", "Scaloni", 1982848, "16 May, 1978", "Argentina since 2018");
// console.log(argentinianPlayer21.getName())
// console.log(argentinianPlayer10.getBirthDate());
// console.log(sportTherapist01.getCollegeAndDegree());
// console.log(coach01.getTeamManaged());
console.log(argentinianPlayer10.toString());
console.log(sportTherapist01.toString());
console.log(coach01.toString());
