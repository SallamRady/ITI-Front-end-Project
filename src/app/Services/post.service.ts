import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IUser } from '../Shared/IUser';
import { IPost } from '../Shared/IPost';
import { IComment } from '../Shared/IComment';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }
  getUsers():Observable<IUser[]>{
    return this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
  }
  getPosts():Observable<IPost[]>{
    return this.http.get<IPost[]>('https://jsonplaceholder.typicode.com/posts');
  }
  getComments():Observable<IComment[]>{
    return this.http.get<IComment[]>('https://jsonplaceholder.typicode.com/comments');
  }
}
