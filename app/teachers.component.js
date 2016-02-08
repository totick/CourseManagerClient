System.register(["angular2/core", "./teachers/teacher.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, teacher_service_1;
    var TeachersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (teacher_service_1_1) {
                teacher_service_1 = teacher_service_1_1;
            }],
        execute: function() {
            TeachersComponent = (function () {
                function TeachersComponent(_teacherService) {
                    this._teacherService = _teacherService;
                }
                TeachersComponent.prototype.getTeachers = function () {
                    var _this = this;
                    this._teacherService.getTeachers().subscribe(function (data) { return _this.teachers = data.teachers; }, function (error) { return alert(error); }, function () { return console.log("Finished"); });
                };
                TeachersComponent.prototype.ngOnInit = function () {
                    this.getTeachers();
                };
                TeachersComponent = __decorate([
                    core_1.Component({
                        templateUrl: '../views/teachers.html',
                        providers: [teacher_service_1.TeacherService]
                    }), 
                    __metadata('design:paramtypes', [teacher_service_1.TeacherService])
                ], TeachersComponent);
                return TeachersComponent;
            })();
            exports_1("TeachersComponent", TeachersComponent);
        }
    }
});
//# sourceMappingURL=teachers.component.js.map