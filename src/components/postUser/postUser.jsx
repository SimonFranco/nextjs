import styles from "./postUser.module.css"


//getData is edited for every specific request specifically fetch request

const getData = async (userId)=>{
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {next:{revalidate:3600}})
  if(!res.ok){
    throw new Error("something went wrong")
  }
  return res.json()
};

const PostUser = async ({userId}) => {

  const user = await getData(userId)

  return (
    <div className={styles.container}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
    </div>
    )
}

export default PostUser 