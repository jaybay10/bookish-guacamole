import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-server',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent {

  btnDisabled = true;
  serverName = "";
  serverStatus = "";
  emptyServer = false;
  serverInfo = [{
    serverName: "Server 1",
    serverStatus: "Online"
  },{
    serverName: "Server 2",
    serverStatus: "Offline"
  }];

  constructor() { 
    setTimeout(() => {
      this.btnDisabled = false;
    },2000)
  }

  addServer(){
    this.serverInfo.push({
      serverName: this.serverName,
      serverStatus: this.serverStatus
    });
    console.log(this.serverInfo);
  }

  clearFields(){
    this.serverName = "";
    this.serverStatus = "";
  }

}
