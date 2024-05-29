import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  constructor(private titleService:Title,private renderer:Renderer2){
    this.titleService.setTitle('Yash Katara-resume')

  }

  DownloadFile(){
const link=this.renderer.createElement('a');
link.setAttribute('target','blank');
link.setAttribute('href','../../assets/Resume.pdf');
link.setAttribute('download','Resume.pdf');
link.click();
link.remove();
  }
}
