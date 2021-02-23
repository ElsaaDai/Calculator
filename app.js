function calc(assumed_rent, rent_start_date) {
  let bond_to_pay = 4 * assumed_rent;
  let bond_to_recv = 2280;
  let gap_in_bdgt = assumed_rent - 600;
  let days_overlap = 14 - rent_start_date;
  let rent_overlap = (assumed_rent / 7) * days_overlap;
  let total_fund_left = 10000 - bond_to_pay + bond_to_recv - rent_overlap;
  let fund_left_tocover = total_fund_left / gap_in_bdgt;
  let leftover =
    (fund_left_tocover - 52 + days_overlap / 7) * (assumed_rent - 600);
  return {
    weeks: fund_left_tocover,
    leftover: leftover,
  };
}

const expectedRent = document.getElementById("assumed_rent");
const expectedDate = document.getElementById("movingdate");
//const calcBtn = document.getElementById("calcBtn");
const resultShowwk = document.getElementById("resultwk");
const resultShowleft = document.getElementById("resultleftover");

let eventHandler = (e) => {
  let assumed_rent = expectedRent.value;
  let movingdate = expectedDate.value;
  console.log(assumed_rent, movingdate);
  let result = calc(assumed_rent, movingdate);
  resultShowwk.value = Math.floor(result.weeks);
  resultShowleft.value = Math.round(result.leftover);
};

expectedRent.addEventListener("change", eventHandler);
expectedDate.addEventListener("change", eventHandler);

eventHandler();

/* calcBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let assumed_rent = expectedRent.value;
  console.log(assumed_rent);
  let result = calc(assumed_rent, 1);
  resultShowwk.value = Math.floor(result.weeks);
  resultShowleft.value = Math.round(result.leftover);
});
*/
