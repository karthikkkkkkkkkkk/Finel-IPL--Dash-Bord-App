// src/components/PieChart/index.js

import React from 'react'
import {
  PieChart as PieChartComponent,
  Pie,
  Cell,
  Legend,
  Tooltip,
} from 'recharts'

import './index.css'

const COLORS = ['#00C49F', '#FF8042', '#FFBB28']

const PieChart = ({data}) => (
  <div className="pie-chart-bg-container mt-2 d-flex justify-content-center">
    <PieChartComponent width={400} height={350}>
      <Pie data={data} innerRadius={0} outerRadius={100} dataKey="value" label>
        {data.map((entry, index) => (
          <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend verticalAlign="bottom" height={36} />
    </PieChartComponent>
  </div>
)

export default PieChart