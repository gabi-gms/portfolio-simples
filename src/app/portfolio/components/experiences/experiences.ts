import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  imports: [],
  templateUrl: './experiences.html',
  styleUrl: './experiences.css',
})
export class Experiences {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Desenvolvedora Autônoma',
        p: 'Jan 2026 - Presente',
      },
      text: '<p>Texto</p>',
    },
    {
      summary: {
        strong: 'Desenvolvedora Front-end',
        p: 'Izio&Co | Jan 2023 - Ago 2023',
      },
      text: '<ul><li></li></ul>',
    },
    {
      summary: {
        strong: 'Desenvolvedora Front-end',
        p: 'Smartscan | Mai 2022 - Ago 2022',
      },
      text: '<ul><li></li></ul>',
    },
    {
      summary: {
        strong: 'Estagiária de Desenvolvimento Front-end',
        p: 'B2ML | Ago 2021 - Jan 2022',
      },
      text: '<ul><li></li></ul>',
    },
    {
      summary: {
        strong: 'Desenvolvedora Freelancer',
        p: 'Triângulo Sul | Fev 2021 - Ago 2021',
      },
      text: '<ul><li></li></ul>',
    },
    {
      summary: {
        strong: 'Estagiária de TI - Desenvolvedora Jr.',
        p: 'Sigpharma | Fev 2020 - Fev 2021',
      },
      text: '<ul><li></li></ul>',
    },
  ]);
}
