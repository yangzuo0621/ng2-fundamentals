import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { AuthService } from "../../user/auth.service";
import { VoterService } from "./voter.service";
import { SessionListComponnet } from "./session-list.component";
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
                SessionListComponnet
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

    describe('ngOnChanges', () => {

        it('should filter the sessions correctly', () => {
        })
    })
})