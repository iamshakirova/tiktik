import React from 'react'
import { useState } from "react"
import { NextPage } from "next"
import {useRouter} from 'next/router'
import { AiFillHome, AiOutlineMenu } from 'react-icons/ai'
import {ImCancelCircle} from 'react-icons/im'
// import { GoogleLogin } from 'react-google-login'
import Link from 'next/link'
import Discover from './Discover'
import Footer from './Footer'
import SuggestedAccounts from './SuggestedAccounts'
import useAuthStore from '@/store/authStore'




const Sidebar:NextPage = () => {
  const [ showSiderBar ,setShowSideBar ] = useState(true)
  const { pathname } = useRouter()
  const {fetchAllUsers, allUsers} = useAuthStore()

  const activeLink = 'flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start font-semibold text-[#f51997] rounded';
  const normalLink ='flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start font-semibold';

  const userProfile = false


  return (
    <div>
      <div onClick={() => setShowSideBar(!showSiderBar)} className='block m-2 ml-4 mt-3 text-xl xl:hidden'>
       { showSiderBar ? <AiOutlineMenu/> : <ImCancelCircle/>}
      </div>
      { showSiderBar &&
        <div className='xl:w-400 w-20 flex-col, justify-start mb-10 border-r-2 border-gray-100 xl:bprder-0 p-3'>
          <div className='xl:border-b-2 border-grey-200 xl:pb-4'>
            <Link href="/">
              <div className={pathname === '/' ? activeLink : normalLink}>
                <p className='text-2xl'>
                  <AiFillHome/>
                </p>
                <span className='capitalize text-xl hidden xl:block'>Home Page</span>
              </div>
            </Link>
          </div>
          {
            !userProfile && (
              <div className='px-2 pz-4 hidden xl:block'>
                {/* <p className='text-gray-400'>Log in to lice and comment on videos</p> */}
                  <div className=''>

                  </div>
              </div>
            )
          }
          <Discover/>
          <SuggestedAccounts fetchAllUsers={fetchAllUsers} allUsers={allUsers}/>
          <Footer/>
        </div>
      }
    </div>
  )
}

export default Sidebar