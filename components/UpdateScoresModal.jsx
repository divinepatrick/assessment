import React, { useState } from 'react';

const UpdateScoresModal = ({ initialRank, initialPercentile, initialCorrectAnswers, onUpdate, onCancel }) => {
  const [rank, setRank] = useState(initialRank);
  const [percentile, setPercentile] = useState(initialPercentile);
  const [correctAnswers, setCorrectAnswers] = useState(initialCorrectAnswers);
    const [errors, setErrors] = useState({rank: "", percentile: ""})

  const handleSubmit = () => {
       let valid = true;

       if(!rank) {
            setErrors(prev => ({...prev, rank: "required | should be number"}));
            valid = false;
       } else if(isNaN(rank)) {
           setErrors(prev => ({...prev, rank: "required | should be number"}));
           valid = false;
       } else {
            setErrors(prev => ({...prev, rank: ""}));
       }


        if(!percentile) {
            setErrors(prev => ({...prev, percentile: "required | percentile 0-100"}));
            valid = false;
        } else if(isNaN(percentile) || percentile < 0 || percentile > 100) {
            setErrors(prev => ({...prev, percentile: "required | percentile 0-100"}));
            valid = false;
        } else {
            setErrors(prev => ({...prev, percentile: ""}));
       }


        if(valid) {
            onUpdate(rank, percentile, correctAnswers)
        }
    };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-md p-6 w-[400px] opacity-100">
        <h2 className="text-2xl font-semibold mb-6 text-text_color">Update scores</h2>
        <div className="mb-4">
            <div className="flex items-center mb-2">
                <span className="font-semibold text-text_color text-sm mr-2">1</span>
                <label htmlFor="rank" className="text-dark_gray text-sm">Update your Rank</label>
            </div>
            <input
                type="text"
                id="rank"
                value={rank}
                onChange={(e) => setRank(e.target.value)}
                className={`border ${errors.rank ? 'border-red-500' : 'border-border_color'} rounded-md w-full px-3 py-2`}
            />
            {errors.rank && <span className="text-red-500 text-sm">{errors.rank}</span>}
        </div>
          <div className="mb-4">
               <div className="flex items-center mb-2">
                   <span className="font-semibold text-text_color text-sm mr-2">2</span>
                    <label htmlFor="percentile" className="text-dark_gray text-sm">Update your Percentile</label>
               </div>
            <input
                type="text"
                id="percentile"
                value={percentile}
                onChange={(e) => setPercentile(e.target.value)}
                className={`border ${errors.percentile ? 'border-red-500' : 'border-border_color'} rounded-md w-full px-3 py-2`}
            />
              {errors.percentile && <span className="text-red-500 text-sm">{errors.percentile}</span>}
        </div>
        <div className="mb-6">
           <div className="flex items-center mb-2">
               <span className="font-semibold text-text_color text-sm mr-2">3</span>
             <label htmlFor="correctAnswers" className="text-dark_gray text-sm">Update your Current Score (out of 15)</label>
           </div>
            <input
                type="text"
                id="correctAnswers"
                value={correctAnswers}
                onChange={(e) => setCorrectAnswers(e.target.value)}
                className="border border-border_color rounded-md w-full px-3 py-2"
            />
        </div>
          <div className="flex justify-end">
            <button onClick={onCancel} className="bg-gray-300 text-dark_gray px-4 py-2 rounded-md hover:bg-gray-400 transition-all duration-300">Cancel</button>
              <button onClick={handleSubmit} className="bg-primary text-white px-4 py-2 rounded-md ml-2 hover:bg-blue-700 transition-all duration-300">save</button>
          </div>
      </div>
    </div>
  );
};

export default UpdateScoresModal;