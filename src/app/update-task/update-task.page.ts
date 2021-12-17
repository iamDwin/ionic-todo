import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.page.html',
  styleUrls: ['./update-task.page.scss'],
})
export class UpdateTaskPage implements OnInit {

  @Input() task;

  categories = ['Work', 'Home', 'Personal','Church'];
  taskName: string;
  taskDate: string;
  taskPriority: string;
  taskCategory: string;
  taskData = {};

  constructor(
    public modalCtrl: ModalController,
    public store: StorageService,
    public alert: ToastController
  ) { }

  ngOnInit() {
    console.log(this.task);
    // console.log(this.task.value.itemName);

    //set values....
    this.taskName = this.task.value.itemName;
    this.taskDate = this.task.value.itemDueDate;
    this.taskPriority = this.task.value.itemPriority;
    this.taskCategory = this.task.value.itemCategory;
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

  async updateTask(){
    this.taskData = ({
      itemName : this.taskName,
      itemDueDate: this.taskDate,
      itemCategory: this.taskCategory,
      itemPriority: this.taskPriority,
    });

    let uid = this.task.key;
    if(uid){
      await this.store.updateTask(uid, this.taskData);
      this.presentToast('Task updated.','success');
    }else{
      console.log('No data to update.');
    }

    this.dismiss();
  }

}
