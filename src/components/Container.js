import React,{useEffect,useState} from "react"
import { Routes,Route } from "react-router-dom"
import SignUpPage from "./SignUpPage"
import LoginPage from "./LoginPage"
import HomePage from "./HomePage"
import PrivacyPolicy from "./PrivacyPolicy"
import ContactPage from "./ContactPage.js"
import CompanyInfo from "./CompanyInfo.js"
import Category from "./Category.js"
import MovieList from "./MovieList"
import Bollywood from "./Bollywood"
import Nollywood from "./Nollywood"
import Hollywood from "./Hollywood"
import Chinese from "./Chinese"
import Korea from "./Korea"

import PeopleList from "./PeopleList.js"
import BollywoodActor from "./BollywoodActor.js"
import BollywoodActress from "./BollywoodActress.js"
import NollywoodActor from "./NollywoodActor.js"
import NollywoodActress from "./NollywoodActress.js"
import HollywoodActor from "./HollywoodActor.js"
import HollywoodActress from "./HollywoodActress.js"
import ChineseActor from "./ChineseActor.js"
import ChineseActress from "./ChineseActress.js"
import KoreaActor from "./KoreaActor.js"
import KoreaActress from "./KoreaActress.js"

import ProducerList from "./ProducerList.js"
import BollywoodProducer from "./BollywoodProducer.js"
import NollywoodProducer from "./NollywoodProducer.js"
import HollywoodProducer from "./HollywoodProducer.js"
import KoreaProducer from "./KoreaProducer.js"
import ChineseProducer from "./ChineseProducer.js"

import DirectorList from "./DirectorList.js"
import BollywoodDirector from "./BollywoodDirector.js"
import NollywoodDirector from "./NollywoodDirector.js"
import HollywoodDirector from "./HollywoodDirector.js"
import ChineseDirector from "./ChineseDirector.js"
import KoreaDirector from "./KoreaDirector.js"

function Container() {

    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/sign-up" element={<SignUpPage />} />
                <Route path="/sign-in" element={<LoginPage />} />

                <Route path ="/category" element ={<Category />} />
                <Route path="/category/movie-list" element={<MovieList />} />
                <Route path ="/category/movie-list/bollywood" element ={<Bollywood />} />
                <Route path ="/category/movie-list/nollywood" element ={<Nollywood />} />
                <Route path ="/category/movie-list/hollywood" element ={<Hollywood />} />
                <Route path ="/category/movie-list/chinese" element ={<Chinese />} />
                <Route path ="/category/movie-list/korea" element ={<Korea />} />

                <Route path ="/category/people-list" element ={<PeopleList />} />
                <Route path="/category/people-list/bollywood-actor" element ={<BollywoodActor />} />
                <Route path="/category/people-list/bollywood-actress" element={<BollywoodActress />} />
                <Route path="/category/people-list/nollywood-actor" element={<NollywoodActor />} />
                <Route path="/category/people-list/nollywood-actress" element={<NollywoodActress />} />
                <Route path="/category/people-list/hollywood-actor" element={<HollywoodActor />} />
                <Route path="/category/people-list/hollywood-actress" element={<HollywoodActress />} />
                <Route path="/category/people-list/chinese-actor" element={<ChineseActor />} />
                <Route path="/category/people-list/chinese-actress" element={<ChineseActress />} />
                <Route path="/category/people-list/korea-actor" element={<KoreaActor />} />
                <Route path="/category/people-list/korea-actress" element={<KoreaActress />} />
                

                <Route path ="/category/producer-list" element ={<ProducerList />} />
                <Route path ="/category/producer-list/bollywood" element ={<BollywoodProducer />} />
                <Route path ="/category/producer-list/nollywood" element ={<NollywoodProducer />} />
                <Route path ="/category/producer-list/hollywood" element ={<HollywoodProducer />} />
                <Route path ="/category/producer-list/korea" element ={<KoreaProducer />} />
                <Route path ="/category/producer-list/chinese" element ={<ChineseProducer />} />

                <Route path ="/category/director-list" element ={<DirectorList />} />
                <Route path ="/category/director-list/bollywood" element ={<BollywoodDirector />} />
                <Route path ="/category/director-list/nollywood" element ={<NollywoodDirector />} />
                <Route path ="/category/director-list/hollywood" element ={<HollywoodDirector />} />
                <Route path ="/category/director-list/chinese" element ={<ChineseDirector />} />
                <Route path ="/category/director-list/korea" element ={<KoreaDirector />} />

                <Route path ="/privacy-policy" element ={<PrivacyPolicy />} />
                <Route path ="/contact-page" element ={<ContactPage />} />
                <Route path ="/company-info" element ={<CompanyInfo />} />
            </Routes>
        </>
    )
}

export default Container