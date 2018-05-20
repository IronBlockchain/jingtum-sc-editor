export default "result = {} \n" +
"function Init(t) \n" +
"    result['state'] = true\n" +
"    result['res'] = 'init success'\n" +
"    \n" +
"    return result\n" +
"end\n" +
"\n" +
"function tablenums(t)  \n" +
"    count = 0  \n" +
"    for k, v in pairs(t) do  \n" +
"        count = count + 1 \n" +
"    end  \n" +
"    \n" +
"    return count \n" +
"end \n" +
"\n" +
"function saveresult(t)  \n" +
"    count1 = tablenums(t)\n" +
"    usernum = (count1 - 5) / 2\n" +
"    \n" +
"    savet={}\n" +
"    savet['0']= t['TDstAccountID']\n" +
"    savet['TDstAccountID']= t['TDstAccountID']\n" +
"    savet['TEnginePointer']=t['TEnginePointer']  \n" +
"    savet['TTxn'] = t['TTxn'] \n" +
"    savet['TEnginePointerHash']= t['TEnginePointerHash']  \n" +
"    savet['TTxnHash']=t['TTxnHash'] \n" +
"\n" +
"    for i=0, usernum, 2 do \n" +
"        savet['1'] = t[tostring(i)]  \n" +
"        savet['2'] = t[tostring(i+1)] \n" +
"\n" +
"        result = scStateStorage(savet)\n" +
"\n" +
"        if( result['state'] == false ) then \n" +
"            return result\n" +
"        end\n" +
"    end    \n" +
"\n" +
"    return result\n" +
"end\n" +
"\n" +
"function foo(t)\n" +
"    result = saveresult(t)\n" +
"\n" +
"    return result\n" +
"end"