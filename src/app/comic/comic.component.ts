import { Component, OnInit } from '@angular/core';

import { ComicService } from "../services/comic.service";
import { comic } from "../model/comic";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.sass']
})
export class ComicComponent implements OnInit {

  limit = 0;
  comic :comic = {
    month: "",
    num: 0,
    link: "",
    year: "",
    news: "",
    safe_title: "",
    transcript: "",
    alt: "",
    img: "",
    title: "Comic",
    day: ""
  };

  constructor(private comicservice: ComicService) { }

  ngOnInit(): void {
    this.defineLimit();
  }

  submitForm(myForm: NgForm){
    this.ngOnInit();
    myForm.resetForm();
  }

  defineLimit(): void{
    this.comicservice.getLimit().subscribe(
      data => {
        this.limit = data.num + 1;
        this.getComics(this.getRandomInt(1, this.limit));
      }
    );
  }

  getComics(id: number){
    console.log(id);
    this.comicservice.getComic(id).subscribe(data => {
      this.comic = data;
    });
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

}
