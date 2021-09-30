

export default function FriendListItem({ id, avatar, name, isOnline }) {
   return(<>
    
        {isOnline?<span className="status isOnline"></span>:<span className="status"></span>} 
        <img className="avatar" src={avatar} alt="" width="48" />
        <p className="name">{name}</p></>
    )
    
}