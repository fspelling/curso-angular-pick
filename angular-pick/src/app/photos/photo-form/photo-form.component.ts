import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PhotoService } from '../photo/photo.service';
import { UserService } from 'src/app/core/user/user.service';
import { AlertService } from 'src/app/shared/alert/alert.service';

@Component({
  selector: 'ap-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {
  formUpload: FormGroup;
  file: File;
  preview: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private photoService: PhotoService,
    private userService: UserService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.formUpload = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true]
    });
  }

  upload() {
    const description = this.formUpload.get('description').value;
    const allowComments = this.formUpload.get('allowComments').value;

    this.photoService.upload(description, allowComments, this.file)
      .subscribe(() => {
        this.alertService.Success('foto cadastrada com sucesso', true);
        this.router.navigate(['/user', this.userService.getUserName()]);
      });
  }

  handleFile(file: File) {
    this.file = file;
    const reader = new FileReader();

    reader.onload = (event: any) => this.preview = event.target.result;
    reader.readAsDataURL(file);
  }
}
