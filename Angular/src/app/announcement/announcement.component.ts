import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { AnnouncementService } from '../services/announcement.service';
import { Announcement } from '../announcement';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit {

  @Input('announc') announcement: Announcement;

  constructor(private announcementService: AnnouncementService) { }

  ngOnInit(): void {
  }

  deleteAnnouncement() {

    this.announcementService.deleteAnnouncement(this.announcement.id).subscribe();
  }
}
