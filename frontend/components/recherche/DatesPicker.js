import { useState, useEffect, useRef } from "react"
import Calendar from 'react-calendar';

export default function DatesPicker(props) {
    const [dates, setDates] = useState(props.defaultValue ? props.defaultValue : []);
    const [show, setShow] = useState(false);
    function dateAlreadyClicked(ds, e) {
        e = new Date(e)
        let temp = ds.filter(
            (value, index, arr) => (
                !(value.getDate() == e.getDate() && (value.getMonth() == e.getFullYear() && value.getFullYear() == e.getFullYear()))));
        // alert(temp);
        return (temp.length < ds.length)
    }
    function onChange(e) {
        e = new Date(e)
        let temp = dates.filter(
            (value, index, arr) => {
                // alert([value.getDate(), e.getDate(), value.getMonth(), e.getMonth(), value.getFullYear(), e.getFullYear()]);
                return !(value.getDate() == e.getDate() && (value.getMonth() == e.getMonth() && value.getFullYear() == e.getFullYear()));
            }
        );
        // alert(temp);
        if (temp.length < dates.length) {
            setDates(temp)
            document.querySelector(`abbr[aria-label="${e.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}"]`).classList.remove("active-tile");
        }
        else {
            setDates(dates.concat([new Date(e)]));
            document.querySelector(`abbr[aria-label="${e.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}"]`).classList.add("active-tile");
        }

    }

    useEffect(() => {
        props.setValue(dates);
    }, [dates]);
    const tileClassName = ({ date }) => {
        // const classNames = [classes.dayTile]
        // give active days a special class
        if (dateAlreadyClicked(dates, date)) return "react-calendar__tile react-calendar__tile--active "
        return "react-calendar__tile react-calendar__month-view__days__day"
    }
    return <div className="d-flex flex-column ">
        <div
            className="d-block w-input-date h-input-date cursor-pointer "
            onClick={() => setShow(!show)}>
            {dates.map(e => e.toLocaleDateString(undefined, { month: 'short', day: "numeric" })).join(',').length < 15 ?
                dates.map(e => e.toLocaleDateString(undefined, { month: 'short', day: "numeric" })).join(',')
                : (dates.map(e => e.toLocaleDateString(undefined, { month: 'short', day: "numeric" })).join(', ')).slice(0, 15) + '...'}</div>
        {/* <div className={showHideClassName} onClick={() => setShow(!show)}> */}
        {show ? <div
            className="d-flex flex-column align-items-stretch bg-light-gray p-1"
        >
            <Calendar
                tileClassName={tileClassName}
                onClickDay={(e) => onChange(e)}
            ></Calendar>
            <button className="bg-primary text-white rounded-1 align-self-stretch text-center py-1 d-flex flex-row justify-content-center align-items-center my-1 mx-2"
                onClick={() => setShow(!show)}>
                Valider</button>

        </div> : <></>}
    </div>
    // class="react-calendar__tile react-calendar__month-view__days__day"
    // className="react-calendar__tile react-calendar__tile--active react-calendar__tile--range react-calendar__tile--rangeStart react-calendar__tile--rangeEnd react-calendar__tile--rangeBothEnds react-calendar__month-view__days__day"
}