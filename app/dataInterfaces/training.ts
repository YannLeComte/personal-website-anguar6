export interface TrainingInterface {
  diploma: string;
  university: string;
  date: string;
  img: string;
  courses: CourseInterface[];
}

export interface CourseInterface {
  name: string;
  icon: string;
}
