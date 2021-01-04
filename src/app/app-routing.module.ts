import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/Authentication/auth.guard';

const routes: Routes = [ 
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)   
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate : [AuthGuard]
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'ask-around-you',
    loadChildren: () => import('./pages/ask-around-you/ask-around-you.module').then( m => m.AskAroundYouPageModule),
    canActivate : [AuthGuard]
  },
  {
    path: 'notifications',
    loadChildren: () => import('./pages/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'ask-around-you-detail',
    loadChildren: () => import('./pages/ask-around-you-detail/ask-around-you-detail.module').then( m => m.AskAroundYouDetailPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./pages/faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'help-center',
    loadChildren: () => import('./pages/help-center/help-center.module').then( m => m.HelpCenterPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'add-ask-around-you',
    loadChildren: () => import('./pages/add-ask-around-you/add-ask-around-you.module').then( m => m.AddAskAroundYouPageModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./pages/privacy-policy/privacy-policy.module').then( m => m.PrivacyPolicyPageModule)
  },
  {
    path: 'issues',
    loadChildren: () => import('./pages/issues/issues.module').then( m => m.IssuesPageModule)
  },
  {
    path: 'issue-details',
    loadChildren: () => import('./pages/issue-details/issue-details.module').then( m => m.IssueDetailsPageModule)
  },
  {
    path: 'event',
    loadChildren: () => import('./pages/event/event.module').then( m => m.EventPageModule)
  },
  {
    path: 'event-details',
    loadChildren: () => import('./pages/event-details/event-details.module').then( m => m.EventDetailsPageModule)
  },
  {
    path: 'add-event',
    loadChildren: () => import('./pages/add-event/add-event.module').then( m => m.AddEventPageModule)
  },
  {
    path: 'add-issue',
    loadChildren: () => import('./pages/add-issue/add-issue.module').then( m => m.AddIssuePageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./pages/about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
  {
    path: 'select-location',
    loadChildren: () => import('./pages/select-location/select-location.module').then( m => m.SelectLocationPageModule)
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./pages/user-profile/user-profile.module').then( m => m.UserProfilePageModule)
  },
  {
    path: 'other-user-profile',
    loadChildren: () => import('./pages/other-user-profile/other-user-profile.module').then( m => m.OtherUserProfilePageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./pages/edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'edit-setting',
    loadChildren: () => import('./pages/edit-setting/edit-setting.module').then( m => m.EditSettingPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'select-issue-categories',
    loadChildren: () => import('./pages/select-issue-categories/select-issue-categories.module').then( m => m.SelectIssueCategoriesPageModule)
  },
  {
    path: 'select-distance',
    loadChildren: () => import('./pages/select-distance/select-distance.module').then( m => m.SelectDistancePageModule)
  },
  {
    path: 'view-media',
    loadChildren: () => import('./pages/view-media/view-media.module').then( m => m.ViewMediaPageModule)
  },
  {
    path: 'my-issue',
    loadChildren: () => import('./pages/my-issue/my-issue.module').then( m => m.MyIssuePageModule)
  },
  {
    path: 'progress',
    loadChildren: () => import('./pages/progress/progress.module').then( m => m.ProgressPageModule)
  },
  {
    path: 'givers',
    loadChildren: () => import('./pages/givers/givers.module').then( m => m.GiversPageModule)
  },
  {
    path: 'enrolled',
    loadChildren: () => import('./pages/enrolled/enrolled.module').then( m => m.EnrolledPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
