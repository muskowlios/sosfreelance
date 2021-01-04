import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Location } from "@angular/common";
import { UserService } from "../user/user.service";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  public headers = new HttpHeaders();
  configUrl = "https://sos.muskowl.com/admin/api/";
  userData: any;
  constructor(
    private http: HttpClient,
    private _location: Location,
    public userService: UserService
  ) {
    this.headers.set("Access-Control-Allow-Origin ", "*");
    this.headers.set("Accept", "application/json;");
    this.userService.cast.subscribe(user => (this.userData = user));
  }


  cancel() {
    this._location.back();
  }

  public signIn(data): any {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    const url = this.configUrl + "Auth_api/login";
    return this.http.post(url, formData);
  }

  public signUp(data): any {
    const formData = new FormData();
    formData.append("application_id", data.appId);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("mobile_no", data.mobile);
    formData.append("password", data.password);
    const url = this.configUrl + "Auth_api/save";
    return this.http.post(url, formData);
  }

  public faq(): any {
    const formData = new FormData();
    const url = this.configUrl + "Faq_api/answers";
    return this.http.post(url, formData);
  }

  public userInfo(): any {
    const url = this.configUrl + "profile/" + this.userData.id;
    return this.http.get(url);
  }

  public requiredFields(): any {
    const url = this.configUrl + "doctor_master";
    return this.http.get(url);
  }
}
