import { Component } from '@angular/core';
import { FallingParticle } from '../../components/falling-particle/falling-particle';

@Component({
  selector: 'app-birthday',
  imports: [FallingParticle],
  templateUrl: './birthday.html',
  styleUrl: './birthday.css',
})
export class Birthday {}
