import React, { useState, useEffect } from 'react'
import { Text, View } from 'react-native'

const formatTime = (time) => time < 10 ? `0${time}` : time;

export const CountDown = ({
    isPaused,
    style,
    setCurrentTimer,
    currentTimer
}) => {
    const [millis, setMillis] = useState(currentTimer);
    const interval = React.useRef(null)

    function countDown() {
        setMillis((time) => {
            if (time === 30) {
                clearInterval(interval.current)
                setMillis(0);
                setCurrentTimer(0);
                return time;
            }
            const timeLeft = time + 1;
            return timeLeft;
        })
    }

    useEffect(() => {
        if (isPaused) {
            if (interval.current) clearInterval(interval.current)
            return;
        }
        interval.current = setInterval(() => {
            countDown();
        }, 1000)
        return () => clearInterval(interval.current);
    }, [isPaused])

    useEffect(() => {
        setMillis(currentTimer);
    }, [currentTimer])

    return (
        <View>
            <Text style={style}>0:{formatTime(millis)}</Text>
        </View>
    )
}