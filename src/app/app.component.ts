import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-app';
  selectedValue: string | undefined;
  submitted = false;

  onClickSubmit(result: { username: string; }) {    
    let patten = /\s/g;
    let blahRegex = new RegExp(result.username)
    let isSpace = patten.test(result.username)
    let data = blahRegex.test(result.username)
    if(result.username.length === 0){ 
       alert('Please enter the value ')
     } else if (isSpace) {
      alert('Value with space')
    }  else{ 
      alert('User record is created successfully ')
      console.log("You have entered : " + result.username); 
    }

    // else if (result.username.includes(values.input)) { // this for only localstorage and working fine
    //   alert('Value is already exists')
    // }
    
 }

  options = [
    {
      id:1,
      value: 'All',
      label: 'ALL',
    },
    {
      id:2,
      value: 'Student',
      label: 'STUDENT',
    },
    {
      id:3,
      value: 'Alumni',
      label: 'ALUMNI',
    },
    {
      id:4,
      value: 'Lifer',
      label: 'LIFER',
    },
    {
      id:5,
      value: 'ExecEd',
      label: 'EXECED',
    },
    {
      id:6,
      value: 'UnderGrad',
      label: 'UNDERGRAD',
    },
    {
      id:6,
      value: 'AlumReunion',
      label: 'ALUMREUNION',
    },
  ]

public objectComparisonFunction = function( option: { id: any; }, value: { id: any; } ) : boolean { 
  return option.id === value.id;
}

}
