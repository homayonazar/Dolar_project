import { useEffect } from "react";
import LOGO from "../assets/Logo_png.png"

const rows = [
    { name: "دلار", price: "۱۲۲.۰۰۰", change: "۵۰۰۰", time: "۲۰:۱۵" },
    { name: "دلار", price: "۱۲۲.۰۰۰", change: "۵۰۰۰", time: "۲۰:۱۵" },
    { name: "دلار", price: "۱۲۲.۰۰۰", change: "۵۰۰۰", time: "۲۰:۱۵" },
    { name: "دلار", price: "۱۲۲.۰۰۰", change: "۵۰۰۰", time: "۲۰:۱۵" },
];

export default function Home() {

    useEffect(() => {

        const fetchCurrencies = async () => {
            try {
                const response = await fetch(
                    "https://brsapi.ir/Api/Market/Gold_Currency.php?key=BxDJa8e5UrTnhKtdvY7nyK55xMUG5P7J"
                );

                const data = await response.json();

                console.log("API Response:", data);

            } catch (error) {
                console.error("API Error:", error);
            }
        };

        fetchCurrencies();

    }, []);

    return (
        <div>
            <div className="bg-gray-100 h-[1000px] pt-5 flex flex-col justify-center items-center">
                <div className="header border border-gray-600 rounded-tl-4xl rounded-br-4xl rounded-sm w-[calc(80%-80px)] h-20 bg-gray-50  mx-auto shadow-2xl">
                    <div className="headerInside flex flex-row items-center w-full">

                        <nav className="flex flex-row-reverse gap-6 list-none  w-5/6 justify-start ps-30">
                            <li className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0
                                after:w-0 after:h-[2px] after:bg-green-700 hover:after:w-full after:transition-all after:duration-300">
                                خانه
                            </li>
                            <li className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0
                                after:w-0 after:h-[2px] after:bg-green-700 hover:after:w-full after:transition-all after:duration-300">قیمت ارز</li>
                            <li className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0
                                after:w-0 after:h-[2px] after:bg-green-700 hover:after:w-full after:transition-all after:duration-300">درباره ما</li>
                            <li className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0
                                after:w-0 after:h-[2px] after:bg-green-700 hover:after:w-full after:transition-all after:duration-300">تماس با ما</li>
                        </nav>

                        <div className="logo w-1/6 flex items-center justify-end py-2 pr-6">
                            <img src={LOGO} alt="" className="w-[60px] " />
                        </div>

                    </div>




                </div>

                <div className="mainSection mt-10 bg-amber-200 w-[75%] h-[1000px] rounded-2xl">
                    <div className="title">
                        <p className="text-center text-2xl font-[tahoma] p-5  ">قیمت های لحظه ای طلا و ارز</p>
                    </div>

                    <div className="tables flex flex-row ">

                        <div className="tableRight w-1/2 h-[500px] bg-amber-50 m-5 rounded-2xl">
                            <div className="firstRow flex flex-row-reverse justify-between">
                                <p className=" border-s border-white bg-blue-700 text-white h-10 w-full text-center pt-1 rounded-tr-2xl">ارز</p>
                                <p className=" border-s border-white bg-blue-700 text-white h-10 w-full text-center pt-1">قیمت</p>
                                <p className=" border-s border-white bg-blue-700 text-white h-10 w-full text-center pt-1">مقدار افزایش</p>
                                <p className=" bg-blue-700 text-white h-10 w-full text-center pt-1 rounded-tl-2xl">آخرین بروزرسانی</p>
                            </div>
                            {rows.map((row, index) => (
                                // for use odd & even row Gray200 and Gray100 we must use index%2===0 
                                <div key={index} className={`firstRow flex flex-row-reverse justify-between ${index % 2 === 0 ? "bg-gray-200" : "bg-gray-100"}`}>
                                    <p className="border-s border-white h-10 w-full text-center pt-1">{row.name}</p>
                                    <p className="border-s border-white h-10 w-full text-center pt-1">{row.price}</p>
                                    <p className="border-s border-white h-10 w-full text-center pt-1">{row.change}</p>
                                    <p className="h-10 w-full text-center pt-1">{row.time}</p>
                                </div>
                            ))}


                        </div>
                        <div className="tableLeft w-1/2 h-[500px] bg-amber-50 m-5 rounded-2xl">

                            <div className="firstRow flex flex-row-reverse justify-between">
                                <p className="border-s border-white bg-blue-700 text-white h-10 w-full text-center pt-1 rounded-tr-2xl">ارز</p>
                                <p className="border-s border-white bg-blue-700 text-white h-10 w-full text-center pt-1">قیمت</p>
                                <p className="border-s border-white bg-blue-700 text-white h-10 w-full text-center pt-1">مقدار افزایش</p>
                                <p className="bg-blue-700 text-white h-10 w-full text-center pt-1 rounded-tl-2xl">آخرین بروزرسانی</p>
                            </div>
                            {rows.map((row, index) => (
                                // for use odd & even row Gray200 and Gray100 we must use index%2===0 
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


            </div>
        </div>
    );
}