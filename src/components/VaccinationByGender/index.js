import {PieChart, Pie, Cell, Legend} from 'recharts'
import './index.css'

const VaccinationByGender = props => {
  const {coWinDetails} = props
  return (
    <div className="vaccination-by-gender-container">
      <h1 className="vaccination-coverage-heading">Vaccination By Gender</h1>

      <PieChart width={1000} height={300}>
        <Pie
          cx="50%"
          cy="50%"
          data={coWinDetails.vaccination_by_gender}
          endAngle={180}
          startAngle={0}
          innerRadius="40%"
          outerRadius="80%"
          dataKey="count"
        >
          <Cell name="Male" fill="#f54394" />
          <Cell name="Female" fill="#5a8dee" />
          <Cell name="Others" fill="#2cc6c6" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          horizontalAlign="middle"
        />
      </PieChart>
    </div>
  )
}

export default VaccinationByGender
