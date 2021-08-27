import logo_mahoni from '../assets/logo-mahoni.png';
import logo_admin from '../assets/logo-admin.png'

const d = new Date()
const date = d.toDateString()

console.log(date)

const Sidebar = (props) => {
    return (
        <div className='sidebar'>

            <div className='sidebar-mahoni-logo'>
                <img src={logo_mahoni} width="80" alt="" />
            </div>

            <div className='sidebar-menu'>
                <a href=""><i class="fas fa-taxi"></i>Transportasi Umum</a>
                <a href=""><i class="fas fa-wind"></i>Sensor Udara</a>
                <a href=""><i class="fas fa-store-alt"></i>Badan Usaha</a>
            </div>

            <div className='sidebar-footer'>
                <img src={logo_admin} alt="" />
                <p>Admin</p>
                <p class="sidebar-footer-tanggal">{date}</p>
            </div>
        </div>
    )
}

Sidebar.defaultProps = {

}

export default Sidebar
