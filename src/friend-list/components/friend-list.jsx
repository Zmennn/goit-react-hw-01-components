import FriendListItem from './friend-list-Item'
import style from './friend.module.css'

export default function FriendList({ friends }) {
  return <ul className={style.friendList}>
        {friends.map((el) =>
          <li className={style.item} key={el.id}>
            <FriendListItem
            avatar={el.avatar}
            name={el.name}
            isOnline={el.isOnline}
            />
          </li>
       )}      
</ul>
}