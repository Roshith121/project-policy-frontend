import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CreateconsumerComponent } from './pages/createconsumer/createconsumer.component';
import { CreatepolicyComponent } from './pages/createpolicy/createpolicy.component';
import { CreatepropertyComponent } from './pages/createproperty/createproperty.component';
import { HomeComponent } from './pages/home/home.component';
import { IssuepolicyComponent } from './pages/issuepolicy/issuepolicy.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { UpdateconsumerComponent } from './pages/updateconsumer/updateconsumer.component';
import { UpdateconsumerpageComponent } from './pages/updateconsumerpage/updateconsumerpage.component';
import { UpdatepropertyComponent } from './pages/updateproperty/updateproperty.component';
import { UpdatepropertypageComponent } from './pages/updatepropertypage/updatepropertypage.component';
import { ViewconsumerComponent } from './pages/viewconsumer/viewconsumer.component';
import { ViewconsumerpageComponent } from './pages/viewconsumerpage/viewconsumerpage.component';
import { ViewpolicyComponent } from './pages/viewpolicy/viewpolicy.component';
import { ViewpolicypageComponent } from './pages/viewpolicypage/viewpolicypage.component';
import { ViewpropertyComponent } from './pages/viewproperty/viewproperty.component';
import { ViewpropertypageComponent } from './pages/viewpropertypage/viewpropertypage.component';
import { ViewquotesComponent } from './pages/viewquotes/viewquotes.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'register',
    component: RegistrationComponent,
    pathMatch: 'full',
  },
  {
    path: 'createconsumer',
    component: CreateconsumerComponent,
    pathMatch: 'full',
  },
  {
    path: 'homepage',
    component: HomepageComponent,
    pathMatch: 'full',
  },
  {
    path: 'updateconsumer',
    component: UpdateconsumerComponent,
    pathMatch: 'full',
  },

  {
    path: 'viewconsumer',
    component: ViewconsumerComponent,
    pathMatch: 'full',
  },
  {
    path: 'viewconsumerpage/:id',
    component: ViewconsumerpageComponent,
    pathMatch: 'full',
  },
  {
    path: 'updateconsumerpage/:id',
    component: UpdateconsumerpageComponent,
    pathMatch: 'full',
  },
  {
    path: 'createproperty',
    component: CreatepropertyComponent,
    pathMatch: 'full',
  },
  {
    path: 'viewproperty',
    component: ViewpropertyComponent,
    pathMatch: 'full',
  },
  {
    path: 'viewpropertypage/:id',
    component: ViewpropertypageComponent,
    pathMatch: 'full',
  },
  {
    path: 'updateproperty',
    component: UpdatepropertyComponent,
    pathMatch: 'full',
  },
  {
    path: 'updatepropertypage/:id',
    component: UpdatepropertypageComponent,
    pathMatch: 'full',
  },
  {
    path: 'createpolicy',
    component: CreatepolicyComponent,
    pathMatch: 'full',
  },
  {
    path: 'issuepolicy',
    component: IssuepolicyComponent,
    pathMatch: 'full',
  },
  {
    path: 'viewpolicy',
    component: ViewpolicyComponent,
    pathMatch: 'full',
  },
  {
    path: 'viewpolicypage/:pid/:consumerid',
    component: ViewpolicypageComponent,
    pathMatch: 'full',
  },
  {
    path: 'viewquotes',
    component: ViewquotesComponent,
    pathMatch: 'full',
  },
  {
    path: 'viewquotes/:businessValue/:propertyValue/:propertyType',
    component: ViewquotesComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
