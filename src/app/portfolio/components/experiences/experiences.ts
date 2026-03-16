import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  imports: [],
  templateUrl: './experiences.html',
  styleUrl: './experiences.scss',
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
      text: '<p>Atuação no desenvolvimento e manutenção de aplicações web utilizando Angular, JavaScript e TypeScript, com foco na implementação de melhorias funcionais e correção de bugs em sistemas internos. A rotina técnica abrange a integração com APIs REST para consumo e exibição de dados, além do versionamento de código com Git. O andamento das entregas é conduzido sob a metodologia ágil Scrum, com participação em sprints e gerenciamento de tarefas estruturado por meio de sistema de tickets.</p>',
    },
    {
      summary: {
        strong: 'Desenvolvedora Front-end',
        p: 'Smartscan | Mai 2022 - Ago 2022',
      },
      text: '<p>Atuação no desenvolvimento e manutenção de interfaces web utilizando Angular, TypeScript e Bootstrap, com foco na implementação de dashboards administrativos e módulos de gestão logística voltados à usabilidade e organização de dados. A rotina técnica abrange a integração com APIs REST para comunicação com serviços backend e a criação de componentes reutilizáveis, garantindo a padronização e a escalabilidade da interface. O fluxo de trabalho é pautado pela colaboração contínua com a equipe técnica e pela adoção de boas práticas de versionamento de código utilizando Git.</p>',
    },
    {
      summary: {
        strong: 'Estagiária de Desenvolvimento Front-end',
        p: 'B2ML | Ago 2021 - Jan 2022',
      },
      text: '<p>Atuação na implementação de funcionalidades em aplicações web e mobile utilizando Angular e Ionic, garantindo a integração de dados entre o frontend e o backend através do consumo de APIs REST. A rotina técnica abrange a correção de bugs e a aplicação de melhorias de desempenho em sistemas já em produção, além da participação ativa em reuniões técnicas e no planejamento contínuo de desenvolvimento em conjunto com a equipe.</p>',
    },
    {
      summary: {
        strong: 'Desenvolvedora Freelancer',
        p: 'Triângulo Sul | Fev 2021 - Ago 2021',
      },
      text: '<p>Atuação no desenvolvimento de interfaces web responsivas utilizando React.js e Bootstrap, com foco na criação de componentes reutilizáveis para otimizar a manutenção e a evolução contínua das aplicações. A rotina abrange a implementação de layouts perfeitamente alinhados às necessidades dos clientes, garantindo a fidelidade à identidade visual das empresas.</p>',
    },
    {
      summary: {
        strong: 'Estagiária de TI - Desenvolvedora Jr.',
        p: 'Sigpharma | Fev 2020 - Fev 2021',
      },
      text: '<p>Atuação na migração de sistemas legados para uma stack moderna, com foco no desenvolvimento frontend utilizando Angular. A rotina técnica abrange a estruturação de novos componentes de interface e a refatoração de código existente, além do suporte ao backend com Node.js e MySQL para a manutenção de APIs e integração com banco de dados. O fluxo de trabalho envolve, ainda, o apoio na elaboração de documentação técnica e o suporte contínuo à equipe de desenvolvimento.</p>',
    },
  ]);
}
