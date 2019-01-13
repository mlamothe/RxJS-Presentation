import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatAutocompleteModule, MatTabsModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClickComponent } from './click/click.component';
import { IntroComponent } from './intro/intro.component';
import { CoverComponent } from './cover/cover.component';
import { HttpClientModule } from '@angular/common/http';
import { ObservComponent } from './observ/observ.component';
import { UseCaseComponent } from './use-case/use-case.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickComponent,
    IntroComponent,
    CoverComponent,
    ObservComponent,
    UseCaseComponent,
    MovieSearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
