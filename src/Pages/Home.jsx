import { useEffect, useState } from "react";
import LOGO from "../assets/Logo_png.png";
import Gold from "../assets/Gold.jpg";
import BTC from "../assets/btc.svg";
import USDT from "../assets/usdt.svg";
import ETH from "../assets/eth.svg";
import TON from "../assets/ton.svg";


export default function Home() {

    const [rows, setRows] = useState([]);

    useEffect(() => {

        const fetchCurrencies = async () => {
            try {
                const response = await fetch(
                    "https://brsapi.ir/Api/Market/Gold_Currency.php?key=BxDJa8e5UrTnhKtdvY7nyK55xMUG5P7J"
                );

                const data = await response.json();

                console.log("API Response:", data);

                const formatted = data.currency.map(item => ({
                    name: item.name,
                    price: Number(item.price).toLocaleString("fa-IR"),
                    change: Number(item.change_value).toLocaleString("fa-IR"),
                    time: item.time,
                }));

                setRows(formatted);

            } catch (error) {
                console.error("API Error:", error);
            }
        };

        fetchCurrencies();

    }, []);

    // تو این قسمت کل دیتارو به دوتا جدول تقسیم کردم
    const mid = Math.ceil(rows.length / 2);
    const rightTable = rows.slice(0, mid);
    const leftTable = rows.slice(mid);

    return (
        <div className="bg-gray-100 min-h-screen pt-5 flex flex-col items-center">
            {/* header */}
            <div className="header border border-gray-600 rounded-tl-4xl rounded-br-4xl rounded-sm w-[calc(80%-80px)] h-20 bg-gray-50 mx-auto shadow-2xl">
                <div className="headerInside flex flex-row items-center w-full">

                    <nav className="flex flex-row-reverse gap-6 list-none w-5/6 justify-start ps-30">
                        <li className="relative cursor-pointer hover:text-green-700 font-['Tahoma']">خانه</li>
                        <li className="relative cursor-pointer hover:text-green-700 font-['Tahoma']">قیمت ارز</li>
                        <li className="relative cursor-pointer hover:text-green-700 font-['Tahoma']">درباره ما</li>
                        <li className="relative cursor-pointer hover:text-green-700 font-['Tahoma']">تماس با ما</li>
                    </nav>

                    <div className="logo w-1/6 flex items-center justify-end py-2 pr-6">
                        <img src={LOGO} alt="Logo" className="w-[60px]" />
                    </div>

                </div>
            </div>

            {/* main Section */}
            <div className="mainSection mt-10  w-[75%] rounded-2xl">

                <div className="title">
                    <p className="text-center text-2xl  p-5"> قیمت های لحظه ای طلا و ارز</p>
                </div>

                <div className="tables flex flex-row">
                    <div className="tableLeft w-1/2 bg-amber-50 m-5 rounded-2xl">

                        <div className="firstRow flex flex-row-reverse justify-between">
                            <p className="border-s border-white bg-blue-700 text-white h-10 w-full text-center pt-1 rounded-tr-2xl">ارز</p>
                            <p className="border-s border-white bg-blue-700 text-white h-10 w-full text-center pt-1">قیمت</p>
                            <p className="border-s border-white bg-blue-700 text-white h-10 w-full text-center pt-1">مقدار افزایش</p>
                            <p className="bg-blue-700 text-white h-10 w-full text-center pt-1 rounded-tl-2xl">آخرین بروزرسانی</p>
                        </div>
                        {leftTable.map((row, index) => {
                            const globalIndex = index + mid;
                            return (
                                <div key={globalIndex} className={`firstRow flex flex-row-reverse justify-between ${globalIndex % 2 === 0 ? "bg-gray-200" : "bg-gray-100"}`}>
                                    <p className="border-s border-white h-10 w-full text-center pt-1">{row.name}</p>
                                    <p className="border-s border-white h-10 w-full text-center pt-1">{row.price}</p>
                                    <p className="border-s border-white h-10 w-full text-center pt-1">{row.change}</p>
                                    <p className="h-10 w-full text-center pt-1">{row.time}</p>
                                </div>
                            );
                        })}

                    </div>

                    <div className="tableRight w-1/2 bg-amber-50 m-5 rounded-2xl">
                        <div className="firstRow flex flex-row-reverse justify-between">
                            <p className="border-s border-white bg-blue-700 text-white h-10 w-full text-center pt-1 rounded-tr-2xl">ارز</p>
                            <p className="border-s border-white bg-blue-700 text-white h-10 w-full text-center pt-1">قیمت</p>
                            <p className="border-s border-white bg-blue-700 text-white h-10 w-full text-center pt-1">مقدار افزایش</p>
                            <p className="bg-blue-700 text-white h-10 w-full text-center pt-1 rounded-tl-2xl">آخرین بروزرسانی</p>
                        </div>

                        {rightTable.map((row, index) => (
                            <div key={index} className={`firstRow flex flex-row-reverse justify-between ${index % 2 === 0 ? "bg-gray-200" : "bg-gray-100"}`}>
                                <p className="border-s border-white h-10 w-full text-center pt-1">{row.name}</p>
                                <p className="border-s border-white h-10 w-full text-center pt-1">{row.price}</p>
                                <p className="border-s border-white h-10 w-full text-center pt-1">{row.change}</p>
                                <p className="h-10 w-full text-center pt-1">{row.time}</p>
                            </div>
                        ))}

                    </div>



                </div>

            </div>


                        {/* Iran Gold Price */}
            <div className="goldPrice flex flex-row justify-between w-full gap-5 px-[12%] mt-20">
                <div className="box1 w-1/4 h-40 bg-gray-100 rounded-xl border border-gray-500 relative">

                    <div className="boxHeader w-full h-13 bg-blue-200 rounded-t-xl relative">
                        <img src={Gold} alt="Gold Photo" className="absolute left-1/2 top-12 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white p-px shadow-md " />
                    </div>
                    <p className=" text-center mt-10">قیمت سکه امامی : <span className="text-red-600 font-bold">۱۵۰۰۰</span> تومان</p>

                </div>
                <div className="box1 w-1/4 h-40 bg-gray-100 rounded-xl border border-gray-500 relative">

                    <div className="boxHeader w-full h-13 bg-blue-200 rounded-t-xl relative">
                        <img src={Gold} alt="Gold Photo" className="absolute left-1/2 top-12 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white p-px shadow-md " />
                    </div>
                    <p className=" text-center mt-10">قیمت نیم امامی : <span className="text-red-600 font-bold">۱۵۰۰۰</span> تومان</p>

                </div>
                <div className="box1 w-1/4 h-40 bg-gray-100 rounded-xl border border-gray-500 relative">

                    <div className="boxHeader w-full h-13 bg-blue-200 rounded-t-xl relative">
                        <img src={Gold} alt="Gold Photo" className="absolute left-1/2 top-12 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white p-px shadow-md " />
                    </div>
                    <p className=" text-center mt-10">قیمت ربع سکه  : <span className="text-red-600 font-bold">۱۵۰۰۰</span> تومان</p>

                </div>
                <div className="box1 w-1/4 h-40 bg-gray-100 rounded-xl border border-gray-500 relative">

                    <div className="boxHeader w-full h-13 bg-blue-200 rounded-t-xl relative">
                        <img src={Gold} alt="Gold Photo" className="absolute left-1/2 top-12 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white p-px shadow-md " />
                    </div>
                    <p className=" text-center mt-10">قیمت طلا ۱۸ عیار  : <span className="text-red-600 font-bold">۱۵۰۰۰</span> تومان</p>

                </div>

            </div>




                        {/* Crypto */}
            <div className="goldPrice flex flex-row-reverse justify-between w-full gap-5 px-[12%] mt-20">
                <div className="box1 w-1/4 h-40 bg-gray-100 rounded-xl border border-gray-500 relative">

                    <div className="boxHeader w-full h-13 bg-blue-300 rounded-t-xl relative">
                        <img src={BTC} alt="Gold Photo" className="absolute left-1/2 top-12 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white p-px shadow-md " />
                    </div>
                    <p className=" text-center mt-10">قیمت بیت کوین : <span className="text-red-600 font-bold">۱۵۰۰۰</span> تومان</p>

                </div>
                <div className="box1 w-1/4 h-40 bg-gray-100 rounded-xl border border-gray-500 relative">

                    <div className="boxHeader w-full h-13 bg-blue-300 rounded-t-xl relative">
                        <img src={USDT} alt="Gold Photo" className="absolute left-1/2 top-12 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white p-px shadow-md " />
                    </div>
                    <p className=" text-center mt-10">قیمت تتر : <span className="text-red-600 font-bold">۱۵۰۰۰</span> تومان</p>

                </div>
                <div className="box1 w-1/4 h-40 bg-gray-100 rounded-xl border border-gray-500 relative">

                    <div className="boxHeader w-full h-13 bg-blue-300 rounded-t-xl relative">
                        <img src={ETH} alt="Gold Photo" className="absolute left-1/2 top-12 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white p-px shadow-md " />
                    </div>
                    <p className=" text-center mt-10">قیمت اتریوم  : <span className="text-red-600 font-bold">۱۵۰۰۰</span> تومان</p>

                </div>
                <div className="box1 w-1/4 h-40 bg-gray-100 rounded-xl border border-gray-500 relative">

                    <div className="boxHeader w-full h-13 bg-blue-300 rounded-t-xl relative">
                        <img src={TON} alt="Gold Photo" className="absolute left-1/2 top-12 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white p-px shadow-md " />
                    </div>
                    <p className=" text-center mt-10">قیمت تون <span className="text-red-600 font-bold">۱۵۰۰۰</span> تومان</p>

                </div>

            </div>



            <div className="secondSection mt-10 border-t border-black w-full h-20 bg-gray-200">
                <footer className="h-16 flex items-center justify-center">
                    <p className="text-center"> Designed by
                        <a href="https://homayonazar.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"> Homayonazar</a>
                    </p>
                </footer>
            </div>

        </div>
    );
}