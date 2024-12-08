import React from 'react'
import LinkButton from '../admin/components/Buttons/LinkButton'
import { AiOutlineUser } from 'react-icons/ai'
import { GrCheckboxSelected, GrSelect } from 'react-icons/gr';
import { SiBitcoinsv } from 'react-icons/si';

const Home = () => {
	const steps = [
		{
			id: 1,
			title: "Choose an offer",
			description: "Browse our wide range of offers and pick one that suits you best. It's quick and easy to get started!",
			image: <GrSelect size={50} />, // Replace with real image URLs
		},
		{
			id: 2,
			title: "Complete that offer",
			description: "Follow the instructions to complete the selected offer. This can include tasks like playing games, watching videos, or filling out surveys.",
			image: <GrCheckboxSelected size={50} />, // Replace with real image URLs
		},
		{
			id: 3,
			title: "Earn money",
			description: "Once you’ve successfully completed the offer, your earnings will be added to your balance. Redeem them for cash or gift cards!",
			image: <SiBitcoinsv size={50} />, // Replace with real image URLs
		},
	];

	const steps2 = [
		{
			id: 1,
			title: "Create Account",
			description: "Sign up in just a few seconds and unlock access to exclusive earning opportunities.",
			icon: "📝", // Replace with an SVG or image if needed
		},
		{
			id: 2,
			title: "Complete Offer",
			description: "Explore and complete exciting offers like surveys, games, or app downloads to earn rewards.",
			icon: "🎯", // Replace with an SVG or image if needed
		},
		{
			id: 3,
			title: "Make Money",
			description: "Redeem your rewards easily through various payout options, including cash and gift cards.",
			icon: "💸", // Replace with an SVG or image if needed
		},
	];
	return (
		<div className='w-full max-w-7xl mx-auto space-y-32 pb-10'>
			<div className='flex flex-col gap-5 justify-center items-center'>
				<h1 className='font-semibold text-5xl text-center'>Create an account and <br /> Earn money with <span className='text-green-500 font-semibold'>STARCASH</span></h1>
				<p className='text-gray-400'>Discover an exciting variety of money-making tasks just waiting for you!</p>
				<LinkButton url={'/signin'} Icon={AiOutlineUser} className='bg-green-500 hover:bg-green-600 w-fit'>Create Your account </LinkButton>
			</div>
			<section className=" text-white ">
				<div className=" mx-auto px-6">
					<h2 className="text-center text-3xl md:text-4xl font-bold mb-8">How it works?</h2>
					<p className="text-center text-lg text-gray-400 mb-12">
						Earning money is simple! Follow these three easy steps to start making money today.
					</p>
					<div className="flex flex-col md:flex-row justify-center gap-8">
						{steps.map((step) => (
							<div
								key={step.id}
								className="bg-gray-800 hover:bg-gray-700 transition rounded-lg shadow-md p-6 w-full md:w-1/3 flex flex-col items-center"
							>
								<p className='text-green-500'>{step.image}</p>
								<h3 className="text-xl font-semibold mb-4 mt-5">{step.title}</h3>
								<p className="text-gray-400">{step.description}</p>
							</div>
						))}
					</div>
					<div className="text-center mt-12 flex justify-center">
						<button className="bg-green-500 hover:bg-green-600 text-white duration-300 flex items-center gap-2 py-3 px-6 rounded ">
							<AiOutlineUser />Create Your account
						</button>
					</div>
				</div>
			</section>
			<section className=" text-white">
				<div className="mx-auto px-6 text-center">
					<h2 className="text-3xl md:text-4xl font-bold mb-6">How can you start?</h2>
					<p className="text-gray-400 mb-12">
						Earn money in just three easy steps. Start today and make your free time rewarding!
					</p>
					<div className="flex flex-col md:flex-row justify-center gap-8">
						{steps2.map((step) => (
							<div
								key={step.id}
								className="bg-gray-800 hover:bg-gray-700 transition rounded-lg shadow-md p-6 w-full md:w-1/3 flex flex-col items-center"
							>
								<div
									className={`text-7xl rounded-full h-20 w-20 flex items-center justify-center text-white mb-6`}
								>
									{step.icon}
								</div>
								<h3 className="text-xl font-semibold mb-4">{step.title}</h3>
								<p className="text-gray-400">{step.description}</p>
							</div>
						))}
					</div>
					<div className="text-center mt-12 flex justify-center">
						<button className="bg-green-500 hover:bg-green-600 text-white duration-300 flex items-center gap-2 py-3 px-6 rounded ">
							<AiOutlineUser />Create Your account
						</button>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Home