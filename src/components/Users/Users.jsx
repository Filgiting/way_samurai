import React from 'react';
import styles from './Users.module.css'

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://www.film.ru/sites/default/files/people/1466544-1136418.jpg',
                    followed: true,
                    fullName: 'Kirill',
                    status: 'Im BOSS',
                    location: {city: 'Abai', country: 'Kazahstan'}
                },
                {
                    id: 2,
                    photoUrl: 'https://www.film.ru/sites/default/files/people/1466544-1136418.jpg',
                    followed: false,
                    fullName: 'Petrovich',
                    status: 'LOL',
                    location: {city: 'Kiev', country: 'Ukrain'}
                },
                {
                    id: 3,
                    photoUrl: 'https://www.film.ru/sites/default/files/people/1466544-1136418.jpg',
                    followed: true,
                    fullName: 'Fil',
                    status: 'Im BOSS',
                    location: {city: 'Moscow', country: 'Russ'}
                },
                {
                    id: 4,
                    photoUrl: 'https://www.film.ru/sites/default/files/people/1466544-1136418.jpg',
                    followed: false,
                    fullName: 'Beibut',
                    status: 'Prise',
                    location: {city: 'LOL', country: 'BIBIK'}
                }
            ]
        )
    }

    return <div>
        {
            props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <img src={user.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {user.followed
                            ? <button onClick={() => {
                                props.btnUnfollow(user.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.btnFollow(user.id)
                            }}>Follow</button>}
                    </div>
                </span>

                <span>
                    <span>
                        <div>{user.fullName}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{user.location.country}</div>
                        <div>{user.location.city}</div>
                    </span>
                </span>

            </div>)

        }
    </div>


}

export default Users;