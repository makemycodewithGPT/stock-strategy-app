{\rtf1\ansi\ansicpg949\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import React from "react";\
\
export default function BuyInputPanel() \{\
  return (\
    <div className="bg-white p-4 rounded-2xl shadow">\
      <div className="mb-2 font-semibold">\uc0\u47588 \u49688  \u51077 \u47141 </div>\
      <div className="flex gap-2">\
        <input type="text" placeholder="\uc0\u49884 \u51216  (ex. 2025-04-11 10:30)" className="flex-1 px-3 py-2 border rounded-xl" />\
        <input type="number" placeholder="\uc0\u44552 \u50529 " className="w-32 px-3 py-2 border rounded-xl" />\
        <button className="bg-green-500 text-white px-4 py-2 rounded-2xl">\uc0\u44592 \u47197 </button>\
      </div>\
    </div>\
  );\
\}}