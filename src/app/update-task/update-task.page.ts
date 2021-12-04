import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.page.html',
  styleUrls: ['./update-task.page.scss'],
})
export class UpdateTaskPage implements OnInit {

  categories = ['Work', 'Home', 'Personal','Church'];

  taskName: string;
  taskDate: string;
  taskPriority: string;
  taskCategory: string;
  taskData = {};

  constructor(
    public modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  async dismiss(){
    await this.modalCtrl.dismiss(this.taskData);
  }

  selectCategory(index){}
  updateTask(){}

}
