import { Component, inject, ViewEncapsulation } from '@angular/core';
import { HeadComponent } from '@shared/ui/head/head.component';
import { SceneComponent } from '@shared/ui/scene/scene.component';
import { BLOG, ToastService } from '@core';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [HeadComponent, SceneComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class BlogComponent { toast = inject(ToastService); posts = BLOG; }
