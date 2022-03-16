import { Component, OnInit } from '@angular/core';
import * as data from '../modules.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['name', 'content'];
  modules: any[] = (data as any).default;

  constructor() {}

  ngOnInit(): void {}
}
