import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Dolah Tour - Phuket's Trusted Travel Experts",
    description: "Get in touch with Dolah Tour for personalized travel planning and local guidance in Phuket, Thailand. Our team is here to help you create unforgettable tropical experiences. Contact us today for expert advice on island tours, accommodations, and more.",
    keywords: "Contact Dolah Tour, Phuket travel agency, Phuket local guide, travel planning, island tours, Thailand vacations, tropical travel experts"
  };
  

export default function Page() {
    return <>
    
        <div className="min-h-screen">
            <section>
                <div className="h-[350px] bg-slate-100 flex justify-center overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1706100579738-663c817699f2?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full object-cover brightness-75" alt="a place in phuket" />
                </div>
            </section>
            <section>
                <div className="h-40 w-40 relative top-[-90px] lg:left-[350px] left-[10%] rounded-full overflow-clip flex justify-end">
                    <img src="/images/contact.jpg" className="w-full object-cover" alt="Somsak Machakul" />
                </div>
            </section>
            <section>
                <div className="text-lg lg:w-[50vw] w-[80vw] mx-auto pb-10">
                    <div className="font-bold text-[42px] leading-relaxed">
                        <div>Somsak Machakun (Dol)</div>
                        <div className="text-sm text-slate-600 font-normal py-2">Local Guide</div>
                    </div>
                    Hi there! I'm Dol, your go-to local guide for all things tropical, especially here in beautiful Phuket, Thailand. I have a deep passion for sharing the beauty, culture, and hidden gems of this incredible place. With years of experience in the travel industry, including time spent working with a top travel agency, I know exactly how to create unforgettable journeys tailored just for you.
                </div>
            </section>
        </div>
    </>
}