import {Component} from "angular2/core";
import {HeaderComponent} from "./header.component";
import {TeachersComponent} from "./teachers.component";
import {StudentsComponent} from "./students.component";
import {CoursesComponent} from "./courses.component";
import {SemesterAttendanceComponent} from "./semester-attendance.component";
import {MenuComponent} from "./menu.component";
import {ROUTER_DIRECTIVES, RouteConfig, RouterLink} from "angular2/router";

@Component({
    selector: 'main-app',
    template: `
        <cm-header></cm-header>
        <cm-menu></cm-menu>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES, HeaderComponent, MenuComponent, TeachersComponent]
})


@RouteConfig([
    {path: '/teachers', name: 'Teachers', component: TeachersComponent, useAsDefault: true},
    {path: '/courses', name: 'Courses', component: CoursesComponent},
    {path: '/students', name: 'Students', component: StudentsComponent},
    {path: '/semesterAttendance', name: 'SemesterAttendance', component: SemesterAttendanceComponent}
])
export class AppComponent{
    
}