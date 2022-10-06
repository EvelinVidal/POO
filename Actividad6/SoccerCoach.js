"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.SoccerCoach = void 0;
var NationalSoccerTeam_1 = require("./NationalSoccerTeam");
var SoccerCoach = /** @class */ (function (_super) {
    __extends(SoccerCoach, _super);
    function SoccerCoach(nameMember, surnameMember, passportNumberMember, birthDate, teamManaged) {
        var _this = _super.call(this, nameMember, surnameMember, passportNumberMember, birthDate) || this;
        _this.teamManaged = teamManaged;
        return _this;
    }
    SoccerCoach.prototype.getTeamManaged = function () {
        return this.teamManaged;
    };
    SoccerCoach.prototype.toString = function () {
        return "Name: " + this.getName() + '\n' + "Surname: " + this.getSurname() + '\n' + "Birth Date: " + this.getBirthDate() + '\n' + "Passport number: " + this.getPassportNumber() + "\n" + "Team managed: " + this.getTeamManaged() + "\n";
    };
    return SoccerCoach;
}(NationalSoccerTeam_1.NationalSoccerTeam));
exports.SoccerCoach = SoccerCoach;
