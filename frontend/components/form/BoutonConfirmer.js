
import axios from "axios"
import { useRouter } from "next/router"
export default function BoutonConfirmer(props) {
    const router=useRouter();
    return <>
        {/* {process.env.NEXT_PUBLIC_FRONTEND_ADDRESS + '/api/' + props.url} */}
        <button
            className={"d-flex justify-content-center d-block rounded py-1 px-3 w-button bg-primary text-white"}
            onClick={() => {
                router.push(props.href, undefined, { shallow: true })
                axios.post(process.env.NEXT_PUBLIC_FRONTEND_ADDRESS + 'api/' + props.url, props.data)
            }}
            type="button"
        >
            <span>Confirmer</span>
        </button></>
}