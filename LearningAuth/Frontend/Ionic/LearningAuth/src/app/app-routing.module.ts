import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AuthguardGuard } from "../app/Authentification/authguard.guard";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home",
  },
  {
    path: "home",
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./home/home.module").then((m) => m.HomePageModule),
      },
    ],
  },
  {
    path: "login",
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./pages/login/login.module").then((m) => m.LoginPageModule),
      },
    ],
  },
  {
    path: "contact",
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./pages/contact/contact.module").then(
            (m) => m.ContactPageModule
          ),
      },
    ],
  },
  {
    path: "infos",
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./pages/infos/infos.module").then((m) => m.InfosPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
