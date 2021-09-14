import { Component, OnInit } from '@angular/core';
import { PostService } from '../Services/post.service';
import { IUser } from '../Shared/IUser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private api:PostService) { }
  users:IUser[] = [];
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
  }

}
