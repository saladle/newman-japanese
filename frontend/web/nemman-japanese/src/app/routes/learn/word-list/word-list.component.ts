import { Component, OnInit, Output } from '@angular/core';
// import { EventEmitter } from 'stream';
// import React from 'react';

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.css'],
})
export class WordListComponent implements OnInit {
  listOfData: any = [
    {
      key: '1',
      name: '皆さんこんにちは',
      age: 'xin chào mọi người',
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'こんばんは',
      age: 'chào buổi tối',
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: '改善',
      age: 'cải tiến',
      address: 'London No. 1 Lake Park',
    },
    {
      key: '4',
      name: '勉強',
      age: 'học tập',
      address: 'London No. 1 Lake Park',
    },
    {
      key: '5',
      name: '完成',
      age: 'hoàn thành',
      address: 'London No. 1 Lake Park',
    },
    {
      key: '6',
      name: '賛成',
      age: 'tán thành',
      address: 'London No. 1 Lake Park',
    },
    {
      key: '7',
      name: 'こんばんは',
      age: 'chào buổi tối',
      address: 'London No. 1 Lake Park',
    },
    {
      key: '8',
      name: 'こんばんは',
      age: 'chào buổi tối',
      address: 'London No. 1 Lake Park',
    },
    {
      key: '9',
      name: 'こんばんは',
      age: 'chào buổi tối',
      address: 'London No. 1 Lake Park',
    },
    {
      key: '10',
      name: 'こんばんは',
      age: 'chào buổi tối',
      address: 'London No. 1 Lake Park',
    },
    {
      key: '11',
      name: 'こんばんは',
      age: 'chào buổi tối',
      address: 'London No. 1 Lake Park',
    },
    {
      key: '12',
      name: 'こんばんは',
      age: 'chào buổi tối',
      address: 'London No. 1 Lake Park',
    },
    {
      key: '13',
      name: 'こんばんは',
      age: 'chào buổi tối',
      address: 'London No. 1 Lake Park',
    },
    {
      key: '14',
      name: 'こんばんは',
      age: 'chào buổi tối',
      address: 'London No. 1 Lake Park',
    },
    {
      key: '15',
      name: 'こんばんは',
      age: 'chào buổi tối',
      address: 'London No. 1 Lake Park',
    },
    {
      key: '16',
      name: 'こんばんは',
      age: 'chào buổi tối',
      address: 'London No. 1 Lake Park',
    },
    {
      key: '17',
      name: 'こんばんは',
      age: 'chào buổi tối',
      address: 'London No. 1 Lake Park',
    },
    {
      key: '18',
      name: 'こんばんは',
      age: 'chào buổi tối',
      address: 'London No. 1 Lake Park',
    },
    {
      key: '19',
      name: 'こんばんは',
      age: 'chào buổi tối',
      address: 'London No. 1 Lake Park',
    },
    {
      key: '20',
      name: 'こんばんは',
      age: 'chào buổi tối',
      address: 'London No. 1 Lake Park',
    },
    {
      key: '21',
      name: 'こんばんは',
      age: 'chào buổi tối',
      address: 'London No. 1 Lake Park',
    },
    
  ];
  currentData : any ; 
  constructor() {}
  onClickList(data : any){
    console.log(data)
  }
  ngOnInit(): void {}
}
