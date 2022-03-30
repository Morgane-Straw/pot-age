import ReactCalendar from 'react-calendar/dist/entry.nostyle'

// helpers
const dateAlreadyClicked = (dates, date) => dates.some(d => dayjs(date).isSame(dayjs(d), 'day'))
const datesExcept = (dates, date) => dates.filter(d => !dayjs(date).isSame(dayjs(d), 'day'))

const Calendar = ({ classes }) => {
  const [dates, setDates] = useState([])

  const onClickDay = date => {
    // if day is already clicked, remove it from state
    if (dateAlreadyClicked(dates, date)) setDates(datesExcept(dates, date))
    else setDates([...dates, date])
  }

  const tileClassName = ({ date }) => {
    const classNames = [classes.dayTile]
    // give active days a special class
    if (dateAlreadyClicked(dates, date)) return [classes.activeDay, ...classNames]
    return classNames
  }

  return (
    <ReactCalendar
      tileClassName={tileClassName}
      onClickDay={onClickDay}
    />
  )
}
export default Calendar;