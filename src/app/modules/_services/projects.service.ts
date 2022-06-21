import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable } from "rxjs";
import { Project } from "../_models/project";
import { HandleError, HttpErrorHandler } from "./http-error-handler.service";
const httpOptions = {
    headers: new HttpHeaders({
        Accept: "application/json",
        'Content-Type': 'application/json',
        "ngonngu_id": "1",
        "form_id": "1",
        "server_id": "1",
        "khachhang_id": "1",
        "token": ""
    })
};


@Injectable()
export class ProjectsService {
    projectsUrl = 'https://localhost:5001/api/Authorization/DangNhap';
    private handleError: HandleError;

    constructor(
        private http: HttpClient,
        httpErrorHandler: HttpErrorHandler
    ) {
        this.handleError = httpErrorHandler.createHandleError('ProjectsService')
    }
    dangnhap() {
        console.log("aa");
        
        let data = {
            'action_id': 1,
            'matkhau': "Qlda@2022",
            'taikhoan': "qlda.bdg"
        }
        return this.http.post(this.projectsUrl, data, httpOptions)
            .pipe(
                catchError(this.handleError('dangnhap', data))
            );
    }
    getProjects(){
        return this.http.get('https://localhost:5001/api/ProjectManagement', httpOptions)
            .pipe(
                catchError(this.handleError('dangnhap'))
            );
    }
}