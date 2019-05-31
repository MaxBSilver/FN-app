export const isLoading = (bool) => ({
    type: 'IS_LOADING',
    isLoading: bool
 })
     
 export const hasErrored = (message) => ({
    type: 'HAS_ERRORED',
    message
 })
 
 export const setNews = (news) => ({
    type: 'SET_NEWS',
    news
 })