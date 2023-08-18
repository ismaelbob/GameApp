import { useEffect, useState } from 'react'
import './css/principal.css'
import sonido from './audio/tictac.mp3'
import sonidoCorrecto from './audio/correcto.mp3'
import sonidoIncorrecto from './audio/incorrecto.mp3'

function Principal () {
    const [time, setTime] = useState(5)
    const [timeLeft, setTimeLeft] = useState(5)
    const [isActive, setIsActive] = useState(false)
    const [audio, setAudio] = useState(new Audio(sonido))
    const [audioError, setAudioError] = useState(new Audio(sonidoIncorrecto))
    const [audioCorrect, setAudioCorrect] = useState(new Audio(sonidoCorrecto))

    useEffect(() => {
        let interval
    
        if (isActive && timeLeft > 0) {
          interval = setInterval(() => {
            setTimeLeft(prevTime => prevTime - 1)
          }, 1000);
          audio.play()
        } else if (timeLeft === 0) {
            clearInterval(interval)
            audio.pause()
            audio.currentTime = 0
            audioError.play()
            setIsActive(false)
        }
    
        return () => {
          clearInterval(interval)
        };
    }, [isActive, timeLeft, audio])

    const handleStart = () => {
        if (!isActive) {
            setIsActive(true)
            setTimeLeft(time)
        }
      };
    
      const handleStop = () => {
        setTimeLeft(0)
        audio.pause()
        audio.currentTime = 0
      }
      const handlePause = () => {
        setIsActive(false)
        audio.pause()
        audio.currentTime = 0
        audioCorrect.play()
      }

    const handleChange = (event) => {
        setTime(event.target.value)
        setTimeLeft(event.target.value)
    }
    return (
        <>
            <div className="pnl-principal">
                <h4>DAME TRES</h4>
                <div className='btn-play' onClick={handlePause}><div className='contador'>{timeLeft}</div></div>
                <input type="number" name="txtnumber" id="txtnumber" value={time} onChange={handleChange}/>
                <label htmlFor="txtnumber">Segundos</label>
                <input type="button" value="INICIAR" id='btn-iniciar' onClick={handleStart} />
                <div className='menu'></div>
            </div>
        </>
    )
}

export default Principal