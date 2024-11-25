"use client"
import React, { useEffect, useState } from 'react'
import DockerFilegen from '@/utils/DockerFilegen'
const page = () => {
  const [alluserdata,setalluserdata] = useState([]);
  const[token,setToken]=useState("");
  const[repo,setAllRepo]=useState([])
  const [islogin,setislogin] =useState(false)
  const[loading,setLoading] = useState(false)
  const fetchuserdata = async()=>{
    setLoading(true);
   const data = await fetch("/api/verifyuser");
   const result = await data.json();
   setLoading(false)
   console.log("result is ",result)
   if(result.success){
    setalluserdata(result.data)
    setAllRepo(result.repo)
    setToken(result.token)
    setislogin(true);
   }
  }
  console.log(alluserdata,repo,token)
  useEffect(()=>{
fetchuserdata();
  },[])
  return (
    <div>
      <DockerFilegen userdata={alluserdata} repo={repo} token={token} islogin={islogin} loading={loading}/>
      <footer className="container mx-auto px-4 py-12 mt-24 border-t border-gray-200 dark:border-gray-700">
        <div className="grid md:grid-cols-4 gap-8">
         
          
        </div>
        <div className="mt-12 text-center text-gray-600 dark:text-gray-400">
  <p>&copy; 2024 DockerGen by DevSomeware. All rights reserved. Made with ❤️ by DevSomeware Team.</p>
</div>

      </footer>
    </div>
  )
}

export default page
