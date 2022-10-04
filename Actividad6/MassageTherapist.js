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
exports.MassageTherapist = void 0;
var NationalFootballTeam_1 = require("./NationalFootballTeam");
var MassageTherapist = /** @class */ (function (_super) {
    __extends(MassageTherapist, _super);
    function MassageTherapist(nameMember, surnameMember, passportNumberMember, birthDate, collegeAndDegree, lengthOfService) {
        var _this = _super.call(this, nameMember, surnameMember, passportNumberMember, birthDate) || this;
        _this.collegeAndDegree = collegeAndDegree;
        _this.lengthOfService = lengthOfService;
        return _this;
    }
    MassageTherapist.prototype.getCollegeAndDegree = function () {
        return this.collegeAndDegree;
    };
    MassageTherapist.prototype.getLengthOfService = function () {
        return this.lengthOfService;
    };
    return MassageTherapist;
}(NationalFootballTeam_1.NationalFootballTeam));
exports.MassageTherapist = MassageTherapist;
