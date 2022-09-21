function submitForm(){
  var nama = document.getElementById("namaPeserta").value;
  var ttl = document.getElementById("ttl").value;
  var unit = document.getElementById("unit").value;
  var desa = document.getElementById("desa").value;
  var kec = document.getElementById("kec").value;
  var telf = document.getElementById("telf").value;

  var letters = /^[A-Za-z]+$/;
  var numbers = /^[0-9]+$/;
  var word = /^[A-Za-z0-9]+$/;

  if (nama == "" || ttl == "" || unit == "" || desa == "" || kec == "" || telf == ""){
    alert("Lengkapi Semua Isian Data");
  } else if (!letters.test(nama)){
    alert("Isian nama diharuskan menggunakan Abjad");
  } else if (!word.test(ttl)){
    alert("Isian Tempat, Tanggal Lahir diharuskan menggunakan Abjad dan Angka");
  }else if (!letters.test(desa)){
    alert("Isian kelurahan/desa diharuskan menggunakan Abjad");
  } else if (!letters.test(kec)){
    alert("Isian kecamatan diharuskan menggunakan Abjad");
  } else if (!numbers.test(telf)){
    alert("Isian Nomer Telepon diharuskan menggunakan Angka");
  } else {
    alert("Pendaftaran Berhasil, Silahkan Bersenang-senang:)")
  }
}