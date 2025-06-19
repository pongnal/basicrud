"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";


export default function Dashboard() {
 const { data: session, status } = useSession();


 if (status === "loading") {
   return <div>Loading...</div>;
 }


 if (status === "unauthenticated") {
   redirect("/login");
 }


 return (
   <div className="p-8">
     <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
     <div className="flex items-center gap-4">
       {session?.user?.image && (
         <img
           src={session.user.image}
           alt="Profile"
           className="w-12 h-12 rounded-full"
         />
       )}
       <div>
         <p className="font-medium">Welcome, {session?.user?.name}!</p>
         <p className="text-gray-600">{session?.user?.email}</p>
       </div>
     </div>
   </div>
 );
}