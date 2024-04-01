import { Component, OnInit } from '@angular/core';
import { Announcement } from '../announcement';
import { AnnouncementService } from '../services/announcement.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  title = 'notifications-app';
  selectedCategory: string = "";
  
  filteredAnnouncements: Announcement[] = [];
  announcements: Announcement[] = [];
  constructor(private announcementService: AnnouncementService) { // private announcementService;
                                                                 // (in constructor) this.announcementService = constructor param
  }

    //  const myObserver = {
  //   next: (x: Announcement) => this.listOfAnnouncements.push(x),
  //   error: (err: Error) => console.error('Observer got an error: ' + err),
  //   complete: () => console.log('Observer got a complete notification'),
  // };


  // pipe(map(data => {
  //   return data.map(item => {
  //     const announcement: Announcement = {
  //       message: item.message,
  //       title: item.title,
  //       author: item.author,
  //       category: item.Category,
  //       id: item.id,
  //       imageUrl: item.imageUrl,
  //     }
  //     return announcement
  //   })
  // }));
  
  ngOnInit(): void {
   // this.announcementService.serviceCall();
    this.announcementService.getAnnouncements().subscribe((announcements: Announcement[]) => {
      this.announcements = announcements;
      console.log(this.announcements);
      this.filteredAnnouncements = this.announcements;
    });
   
  }
  selectCategory(category: string){
    this.selectedCategory = category;
    //console.log(category);
    if(category !== "All")
      this.filterAnnouncements();
    else
      this.filteredAnnouncements = this.announcements;
  }

  filterAnnouncements(){
    this.filteredAnnouncements = this.announcements.filter(announcement => announcement.category.toString() === this.selectedCategory);
  }

}
