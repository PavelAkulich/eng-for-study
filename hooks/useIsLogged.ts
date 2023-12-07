import { app } from "@/firebase/config";
import { User, getAuth } from "firebase/auth";
import { useEffect, useState } from "react"

export const useIsLogged = () => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState<User | null>(null)
    useEffect(() => {
        setUser(getAuth(app).currentUser)
        setLoading(false);
    }, [])
    return {loading, user}
}