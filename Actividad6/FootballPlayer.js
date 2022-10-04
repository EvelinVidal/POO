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
exports.FootballPlayer = void 0;
var NationalFootballTeam_1 = require("./NationalFootballTeam");
var FootballPlayer = /** @class */ (function (_super) {
    __extends(FootballPlayer, _super);
    // private active:boolean;
    function FootballPlayer(nameMember, surnameMember, passportNumberMember, birthDate, heightPlayer, agePlayer, teamPlayer, numberAndPositionPlayer) {
        var _this = _super.call(this, nameMember, surnameMember, passportNumberMember, birthDate) || this;
        _this.height = heightPlayer;
        _this.age = agePlayer;
        _this.team = teamPlayer;
        _this.numberAndPosition = numberAndPositionPlayer;
        return _this;
    }
    return FootballPlayer;
}(NationalFootballTeam_1.NationalFootballTeam));
exports.FootballPlayer = FootballPlayer;
