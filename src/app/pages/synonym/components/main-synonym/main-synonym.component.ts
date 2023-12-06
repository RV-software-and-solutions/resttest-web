import { Component } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { SynonymService } from '../../../../services/synonym/synonym.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-main-synonym',
  standalone: false,
  templateUrl: './main-synonym.component.html',
  styleUrl: './main-synonym.component.css'
})
export class MainSynonymComponent {
  size: NzButtonSize = 'large';
  graphStateLoaded: boolean = false;
  graphStateSaved: boolean = false;
  graphStateCleared: boolean = false;

  actionRunning: boolean = false;

  constructor(
    private _synonymService: SynonymService,
    private notification: NzNotificationService) {
  }

  async onLoadGraphState() {
    this.actionRunning = true;
    this.resetStates();

    try {
      await this._synonymService.loadGraphState();
    } catch (error) {
      this.notification.create(
        'error',
        'Action failed',
        'Add synonym action failed. Message - ' + error + '!'
      );
    }

    this.graphStateLoaded = true;
    this.actionRunning = false;
  }

  async onSaveGraphState() {
    this.actionRunning = true;
    this.resetStates();

    try {
      await this._synonymService.saveGraphState();

    } catch (error) {
      this.notification.create(
        'error',
        'Action failed',
        'Add synonym action failed. Message - ' + error + '!'
      );
    }
    this.graphStateSaved = true;
    this.actionRunning = false;
  }

  async onResetGraphState() {
    this.actionRunning = true;
    this.resetStates();

    try {
      await this._synonymService.resetGraphState();
    } catch (error) {
      this.notification.create(
        'error',
        'Action failed',
        'Add synonym action failed. Message - ' + error + '!'
      );
    }

    this.graphStateCleared = true;
    this.actionRunning = false;
  }

  resetStates() {
    this.graphStateLoaded = false;
    this.graphStateCleared = false;
    this.graphStateSaved = false;
  }
}
