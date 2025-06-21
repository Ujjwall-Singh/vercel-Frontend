// // src/components/ReviewPieChart.js

// import React, { useEffect, useState } from 'react';
// import { Pie } from 'react-chartjs-2';
// import axios from 'axios';
// import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

// // Register necessary components for the Pie chart
// Chart.register(ArcElement, Tooltip, Legend);

// const ReviewPieChart = () => {
//     const [chartData, setChartData] = useState(null);

//     useEffect(() => {
//         // Fetch the data from the backend
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('https://vercel-backend-delta-ebon.vercel.app/api/review'); 
//                 const reviews = response.data;

//                 // Calculate average rating for each category
//                 const averageRatings = {
//                     conceptExplanation: 0,
//                     subjectKnowledge: 0,
//                     contentOrganization: 0,
//                     classTiming: 0,
//                     learningEnvironment: 0,
//                     studentParticipation: 0,
//                     feedbackQuality: 0,
//                     resourceUtilization: 0,
//                     innovation: 0,
//                     accessibility: 0,
//                     supportiveness: 0,
//                     professionalism: 0,
//                 };

//                 reviews.forEach(review => {
//                     Object.keys(averageRatings).forEach(key => {
//                         averageRatings[key] += review.ratings[key] || 0;
//                     });
//                 });

//                 Object.keys(averageRatings).forEach(key => {
//                     averageRatings[key] /= reviews.length;
//                 });

//                 // Set up the data for Chart.js
//                 setChartData({
//                     labels: Object.keys(averageRatings).map(key => key.replace(/([A-Z])/g, ' $1').trim()),
//                     datasets: [
//                         {
//                             label: 'Average Ratings',
//                             data: Object.values(averageRatings),
//                             backgroundColor: [
//                                 '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
//                                 '#FF9F40', '#FFCD56', '#4D5360', '#C9CBCF', '#36A2EB',
//                                 '#FF6384', '#36A2EB'
//                             ],
//                             hoverBackgroundColor: [
//                                 '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
//                                 '#FF9F40', '#FFCD56', '#4D5360', '#C9CBCF', '#36A2EB',
//                                 '#FF6384', '#36A2EB'
//                             ]
//                         }
//                     ]
//                 });
//             } catch (error) {
//                 console.error("Error fetching review data", error);
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//         <div className="w-full lg:w-4/5 mx-auto p-4 md:p-8">
//             <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold mb-6">Teacher Review Analysis</h2>
//             {chartData ? (
//                 <Pie
//                     data={chartData}
//                     options={{
//                         responsive: true,
//                         plugins: {
//                             legend: {
//                                 display: true,
//                                 position: 'top'
//                             }
//                         }
//                     }}
//                     className="max-h-96"
//                 />
//             ) : (
//                 <p className="text-center text-purple-500">Loading chart data...</p>
//             )}
//         </div>
//     );
// };

// export default ReviewPieChart;
// src/components/ReviewPieChart.js

import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

// Register necessary components for the Pie chart
Chart.register(ArcElement, Tooltip, Legend);

const ReviewPieChart = () => {
    const [chartData, setChartData] = useState(null);
    const [facultyInfo, setFacultyInfo] = useState({ name: '', department: '' });

    useEffect(() => {
        // Fetch the data from the backend
        const fetchData = async () => {
            try {
                const response = await axios.get('https://vercel-backend-delta-ebon.vercel.app/api/review'); 
                const reviews = response.data;

                if (reviews.length === 0) return;

                // Extract faculty name and department from the first review
                setFacultyInfo({
                    name: reviews[0].facultyName || 'N/A',
                    department: reviews[0].department || 'N/A',
                });

                // Calculate average rating for each category
                const averageRatings = {
                    conceptExplanation: 0,
                    subjectKnowledge: 0,
                    contentOrganization: 0,
                    classTiming: 0,
                    learningEnvironment: 0,
                    studentParticipation: 0,
                    feedbackQuality: 0,
                    resourceUtilization: 0,
                    innovation: 0,
                    accessibility: 0,
                    supportiveness: 0,
                    professionalism: 0,
                };

                reviews.forEach(review => {
                    Object.keys(averageRatings).forEach(key => {
                        averageRatings[key] += review.ratings[key] || 0;
                    });
                });

                Object.keys(averageRatings).forEach(key => {
                    averageRatings[key] /= reviews.length;
                });

                // Set up the data for Chart.js
                setChartData({
                    labels: Object.keys(averageRatings).map(key => key.replace(/([A-Z])/g, ' $1').trim()),
                    datasets: [
                        {
                            label: 'Average Ratings',
                            data: Object.values(averageRatings),
                            backgroundColor: [
                                '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
                                '#FF9F40', '#FFCD56', '#4D5360', '#C9CBCF', '#36A2EB',
                                '#FF6384', '#36A2EB'
                            ],
                            hoverBackgroundColor: [
                                '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
                                '#FF9F40', '#FFCD56', '#4D5360', '#C9CBCF', '#36A2EB',
                                '#FF6384', '#36A2EB'
                            ]
                        }
                    ]
                });
            } catch (error) {
                console.error("Error fetching review data", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="w-full lg:w-4/5 mx-auto p-4 md:p-8">
            <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold mb-2">Teacher Review Analysis</h2>
            <p className="text-center text-lg font-medium mb-4">Faculty: {facultyInfo.name} | Department: {facultyInfo.department}</p>
            {chartData ? (
                <>
                    <Pie
                        data={chartData}
                        options={{
                            responsive: true,
                            plugins: {
                                legend: {
                                    display: true,
                                    position: 'top'
                                }
                            }
                        }}
                        className="max-h-96"
                    />
                    <div className="mt-6 overflow-x-auto">
                        <table className="w-full border-collapse border border-purple-300">
                            <thead>
                                <tr className="bg-purple-200">
                                    <th className="border border-purple-300 px-4 py-2">Rating Category</th>
                                    <th className="border border-purple-300 px-4 py-2">Average Rating</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.keys(chartData.labels).map((key, index) => (
                                    <tr key={index} className="text-center">
                                        <td className="border border-purple-300 px-4 py-2">{chartData.labels[index]}</td>
                                        <td className="border border-purple-300 px-4 py-2">{chartData.datasets[0].data[index].toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            ) : (
                <p className="text-center text-purple-500">Loading chart data...</p>
            )}
        </div>
    );
};

export default ReviewPieChart;
