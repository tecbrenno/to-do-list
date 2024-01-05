export class TaskList {
  list: string[] = [];
  ul: HTMLElement;

  constructor(e: HTMLElement) {
    this.ul = e;
    this.read();
    this.render();
  }

  save() {
    localStorage.setItem('my-todo-list', JSON.stringify(this.list));
  }
  read() {
    let saved = localStorage.getItem('my-todo-list');
    if (saved) {
      this.list = JSON.parse(saved);
    }
  }

  render() {
    this.ul.innerHTML = '';
    this.list.forEach((task) => {
      const li = document.createElement('li');
      li.className = 'mb-2';
      const btn = document.createElement('button');
      btn.className = 'btn btn-danger btn-sm ms-2';

      btn.innerText = '-';
      btn.addEventListener('click', () => {
        this.remove(task);
      });
      li.innerText = task;
      li.appendChild(btn);
      this.ul.appendChild(li);
    });
  }

  add(task: string) {
    this.list.push(task);
    this.save();
    this.render();
  }

  remove(task: string) {
    const i = this.list.indexOf(task);
    if (i >= 0) {
      this.list.splice(i, 1);
      this.save();
      this.render();
    }
  }
}
