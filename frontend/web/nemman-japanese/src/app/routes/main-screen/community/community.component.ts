import { Component, OnInit } from '@angular/core';
interface courseCommunity {
  avatar : string ;
  authorName : string ;
  titleName : string ;
  content : string ;
  totalWorld : number ;
  headerContent ?: string ;
  rating : any ;
  comment ?: string ;
}
@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {
  likes = 0;
  dislikes = 0;
  // time = formatDistance(new Date(), new Date());

  like(): void {
    this.likes = 1;
    this.dislikes = 0;
  }

  dislike(): void {
    this.likes = 0;
    this.dislikes = 1;
  }

  listCourseCommunity :courseCommunity[] = [
    {
      avatar : 'https://avatars0.githubusercontent.com/u/22736418?s=88&v=4', 
      authorName : 'Huy Tuấn' ,
     titleName : 'Tiếng nhật chuyên nghành IT' ,
  content : '' ,
  totalWorld : 23 ,
  // headerContent : '' ,
  rating : 3.6 ,

    },
    {
      avatar : 'https://avatars0.githubusercontent.com/u/22736418?s=88&v=4', 
      authorName : 'Huy Tuấn' ,
     titleName : 'Tiếng nhật chuyên nghành IT' ,
  content : '' ,
  totalWorld : 23 ,
  // headerContent : '' ,
  rating : 3.6 ,

    },
    {
      avatar : 'https://avatars0.githubusercontent.com/u/22736418?s=88&v=4', 
      authorName : 'Huy Tuấn' ,
     titleName : 'Tiếng nhật chuyên nghành IT' ,
  content : '' ,
  totalWorld : 23 ,
  // headerContent : '' ,
  rating : 3.6 ,

    },
    {
      avatar : 'https://avatars0.githubusercontent.com/u/22736418?s=88&v=4', 
      authorName : 'Huy Tuấn' ,
     titleName : 'Tiếng nhật chuyên nghành IT' ,
  content : '' ,
  totalWorld : 23 ,
  // headerContent : '' ,
  rating : 3.6 ,

    },
    {
      avatar : 'https://avatars0.githubusercontent.com/u/22736418?s=88&v=4', 
      authorName : 'Huy Tuấn' ,
     titleName : 'Tiếng nhật chuyên nghành IT' ,
  content : '' ,
  totalWorld : 23 ,
  // headerContent : '' ,
  rating : 3.6 ,

    },
    {
      avatar : 'https://avatars0.githubusercontent.com/u/22736418?s=88&v=4', 
      authorName : 'Huy Tuấn' ,
     titleName : 'Tiếng nhật chuyên nghành IT' ,
  content : '' ,
  totalWorld : 23 ,
  // headerContent : '' ,
  rating : 3.6 ,

    },
    {
      avatar : 'https://avatars0.githubusercontent.com/u/22736418?s=88&v=4', 
      authorName : 'Huy Tuấn' ,
     titleName : 'Tiếng nhật chuyên nghành IT' ,
  content : '' ,
  totalWorld : 23 ,
  // headerContent : '' ,
  rating : 3.6 ,

    },
    {
      avatar : 'https://avatars0.githubusercontent.com/u/22736418?s=88&v=4', 
      authorName : 'Huy Tuấn' ,
     titleName : 'Tiếng nhật chuyên nghành IT' ,
  content : '' ,
  totalWorld : 23 ,
  // headerContent : '' ,
  rating : 3.6 ,

    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
function formatDistance(arg0: Date, arg1: Date) {
  throw new Error('Function not implemented.');
}

