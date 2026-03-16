import { Component, signal, inject } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';

//Material
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjects } from '../dialog/dialog-projects/dialog-projects';

@Component({
  selector: 'app-projects',
  imports: [MatDialogModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  #dialog = inject(MatDialog);

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

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjects, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
