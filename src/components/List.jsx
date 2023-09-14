import { useEffect, useState } from "react"
import { useFetch } from "../hooks/useFetch"


const List = () => {
    const [postData, setPostData] = useState([])
    const { data, loading, error } = useFetch('http://localhost:3001/posts')
    useEffect(() => {
        if (data) {
            setPostData(data)
            console.log(postData);
        }
    }, [data])

    return (
        <div>
            <h1>post</h1>
            {/*post*/}
            {/* {loading && <div className="mt-3">Loading...</div>}
            {error && <div className="mt-3">Errror: {error}</div>} */}

            {postData.map((post) => (
                <div key={post.id} className="card">
                    <h2>{post.description}</h2>
                    <img src={`http://localhost:3001/${post.url}`} alt=""  className="card img"/>
                </div>
            ))}
           
        </div >

    )
}
export default List