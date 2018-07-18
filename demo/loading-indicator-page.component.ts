import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/switchMap';
import "rxjs/add/observable/of";
import "rxjs/add/observable/empty";

@Component({
  selector: 'slv-loading-indicator-page',
  template: `
    <div class="form-group">
    <label for="user-selector">User:</label>
    <select id="user-selector" class="form-control" [(ngModel)]="selectedUser">
      <option *ngFor="let user of users" [ngValue]="user" >{{user.name}}</option>
    </select>
    </div>
    <label>First post of {{selectedUser?.name}}:</label>
    <p>{{post?.title}}</p>
    <p>{{post?.body}}</p>
    <label>Comments:</label>
    <ul>
      <li *ngFor="let comment of comments">
        {{comment.name}}
        <p>{{comment.body}}</p>
      </li>
    </ul>

  `
})

export class LoadingIndicatorPageComponent implements OnInit {
  users = null;
  _selectedUser = null;
  post;
  comments;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/users')
      .subscribe(
        (users) => {
          this.users = users;
          this.selectedUser = users[0];
        },
        () => alert('Failed to get data from server')
      );
  }

  get selectedUser() {
    return this._selectedUser;
  }
  set selectedUser(user: any) {
    this._selectedUser = user;
    console.log('1. posts request');
    this.http.get(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
    .switchMap(
        (posts) => posts[0] ? Observable.of(posts[0]) : Observable.empty()
      )

      .subscribe(
        (post) => {
          console.log('2. comments request');
          this.post = post;
          this.http.get(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
            .subscribe(
              (comments) => this.comments = comments
            );

        },
        () => { alert('Failed to load data from server.'); }
      );
  }

}
