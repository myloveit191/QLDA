import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Project } from "../_models/project";


@Injectable()
export class ProjectService {
    projectsUrl = 'api/projects';


    // getProjects(): Observable<Project[]>{
    //     return
    // }
}