import Image from "next/image"
import styles from "./singlePost.module.css"
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";



const getData = async (slug)=>{
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, {next:{revalidate:3600}})
  if(!res.ok){
    throw new Error("something went wrong")
  }
  return res.json()
};

const SinglePostPage = async  ({params}) => {
  const {slug} = params;
  const post = await getData(slug)

  return (
    <div className={styles.container}>
      <div>
        
      </div>

      <div className={styles.imgContainer}>
        <Image 
        src="https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        fill
        className= {styles.img}
        />

      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image 
          className= {styles.avatar}
          src="https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width={50}
          height={50}
          
          alt=""
          
          />
          <Suspense fallback={<div>Loading...</div>}>

            <PostUser userId = {post.userId}/>
            
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem cum possimus exercitationem, quis voluptates minus deserunt quasi minima debitis corporis nihil laboriosam ab omnis doloremque doloribus ex. Ipsum, architecto aspernatur.
        </div>
      </div>
          
    </div>
    )
}

export default SinglePostPage 