import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { AuthService } from "../../user/auth.service";
import { VoterService } from "./voter.service";
import { SessionListComponnet } from "./session-list.component";
import { UpvoteComponent } from "./upvote-component";
import { CollapsibleWellComponent } from "../../common/collapsible-well.component";
import { DurationPipe } from "../shared/duration.pipe";
import { ISession } from "../shared/event.model";

describe('SessionListComponent', () => {
    let fixture: ComponentFixture<SessionListComponnet>,
        component: SessionListComponnet,
        element: HTMLElement,
        debugEl: DebugElement;

    beforeEach(async(() => {
        let mockAuthService = {};
        let mockVoterService = {};

        TestBed.configureTestingModule({
            imports: [],
            declarations: [
                SessionListComponnet,
                UpvoteComponent,
                DurationPipe,
                CollapsibleWellComponent
            ],
            providers: [
                { provide: AuthService, useVaule: mockAuthService },
                { provide: VoterService, useVaule: mockVoterService }
            ],
            schemas: []
        }).compileComponents();
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(SessionListComponnet);
        component = fixture.componentInstance;
        debugEl = fixture.debugElement;
        element = fixture.nativeElement;
    })

    describe('initial display', () => {

        it('should have the correct session title', () => {
            component.sessions = [{id: 3, name: 'Session 1', presenter: 'Joe', duration: 1, level: 'beginner', abstract: 'abstract', voters: ['john', 'bob']}];
            component.filterBy = 'all';
            component.sortBy = 'name';
            component.eventId = 4;

            component.ngOnChanges();
            fixture.detectChanges();

            expect(element.querySelector('[well-title]').textContent).toContain('Session 1');
        })
    })
})