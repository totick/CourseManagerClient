import {Component} from "angular2/core";
import {TeacherService} from "./teachers/teacher.service";
import {OnInit} from "angular2/core";
import {Teacher} from "./teachers/teacher";

@Component({
    templateUrl: '../views/teachers.html',
    providers: [TeacherService]
})

export class TeachersComponent implements OnInit {
    
    public teachers : Teacher[]
    
    constructor(private _teacherService : TeacherService){}
    
    getTeachers(){
        this._teacherService.getTeachers().then((teachers : Teacher[]) => this.teachers = teachers);
    }
    
    ngOnInit():any{
        this.getTeachers();
    }
    
}