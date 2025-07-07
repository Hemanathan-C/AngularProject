import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";
import { SharedModule } from "./shared/shared.module";
import { CardComponent } from "./shared/card/card.component";


@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HeaderComponent,
        UserComponent,
        TasksComponent,
        SharedModule
    ],
})
export class AppModule {}