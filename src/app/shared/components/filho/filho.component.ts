import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  // styleUrls: ['./filho.component.scss']
})
export class FilhoComponent implements OnInit {

  @Output() statusValidacaoForm = new EventEmitter();
  dataFilho: any;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      data: ['', Validators.required],
    });
  }

  getForm() {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.form.statusChanges.subscribe((s) => {
      this.statusValidacaoForm.emit({ status: s, form: this.getForm() });
    });
  }
}
