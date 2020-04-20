import React from 'react';
import styles from './Users.module.css'
import * as axios from 'axios';
import userPhoto from '../../assets/images/User.png';

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];

        for (let i=1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return <div>

            <div className={styles.cursPointer}>
                {pages.map( p => {
                   return <span className={this.props.currentPage === p && styles.selectedPage}
                   onClick={ (event) => { this.onPageChanged(p); }}>{p}</span>
                })}
            </div>
            {
                this.props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {user.followed
                            ? <button onClick={() => {
                                this.props.btnUnfollow(user.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.btnFollow(user.id)
                            }}>Follow</button>}
                    </div>
                </span>

                    <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{'user.location.country'}</div>
                        <div>{'user.location.city'}</div>
                    </span>
                </span>

                </div>)
            }
        </div>
    }

}

export default Users;