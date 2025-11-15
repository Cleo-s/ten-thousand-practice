function fakeFetchMaybeError(message, shouldFail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("Server error"));
      } else {
        resolve(message);
      }
    }, 500);
  });
}

function fakeFetch(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
}

async function Run() {
    const text = await fakeFetch('Vladik Pidor', 1000);
    console.log(text);
}

Run()

async function loadData() {
    const first = await fakeFetch('Step 1', 500);
    const second = await fakeFetch('Step 2', 500);

    console.log('First: ', first);
    console.log('Second: ', second);
}

loadData()

async function loadSafe() {
    try {
        const response = await fakeFetchMaybeError('Data', false)
        
        console.log('Data: ', response);
        return response;
    }
    catch (e) {
        console.error('Fetching has failed:', e.message);

        throw e;
    }
}

loadSafe()