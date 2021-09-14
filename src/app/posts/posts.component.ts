import { Component, OnInit } from '@angular/core';
import { PostService } from '../Services/post.service';
import { IPost } from '../Shared/IPost';
import { IUser } from '../Shared/IUser';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private api:PostService) { }
  posts:IPost[] = [];
  users:IUser[] = [];
  ngOnInit(): void {
    this.api.getPosts().subscribe(
      data=>{this.posts = data;}
    );
    this.api.getUsers().subscribe(
      data=>{this.users = data;}
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
