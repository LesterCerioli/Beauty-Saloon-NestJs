import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface SaloonCardProps{
    img: string | StaticImport;
}

export function SaloonCardDetails({ img }: SaloonCardProps){
    return (
        <section className="w-fit mt-6 rounded-xl p-1 border-1 hover:bg-slate-300">
            <div className="relative">
                <Image priority className="h-40 w-52 rounded-xl" src={img} alt="" />
                <button className="absolute top-4 right-4 w-8 h-8 bg-[#FEF1F2] text-red-500 rounded-full flex items-center justify-center">
                    <CiHeart size={30} />
                </button>
            </div>
            <div className="flex gap-2 mt-4 text-btn-primary-color text-xs">
                <span>cabelo</span>
                <span>unhas</span>
                <span>maquiagem</span>
            </div>
            <div>
                <h5 className="font-bold">Salão de Beleza</h5>
                <p className="text-sm text-[#50555C]">Rua A, 999 - Bairro X</p>
            </div>
            <div className="flex flex-row items-center gap-2">
                <FaStar className="text-yellow-400" size={16} />
                <p className="font-bold text-xs">5.0</p>
                <p>(3.1k)</p>
            </div>
        </section>
    );
};