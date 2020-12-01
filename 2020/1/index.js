"use strict";
// import { find4 } from "../../helpmodule.js";
// console.log(find4);
console.log(getInput().length);
console.log(getTESTInput().length);
var testInputArr = getTESTInput();
var inputArr = getInput();
var getAResult = function (inputArr) {
    return inputArr.reduce(function (answer, next, i, arr) {
        var match = arr.find(function (el) { return parseInt(el) + parseInt(next) === 2020; });
        if (match)
            return { first: parseInt(match), second: parseInt(next) };
        else
            return (answer);
    }, { first: 0, second: 0 });
};
var testResult = getAResult(testInputArr);
var aResult = getAResult(inputArr);
console.log("test a:", testResult ? (testResult.first || 0) * (testResult.second || 0) : undefined);
console.log("a:", aResult ? (aResult.first || 0) * (aResult.second || 0) : undefined);
var getBResult = function (inputArr) {
    return inputArr.reduce(function (answer, next, i, arr) {
        var match = arr.find(function (el) {
            return arr.find(function (possibleThird) {
                return parseInt(el) + parseInt(next) + parseInt(possibleThird) === 2020;
            });
        });
        if (match)
            return {
                first: parseInt(match),
                second: parseInt(next),
                third: 2020 - parseInt(match) - parseInt(next)
            };
        else
            return answer;
    }, { first: 0, second: 0, third: 0 });
};
var testBResult = getBResult(testInputArr);
var bResult = getBResult(inputArr);
console.log("test b:", testBResult ? (testBResult.first || 0) * (testBResult.second || 0) * (testBResult.third || 0) : undefined);
console.log("b:", bResult ? (bResult.first || 0) * (bResult.second || 0) * (bResult.third || 0) : undefined);
function getTESTInput() {
    return ("1721\n    979\n    366\n    299\n    675\n    1456".split("\n"));
}
function getInput() {
    return ("1632\n1438\n1811\n1943\n1883\n1698\n1976\n1972\n1794\n1726\n1850\n1789\n1524\n1701\n1454\n1594\n1655\n1018\n1828\n1867\n1959\n1541\n1596\n1998\n1916\n1894\n1727\n1812\n1800\n1897\n1534\n1712\n1825\n1629\n1827\n81\n1855\n1621\n1694\n1663\n1793\n1685\n1616\n1899\n1688\n1652\n1719\n1589\n1649\n1742\n1905\n922\n1695\n1747\n1989\n1968\n1678\n1709\n1938\n1920\n1429\n1556\n2005\n1728\n1484\n1746\n1702\n1456\n1917\n1670\n1433\n1538\n1806\n1667\n1505\n963\n1478\n2003\n1955\n1689\n1490\n1523\n1615\n1784\n1624\n583\n1465\n1443\n1489\n1873\n1485\n1773\n1704\n352\n505\n1705\n1844\n1599\n1778\n1846\n1533\n1535\n1965\n1987\n828\n1755\n1823\n1639\n1981\n1763\n1758\n1819\n1569\n1580\n358\n1786\n1964\n1604\n1805\n1822\n1941\n1993\n1939\n1975\n1966\n1852\n1310\n1687\n1718\n641\n1715\n1995\n1603\n1444\n1641\n1961\n1536\n1771\n1267\n1749\n1944\n1519\n1445\n1818\n1558\n1922\n1452\n1901\n1915\n1957\n1840\n1785\n1946\n1683\n1918\n1847\n1690\n1716\n1627\n1571\n1985\n1455\n435\n1856\n1527\n1660\n1555\n1557\n1591\n1906\n1646\n1656\n1620\n1618\n1598\n1606\n1808\n1509\n1551\n1723\n1835\n1610\n1820\n1942\n1767\n1549\n1607\n1781\n1612\n1864\n2007\n1908\n1650\n1449\n1886\n1878\n1895\n1869\n1469\n1507".split("\n"));
}
//# sourceMappingURL=index.js.map