import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.page.html',
  styleUrls: ['./add-new-task.page.scss'],
})
export class AddNewTaskPage implements OnInit {

  categories = ['work', 'home', 'personal','church'];

  taskName: string;
  taskDate: string;
  taskPriority: string;
  taskCategory: string;

  constructor(
    public modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  async dismiss(){
    await this.modalCtrl.dismiss();
  }

  selectCategory(index){
    this.taskCategory = this.categories[index];
  }
  
  addtask(){
    
  }
}
