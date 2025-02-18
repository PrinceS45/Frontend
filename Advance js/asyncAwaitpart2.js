function fetchPostData() {
    return new Promise((resolve) =>  {
        setTimeout(() => {
             resolve("blog Data Fetch")  ;
        }, 2000);
    })
}


function fetchCommentData () {
    return new Promise((resolve) =>  {
        setTimeout(() => {
             resolve(" Comment data fetched")  ;
        }, 3000);
    })
}

async function getblogData() {
    try{
        console.log("Fetching blog data") ; 
        // const blogData = await fetchPostData() ; 
        
        // const commentData = await fetchCommentData() ; 
        // or
        const [blogData , commentData] = await Promise.all([fetchPostData() , fetchCommentData()]) ; 
        console.log(blogData) ; 
        console.log(commentData) ; 
            console.log('fetch completed')  ; 

    } catch(error) {
        console.error("Error fetching blog data " , error ) ; 
    }
}
 getblogData() ; 