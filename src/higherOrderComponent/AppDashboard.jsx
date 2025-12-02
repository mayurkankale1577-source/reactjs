import Dashboard from "./Dashboard";
import WithAuth from "./WithAuth";

function AppDashboard() {

const ProtectdDashboard=WithAuth(Dashboard);

    return (
        <div>
            <ProtectdDashboard />
        </div>
    )
}
export default AppDashboard