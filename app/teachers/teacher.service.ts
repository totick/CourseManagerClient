import {Injectable} from "angular2/core";
import {TEACHERS} from "./mock-teachers";
import {Http} from "angular2/http";
import "rxjs/add/operator/map";

@Injectable()
export class TeacherService {
    
    constructor(private _http : Http){}
    
    getTeachers(){
        return this._http.get("http://localhost:8080/CourseManager_JSF/services/teachers").map(res => res.json());
    }
    
}