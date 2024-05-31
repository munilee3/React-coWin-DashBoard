import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'
import './index.css'

const apiStatusconstents = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class CowinDashboard extends Component {
  state = {
    coWinData: [],
    apiStatus: apiStatusconstents.initial,
  }

  componentDidMount() {
    this.getCoWinData()
  }

  getCoWinData = async () => {
    this.setState({apiStatus: apiStatusconstents.inProgress})
    const apiUrl = 'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(apiUrl)
    if (response.ok) {
      const fetchedData = await response.json()
      console.log(fetchedData)
      this.setState({
        apiStatus: apiStatusconstents.success,
        coWinData: fetchedData,
      })
    } else {
      this.setState({apiStatus: apiStatusconstents.failure})
    }
  }

  renderLoaderView = () => (
    <div className="loader" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" width={80} height={80} />
    </div>
  )

  renderFailureView = () => (
    <div className="failure-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure-img"
      />
      <h1 className="failure-text">Something Went Wrong</h1>
    </div>
  )

  renderCoWinData = () => {
    const {coWinData} = this.state
    return (
      <>
        <VaccinationCoverage coWinDetails={coWinData} />
        <VaccinationByGender coWinDetails={coWinData} />
        <VaccinationByAge coWinDetails={coWinData} />
      </>
    )
  }

  renderCowinDashboardView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusconstents.success:
        return this.renderCoWinData()
      case apiStatusconstents.failure:
        return this.renderFailureView()
      case apiStatusconstents.inProgress:
        return this.renderLoaderView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="app-container">
        <div className="cowin-dashboard-container">
          <div className="website-logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
              alt="website logo"
              className="app-logo"
            />
            <h1 className="app-name">Co-WIN</h1>
          </div>
          <h1 className="description">CoWIN Vaccination in India</h1>
          {this.renderCowinDashboardView()}
        </div>
      </div>
    )
  }
}

export default CowinDashboard
