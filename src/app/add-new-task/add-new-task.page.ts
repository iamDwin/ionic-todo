import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';

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
    public modalCtrl: ModalController,
    private store: StorageService,
    public alert: ToastController
  ) { }

  ngOnInit() {
  }

  async presentToast(message, color){
    const toast = await this.alert.create({
      message: message,
      duration: 2000,
      color: color,
      animated: true,
      position: 'bottom'
    });
    toast.present();
  }

  async dismiss(){
    await this.modalCtrl.dismiss(this.taskData);
  }

  selectCategory(index){
    this.taskCategory = this.categories[index];
  }
  
  async addtask(){
      //build task data..
      this.taskData = ({
        itemName : this.taskName,
        itemDueDate: this.taskDate,
        itemCategory: this.taskCategory,
        itemPriority: this.taskPriority,
      });

      let uid = this.taskName + this.taskDate;
      if(uid){
        await this.store.addTask(uid, this.taskData);
        this.presentToast('Task added to list','success');
      }else{
        console.log('No data to store.');
      }

      this.dismiss();
  }
}
