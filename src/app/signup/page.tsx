"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function SignupPage () {
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    password: "",
    username: ""
  })
  const [buttonDisabled, setbuttonDisabled] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
      setbuttonDisabled(false)
    } else {
      setbuttonDisabled(true)
    }
  }, [user])

  const onSignup = async () => {
    try {
      setLoading(true)
      const response = await axios.post("/api/users/signup", user)
      console.log("Signup successful", response.data)
      router.push("/login")
    } catch (error: any) {
      console.log("Signup Failed", error.message)
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="mb-2">{loading ? "Processing" : "Sign Up"}</h1>
      <hr />
      <label htmlFor="username">Username</label>
      <input
        id="username"
        type="text"
        value={user.username}
        onChange={(e) => setUser({
          ...user,
          username: e.target.value
        })}
        placeholder="username"
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
      />
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
      <button
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        onClick={onSignup}
      >
        {buttonDisabled ? "No Signup" : "Sign Up"}
      </button>
      <Link href="/login">Visit Login Page</Link>
    </div>
  )
}