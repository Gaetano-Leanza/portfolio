import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../translate.pipe';

@Component({
  selector: 'app-my-projects-devSecOps',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './my-projects-devSecOps.component.html',
  styleUrls: ['./my-projects-devSecOps.component.scss'],
})
export class MyProjectsDevSecOpsComponent {
  button1Src = 'img/my project section/Button Primary Web.png';
  button2Src = 'img/my project section/Button Secondary Web.png';

  button1Enter() {
    this.button1Src = 'img/my project section/Button Primary Web White.png';
  }

  button1Leave() {
    this.button1Src = 'img/my project section/Button Primary Web.png';
  }

  button2Enter() {
    this.button2Src = 'img/my project section/Button Secondary Web Hover.png';
  }

  button2Leave() {
    this.button2Src = 'img/my project section/Button Secondary Web.png';
  }

  selectedProject = 1;

  projects = [
    {
      id: 1,
      name: 'Pokedex',
      image: 'img/my project section/Screenshot project4.png',
      tech: 'JavaScript, API, CSS, HTML',
      duration: 'duration4',
      isGroupProject: false,
      githubUrl: 'https://github.com/Gaetano-Leanza/Pokedex',
      localUrl: 'https://www.gaetano-leanza-pokedex.de',
      texts: {
        about: 'aboutProjectPokedex',
        organise: 'TextPokedex',
        experience: 'Text2Pokedex',
      },
    },
    {
      id: 2,
      name: 'El Pollo Loco',
      image: 'img/my project section/Screenshot project2.png',
      tech: 'JavaScript, CSS, HTML',
      duration: 'duration2',
      isGroupProject: false,
      githubUrl: 'https://github.com/Gaetano-Leanza/El-Pollo-Loco',
      localUrl: 'https://www.gaetano-leanza-el-pollo-loco.de',
      texts: {
        about: 'aboutProjectPollo',
        organise: 'TextPollo',
        experience: 'Text2Pollo',
      },
    },
    {
      id: 3,
      name: 'Join',
      image: 'img/my project section/Screenshot project3.png',
      tech: 'Angular, TypeScript, Firebase',
      duration: 'duration3',
      isGroupProject: true,
      githubUrl: 'https://github.com/Gaetano-Leanza/join',
      localUrl: 'https://www.gaetano-leanza-join.de',
      texts: {
        about: 'aboutProjectJoin',
        organise: 'TextJoin',
        experience: 'Text2Join',
      },
    },
    {
      id: 4,
      name: 'DA Bubble',
      image: 'img/my project section/Screenshot project1.png',
      tech: 'Angular, TypeScript, Firebase',
      duration: 'duration1',
      isGroupProject: true,
      githubUrl: 'https://github.com/Gaetano-Leanza/',
      localUrl: '/El-Pollo-Loco/index.html',
      texts: {
        about: 'aboutProjectBubble',
        organise: 'Text',
        experience: 'Text2',
      },
    },
  ];

  openGithub() {
    const url = this.selected.githubUrl;
    if (url) {
      window.open(url, '_blank');
    }
  }

  openLocalProject() {
    const url = this.selected.localUrl;
    if (url) {
      window.open(url, '_blank');
    } else {
      alert('Lokales Projekt nicht gefunden.');
    }
  }

  selectProject(id: number) {
    this.selectedProject = id;
  }

  get selected() {
    return this.projects.find((p) => p.id === this.selectedProject)!;
  }
}
