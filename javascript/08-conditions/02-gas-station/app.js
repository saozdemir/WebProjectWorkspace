/**
 * Benzin İstasyonu
 * 1- Dizel     : 24.53
 * 2- Benzin    :22.25
 * 3- LPG       :11.1
 *
 * Müşteriden alınacak bilgiler
 * 1- Yakıt tipi
 * 2- Yüklenecek yakıt litresi
 */

let diesel = 24.53;
let gas = 22.25;
let lpg = 11.1;

const newLine = "\r\n";
const textType = "1- Dizel" + newLine + "2- Benzin" + newLine + "3- LPG";

let type = prompt(textType);
if (type == "1" || type == "2" || type == "3") {
  let liter = Number(prompt("Alacağınız litreyi giriniz"));
  let balance = Number(prompt("Bakiyenizi giriniz"));

  if (type == "1") {
    let amount = diesel * liter;
    if (amount < balance) {
      balance = balance - amount;
      alert(
        "Yakıt alma işlemi başarılı" + newLine + "Kalan bakiye: " + balance
      );
    } else {
      alert(
        "Yetersiz bakiye" +
          newLine +
          "Ödenecek tutar: " +
          amount +
          newLine +
          "Bakiye: " +
          balance +
          newLine +
          "Eksik tutar: " +
          (amount - balance)
      );
    }
  } else if (type == "2") {
    let amount = gas * liter;
    if (amount < balance) {
      balance = balance - amount;
      alert(
        "Yakıt alma işlemi başarılı" + newLine + "Kalan bakiye: " + balance
      );
    } else {
      alert(
        "Yetersiz bakiye" +
          newLine +
          "Ödenecek tutar: " +
          amount +
          newLine +
          "Bakiye: " +
          balance +
          newLine +
          "Eksik tutar: " +
          (amount - balance)
      );
    }
  } else if (type == "3") {
    let amount = lpg * liter;
    if (amount < balance) {
      balance = balance - amount;
      alert(
        "Yakıt alma işlemi başarılı" + newLine + "Kalan bakiye: " + balance
      );
    } else {
      alert(
        "Yetersiz bakiye" +
          newLine +
          "Ödenecek tutar: " +
          amount +
          newLine +
          "Bakiye: " +
          balance +
          newLine +
          "Eksik tutar: " +
          (amount - balance)
      );
    }
  } else {
    alert("Lütfen geçerli bir tip seçiniz.");
  }
} else {
    alert("Lütfen geçerli bir tür seçiniz.")
}
