import axios from "axios";

const getGames = async () =>{
    const response = await axios.get(`http://localhost:8085/cricket/get-games`)
    return response.data
}
const getTeamsAdmin = async () =>{
    let token = window.localStorage.getItem('BearerToken')
    token=token.substring(1,token.length-1);
    const response = await axios.get(`http://localhost:8085/cricket/get-teams`,{
        headers: {
            'Authorization': `Bearer ${token}`
            }
           })
    return response.data
}
const addTeam = async (newTeam) =>{
    let token = window.localStorage.getItem('BearerToken')
    token=token.substring(1,token.length-1);
    const response = await axios.post(`http://localhost:8085/cricket/add-team`,newTeam,{
        headers: {
            'Authorization': `Bearer ${token}`
            }
           })
    return response.data
}
const addGame = async (newGame) =>{
    let token = window.localStorage.getItem('BearerToken')
    token=token.substring(1,token.length-1);
    const response = await axios.post(`http://localhost:8085/cricket/add-game`,newGame,{
        headers: {
            'Authorization': `Bearer ${token}`
            }
           })
    return response.data
}
const updateGame = async (updateGame) =>{
    let token = window.localStorage.getItem('BearerToken')
    token=token.substring(1,token.length-1);
    const response = await axios.post(`http://localhost:8085/cricket/update`,updateGame,{
        headers: {
            'Authorization': `Bearer ${token}`
            }
           })
    return response.data
}

const exportObject = {getGames,getTeamsAdmin,addTeam,addGame,updateGame}
export default exportObject;