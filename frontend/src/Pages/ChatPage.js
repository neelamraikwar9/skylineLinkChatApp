import React from 'react'

const ChatPage = () => {

    const fetchChats = async () => {
        const data = await axios.get('/api/chat'); 

        console.log(data, "data"); 
    }; 

    useEffect(() => {        // It is a hook in react which runs when component is rendered for the first time.
        fetchChats(); 

    }, [])
  return (
    <div>ChatPage</div>
  )
}

export default ChatPage