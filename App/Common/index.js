// hàm này dùng để phân đoạn 1 mảng thành nhiều mảng theo chiều dài ở tham số length
export const arraySegment = (arr, number) => {
  let newArrLength = parseInt(arr.length / number);
  // nếu số dư > 0 => chiều dài của những mảng con mới + 1
  newArrLength = arr.length % number > 0 ? newArrLength + 1 : newArrLength;

  const newArr = [];
  for (let i = 0; i < newArrLength; i++) {
    newArr.push(arr.slice(i * number, i * number + number));
  }
  return newArr;
};
