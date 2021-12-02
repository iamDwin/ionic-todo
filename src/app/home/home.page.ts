import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewTaskPage } from '../add-new-task/add-new-task.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  todoList = [{
    itemName: 'Coding',
    itemDueDate: '12-10-21',
    itemPriority: 'low',
    itemCategory: 'Work'
  },
  {
    itemName: 'Video Edit',
    itemDueDate: '12-01-21',
    itemPriority: 'high',
    itemCategory: 'Work'
  },
  {
    itemName: 'Design Logo',
    itemDueDate: '12-10-21',
    itemPriority: 'medium',
    itemCategory: 'Work'
  },
  {
    itemName: 'Audio Recording',
    itemDueDate: '12-16-21',
    itemPriority: 'medium',
    itemCategory: 'Work'
  },
  {
    itemName: 'Audio Edit',
    itemDueDate: '12-10-21',
    itemPriority: 'high',
    itemCategory: 'Work'
  },
  {
    itemName: 'Date with babe',
    itemDueDate: '12-10-21',
    itemPriority: 'high',
    itemCategory: 'Personal'
  },
]

 today: number = Date.now();

  constructor(
    public modalCtrl: ModalController
  ) {}

  async addTask(){
    const modal = await this.modalCtrl.create({
      component: AddNewTaskPage
    });

    return await modal.present();
  }

}
