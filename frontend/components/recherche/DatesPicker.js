import { useState, useEffect, useRef } from "react"
import Calendar from 'react-calendar';

export default function DatesPicker(props) {
    const [dates, setDates] = useState(props.value ? props.value : [new Date()]);
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
                return!(value.getDate() == e.getDate() && (value.getMonth() == e.getMonth() && value.getFullYear() == e.getFullYear()));
            }
        );
        // alert(temp);
        if (temp.length < dates.length) {
            setDates(temp)
        }
        else {
            setDates(dates.concat([new Date(e)]));
        }

    }
    useEffect(()=>document?document.querySelector('button\\:has(abbr[aria-label="30 mars 2020"])').classList.add("active-tile"):"",[show,dates])
    useEffect(() => props.setValue(dates), [dates]);
    const tileClassName = ({ date }) => {
        // const classNames = [classes.dayTile]
        // give active days a special class
        if (dateAlreadyClicked(dates, date)) return "react-calendar__tile react-calendar__tile--active "
        return "react-calendar__tile react-calendar__month-view__days__day"
    }
    return <div className="d-flex flex-column">
        <div onClick={() => setShow(!show)}>{dates.length ? dates.map(e => e.toLocaleDateString()) : ""}</div>
        {/* <div className={showHideClassName} onClick={() => setShow(!show)}> */}
        {show ? <div
        // onClick={() => setShow(!show)}
        >
            <Calendar
                tileClassName={tileClassName}
                onClickDay={(e) => onChange(e)}
                defaultValue={dates}
            ></Calendar>

        </div> : <></>}
    </div>
    // class="react-calendar__tile react-calendar__month-view__days__day"
    // className="react-calendar__tile react-calendar__tile--active react-calendar__tile--range react-calendar__tile--rangeStart react-calendar__tile--rangeEnd react-calendar__tile--rangeBothEnds react-calendar__month-view__days__day"
}