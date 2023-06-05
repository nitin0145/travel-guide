"use client";

import "./page.css";
import Image from "next/image";
import homeBackground from "./asset/images/homeBackground.jpg"
import React, { useState,useEffect } from 'react';
import axios from "axios";

export default function Home() {
	const [sidebar,setSidebar] = useState(false);
	const [highlights,setHighlights] = useState([]);
	const [categories,setCategories] = useState([]);

const getCategories = async() => {
		await axios.get("https://web-dev.dev.kimo.ai/v1/categories")
		.then((res) => {
			console.log(res.data);	
			setCategories(res.data);
		})
		.catch((err) => {
			console.log(err);
		})
 }	

 const getHighlights = async() => {
		await axios.get("https://web-dev.dev.kimo.ai/v1/highlights")
		.then((res) => {
			console.log(res.data);	
			setHighlights(res.data);
		})
		.catch((err) => {
			console.log(err);
		})
 }	

 useEffect(() => {
	 getHighlights();
	 getCategories();
},[])

	return (
		<main>
			<section className="heroSection">
				<div className="md:p-4 p-0 flex justify-center items-center">
					{/* for web navbar */}
					<nav className="bg-white p-3 xl:w-8/12 w-10/12 rounded-lg hidden md:block">
						<div className="flex justify-between items-center">
							<div className="flex justify-between items-center">
								<h3 className="text-4xl font-semibold">
									Aloha
								</h3>
								<div className="px-5">
									<a href="#" className="mx-2">Home</a>
									<a href="#" className="mx-2">Surfing</a>
									<a href="#" className="mx-2">Hula</a>
									<a href="#" className="mx-2">Vulcano</a>
								</div>
							</div>
							<div>
								<button className="bg-teal-600 py-1.5 px-4 text-sm text-white font-semibold rounded-md">Book a trip</button>
							</div>
						</div>
					</nav>
					{/* for mobile navbar */}
					
					{!sidebar && <nav className="p-2 bg-white w-full block md:hidden">
						<div className="flex justify-between items-center">
							<h3 className="text-3xl font-semibold">
								Aloha
							</h3>
							<div>
								<button className="py-1.5 px-4 text-black font-semibold rounded-md" onClick={()=>setSidebar(true)}>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
										<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
									</svg>
								</button>
							</div>
						</div>
					</nav>}
					{
						sidebar && (
							<div className="sidebarContainer">
								<div className="text-right mt-3">
									<button className="py-1.5 px-4 text-black font-semibold rounded-md" onClick={()=>setSidebar(false)}>
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
											<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
										</svg>
									</button>
								</div>
								<div className="mt-4">
									<ul>
										<li className="ml-6 mb-7 font-mono text-xl">
											<a href="#">Home</a>
										</li>
										<li className="ml-6 mb-7 font-mono text-xl">
											<a href="#">Surffing</a>
										</li>
										<li className="ml-6 mb-7 font-mono text-xl">
											<a href="#">Hula</a>
										</li>
										<li className="ml-6 mb-7 font-mono text-xl">
											<a href="#">Vulcano</a>
										</li>
										<li className="ml-6 mb-7">
											<div >
												<button className="bg-teal-600 py-1.5 px-4 text-sm text-white font-semibold rounded-md">Book a trip</button>
											</div>
										</li>
									</ul>
								</div>
							</div>
						)
					}
				</div>
				<div className="home_bigText">
					<h1>Welcome</h1>
					<h1>to Hawaii</h1>
				</div>
			</section>
			<section className="hightlightSection">
				<div className="container p-5 mb-8 mx-auto">
					<h4 className="text-2xl font-semibold font-mono py-6">Hightlights</h4>
					<div className="flex justify-center flex-wrap -m-4 font-mono">
						{
							highlights?.length > 0 && highlights.map((item:any,index) => {
								return (
									<div className="p-4 xl:w-1/3 lg:w-1/3 md:w-2/3 w-3/3 " key={index}>
										<div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
											<img className="lg:h-48 md:h-36 w-full object-cover object-center" src={item?.image} height={100} width={100} alt="Surfing" />
											<div className="p-4">
												<h1 className="text-xl text-teal-700  font-semibold mb-3">{item?.title}</h1>
												<p>{item?.description}</p>
											</div>
											<div className="text-right px-3 pb-5">
												<button className="rounded-full p-2 bg-teal-100 hover:bg-teal-200">
													<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-teal-700">
														<path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
													</svg>
												</button>
											</div>
										</div>
									</div>
								)
							})
						}
					</div>
				</div>
			</section>
			<section className="categorySection">
				<div className="lg:w-2/3 w-full p-5 mx-auto">
					<div className="grid grid-cols-12 gap-6">
						<div className="lg:col-span-6 col-span-11">
							<h4 className="text-2xl font-semibold font-mono py-6">Categories</h4>
							<div>
								{
									categories?.length > 0  && categories.map((item:any,index) => {
										return (
											<>
											<div className="bg-white p-3 border rounded-lg mb-3">
												<div className="flex justify-between items-center flex-wrap">
													<h5 className="font-mono">{item?.name}</h5>
													<button className="rounded-full p-2">
														<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-teal-700">
															<path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
														</svg>
													</button>
												</div>
											</div>
											</>
										)
									})
								}
							</div>
						</div>
						<div className="lg:col-span-6 col-span-11">
							<h4 className="text-2xl font-semibold font-mono py-6">Travel Guide</h4>
							<div className="bg-white p-5 border rounded-lg mb-3">
								<div className="flex sm:justify-between justify-center items-start flex-wrap-reverse">
									<div className="sm:text-left text-center">
										<h5 className="font-mono text-2xl font-bold">Hadwin Malone</h5>
										<h6 className="font-mono text-base">Guide Since 2012</h6>
										<div className="mt-8">
											<button className="border border-teal-700 text-teal-700 font-semibold px-5 py-1.5 text-sm rounded-lg">Contact</button>
										</div>
									</div>
									<div>
										<Image className="h-36  rounded-full w-36 object-cover object-center" src={homeBackground} height={100} width={100} alt="Surfing" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<footer>
				<div className="bg-[#001919] py-4 px-3">
					<h3 className="text-4xl text-white font-semibold">
						Aloha
					</h3>
				</div>
			</footer>
		</main>
	);
}
