import { Component } from '@angular/core';
import {projects} from "../../data/data";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  protected readonly projects = projects;
}
