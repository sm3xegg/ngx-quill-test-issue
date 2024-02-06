import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuillModule } from 'ngx-quill';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QuillModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngx-quill-test';
}
