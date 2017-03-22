import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import { HomeComponent } from './components/home/home/home.component';
import { SigninComponent } from './components/home/signin/signin.component';
import { SignupComponent } from './components/home/signup/signup.component';
// import { ProfileComponent } from './components/profile/profile.component';
// import { HeaderComponent } from './components/profile/header/header.component';
// import { UserprofileComponent } from './components/profile/userprofile/userprofile.component';
// import { SidebarComponent } from './components/profile/sidebar/sidebar.component';
// import { PostsComponent } from './components/profile/posts/posts.component';
// import { EditprofileComponent } from './components/profile/editprofile/editprofile.component';
// import { NotfoundComponent } from './components/profile/notfound/notfound.component';
// import { FriendProfileComponent } from './components/profile/friend-profile/friend-profile.component';
// import { FriendslistComponent } from './components/profile/friendslist/friendslist.component';
 const appRoutes: Routes=
[  
  { path:'', component: HomeComponent,
       children : [
         { path: '',component : SigninComponent},
         { path: 'signup', component: SignupComponent }
       ] 
  }
//   { path:'profile', component: ProfileComponent,
//        children : [
//          { path: '',component : PostsComponent},
//          { path: 'editprofile', component: EditprofileComponent },
//          { path: 'friendslist', component: FriendslistComponent },
//          { path: 'friendprofile', component: FriendProfileComponent }
//        ] 
//   }
]

export const routing :ModuleWithProviders =RouterModule.forRoot(appRoutes);
