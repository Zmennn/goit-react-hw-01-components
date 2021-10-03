import style from './friend.module.css'

export default function FriendList({ friends }) {
  return <ul className={style.friendList}>
        {friends.map((el) =>
          <li className={style.item} key={el.id}>
            {el.isOnline ? <span  className={style.isOnline }></span> : <span className={style.status}></span>}
            <img className={style.avatar} src={el.avatar} alt="" width="48" />
            <p className={style.name}>{el.name}</p>
          </li>
       )}      
</ul>
}