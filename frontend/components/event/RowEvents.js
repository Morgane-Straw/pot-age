import { useState, useEffect } from "react"
export default function RowEvents(props){
    const[row,setRow]=useState([]);
    useEffect(() => {
        let temp = [<>
          <div className="card d-flex flex-column justify-content-center align-items-center text-primary fs-4 text-center p-5 cursor-pointer"
            onClick={() => router.push('/proposer-evenement', undefined, { shallow: true })}>
    
            <i className="fas fa-search  fs-giant-icon mb-3"></i>
            <span>Rechercher un évènement</span>
          </div>
          {
            props.events.slice(0, 2).map(event => <CarteEvenement
              event={event}
            />)
          }
          {
            props.events.length > 2 ?
              <div className="d-flex  justify-content-center align-items-center ms-3"
                onClick={() => setI1(1)}>
                <i className="fas fa-angle-right text-gray fs-giant-icon " />
              </div> : ""
          }</>];
        for (let i = 1; i < (props.events.lenght + 1) / 3; i++) {
          temp = temp.concat([<>
    
            <div className="d-flex  justify-content-center align-items-center ms-3"
              onClick={() => setI1(i1 - 1)}>
    
              <i className="fas fa-angle-left text-gray fs-giant-icon " />
            </div> : ""
            {
              props.events.slice(i + 1, 3 + i).map(event => <CarteEvenement
                event={event}
              />)
            }
            {
              (props.events.length + 1) - i * 3 > 0 ?
                <div className="d-flex  justify-content-center align-items-center ms-3"
                  onClick={() => setI1(i + 1)}>
    
                  <i className="fas fa-angle-right text-gray fs-giant-icon " />
                </div> : ""
            }</>
          ]);
        }
        if (((props.events.length + 1) % 3) > 0) {
          temp = temp.concat([<>
    
            <div className="d-flex  justify-content-center align-items-center ms-3"
              onClick={() => setI1(Math.floor((props.events.length + 1) / 3) - 1)}>
              {Math.floor((props.events.length + 1) / 3)}
              <i className="fas fa-angle-left text-gray fs-giant-icon " />
            </div> : ""
            {
              props.events.slice(1 + Math.floor((props.events.length + 1) / 3)).map(event => <CarteEvenement
                event={event}
              />)
            }
          </>]);
        }
        setRow(temp);
      }, []);
    return<></>
}