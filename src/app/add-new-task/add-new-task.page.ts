import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.page.html',
  styleUrls: ['./add-new-task.page.scss'],
})
export class AddNewTaskPage implements OnInit {

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

  selectCategory(index){
    this.taskCategory = this.categories[index];
  }
  
  addtask(){
      //build task data..
      this.taskData = ({
        itemName : this.taskName,
        itemDueDate: this.taskDate,
        itemCategory: this.taskCategory,
        itemPriority: this.taskPriority,
      })

      this.dismiss();
  }
}
