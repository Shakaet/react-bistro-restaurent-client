import { useEffect, useState } from "react"


let useMenu=()=>{

    let [item,setItem]=useState([])


    let [loading,setLoading]=useState(true)
    
    
        useEffect(()=>{
            fetch("http://localhost:5000/menu")
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                setItem(data)
                setLoading(false)
                
            })
        },[])

        return [item,loading]




}

export default useMenu