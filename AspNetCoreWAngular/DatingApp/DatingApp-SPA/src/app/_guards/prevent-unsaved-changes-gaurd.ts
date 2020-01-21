import {Injectable, Inject} from '@angular/core'
import { CanDeactivate } from '@angular/router';
import { MembersEditComponent } from '../members/members-edit/members-edit.component';

@Injectable()
export class PreventUnsavedChanges implements CanDeactivate<MembersEditComponent> {
    canDeactivate(component: MembersEditComponent) {
        if (component.editform.dirty) {
            return confirm('Are you sure..');
        }
        return true;
    }
}