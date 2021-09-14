import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../Services/post.service';
import { IComment } from '../Shared/IComment';
import { IPost } from '../Shared/IPost';
import { IUser } from '../Shared/IUser';

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css']
})
export class PostdetailsComponent implements OnInit {

  constructor(private activeLink:ActivatedRoute,private api:PostService) { }
  id:Number|null = null;
  hasErr:boolean = false;
  users:IUser[] = [];
  posts:IPost[] = [];
  comments:IComment[] = [];
  ngOnInit(): void {
    this.api.getPosts().subscribe(
      data=>{this.posts = data;}
    );
    this.api.getUsers().subscribe(
      data=>{this.users = data;}
    );
    this.api.getComments().subscribe(
      data=>{this.comments = data;}
    );
    this.activeLink.paramMap.subscribe(
      data=>{
        this.id = Number(data.get('id'));
      },
      err=>{this.hasErr = true;}
    );
  }

  getPostComments(Pid:any){
    return this.comments.filter(x => x.postId == Pid);
  }

  getPostById(Pid:any){
    return this.posts.filter(x => x.id == Pid);
  }

  getUserName(Uid:Number):any{
    let UserName:string|undefined = "default name";
    if(this.users.some(u => u.id === Uid)){
      UserName = this.users.find(u => u.id === Uid)?.name;
    }
    return UserName;
  }
}
