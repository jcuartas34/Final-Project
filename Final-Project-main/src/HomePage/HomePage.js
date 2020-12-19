import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { HorizontalBar } from "react-chartjs-2";
import { Polar } from "react-chartjs-2";
import axios from "axios";

function HomePage() {

  const [chartData, setChart] = useState({});
  useEffect (() => {
    axios.get("http://localhost:3000/budget").then(function (res){
      let data = [];
      let labels = [];
      for (let i = 0; i < res.data.myBudget.length; i++){
        data.push(res.data.myBudget[i].budget);
        labels.push(res.data.myBudget[i].title);
      }

    setChart({
    labels: labels,
    datasets: [
        {
            data: data,
            backgroundColor: [
                '#ffcd56',
                '#ff6384',
                '#36a2eb',
                '#fd6b19',
                '#49d63a',
                '#a94af7',
                '#46eaf0',
            ],
          },
        ],
       });
    });
  });

  return (
    <main id="main">
        <div className="page-area">

            <div className="text-box">
                <h1>Follow the Money</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! This app will allow you to add your spending and see where your money is going.
                    Users will be able to upload their monthly spending into different categories and our app will
                    break it down for you so that you can see how much your spending and where.
                </p>
            </div>

            <div className="text-box">
                <h1>Accounts</h1>
                <p>
                    Create your own account today to start saving money and tracking your spending.
                    Our site will help you keep track and even give you tips on how to save money.
                    Sign up today to track your progress and start budgeting.
                </p>
            </div>
    
            <div className="text-box">
                <h1>Why Budget?</h1>
                <p>
                    Studies have shown that people who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Along with that people who budget have less stress and tend to be happier. With out the fear
                    of debt you no longer are controlled by money and are free to live and be happy.
                </p>
            </div>

            <div className="text-box">
                <h1>Visuals</h1>
                <p>
                    Below you can see the main feature of our app. These visuals are what really
                    makes a difference when it come to budgeting. Studies have shown that having a
                    visual aid really helps people put into perspective how much they are actually spending.
                    This allows people to stop spending and helps them start budgeting.
                </p>
            </div>
    
            <div className="text-box">
                <h1>Doughnut Chart</h1>
                <Doughnut data={chartData} width={30} height={30} />
            </div>

            <div className="text-box">
                <h1>Bar Chart</h1>
                <HorizontalBar data={chartData} width={100} height={100} />
            </div>

            <div className="text-box">
                <h1>Polar Chart</h1>
                <Polar data={chartData} width={100} height={100} />
            </div>

        </div>

    </main>

  );
}

export default HomePage;