import AppNav from "../nav"
import AppSidebar from "../sidebar"
import TeamPage from "../teamlist"
export default function Teams(){
    return(
        <div className="overflow-hidden">
            <AppSidebar></AppSidebar>
            <AppNav></AppNav>
            <TeamPage></TeamPage>
        </div>
    )
}