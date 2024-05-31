import {PieChart, Pie, Legend, Cell} from 'recharts'
import './index.css'

const VaccinationByAge = props => {
  const {coWinDetails} = props
  return (
    <div className="vaccination-by-age-container">
      <h1 className="vaccination-coverage-heading">Vaccination By Age</h1>

      <PieChart width={1000} height={300}>
        <Pie
          cx="50%"
          cy="50%"
          startAngle={0}
          endAngle={360}
          outerRadius="100%"
          data={coWinDetails.vaccination_by_age}
          dataKey="count"
        >
          <Cell name="18-44" fill="#2d87bb" />
          <Cell name="44-60" fill="#a3df9f" />
          <Cell name="Above 60" fill="#64c2a6" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          horizontalAlign="middle"
          wrapperStyle={{
            padding: 20,
          }}
        />
      </PieChart>
    </div>
  )
}

export default VaccinationByAge
