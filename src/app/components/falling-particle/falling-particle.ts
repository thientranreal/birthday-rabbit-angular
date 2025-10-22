import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import confetti from 'canvas-confetti';

@Component({
  standalone: true,
  selector: 'app-falling-particle',
  templateUrl: './falling-particle.html',
  styleUrl: './falling-particle.css',
})
export class FallingParticle implements OnInit {
  @ViewChild('confettiCanvas', { static: true })
  confettiCanvas!: ElementRef<HTMLCanvasElement>;

  ngOnInit(): void {
    this.launchConfetti();
  }

  launchConfetti() {
    const myConfetti = confetti.create(this.confettiCanvas.nativeElement, {
      resize: true,
      useWorker: true,
    });

    const frame = () => {
      myConfetti({
        particleCount: 5,
        spread: 100,
        origin: { y: 0.3 },
      });

      requestAnimationFrame(frame);
    };

    frame();
  }
}
