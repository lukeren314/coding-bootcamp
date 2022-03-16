import { Component, OnInit } from '@angular/core';
import * as data from '../modules.json';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css'],
})
export class ModulesComponent implements OnInit {
  modules: any[] = (data as any).default;
  solutions: any[] = [
    {
      name: 'Module 1 Solutions',
      link: 'https://drive.google.com/file/d/15QpGwkh0icD0tUQCxLXeYRU_p4Nsa0IX/view?usp=sharing',
    },
    {
      name: 'Module 2 Solutions',
      link: 'https://drive.google.com/file/d/15QpGwkh0icD0tUQCxLXeYRU_p4Nsa0IX/view?usp=sharing',
    },
    {
      name: 'Module 3 Solutions',
      link: 'https://drive.google.com/file/d/1GDvzdyetyFPh9cKbj9uzP1mdl_WGacN0/view?usp=sharing',
    },
    {
      name: 'Module 4 Solutions',
      link: 'https://drive.google.com/file/d/1dYR2805RS_DK5C-dc3P_5Jq_AB71b4RP/view?usp=sharing',
    },
    {
      name: 'Module 5 Solutions',
      link: 'https://drive.google.com/file/d/1dYR2805RS_DK5C-dc3P_5Jq_AB71b4RP/view?usp=sharing',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
