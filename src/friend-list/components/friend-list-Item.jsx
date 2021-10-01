import style from './friend.module.css'

export default function FriendListItem({ avatar, name, isOnline }) {
   return(<>
    
       {isOnline ? <span  className={style.isOnline }></span> : <span className={style.status}></span>}
       <img className={style.avatar} src={avatar} alt="" width="48" />
       <p className={style.name}>{name}</p></>
    )
    
}