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

  addTask(key, value ){
    this.store.set(key,value);
  }

  deleteTask(key){
     this.store.remove(key);
  }

  updateTask(){}

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
