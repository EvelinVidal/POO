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
exports.SoccerPlayer = void 0;
var NationalSoccerTeam_1 = require("./NationalSoccerTeam");
var SoccerPlayer = /** @class */ (function (_super) {
    __extends(SoccerPlayer, _super);
    // private active:boolean;
    function SoccerPlayer(nameMember, surnameMember, passportNumberMember, birthDate, heightPlayer, agePlayer, teamPlayer, numberAndPositionPlayer) {
        var _this = _super.call(this, nameMember, surnameMember, passportNumberMember, birthDate) || this;
        _this.height = heightPlayer;
        _this.age = agePlayer;
        _this.team = teamPlayer;
        _this.numberAndPosition = numberAndPositionPlayer;
        return _this;
    }
    SoccerPlayer.prototype.getHeight = function () {
        return this.height;
    };
    SoccerPlayer.prototype.getAge = function () {
        return this.age;
    };
    SoccerPlayer.prototype.getTeam = function () {
        return this.team;
    };
    SoccerPlayer.prototype.getNumberAndPosition = function () {
        return this.numberAndPosition;
    };
    SoccerPlayer.prototype.toString = function () {
        return "Name: " + this.getName() + '\n' + "Surname: " + this.getSurname() + '\n' + "Birth Date: " + this.getBirthDate() + '\n' + "Passport number: " + this.getPassportNumber() + '\n' + "Height: " + this.getHeight() + " centimeters." + "\n" + "Number of t-shirt and position on field: " + this.getNumberAndPosition() + "\n" + "Team: " + this.getTeam() + "\n";
    };
    return SoccerPlayer;
}(NationalSoccerTeam_1.NationalSoccerTeam));
exports.SoccerPlayer = SoccerPlayer;
