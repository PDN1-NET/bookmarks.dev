import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {AboutComponent} from './about/about.component';
import {BookmarksComponent} from './bookmark/bookmarks.component';
import {BookmarkSearchComponent} from './bookmark/search/bookmark-search.component';
import {BookmarkSearchService} from './bookmark/search/bookmark-search.service';
import {BookmarkStore} from './bookmark/store/BookmarkStore';
import {TagService} from './tag/tag.service';
import {TagComponent} from './tag/tag.component';
import {PublicBookmarksRoutingModule} from './public-routing.module';
import {PublicBookmarksService} from './bookmark/public-bookmarks.service';

@NgModule({
  declarations : [
    AboutComponent,
    BookmarksComponent,
    BookmarkSearchComponent,
    TagComponent
  ],
  imports: [
    SharedModule,
    HttpModule,
    ReactiveFormsModule,
    PublicBookmarksRoutingModule
  ],
  providers: [
    PublicBookmarksService,
    BookmarkSearchService,
    BookmarkStore,
    TagService
  ]
})
export class PublicBookmarksModule {}