import * as api from '../api';

export const getPosts=()=>async (dispatch)=>{
    try{
         const {data}=await api.fetchPosts();
         dispatch({
            type: 'FETCH_ALL',
            payload: data
         });
    }
    catch(error){
         console.log(error.message);
    }
} 

export const createPost=(post)=>async (dispatch)=>{
     try {
          const {data}=await api.createPost(post);
          dispatch({type: 'CREATE',payload: data});

     } catch (error) {
          console.log(error.message);
     }
}

export const updatePost=(_id,updatedPost)=>async(dispatch)=>{
    try {
         const {data}=await api.updatePost(_id,updatedPost);
         dispatch({type: 'UPDATE_POST',payload: data});
         console.log("Update action called")
    } catch (error) {
     console.log(error.message);
    }
}

export const deletePost=(_id)=>async(dispatch)=>{
     try {
          await api.deletePost(_id);
          dispatch({type: 'DELETE_POST',_id:_id});
     } catch (error) {
          console.log(error.message);
     }
}

export const likePost=(_id)=>async(dispatch)=>{
     try {
          const {data}=await api.likePost(_id);
          dispatch({type: 'LIKE_POST',payload:data});
          
     } catch (error) {
          console.log(error.message);
     }
}