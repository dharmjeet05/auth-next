"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { axios } from "axios";

export default function LoginPage () {
  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const onLogin = async () => {

  }
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Login</h1>
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
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
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
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      />
      <button className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" onClick={onLogin}>login Here</button>
      <Link href="/signup">Visit Signup Page</Link>
    </div>
  )
}