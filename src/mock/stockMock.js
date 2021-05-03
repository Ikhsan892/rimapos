import uuid from 'uuid/v1';
import mock from 'utils/mock';

mock.onGet('/api/stock/menipis').reply(200, {
  stocks: [
    {
      id: uuid(),
      nama_barang: 'Minyak Goreng Sania 2L',
      total_barang: 2,
      satuan_barang: 'Pcs'
    },
    {
      id: uuid(),
      nama_barang: 'Wafer Tango kecil',
      total_barang: 5,
      satuan_barang: 'Pcs'
    }
  ]
});
