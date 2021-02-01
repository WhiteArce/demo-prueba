import { Component, OnInit } from '@angular/core';
import { Task } from '../tasks/task.model';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.scss']
})
export class AddPersonComponent implements OnInit {

  personas: Task[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

  addPerson(persona: Task){
    this.personas.push(persona);
  }

}
