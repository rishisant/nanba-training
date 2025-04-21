import React from "react";

const Footer = () => {
    return (
        <footer className="bg-black text-gold text-sm py-8 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
                <div>
                    <h2 className="text-lg font-semibold text-white">THE BEST RESTAURANT</h2>
                    <p className="text-gray-400 mt-2">
                        東京都港区麻布十番の辺り<br />
                        営業時間：7:00〜23:00（L.O.22:30）<br />
                        Tel：0120-143-043
                    </p>
                </div>
                <div>
                    <h3 className="text-white font-semibold">SNS</h3>
                    <div className="flex space-x-4 mt-2">
                        <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
                        <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
                    </div>
                </div>
            </div>
            <div className="text-center text-gray-600 text-xs mt-6">
                &copy; {new Date().getFullYear()} THE BEST RESTAURANT. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
