import {Component, OnInit} from "@angular/core";
import {Bookmark} from "../model/bookmark";
import {Observable} from "rxjs";
import {List} from "immutable";
import {UserBookmarkStore} from "./store/UserBookmarkStore";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'my-user-bookmarks',
  templateUrl: './user-bookmarks.component.html',
  styleUrls: ['./user-bookmarks.component.scss']
})
export class UserBookmarksComponent implements  OnInit{

  userBookmarks: Observable<List<Bookmark>>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userBookmarkStore: UserBookmarkStore) { }

  ngOnInit(): void {
    this.userBookmarks = this.userBookmarkStore.getBookmarks();
  }

  goToAddNewPersonalBookmark(): void {
    let link = ['./new'];
    this.router.navigate(link, { relativeTo: this.route });
  }
}