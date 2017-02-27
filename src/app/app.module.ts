import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { QuillEditorComponent } from './quill.editor.component';
import { AppComponent } from './app.component';
import { TinymceComponent } from './tinymce.component';

@NgModule({
  declarations: [
    AppComponent,
    QuillEditorComponent,
    TinymceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
