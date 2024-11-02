export default function Footer() {
    return <>
        <div className="bg-zinc-800 text-white">
            <div className="flex justify-between px-5 py-10">
                <div className="">
                    <div className="font-bold">LOGO</div>
                    <div className="font-thin">Travel agency</div>
                </div>

                <div className="flex gap-10 ">
                    <div className="">
                        <div className="font-bold">Get in Touch</div>
                        <div className="underline">coverblack12345@gmail.com</div>
                        <div className="">(+66) 815699391</div>
                    </div>
                    <div className="">
                        <div className="font-bold">Visit Us</div>
                        <div className="">Moo 5, Koh Kaew Subdistrict,<br />
                            Muang District, Phuket 83000,<br />
                            Thailand</div>
                    </div>
                </div>
            </div>
            <div className="bg-zinc-700 py-4 px-2 ">
                <div className="text-[10px]">Designed with<span> <a href="http://" className="underline">Ten</a></span>
                </div>
            </div>
        </div>
    </>
}