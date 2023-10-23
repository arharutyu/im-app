// GET request
async function get(endpoint) {
  try {  
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}${endpoint}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `${accessToken}`,
          }
        }
        )
        const data = await res.json()
        return data
  } catch (error) {
        console.error('Error while making GET request:', error)
        throw error
      }
}

export { get }