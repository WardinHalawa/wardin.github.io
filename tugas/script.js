let totalHarga = 0;
const hargaSepatu = 299000;

document.querySelectorAll('.beli').forEach(beli => {
  beli.addEventListener('click', () => {
    totalHarga += hargaSepatu;
    document.getElementById('total-harga').innerText = `Rp ${totalHarga.toLocaleString('id-ID')}`;
    document.getElementById('form-pemesanan').style.display = 'block';
  });
});

document.getElementById('form-pesanan').addEventListener('submit', (e) => {
  e.preventDefault();
  const nama = document.getElementById('nama').value;
  const alamat = document.getElementById('alamat').value;
  const nomor = document.getElementById('nomor').value;
  
  localStorage.setItem('pemesanan', JSON.stringify({ nama, alamat, nomor, totalHarga }));
  alert('Pemesanan berhasil!');
  totalHarga = 0;
  document.getElementById('total-harga').innerText = 'Rp 0';
});

document.getElementById('tutup').addEventListener('click', () => {
  document.getElementById('form-pemesanan').style.display = 'none';
});
