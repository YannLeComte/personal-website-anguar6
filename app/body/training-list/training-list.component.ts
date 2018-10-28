import { Component, OnInit, Input } from '@angular/core';
import * as json from '../../data/training-list-data.json';

import {TrainingInterface} from '../../dataInterfaces/training';
import {CourseInterface} from '../../dataInterfaces/training';
import {AnimatedBackground} from '../../abstractClasses/AnimatedBackground';


@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.css'],
})

export class TrainingListComponent extends AnimatedBackground implements OnInit {
  public trainingList: TrainingInterface[];

  constructor() {
    super();
    this.trainingList = [];
    this.JsonToTrainingList(json.default);
  }

  ngOnInit() {
  }

  JsonToTrainingList(jsonContent): void {
    for (let training of  jsonContent) {
      let trainingI: TrainingInterface = {
        diploma: training.diploma || '',
        university: training.university || '',
        date: training.date || '',
        img: training.img || '',
        courses: this.getCourses(training.courses)
      };
      this.trainingList.push(trainingI);
    }
  }

  getCourses(coursesArray): CourseInterface[] {
    let courseList = [];
    for (let course of  coursesArray) {
      let courseI: CourseInterface = {
        name: course.name || '',
        icon: course.icon || '',
      };
      courseList.push(courseI);
    }
    return courseList;
  }
}
