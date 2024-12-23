"use client"
import { useParams } from "next/navigation";

export default function User(){
    const { user } = useParams();
    return(
     <>
        { user }
     </>
    );
}