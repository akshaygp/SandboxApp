import { Injectable } from '@angular/core';

import { User } from '../models/User'
import { Observable } from 'rxjs';
import { of } from 'rxjs';


@Injectable()
export class UserService {
  users: User[];
  data: Observable<any>;
  constructor() { 
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',
        isActive: true,
        registered: new Date('01/01/2018 08:30:00'),
        hide: true
    },
    {
      firstName: 'Kevin',
      lastName: 'Johnson',
      email: 'kevin@yahoo.com',
      isActive: false,
        registered: new Date('03/11/2017 06:20:00'),
        hide: true
  },
  {
    firstName: 'Karen',
    lastName: 'Williams',
    email: 'karen@gmail.com',
    isActive: true,
    registered: new Date('11/02/2016 08:30:00'),
    hide: true
  }
    ];

    //localStorage.setItem('users',JSON.stringify(this.users));
  }

getData(){
  this.data = new Observable(observer => {
    setTimeout(() => {
      observer.next(1);
    }, 1000);

    setTimeout(() => {
      observer.next(2);
    }, 2000);

    setTimeout(() => {
      observer.next(3);
    }, 3000);

    setTimeout(() => {
      observer.next(4);
    }, 4000);
  });

  return this.data;
}

getUsers(): Observable<User[]> {
   //return of(this.users);

   if(localStorage.getItem('users') === null){
    this.users = [];
  } else {
    this.users = JSON.parse(localStorage.getItem('users'));
  }
  return of(this.users.sort((a,b) => {
    return b.registered = a.registered;
  }));

}

addUser(user: User) {
  this.users.unshift(user);
  
  //Add to local storage
  localStorage.setItem('users',JSON.stringify(this.users));
}
  
}
