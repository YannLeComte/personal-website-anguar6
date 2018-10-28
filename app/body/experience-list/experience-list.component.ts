import { Component, OnInit, Input} from '@angular/core';
import * as json from '../../data/experience-list-data.json';
import {ExperienceInterface} from '../../dataInterfaces/experience';
import {AnimatedBackground} from '../../abstractClasses/AnimatedBackground';

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.css']
})
export class ExperienceListComponent extends AnimatedBackground implements OnInit {
  @Input() screenSize: number;
  public experienceList: ExperienceInterface[];

  constructor() {
    super();

    this.experienceList = [];
    this.jsonToExperienceList(json.default);
  }

  ngOnInit() {
  }

  /* Init the experience list with a given json */
  jsonToExperienceList(jsonContent) {
    for (let experience of  jsonContent) {
      let experienceI: ExperienceInterface = {
        company: experience.company || '',
        date: experience.date || '',
        skills: experience.skills || [],
        location: experience.location || '',
        img: experience.img || '',
        link: experience.link || ''
      };
      this.experienceList.push(experienceI);
    }
  }
}
