import { Component, OnInit } from '@angular/core';
import { Announcement } from '../announcement';
import { Category } from '../category';
import { AnnouncementService } from '../services/announcement.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-announcement',
  templateUrl: './add-announcement.component.html',
  styleUrls: ['./add-announcement.component.scss']
})
export class AddAnnouncementComponent implements OnInit {

  Author: String = "";
  ImageUrl: String = "";
  Title: String = "";
  Message: String = "";
  selectedCategory: Category;
  CategoryId: String = "";
  Description: String ="";

  newAnnouncement: Announcement;

  constructor(public announcementService: AnnouncementService, private router: Router) { }

  ngOnInit(): void {
  }

  addAnnouncement(){
    // console.log(this.Author);
    // console.log(this.ImageUrl);
    // console.log(this.Title);
    // console.log(this.Message);


      this.newAnnouncement = {
        id :"00000000-0000-0000-0000-000000000000",
        message : this.Message,
        title : this.Title,
        author : this.Author,
        category : this.selectedCategory as Category,
        imageUrl : this.ImageUrl,
        categoryId : this.CategoryId,
        description : this.Description
      }
      this.announcementService.addAnnouncement(this.newAnnouncement).subscribe(()=>{
        this.router.navigateByUrl('')
      });
  

    //this.Title = "dfsd"; pot folosi two way bindingu pentru a-mi afisa ceva in input
  }

}
