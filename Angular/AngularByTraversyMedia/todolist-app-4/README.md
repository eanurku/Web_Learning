1. create a sample angular app by 
    * ng new <app name> 
2. passing data from componet to html by {{  }}
3. using javascript inside {{ }}
4. adding a components folder for components
5. adding a models folder for common classes
6. using *ngFor to fetch list  from component to html 
   * example :
   * <li *ngFor="let todo of todos"> {{todo.title}} </li>
7. push data from parent component to child component using @Input
   * add below code in child component
    * @Input() todoItem:Todo
   * pass attribute in child selector tag like this from parent html:
    * <app-todo-item [todoItem]="todo"></app-todo-item>

* -----------------------------------------------------------
8. use of [ngclass]  to add css classes to html element dynamically:
  * <div [ngClass]="setClasses()">
  *  --- tags which cause events to make css class set/unset-----
  * </div>
9. add  (change) and (click) events to html elements
  * <input type="checkbox" (change)="onToggle(todoItem)"/>
  * <button (click)="onDelete(todoItem)">X</button> 