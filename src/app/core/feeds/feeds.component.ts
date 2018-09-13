import { Component, OnInit } from '@angular/core';
import { FEEDS } from './mock-feeds';
import { LikeFeed, UploadFeed, FollowFeed } from './feeds';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.less']
})
export class FeedsComponent implements OnInit {
  feeds = FEEDS;
  isFollowing = true;
  constructor() { }

  ngOnInit() {
  }

}
