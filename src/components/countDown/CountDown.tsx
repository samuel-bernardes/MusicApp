import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'

const minutesToMillis = (min) => min * 1000 * 60

const formatTime = (time) => time < 10 ? `0${time}` : time;


export const CountDown = ({
    minutes,
    isPaused,
    onProgress,
    style
    //onEnd
}) => {
    const [millis, setMillis] = useState(minutesToMillis(minutes))
    const interval = React.useRef(null)
    const minute = Math.floor(millis / 1000 / 60 ) % 60;
    const second = Math.floor(millis / 1000 ) % 60;

    const countDown = () => {
        setMillis((time) => {
            if(time === 0) {
                clearInterval(interval.current)
                return time;
            }
            const timeLeft = time - 1000
            return timeLeft;
        })
    }

    useEffect(() => {
        if(isPaused){ 
            if (interval.current) clearInterval(interval.current)
            return;
        }
        interval.current = setInterval(countDown, 1000)
        return () => clearInterval(interval.current)
    }, [isPaused])

    useEffect(() => {
        onProgress(millis / minutesToMillis(minutes))
        /* if (millis === 0){
            onEnd()
        } */
    }, [millis])

    useEffect(() => {
        setMillis(minutesToMillis(minutes))
    }, [minutes])

    return ( 
        <View>
            <Text style={style}>{ formatTime(minute) }:{ formatTime(second) }</Text>
        </View>
    )
}

