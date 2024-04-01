import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Announcement } from '../announcement';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  announcements: Announcement[] = [
];

baseURL = "https://localhost:7034/Announcement";
readonly httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};


  constructor(private httpClient: HttpClient) { }

  // serviceCall() {
  //   console.log("Service was called");
  //  }

   getAnnouncements(): Observable<Announcement[]>{
   return this.httpClient.get<Announcement[]>(this.baseURL);
   //of(this.announcements) for transforming the announcements object into an observable
   }

   addAnnouncement(newAnnouncement: Announcement): Observable<Announcement>{
    return this.httpClient.post<Announcement>(this.baseURL, newAnnouncement, this.httpOptions);
   }

   deleteAnnouncement(id: String): Observable<Announcement> {
    return this.httpClient.delete<Announcement>(this.baseURL + '/' + id);
  }

}
