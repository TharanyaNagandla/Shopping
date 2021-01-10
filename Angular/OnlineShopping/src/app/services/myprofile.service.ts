import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MyProfileService
{
  constructor(private getHttp:HttpClient)
  {

  }
  public getMyProfile(id:number)
  {
    return this.getHttp.get("http://localhost:62520/api/userprofile/"+id);
  }
}