"use client";
import { useEffect } from "react";
import { Button } from "@heroui/react";
import Link from "next/link";
import { TbBandage, TbRefresh, TbHome } from "react-icons/tb";

const ErrorPage = () => {
    
    
    return (
        <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center bg-[#f8f9ff] px-6 py-12">
            
            <div className="max-w-md w-full text-center flex flex-col items-center">
                
                {/* Elegant Floating Icon */}
                <div className="h-24 w-24 bg-white rounded-full flex items-center justify-center shadow-sm border border-[#C3C6D7]/50 mb-8 relative">
                    <div className="absolute inset-2 border border-[#004AC6]/10 rounded-full"></div>
                    <TbBandage className="text-[#004AC6] text-5xl" strokeWidth={1.5} />
                </div>

                {/* Minimalist Typography */}
                <h1 className="text-[#0B1C30] font-semibold text-3xl md:text-4xl tracking-tight mb-3 title">
                    Something went wrong
                </h1>
                
                <p className="text-[#434655] text-base md:text-lg mb-10 leading-relaxed font-light">
                    We&apos;re experiencing a temporary technical hiccup. Our team is already patching things up to get your portal back to normal.
                </p>

                
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
                   
                    <Button 
                        onPress={() => reset()}
                        variant="ghost" 
                        className="bg-white border border-[#C3C6D7] hover:border-[#0B1C30] hover:bg-gray-50 text-[#0B1C30] rounded-2xl h-12 px-6 font-medium transition-colors max-md:w-full"
                    >
                        <TbRefresh className="text-lg" />
                        Try Again
                    </Button>

                    <Link href="/" className="w-full sm:w-auto">
                        <Button 
                            className="w-full bg-[#004AC6] text-white rounded-2xl h-12 px-8 font-medium shadow-sm shadow-[#004AC6]/20"
                        >
                            <TbHome className="text-lg" />
                            Return Home
                        </Button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default ErrorPage;