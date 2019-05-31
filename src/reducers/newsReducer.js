export const isLoading = (state = false, action) => {
    switch(action.type) {
      case 'IS_LOADING':
        return action.isLoading
      default:
        return state
    }
  }
  
  export const hasErrored = (state = '', action) => {
    switch(action.type) {
      case 'HAS_ERRORED':
        return action.message
      default:
        return state
    }
  }
  
  export const news = (state = [], action) => {
    switch(action.type) {
      case 'SET_NEWS':
          console.log('here')
        return action.news
      default:
        return state
    }
  }