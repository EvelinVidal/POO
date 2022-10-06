"use strict";
exports.__esModule = true;
exports.NationalSoccerTeam = void 0;
var NationalSoccerTeam = /** @class */ (function () {
    function NationalSoccerTeam(nameMember, surnameMember, passportNumberMember, birthDate) {
        this.name = nameMember;
        this.surname = surnameMember;
        this.passportNumber = passportNumberMember;
        this.birthDate = birthDate;
    }
    NationalSoccerTeam.prototype.getName = function () {
        return this.name;
    };
    NationalSoccerTeam.prototype.getSurname = function () {
        return this.surname;
    };
    NationalSoccerTeam.prototype.getBirthDate = function () {
        return this.birthDate;
    };
    NationalSoccerTeam.prototype.getPassportNumber = function () {
        return this.passportNumber;
    };
    return NationalSoccerTeam;
}());
exports.NationalSoccerTeam = NationalSoccerTeam;
