import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'
import './index.css'

const VaccinationCoverage = props => {
  const {coWinDetails} = props
  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }
  return (
    <div className="vaccination-coverage-container">
      <h1 className="vaccination-coverage-heading">Vaccination Coverage</h1>
      <BarChart
        width={1000}
        height={300}
        data={coWinDetails.last_7_days_vaccination}
      >
        <XAxis
          dataKey="vaccine_date"
          tick={{
            stroke: '#6c757d',
            strokeWidth: 1,
          }}
        />
        <YAxis
          tickFormatter={DataFormatter}
          tick={{
            stroke: '#6c757d',
            strokeWidth: 0,
          }}
        />
        <Legend
          wrapperStyle={{
            padding: 20,
          }}
        />
        <Bar dataKey="dose_1" name="Dose 1" fill="#5a8dee" barSize="5%" />
        <Bar dataKey="dose_2" name="Dose 2" fill="#f54394" barSize="5%" />
      </BarChart>
    </div>
  )
}

export default VaccinationCoverage
