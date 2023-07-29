import React from "react";
import Link from "next/link";
import BGHome from '../picture/BGHome';
import Start from "../component/Start";



const Home = () => {
  return (
    <section className='flex items-center justify-center ' id='home'>
        <div>
            <BGHome/>
        </div>
        <div className="w-1/2 ml-20 items-center transform: translateY(-20px)">
            <div className="mb-10 info-container">
                <div className='font-bold leading-[1.5] lg:text-[110px]'>
                    <h1>Info</h1>
                </div>
                <div>
                    <p>
                        Descriptionfjkbhasdklghadfkjghaejlkgfhsakejghkaejhgakdhgkajdhgakjhgjkadhgjkaerfghajkghafjkghajkgaehj<br/>
                        wiofdjuaeoi;grhwo;iggowe;ifghs;oeih<br/>
                        dsfkghadkjfghskjdghskdjlghskjl
                    </p>
                </div>
            </div>
            <div className="circle">
                <Start/>
            </div>
        </div>   
    </section>
  );
};

export default Home;