'use client'

import { AuthGuardProps } from "@/types/UserGaurd"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CustomSection } from "../CustomSection";



const AuthGuard = ({children , authKey} : AuthGuardProps) => {
const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [hasAuth, setHasAuth] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem(authKey);

    if (auth) {
      setHasAuth(true);
    } else {
      router.replace('/auth'); 
    }

    setLoading(false);
  }, [router, authKey]);

  if (loading) {
    return <CustomSection>Loading...</CustomSection>; 
  }

  if (!hasAuth) {
    return null; 
  }

  return children;
}

export default AuthGuard