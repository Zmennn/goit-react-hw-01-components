import FriendListItem from './friend-list-Item'

export default function FriendList({ friends }) {
    return <ul class="friend-list">
        {friends.map((el) =>
            <FriendListItem
                id={el.id}
            avatar={el.avatar}
            name={el.name}
            isOnline={el.isOnline}
       />
       )}      
</ul>
}