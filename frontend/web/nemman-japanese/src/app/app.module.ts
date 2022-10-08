import { NgZorroAntdModule } from './ng-zorro-antd.module';
import { WordDetailComponent } from './routes/learn/word-detail/word-detail.component';
import { WordListComponent } from './routes/learn/word-list/word-list.component';
import { LearnComponent } from './routes/learn/learn.component';
import { PersonalInformationComponent } from './routes/main-screen/personal-information/personal-information.component';
import { CreatedWordbooksComponent } from './routes/main-screen/created-wordbooks/created-wordbooks.component';
import { CommunityComponent } from './routes/main-screen/community/community.component';
import { AnalysisComponent } from './routes/main-screen/analysis/analysis.component';
import { MyWordbooksComponent } from './routes/main-screen/my-wordbooks/my-wordbooks.component';
import { DashboardComponent } from './routes/main-screen/dashboard/dashboard.component';
import { MainScreenComponent } from './routes/main-screen/main-screen.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NzTableModule } from 'ng-zorro-antd/table';
import { InfoDetailComponent } from './routes/main-screen/personal-information/infor-detail/info-detail/info-detail.component';
import { InforCourseComponent } from './routes/main-screen/personal-information/infor-course/infor-course/infor-course.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    MainScreenComponent,
    DashboardComponent,
    MyWordbooksComponent,
    AnalysisComponent,
    CommunityComponent,
    CreatedWordbooksComponent,
    PersonalInformationComponent,
    LearnComponent,
    WordListComponent,
    WordDetailComponent,
    InfoDetailComponent,
    InforCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    NzTableModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
