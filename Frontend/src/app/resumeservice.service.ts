import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class ResumeserviceService {
   alltemp=['temp1','temp2','temp3','temp4'];
server_address:string='api'
  currentTemp:any='';
  constructor(private http: HttpClient) { }
  data ={
    educational: {
      qualification: '',
      courseDetails: '',
      institution: '',
      startDate: '',
      course: '',
      endDate: '',
    },
    personal: {
  
      name: '',
      role: '',
      aboutMe: '',
      email: '',
      phone: '',
      image: '',
      address: '',
      city: '',
      pin: ''
  
  
    },
    workexp:
    {
      jobProfile: '',
      startDate: '',
      companName: '',
      endDate: '',
      jobDescription: '',
    },
    skills:
    {
      skill: '',
    
    },
    hobbies:
    {
      hobby: '',
  
    }
    
  
  }
  

  senddata(data:any){
    console.log(data);
    return this.http.post(`${this.server_address}/insert`, {data})
    .subscribe((data)=>console.log('returndata'));
  }


  getdata(){
    return this.http.get(`${this.server_address}/resdata`)
    
  }

  getEditdata(){
    return this.http.get(`${this.server_address}/getDetails`)
  }
 getTemp(){
  return this.http.get(`${this.server_address}/getTemp`)
 }

  sendTempid(id:any){
    return this.http.post(`${this.server_address}/sendTempid`, {id})
    .subscribe((data)=>console.log('return temp data',data));
  }

  sendprofileimage(imageData:any){
    return this.http.post(`${this.server_address}/imageUpload`, {imageData})
    .subscribe((data)=>console.log('image added successfully'));
  }

  chooseTemp(data:any){
    if(localStorage.getItem('temp')!==data){
      localStorage.setItem('temp',data);

    }
    
  }

  getCurrentTemp(){
    return this.currentTemp;
  }

  // removeTemp(temp:any):boolean{
  //   let index = this.alltemp.indexOf(temp); //find index in your array
  //   this.alltemp.splice(index, 1);//remove element from array
  //   console.log(this.alltemp)
  //   return false;

  // }
getavlTemps(){
  return this.http.get(`${this.server_address}/avlTemplates`);
}


deleteavlTemp(id:any){
  return this.http.delete(`${this.server_address}/delete_avltemp/`+id);
}

addavlTemp(data:any){
  return this.http.put(`${this.server_address}/add_avltemp`,{data});
}
}



