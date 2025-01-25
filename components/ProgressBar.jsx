import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressBar = ({ text, percentage, color }) => {

    let progressColor = ''
    if (color === 'blue_progress') {
        progressColor = '#2563eb'
    } else if (color === 'yellow_progress') {
       progressColor = '#ca8a04'
    } else if (color === 'red_progress') {
        progressColor = '#dc2626'
    } else {
        progressColor = '#16a34a'
    }

    return (
        <div className="flex items-center mb-4">
            <div className="mr-4 w-[100px] h-[30px]">
                <span className="text-sm text-dark_gray">{text}</span>
            </div>
          <div className="flex-1 flex items-center">
              <div className="w-[30px] h-[30px] flex items-center justify-center relative mr-2">
               <CircularProgressbar
                    value={percentage}
                    styles={buildStyles({
                           pathColor: `${progressColor}`,
                            trailColor: '#f0f0f0',
                         })
                        }
                 />
                  <span className="absolute text-xs font-bold text-text_color">{percentage}%</span>
              </div>
            <div className="relative w-full bg-gray-200 h-[8px] rounded-md">
                <div className="absolute left-0 h-[8px] rounded-md"
                    style={{ width: `${percentage}%`, backgroundColor: `${progressColor}`}}>
                </div>
             </div>
          </div>
        </div>
    );
};

export default ProgressBar;