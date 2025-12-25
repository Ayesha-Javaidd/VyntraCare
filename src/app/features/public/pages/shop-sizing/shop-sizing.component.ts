
import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports : [CommonModule, RouterModule],
  selector: 'app-ai-sizing-page',
  templateUrl: './shop-sizing.component.html',
  styleUrl: './shop-sizing.component.css',
})
export class ShopSizingComponent implements OnInit, OnDestroy {
  step = 1; // 1: Intro, 2: Scanning, 3: Results
  progress = 0;
  intervalId: any;

  ngOnInit(): void {
    this.startStepWatcher();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startStepWatcher() {
    if (this.step === 2) {
      this.intervalId = setInterval(() => {
        this.progress += 2;
        if (this.progress >= 100) {
          this.progress = 100;
          clearInterval(this.intervalId);
          setTimeout(() => (this.step = 3), 500);
        }
      }, 50);
    }
  }

  enableCamera() {
    this.step = 2;
    this.progress = 0;
    this.startStepWatcher();
  }

  scanAgain() {
    this.step = 2;
    this.progress = 0;
    this.startStepWatcher();
  }
}
