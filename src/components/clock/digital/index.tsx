import React from 'react';

type ClockProps = {
    time: ITime | null
}

import ITime from '../../../interface/ITime';
import './styles.css';

const clock: React.FC<ClockProps> = ({ time }: ClockProps) => {

    return (
        <div className='container-digital'>
            {
                time && (
                    <>
                        <span className='hour'>
                            {time.hour}
                        </span>
                        {' : '}
                        <span className='min'>
                            {time.min}
                        </span>
                        {' : '}
                        <span className='sec'>
                            {time.sec}
                        </span>

                        <span className='period'>
    
                        {
                            +time?.hour >= 12
                                ? 'PM'
                                : 'AM'
                        }
                        </span>
                    </>
                )
            }
        </div>
    )
}

export default clock;