import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatAutocompleteModule, MatTabsModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { FactoryDemoComponent } from './factory-demo/factory-demo.component';
import { SubscribeDemoComponent } from './subscribe-demo/subscribe-demo.component';
import { SubscribeCompletedComponent } from './subscribe-completed/subscribe-completed.component';
import { ErrorDemoComponent } from './error-demo/error-demo.component';
import { MapFilterComponent } from './map-filter/map-filter.component';
import { MapTypesComponent } from './map-types/map-types.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieSearchComponent,
    FactoryDemoComponent,
    SubscribeDemoComponent,
    SubscribeCompletedComponent,
    ErrorDemoComponent,
    MapFilterComponent,
    MapTypesComponent
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
