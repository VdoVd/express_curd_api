import {v4 as uuidv4} from "uuid";
import users from "./users";
export const createUser=(req,res)=>{
    console.log(users)
    res.send(users);
}

export const getUsers=(req,res)=>{
    const userId=uuidv4()
    const user=req.body
    const userWithId={...user,id: userId}
    users.push(userWithId)
    res.send(`USER WITH THE NAME ${user.firstname} added to the database!`)
}

export const getUser=(req ,res)=>{
    const {id}=req.params

    const foundUser=users.find((user)=>user.id===id)

    res.send(`User with id ${req.params.id} found`);
}

export const deleteUser=(req ,res)=>{
    const {id}=req.params
    users=users.filter((user)=>user.id!==id)
    res.send(`User with the id ${id} deleted from the database.`)
}

export const updateUser=(req,res)=>{
    const {id}=req.params
    const {firstname,lastname,age}=req.body
    const user=users.find((user)=>user.id===id)
    if(firstname){
        user.firstname=firstname
    }
    if(lastname){
        user.lastname=lastname
    }
    if(age){
        user.age=age
    }
    res.send(`User with the id ${id} has been update`)
}
