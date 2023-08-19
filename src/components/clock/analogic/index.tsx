import React from 'react';

type ClockProps = {
    time: ITime
}

import ITime from '../../../interface/ITime';
import './styles.css';

const clock: React.FC<ClockProps> = ({ time: {min, hour, sec} }: ClockProps) => {
    const angleHour = (30 * hour) + (0.5 * min )
    const angleSec = (sec )
    const angleMin = (min)
    return (
        <div className='container-analogic'>
            
            <div style={{'--i': angleSec}} className='pointer sec' />
            <div style={{'--i': angleMin}} className='pointer min' />
            <div style={{'--i': angleHour}} className='pointer hour' />
            
            {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((value, index) => {
                    const style = { '--i': index+1 };
                    return (
                        <div style={style} className="clock-number" key={value}>
                            {value}
                        </div>
                    );
                })
            }
        </div>
    )
}

export default clock;