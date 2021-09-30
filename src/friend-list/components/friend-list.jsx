import FriendListItem from './friend-list-Item'

export default function FriendList({ friends }) {
    return <ul className="friend-list">
        {friends.map((el) =>
          <li className="item" key={el.id}>
            <FriendListItem
            id={el.id}
            avatar={el.avatar}
            name={el.name}
            isOnline={el.isOnline}
            />
          </li>
       )}      
</ul>
}