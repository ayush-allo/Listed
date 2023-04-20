import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import Styles from "@/styles/PieChart.module.css";

export default function App() {
    const canvasEl = useRef(null);
    const dta = [
        {
            title: "May - June 2021",
            products: [14, 31, 55]
        },
        {
            title: "July - Aug 2021",
            products: [45, 41, 14]
        },
        {
            title: "Sep - Oct 2021",
            products: [35, 51, 14]
        },
        {
            title: "Nov - Dec 2021",
            products: [25, 61, 14]
        },
    ]
    const [chart, setChart] = useState(dta[0]);
    const handleChange = (e) => {
        setChart(dta[e.target.value]);
    }
    useEffect(() => {
        const ctx = canvasEl.current.getContext("2d");
        const labels = [
            "Super Hoodies",
            "Custom Short Pants",
            "Basic Tees",
        ];
        const data = {
            labels: labels,
            datasets: [
                {
                    label: "Activities",
                    data: chart.products,
                    backgroundColor: ['#EE8484', '#F6DC7D', '#98D89E',],
                    hoverOffset: 4,
                },
            ]
        };
        const config = {
            type: "pie",
            data: data,
            options: {
                plugins: {
                    legend: {
                        display: false
                    },
                },
            },
        };
        const myLineChart = new Chart(ctx, config);

        return function cleanup() {
            myLineChart.destroy();
        };
    }, [chart]);


    return (
        <div className={Styles.container}>
            <div className={Styles.selectBox}>
                <div className={Styles.Title}>Top products</div>
                <select className={Styles.select} onChange={handleChange}>
                    {dta.map((item, index) => {
                        return (
                            <option value={index} key={index} >{item.title}</option>
                        )
                    }
                    )}
                </select>
            </div>
            <div className={Styles.content}>
                <div className={Styles.chart}>
                    <canvas id="myChart" ref={canvasEl} />
                </div>
                <div className={Styles.legend}>
                    <div className={Styles.legend_item}>
                        <div className={Styles.legend_color}></div>
                        <div className={Styles.textCont}>
                            <div className={Styles.legend_text}>Basic Tees</div>
                            <div className={Styles.legend_percent}>{chart.products[2]}%</div>
                        </div>
                    </div>
                    <div className={Styles.legend_item}>
                        <div className={Styles.legend_color}></div>
                        <div className={Styles.textCont}>
                            <div className={Styles.legend_text}>Custom Short Pants</div>
                            <div className={Styles.legend_percent}>{chart.products[1]}%</div>
                        </div>
                    </div>
                    <div className={Styles.legend_item}>
                        <div className={Styles.legend_color}></div>
                        <div className={Styles.textCont}>
                            <div className={Styles.legend_text}>Super Hoodies</div>
                            <div className={Styles.legend_percent}>{chart.products[0]}%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
