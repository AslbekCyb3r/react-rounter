import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'

export default function Abount() {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <Header active='/about' />

            <div className="flex-grow flex items-center justify-center px-4 py-10 mt-10">
                <div className="max-w-3xl w-full bg-white rounded-2xl shadow-lg p-8 md:p-12">

                    <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
                        Biz haqimizda
                    </h1>

                    <div className="space-y-4 text-gray-600 text-base leading-relaxed">

                        <p>
                            Bizning platformamiz sizga qulay, tez va ishonchli xizmat
                            ko‘rsatish maqsadida yaratilgan. Biz foydalanuvchilarga
                            sifatli mahsulot va xizmatlarni oddiy va tushunarli tarzda
                            taqdim etishga intilamiz.
                        </p>

                        <p>
                            Biz uchun eng muhim qadriyatlar — bu ishonch, sifat va
                            mijozlar mamnuniyati. Har bir foydalanuvchining ehtiyojini
                            inobatga olib, doimiy ravishda xizmatlarimizni yaxshilab
                            boramiz.
                        </p>

                        <p>
                            Bizning jamoa zamonaviy texnologiyalar va innovatsion
                            yondashuvlar orqali sizga eng yaxshi tajribani taqdim
                            etishga harakat qiladi.
                        </p>

                        <p>
                            Siz bilan birga rivojlanish — bizning asosiy maqsadimiz.
                        </p>

                    </div>

                </div>
            </div>

            <Footer />
        </div>
    )
}