--合约脚本
result = {}  function Init(t)      result['state'] = true     result['res'] = 'init success'          return result end  function tablenums(t)       count = 0       for k, v in pairs(t) do           count = count + 1      end            return count  end   function saveresult(t)       count1 = tablenums(t)     usernum = (count1 - 5) / 2          savet={}     savet['0']= t['TDstAccountID']     savet['TDstAccountID']= t['TDstAccountID']     savet['TEnginePointer']=t['TEnginePointer']       savet['TTxn'] = t['TTxn']      savet['TEnginePointerHash']= t['TEnginePointerHash']       savet['TTxnHash']=t['TTxnHash']       for i=0, usernum, 2 do          savet['1'] = t[tostring(i)]           savet['2'] = t[tostring(i+1)]           result = scStateStorage(savet)          if( result['state'] == false ) then              return result         end     end          return result end  function foo(t)     result = saveresult(t)      return result end




--lua代码
result = {} 
function Init(t) 
    result['state'] = true
    result['res'] = 'init success'
    
    return result
end

function tablenums(t)  
    count = 0  
    for k, v in pairs(t) do  
        count = count + 1 
    end  
    
    return count 
end 

function saveresult(t)  
    count1 = tablenums(t)
    usernum = (count1 - 5) / 2
    
    savet={}
    savet['0']= t['TDstAccountID']
    savet['TDstAccountID']= t['TDstAccountID']
    savet['TEnginePointer']=t['TEnginePointer']  
    savet['TTxn'] = t['TTxn'] 
    savet['TEnginePointerHash']= t['TEnginePointerHash']  
    savet['TTxnHash']=t['TTxnHash'] 

    for i=0, usernum, 2 do 
        savet['1'] = t[tostring(i)]  
        savet['2'] = t[tostring(i+1)] 

        result = scStateStorage(savet)

        if( result['state'] == false ) then 
            return result
        end
    end    

    return result
end

function foo(t)
    result = saveresult(t)

    return result
end