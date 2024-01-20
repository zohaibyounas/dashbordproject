import './user.css'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import PublishIcon from '@mui/icons-material/Publish';
import {Link} from 'react-router-dom'
export default function User() {
  return (
    <div className='user'>
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser/">
        <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
            <div className="userShowTop">
                <img src="https://images.unsplash.com/photo-1589696709339-dba99b8925c5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" 
                className="userShowImg"
                 />
                 <div className="userShowTopTitle">
                    <span className="userShowUsername">Anna Becker</span>
                    <span className="userShowUserTitle">Software Engineer</span>
                 </div>
            </div>
            <div className="userShowBottom">
                <span className="userShowTitle">Acount Details</span>
             <div className="userShowInfo">
                <PermIdentityIcon className='userShowIcon'/>
                <span className="userShowInfoTitle">annabeck99</span>
                </div>
             <div className="userShowInfo">
                <CalendarTodayIcon className='userShowIcon'/>
                <span className="userShowInfoTitle">10.12.1999</span>
                </div>
                <span className="userShowTitle">Contact Details</span>

             <div className="userShowInfo">
                <PhoneAndroidIcon className='userShowIcon'/>
                <span className="userShowInfoTitle">923345676548</span>
                </div>
             <div className="userShowInfo">
                <MailOutlineIcon className='userShowIcon'/>
                <span className="userShowInfoTitle">annabeck99@gmail.com</span>
                </div>
             <div className="userShowInfo">
                <LocationSearchingIcon className='userShowIcon'/>
                <span className="userShowInfoTitle">Kohat | KP</span>
                </div>
    
            </div>
        </div>
        <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm">
                <div className="userUpdateLeft">
                    <div className="userUpdataItem">
                        <label>Username</label>
                        <input type='text' placeholder='annabeck99' 
                        className='userUpdateInput'
                        />
                    </div>
                    <div className="userUpdataItem">
                        <label>Full Name</label>
                        <input type='text' placeholder='Anna Becker' 
                        className='userUpdateInput'
                        />
                    </div>
                    <div className="userUpdataItem">
                        <label>Email</label>
                        <input type='text' placeholder='annabeck99@gmail.com' 
                        className='userUpdateInput'
                        />
                    </div>
                    <div className="userUpdataItem">
                        <label>Phone</label>
                        <input type='text' placeholder='923345676548' 
                        className='userUpdateInput'
                        />
                    </div>
                    <div className="userUpdataItem">
                        <label>Address</label>
                        <input type='text' placeholder='Kohat | KP' 
                        className='userUpdateInput'
                        />
                    </div>
                </div>
                <div className="userUpdateRight">
                    <div className="userUpdateUpload">
                        <img className='userUpdateImg' src="https://images.unsplash.com/photo-1589696709339-dba99b8925c5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                         alt="" 
                         />
                        <label htmlFor='file'><PublishIcon className='userUpdateIcon'/></label>
                        <input type='file' id='file' style={{display : "none"}}   />
                    </div>
                    <button className="userUpdateButton">Update</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}
