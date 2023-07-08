"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from 'react-hot-toast'

export default function LoginPage () {
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    password: ""
  })
  const [buttonDisabled, setbuttonDisabled] = useState(false);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setbuttonDisabled(false)
    } else {
      setbuttonDisabled(true)
    }
  }, [user])
  

  const onLogin = async () => {
    try {
      setLoading(true)
      const response = await axios.post("/api/users/login", user)
      console.log("Login successful", response.data)
      toast.success("Login successful")
      router.push("/profile")
    } catch (error: any) {
      console.log("Login failed", error.message)
      toast.error(error.message);
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="mb-2">{loading ? "Processing..." : "Login"}</h1>
      <hr />
      <label htmlFor="email">E-mail</label>
      <input
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => setUser({
          ...user,
          email: e.target.value
        })}
        placeholder="email"
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({
          ...user,
          password: e.target.value
        })}
        placeholder="password"
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
      />
      <button className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" onClick={onLogin}>login Here</button>
      <Link href="/signup">Visit Signup Page</Link>
    </div>
  )
}