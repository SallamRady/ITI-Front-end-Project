import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../Services/post.service';
import { IUser } from '../Shared/IUser';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  constructor(private activeLink:ActivatedRoute,private api:PostService) { }
  id:Number|null = null;
  hasErr:boolean = false;
  users:IUser[] = [];

  ngOnInit(): void {
    this.api.getUsers().subscribe(
      data=>{this.users = data}
    );
    this.activeLink.paramMap.subscribe(
      data=>{
        this.id = Number(data.get('id'));
      },
      err=>{this.hasErr = true;}
    );
  }

  getUserById(Uid:any){
    return this.users.filter(x => x.id == Uid);
  }

}
