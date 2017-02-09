export class Todo {
    id: number;
    userId: number;
    title: string;    
    completed: boolean; 
    completeDate: Date;   

    constructor(id: number, userId: number, title: string){
        this.id = id;
        this.userId = userId;
        this.title  = title;        
    }

    setComplete():void {
        this.completed = true;
        this.completeDate = new Date();
    }

}