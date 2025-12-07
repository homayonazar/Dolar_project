import { useEffect } from "react";
import LOGO from "../assets/Logo_png.png"

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
            <div className="bg-gray-100 h-[1000px] pt-5">
                <div className="header border border-gray-600 rounded-tl-4xl rounded-br-4xl rounded-sm w-[calc(80%-80px)] h-20 bg-gray-50  mx-auto shadow-2xl">
                    <div className="headerInside flex flex-row items-center w-full">

                        <nav className="flex flex-row-reverse gap-6 list-none  w-5/6 justify-center ps-30">
                            <li>خانه</li>
                            <li>قیمت ارز</li>
                            <li>درباره ما</li>
                            <li>تماس با ما</li>
                        </nav>

                        <div className="logo w-1/6 flex items-center justify-end py-2 pr-6">
                            <img src={LOGO} alt="" className="w-[60px] " />
                        </div>

                    </div>




                </div>

                <div className="mainSection ms-[180px] me-[180px] mt-10">
                    Main section started
                </div>


            </div>
        </div>
    );
}