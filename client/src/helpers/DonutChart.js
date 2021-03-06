import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DonutChart = props => {
  const labels = props.poll.answers.map(obj => {
    return obj.answer;
  });

  const votes = props.poll.answers.map(obj => {
    return obj.votes;
  });

  // console.log(labels);
  const data = {
    labels: labels,
    datasets: [
      {
        data: votes,
        backgroundColor: [
          '#ff91a8',
          '#40cfb7',
          '#88deff',
          '#ffba36',
          '#FFFF00'
        ],
        hoverBackgroundColor: [
          '#ff91a8',
          '#40cfb7',
          '#88deff',
          '#ffba36',
          '#FFFF00'
        ]
      }
    ]
  };

  return (
    <div className="DonutChart">
      <h3>{props.poll.question}</h3>
      <hr />
      <Doughnut
        data={data}
        width={50}
        height={30}
        // options={{
        //   maintainAspectRatio: false
        // }}
      />
    </div>
  );
};

export default DonutChart;
