export default function NumeroPage(props) {

    return <div className=" d-flex flex-row justify-content-center align-items-center fw-bold pb-num-pages ">
        {
            props.pages ? props.pages.map((i) => <>
                <span className="position-relative rounded-circle p-1 bg shadow-sm   d-flex flex-row justify-content-center align-items-center border-top border-bottom border-light-gray ">
                    {i.number == props.active ? <>
                        <span className="rounded-circle bg-primary d-block square-page-number d-flex justify-content-center align-items-center text-white "
                        >
                            {i.number}
                        </span>
                        <span className="position-absolute rounded bg-yellow text-dark-primary fs-6  py-1 px-3 top-name-page nowrap talkbubble">{i.name}</span>
                    </>
                        : <>
                            <span className="rounded-circle d-block square-page-number d-flex justify-content-center align-items-center text-gray cursor-pointer"
                            onClick={()=>props.setPageActive(i.number)}>
                                {i.number}
                            </span>
                            <span className="position-absolute rounded fs-6 text-gray p-1 top-name-page nowrap ">{i.name}</span>
                        </>}
                </span>
                {i.number == props.pages.length ? "" : <span className=""><span className="shadow-sm p-ligne d-block h-ligne border-top border-bottom border-light-gray "></span></span>}
            </>) : <></>
        }

    </div >
}