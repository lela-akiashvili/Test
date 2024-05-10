import { Component } from '@angular/core';
interface Img {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-imgs',
  standalone: true,
  templateUrl: './imgs.component.html',
  styles: `
  .input{
    text-align:center;
  }
  input[type="file"] {
    display:none;
  }
  label{
    background-color: rgb(238, 238, 238);
    padding:5px 15px;
    border-radius:15px;
  }label:hover{
    background-color:lightgray;
    cursor:pointer;
  }
  img{
    max-width:20vw;
    max-height:20vh;
    border-radius:1rem;
    margin:1rem;
    transition: transform 0.3s ease;
    box-shadow:0px 0px 5px 2px gray;
    
  }
  img:hover {
  transform: scale(1.5);
}
`,
})
export class ImgsComponent {
  list: Img[] = [];

  onFileChange(event: any) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const imgSrc = e.target.result;
        const imgAlt = file.name;
        this.list.push({ src: imgSrc, alt: imgAlt });
      };
      reader.readAsDataURL(file);
    }
  }
}
