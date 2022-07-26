import React from 'react';

import UserItem from './UserItem';
import Card from '../../shared/components/UIelements/Card';
import './UsersList.css';

const UsersList = props => {
    if ( props.items.length === 0 ) {
        return (
          <div className="center">
              <Card>
            <h2>no users found</h2>
            </Card>
            </div>
        );
      }
      return (
        <>
        <h2 className='wrapp'>Most Popular Users:</h2>
        <ul className="users-list">
          {props.items.map(user => (
            <UserItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.places}
            />
            ))}
        </ul>
            </>
      );
    };


export default UsersList