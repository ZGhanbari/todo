import React,{Component} from "react"
import Footer from "./Footer"
import TodoEntry from "./TodoEntry"
import TodoItems from "./TodoItems"


class Main extends Component{
    constructor(){
        super()
        this.state={
            todos:[]
            ,id:0
            ,count:0
        }
        this.ontoggle=this.ontoggle.bind(this)
        this.removeTodo=this.removeTodo.bind(this)
        this.addTodo=this.addTodo.bind(this)
        this.getCount=this.getCount.bind(this)
        this.clear=this.clear.bind(this)
    }
    clear(){
        const list=this.state.todos.filter(todo=>!(todo.complated))
        const id=this.state.id
        const count=this.state.count
    
         this.setState(
             {
                 todos:this.state.todos=list,
                 id:id,
                 count:count
                 
             }
         )
         this.getCount()

    }
    ontoggle(id){
    
        const todoList=this.state.todos.map((todo)=>{
            if(todo.id===id){
                todo.complated=!todo.complated
            }
        })
        this.setState(
            (state)=>({
                todos:todoList
                ,id:state.id,
                count:state.count
            })
        )
        this.getCount()
    }
    removeTodo(Id){
        
        const list= this.state.todos.filter((todo)=>(
        (todo.id)!=Id))
       const id=this.state.id
       const count=this.state.count
   
        this.setState(
            {
                todos:this.state.todos=list,
                id:id,
                count:count
                
            }
        )
        this.getCount()
    }
    addTodo(title){
       
      const  Id=this.state.id
      const  todo={
            id:Id ,
            title:title,
            complated:false
        }
        const list= this.state.todos
        this.setState(
            (state)=>({
                todos:list.push(todo),
                id:Id+1,
                count:state.count
            })
        )
        this.getCount()
    }
    getCount(){
        
        var c=0
       const list= this.state.todos
       list.map((todo)=>{
        if(todo.complated){
           c++
        }
    })
        this.setState(
            (state)=>({
                todos:list,
                id:state.id,
                count:c
            })
        )
    }
    render(){
        
        return <div>
            <TodoEntry addTodo={this.addTodo}/>
            <TodoItems todos={this.state.todos}
             ontoggle={this.ontoggle}
             removeTodo={this.removeTodo}
             />
            <Footer count={this.state.count} number={this.state.todos.length} clear={this.clear}/>
        </div>
    }
}
export default Main