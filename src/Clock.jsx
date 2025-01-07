import {useState , useEffect} from 'react';
import './Clock.css';


function Clock(){

    const [time , setTime] = useState(new Date());

    useEffect(()=>{

            const interval = setInterval(()=>{
                setTime(new Date());
            }, 1000);

        return () => clearInterval(interval);
    }  ,[]);

    function formatTime(){
        var hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridien = hours > 12 ? "PM" : "AM";

        hours = hours %12 || 12;
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridien}`;
    }
    
    function padZero(number){
        return number < 10 ? "0" + number : number;
    }

    return (
        <div className="clock">
            <p>{formatTime()}</p>
        </div>
    );

}

export default Clock;