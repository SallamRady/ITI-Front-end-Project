import { IUser } from './../Shared/IUser';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../Services/post.service';
import { IComment } from '../Shared/IComment';
import { IPost } from '../Shared/IPost';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private api:PostService) { }
  users:IUser[] = [];
  posts:IPost[] = [];
  errorInLoading:boolean = false;
  errorMsg:string = "";

  ngOnInit(): void {
    this.api.getUsers().subscribe(
      data=>{this.users = data},
      err =>{
        this.errorInLoading = true;
        this.errorMsg = err.Message;
      }
    );
    this.api.getPosts().subscribe(
      data=>{this.posts = data},
      err =>{
        this.errorInLoading = true;
        this.errorMsg = err.Message;
      }
    );
  }

  getUserName(Uid:Number):any{
    let UserName:string|undefined = "default name";
    if(this.users.some(u => u.id === Uid)){
      UserName = this.users.find(u => u.id === Uid)?.name;
    }
    return UserName;
  }
}
