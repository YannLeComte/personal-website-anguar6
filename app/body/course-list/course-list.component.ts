import { Component, OnInit, Input } from '@angular/core';
import {CourseInterface} from '../../dataInterfaces/training';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  @Input() courses: CourseInterface[];
  @Input() screenSize: number;
  constructor() { }

  ngOnInit() {
  }
}
