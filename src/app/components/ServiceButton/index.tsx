interface ServiceButtonProps{
    id: number;
    title: string;
    img: string;
    link: string;
}

export function ServiceButton({ id, title, img, link }: ServiceButtonProps){
    return (
        <div key={id} className="flex flex-col items-center">
            <button className="flex items-center justify-center w-16 h-16 rounded-full bg-[#E1F5FA] text-btn-primary-color]
                hover:border-2 border-solid border-btn-primary-color">
                <img src={img} alt="" />
            </button>
        <p className="mt-2 font-semibold text-[11px] text-btn-primary-color mobile-sm:text-sm">{title}</p>
    </div>
    );
}