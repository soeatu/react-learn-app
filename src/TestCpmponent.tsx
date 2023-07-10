import React,{useState} from 'react';


interface Props{
    text: string
}
interface UserData{
    id: number;
    name:string;
}


const TestCpmponent: React.FC<Props> = (props :Props) => {
    const [count, setCount]= useState<number | null>(0);
    const [user,setUser] = useState<UserData>({id:1,name:"DDD"});
    const [inputData, setInputData] = useState("");

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setInputData(e.target.value);
    }
    return (
        <div>
            <h1>{props.text}</h1>
            <p>{count}</p>
            <input type="text" value={inputData} onChange={handleInputChange}/>
            <p>{inputData}</p>
        </div>
    )
}

export default TestCpmponent