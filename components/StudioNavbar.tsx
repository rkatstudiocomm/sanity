import Link from "next/link";
import {ArrowUpRightIcon} from "@heroicons/react/20/solid";

function StudioNavbar(props: any) {
    return (
        <div>
            <div className="flex bg-[#101112] p-8">
                <Link href="/" className="text-[white] flex hover:text-slate-400" >
                    <ArrowUpRightIcon className="h-6 w-6 mr-2"/> Go to Website
                </Link>
            </div>
            <>{props.renderDefault(props)}</>
        </div>
    )
}

export default StudioNavbar