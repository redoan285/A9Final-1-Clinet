"use client";
import { Button } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { TbHeartbeat, TbArrowLeft, TbHome } from "react-icons/tb";

const NotFoundPage = () => {
    const router = useRouter();

    return (
        <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center bg-[#f8f9ff] px-6 py-12">
            
            <div className="max-w-md w-full text-center flex flex-col items-center">
                
                {/* Elegant Floating Icon */}
                <div className="h-24 w-24 bg-white rounded-full flex items-center justify-center shadow-sm border border-[#C3C6D7]/50 mb-8 relative">
                    <div className="absolute inset-2 border border-[#004AC6]/10 rounded-full"></div>
                    <TbHeartbeat className="text-[#004AC6] text-5xl" strokeWidth={1.5} />
                </div>

                {/* Minimalist Typography */}
                <h1 className="text-[#0B1C30] font-semibold text-4xl md:text-5xl tracking-tight mb-3 title">
                    Page not found
                </h1>
                
                <p className="text-[#434655] text-base md:text-lg mb-10 leading-relaxed font-light">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>

                
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
                    <Button 
                        onPress={() => router.back()}
                        variant="ghost" 
                        className="bg-white border border-[#C3C6D7] hover:border-[#0B1C30] hover:bg-gray-50 text-[#0B1C30] rounded-2xl h-12 px-6 font-medium transition-colors max-md:w-full"
                    >
                        <TbArrowLeft className="text-lg" />
                        Go Back
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

                {/* Subtle 404 watermark */}
                <div className="mt-16 text-[#C3C6D7]/40 font-bold text-8xl md:text-9xl select-none pointer-events-none">
                    404
                </div>

            </div>
        </div>
    );
};

export default NotFoundPage;