import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  server_address:string='api'
 model: any = {};
 
 model2: any = {};

  constructor(public http:HttpClient) { }

  userSignup(users:any){
    console.log(users);
    return this.http.post<any>(`${this.server_address}/signup`, {users});
    }


  login(authData:any){
    console.log(authData);
    return this.http.post<any>(`${this.server_address}/login`,{authData});
  
    }
    getuserdata(id:any){
      return this.http.get(`${this.server_address}/` +id)
    }

    adminLogin(data:any){
      console.log(data);
      return this.http.post<any>(`${this.server_address}/login_admin`, {data});
    }


    loggedIn(){
     
      return !!localStorage.getItem('token');
    }

    getToken(){
      return  localStorage.getItem('token');
    }

    getName(){

      console.log("reqst received");
      return this.http.get(`${this.server_address}/username`)
    }



    savenameAdmin(data:any){
      return this.http.post<any>(`${this.server_address}/changeAdminUname`, {data});
    }

    savepwdAdmin(data:any){
      return this.http.post<any>(`${this.server_address}/changeAdminPwd`, {data});
    }




    getusercred(){
      return this.http.get(`${this.server_address}/displayusercred`)
    }
    deleteusercred(id:any){
      return this.http.delete(`${this.server_address}/deleteusercred`+id)
    }

    mailsend(mail:any){
    return this.http.post(`${this.server_address}/sendmail`,{mail})
    }

}
