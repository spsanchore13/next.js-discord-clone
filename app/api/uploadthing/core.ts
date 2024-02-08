import { auth } from "@clerk/nextjs"
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

const handleAuth = () => {
    const userId = auth()
    if (!userId) {
        throw new Error("Unauthenticated")
        return { userId: userId }
    }
}

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
   serverImage:f
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;