import axios from "axios";
const GET_BOOKS = "GET_BOOKS";
const GET_BOOK_ID= "GET_BOOK_ID";
const GET_BOOK_TITLE= "GET_BOOK_TITLE"
const DELETE_BOOK = "DELETE_BOOK";

export const getBooks=()=>{
    return async (dispatch)=>{
        try {
            const {data} = await axios.get("books");
            console.log("LOG DATA ACTIONS", data)
            return dispatch({
                type: GET_BOOKS,
                payload: data
            })
        } catch (error) {
            alert(`ERROR DEL CATCH ${error}` )
        }
    }
}

export const getBookById = (idBook) =>{
    return async (dispatch)=>{
        try {
            const {data} = await axios.get(`/books/${idBook}`);
            console.log("LOG DEL GETID", data)
            return dispatch({
                type: GET_BOOK_ID,
                payload: data
            })
        } catch (error) {
            alert(`Error catch getbooksbyid ${error}`)
        }
    }
}

export const getBookByTitle = (title) => {
    return async (dispatch)=>{
        try {
            const {data} = await axios.get(`/books/?title=${title}`);
            return dispatch({
                type: GET_BOOK_TITLE,
                payload: data
            })
            
        } catch (error) {
            alert(`Error catch getbooksbyname ${error}`)
            
        }
    }
}

export const deleteBook = (idBook) => {
    return async (dispatch) => {
      try {
        const response = await axios.delete(`/books/${idBook}`);
        const data = response.data;
        alert(data);
        return dispatch({
          type: DELETE_BOOK,
          payload: data,
        });
      } catch (error) {
        alert(`Error del catch delete ${error}`);
      }
    };
  };
  
  export const postBooks = (payload)=>{
    return async ()=>{
            try {
                const  dat = await axios.post("/books", payload);
                return dat;
            } catch (error) {
                console.log(error)
            }
    }
}
