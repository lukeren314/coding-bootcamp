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
      link: 'https://colab.research.google.com/drive/15jwrhLKwbea0BCGIuYuRupFrZEURJMQQ?usp=sharing',
    },
    {
      name: 'Module 2 Solutions',
      link: 'https://colab.research.google.com/drive/1NuG7oVRxeIDT7oxvbleJD9TZCxTgkbUv?usp=sharing',
    },
    {
      name: 'Module 3 Solutions',
      link: 'https://colab.research.google.com/drive/1h55s8rh8_2jPlMmxhS5ei6NFAT416KA6?usp=sharing',
    },
    {
      name: 'Module 4 Solutions',
      link: 'https://colab.research.google.com/drive/11todGHUFTpB0FhDiB5FesSqlRDEJ_B36?usp=sharing',
    },
    {
      name: 'Module 5 Solutions',
      link: 'https://colab.research.google.com/drive/1j26EXx8YBqiSfUBQo7hLRvANRRRYEK5Y?usp=sharing',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
