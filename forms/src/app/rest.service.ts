import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  baseUrl:string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }

  get_posts(): Observable<any>
  {
    return this.http.get(this.baseUrl);
  }
  getPost(id:number)
  {
    return this.http.get("https://jsonplaceholder.typicode.com/posts/"+id);
  }
}
