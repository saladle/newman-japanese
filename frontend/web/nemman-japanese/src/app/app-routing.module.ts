import { WordDetailComponent } from './routes/learn/word-detail/word-detail.component';
import { WordListComponent } from './routes/learn/word-list/word-list.component';
import { LearnComponent } from './routes/learn/learn.component';
import { PersonalInformationComponent } from './routes/main-screen/personal-information/personal-information.component';
import { CreatedWordbooksComponent } from './routes/main-screen/created-wordbooks/created-wordbooks.component';
import { CommunityComponent } from './routes/main-screen/community/community.component';
import { AnalysisComponent } from './routes/main-screen/analysis/analysis.component';
import { MyWordbooksComponent } from './routes/main-screen/my-wordbooks/my-wordbooks.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './routes/main-screen/dashboard/dashboard.component';
import { MainScreenComponent } from './routes/main-screen/main-screen.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home/dashboard' },
  {
    path: 'home',
    component: MainScreenComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'my-wordbooks', component: MyWordbooksComponent },
      { path: 'analysis', component: AnalysisComponent },
      { path: 'community', component: CommunityComponent },
      { path: 'created-wordbooks', component: CreatedWordbooksComponent },
      { path: 'personal-information', component: PersonalInformationComponent },
    ],
  },
  {
    path: 'learn',
    component: LearnComponent,
    children: [
      { path: 'word-list', component: WordListComponent },
      { path: 'word-detail', component: WordDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
