import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import Styles from "@/styles/LineGraph.module.css";

export default function App() {
    const canvasEl = useRef(null);
    const dta = [
        {
            title: "May - June 2021",
            guest: [200, 390, 200, 300, 220, 450],
            user: [100, 410, 150, 440, 180, 250]
        },
        {
            title: "June - July 2021",
            guest: [400, 190, 400, 200, 290, 250],
            user: [400, 120, 260, 260, 110, 450]
        },
        {
            title: "July - Aug 2021",
            guest: [300, 290, 300, 400, 190, 350],
            user: [200, 210, 360, 160, 310, 150]
        },
        {
            title: "Aug - Sept 2021",
            guest: [400, 120, 260, 260, 110, 450],
            user: [200, 390, 200, 300, 220, 450]
        },
    ]
    const [graph, setgraph] = useState(dta[0]);
    const handleChange = (e) => {
        setgraph(dta[e.target.value]);
    }
    useEffect(() => {
        const ctx = canvasEl.current.getContext("2d");
        const labels = [
            "",
            "Week 1",
            "Week 2",
            "Week 3",
            "Week 4",
            ""
        ];
        const data = {
            labels: labels,
            datasets: [
                {
                    label: "Guest",
                    data: graph.guest,
                    borderWidth: 2,
                    borderColor: '#E9A0A0',
                    lineTension: 0.4,
                    pointBackgroundColor: '#E9A0A0',
                    pointRadius: 0,
                },
                {
                    label: "User",
                    data: graph.user,
                    borderWidth: 2,
                    borderColor: '#9BDD7C',
                    lineTension: 0.3,
                    pointBackgroundColor: '#9BDD7C',
                    pointRadius: 0,
                },
                
            ]
        };
        const config = {
            type: "line",
            data: data,
            responsive: true,
            options: {
                plugins: {
                    legend: {
                        display: false
                    },
                },
                scales: {
                    x: {
                        display: true,
                        grid: {
                            display: false,
                            drawTicks: false,
                        },
                        ticks: {
                            padding: 5,
                            font: {
                                sizes: 14,
                                family: 'Open Sans',
                                style: 'normal',
                                weight: 400,
                            },
                        },
                    },
                    y: {
                        grid: {
                            color: '#EAEAEA',
                            drawTicks: false,
                        },
                        min: 0,
                        ticks: {
                            stepSize: 100,
                            padding: 15,
                            font: {
                                sizes: 14,
                                family: 'Lato',
                                style: 'normal',
                                weight: 400,
                            },
                        },
                        border: {
                            display: false,
                        }
                    }
                }
            },
        };
        const myLineChart = new Chart(ctx, config);

        return function cleanup() {
            myLineChart.destroy();
        };
    }, [graph]);


    return (
        <div className={Styles.container}>
            <header className={Styles.header}>
            <div className={Styles.selectBox}>
                <div className={Styles.Title}>Activities</div>
                <select className={Styles.select} onChange={handleChange}>
                    {dta.map((item, index) => {
                        return (
                            <option value={index} key={index} >{item.title}</option>
                        )
                    }
                    )}
                </select>
            </div>
            <div className={Styles.legend}>
                <div className={Styles.legend_item}>
                    <div className={Styles.legend_color}></div>
                    <div className={Styles.legend_text}>Guest</div>
                </div>
                <div className={Styles.legend_item}>
                    <div className={Styles.legend_color}></div>
                    <div className={Styles.legend_text}>User</div>
                </div>
            </div>
            </header>
            <canvas id="myChart" ref={canvasEl} height="82" />
        </div>
    );
}
