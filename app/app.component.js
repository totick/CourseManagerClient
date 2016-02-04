System.register(["angular2/core", "./header.component", "./teachers.component", "./students.component", "./courses.component", "./semester-attendance.component", "./menu.component", "angular2/router"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, header_component_1, teachers_component_1, students_component_1, courses_component_1, semester_attendance_component_1, menu_component_1, router_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (teachers_component_1_1) {
                teachers_component_1 = teachers_component_1_1;
            },
            function (students_component_1_1) {
                students_component_1 = students_component_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (semester_attendance_component_1_1) {
                semester_attendance_component_1 = semester_attendance_component_1_1;
            },
            function (menu_component_1_1) {
                menu_component_1 = menu_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'main-app',
                        template: "\n        <cm-header></cm-header>\n        <cm-menu></cm-menu>\n        <router-outlet></router-outlet>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES, header_component_1.HeaderComponent, menu_component_1.MenuComponent, teachers_component_1.TeachersComponent]
                    }),
                    router_1.RouteConfig([
                        { path: '/teachers', name: 'Teachers', component: teachers_component_1.TeachersComponent, useAsDefault: true },
                        { path: '/courses', name: 'Courses', component: courses_component_1.CoursesComponent },
                        { path: '/students', name: 'Students', component: students_component_1.StudentsComponent },
                        { path: '/semesterAttendance', name: 'SemesterAttendance', component: semester_attendance_component_1.SemesterAttendanceComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map