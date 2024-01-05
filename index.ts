// Import stylesheets

import { TaskList } from './tasks';

const ul = document.getElementById('task-ul');
const input = document.getElementById('task-input');
const btn = document.getElementById('task-button');

let myTasks = new TaskList(ul);
btn.addEventListener('click', () => {
  let task = (<HTMLInputElement>input).value;
  (<HTMLInputElement>input).value = '';
  myTasks.add(task);
});
