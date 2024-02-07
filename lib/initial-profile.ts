import { currentUser, redirectToSignIn } from "@clerk/nextjs"
import { db } from "@/lib/db"
import { User } from "lucide-react";

export const initialProfile = async () => {
    const user = await currentUser();

    if (!user) return redirectToSignIn


    const profile = await db.profile.findUnique({
        where: {
            userId: user.id
        }
    })

    if (profile) return profile;


    const newProfile = await 
}
