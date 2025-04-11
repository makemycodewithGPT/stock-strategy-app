{\rtf1\ansi\ansicpg949\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import React from "react";\
\
export default function TradeTable() \{\
  return (\
    <div className="bg-white p-4 rounded-2xl shadow">\
      <div className="mb-2 font-semibold">\uc0\u47588 \u49688 /\u47588 \u46020  \u44592 \u47197 </div>\
      <table className="w-full text-sm">\
        <thead>\
          <tr className="bg-gray-100 text-left">\
            <th className="px-2 py-1">\uc0\u47588 \u49688 \u49884 \u51216 </th>\
            <th className="px-2 py-1">\uc0\u47588 \u46020 \u49884 \u51216 </th>\
            <th className="px-2 py-1">\uc0\u47588 \u49688 \u44552 \u50529 </th>\
            <th className="px-2 py-1">\uc0\u47588 \u46020 \u44552 \u50529 </th>\
            <th className="px-2 py-1">\uc0\u49688 \u51061 \u47456 </th>\
          </tr>\
        </thead>\
        <tbody>\
          \{/* \uc0\u51076 \u49884  \u45936 \u51060 \u53552  */\}\
          <tr>\
            <td className="px-2 py-1">2025-04-11 10:30</td>\
            <td className="px-2 py-1">2025-04-11 11:00</td>\
            <td className="px-2 py-1">100000</td>\
            <td className="px-2 py-1">105000</td>\
            <td className="px-2 py-1 text-green-600">+5%</td>\
          </tr>\
        </tbody>\
      </table>\
    </div>\
  );\
\}}