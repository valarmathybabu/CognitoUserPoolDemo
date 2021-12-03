import { Component, OnInit ,Input,inject,Inject} from '@angular/core';
import {Auth} from 'aws-amplify';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
    email: string = '';
   
    pwd: string = ''; 
   
    constructor(private router: Router) { }
   
    ngOnInit(): void {
   
    }
    async loginwithCognito()
    {
      try{
        var user=await Auth.signIn(this.email.toString(),this.pwd.toString());
        console.log('Authentication completed for user :'+this.email.toString()+", login result :"+user);
        var token = user.signInUserSession;
        if(token)
        {
          console.log('user authenticated successfully');
          this.router.navigate(['home']);
          alert('login successfull');
        }

      }catch(error)
      {
        console.log(error);

        alert('authentication failed');
      }
      
    }
}
  
  



