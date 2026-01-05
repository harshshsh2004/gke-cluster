import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page2',
  template: `
    <div class="page2-wrap">
      <div class="card">
        <h2>✨ Fancy Page</h2>
        <p class="lead">This is a more attractive page — loaded at <code>/page2</code>.</p>

        <div class="grid">
          <div class="tile">
            <h3>Feature A</h3>
            <p>Beautiful layout and responsive tiles.</p>
          </div>
          <div class="tile">
            <h3>Feature B</h3>
            <p>Auto-instrumented events and spans for user interaction.</p>
          </div>
        </div>

        <div class="ops">
          <button class="primary-btn" (click)="goHome()">Back</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page2-wrap { display:flex; align-items:center; justify-content:center; min-height:70vh; padding:40px; background: linear-gradient(180deg,#f0f7ff,#fff); }
    .card { background: white; padding:28px; border-radius:12px; box-shadow: 0 10px 40px rgba(20,20,40,0.08); width:900px; max-width:96%; }
    h2 { margin-top:0; color:#0b5ed7; }
    .lead { color:#666; }
    .grid { display:flex; gap:16px; margin:18px 0; }
    .tile { flex:1; padding:14px; border-radius:8px; background:linear-gradient(180deg,#f8fbff,#fff); box-shadow:0 6px 18px rgba(10,30,60,0.04) }
    .ops { margin-top:18px; display:flex; gap:10px; }
    .primary-btn { background:#0b5ed7; color:#fff; padding:8px 14px; border-radius:8px; border:none; cursor:pointer; }
  `]
})
export class Page2Component {
  constructor(private router: Router) {}
  goHome(){ this.router.navigate(['/']); }
}

