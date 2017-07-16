import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'tdlist-input',
  templateUrl: 'tdlist-input.component.html',
  styleUrls: ['tdlist-input.component.scss'],
})
export class TodoListInputComponent implements OnInit {

  ngOnInit() {
    this.buildForm();
  }

  @Output() onAdd = new EventEmitter<string>();
  taskForm: FormGroup;

  constructor(private formBuilder: FormBuilder){}

  onAddBtnClick(taskInput) {
    const taskName = (<HTMLInputElement>taskInput);
    if (taskName.value.length === 0) {
      return
    }
    this.onAdd.emit(taskName.value);
    taskName.value = '';
  }

  onEnterPressed(event) {
    if (event.keyCode === 13) {
      this.onAddBtnClick((<HTMLInputElement>event.target));
    }
  }

  buildForm() {
    this.taskForm = this.formBuilder.group({
      'taskName':['',
        [
          Validators.required,
          Validators.maxLength(50),
        ]],
    });

    this.taskForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged()
  }

  onValueChanged(data?: any) {
    if (!this.taskForm) {
      return;
    }
    const form = this.taskForm;

    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  formErrors = { 'taskName': '' };

  validationMessages = {
    'taskName': {
      'required':'Task name is required.',
      'maxlength': 'Task name must be shorter then 50 charachters',
    },
  };

}
