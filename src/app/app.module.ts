import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { BooksComponent } from './books/books.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ArticlesComponent } from './articles/articles.component';
import { InteractionsComponent } from './interactions/interactions.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    NavigationComponent,
    HomeComponent,
    AboutComponent,
    EducationComponent,
    BooksComponent,
    AchievementsComponent,
    ContactComponent,
    NavbarComponent,
    ArticlesComponent,
    InteractionsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
