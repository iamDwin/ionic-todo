import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
    private store: Storage
  ){
    this.init();
  }

  // add task service...
  addTask(key, value ){
    this.store.set(key,value);
  }

  // delete task service...
  deleteTask(key){
     this.store.remove(key);
  }

  // update task service...
  updateTask(key,value){
    this.store.set(key,value);
  }

  //load all tasks from memory service...
  getAllTask(){
    let task: any = [];
    this.store.forEach((value, key, index) => {
      task.push({'key':key, 'value':value});
    });
    return task;
  }

  async init(){
    await this.store.create();
  }
}
