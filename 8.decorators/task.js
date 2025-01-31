//Задача № 1
function cachingDecoratorNew(func) {
    let cache = []; 

    function wrapper(...args) {
        const hash = md5(args); 
        let objectInCache = cache.find((item) => item.hash === hash); 

        if (objectInCache) {
            console.log("Из кеша: " + objectInCache.value);
            return "Из кеша: " + objectInCache.value;
        }

        let result = func(...args); 
        cache.push({ hash, value: result }); 

        if (cache.length > 5) {
            cache.shift(); 
        }

        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;
    }

    return wrapper;
}

        

//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutID; 
    let isFirstCall = true; 

    function wrapper(...args) {
        wrapper.allCount++; 

  
        if (isFirstCall) {
            console.log("Первый вызов:", args);
            func.apply(this, args); 
            wrapper.count++; 
            isFirstCall = false; 
            return;
        }

        if (timeoutID) {
            clearTimeout(timeoutID);
        }

        timeoutID = setTimeout(() => {
            console.log("Таймаут сработал:", args);
            func.apply(this, args); 
            wrapper.count++; 
        }, delay);
    }

    wrapper.count = 0; 
    wrapper.allCount = 0; 

    return wrapper;
}

