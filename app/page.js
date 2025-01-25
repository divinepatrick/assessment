'use client'
import { useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import ComparisonChart from '../components/ComparisonChart';
import ProgressBar from '../components/ProgressBar';
import UpdateScoresModal from '../components/UpdateScoresModal';
import '@fortawesome/fontawesome-free/css/all.min.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Home = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [rank, setRank] = useState(1);
  const [percentile, setPercentile] = useState(30);
  const [correctAnswers, setCorrectAnswers] = useState(10);
  const [initialPercent, setInitialPercent] = useState({
      "HTML Tools, Forms": 80,
      "Tags & References": 60,
      "Tables in HTML": 24,
      "Tables & CSS Bascis": 96,
  });

  const handleUpdateScores = (newRank, newPercentile, newCorrectAnswers) => {
      setRank(newRank);
      setPercentile(newPercentile);
      setCorrectAnswers(newCorrectAnswers);
      setIsOpenModal(false);
  };

  return (
    <main className="min-h-screen bg-bg_color flex flex-col md:flex-row">
        {isOpenModal && <UpdateScoresModal
            initialRank={rank}
            initialPercentile={percentile}
            initialCorrectAnswers={correctAnswers}
            onUpdate={handleUpdateScores}
            onCancel={() => setIsOpenModal(false)}
        />}
        <aside className={`bg-white w-full md:w-[250px] min-h-screen ${isDropdownOpen ? 'block' : 'hidden'} md:block`}>
            <div className="flex items-center h-[60px] pl-5 border-b border-border_color">
                <span className="font-bold text-xl text-text_color">WhatBytes</span>
            </div>

            <div className="pt-4 flex flex-col">
                <button
                   className="flex pl-5 h-[50px] items-center hover:bg-secondary transition-all duration-300"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.154-.439 1.594 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                     <span className="text-text_color text-sm">Dashboard</span>
                </button>
                <button
                   className="flex pl-5 h-[50px] items-center bg-secondary transition-all duration-300"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                     <span className="text-text_color text-sm">Skill Test</span>
                </button>
                <button
                   className="flex pl-5 h-[50px] items-center hover:bg-secondary transition-all duration-300"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V7.5m18 0h-18m18 0a2.25 2.25 0 00-2.25-2.25H5.25a2.25 2.25 0 00-2.25 2.25m15 0v10.5" />
                    </svg>
                     <span className="text-text_color text-sm">Internship</span>
                </button>
            </div>
        </aside>
        <div className="flex-1 p-4 md:p-10">
            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-text_color">Skill Test</h2>
                <div className="flex items-center mt-4 md:mt-0">
                    <img
                        src="/user-img.png"
                        alt="user"
                        className="h-[40px] w-[40px] rounded-full mr-2"
                    />
                    <span className="text-text_color text-sm">Divine Patrick </span>
                    <button
                        className="md:hidden bg-primary rounded-md text-white py-2 px-4 text-sm hover:bg-blue-700 transition-all duration-300 ml-4"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                        Menu
                    </button>
                </div>
            </div>
            <div className="bg-bg_secondary rounded-md border border-border_color p-5">
                <div className="flex flex-col md:flex-row items-center justify-between mb-8">
                    <div className="flex items-center mb-4 md:mb-0">
                        <img src="/html-icon.png" alt="html" className="h-[40px] w-[40px] mr-4"/>
                        <div>
                            <h3 className="text-text_color font-semibold">Hyper Text Markup Language</h3>
                            <p className="text-dark_gray text-sm">Questions: 08 | Duration: 15 mins | Submitted on Saturday 25th January 2025</p>
                        </div>
                    </div>
                    <button
                        className="bg-primary rounded-md text-white py-2 px-4 text-sm hover:bg-blue-700 transition-all duration-300"
                        onClick={() => setIsOpenModal(true)}
                    >
                        Update
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div className="bg-white p-4 border border-border_color rounded-md flex flex-col items-center">
                        <div className="relative">
                            <span className="absolute text-white font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                {rank}
                            </span>
                            <img src="/trophy.png" alt="trophy" className="w-[70px] h-[60px] object-contain"/>
                        </div>
                        <span className="text-dark_gray mt-2 text-sm">YOUR RANK</span>
                        <span className="text-dark_gray mt-2 text-sm">{rank}</span>
                    </div>
                    <div className="bg-white p-4 border border-border_color rounded-md flex flex-col items-center">
                        <span className="font-bold text-2xl text-text_color">{percentile}%</span>
                        <span className="text-dark_gray mt-2 text-sm">PERCENTILE</span>
                    </div>
                    <div className="bg-white p-4 border border-border_color rounded-md flex flex-col items-center">
                        <span className="font-bold text-2xl text-green_progress">{correctAnswers}/15</span>
                        <span className="text-dark_gray mt-2 text-sm">CORRECT ANSWERS</span>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-4 border border-border_color rounded-md">
                        <h3 className="text-text_color font-semibold mb-4">Comparison Graph</h3>
                        <p className="text-dark_gray mb-4 text-sm">You scored <span className="font-semibold">{percentile}%</span> percentile which is lower than the average percentile 72% of all the engineers who took this assessment</p>
                        <ComparisonChart />
                    </div>
                    <div className="bg-white p-4 border border-border_color rounded-md">
                        <h3 className="text-text_color font-semibold mb-4">Syllabus Wise Analysis</h3>
                        {
                            Object.entries(initialPercent).map(([key, value]) => {
                                let color = ''
                                if (value > 70) {
                                    color = 'blue_progress'
                                } else if (value > 50) {
                                    color = 'yellow_progress'
                                } else if (value < 30) {
                                    color = 'red_progress'
                                } else {
                                    color = 'green_progress'
                                }
                                return <ProgressBar
                                            key={key}
                                            text={key}
                                            percentage={value}
                                            color={color}
                                        />
                            })
                        }
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <div className="bg-white p-4 border border-border_color rounded-md">
                        <h3 className="text-text_color font-semibold mb-4">Question Analysis</h3>
                        <p className="text-dark_gray mb-4 text-sm">You scored <span className="font-semibold">{correctAnswers}</span> question correct out of 15. However it still needs some improvements</p>
                        <div style={{ width: 200, margin: "0 auto"}}>
                            <svg width="200" height="200" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="45" fill="#f0f0f0" />
                                <circle cx="50" cy="50" r="45" fill="none" stroke="#2563eb" strokeWidth="10"
                                    strokeDasharray="282.74"
                                    strokeDashoffset={`${282.74 - (282.74 * correctAnswers / 15)}`}
                                    strokeLinecap="round"/>
                                <text x="50" y="55" textAnchor="middle" dominantBaseline="middle" fontSize="20" fontWeight="bold">{correctAnswers}/15</text>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
};

export default Home;