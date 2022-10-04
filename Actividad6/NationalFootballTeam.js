"use strict";
exports.__esModule = true;
exports.NationalFootballTeam = void 0;
var NationalFootballTeam = /** @class */ (function () {
    function NationalFootballTeam(nameMember, surnameMember, passportNumberMember, birthDate) {
        this.name = nameMember;
        this.surname = surnameMember;
        this.passportNumber = passportNumberMember;
        this.birthDate = birthDate;
    }
    NationalFootballTeam.prototype.getName = function () {
        return this.name;
    };
    NationalFootballTeam.prototype.getSurname = function () {
        return this.surname;
    };
    NationalFootballTeam.prototype.getBirthDate = function () {
        return this.birthDate;
    };
    NationalFootballTeam.prototype.getPassportNumber = function () {
        return this.passportNumber;
    };
    return NationalFootballTeam;
}());
exports.NationalFootballTeam = NationalFootballTeam;
