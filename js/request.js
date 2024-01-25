//  Request and Response Data Fetching from Each Methods

/* ====== Common Post Request Function ====== */
async function postRequest(url, options) {
  return await fetch(url, options).then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  });
}

/* ====== Common Put Request Function ====== */
async function putRequest(url, options) {
  return await fetch(url, options).then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  });
}

/* ====== Common Delete Request Function ====== */
async function deleteRequest(url, options) {
  return await fetch(url, options).then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  });
}

/* ====== Common GET Request Function ====== */
async function getRequest(url) {
  return await fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  });
}

//  'https://www.dabipyeung.com/soaply_backend/model/get_products.php?qnt=3'
async function getProducts(qnt) {
  const url = `https://www.dabipyeung.com/soaply_backend/model/get_products.php?qnt=${qnt}`;

  try {
    //데이터 요청 및 응답 시도 : 성공일 경우 첫번째 코드 블럭으로 이동
    const data = await getRequest(url);
    console.log(data);
  } catch (error) {
    // 실패할 경우 두번째 코드블럭으로 이동
    console.log('Error :', error);
  }
}

getProducts(4);
