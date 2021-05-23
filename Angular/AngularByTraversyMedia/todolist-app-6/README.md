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
8. use of [ngclass]  to add css classes to html element dynamically:
  * <div [ngClass]="setClasses()">
  *  --- tags which cause events to make css class set/unset-----
  * </div>
9. add  (change) and (click) events to html elements
  * <input type="checkbox" (change)="onToggle(todoItem)"/>
  * <button (click)="onDelete(todoItem)">X</button> 
6. add services  for making API calls.
7. add "HttpClientModule" module in app.module.ts to api calls
8. import "HttpClient,HttpHeaders" in service where http api calls happens
9. service is injected in constructor of component as private and will become field of class
   * constructor(private  todoService:TodoService) {
   * }
   * now it is accessed as "this.todoService" within class
10. get api return Observable array
   * getTodos():Observable<Todo[]>{ 
   * return this.httpClient.get<Todo[]>(this.todosurl+this.todosLimit);
   * }
11. subscribe to Observable for receiving data as its async call
   * this.todoService.getTodos().subscribe(todosData=>{
   * this.todos=todosData;
   * });

* -----------------------------------------------------------
12. put api call 
13. put api takes url,object,httpoptions 
   * httpclinet.put(<url>,<object>,<httpoptions>)
14. put api return observable<any> 
15. subscribe to put api return Observable<any>




