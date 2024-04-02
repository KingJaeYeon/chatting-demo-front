import {Navbar} from "./Navbar.tsx";
import {Search} from "./Search.tsx";

export function Sidebar() {
    return (
        <div className={'sidebar'}>
            <Navbar/>
            <Search/>
        </div>
    )
}
