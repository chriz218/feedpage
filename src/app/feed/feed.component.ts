import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProfileService } from '../shared/services/profile.service';
import { faBahai as fasBahai, faAngleLeft as fasAngleLeft, faEye as fasEye, faShare as fasShare, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

@Component({
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FeedComponent implements OnInit, OnDestroy { 
  public pageTitle = 'My PostCards';
  public profiles: any[];
  private profileSubscription: Subscription;
  public farStar: IconDefinition = farStar;
  public fasEye: IconDefinition = fasEye;
  public fasBahai: IconDefinition = fasBahai;
  public fasAngleLeft: IconDefinition = fasAngleLeft;
  public fasShare: IconDefinition = fasShare;  
  public hasError: boolean = false;
  public errorMessage: string = "Failed to get profile cards";

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileSubscription = this.profileService.getProfiles().subscribe({
      next: profiles => {
        this.profiles = profiles;
        console.log("profiles", profiles);
      },
      error: err => {
        console.error(this.errorMessage, err);
        this.hasError = true;
      }
    })
  }

  getDate(timestamp: number): string {
    let date: Date = new Date(timestamp * 1000);
    const months: string[] = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"]
    return `${date.getUTCDate()} ${months[date.getUTCMonth()]} ${date.getFullYear()}`;
  }

  ngOnDestroy(): void {
    this.profileSubscription.unsubscribe();
  }
}
