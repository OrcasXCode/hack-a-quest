import React from 'react'
import { ArrowRight } from 'lucide-react'
import mask from "../../src/assets/mask.png"


export function Login() {
  return (
    <section  style={{fontFamily:'hack'}} className=" relative h-screen bg-black">
       
      <div className=" grid grid-cols-1 lg:grid-cols-2">
        <img
            className=" h-[200px] ml-[100px] w-[200px] sm:mx-auto  lg:h-[500px] lg:w-[500px] rounded-md object-cover lg:ml-[150px]"
            src={mask}
            alt=""
        />

        <div className="flex items-center justify-center  px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
           
            <div id="wrap">
               <h2  id="glitch" className="text-3xl font-bold leading-tight text-white sm:text-4xl">Sign in</h2>
            </div>
            <p className="mt-2 text-sm text-gray-200">
             To access the warfare arena, please log in.
            </p>
            <form action="#" method="POST" className="mt-8">
              <div className="space-y-5">
                <div>
                  <label htmlFor="" className="text-base font-medium text-white">
                    {' '}
                    Email address <sup>*</sup>{' '}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="" className="text-base font-medium text-white">
                      {' '}
                      Team ID <sup>*</sup>{' '}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Team Id"
                    ></input>
                  </div>
                </div>
                <div>
                  <button type='button' id="btn-two" class="btn" style={{fontFamily:'hack',marginTop:'30px'}}>Login <ArrowRight className='ml-2' size={16} /></button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
