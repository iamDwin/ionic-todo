import { Component } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { AddNewTaskPage } from '../add-new-task/add-new-task.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  todoList = []

 today: number = Date.now();

  constructor(
    public modalCtrl: ModalController,
    public alert: ToastController
  ) {}


  async presentToast(message, color){
    const toast = await this.alert.create({
      message: message,
      duration: 2000,
      color: color
    });
    toast.present();
  }

  //add task function
  async addTask(){
    const modal = await this.modalCtrl.create({
      component: AddNewTaskPage
    });
// get data from modal right after modal closes..
    modal.onDidDismiss().then(newTaskObj => {
      console.log(newTaskObj.data);
      this.todoList.push(newTaskObj.data);
        this.presentToast('Task added to list','success');
    })
    return await modal.present();
  }

  //delete task from list
  deleteTask(index){
    this.todoList.splice(index,1);
    this.presentToast('Task deleted from list', 'danger');
  }
}
