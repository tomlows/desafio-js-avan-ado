import { baseURL, activitiesQuantity } from '../variables.js'

async function getActivities(userName){
    const response = await fetch(`${baseURL}/${userName}/events?per_page=${activitiesQuantity}`)
    return await response.json()
}

export { getActivities }