import axios from 'axios'


const signin = async(user) =>{
  const result =  await axios.post('http://localhost:4000/user/auth/signin',user)
  return result
}

const signup = async(user)=>{
    const result = await axios.post('http://localhost:4000/user/auth/signup',user)
    return result
}

const hasSignned = async () =>{
    const result = await axios.get("http://localhost:4000/user/auth/hassignned")
    return result
}
const signout = async ()=>{
    const res = await axios.get('http://localhost:4000/user/auth/signout')
    return res
}

export {
    signin,
    signup,
    hasSignned,
    signout
}