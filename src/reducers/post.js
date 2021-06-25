const reducer= (posts=[],action)=>{
      switch (action.type) {
          case 'UPDATE_POST':
            return posts.map(post=>post._id===action.payload._id?action.payload:post);
          case 'FETCH_ALL':
            return action.payload;
          case 'CREATE':
            return [...posts,action.payload];   
          case 'DELETE_POST':
            return posts.filter(post=>post._id!==action._id);   
          case 'LIKE_POST':
            return posts.map(post=>action.payload._id===post._id?action.payload:post);
          default:
            return posts;
    } 
}

export default reducer;