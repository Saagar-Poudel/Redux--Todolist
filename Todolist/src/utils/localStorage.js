 
 export const  loadState=()=>{
    try{
        const serializedState= localStorage.getItem("todos");
        if(!serializedState) return undefined;
        return JSON.parse(serializedState);

    }catch(err){
        console.err("failed to load store",err);
        return undefined;

    }
 };

 export const saveState=(state)=>{
    try{
        const serializedState= JSON.stringify(state);
        localStorage.setItem("todos",serializedState);
    }catch(err){
        console.err("Failed to save state",err);
    }
 };
