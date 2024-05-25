import { FaGripfire } from "react-icons/fa";
import { motion } from "framer-motion";
import news1 from '../../../assets/images/news1.jpg';
import news2 from '../../../assets/images/news2.jpg';
import news3 from '../../../assets/images/news3.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const RecentNews = () => {

    useEffect(() => {
        AOS.init();
    }, []);


    return (
        <div>
            <div className="container mx-auto px-5 pt-5 pb-32">
                <div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="flex justify-center">
                        <div className="flex ">
                            <div>
                                <FaGripfire className="text-2xl text-[#03a9fc]"></FaGripfire>
                            </div>
                            <p className="mb-4 text-xl text-center">Apartment GURU</p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <h1 className="mb-5 text-3xl lg:text-6xl font-bold text-center">LATEST <span className='text-[#03a9fc]'>NEWS</span></h1>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="flex justify-center"
                    >
                        <p className="mb-5 text-center lg:w-1/2">Your Attention Is Changed The Part Of World.Give a helping hand to those who need it!</p>
                    </motion.div>

                    <div className="flex justify-center">
                        <hr className="w-1/3 lg:w-1/6 h-2 rounded-full bg-[#03a9fc]" />
                    </div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
                    <div 
                        className="bg-white shadow-2xl">
                        <img src={news1} alt="" />
                        <div>
                            <div className="bg-[#03a9fc] text-white text-xl font-bold p-5">
                                <p>Publish Date: November 15, 2023</p>
                            </div>
                            <div className="px-8 pb-8">
                                <h2 className="text-3xl font-bold my-3">How to Find a Good Real Estate Agent</h2>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi alias nihil amet repellat nisi? Sint qui a officiis ipsum eum incidunt voluptatibus facilis, laboriosam id aliquid facere pariatur dolores impedit!</p>

                                <button className="btn mt-5 bg-[#03a9fc] border-[#03a9fc] text-white hover:bg-white hover:text-[#03a9fc] hover:border-[#03a9fc]">Read More</button>
                            </div>
                        </div>
                    </div>

                    <div 
                        className="bg-white shadow-2xl">
                        <div>
                            <div className="bg-[#03a9fc] text-white text-xl font-bold p-5">
                                <p>Publish Date: December 3, 2023</p>
                            </div>
                            <div className="px-8 pb-8">
                                <h2 className="text-3xl font-bold my-3">15 Ways to Negotiate Your Lease Price</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, totam officia! Odio et consequuntur ea voluptates rerum veritatis id delectus ipsam dolorem consequatur eius illum sit repudiandae, reiciendis atque eos?</p>

                                <button className="btn mt-5 bg-[#03a9fc] border-[#03a9fc] text-white hover:bg-white hover:text-[#03a9fc] hover:border-[#03a9fc]">Read More</button>
                            </div>
                        </div>

                        <img src={news2} alt="" />
                    </div>


                    <div 
                        className="bg-white shadow-2xl">
                        <img src={news3} alt="" />
                        <div>
                            <div className="bg-[#03a9fc] text-white text-xl font-bold p-5">
                                <p>Publish Date: January 20, 2024</p>
                            </div>
                            <div className="px-8 pb-8">
                                <h2 className="text-3xl font-bold my-3">Houses Designed by Interior Experts</h2>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur atque libero, autem accusamus natus fugit odio non harum assumenda aliquam est suscipit nesciunt iusto. Deserunt tenetur vero sapiente mollitia harum?</p>

                                <button className="btn mt-5 bg-[#03a9fc] border-[#03a9fc] text-white hover:bg-white hover:text-[#03a9fc] hover:border-[#03a9fc]">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentNews;