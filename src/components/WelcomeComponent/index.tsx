'use client'

import { UserData } from "@/types/User"
import { useEffect, useState } from "react"
import Card from "../Card"
import styles from './Welcome.module.scss'


const WelcomeComponent = () => {
    const [user , setUser] = useState<UserData | null>(null)

    useEffect(()=>{
        const storedObject = localStorage.getItem('userObject')
        if(storedObject){
            const userObject = JSON.parse(storedObject)
            setUser(userObject.results[0])
        }
    },[])

    if(!user){
        return null
    }

  return (
    <Card title="خوش آمدید" description="ورود شما موفقیت آمیز بود">
        <div className={styles.message}>
        {user.name?.title} {user.name?.first} {user.name?.last} شما درحال استفاده از اپلیکیشن هستید
        </div>
    </Card>
  )
}

export default WelcomeComponent