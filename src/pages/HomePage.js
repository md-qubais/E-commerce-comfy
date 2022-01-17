import React from 'react'
import { FeaturedProducts, Hero, Services, Contact } from '../components'
import { useUserContext } from "../context/user_context";
const HomePage = () => {
  const {myUser}=useUserContext();
  return <main>
    <Hero myUser={myUser}></Hero>
    <FeaturedProducts></FeaturedProducts>
    <Services></Services>
    <Contact></Contact>
  </main>
}

export default HomePage
