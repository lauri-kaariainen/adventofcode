(()=>{const n=n=>{for(;"function"==typeof n;)n=n();return n},e=n=>n.reduce(((n,t)=>n.concat(Array.isArray(t)?e(t):t)),[]),t=n=>n.reduce(((n,e)=>(n[e]=void 0===n[e]?1:n[e]+=1,n)),{});function r(...n){"undefined"!=typeof console&&(console.log(...n),document.querySelector("pre").innerHTML+="<br/>"+n.join(" "))}console.log(p().length),console.log(i().length);i();const y=p(),x=n=>n.map((n=>{const e=n.match(/(\d+),(\d+) -> (\d+),(\d+)/);return{origin:{x:parseInt(e[1]),y:parseInt(e[2])},target:{x:parseInt(e[3]),y:parseInt(e[4])}}})),o=(n,e,t=[])=>{const r=JSON.parse(JSON.stringify(n));if(t.length>1e3)return console.warn("force stopped loop, probably not correct answer"),t;if(t.length||t.push(n),r.x===e.x){if(r.y===e.y)return t;r.y<e.y?(t.push({x:r.x,y:r.y+1}),r.y++):(t.push({x:r.x,y:r.y-1}),r.y--)}else r.y===e.y?r.x===e.x?t.push(e):r.x<e.x?(t.push({x:r.x+1,y:r.y}),r.x++):(t.push({x:r.x-1,y:r.y}),r.x--):r.x<e.x&&r.y<e.y?(t.push({x:r.x+1,y:r.y+1}),r.x++,r.y++):r.x<e.x&&r.y>e.y?(t.push({x:r.x+1,y:r.y-1}),r.x++,r.y--):r.x>e.x&&r.y>e.y?(t.push({x:r.x-1,y:r.y-1}),r.x--,r.y--):r.x>e.x&&r.y<e.y&&(t.push({x:r.x-1,y:r.y+1}),r.x--,r.y++);return()=>o(r,e,t)},s=y;function i(){return"0,9 -> 5,9\n8,0 -> 0,8\n9,4 -> 3,4\n2,2 -> 2,1\n7,0 -> 7,4\n6,4 -> 2,0\n0,9 -> 2,9\n3,4 -> 1,4\n0,0 -> 8,8\n5,5 -> 8,2".split("\n")}function p(){return"556,286 -> 341,71\n337,201 -> 782,646\n786,780 -> 117,111\n977,864 -> 199,86\n544,127 -> 544,144\n539,471 -> 539,972\n364,765 -> 364,285\n282,325 -> 892,935\n536,941 -> 158,941\n280,39 -> 806,565\n168,662 -> 363,857\n639,676 -> 639,701\n397,809 -> 466,809\n716,118 -> 625,209\n153,582 -> 497,926\n35,706 -> 398,706\n61,41 -> 519,41\n158,557 -> 158,922\n320,177 -> 624,481\n800,779 -> 466,779\n292,270 -> 292,497\n919,17 -> 757,17\n935,520 -> 935,688\n948,480 -> 303,480\n306,811 -> 306,467\n227,582 -> 464,819\n757,807 -> 757,688\n983,12 -> 30,965\n632,262 -> 640,262\n755,314 -> 138,931\n179,599 -> 179,144\n556,246 -> 801,491\n114,218 -> 114,60\n183,70 -> 423,70\n561,661 -> 231,331\n875,738 -> 723,890\n812,828 -> 812,78\n98,707 -> 88,707\n804,979 -> 188,979\n503,178 -> 453,178\n902,678 -> 248,678\n603,618 -> 737,752\n788,735 -> 559,964\n839,134 -> 839,408\n569,356 -> 491,356\n566,543 -> 566,77\n624,386 -> 111,386\n781,109 -> 781,52\n187,709 -> 23,545\n220,123 -> 856,123\n210,528 -> 398,716\n942,935 -> 58,51\n102,13 -> 102,560\n926,588 -> 969,545\n529,117 -> 146,117\n989,211 -> 739,461\n207,201 -> 207,106\n799,876 -> 284,876\n370,773 -> 687,456\n571,972 -> 571,351\n877,910 -> 877,12\n384,205 -> 384,940\n493,915 -> 912,496\n764,412 -> 368,16\n368,220 -> 333,220\n526,271 -> 778,271\n379,203 -> 417,165\n168,577 -> 168,709\n529,808 -> 598,739\n959,506 -> 959,626\n576,89 -> 863,89\n277,412 -> 311,378\n12,19 -> 975,982\n620,951 -> 240,571\n937,206 -> 954,206\n231,177 -> 918,864\n499,825 -> 315,825\n289,876 -> 289,302\n408,569 -> 46,207\n461,838 -> 91,838\n281,294 -> 281,737\n61,541 -> 61,747\n768,857 -> 768,276\n782,97 -> 33,97\n544,563 -> 251,856\n731,216 -> 731,19\n767,142 -> 242,667\n469,612 -> 952,129\n508,363 -> 508,540\n614,845 -> 614,739\n342,362 -> 235,362\n880,703 -> 880,653\n942,669 -> 651,669\n884,976 -> 884,924\n158,822 -> 945,35\n510,716 -> 884,342\n523,946 -> 73,496\n334,430 -> 157,253\n593,77 -> 105,565\n269,132 -> 243,132\n902,529 -> 180,529\n554,767 -> 554,938\n164,615 -> 425,615\n51,713 -> 51,341\n428,606 -> 89,945\n600,402 -> 600,185\n774,550 -> 774,207\n465,204 -> 697,436\n577,719 -> 255,719\n647,990 -> 970,990\n649,170 -> 886,407\n428,503 -> 428,394\n381,608 -> 381,444\n778,175 -> 778,121\n795,379 -> 379,379\n929,792 -> 218,81\n504,837 -> 504,449\n212,216 -> 212,76\n446,744 -> 446,116\n824,247 -> 577,247\n77,214 -> 553,214\n913,234 -> 913,670\n949,24 -> 43,930\n733,758 -> 733,62\n628,659 -> 962,659\n172,749 -> 755,749\n901,717 -> 184,717\n457,578 -> 923,112\n943,11 -> 912,11\n728,597 -> 116,597\n465,134 -> 465,159\n170,953 -> 170,533\n231,715 -> 231,219\n209,187 -> 984,962\n798,515 -> 798,601\n479,123 -> 479,148\n360,387 -> 360,356\n962,818 -> 962,770\n852,607 -> 852,886\n159,838 -> 967,30\n823,659 -> 642,478\n374,893 -> 545,893\n248,819 -> 248,978\n894,473 -> 894,47\n182,975 -> 278,879\n75,248 -> 913,248\n969,533 -> 969,827\n18,40 -> 842,864\n972,909 -> 220,157\n378,159 -> 571,159\n875,478 -> 238,478\n95,807 -> 264,638\n418,68 -> 418,387\n784,548 -> 332,548\n365,354 -> 365,836\n731,615 -> 235,615\n885,104 -> 513,476\n816,47 -> 385,478\n626,741 -> 626,499\n371,372 -> 920,921\n83,150 -> 922,989\n623,520 -> 645,498\n612,305 -> 561,305\n845,149 -> 788,149\n914,35 -> 829,35\n143,165 -> 143,520\n164,218 -> 266,218\n118,644 -> 397,644\n59,942 -> 970,31\n616,774 -> 970,420\n30,468 -> 874,468\n454,208 -> 454,536\n524,488 -> 524,931\n54,479 -> 560,479\n815,591 -> 815,813\n959,971 -> 30,42\n23,181 -> 149,181\n841,294 -> 841,681\n34,47 -> 367,47\n913,590 -> 913,374\n690,64 -> 690,672\n541,112 -> 781,112\n380,843 -> 687,536\n303,330 -> 465,330\n408,403 -> 326,403\n352,962 -> 925,389\n121,882 -> 873,130\n979,294 -> 29,294\n228,688 -> 228,738\n845,930 -> 901,930\n726,189 -> 27,888\n223,888 -> 989,888\n483,632 -> 483,321\n606,810 -> 820,810\n225,31 -> 225,342\n841,18 -> 841,417\n375,185 -> 375,413\n641,189 -> 307,523\n126,900 -> 126,990\n530,220 -> 690,220\n496,263 -> 154,263\n140,503 -> 419,503\n349,733 -> 349,819\n43,29 -> 928,914\n683,842 -> 683,489\n113,634 -> 806,634\n771,145 -> 130,145\n88,467 -> 908,467\n328,642 -> 328,795\n986,191 -> 218,959\n857,166 -> 857,594\n950,763 -> 229,42\n263,940 -> 101,940\n689,182 -> 689,835\n241,237 -> 733,237\n965,150 -> 279,150\n871,242 -> 474,639\n688,947 -> 688,11\n319,738 -> 945,112\n21,853 -> 853,21\n69,533 -> 69,741\n492,981 -> 492,210\n942,69 -> 249,69\n63,364 -> 203,364\n340,505 -> 15,505\n41,43 -> 979,981\n395,623 -> 217,801\n540,37 -> 540,381\n64,112 -> 882,930\n887,212 -> 217,882\n168,159 -> 108,159\n117,22 -> 959,864\n413,500 -> 413,616\n775,597 -> 962,597\n171,901 -> 143,901\n777,391 -> 41,391\n901,139 -> 70,970\n215,75 -> 215,261\n973,433 -> 786,433\n757,568 -> 612,423\n363,347 -> 185,525\n274,363 -> 274,709\n435,569 -> 880,569\n267,297 -> 86,478\n221,852 -> 985,88\n322,560 -> 322,962\n470,259 -> 470,508\n861,860 -> 843,860\n172,474 -> 172,714\n53,839 -> 499,839\n600,40 -> 600,227\n820,952 -> 99,231\n650,486 -> 586,486\n305,273 -> 305,392\n826,417 -> 826,92\n309,934 -> 309,720\n381,644 -> 381,623\n38,78 -> 38,54\n326,450 -> 173,450\n474,100 -> 474,135\n607,536 -> 192,121\n686,504 -> 164,504\n538,623 -> 429,623\n200,385 -> 933,385\n568,275 -> 31,275\n105,201 -> 706,201\n582,584 -> 827,584\n24,469 -> 24,519\n306,224 -> 32,224\n429,528 -> 304,528\n272,851 -> 272,927\n636,113 -> 636,244\n481,107 -> 783,107\n834,87 -> 175,746\n684,50 -> 61,673\n30,335 -> 739,335\n621,893 -> 266,893\n968,942 -> 968,390\n895,23 -> 136,23\n742,650 -> 756,636\n42,582 -> 368,582\n890,266 -> 786,266\n591,807 -> 921,807\n915,333 -> 915,160\n746,326 -> 826,326\n663,803 -> 34,174\n533,513 -> 692,513\n205,133 -> 935,133\n730,138 -> 58,810\n290,87 -> 290,488\n693,513 -> 693,323\n188,491 -> 188,587\n562,593 -> 562,122\n629,457 -> 629,299\n132,781 -> 381,781\n356,965 -> 356,899\n720,715 -> 487,715\n356,120 -> 954,120\n657,507 -> 323,173\n13,190 -> 742,190\n677,640 -> 491,640\n145,605 -> 366,605\n143,683 -> 681,145\n700,787 -> 557,787\n958,406 -> 212,406\n267,734 -> 705,734\n470,333 -> 257,120\n790,656 -> 523,389\n13,904 -> 898,19\n29,970 -> 961,38\n846,454 -> 846,153\n564,488 -> 98,488\n904,19 -> 60,863\n493,112 -> 472,133\n945,977 -> 141,173\n720,231 -> 720,367\n783,133 -> 783,422\n165,754 -> 165,604\n752,308 -> 715,271\n413,969 -> 431,951\n833,437 -> 833,881\n612,802 -> 612,64\n974,187 -> 543,618\n655,183 -> 675,183\n696,833 -> 906,623\n756,792 -> 756,741\n338,140 -> 878,680\n854,955 -> 241,342\n602,466 -> 326,466\n470,125 -> 464,131\n568,141 -> 43,666\n826,318 -> 783,275\n194,986 -> 194,466\n896,330 -> 621,55\n482,709 -> 704,931\n345,912 -> 345,741\n758,119 -> 758,841\n11,777 -> 11,249\n88,945 -> 795,945\n665,74 -> 124,615\n243,831 -> 249,837\n40,69 -> 720,749\n757,804 -> 757,900\n803,265 -> 336,732\n299,155 -> 758,614\n787,173 -> 172,788\n251,400 -> 251,168\n217,480 -> 486,480\n939,974 -> 21,56\n767,649 -> 378,649\n197,764 -> 561,400\n767,577 -> 579,577\n952,982 -> 28,58\n282,527 -> 282,640\n944,125 -> 184,125\n149,848 -> 351,848\n36,437 -> 350,437\n63,527 -> 764,527\n66,313 -> 302,549\n805,485 -> 577,485\n660,626 -> 903,626\n927,542 -> 897,542\n577,344 -> 577,934\n624,284 -> 624,497\n649,618 -> 153,122\n942,32 -> 227,747\n10,190 -> 10,629\n84,638 -> 470,252\n362,89 -> 362,762\n351,844 -> 916,279\n683,561 -> 497,747\n628,473 -> 103,473\n319,525 -> 782,62\n842,131 -> 551,131\n980,960 -> 51,31\n662,12 -> 666,12\n337,814 -> 337,736\n720,99 -> 760,99\n867,515 -> 867,650\n248,872 -> 142,872\n295,274 -> 298,274\n102,369 -> 102,648\n523,142 -> 54,611\n369,798 -> 978,189\n215,688 -> 835,688\n846,242 -> 786,182\n68,923 -> 68,342\n690,416 -> 559,547\n567,134 -> 278,134\n89,126 -> 846,883\n779,325 -> 389,325\n675,461 -> 675,622\n278,925 -> 953,250\n907,460 -> 519,848\n769,60 -> 592,60\n331,103 -> 331,49\n148,366 -> 148,516\n933,52 -> 332,52\n488,642 -> 488,523\n632,403 -> 83,952\n321,840 -> 756,405\n302,627 -> 907,22\n650,449 -> 650,553\n219,466 -> 219,297\n841,947 -> 78,184\n40,746 -> 712,74\n559,306 -> 895,306\n317,592 -> 317,275\n267,183 -> 267,428\n43,397 -> 43,359\n952,705 -> 952,634\n921,837 -> 258,174\n634,783 -> 656,805\n366,309 -> 224,309\n383,470 -> 526,613\n717,419 -> 717,332\n543,752 -> 543,500\n954,892 -> 101,39\n294,379 -> 583,379\n829,388 -> 829,491\n748,509 -> 283,509\n347,75 -> 467,195\n618,958 -> 371,711\n986,827 -> 213,54\n34,617 -> 982,617\n716,902 -> 716,429\n970,52 -> 107,915\n563,33 -> 563,680\n803,82 -> 136,749\n24,968 -> 273,968\n816,483 -> 620,287\n783,588 -> 623,588\n397,210 -> 988,801\n911,387 -> 911,446\n770,730 -> 786,730\n22,11 -> 982,971\n395,316 -> 151,316\n301,420 -> 301,248\n10,10 -> 989,989\n637,358 -> 247,358\n932,341 -> 642,341\n162,594 -> 162,448\n51,946 -> 396,946\n591,253 -> 958,620\n567,849 -> 567,713\n879,910 -> 879,603\n889,642 -> 437,642\n669,528 -> 945,252\n644,237 -> 774,237\n488,870 -> 738,620\n692,388 -> 959,388\n506,17 -> 701,17\n663,514 -> 663,216\n684,862 -> 289,862\n511,235 -> 519,227\n866,940 -> 153,227\n381,518 -> 87,518\n837,573 -> 181,573\n337,191 -> 337,135\n324,573 -> 945,573\n449,800 -> 390,741\n763,378 -> 763,695\n24,457 -> 444,877\n267,875 -> 798,344\n724,848 -> 395,848\n931,322 -> 931,244\n426,241 -> 280,241\n175,879 -> 175,883\n496,158 -> 560,158\n899,319 -> 805,319\n799,424 -> 563,188\n958,388 -> 958,290\n558,95 -> 314,95\n768,646 -> 961,839\n246,534 -> 246,147\n808,720 -> 808,385\n912,147 -> 912,305\n670,676 -> 776,676\n534,594 -> 696,594\n736,768 -> 736,364\n377,784 -> 377,368\n799,105 -> 978,284\n763,575 -> 763,253\n581,205 -> 581,45\n932,782 -> 678,782\n400,950 -> 936,414\n68,616 -> 897,616\n399,662 -> 291,554\n354,397 -> 354,489\n219,276 -> 862,919\n115,138 -> 195,138\n863,326 -> 863,335\n884,130 -> 271,743\n986,148 -> 234,900\n254,186 -> 973,905\n975,971 -> 672,971\n122,533 -> 19,636\n316,512 -> 219,609\n113,480 -> 716,480\n483,540 -> 845,178".split("\n")}r("a:",Object.values(t(e(x(s).filter((n=>n.origin.x===n.target.x||n.origin.y===n.target.y)).map((e=>n(o(e.origin,e.target))))).map((n=>n.x+","+n.y)))).filter((n=>n>1)).length),r("b:",Object.values(t(e(x(s).map((e=>n(o(e.origin,e.target))))).map((n=>n.x+","+n.y)))).filter((n=>n>1)).length)})();
//# sourceMappingURL=index.js.map
