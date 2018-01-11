import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { EventsAppComponent } from "./events-app.component";
import { EventsListComponent } from "./events/events-list.component";
import { EventThumbnailComponent } from "./events/event-thumbnail.component";
import { NavBarComponent } from "./nav/navbar.component";
import { EventService } from "./events/shared/event.service";
import { ToastrService } from "./common/toastr.service";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { appRoutes } from "./routes";
import { CreateEventComponnet } from "./events/create-event.component";
import { Error404Component } from "./errors/404.component";
import { EventRouteActivator } from "./events/event-details/event-route-activator.service";
import { EventsListResolver } from "./events/events-list-resolver.service";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        EventDetailsComponent,
        CreateEventComponnet,
        Error404Component
    ],
    providers: [
        EventService,
        ToastrService,
        EventRouteActivator,
        // { provide: EventService, useValue: EventService }
        {
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState
        },
        EventsListResolver
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule { }

function checkDirtyState(component: CreateEventComponnet) {
    if (component.isDirty) {
        return window.confirm('You have not saved this event, do you really want ot cancel?');
    }
    return true;
}
