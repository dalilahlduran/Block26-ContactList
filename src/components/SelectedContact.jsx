import { useState } from "react"
import { useEffect } from "react"

export default function SelectedContact({selectedContactId, setSelectedContactId}){
    const [contact, setContacts] = useState({})
    useEffect(() => {async function fetchContact(){
        try {
            const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
            const result = await response.json();
            setContacts(result)
            console.log(setContacts)
        } catch (error){
            console.error(error);
        }
        }
        fetchContact();
    }, []);
    return (
        <button onClick={() => setSelectedContactId(null)}>Click Me</button>
    )
}