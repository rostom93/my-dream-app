import { Post } from './post.model';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class PostService {
 private  Posts: Post[] = [] ;
 getPosts() {
   return [...this.Posts];
 }
addPost(title: string , content: string) {
  const post: Post = {title: title , content: content};
  this.Posts.push(post);
}

}
