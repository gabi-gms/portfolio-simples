import { Component, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  public arrayProjects = signal<IProjects[]>([
    {
      src: '',
      alt: '',
      title: '',
      width: '',
      height: '',
      description:
        '<p>Texto.</p>',
      links: [
        {
          name: '',
          href: '',
        }],
    },
    {
      src: '',
      alt: '',
      title: '',
      width: '',
      height: '',
      description:
        '<p>Texto.</p>',
      links: [
        {
          name: '',
          href: '',
        }],
    },
  ]);
}
