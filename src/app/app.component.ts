import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public myForm: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this._fb.group({
      FrontEnd: ['',],
      rooms: this._fb.array([
        this.initRoomInput(),
      ])
    });
  }

  initRoomInput() {
    return this._fb.group({
      room: ['']
    });
  }

  addRoom() {
    const control = <FormArray>this.myForm.controls['rooms'];
    control.push(this.initRoomInput());

  }

  removeRoom(i: number) {
    const control = <FormArray>this.myForm.controls['rooms'];
    control.removeAt(i);
  }

  save(model) {
    console.log(model);
  }

}
