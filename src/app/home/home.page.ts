import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { AddNewTaskPage } from '../add-new-task/add-new-task.page';
import { StorageService } from '../storage.service';
import { UpdateTaskPage } from '../update-task/update-task.page';

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
    public alert: ToastController,
    public store: StorageService
  ) {
    this.init();
  }

  //toastr alert configuration...
  async presentToast(message, color){
    const toast = await this.alert.create({
      message: message,
      duration: 2000,
      color: color,
      animated: true,
      position: 'top'
    });
    toast.present();
  }

  //add task modal popup...
  async addTask(){
    const modal = await this.modalCtrl.create({
      component: AddNewTaskPage
    });

// get data from modal right after modal closes..
    modal.onDidDismiss().then(newTaskObj => {
      this.init();
    })
    return await modal.present();
  }

//update task modal popup...
  async updateTask(key){
    const modal = await this.modalCtrl.create({
      component: UpdateTaskPage
    });
//after the modal closes..
    modal.onDidDismiss().then(updatedTaskObj => {
      this.init(); //reload allTasks..
    });

    return await modal.present();
  }

  //delete task from list
  deleteTask(key){
    this.store.deleteTask(key);
    this.init();
    this.presentToast('Task deleted from list', 'danger');
  }

  //get all tasks from storage..
  init(){
    this.todoList = this.store.getAllTask();
  }
}