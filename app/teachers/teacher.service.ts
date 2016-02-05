import {Injectable} from "angular2/core";
import {TEACHERS} from "./mock-teachers";

@Injectable()
export class TeacherService {
    
    getTeachers(){
        return Promise.resolve(TEACHERS);
    }
    
}