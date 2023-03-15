import { useEffect, useState } from "react";

const Countdown = () => {
const [Countdown, setCountdown] = useState({hours: 24, minute: 0, seconds: 0,});

useEffect(() => {
  const interval = setInterval(() => {
    setCountdown(prevCountdown => {
        const totalseconds = prevCountdown.hours*3600 + prevCountdown.minute*60 + prevCountdown.seconds;
    if(totalseconds <= 0) {
        clearInterval(interval)
        return prevCountdown;
    }
    const seconds = totalseconds - 1;
    return {
        hours: Math.floor(seconds/ 3600),
        minute: Math.floor((seconds % 3600) / 60),
        seconds: seconds % 60,
    };
    })
  }, 1000);
  return () => clearInterval(interval)
},[])
    return (
        <div>
          {Countdown.hours == 0 && Countdown.minute == 0 && Countdown.seconds == 0 ? (
            <div> Time's up</div>
          ) : (
            <div>
           {Countdown.hours.toString().padStart(2,'0')}: {Countdown.minute.toString().padStart(2, '0')}: {Countdown.seconds.toString().padStart(2, '0')}
            </div>
          )}
        </div>
    );
}
 
export default Countdown;