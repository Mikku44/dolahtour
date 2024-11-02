export default function Card ({imgURL,title,description}:any) {
    return <>
    <div className="w-[350px] h-[500px]">
        <div className="h-[300px]"><img src={imgURL} className="w-full h-full object-cover" alt="" /></div>
        <div className="grid gap-2 mt-5">
            <div className="font-bold text-zinc-900 text-2xl">{title || "Title"}</div>
            <div className="text-[16px] text-zinc-600 line-clamp-3 text-ellipsis">{description || "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolorem voluptas rem eos cupiditate sunt debitis aperiam aliquid, accusamus explicabo totam. Nesciunt omnis consequatur dolor voluptate quisquam, tempore illum asperiores."}</div>
        </div>
    </div>
    </>
}