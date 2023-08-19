import { useEffect, useState } from "react";
import "./App.css";
import { Analogic, DigitalClock } from "./components/clock";
import ITime from "./interface/ITime";

function App() {
  const [time, setTime] = useState<ITime>({} as ITime);

  const atualizaTime = (): ITime =>{
      const dataAtual = new Date();
      const horaAtual = dataAtual.getHours();
      const minutosAtuais = dataAtual.getMinutes();
      const segundosAtuais = dataAtual.getSeconds();
    
      return {
        hour: horaAtual.toString().padStart(2, '0'),
        min: minutosAtuais.toString().padStart(2, '0'),
        sec: segundosAtuais.toString().padStart(2, '0')
      } as unknown as ITime
  }
  
  useEffect(()=>{
   
    if(!time.hour){
      setTime(atualizaTime)      
      setInterval(() => setTime(atualizaTime), 1000)
    }
  
  })

  return (
    <div className="App">
      <div className="container-clock">
        <Analogic time={time}/>
        <DigitalClock time={time}/>
      </div>
    </div>
  );
}

export default App;
